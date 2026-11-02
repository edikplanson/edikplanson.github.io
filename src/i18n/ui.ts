import type { Lang } from "../config";

export const languages: Record<Lang, { label: string; short: string }> = {
  en: { label: "English", short: "EN" },
  fr: { label: "Français", short: "FR" },
};

export const defaultLang: Lang = "en";

/** Navigation, written once with canonical (language-neutral) route paths. */
export const navItems = [
  { route: "/", key: "nav.home" },
  { route: "/projects/", key: "nav.projects" },
  { route: "/skills/", key: "nav.skills" },
  { route: "/experience/", key: "nav.experience" },
  { route: "/education/", key: "nav.education" },
  { route: "/press/", key: "nav.press", requires: "press" },
  { route: "/career/", key: "nav.career" },
  { route: "/contact/", key: "nav.contact" },
] as const;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.press": "Press",
    "nav.career": "Career",
    "nav.contact": "Contact",

    "hero.greeting": "Hello! 👋",
    "hero.intro": "I'm",

    "about.heading": "About",

    "home.projects.text": "personal and university projects",
    "home.skills.text": "Technical, software and transferable",
    "home.experience.text": "Internships, collaborations and volunteering",
    "home.education.text": "BUT GEII, BIA and Baccalauréat",
    "home.press.text": "Media coverage and interviews",
    "home.career.text": "LinkedIn and CV",

    "projects.subtitle":
      "The personal and university projects that built my skills, from a robotic hand to a life-size Wall-E animatronic.",
    "skills.subtitle":
      "The skills built through my projects and experiences, with the hardware robotics ones first.",
    "experience.subtitle":
      "The professional and volunteer experiences that consolidated and broadened my abilities.",
    "education.subtitle":
      "My academic path, from the Baccalauréat to the BUT GEII on the Industrial Automation and Computing track.",
    "press.subtitle":
      "Articles, interviews and media coverage about my projects.",
    "press.empty": "No coverage listed yet.",
    "career.subtitle": "My LinkedIn profile, my CV in French and English, and where I want to work.",
    "career.linkedin": "LinkedIn",
    "career.linkedinView": "See my profile",
    "career.mobility": "Mobility",
    "press.read": "See the article",
    "contact.subtitle":
      "A question, an internship opportunity, or simply the urge to talk robotics? Write to me.",

    "contact.emailPerso": "Personal email",
    "contact.emailEcole": "School email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.interests": "Interests",

    "cv.label": "CV",
    "cv.heading": "CV",
    "cv.french": "French version",
    "cv.english": "English version",
    "cv.view": "See PDF",
    "cv.openCurrent": "Open my CV, English and French (PDF)",

    "footer.rights": "All rights reserved.",
    "lang.switchLabel": "Language",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.press": "Presse",
    "nav.career": "Carrière",
    "nav.contact": "Contact",

    "hero.greeting": "Bonjour ! 👋",
    "hero.intro": "Je suis",

    "about.heading": "À propos",

    "home.projects.text": "projets personnels et universitaires",
    "home.skills.text": "Techniques, logicielles et transversales",
    "home.experience.text": "Stages, collaborations et bénévolat",
    "home.education.text": "BUT GEII, BIA et baccalauréat",
    "home.press.text": "Retombées presse et interviews",
    "home.career.text": "LinkedIn et CV",

    "projects.subtitle":
      "Les projets personnels et universitaires qui ont construit mes compétences, de la main robotique au Wall-E animatronique à taille réelle.",
    "skills.subtitle":
      "Les compétences acquises au fil de mes projets et expériences, celles utiles en robotique hardware en premier.",
    "experience.subtitle":
      "Les expériences professionnelles et associatives qui ont consolidé et diversifié mes capacités.",
    "education.subtitle":
      "Mon parcours scolaire, du baccalauréat au BUT GEII parcours Automatisme et Informatique Industrielle.",
    "press.subtitle":
      "Articles, interviews et retombées presse à propos de mes projets.",
    "press.empty": "Aucune retombée presse pour le moment.",
    "career.subtitle": "Mon profil LinkedIn, mon CV en français et en anglais, et où je veux travailler.",
    "career.linkedin": "LinkedIn",
    "career.linkedinView": "Voir mon profil",
    "career.mobility": "Mobilité",
    "press.read": "Voir l'article",
    "contact.subtitle":
      "Une question, une opportunité de stage ou simplement l'envie d'échanger sur la robotique ? Écrivez-moi.",

    "contact.emailPerso": "Email personnel",
    "contact.emailEcole": "Email école",
    "contact.phone": "Téléphone",
    "contact.address": "Adresse",
    "contact.interests": "Centres d'intérêt",

    "cv.label": "CV",
    "cv.heading": "CV",
    "cv.french": "Version française",
    "cv.english": "Version anglaise",
    "cv.view": "Voir le PDF",
    "cv.openCurrent": "Ouvrir mon CV, anglais et français (PDF)",

    "footer.rights": "Tous droits réservés.",
    "lang.switchLabel": "Langue",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
