document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector("i");
  const themeText = themeToggle?.querySelector("span");
  const savedTheme = localStorage.getItem("portfolio-theme");

  const setTheme = (theme) => {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);
    localStorage.setItem("portfolio-theme", theme);

    if (themeToggle && themeIcon && themeText) {
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme",
      );
      themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
      themeText.textContent = isLight ? "Dark" : "Light";
    }

    const navbar = document.getElementById("mainNav");
    if (navbar) {
      navbar.classList.toggle("navbar-dark", !isLight);
      navbar.classList.toggle("navbar-light", isLight);
    }
  };

  setTheme(savedTheme === "light" ? "light" : "dark");

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme")
      ? "dark"
      : "light";
    setTheme(nextTheme);
  });

  const screenshotModalElement = document.getElementById("screenshotModal");
  const screenshotModalImage = document.getElementById("screenshotModalImage");
  const screenshotModalTitle = document.getElementById("screenshotModalTitle");
  const screenshotPrev = document.getElementById("screenshotPrev");
  const screenshotNext = document.getElementById("screenshotNext");
  const screenshotModal =
    screenshotModalElement && window.bootstrap
      ? new bootstrap.Modal(screenshotModalElement)
      : null;
  let screenshotImages = [];
  let screenshotIndex = 0;

  const setScreenshot = (index) => {
    if (
      !screenshotModalImage ||
      !screenshotModalTitle ||
      screenshotImages.length === 0
    ) {
      return;
    }

    screenshotIndex =
      (index + screenshotImages.length) % screenshotImages.length;

    const image = screenshotImages[screenshotIndex];
    screenshotModalImage.src = image.currentSrc || image.src;
    screenshotModalImage.alt = image.alt || "Project screenshot";
    screenshotModalTitle.textContent = `${image.alt || "Project screenshot"} (${screenshotIndex + 1}/${screenshotImages.length})`;

    const hasMultipleImages = screenshotImages.length > 1;
    screenshotPrev?.classList.toggle("d-none", !hasMultipleImages);
    screenshotNext?.classList.toggle("d-none", !hasMultipleImages);
  };

  const getScreenshotGroup = (image) => {
    const imageGroup =
      image.closest(".project-media, .hackathon-feature, .certificate-card") ||
      document;

    return Array.from(imageGroup.querySelectorAll("img")).filter(
      (groupImage) => groupImage.getAttribute("src"),
    );
  };

  document
    .querySelectorAll(
      ".project-media img, .certificate-card img, .hackathon-certificate img",
    )
    .forEach((image) => {
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute("title", "Click to view larger");

      const openScreenshot = () => {
        if (
          !screenshotModal ||
          !screenshotModalImage ||
          !screenshotModalTitle
        ) {
          return;
        }

        screenshotImages = getScreenshotGroup(image);
        setScreenshot(screenshotImages.indexOf(image));
        screenshotModal.show();
      };

      image.addEventListener("click", openScreenshot);
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openScreenshot();
        }
      });
    });

  screenshotPrev?.addEventListener("click", () => {
    setScreenshot(screenshotIndex - 1);
  });

  screenshotNext?.addEventListener("click", () => {
    setScreenshot(screenshotIndex + 1);
  });

  screenshotModalElement?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      setScreenshot(screenshotIndex - 1);
    }

    if (event.key === "ArrowRight") {
      setScreenshot(screenshotIndex + 1);
    }
  });

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 90,
      easing: "ease-out-cubic",
    });
  }

  const navbar = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
      navbar.style.padding = "10px 0";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.padding = "15px 0";
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
