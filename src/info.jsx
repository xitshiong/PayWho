import React from 'react'
import ReactDOM from 'react-dom/client'
import { SparklesText } from './components/ui/sparkles-text'
import './index.css'

function InfoPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Azeret+Mono:wght@400;500&family=Unbounded:wght@700;900&display=swap');

        :root {
          --ink: oklch(12.5% 0.022 58);
          --ink-light: oklch(28% 0.025 58);
          --ink-faint: oklch(45% 0.020 58);
          --paper: oklch(94.8% 0.014 82);
          --paper-dark: oklch(90% 0.018 82);
          --pink: oklch(59% 0.270 358);
          --lime: oklch(93% 0.270 128);
          --cyan: oklch(92% 0.170 183);
          --orange: oklch(72% 0.220 48);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Azeret Mono', monospace;
          background: var(--ink);
          color: var(--paper);
          overflow-x: hidden;
          -webkit-text-size-adjust: 100%;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, oklch(94.8% 0.014 82 / 0.025) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .hero {
          position: relative;
          z-index: 1;
          min-height: 100svh;
          display: grid;
          grid-template-rows: auto 1fr;
          padding: clamp(20px, 4vw, 32px) clamp(20px, 5vw, 56px);
          background:
            radial-gradient(ellipse 55% 55% at 85% 25%, oklch(59% 0.27 358 / 0.10) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 5% 85%, oklch(93% 0.27 128 / 0.07) 0%, transparent 60%),
            var(--ink);
        }

        .hero-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: clamp(40px, 8vh, 72px);
        }

        .nav-link {
          font-size: clamp(0.65rem, 1.4vw, 0.8rem);
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border: 1px solid oklch(94.8% 0.014 82 / 0.25);
          padding: 9px 18px;
          border-radius: 2px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .nav-link:hover {
          border-color: var(--lime);
          color: var(--lime);
        }

        .hero-body {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: center;
          padding-bottom: clamp(48px, 10vh, 96px);
        }

        .hero-text {
          max-width: 480px;
        }

        .hero-kicker {
          font-size: clamp(0.6rem, 1.3vw, 0.72rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: clamp(14px, 2.5vw, 22px);
        }

        h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(4.5rem, 13vw, 11rem);
          line-height: 0.90;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--paper);
          margin-bottom: clamp(24px, 4vw, 40px);
        }

        .hl-pink { color: var(--pink); }

        .hero-tagline {
          font-size: clamp(0.82rem, 1.8vw, 0.98rem);
          color: oklch(94.8% 0.014 82 / 0.58);
          line-height: 1.75;
          max-width: 460px;
          margin-bottom: clamp(28px, 5vw, 44px);
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          height: 3.5rem;
          align-items: center;
          border-radius: 9999px;
          padding-left: 2rem;
          padding-right: 2rem;
          font-family: 'Azeret Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--ink);
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          background-color: transparent;
        }

        .btn-primary-bg {
          overflow: hidden;
          border-radius: 2rem;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(1);
          transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
          border-color: var(--lime);
          background-color: var(--lime);
        }

        .btn-primary-bg-layers {
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          top: -60%;
          aspect-ratio: 1 / 1;
          width: max(200%, 10rem);
        }

        .btn-primary-bg-layer {
          border-radius: 9999px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(0);
        }

        .btn-primary-bg-layer-1 {
          background-color: var(--pink);
        }

        .btn-primary-bg-layer-2 {
          background-color: var(--cyan);
        }

        .btn-primary-bg-layer-3 {
          background-color: var(--lime);
        }

        .btn-primary-inner {
          position: relative;
          pointer-events: none;
          display: block;
        }

        .btn-primary-inner-hover {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transform: translateY(70%);
          pointer-events: none;
          display: block;
        }

        .btn-primary-inner-static {
          pointer-events: none;
          display: block;
          transition:
            transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
            opacity 0.3s linear;
        }

        .btn-primary:hover .btn-primary-inner-static {
          opacity: 0;
          transform: translateY(-70%);
          transition:
            transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
            opacity 0.3s linear;
        }

        .btn-primary:hover .btn-primary-inner-hover {
          opacity: 1;
          transform: translateY(0);
          transition:
            transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
            opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .btn-primary:hover .btn-primary-bg-layer {
          transition:
            transform 1.3s cubic-bezier(0.19, 1, 0.22, 1),
            opacity 0.3s linear;
        }

        .btn-primary:hover .btn-primary-bg-layer-1 {
          transform: scale(1);
        }

        .btn-primary:hover .btn-primary-bg-layer-2 {
          transition-delay: 0.1s;
          transform: scale(1);
        }

        .btn-primary:hover .btn-primary-bg-layer-3 {
          transition-delay: 0.2s;
          transform: scale(1);
        }

        .hero-receipt-wrap {
          display: flex;
          align-items: center;
          gap: 0;
          flex-shrink: 0;
          align-self: center;
          transform: translateY(-70px);
        }

        .hero-simple-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--lime);
          color: var(--ink);
          border-radius: 50%;
          margin: 0 -24px;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .hero-img {
          width: clamp(280px, 32vw, 560px);
          border-radius: 6px;
          box-shadow: 0 24px 80px oklch(12.5% 0.022 58 / 0.7), 0 4px 0 oklch(12.5% 0.022 58 / 0.12);
          display: block;
          position: relative;
          z-index: 1;
        }

        .hero-img-receipt { transform: rotate(-3deg); }
        .hero-img-result { transform: rotate(2deg); }

        .section-how {
          position: relative;
          z-index: 1;
          background: var(--lime);
          padding: clamp(56px, 9vw, 104px) clamp(20px, 5vw, 56px);
        }

        .section-how .inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .how-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .s-label {
          font-size: clamp(0.58rem, 1.1vw, 0.68rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: clamp(8px, 1.5vw, 12px);
        }

        h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 6vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin-bottom: clamp(32px, 6vw, 56px);
        }

        .section-how h2 { color: var(--ink); }
        .massive-title {
          font-size: clamp(4.5rem, 13vw, 11rem);
          line-height: 0.90;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }

        .receipt-card {
          background: var(--paper);
          color: var(--ink);
          font-family: 'Azeret Mono', monospace;
          max-width: 560px;
          padding: 32px 28px 28px;
          border-radius: 2px;
          position: relative;
          box-shadow: 0 8px 40px oklch(12.5% 0.022 58 / 0.18);
        }

        .receipt-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -8px;
          right: -8px;
          height: 16px;
          background:
            repeating-radial-gradient(circle at 50% 0, transparent 0, transparent 6px, var(--ink) 6px, var(--ink) 7px, transparent 7px) center top / 20px 16px no-repeat,
            var(--paper);
          border-radius: 0 0 2px 2px;
        }

        .rc-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 16px;
        }

        .rc-divider {
          font-size: 0.72rem;
          color: var(--ink-faint);
          letter-spacing: 0.04em;
          margin: 12px 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .rc-step {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 12px 16px;
          align-items: start;
          padding: 10px 0;
          border-bottom: 1px dashed oklch(45% 0.02 58 / 0.25);
        }

        .rc-step:last-child { border-bottom: none; }

        .rc-step-num {
          font-family: 'Unbounded', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--ink-faint);
          padding-top: 2px;
        }

        .rc-step-body h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--ink);
          margin-bottom: 3px;
        }

        .rc-step-body p {
          font-size: 0.78rem;
          color: var(--ink-light);
          line-height: 1.55;
        }

        .rc-step-check {
          font-size: 0.85rem;
          color: var(--ink-faint);
          padding-top: 2px;
        }

        .rc-footer {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-faint);
        }

        .rc-footer strong {
          font-weight: 500;
          color: var(--ink);
          font-size: 0.85rem;
        }

        .section-features {
          position: relative;
          z-index: 1;
          background: var(--ink);
          padding: clamp(56px, 9vw, 104px) clamp(20px, 5vw, 56px);
        }

        .section-features .inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .features-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .section-features h2 { color: var(--paper); }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .feature-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 16px 20px;
          align-items: start;
          padding: clamp(20px, 3.5vw, 32px) 0;
          border-bottom: 1px solid oklch(94.8% 0.014 82 / 0.08);
        }

        .feature-item:last-child { border-bottom: none; }

        .feat-num {
          font-family: 'Unbounded', sans-serif;
          font-weight: 900;
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          line-height: 1;
          padding-top: 4px;
        }

        .feat-num.c-pink { color: var(--pink); }
        .feat-num.c-cyan { color: var(--cyan); }
        .feat-num.c-lime { color: var(--lime); }

        .feat-body h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--paper);
          margin-bottom: 6px;
        }

        .feat-body p {
          font-size: clamp(0.75rem, 1.5vw, 0.88rem);
          color: oklch(94.8% 0.014 82 / 0.5);
          line-height: 1.6;
        }

        .section-footer {
          position: relative;
          z-index: 1;
          background: var(--pink);
          padding: clamp(64px, 12vw, 120px) clamp(20px, 5vw, 56px);
          text-align: center;
        }

        .section-footer .inner {
          max-width: 920px;
          margin: 0 auto;
        }

        .section-footer h2 {
          color: var(--paper);
          font-size: clamp(3rem, 9vw, 8rem);
          margin-bottom: clamp(28px, 5vw, 44px);
        }

        .btn-dark {
          display: inline-block;
          background: var(--ink);
          color: var(--paper);
          padding: clamp(14px, 2.5vw, 18px) clamp(32px, 6vw, 52px);
          border-radius: 2px;
          font-family: 'Azeret Mono', monospace;
          font-size: clamp(0.78rem, 1.7vw, 0.92rem);
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s;
          box-shadow: 0 6px 24px oklch(12.5% 0.022 58 / 0.35);
        }

        .btn-dark:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px oklch(12.5% 0.022 58 / 0.5);
        }

        .button {
          cursor: pointer;
          border: none;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: #fff;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: grid;
          place-content: center;
          transition: background 300ms, transform 200ms;
          font-weight: 600;
          transform-origin: left top;
        }

        .button__text {
          position: absolute;
          inset: 0;
          animation: text-rotation 8s linear infinite;
        }

        .button__text > span {
          position: absolute;
          transform: rotate(calc(19deg * var(--index)));
          inset: 7px;
        }

        .button__circle {
          position: relative;
          width: 40px;
          height: 40px;
          overflow: hidden;
          background: #222;
          color: #dc2743;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button__icon--copy {
          position: absolute;
          transform: translate(-150%, 150%);
        }

        .button:hover {
          background: #000;
          transform: scale(1.05);
        }

        .button:hover .button__icon {
          color: #000;
        }

        .button:hover .button__icon:first-child {
          transition: transform 0.3s ease-in-out;
          transform: translate(150%, -150%);
        }

        .button:hover .button__icon--copy {
          transition: transform 0.3s ease-in-out 0.1s;
          transform: translate(0);
        }

        @keyframes text-rotation {
          to { rotate: 360deg; }
        }

        @media (max-width: 900px) {
          .how-inner { grid-template-columns: 1fr; }
          .how-content-right { order: -1; margin-bottom: clamp(24px, 4vw, 40px); }
        }

        @media (max-width: 720px) {
          .hero-body { grid-template-columns: 1fr; padding-bottom: clamp(40px, 8vh, 64px); }
          .hero-receipt-wrap { gap: clamp(10px, 3vw, 20px); justify-content: center; }
          .hero-img { width: clamp(140px, 42vw, 240px); }
          .features-inner { grid-template-columns: 1fr; }
          .features-content-left { margin-bottom: clamp(24px, 4vw, 40px); }
        }

        @media (max-width: 480px) {
          .rc-step { grid-template-columns: auto 1fr; }
          .rc-step-check { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-body">
          <div className="hero-text">
            <p className="hero-kicker">Malaysian bill splitting, done right</p>
            <h1>
              Split<br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <SparklesText
                  text="Bills"
                  colors={{ first: "#FFFFFF", second: "#00FFD1" }}
                  sparklesCount={12}
                  className="inline-block"
                  style={{
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: 'inherit',
                    textTransform: 'inherit'
                  }}
                />
                <style dangerouslySetInnerHTML={{
                  __html: `
                    .hero h1 span.inline-block strong {
                      color: #B8FF00 !important;
                    }
                  `
                }} />
              </span>
              <br />
              <span className="hl-pink">Lah.</span>
            </h1>
            <p className="hero-tagline">
              Snap the receipt. Share a code.<br />
              Everyone picks what they ordered and pays their share.<br />
              No drama, no calculator, no awkward silence.
            </p>
            <a href="/app" className="btn-primary">
              <span className="btn-primary-bg">
                <span className="btn-primary-bg-layers">
                  <span className="btn-primary-bg-layer btn-primary-bg-layer-1"></span>
                  <span className="btn-primary-bg-layer btn-primary-bg-layer-2"></span>
                  <span className="btn-primary-bg-layer btn-primary-bg-layer-3"></span>
                </span>
              </span>
              <span className="btn-primary-inner">
                <span className="btn-primary-inner-static">Start Splitting</span>
                <span className="btn-primary-inner-hover">Start Splitting</span>
              </span>
            </a>
          </div>

          <div className="hero-receipt-wrap">
            <img src="/receipt.png" alt="Physical receipt from restaurant" className="hero-img hero-img-receipt" />
            <div className="hero-simple-arrow">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <img src="/result.png" alt="KakiSplit split bill result screen" className="hero-img hero-img-result" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-how">
        <div className="inner how-inner">
          <div className="how-content-left">
            <div className="receipt-card">
              <div className="rc-header">
                <span>KAKISPLIT SESSION</span>
                <span>MAMAK CORNER</span>
              </div>
              <div className="rc-divider">--------------------------------</div>

              <div className="rc-step">
                <span className="rc-step-num">01</span>
                <div className="rc-step-body">
                  <h3>Host snaps receipt</h3>
                  <p>Photo the bill. Gemini AI reads every item automatically. Name your table, upload your payment QR, get a shareable 4-digit code.</p>
                </div>
                <span className="rc-step-check">✓</span>
              </div>

              <div className="rc-step">
                <span className="rc-step-num">02</span>
                <div className="rc-step-body">
                  <h3>Guests select items</h3>
                  <p>Enter the code. Tap what you ordered. See live who's paying what. No signup, no app download needed.</p>
                </div>
                <span className="rc-step-check">✓</span>
              </div>

              <div className="rc-step">
                <span className="rc-step-num">03</span>
                <div className="rc-step-body">
                  <h3>Pay via QR</h3>
                  <p>Scan the host's DuitNow or Touch 'n Go QR. Transfer exact amount. Mark paid. Everyone sees who settled up.</p>
                </div>
                <span className="rc-step-check">✓</span>
              </div>

              <div className="rc-divider">================================</div>
              <div className="rc-footer">
                <span>Total drama</span>
                <strong>RM 0.00</strong>
              </div>
            </div>
          </div>

          <div className="how-content-right">
            <p className="s-label">Three steps, zero hassle</p>
            <h2 className="massive-title">How it<br />works</h2>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-features">
        <div className="inner features-inner">
          <div className="features-content-left">
            <p className="s-label" style={{ color: 'oklch(94.8% 0.014 82 / 0.58)' }}>Built for real Malaysian dining</p>
            <h2 className="massive-title" style={{ color: 'var(--paper)' }}>Why<br />KakiSplit</h2>
          </div>

          <div className="features-content-right">
            <div className="features-list">
              <div className="feature-item">
                <span className="feat-num c-pink">01</span>
                <div className="feat-body">
                  <h3>AI Receipt Scan</h3>
                  <p>Gemini reads your receipt. No manual typing. Works with messy handwriting and crumpled paper.</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feat-num c-cyan">02</span>
                <div className="feat-body">
                  <h3>No Signup Needed</h3>
                  <p>Enter code and go. No accounts, no passwords, no "forgot password" at 1am.</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feat-num c-lime">03</span>
                <div className="feat-body">
                  <h3>Split Any Way</h3>
                  <p>Each person picks their items. Shared dishes split fairly. Accurate down to the sen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="section-footer">
        <div className="inner">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <h2 style={{ marginBottom: 0 }}>Ready<br />to split?</h2>
            <a href="https://instagram.com/kakisplit" target="_blank" rel="noopener noreferrer" className="button" style={{ textDecoration: 'none' }}>
              <p className="button__text">
                {['I','N','S','T','A','G','R','A','M',' ','I','N','S','T','A','G','R','A','M'].map((char, i) => (
                  <span key={i} style={{ '--index': i }}>{char}</span>
                ))}
              </p>

              <div className="button__circle">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon" width="25">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"></path>
                </svg>
                <svg viewBox="0 0 16 16" fill="none" width="25" xmlns="http://www.w3.org/2000/svg" className="button__icon button__icon--copy">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor"></path>
                </svg>
              </div>
            </a>
          </div>
          <a href="/app" className="btn-dark">Start Splitting Now</a>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('click', (e) => {
            if (e.target.closest('a, button') && navigator.vibrate) navigator.vibrate(10);
          }, { passive: true });
        `
      }} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoPage />
  </React.StrictMode>,
)

