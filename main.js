/**
 * DOCTOR CARES HOSPITAL — UNIVERSAL JAVASCRIPT ENGINE
 * Version: 1.0.0 (2026 Production Build)
 */
(function () {
  "use strict";

  // 1. Preloader Dismissal (3 Seconds Guaranteed)
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;
    setTimeout(function () {
      preloader.classList.add("fade-out");
      setTimeout(function () {
        preloader.style.display = "none";
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, 600);
    }, 3000);
  }

  // 2. Sticky Island Header Compactor & Back-to-Top
  function initHeaderAndScroll() {
    const siteHeader = document.getElementById("site-header");
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    let ticking = false;

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const scrollY = window.scrollY;
          if (siteHeader) {
            if (scrollY > 30) siteHeader.classList.add("header-compact");
            else siteHeader.classList.remove("header-compact");
          }
          if (scrollTopBtn) {
            if (scrollY > 400) scrollTopBtn.classList.add("is-visible");
            else scrollTopBtn.classList.remove("is-visible");
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // 3. Mobile Navigation Drawer
  function initMobileDrawer() {
    const menuToggleBtn = document.getElementById("menu-toggle-btn");
    const primaryNavbar = document.getElementById("primary-navbar");
    const navBackdrop = document.getElementById("nav-backdrop");
    const navLinks = document.querySelectorAll(".nav-pill-link");

    if (!menuToggleBtn || !primaryNavbar) return;

    function openDrawer() {
      menuToggleBtn.classList.add("is-open");
      menuToggleBtn.setAttribute("aria-expanded", "true");
      primaryNavbar.classList.add("is-open");
      if (navBackdrop) navBackdrop.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      menuToggleBtn.classList.remove("is-open");
      menuToggleBtn.setAttribute("aria-expanded", "false");
      primaryNavbar.classList.remove("is-open");
      if (navBackdrop) navBackdrop.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    menuToggleBtn.addEventListener("click", function () {
      const isOpen = menuToggleBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) closeDrawer(); else openDrawer();
    });

    if (navBackdrop) navBackdrop.addEventListener("click", closeDrawer);
    navLinks.forEach(link => link.addEventListener("click", closeDrawer));
  }

  // 4. Accordion Controller
  function initAccordions() {
    document.querySelectorAll(".faq-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        const content = document.getElementById(trigger.getAttribute("aria-controls"));
        
        // Single open pattern
        document.querySelectorAll(".faq-trigger").forEach(t => {
          t.setAttribute("aria-expanded", "false");
          const sibling = document.getElementById(t.getAttribute("aria-controls"));
          if (sibling) sibling.hidden = true;
        });

        if (!isExpanded && content) {
          trigger.setAttribute("aria-expanded", "true");
          content.hidden = false;
        }
      });
    });
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", function () {
    initPreloader();
    initHeaderAndScroll();
    initMobileDrawer();
    initAccordions();
  });
})();