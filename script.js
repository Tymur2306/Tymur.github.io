document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    uk: {
      nav_works: "РОБОТИ",
      nav_about: "ПРО МЕНЕ",
      nav_exhibitions: "ВИСТАВКИ",
      nav_contacts: "КОНТАКТИ",
      hero_subtitle: "ХУДОЖНИК ОЛІЙНОГО ЖИВОПИСУ",
      about_title: "Про мене",
      about_text: "У тиші ховається особлива краса.",
      works_title: "Виставки та роботи",
      works_text: "Галерея робіт або сітка картин.",
      contacts_title: "Контакти",
      contacts_text: "Email, соцмережі або форма для зв'язку."
    },
    en: {
      nav_works: "WORKS",
      nav_about: "ABOUT",
      nav_exhibitions: "EXHIBITIONS",
      nav_contacts: "CONTACT",
      hero_subtitle: "OIL PAINTING ARTIST",
      about_title: "About Me",
      about_text: "A short description of your artistic vision, style, and ideas.",
      works_title: "Exhibitions & Works",
      works_text: "Gallery of works or grid of paintings.",
      contacts_title: "Contact",
      contacts_text: "Email, social media, or contact form."
    }
  };

  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.textContent = translations[lang][key];
      }
    });

    const langUk = document.getElementById('lang-uk');
    const langEn = document.getElementById('lang-en');

    if (lang === 'en') {
      if (langEn) langEn.classList.add('active');
      if (langUk) langUk.classList.remove('active');
    } else {
      if (langUk) langUk.classList.add('active');
      if (langEn) langEn.classList.remove('active');
    }

    localStorage.setItem('selectedLang', lang);
  }

  // Обробка кліків без примусовогоpreventDefault
  document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.id === 'lang-uk' || target.closest('#lang-uk')) {
      e.preventDefault();
      setLanguage('uk');
    } else if (target.id === 'lang-en' || target.closest('#lang-en')) {
      e.preventDefault();
      setLanguage('en');
    }
  });

  const savedLang = localStorage.getItem('selectedLang') || 'uk';
  setLanguage(savedLang);
});