/* GTL Mobile Welding — site behavior */
(function () {
  "use strict";

  /* ── Mobile nav toggle ───────────────────────────────── */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── Header shadow on scroll ─────────────────────────── */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll reveal ───────────────────────────────────── */
  var revealTargets = document.querySelectorAll(
    ".service, .steps li, .stat, .faq-item, .story-copy, .story-aside, .rig-grid > div, .quote-grid > *"
  );

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 3) * 70 + "ms";
      observer.observe(el);
    });
  }

  /* ── Footer year ─────────────────────────────────────── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Quote form (AJAX to Formspree, with fallbacks) ──── */
  var form = document.getElementById("quote-form");
  var status = document.getElementById("form-status");
  var submitBtn = document.getElementById("qf-submit");

  if (form && status && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Endpoint not configured yet (see README) — fall back to email
      // so a live visitor is never left at a dead end.
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        var data = new FormData(form);
        var body =
          "Name: " + data.get("name") + "\n" +
          "Phone: " + data.get("phone") + "\n" +
          "Town: " + data.get("town") + "\n" +
          "Job: " + data.get("job_type") + "\n" +
          "How soon: " + data.get("urgency") + "\n\n" +
          data.get("details");
        window.location.href =
          "mailto:ryan@darkstarnews.com" +
          "?subject=" + encodeURIComponent("Quote request — GTL Mobile Welding") +
          "&body=" + encodeURIComponent(body);
        status.className = "form-status";
        status.textContent = "Opening your email app to send the request…";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      status.className = "form-status";
      status.textContent = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          status.className = "form-status is-success";
          status.textContent =
            "Got it — your request is in. I'll get back to you shortly, usually same day. " +
            "Photos help: text them to (203) 555-0148.";
          submitBtn.textContent = "Request Sent";
        })
        .catch(function () {
          status.className = "form-status is-error";
          status.textContent =
            "Something went wrong sending the form. Please call or text (203) 555-0148 instead — that always works.";
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Quote Request";
        });
    });
  }
})();
