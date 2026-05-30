export function haptic(type = 'light') {
  if (!navigator.vibrate) return;

  const patterns = {
    light: [10],
    medium: [20],
    heavy: [30],
    success: [10, 50, 10],
    error: [50, 100, 50],
    selection: [5]
  };

  navigator.vibrate(patterns[type] || patterns.light);
}

export function addHapticToButtons() {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .btn, .mode-card, .guest-item, .tool-chip');
    if (btn && !btn.disabled) {
      haptic('light');
    }
  }, { passive: true });
}
