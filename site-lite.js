const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const menuLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const langPage = document.body?.dataset.langPage;
const galleryImages = document.querySelectorAll(".gallery-media img");
const preferredLanguageKey = "luca-preferred-language";

const updateStoredLanguage = (value) => {
  if (value === "ko" || value === "vi") {
    window.localStorage.setItem(preferredLanguageKey, value);
  }
};

if (langPage === "select") {
  const preferredLanguage = window.localStorage.getItem(preferredLanguageKey);

  if (preferredLanguage === "ko" || preferredLanguage === "vi") {
    window.location.replace(`${preferredLanguage}.html`);
  }
} else {
  updateStoredLanguage(langPage);
}

document.addEventListener("click", (event) => {
  const languageLink = event.target.closest("[data-lang-link]");

  if (languageLink) {
    updateStoredLanguage(languageLink.dataset.langLink);
    return;
  }

  const menuLink = event.target.closest(".site-nav a");

  if (!menuLink) {
    return;
  }

  const targetId = menuLink.getAttribute("href");

  if (!targetId?.startsWith("#")) {
    return;
  }

  const targetSection = document.querySelector(targetId);

  if (!targetSection) {
    return;
  }

  event.preventDefault();
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("name")?.value.trim();
    const isKoreanPage = document.documentElement.lang === "ko";
    const message = isKoreanPage
      ? (userName
          ? `${userName}\uB2D8, \uC0C1\uB2F4 \uBB38\uC758\uAC00 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Luca Montessori\uC5D0\uC11C \uD655\uC778 \uD6C4 \uACE7 \uC548\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.`
          : `\uC0C1\uB2F4 \uBB38\uC758\uAC00 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Luca Montessori\uC5D0\uC11C \uD655\uC778 \uD6C4 \uC548\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.`)
      : (userName
          ? `C\u1EA3m \u01A1n ${userName}. Luca Montessori \u0111\u00E3 nh\u1EADn \u0111\u01B0\u1EE3c th\u00F4ng tin t\u01B0 v\u1EA5n v\u00E0 s\u1EBD s\u1EDBm li\u00EAn h\u1EC7 \u0111\u1EC3 h\u1ED7 tr\u1EE3 ph\u1EE5 huynh.`
          : `Luca Montessori \u0111\u00E3 nh\u1EADn \u0111\u01B0\u1EE3c th\u00F4ng tin t\u01B0 v\u1EA5n v\u00E0 s\u1EBD s\u1EDBm li\u00EAn h\u1EC7 l\u1EA1i.`);

    formMessage.textContent = message;
    contactForm.reset();
  });
}

if (menuLinks.length > 0 && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = `#${entry.target.id}`;

        menuLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === currentId);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -20% 0px"
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

galleryImages.forEach((image) => {
  const media = image.closest(".gallery-media");

  if (!media) {
    return;
  }

  const showFallback = () => {
    media.classList.add("has-fallback");
  };

  if (!image.getAttribute("src") || (image.complete && image.naturalWidth === 0)) {
    showFallback();
    return;
  }

  image.addEventListener("error", showFallback, { once: true });
});

if (menuLinks.length > 0) {
  const toggleScrolledState = () => {
    document.body.classList.toggle("menu-scrolled", window.scrollY > 16);
  };

  toggleScrolledState();
  window.addEventListener("scroll", toggleScrolledState, { passive: true });
}
