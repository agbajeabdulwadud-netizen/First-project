# First-project
Hospital Project

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Doctor Cares Hospital — Premier international healthcare facility in Abeokuta, Ogun State delivering patient-centred clinical excellence, 24/7 emergency response, and specialized medical consultations.">
  <meta name="theme-color" content="#0b192c">

  <title>Doctor Cares Hospital | International Healthcare &amp; Medical Facility</title>

  <!-- Google Fonts Preconnect & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       DOCTOR CARES HOSPITAL — DESIGN SYSTEM & MASTER STYLESHEET
       ========================================================================== */
    :root {
      --color-midnight: #0b192c;
      --color-midnight-light: #18283f;
      --color-midnight-deep: #060e18;
      --color-teal: #0f766e;
      --color-teal-hover: #115e59;
      --color-teal-light: #ccfbf1;
      --color-teal-glow: rgba(15, 118, 110, 0.3);
      --color-champagne: #f5eedc;
      --color-champagne-light: #fdfbf7;
      --color-champagne-border: #e6dac1;
      --color-surface-white: #ffffff;
      --color-surface-light: #f8fafc;
      --color-surface-alt: #f1f5f9;
      --color-border: #e2e8f0;
      --color-border-hover: #cbd5e1;
      --color-text-charcoal: #1e293b;
      --color-text-body: #334155;
      --color-text-muted: #64748b;
      --color-error: #dc2626;
      --color-error-bg: #fef2f2;
      --color-success: #15803d;
      --color-success-bg: #f0fdf4;
      --color-focus: #0f766e;

      --font-family-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-family-serif: "Playfair Display", Georgia, serif;

      --font-size-xs: 1.2rem;
      --font-size-sm: 1.4rem;
      --font-size-base: 1.6rem;
      --font-size-md: 1.8rem;
      --font-size-lg: 2.2rem;
      --font-size-xl: 2.8rem;
      --font-size-2xl: 3.6rem;
      --font-size-3xl: 4.8rem;

      --font-weight-regular: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
      --font-weight-extrabold: 800;

      --line-height-tight: 1.2;
      --line-height-normal: 1.6;
      --line-height-relaxed: 1.8;

      --spacing-1: 0.4rem;
      --spacing-2: 0.8rem;
      --spacing-3: 1.2rem;
      --spacing-4: 1.6rem;
      --spacing-5: 2.0rem;
      --spacing-6: 2.4rem;
      --spacing-8: 3.2rem;
      --spacing-10: 4.0rem;
      --spacing-12: 4.8rem;
      --spacing-16: 6.4rem;

      --container-max-width: 1240px;
      --radius-sm: 0.6rem;
      --radius-md: 1.0rem;
      --radius-lg: 1.6rem;
      --radius-full: 9999px;

      --shadow-sm: 0 1px 3px rgba(11, 25, 44, 0.08);
      --shadow-md: 0 4px 14px rgba(11, 25, 44, 0.09);
      --shadow-lg: 0 12px 30px rgba(11, 25, 44, 0.12);

      --transition-fast: 0.15s ease;
      --transition-normal: 0.25s ease;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      scroll-padding-top: 10rem;
      -webkit-text-size-adjust: 100%;
    }

    body {
      font-family: var(--font-family-sans);
      font-size: var(--font-size-base);
      line-height: var(--line-height-normal);
      color: var(--color-text-body);
      background-color: var(--color-surface-white);
      overflow-x: hidden;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ==========================================================================
       HEALTH PRELOADER (Neutral Translucent Shadow — No Colored Tint)
       ========================================================================== */
    .preloader {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.38);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: preloaderAutoDismiss 0.6s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
      pointer-events: auto;
    }

    .preloader.fade-out {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .preloader-card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 2rem;
      padding: 3rem 4.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.4rem;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22), 0 4px 12px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      animation: cardPopIn 0.4s ease-out forwards;
    }

    .preloader-svg {
      width: 9rem;
      height: 12rem;
      filter: drop-shadow(0 4px 12px rgba(15, 118, 110, 0.35));
    }

    .asclepius-rod {
      stroke: #b38b44;
      stroke-width: 4.5;
      stroke-linecap: round;
      animation: rodPulse 2.8s ease-in-out infinite;
    }

    .asclepius-cap {
      fill: #b38b44;
      animation: rodPulse 2.8s ease-in-out infinite;
    }

    .asclepius-snake {
      stroke: var(--color-teal);
      stroke-width: 4.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      stroke-dasharray: 280;
      stroke-dashoffset: 280;
      animation: windSerpent 2.4s cubic-bezier(0.45, 0.05, 0.2, 1) forwards;
    }

    .asclepius-eye {
      fill: #0f766e;
      opacity: 0;
      animation: eyePop 0.4s ease 1.8s forwards;
    }

    .preloader-brand {
      font-size: 2.2rem;
      font-weight: var(--font-weight-extrabold);
      color: var(--color-midnight);
      letter-spacing: -0.02em;
    }

    .preloader-brand span {
      color: var(--color-teal);
    }

    .preloader-subtitle {
      font-size: 1.15rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #64748b;
      font-weight: var(--font-weight-semibold);
    }

    .preloader-progress-track {
      width: 16rem;
      height: 3px;
      background: rgba(0, 0, 0, 0.08);
      border-radius: var(--radius-full);
      overflow: hidden;
      margin-top: 0.4rem;
    }

    .preloader-progress-bar {
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, var(--color-teal), var(--color-teal-hover));
      border-radius: var(--radius-full);
      animation: fillProgress 2.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardPopIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    @keyframes windSerpent {
      0% { stroke-dashoffset: 280; }
      100% { stroke-dashoffset: 0; }
    }

    @keyframes rodPulse {
      0%, 100% { opacity: 0.85; }
      50% { opacity: 1; }
    }

    @keyframes eyePop {
      0% { opacity: 0; transform: scale(0); }
      100% { opacity: 1; transform: scale(1); }
    }

    @keyframes fillProgress {
      0% { width: 0%; }
      50% { width: 65%; }
      100% { width: 100%; }
    }

    @keyframes preloaderAutoDismiss {
      0% { opacity: 1; visibility: visible; }
      99% { opacity: 0; visibility: visible; pointer-events: none; }
      100% { opacity: 0; visibility: hidden; pointer-events: none; }
    }

    img, svg {
      max-width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    a {
      color: var(--color-teal);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    a:hover { color: var(--color-teal-hover); }

    button, input, select, textarea { font: inherit; }

    .skip-link {
      position: absolute;
      top: -100px;
      left: 2rem;
      background: var(--color-teal);
      color: #fff;
      padding: var(--spacing-3) var(--spacing-5);
      border-radius: var(--radius-sm);
      z-index: 1000;
      font-weight: var(--font-weight-bold);
      transition: top var(--transition-fast);
    }
    .skip-link:focus { top: 1.5rem; outline: 3px solid var(--color-midnight); }
    :focus-visible { outline: 3px solid var(--color-focus); outline-offset: 2px; }

    .container { max-width: var(--container-max-width); margin: 0 auto; padding: 0 var(--spacing-5); }
    .section-padding { padding: var(--spacing-16) 0; }
    .bg-light { background-color: var(--color-surface-light); }
    .bg-midnight { background-color: var(--color-midnight); }
    .text-center { text-align: center; }
    .text-white { color: var(--color-surface-white) !important; }
    .text-muted-light { color: #94a3b8 !important; }

    .section-header { max-width: 76rem; margin: 0 auto var(--spacing-12) auto; }
    .section-tag {
      display: inline-block;
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-teal);
      background: var(--color-teal-light);
      padding: var(--spacing-1) var(--spacing-3);
      border-radius: var(--radius-full);
      margin-bottom: var(--spacing-2);
    }
    .tag-champagne { background: var(--color-champagne); color: var(--color-midnight); }
    .section-heading {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-extrabold);
      color: var(--color-midnight);
      line-height: var(--line-height-tight);
      margin-bottom: var(--spacing-3);
    }
    .section-sub { font-size: var(--font-size-md); color: var(--color-text-muted); }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-2);
      padding: 1.2rem 2.4rem;
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      border-radius: var(--radius-full);
      cursor: pointer;
      border: 2px solid transparent;
      transition: all var(--transition-fast);
      text-align: center;
      min-height: 4.4rem;
    }
    .btn-teal { background-color: var(--color-teal); color: #fff; box-shadow: 0 4px 14px var(--color-teal-glow); }
    .btn-teal:hover { background-color: var(--color-teal-hover); color: #fff; transform: translateY(-2px); }
    .btn-secondary { background-color: var(--color-surface-white); color: var(--color-midnight); border-color: var(--color-border); }
    .btn-secondary:hover { background-color: var(--color-surface-alt); color: var(--color-teal); border-color: var(--color-border-hover); }
    .btn-outline { background-color: transparent; color: var(--color-midnight); border-color: var(--color-midnight); }
    .btn-outline:hover { background-color: var(--color-midnight); color: #fff; }
    .btn-outline-white { background-color: transparent; color: #fff; border-color: #fff; }
    .btn-outline-white:hover { background-color: #fff; color: var(--color-midnight); }
    .btn-lg { padding: 1.4rem 3.2rem; font-size: var(--font-size-md); min-height: 5.2rem; }
    .btn-sm { padding: 0.8rem 1.8rem; font-size: var(--font-size-sm); min-height: 3.8rem; }
    .btn-block { width: 100%; }
    .btn-icon { width: 1.8rem; height: 1.8rem; }

    /* ==========================================================================
       INNOVATIVE FLOATING ISLAND CAPSULE HEADER (DESKTOP MODE)
       ========================================================================== */
    .header-outer-wrapper {
      position: sticky;
      top: 1.4rem;
      z-index: 1000;
      width: 100%;
      padding: 0 var(--spacing-5);
      pointer-events: none; /* Allows clicks around the capsule */
    }

    .site-header {
      pointer-events: auto; /* Re-enables clicks inside header */
      max-width: var(--container-max-width);
      margin: 0 auto;
      height: 6.8rem;
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(226, 232, 240, 0.85);
      border-radius: var(--radius-full);
      box-shadow: 0 10px 30px rgba(11, 25, 44, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03);
      transition: all var(--transition-normal);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem 0 2.2rem;
    }

    .site-header.header-compact {
      height: 6.2rem;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 14px 38px rgba(11, 25, 44, 0.12);
      transform: translateY(-0.4rem);
    }

    /* Brand Logo & Emblem */
    .brand-group {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      text-decoration: none;
    }

    .brand-emblem {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-teal), var(--color-midnight));
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: var(--font-weight-extrabold);
      box-shadow: 0 4px 10px var(--color-teal-glow);
    }

    .logo-text-block {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .logo-text {
      font-size: 1.9rem;
      font-weight: var(--font-weight-extrabold);
      color: var(--color-midnight);
      letter-spacing: -0.02em;
    }

    .logo-text span {
      color: var(--color-teal);
    }

    .logo-location-tag {
      font-size: 1rem;
      font-weight: var(--font-weight-semibold);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }

    /* Streamlined Segmented Pill-Rail Navigation */
    .nav-pill-rail {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      list-style: none;
      background: rgba(241, 245, 249, 0.7);
      padding: 0.4rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(226, 232, 240, 0.6);
    }

    .nav-pill-link {
      font-size: 1.35rem;
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-body);
      padding: 0.7rem 1.4rem;
      border-radius: var(--radius-full);
      transition: all var(--transition-fast);
      display: inline-block;
      white-space: nowrap;
    }

    .nav-pill-link:hover {
      color: var(--color-teal);
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(11, 25, 44, 0.05);
    }

    .nav-pill-link.active-link {
      color: var(--color-teal);
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(15, 118, 110, 0.14);
    }

    /* Action Group: Hotline Chip & Pill CTA */
    .header-action-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .header-phone-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      background: #ffffff;
      border: 1px solid var(--color-border);
      padding: 0.7rem 1.4rem;
      border-radius: var(--radius-full);
      font-size: 1.25rem;
      font-weight: var(--font-weight-bold);
      color: var(--color-midnight);
      transition: all var(--transition-fast);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }

    .header-phone-chip:hover {
      border-color: var(--color-teal);
      color: var(--color-teal);
      transform: translateY(-1px);
    }

    .status-pulse-dot {
      width: 0.8rem;
      height: 0.8rem;
      background-color: #22c55e;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      animation: pulseGreen 2s infinite;
    }

    @keyframes pulseGreen {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--spacing-2);
      width: 4.4rem;
      height: 4.4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-radius: var(--radius-sm);
    }
    .menu-toggle .bar { display: block; width: 2.4rem; height: 2px; background-color: var(--color-midnight); border-radius: 2px; transition: all var(--transition-fast); }
    .menu-toggle.is-open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .menu-toggle.is-open .bar:nth-child(2) { opacity: 0; }
    .menu-toggle.is-open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    .nav-backdrop { display: none; }

    /* SECTION 3: HERO */
    .hero-section {
      padding: calc(var(--spacing-12) + 2rem) 0 var(--spacing-16) 0;
      background: linear-gradient(180deg, #f0f7f7 0%, #ffffff 100%);
    }
    .hero-container { display: grid; grid-template-columns: 1.15fr 0.85fr; align-items: center; gap: var(--spacing-10); }
    .hero-eyebrow { display: inline-flex; align-items: center; gap: var(--spacing-2); font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-teal); background-color: var(--color-teal-light); padding: var(--spacing-1) var(--spacing-4); border-radius: var(--radius-full); margin-bottom: var(--spacing-4); }
    .eyebrow-dot { width: 6px; height: 6px; border-radius: var(--radius-full); background-color: var(--color-teal); }
    .hero-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-extrabold); line-height: 1.12; color: var(--color-midnight); margin-bottom: var(--spacing-5); letter-spacing: -0.03em; }
    .hero-accent { color: var(--color-teal); }
    .hero-lead { font-size: var(--font-size-md); line-height: var(--line-height-relaxed); color: var(--color-text-body); margin-bottom: var(--spacing-8); max-width: 54rem; }
    .hero-cta-group { display: flex; flex-wrap: wrap; gap: var(--spacing-4); margin-bottom: var(--spacing-10); }
    .hero-trust-bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-4); padding-top: var(--spacing-6); border-top: 1px solid var(--color-border); }
    .trust-pill { display: flex; align-items: flex-start; gap: var(--spacing-2); }
    .trust-icon { color: var(--color-teal); font-size: 2rem; line-height: 1; }
    .trust-pill strong { display: block; font-size: var(--font-size-sm); color: var(--color-midnight); }
    .trust-pill span { font-size: var(--font-size-xs); color: var(--color-text-muted); }
    .hero-media-wrapper { position: relative; }
    .hero-photo { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); background-color: var(--color-surface-alt); }
    .hero-floating-card { position: absolute; bottom: -2rem; left: -2rem; background-color: var(--color-surface-white); border: 1px solid var(--color-border); padding: var(--spacing-4) var(--spacing-5); border-radius: var(--radius-md); box-shadow: var(--shadow-md); display: flex; align-items: center; gap: var(--spacing-3); }
    .card-icon-box { width: 4rem; height: 4rem; border-radius: var(--radius-full); background-color: var(--color-teal-light); color: var(--color-teal); display: flex; align-items: center; justify-content: center; }
    .stat-num { display: block; font-weight: var(--font-weight-extrabold); color: var(--color-midnight); font-size: var(--font-size-base); }
    .stat-label { font-size: var(--font-size-xs); color: var(--color-text-muted); }

    /* SECTION 4: QUICK-ACCESS */
    .quick-access-section { margin-top: -4rem; position: relative; z-index: 10; }
    .quick-access-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--spacing-4); }
    .qa-card { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-5); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: all var(--transition-fast); text-align: left; }
    .qa-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--color-teal); }
    .qa-card-btn { border: 1px solid var(--color-border); cursor: pointer; width: 100%; }
    .qa-icon { width: 4.4rem; height: 4.4rem; border-radius: var(--radius-md); background-color: var(--color-surface-light); color: var(--color-teal); display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-3); font-size: 2rem; }
    .qa-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: var(--spacing-2); }
    .qa-desc { font-size: var(--font-size-xs); color: var(--color-text-muted); line-height: var(--line-height-normal); margin-bottom: var(--spacing-4); flex-grow: 1; }
    .qa-link { font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); color: var(--color-teal); }

    /* SECTION 5: INTRO */
    .intro-container { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: var(--spacing-12); }
    .intro-media { position: relative; }
    .intro-image { border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%; }
    .experience-badge { position: absolute; bottom: 2rem; right: 2rem; background-color: var(--color-midnight); color: #ffffff; padding: var(--spacing-4) var(--spacing-6); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
    .exp-title { display: block; font-weight: var(--font-weight-bold); font-size: var(--font-size-base); }
    .exp-sub { font-size: var(--font-size-xs); color: #94a3b8; }
    .values-stack { margin-top: var(--spacing-8); display: flex; flex-direction: column; gap: var(--spacing-5); }
    .value-item { display: flex; align-items: flex-start; gap: var(--spacing-4); }
    .value-icon { width: 2.8rem; height: 2.8rem; border-radius: var(--radius-full); background-color: var(--color-teal-light); color: var(--color-teal); display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); flex-shrink: 0; }
    .value-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: 0.2rem; }
    .value-text p { font-size: var(--font-size-sm); color: var(--color-text-body); }

    /* SECTION 6: SERVICES */
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-8); }
    .service-card { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--spacing-8); box-shadow: var(--shadow-sm); transition: all var(--transition-fast); display: flex; flex-direction: column; }
    .service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
    .service-icon-wrap { width: 4.8rem; height: 4.8rem; border-radius: var(--radius-md); background-color: var(--color-teal-light); color: var(--color-teal); display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-5); }
    .service-icon-wrap svg { width: 2.4rem; height: 2.4rem; }
    .service-name { font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: var(--spacing-3); }
    .service-desc { font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: var(--line-height-normal); margin-bottom: var(--spacing-6); flex-grow: 1; }
    .service-action { font-size: var(--font-size-sm); font-weight: var(--font-weight-bold); color: var(--color-teal); }
    .section-footer-cta { margin-top: var(--spacing-12); display: flex; flex-direction: column; align-items: center; gap: var(--spacing-3); }

    /* SECTION 7: DOCTORS */
    .doctors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-8); }
    .doctor-card { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: all var(--transition-fast); }
    .doctor-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
    .doctor-media { height: 30rem; background-color: var(--color-surface-alt); overflow: hidden; }
    .doctor-media img { width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-normal); }
    .doctor-card:hover .doctor-media img { transform: scale(1.03); }
    .doctor-body { padding: var(--spacing-6); display: flex; flex-direction: column; flex-grow: 1; }
    .doctor-dept { font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); text-transform: uppercase; color: var(--color-teal); letter-spacing: 0.08em; margin-bottom: var(--spacing-1); }
    .doctor-name { font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: 0.2rem; }
    .doctor-title { font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-3); }
    .doctor-bio { font-size: var(--font-size-sm); color: var(--color-text-body); line-height: var(--line-height-normal); margin-bottom: var(--spacing-6); flex-grow: 1; }
    .doctor-card-actions { margin-top: auto; }

    /* SECTION 8: WHY US */
    .pillars-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-6); }
    .pillar-card { background-color: var(--color-midnight-light); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: var(--spacing-8) var(--spacing-6); transition: transform var(--transition-fast); }
    .pillar-card:hover { transform: translateY(-4px); }
    .pillar-number { font-size: var(--font-size-2xl); font-weight: var(--font-weight-extrabold); color: var(--color-champagne); line-height: 1; margin-bottom: var(--spacing-4); }
    .pillar-title { font-size: var(--font-size-md); font-weight: var(--font-weight-bold); color: #ffffff; margin-bottom: var(--spacing-3); }
    .pillar-text { font-size: var(--font-size-sm); color: #cbd5e1; line-height: var(--line-height-relaxed); }

    /* SECTION 9: FACILITIES */
    .facilities-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: var(--spacing-12); }
    .facilities-list { list-style: none; margin-top: var(--spacing-6); display: flex; flex-direction: column; gap: var(--spacing-4); }
    .facilities-list li { font-size: var(--font-size-base); color: var(--color-text-body); padding-left: var(--spacing-6); position: relative; }
    .facilities-list li::before { content: "•"; position: absolute; left: 0; color: var(--color-teal); font-size: 2.4rem; line-height: 1; }
    .facility-photo { border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%; }

    /* SECTION 10: INTERNATIONAL */
    .intl-pathway-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-6); margin-bottom: var(--spacing-10); }
    .pathway-step { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-6); position: relative; box-shadow: var(--shadow-sm); }
    .step-badge { display: inline-block; background-color: var(--color-teal); color: #ffffff; font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); padding: 0.2rem 1.0rem; border-radius: var(--radius-full); margin-bottom: var(--spacing-3); }
    .step-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: var(--spacing-2); }
    .step-desc { font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: var(--line-height-normal); }

    /* SECTION 11: FAQS */
    .faq-accordion-container { max-width: 80rem; margin: 0 auto; display: flex; flex-direction: column; gap: var(--spacing-3); }
    .faq-item { border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; background-color: var(--color-surface-white); }
    .faq-trigger { width: 100%; padding: var(--spacing-5) var(--spacing-6); background: none; border: none; display: flex; align-items: center; justify-content: space-between; font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); cursor: pointer; text-align: left; }
    .faq-icon { font-size: 2.2rem; line-height: 1; color: var(--color-teal); transition: transform var(--transition-fast); }
    .faq-trigger[aria-expanded="true"] .faq-icon { transform: rotate(45deg); }
    .faq-content { padding: 0 var(--spacing-6) var(--spacing-5) var(--spacing-6); font-size: var(--font-size-sm); color: var(--color-text-body); line-height: var(--line-height-relaxed); }

    /* SECTION 12: KNOWLEDGE */
    .knowledge-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-8); }
    .article-card { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: transform var(--transition-fast); }
    .article-card:hover { transform: translateY(-4px); }
    .article-media { position: relative; height: 22rem; background-color: var(--color-surface-alt); }
    .article-media img { width: 100%; height: 100%; object-fit: cover; }
    .article-tag { position: absolute; top: var(--spacing-3); left: var(--spacing-3); background-color: rgba(11, 25, 44, 0.85); color: #ffffff; font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); padding: 0.3rem 0.8rem; border-radius: var(--radius-sm); }
    .article-body { padding: var(--spacing-6); display: flex; flex-direction: column; flex-grow: 1; }
    .article-date { font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--spacing-2); }
    .article-title { font-size: var(--font-size-md); font-weight: var(--font-weight-bold); color: var(--color-midnight); line-height: var(--line-height-tight); margin-bottom: var(--spacing-3); }
    .article-excerpt { font-size: var(--font-size-sm); color: var(--color-text-body); line-height: var(--line-height-normal); margin-bottom: var(--spacing-5); flex-grow: 1; }
    .article-link { font-size: var(--font-size-sm); font-weight: var(--font-weight-bold); color: var(--color-teal); }

    /* SECTION 13: TESTIMONIALS */
    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-8); }
    .testimonial-card { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--spacing-8); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; }
    .testimonial-rating { color: #f59e0b; font-size: 1.6rem; margin-bottom: var(--spacing-3); }
    .testimonial-quote { font-size: var(--font-size-base); line-height: var(--line-height-relaxed); color: var(--color-text-body); font-style: italic; margin-bottom: var(--spacing-6); flex-grow: 1; }
    .testimonial-author { display: flex; align-items: center; gap: var(--spacing-3); padding-top: var(--spacing-4); border-top: 1px solid var(--color-border); }
    .author-avatar-fallback { width: 4.8rem; height: 4.8rem; border-radius: var(--radius-full); background-color: var(--color-teal-light); color: var(--color-teal); font-weight: var(--font-weight-bold); display: flex; align-items: center; justify-content: center; }
    .author-name { display: block; font-size: var(--font-size-base); font-weight: var(--font-weight-bold); font-style: normal; color: var(--color-midnight); }
    .author-meta { font-size: var(--font-size-xs); color: var(--color-text-muted); }

    /* SECTION 14: CTA */
    .appointment-cta-section { padding: var(--spacing-12) 0; }
    .cta-container { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-8); }
    .cta-badge { display: inline-block; background-color: var(--color-champagne); color: var(--color-midnight); font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); padding: 0.2rem 1.0rem; border-radius: var(--radius-full); margin-bottom: var(--spacing-2); }
    .cta-title { font-size: var(--font-size-2xl); font-weight: var(--font-weight-extrabold); color: #ffffff; line-height: var(--line-height-tight); margin-bottom: var(--spacing-2); }
    .cta-desc { font-size: var(--font-size-base); color: #cbd5e1; }
    .cta-actions { display: flex; gap: var(--spacing-4); flex-wrap: wrap; }

    /* SECTION 15: CONTACT */
    .contact-layout { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: var(--spacing-10); }
    .contact-details-panel { display: flex; flex-direction: column; gap: var(--spacing-5); }
    .contact-card { background-color: var(--color-surface-light); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-6); }
    .contact-card-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: var(--spacing-2); }
    .contact-card p { font-size: var(--font-size-sm); color: var(--color-text-body); margin-bottom: 0.4rem; }
    .campus-image { border-radius: var(--radius-md); width: 100%; }
    .contact-form-panel { background-color: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--spacing-8); box-shadow: var(--shadow-sm); }
    .styled-form { display: flex; flex-direction: column; gap: var(--spacing-4); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); }
    .form-group { display: flex; flex-direction: column; gap: var(--spacing-1); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); color: var(--color-midnight); }
    .required { color: var(--color-error); }
    .form-control { width: 100%; padding: 1.1rem 1.4rem; font-size: var(--font-size-base); color: var(--color-text-charcoal); background-color: #ffffff; border: 1.5px solid var(--color-border); border-radius: var(--radius-md); transition: all var(--transition-fast); }
    .form-control:focus { border-color: var(--color-teal); box-shadow: 0 0 0 3px var(--color-teal-glow); outline: none; }
    .form-feedback { padding: var(--spacing-4); border-radius: var(--radius-md); font-size: var(--font-size-sm); display: none; margin-bottom: var(--spacing-4); }
    .form-feedback.success { display: block; background-color: var(--color-success-bg); color: var(--color-success); border: 1px solid rgba(21, 128, 61, 0.2); }

    /* SECTION 16: FOOTER */
    .site-footer { background-color: var(--color-midnight-deep); color: #f8fafc; margin-top: auto; padding-top: var(--spacing-16); }
    .footer-container { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: var(--spacing-10); padding-bottom: var(--spacing-12); }
    .footer-logo { color: #ffffff; margin-bottom: var(--spacing-4); }
    .footer-lead { font-size: var(--font-size-sm); color: #94a3b8; line-height: var(--line-height-relaxed); margin-bottom: var(--spacing-4); max-width: 34rem; }
    .footer-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: #ffffff; margin-bottom: var(--spacing-4); }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: var(--spacing-2); }
    .footer-links a, .footer-link-btn { color: #94a3b8; font-size: var(--font-size-sm); background: none; border: none; padding: 0; text-align: left; cursor: pointer; transition: color var(--transition-fast); }
    .footer-links a:hover, .footer-link-btn:hover { color: #ffffff; text-decoration: underline; }
    .footer-sub { border-top: 1px solid #1e293b; padding: var(--spacing-6) 0; }
    .footer-sub-container { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3); font-size: var(--font-size-xs); color: #64748b; }
    .credit-text strong { color: var(--color-champagne); }

    /* 6-Step Booking Modal */
    .modal-overlay { position: fixed; inset: 0; background-color: rgba(6, 14, 24, 0.7); backdrop-filter: blur(4px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: var(--spacing-4); }
    .modal-overlay[hidden] { display: none; }
    .modal-dialog { background-color: var(--color-surface-white); border-radius: var(--radius-lg); width: 100%; max-width: 64rem; max-height: 90vh; display: flex; flex-direction: column; box-shadow: var(--shadow-lg); overflow: hidden; }
    .modal-header { padding: var(--spacing-5) var(--spacing-6); border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; }
    .modal-badge { font-size: 1.0rem; font-weight: var(--font-weight-bold); text-transform: uppercase; color: var(--color-teal); letter-spacing: 0.08em; }
    .modal-title { font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-midnight); }
    .modal-close-btn { background: none; border: none; font-size: 2.8rem; color: var(--color-text-muted); cursor: pointer; line-height: 1; }
    .step-progress-wrapper { padding: var(--spacing-3) var(--spacing-6); background-color: var(--color-surface-light); border-bottom: 1px solid var(--color-border); }
    .step-indicator { display: flex; justify-content: space-between; }
    .step-dot { width: 2.8rem; height: 2.8rem; border-radius: var(--radius-full); background-color: #e2e8f0; color: #64748b; font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); display: flex; align-items: center; justify-content: center; }
    .step-dot.active { background-color: var(--color-teal); color: #ffffff; }
    .step-dot.completed { background-color: var(--color-midnight); color: #ffffff; }
    .modal-body { padding: var(--spacing-6); overflow-y: auto; flex-grow: 1; }
    .booking-step { display: none; }
    .booking-step.active { display: block; }
    .step-heading { font-size: var(--font-size-md); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: 0.2rem; }
    .step-subtitle { font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: var(--spacing-5); }
    .choice-grid { display: flex; flex-direction: column; gap: var(--spacing-3); }
    .choice-tile { display: flex; flex-direction: column; padding: var(--spacing-4); border: 1.5px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast); }
    .choice-tile:hover { border-color: var(--color-teal); }
    .choice-tile input[type="radio"] { margin-bottom: var(--spacing-1); }
    .tile-title { font-size: var(--font-size-base); font-weight: var(--font-weight-bold); color: var(--color-midnight); }
    .slots-pill-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-3); }
    .slot-pill { border: 1px solid var(--color-border); padding: var(--spacing-3); border-radius: var(--radius-md); cursor: pointer; text-align: center; font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); display: flex; align-items: center; justify-content: center; gap: var(--spacing-2); }
    .review-box { background-color: var(--color-surface-light); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-5); font-size: var(--font-size-sm); display: flex; flex-direction: column; gap: var(--spacing-2); margin-bottom: var(--spacing-4); }
    .disclaimer-callout { padding: var(--spacing-3); background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: var(--radius-sm); color: #92400e; }
    .confirm-icon { width: 5.6rem; height: 5.6rem; border-radius: var(--radius-full); background-color: var(--color-success-bg); color: var(--color-success); font-size: 2.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-4) auto; }
    .confirm-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-midnight); margin-bottom: var(--spacing-2); }
    .confirm-desc { font-size: var(--font-size-sm); color: var(--color-text-body); margin-bottom: var(--spacing-4); }
    .ref-badge { display: inline-block; background-color: var(--color-teal-light); color: var(--color-teal); padding: var(--spacing-2) var(--spacing-4); border-radius: var(--radius-full); margin-bottom: var(--spacing-4); }
    .modal-footer { padding: var(--spacing-4) var(--spacing-6); border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end; gap: var(--spacing-3); }

    .scroll-top-btn { position: fixed; bottom: 2.4rem; right: 2.4rem; width: 4.8rem; height: 4.8rem; border-radius: var(--radius-full); background-color: var(--color-teal); color: #ffffff; border: none; box-shadow: var(--shadow-md); display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; visibility: hidden; transition: all var(--transition-fast); z-index: 90; }
    .scroll-top-btn.is-visible { opacity: 1; visibility: visible; }
    .scroll-top-btn:hover { background-color: var(--color-teal-hover); transform: translateY(-3px); }

    /* ==========================================================================
       RESPONSIVE BREAKPOINTS
       ========================================================================== */
    @media (max-width: 1100px) {
      .header-phone-chip { display: none; }
      .nav-pill-link { padding: 0.6rem 1rem; font-size: 1.25rem; }
      .quick-access-grid { grid-template-columns: repeat(3, 1fr); }
      .pillars-grid, .intl-pathway-grid { grid-template-columns: repeat(2, 1fr); }
      .footer-container { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 900px) {
      .hero-container, .intro-container, .facilities-layout, .contact-layout { grid-template-columns: 1fr; gap: var(--spacing-8); }
      .services-grid, .doctors-grid, .knowledge-grid, .testimonials-grid { grid-template-columns: 1fr; max-width: 48rem; margin-left: auto; margin-right: auto; }
      .hero-trust-bar { grid-template-columns: 1fr; }
    }

    @media (max-width: 768px) {
      html { font-size: 56.25%; scroll-padding-top: 8rem; }
      .header-outer-wrapper { top: 0.8rem; padding: 0 1rem; }
      .site-header {
        height: 6rem;
        padding: 0 0.8rem 0 1.6rem;
      }
      .brand-emblem { width: 3.2rem; height: 3.2rem; font-size: 1.6rem; }
      .logo-text { font-size: 1.7rem; }
      .logo-location-tag { display: none; }
      .nav-pill-rail { display: none; }
      .nav-cta-btn { display: none; }
      .menu-toggle { display: flex; }

      /* Mobile Drawer */
      .navbar {
        position: fixed;
        top: 8rem;
        right: -100%;
        width: 82%;
        max-width: 32rem;
        height: calc(100vh - 9rem);
        background-color: var(--color-surface-white);
        box-shadow: var(--shadow-lg);
        transition: right var(--transition-normal);
        z-index: 999;
        padding: var(--spacing-6) var(--spacing-5);
        border-radius: 2rem 0 0 2rem;
        overflow-y: auto;
      }
      .navbar.is-open { right: 0; }
      .navbar .nav-pill-rail {
        display: flex;
        flex-direction: column;
        background: transparent;
        border: none;
        padding: 0;
        gap: var(--spacing-2);
      }
      .nav-pill-link {
        font-size: var(--font-size-base);
        width: 100%;
        display: block;
        padding: 1.2rem 1.6rem;
        border-radius: var(--radius-md);
      }
      .nav-backdrop.is-open {
        display: block;
        position: fixed;
        inset: 0;
        background-color: rgba(11, 25, 44, 0.45);
        backdrop-filter: blur(4px);
        z-index: 998;
      }
      .quick-access-grid { grid-template-columns: 1fr; }
      .pillars-grid, .intl-pathway-grid { grid-template-columns: 1fr; }
      .footer-container { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- =========================================================================
       HEALTHCARE PRELOADER (Neutral Translucent Shadow + Winding Serpent)
       ========================================================================= -->
  <div class="preloader" id="preloader" role="status" aria-live="polite" aria-label="Loading clinical platform">
    <div class="preloader-card">
      <svg class="preloader-svg" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="14" r="5" class="asclepius-cap" />
        <line x1="50" y1="16" x2="50" y2="120" class="asclepius-rod" />
        <path d="M 45 116 C 30 108 30 92 50 92 C 70 92 70 74 50 74 C 30 74 30 54 50 54 C 70 54 70 34 50 34 C 38 34 38 22 50 18 C 55 16 57 18 56 22" class="asclepius-snake" />
        <circle cx="53" cy="18" r="1.8" class="asclepius-eye" />
      </svg>
      <div class="preloader-brand"><span>D</span>octor <span>C</span>ares.</div>
      <div class="preloader-subtitle">Preparing Clinical Environment</div>
      <div class="preloader-progress-track">
        <div class="preloader-progress-bar"></div>
      </div>
    </div>
  </div>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- =========================================================================
       INNOVATIVE FLOATING ISLAND CAPSULE HEADER
       ========================================================================= -->
  <div class="header-outer-wrapper">
    <header class="site-header" id="site-header">
      
      <!-- Brand Emblem & Typography -->
      <a href="#home" class="brand-group" aria-label="Doctor Cares Hospital Home">
        <div class="brand-emblem" aria-hidden="true">+</div>
        <div class="logo-text-block">
          <div class="logo-text"><span>D</span>octor <span>C</span>ares<span style="color:var(--color-midnight)">.</span></div>
          <div class="logo-location-tag">Abeokuta &bull; Ogun State</div>
        </div>
      </a>

      <!-- Streamlined Segmented Pill-Rail Navigation -->
      <nav class="navbar" id="primary-navbar" aria-label="Main Navigation">
        <ul class="nav-pill-rail">
          <li><a href="#home" class="nav-pill-link active-link">Home</a></li>
          <li><a href="#about" class="nav-pill-link">About</a></li>
          <li><a href="#services" class="nav-pill-link">Services</a></li>
          <li><a href="#doctors" class="nav-pill-link">Doctors</a></li>
          <li><a href="#facilities" class="nav-pill-link">Facilities</a></li>
          <li><a href="#patient-info" class="nav-pill-link">Guide</a></li>
          <li><a href="#knowledge" class="nav-pill-link">Knowledge</a></li>
          <li><a href="#contact" class="nav-pill-link">Contact</a></li>
        </ul>
      </nav>

      <!-- Action Cluster: Quick Hotline & Pill CTA -->
      <div class="header-action-group">
        <a href="tel:+2349042407509" class="header-phone-chip" title="Direct Clinical Line">
          <span class="status-pulse-dot" aria-hidden="true"></span>
          <span>+234 904 240 7509</span>
        </a>

        <button type="button" class="btn btn-teal nav-cta-btn open-booking-modal">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Book Appointment
        </button>

        <button type="button" class="menu-toggle" id="menu-toggle-btn" aria-label="Toggle Navigation">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </button>
      </div>

    </header>
  </div>
  
  <div class="nav-backdrop" id="nav-backdrop"></div>

  <!-- MAIN LANDMARK -->
  <main id="main-content" class="main-content">

    <!-- SECTION 3: HERO -->
    <section class="hero-section" id="home">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-eyebrow"><span class="eyebrow-dot"></span> Premier Medical Facility &bull; Abeokuta, Ogun State</div>
          <h1 class="hero-title">Healthcare excellence. <br><span class="hero-accent">A more personal experience.</span></h1>
          <p class="hero-lead">Doctor Cares combines advanced clinical science with compassionate, dignified care. From round-the-clock emergency triage to multidisciplinary surgical and oncology consultations, your recovery is our priority.</p>
          <div class="hero-cta-group">
            <button type="button" class="btn btn-teal btn-lg open-booking-modal">Request an Appointment</button>
            <a href="#services" class="btn btn-outline btn-lg">Explore Our Services</a>
          </div>
          <div class="hero-trust-bar">
            <div class="trust-pill"><span class="trust-icon">&bull;</span><div><strong>24/7 Clinical Care</strong><span>Emergency Triage</span></div></div>
            <div class="trust-pill"><span class="trust-icon">&bull;</span><div><strong>Board-Certified</strong><span>Consultants</span></div></div>
            <div class="trust-pill"><span class="trust-icon">&bull;</span><div><strong>Patient-Centred</strong><span>Health Pathways</span></div></div>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-media-wrapper">
            <img src="group-doctors-white-coats-analyzing-600nw-2609125975.webp" alt="Clinical Faculty" class="hero-photo" width="600" height="450" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'450\' viewBox=\'0 0 600 450\' fill=\'%230b192c\'><rect width=\'600\' height=\'450\' fill=\'%23f1f5f9\'/><text x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'20\' fill=\'%230f766e\'>Doctor Cares Clinical Faculty</text></svg>';">
            <div class="hero-floating-card">
              <div class="card-icon-box"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
              <div class="card-text"><span class="stat-num">100% Dedicated</span><span class="stat-label">To Evidence Medicine</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: QUICK-ACCESS -->
    <section class="quick-access-section">
      <div class="container">
        <div class="quick-access-grid">
          <a href="#doctors" class="qa-card"><div class="qa-icon">👨‍⚕️</div><h2 class="qa-title">Find a Doctor</h2><p class="qa-desc">Consultant specialists roster.</p><span class="qa-link">Explore Faculty &rarr;</span></a>
          <a href="#services" class="qa-card"><div class="qa-icon">🏥</div><h2 class="qa-title">Our Services</h2><p class="qa-desc">Full clinical disciplines.</p><span class="qa-link">View Specialties &rarr;</span></a>
          <button type="button" class="qa-card qa-card-btn open-booking-modal"><div class="qa-icon">📅</div><h2 class="qa-title">Appointments</h2><p class="qa-desc">Schedule appointments.</p><span class="qa-link">Book Now &rarr;</span></button>
          <a href="#international" class="qa-card"><div class="qa-icon">✈️</div><h2 class="qa-title">International</h2><p class="qa-desc">Medical travel support.</p><span class="qa-link">Patient Journey &rarr;</span></a>
          <a href="#contact" class="qa-card"><div class="qa-icon">📍</div><h2 class="qa-title">Find Us</h2><p class="qa-desc">Abeokuta campus and parking.</p><span class="qa-link">Directions &rarr;</span></a>
          <a href="#patient-info" class="qa-card"><div class="qa-icon">📋</div><h2 class="qa-title">Patient Guide</h2><p class="qa-desc">Checklists and visit policies.</p><span class="qa-link">Read Information &rarr;</span></a>
        </div>
      </div>
    </section>

    <!-- SECTION 5: INTRO -->
    <section class="intro-section section-padding" id="about">
      <div class="container intro-container">
        <div class="intro-media">
          <img src="healthcare-medical-science-concept-with-tiny-people-doctors-and-big-aid-kit-full-of-medicine-and-treatments-illustration-isolated-on-white-background-suitable-for-banners-web-sites-cards-vector.jpg" alt="Clinical Suites" class="intro-image" width="540" height="380" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'540\' height=\'380\' viewBox=\'0 0 540 380\' fill=\'%23f1f5f9\'><rect width=\'540\' height=\'380\' fill=\'%23f1f5f9\'/><text x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'18\' fill=\'%230b192c\'>Clinical Facility Suites</text></svg>';">
          <div class="experience-badge"><span class="exp-title">Excellence in Practice</span><span class="exp-sub">Abeokuta Campus</span></div>
        </div>
        <div class="intro-content">
          <div class="section-tag">About Our Facility</div>
          <h2 class="section-heading">Setting national benchmarks for clinical integrity.</h2>
          <p class="section-lead">Doctor Cares unifies outpatient clinics, diagnostic laboratories, surgical theaters, and recovery suites across Ogun State.</p>
          <div class="values-stack">
            <div class="value-item"><div class="value-icon">&#10003;</div><div class="value-text"><h3 class="value-title">Patient-Centred Care</h3><p>Individualized treatment paths built around patient lifestyle and medical history.</p></div></div>
            <div class="value-item"><div class="value-icon">&#10003;</div><div class="value-text"><h3 class="value-title">Clinical Excellence</h3><p>Standardized diagnostic verifications and strict patient safety benchmarks.</p></div></div>
            <div class="value-item"><div class="value-icon">&#10003;</div><div class="value-text"><h3 class="value-title">Innovation &amp; Accessibility</h3><p>Modern diagnostic imaging, telemetry, and synchronized electronic health charts.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: SERVICES -->
    <section class="services-section section-padding bg-light" id="services">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Clinical Departments</div>
          <h2 class="section-heading">Services &amp; Medical Specialties</h2>
          <p class="section-sub">Comprehensive clinical programs staffed by qualified consulting faculty</p>
        </div>
        <div class="services-grid">
          <article class="service-card"><h3 class="service-name">Internal Medicine</h3><p class="service-desc">Primary diagnostic evaluations and chronic disease prevention.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
          <article class="service-card"><h3 class="service-name">Paediatric Surgery</h3><p class="service-desc">Congenital corrective surgeries and specialized neonatal surgical care.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
          <article class="service-card"><h3 class="service-name">Paediatrics</h3><p class="service-desc">Infant wellness clinics, immunizations, and developmental tracking.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
          <article class="service-card"><h3 class="service-name">Clinical Oncology</h3><p class="service-desc">Evidence-based cancer screenings, diagnostics, and targeted therapies.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
          <article class="service-card"><h3 class="service-name">Pathology &amp; Diagnostics</h3><p class="service-desc">Automated biochemistry labs, CT imaging, ultrasound, and rapid results.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
          <article class="service-card"><h3 class="service-name">Obstetrics &amp; Gynaecology</h3><p class="service-desc">Antenatal care, labor suites, and comprehensive women's healthcare.</p><a href="#contact" class="service-action">Inquire Department &rarr;</a></article>
        </div>
      </div>
    </section>

    <!-- SECTION 7: DOCTORS -->
    <section class="doctors-section section-padding" id="doctors">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Clinical Faculty</div>
          <h2 class="section-heading">Meet Our Senior Physicians</h2>
          <p class="section-sub">Experienced clinicians dedicated to research-backed patient recovery</p>
        </div>

        <div class="doctors-grid">
          <!-- Doctor 1: Dr. Agbaje Abdulwadud -->
          <article class="doctor-card">
            <div class="doctor-media">
              <img 
                src="abdulwadud.jpg" 
                alt="Dr. Agbaje Abdulwadud" 
                width="340" 
                height="340" 
                onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'340\' height=\'340\' viewBox=\'0 0 340 340\' fill=\'%23f1f5f9\'><rect width=\'340\' height=\'340\' fill=\'%23f1f5f9\'/><circle cx=\'170\' cy=\'130\' r=\'60\' fill=\'%230f766e\'/><path d=\'M90 280c0-50 40-80 80-80s80 30 80 80\' fill=\'%230b192c\'/><text x=\'50%25\' y=\'92%25\' text-anchor=\'middle\' fill=\'%230b192c\' font-family=\'sans-serif\' font-weight=\'bold\' font-size=\'15\'>Dr. Agbaje Abdulwadud</text></svg>';"
              >
            </div>
            <div class="doctor-body">
              <span class="doctor-dept">Paediatric Surgery</span>
              <h3 class="doctor-name">Dr. Agbaje Abdulwadud</h3>
              <p class="doctor-title">Consultant Paediatric Surgeon &bull; MBBS, FWACS</p>
              <p class="doctor-bio">Specializing in neonatal surgical procedures, congenital corrective interventions, and minimally invasive pediatric surgery.</p>
              <div class="doctor-card-actions">
                <button type="button" class="btn btn-teal btn-sm open-booking-modal" data-preferred-doctor="Dr. Agbaje Abdulwadud">
                  Request Appointment
                </button>
              </div>
            </div>
          </article>

          <!-- Doctor 2: Dr. Habeeb Maryamuhu -->
          <article class="doctor-card">
            <div class="doctor-media">
              <img 
                src="IMG_20250330_072552.jpg" 
                alt="Dr. Habeeb Maryamuhu" 
                width="340" 
                height="340" 
                onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'340\' height=\'340\' viewBox=\'0 0 340 340\' fill=\'%23f1f5f9\'><rect width=\'340\' height=\'340\' fill=\'%23f1f5f9\'/><circle cx=\'170\' cy=\'130\' r=\'60\' fill=\'%230f766e\'/><path d=\'M90 280c0-50 40-80 80-80s80 30 80 80\' fill=\'%230b192c\'/><text x=\'50%25\' y=\'92%25\' text-anchor=\'middle\' fill=\'%230b192c\' font-family=\'sans-serif\' font-weight=\'bold\' font-size=\'15\'>Dr. Habeeb Maryamuhu</text></svg>';"
              >
            </div>
            <div class="doctor-body">
              <span class="doctor-dept">Paediatrics &amp; Child Health</span>
              <h3 class="doctor-name">Dr. Habeeb Maryamuhu</h3>
              <p class="doctor-title">Consultant Paediatrician &bull; MD, FAAP</p>
              <p class="doctor-bio">Over 14 years of clinical experience in neonatal intensive care, developmental tracking, and pediatric respiratory conditions.</p>
              <div class="doctor-card-actions">
                <button type="button" class="btn btn-teal btn-sm open-booking-modal" data-preferred-doctor="Dr. Habeeb Maryamuhu">
                  Request Appointment
                </button>
              </div>
            </div>
          </article>

          <!-- Doctor 3: Dr. Alao Oko Chicken -->
          <article class="doctor-card">
            <div class="doctor-media">
              <img 
                src="IMG_20250606_070443_1.jpg" 
                alt="Dr. Alao Oko Chicken" 
                width="340" 
                height="340" 
                onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'340\' height=\'340\' viewBox=\'0 0 340 340\' fill=\'%23f1f5f9\'><rect width=\'340\' height=\'340\' fill=\'%23f1f5f9\'/><circle cx=\'170\' cy=\'130\' r=\'60\' fill=\'%230f766e\'/><path d=\'M90 280c0-50 40-80 80-80s80 30 80 80\' fill=\'%230b192c\'/><text x=\'50%25\' y=\'92%25\' text-anchor=\'middle\' fill=\'%230b192c\' font-family=\'sans-serif\' font-weight=\'bold\' font-size=\'15\'>Dr. Alao Oko Chicken</text></svg>';"
              >
            </div>
            <div class="doctor-body">
              <span class="doctor-dept">Clinical Oncology</span>
              <h3 class="doctor-name">Dr. Alao Oko Chicken</h3>
              <p class="doctor-title">Consultant Oncologist &bull; MBBS, FWACP</p>
              <p class="doctor-bio">Specializing in comprehensive cancer management, early diagnostic oncology screenings, and targeted multimodal therapy.</p>
              <div class="doctor-card-actions">
                <button type="button" class="btn btn-teal btn-sm open-booking-modal" data-preferred-doctor="Dr. Alao Oko Chicken">
                  Request Appointment
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 8: WHY US -->
    <section class="why-us-section section-padding bg-midnight" id="why-us">
      <div class="container">
        <div class="section-header text-center light-header">
          <div class="section-tag tag-champagne">Clinical Standards</div>
          <h2 class="section-heading text-white">Why Patients Entrust Us With Their Health</h2>
          <p class="section-sub text-muted-light">Demonstrating clinical rigor, institutional accountability, and compassion</p>
        </div>
        <div class="pillars-grid">
          <div class="pillar-card"><div class="pillar-number">01</div><h3 class="pillar-title">Multidisciplinary</h3><p class="pillar-text">Complex cases receive multi-physician reviews across medicine, pathology, and surgery.</p></div>
          <div class="pillar-card"><div class="pillar-number">02</div><h3 class="pillar-title">Strict Quality</h3><p class="pillar-text">Continuous internal clinical audits and evidence-informed treatment pathways.</p></div>
          <div class="pillar-card"><div class="pillar-number">03</div><h3 class="pillar-title">Modern Diagnostic Tech</h3><p class="pillar-text">High-resolution radiological imaging and on-site automated lab analyzers.</p></div>
          <div class="pillar-card"><div class="pillar-number">04</div><h3 class="pillar-title">Dignified Experience</h3><p class="pillar-text">Clear communication, calm inpatient suites, and attentive nursing support.</p></div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: FACILITIES -->
    <section class="facilities-section section-padding" id="facilities">
      <div class="container">
        <div class="facilities-layout">
          <div class="facilities-content">
            <div class="section-tag">Infrastructure</div>
            <h2 class="section-heading">Designed for precision, hygiene, and patient recovery.</h2>
            <ul class="facilities-list">
              <li><strong>HEPA-Filtered Surgical Theaters:</strong> Sterile operative airflow environments.</li>
              <li><strong>On-Site Pathology Labs:</strong> Rapid-turnaround automated processing.</li>
              <li><strong>Advanced Intensive Care (ICU):</strong> Continuous telemetry vital monitoring.</li>
              <li><strong>24/7 Rapid Ambulance Fleet:</strong> Mobile intensive care with onboard defibrillators.</li>
            </ul>
          </div>
          <div class="facilities-media">
            <img src="educational-puzzle-game-kids-numbers-game-ambulance-car-coloring-page-outline-cartoon-doctor-ambulance-car-near-163571997.jpg" alt="Ambulance" class="facility-photo" width="500" height="350" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'500\' height=\'350\' viewBox=\'0 0 500 350\' fill=\'%23f1f5f9\'><rect width=\'500\' height=\'350\' fill=\'%23f1f5f9\'/><text x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'18\' fill=\'%230b192c\'>Advanced Critical Care Fleet</text></svg>';">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 10: INTERNATIONAL -->
    <section class="international-section section-padding bg-light" id="international">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Global Healthcare</div>
          <h2 class="section-heading">International Patient Care &amp; Coordination</h2>
          <p class="section-sub">A streamlined pathway for specialized medical evaluations</p>
        </div>
        <div class="intl-pathway-grid">
          <div class="pathway-step"><div class="step-badge">Step 1</div><h3 class="step-title">Inquiry</h3><p class="step-desc">Submit clinical records for preliminary review.</p></div>
          <div class="pathway-step"><div class="step-badge">Step 2</div><h3 class="step-title">Planning</h3><p class="step-desc">Receive a personalized consultation schedule outline.</p></div>
          <div class="pathway-step"><div class="step-badge">Step 3</div><h3 class="step-title">Arrival</h3><p class="step-desc">Patient liaison support and prioritized diagnostic tests.</p></div>
          <div class="pathway-step"><div class="step-badge">Step 4</div><h3 class="step-title">Follow-up</h3><p class="step-desc">Comprehensive reports and remote consultations.</p></div>
        </div>
        <div class="text-center"><a href="#contact" class="btn btn-teal">Inquire About International Travel Care</a></div>
      </div>
    </section>

    <!-- SECTION 11: FAQS -->
    <section class="patient-info-section section-padding" id="patient-info">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Patient Guidance</div>
          <h2 class="section-heading">Helpful Information For Your Visit</h2>
          <p class="section-sub">Clear guidance to prepare for a seamless hospital experience</p>
        </div>
        <div class="faq-accordion-container">
          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-1"><span>What should I bring to my first appointment?</span><span class="faq-icon">+</span></button>
            <div class="faq-content" id="faq-ans-1" hidden><p>Please bring a valid photo ID, previous diagnostic records, current medication list, and insurance cards.</p></div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-2"><span>How does emergency triage work?</span><span class="faq-icon">+</span></button>
            <div class="faq-content" id="faq-ans-2" hidden><p>We use an international clinical triage system prioritizing acute life-threatening emergencies immediately.</p></div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-3"><span>What are the inpatient visiting hours?</span><span class="faq-icon">+</span></button>
            <div class="faq-content" id="faq-ans-3" hidden><p>General inpatient visiting hours are 10:00 AM – 1:00 PM and 4:00 PM – 7:00 PM daily.</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 12: KNOWLEDGE -->
    <section class="knowledge-section section-padding bg-light" id="knowledge">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Education</div>
          <h2 class="section-heading">The Neighbourhood Pulse: Health Knowledge</h2>
        </div>
        <div class="knowledge-grid">
          <article class="article-card"><div class="article-body"><time class="article-date">Feb 14, 2026 &bull; 5 min</time><h3 class="article-title">Early Detection in Modern Oncology</h3><p class="article-excerpt">Routine screening intervals and genetic risk indicators.</p><a href="#contact" class="article-link">Read Overview &rarr;</a></div></article>
          <article class="article-card"><div class="article-body"><time class="article-date">Mar 01, 2026 &bull; 4 min</time><h3 class="article-title">Hypertension &amp; Arterial Health</h3><p class="article-excerpt">Nutritional guidelines and cardiovascular wellness metrics.</p><a href="#contact" class="article-link">Read Overview &rarr;</a></div></article>
          <article class="article-card"><div class="article-body"><time class="article-date">Mar 18, 2026 &bull; 6 min</time><h3 class="article-title">Seasonal Illnesses in Children</h3><p class="article-excerpt">Pediatric viral care protocols and emergency warning signs.</p><a href="#contact" class="article-link">Read Overview &rarr;</a></div></article>
        </div>
      </div>
    </section>

    <!-- SECTION 13: TESTIMONIALS -->
    <section class="testimonials-section section-padding" id="testimonials">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Testimonials</div>
          <h2 class="section-heading">What Our Patients Say</h2>
        </div>
        <div class="testimonials-grid">
          <article class="testimonial-card">
            <div class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="testimonial-quote">&ldquo;The surgical and nursing team acted with speed and composure during my recovery.&rdquo;</blockquote>
            <div class="testimonial-author"><div class="author-avatar-fallback">HO</div><div class="author-info"><cite class="author-name">Hawaw Ogunlade</cite><span class="author-meta">Inpatient Care</span></div></div>
          </article>
          <article class="testimonial-card">
            <div class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="testimonial-quote">&ldquo;Dr. Habeeb took the time to explain my child's asthma care with reassuring clarity.&rdquo;</blockquote>
            <div class="testimonial-author"><div class="author-avatar-fallback">MS</div><div class="author-info"><cite class="author-name">Marcus Sterling</cite><span class="author-meta">Paediatrics</span></div></div>
          </article>
          <article class="testimonial-card">
            <div class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote class="testimonial-quote">&ldquo;Prompt diagnostic lab turnarounds and very courteous administrative staff.&rdquo;</blockquote>
            <div class="testimonial-author"><div class="author-avatar-fallback">AB</div><div class="author-info"><cite class="author-name">Aisha Bello</cite><span class="author-meta">Diagnostics</span></div></div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 14: CTA -->
    <section class="appointment-cta-section bg-midnight">
      <div class="container cta-container">
        <div>
          <span class="cta-badge">Ready for Consultation?</span>
          <h2 class="cta-title">Begin your personalized healthcare journey today.</h2>
        </div>
        <button type="button" class="btn btn-teal btn-lg open-booking-modal">Request an Appointment Now</button>
      </div>
    </section>

    <!-- SECTION 15: CONTACT & DIRECTIONS -->
    <section class="contact-section section-padding" id="contact">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Reach Us</div>
          <h2 class="section-heading">Contact &amp; Campus Directions</h2>
        </div>
        <div class="contact-layout">
          <div class="contact-details-panel">
            <div class="contact-card">
              <h3 class="contact-card-title">Hospital Campus</h3>
              <p><strong>Address:</strong> 100 Hospital Way, Medical District, Abeokuta, Ogun State</p>
              <p><strong>Emergency:</strong> Gate 2 &bull; 24-Hour Ambulance Ramp</p>
              <p><strong>Desk:</strong> +2349042407509 &bull; info@doctorcares.example</p>
            </div>
            <div class="contact-card">
              <h3 class="contact-card-title">Operating Schedules</h3>
              <p><strong>Emergency:</strong> Open 24/7 &bull; 365 Days</p>
              <p><strong>Outpatient:</strong> Mon – Sat: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
          <div class="contact-form-panel">
            <div id="contact-feedback" class="form-feedback" role="status" aria-live="polite"></div>
            <form id="general-contact-form" class="styled-form" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">Full Name <span class="required">*</span></label>
                <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g., Sarah Johnson" required>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-email" class="form-label">Email <span class="required">*</span></label>
                  <input type="email" id="contact-email" name="email" class="form-control" placeholder="name@domain.com" required>
                </div>
                <div class="form-group">
                  <label for="contact-phone" class="form-label">Phone <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" name="phone" class="form-control" placeholder="+234 904 240 7509" required>
                </div>
              </div>
              <div class="form-group">
                <label for="contact-message" class="form-label">Message Details <span class="required">*</span></label>
                <textarea id="contact-message" name="message" rows="4" class="form-control" placeholder="How can we assist you?" required></textarea>
              </div>
              <button type="submit" class="btn btn-teal btn-block" id="contact-submit-btn">Send Hospital Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- SECTION 16: FOOTER -->
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-container">
      <div class="footer-col brand-col">
        <a href="#home" class="logo footer-logo"><span class="logo-text"><span class="logo-mark">D</span>octor <span class="logo-mark">C</span>ares<span class="brand-dot">.</span></span></a>
        <p class="footer-lead">An internationally oriented healthcare demonstration platform delivering evidence-based clinical consultations, emergency triage, and diagnostic medicine in Abeokuta, Ogun State.</p>
      </div>
      <div class="footer-col">
        <h3 class="footer-title">Specialties</h3>
        <ul class="footer-links">
          <li><a href="#services">Internal Medicine</a></li>
          <li><a href="#services">Paediatric Surgery</a></li>
          <li><a href="#services">Paediatrics &amp; Child Health</a></li>
          <li><a href="#services">Clinical Oncology</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-title">Patient Resources</h3>
        <ul class="footer-links">
          <li><a href="#patient-info">Preparing for Visit</a></li>
          <li><a href="#patient-info">Visiting Hours</a></li>
          <li><a href="#international">International Patients</a></li>
          <li><button type="button" class="footer-link-btn open-booking-modal">Request Consultation</button></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-title">Legal &amp; Campus</h3>
        <ul class="footer-links">
          <li><a href="#contact">Campus Directions</a></li>
          <li><a href="#home">Privacy Notice</a></li>
          <li><a href="#home">Terms of Use</a></li>
          <li><a href="#home">Accessibility Statement</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-sub">
      <div class="container footer-sub-container">
        <p>&copy; 2026 Doctor Cares Hospital. All rights reserved.</p>
        <p class="credit-text">Original engineering foundation by <strong>Abdulwadud</strong>. Modernized for international hospital standards.</p>
      </div>
    </div>
  </footer>

  <!-- 6-STEP APPOINTMENT BOOKING MODAL -->
  <div class="modal-overlay" id="booking-modal" role="dialog" aria-modal="true" hidden>
    <div class="modal-dialog">
      <div class="modal-header">
        <div><span class="modal-badge">Interactive Demo</span><h2 class="modal-title" id="modal-step-title">Request Appointment</h2></div>
        <button type="button" class="modal-close-btn" id="modal-close-btn">&times;</button>
      </div>
      <div class="step-progress-wrapper">
        <div class="step-indicator">
          <span class="step-dot active" data-step="1">1</span>
          <span class="step-dot" data-step="2">2</span>
          <span class="step-dot" data-step="3">3</span>
          <span class="step-dot" data-step="4">4</span>
          <span class="step-dot" data-step="5">5</span>
          <span class="step-dot" data-step="6">6</span>
        </div>
      </div>
      <div class="modal-body">
        <div class="booking-step active" id="step-1">
          <h3 class="step-heading">Step 1: Clinical Department</h3>
          <div class="choice-grid">
            <label class="choice-tile"><input type="radio" name="deptChoice" value="Internal Medicine" checked><span class="tile-title">General Internal Medicine</span></label>
            <label class="choice-tile"><input type="radio" name="deptChoice" value="Paediatric Surgery"><span class="tile-title">Paediatric Surgery</span></label>
            <label class="choice-tile"><input type="radio" name="deptChoice" value="Paediatrics"><span class="tile-title">Paediatrics &amp; Child Health</span></label>
            <label class="choice-tile"><input type="radio" name="deptChoice" value="Oncology"><span class="tile-title">Clinical Oncology</span></label>
            <label class="choice-tile"><input type="radio" name="deptChoice" value="Diagnostics"><span class="tile-title">Pathology &amp; Diagnostics</span></label>
          </div>
        </div>
        <div class="booking-step" id="step-2">
          <h3 class="step-heading">Step 2: Consulting Physician</h3>
          <div class="choice-grid">
            <label class="choice-tile"><input type="radio" name="doctorChoice" value="Any Available Specialist" checked><span class="tile-title">First Available Specialist</span></label>
            <label class="choice-tile"><input type="radio" name="doctorChoice" value="Dr. Agbaje Abdulwadud"><span class="tile-title">Dr. Agbaje Abdulwadud (Consultant Paediatric Surgeon)</span></label>
            <label class="choice-tile"><input type="radio" name="doctorChoice" value="Dr. Habeeb Maryamuhu"><span class="tile-title">Dr. Habeeb Maryamuhu (Consultant Paediatrician)</span></label>
            <label class="choice-tile"><input type="radio" name="doctorChoice" value="Dr. Alao Oko Chicken"><span class="tile-title">Dr. Alao Oko Chicken (Consultant Oncologist)</span></label>
          </div>
        </div>
        <div class="booking-step" id="step-3">
          <h3 class="step-heading">Step 3: Preferred Date &amp; Slot</h3>
          <div class="form-group"><label class="form-label">Preferred Date:</label><input type="date" id="slot-date" class="form-control" value="2026-03-02"></div>
          <div class="slots-pill-grid">
            <label class="slot-pill"><input type="radio" name="slotTime" value="09:00 AM - 10:00 AM" checked><span>09:00 AM</span></label>
            <label class="slot-pill"><input type="radio" name="slotTime" value="11:30 AM - 12:30 PM"><span>11:30 AM</span></label>
            <label class="slot-pill"><input type="radio" name="slotTime" value="02:00 PM - 03:00 PM"><span>02:00 PM</span></label>
            <label class="slot-pill"><input type="radio" name="slotTime" value="04:30 PM - 05:30 PM"><span>04:30 PM</span></label>
          </div>
        </div>
        <div class="booking-step" id="step-4">
          <h3 class="step-heading">Step 4: Patient Details</h3>
          <div class="form-group"><label class="form-label">Patient Name <span class="required">*</span></label><input type="text" id="b-name" class="form-control" placeholder="e.g., Sarah Johnson"></div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Email <span class="required">*</span></label><input type="email" id="b-email" class="form-control" placeholder="name@domain.com"></div>
            <div class="form-group"><label class="form-label">Phone <span class="required">*</span></label><input type="tel" id="b-phone" class="form-control" placeholder="+234 904 240 7509"></div>
          </div>
        </div>
        <div class="booking-step" id="step-5">
          <h3 class="step-heading">Step 5: Review Appointment Summary</h3>
          <div class="review-box">
            <p><strong>Department:</strong> <span id="rev-dept">—</span></p>
            <p><strong>Consultant:</strong> <span id="rev-doc">—</span></p>
            <p><strong>Slot:</strong> <span id="rev-date">—</span> &bull; <span id="rev-time">—</span></p>
            <p><strong>Patient:</strong> <span id="rev-name">—</span> (<span id="rev-contact">—</span>)</p>
          </div>
          <div class="disclaimer-callout"><small>Demonstration Notice: This is an interactive frontend workflow simulation.</small></div>
        </div>
        <div class="booking-step" id="step-6">
          <div class="confirmation-box text-center">
            <div class="confirm-icon">&#10003;</div>
            <h3 class="confirm-title">Request Logged</h3>
            <p class="confirm-desc">Your consultation request has been recorded in demonstration mode.</p>
            <div class="ref-badge">Reference ID: <strong id="demo-ref-id">DC-2026-9481</strong></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="step-prev-btn" style="display: none;">Previous</button>
        <button type="button" class="btn btn-teal" id="step-next-btn">Continue &rarr;</button>
        <button type="button" class="btn btn-teal" id="step-close-btn" style="display: none;">Close Dialogue</button>
      </div>
    </div>
  </div>

  <button type="button" class="scroll-top-btn" id="scroll-top-btn" aria-label="Back to top">&uarr;</button>

  <script>
    (function () {
      "use strict";

      // PRELOADER DISMISSAL ENGINE (Guaranteed 3-Second Execution)
      function dismissPreloader() {
        const preloader = document.getElementById("preloader");
        if (preloader) {
          preloader.classList.add("fade-out");
          setTimeout(function () {
            preloader.style.display = "none";
            if (preloader.parentNode) {
              preloader.parentNode.removeChild(preloader);
            }
          }, 600);
        }
      }

      setTimeout(dismissPreloader, 3000);

      // Compact Header on Scroll
      const siteHeader = document.getElementById("site-header");
      const menuToggleBtn = document.getElementById("menu-toggle-btn");
      const primaryNavbar = document.getElementById("primary-navbar");
      const navBackdrop = document.getElementById("nav-backdrop");
      const navLinks = document.querySelectorAll(".nav-pill-link");
      const scrollTopBtn = document.getElementById("scroll-top-btn");

      window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        if (siteHeader) {
          if (scrollY > 30) siteHeader.classList.add("header-compact");
          else siteHeader.classList.remove("header-compact");
        }
        if (scrollTopBtn) {
          if (scrollY > 400) scrollTopBtn.classList.add("is-visible");
          else scrollTopBtn.classList.remove("is-visible");
        }
      }, { passive: true });

      if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
      }

      // Mobile Menu Drawer
      function openMobileMenu() {
        menuToggleBtn.classList.add("is-open");
        menuToggleBtn.setAttribute("aria-expanded", "true");
        primaryNavbar.classList.add("is-open");
        navBackdrop.classList.add("is-open");
        document.body.style.overflow = "hidden";
      }
      function closeMobileMenu() {
        menuToggleBtn.classList.remove("is-open");
        menuToggleBtn.setAttribute("aria-expanded", "false");
        primaryNavbar.classList.remove("is-open");
        navBackdrop.classList.remove("is-open");
        document.body.style.overflow = "";
      }
      if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", function () {
          if (primaryNavbar.classList.contains("is-open")) closeMobileMenu();
          else openMobileMenu();
        });
        if (navBackdrop) navBackdrop.addEventListener("click", closeMobileMenu);
        navLinks.forEach(function (link) { link.addEventListener("click", closeMobileMenu); });
      }

      // Active Section Highlighting
      const contentSections = document.querySelectorAll("main section[id]");
      if ("IntersectionObserver" in window && contentSections.length > 0) {
        const observerOptions = { root: null, rootMargin: "-20% 0px -65% 0px", threshold: 0 };
        const navObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const currentId = entry.target.getAttribute("id");
              navLinks.forEach(function (link) {
                if (link.getAttribute("href") === `#${currentId}`) {
                  link.classList.add("active-link");
                } else {
                  link.classList.remove("active-link");
                }
              });
            }
          });
        }, observerOptions);

        contentSections.forEach(function (sec) { navObserver.observe(sec); });
      }

      // FAQ Accordion
      document.querySelectorAll(".faq-trigger").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          const isExpanded = trigger.getAttribute("aria-expanded") === "true";
          document.querySelectorAll(".faq-trigger").forEach(function (t) {
            t.setAttribute("aria-expanded", "false");
            const c = document.getElementById(t.getAttribute("aria-controls"));
            if (c) c.hidden = true;
          });
          if (!isExpanded) {
            trigger.setAttribute("aria-expanded", "true");
            const c = document.getElementById(trigger.getAttribute("aria-controls"));
            if (c) c.hidden = false;
          }
        });
      });

      // 6-Step Booking Modal
      const bookingModal = document.getElementById("booking-modal");
      const modalCloseBtn = document.getElementById("modal-close-btn");
      const stepPrevBtn = document.getElementById("step-prev-btn");
      const stepNextBtn = document.getElementById("step-next-btn");
      const stepCloseBtn = document.getElementById("step-close-btn");
      const modalStepTitle = document.getElementById("modal-step-title");
      const stepDots = document.querySelectorAll(".step-dot");
      const bookingSteps = document.querySelectorAll(".booking-step");
      let currentStep = 1;
      let bookingData = { dept: "Internal Medicine", doctor: "Any Available Specialist", date: "2026-03-02", time: "09:00 AM - 10:00 AM", name: "", email: "", phone: "" };

      function updateModalStepView() {
        bookingSteps.forEach(function (el, idx) {
          if (idx + 1 === currentStep) el.classList.add("active");
          else el.classList.remove("active");
        });
        stepDots.forEach(function (dot, idx) {
          const s = idx + 1;
          dot.classList.remove("active", "completed");
          if (s === currentStep) dot.classList.add("active");
          else if (s < currentStep) dot.classList.add("completed");
        });
        if (currentStep === 1) {
          stepPrevBtn.style.display = "none"; stepNextBtn.style.display = "inline-flex"; stepCloseBtn.style.display = "none"; stepNextBtn.textContent = "Continue \u2192";
        } else if (currentStep === 6) {
          stepPrevBtn.style.display = "none"; stepNextBtn.style.display = "none"; stepCloseBtn.style.display = "inline-flex";
        } else if (currentStep === 5) {
          stepPrevBtn.style.display = "inline-flex"; stepNextBtn.style.display = "inline-flex"; stepCloseBtn.style.display = "none"; stepNextBtn.textContent = "Confirm Request";
        } else {
          stepPrevBtn.style.display = "inline-flex"; stepNextBtn.style.display = "inline-flex"; stepCloseBtn.style.display = "none"; stepNextBtn.textContent = "Continue \u2192";
        }
        if (modalStepTitle) modalStepTitle.textContent = currentStep === 6 ? "Request Confirmed" : "Request Appointment (Step " + currentStep + " of 5)";
      }

      function openModal(doc) {
        bookingModal.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
        if (doc) {
          const r = document.querySelector('input[name="doctorChoice"][value="' + doc + '"]');
          if (r) r.checked = true;
        }
        currentStep = 1;
        updateModalStepView();
      }
      function closeModal() {
        bookingModal.setAttribute("hidden", "");
        document.body.style.overflow = "";
      }
      document.querySelectorAll(".open-booking-modal").forEach(function (b) {
        b.addEventListener("click", function () { openModal(b.getAttribute("data-preferred-doctor")); });
      });
      if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
      if (stepCloseBtn) stepCloseBtn.addEventListener("click", closeModal);

      if (stepNextBtn) {
        stepNextBtn.addEventListener("click", function () {
          if (currentStep === 1) {
            const d = document.querySelector('input[name="deptChoice"]:checked');
            if (d) bookingData.dept = d.value;
            currentStep = 2; updateModalStepView();
          } else if (currentStep === 2) {
            const doc = document.querySelector('input[name="doctorChoice"]:checked');
            if (doc) bookingData.doctor = doc.value;
            currentStep = 3; updateModalStepView();
          } else if (currentStep === 3) {
            const dt = document.getElementById("slot-date");
            const tm = document.querySelector('input[name="slotTime"]:checked');
            if (dt) bookingData.date = dt.value;
            if (tm) bookingData.time = tm.value;
            currentStep = 4; updateModalStepView();
          } else if (currentStep === 4) {
            const n = document.getElementById("b-name").value.trim();
            const em = document.getElementById("b-email").value.trim();
            const ph = document.getElementById("b-phone").value.trim();
            if (n.length < 2 || !em.includes("@") || ph.length < 7) {
              alert("Please fill in valid name, email, and phone number.");
              return;
            }
            bookingData.name = n; bookingData.email = em; bookingData.phone = ph;
            document.getElementById("rev-dept").textContent = bookingData.dept;
            document.getElementById("rev-doc").textContent = bookingData.doctor;
            document.getElementById("rev-date").textContent = bookingData.date;
            document.getElementById("rev-time").textContent = bookingData.time;
            document.getElementById("rev-name").textContent = bookingData.name;
            document.getElementById("rev-contact").textContent = bookingData.phone + " • " + bookingData.email;
            currentStep = 5; updateModalStepView();
          } else if (currentStep === 5) {
            document.getElementById("demo-ref-id").textContent = "DC-2026-" + Math.floor(1000 + Math.random() * 9000);
            currentStep = 6; updateModalStepView();
          }
        });
      }
      if (stepPrevBtn) {
        stepPrevBtn.addEventListener("click", function () { if (currentStep > 1) { currentStep--; updateModalStepView(); } });
      }

      const contactForm = document.getElementById("general-contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const fb = document.getElementById("contact-feedback");
          fb.className = "form-feedback success";
          fb.textContent = "Thank you. Your consultation inquiry has been logged in demonstration mode.";
          contactForm.reset();
        });
      }
    })();
  </script>
</body>
</html>
