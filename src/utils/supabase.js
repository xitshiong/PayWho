import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function save(d) {
  const { data, error } = await supabase.from("sessions").upsert({
    code: d.code,
    items: d.items,
    qr_image: d.qrImage || null,
    paid: d.paid || {},
    table_name: d.tableName || "My Table",
    table_date: d.tableDate || new Date().toISOString().split("T")[0]
  });
  console.log("SAVE RESULT:", data, error);
}

export async function load(code) {
  const { data, error } = await supabase
    .from("sessions")
    .select("*")
    .eq("code", code)
    .limit(1);
  if (!data || error || data.length === 0) return null;
  const row = data[0];
  const qrImage = localStorage.getItem(`ks_qr_${code}`) || null;
  return {
    code: row.code,
    items: row.items,
    qrImage: row.qr_image || qrImage,
    paid: row.paid,
    tableName: row.table_name,
    tableDate: row.table_date
  };
}

export async function savePaid(itemId, name, code, splitCount = 1) {
  if (!code) code = new URLSearchParams(window.location.search).get("table") || localStorage.getItem("ks_current_code");
  if (!code) return { success: false };

  for (let attempt = 0; attempt < 4; attempt++) {
    const { data, error } = await supabase.from("sessions").select("paid").eq("code", code).single();
    if (error) return { success: false };

    const paid = data?.paid || {};
    if (!paid[itemId]) paid[itemId] = { payers: [], total: splitCount };
    if (!paid[itemId].payers) paid[itemId] = { payers: [paid[itemId]], total: 1 };

    const payers = paid[itemId].payers;
    const total = paid[itemId].total || splitCount;

    if (payers.includes(name)) return { success: true, alreadyPaid: true };
    if (payers.length >= total) return { success: false, full: true };

    payers.push(name);

    const { error: updateError } = await supabase
      .from("sessions")
      .update({ paid })
      .eq("code", code);

    if (!updateError) return { success: true };
    await new Promise(r => setTimeout(r, 100 + Math.random() * 200));
  }
  return { success: false };
}

export async function loadSessionState(code) {
  const { data, error } = await supabase.from("sessions").select("*").eq("code", code).single();
  if (error || !data) return { paid: {}, selections: {} };
  return { paid: data.paid || {}, selections: data.selections || {} };
}

export async function updateGuestSelection(code, name, sel) {
  if (!code || !name) return;
  try {
    const { data } = await supabase.from("sessions").select("selections").eq("code", code).single();
    let selections = data?.selections || {};

    Object.keys(selections).forEach(itemId => {
      if (Array.isArray(selections[itemId])) {
        selections[itemId] = selections[itemId].filter(n => n !== name);
      }
    });

    Object.keys(sel).forEach(itemId => {
      if (sel[itemId]) {
        if (!selections[itemId]) selections[itemId] = [];
        if (!selections[itemId].includes(name)) selections[itemId].push(name);
      }
    });

    await supabase.from("sessions").update({ selections }).eq("code", code);
  } catch (e) {
    console.warn("Selections sync failed", e);
  }
}

export { supabase };
