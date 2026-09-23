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
    "nav.contact": "Contact",

    "hero.greeting": "Hello! 👋",
    "hero.intro": "I'm",

    "about.heading": "About",

    "home.projects.text": "personal and university projects",
    "home.skills.text": "Technical, software and transferable",
    "home.experience.text": "Internships, collaborations and volunteering",
    "home.education.text": "BUT GEII, BIA and Baccalauréat",
    "home.press.text": "Media coverage and interviews",

    "projects.subtitle":
      "The personal and university projects that built my skills, from a robotic hand to a life-size Wall-E animatronic.",
    "skills.subtitle":
      "The technical, software and transferable skills developed through my projects and experiences.",
    "experience.subtitle":
      "The professional and volunteer experiences that consolidated and broadened my abilities.",
    "education.subtitle":
      "My academic path, from the Baccalauréat to the BUT GEII on the Industrial Automation and Computing track.",
    "press.subtitle":
      "Articles, interviews and media coverage about my projects.",
    "press.empty": "No coverage listed yet.",
    "press.read": "Read the article",
    "contact.subtitle":
      "A question, an internship opportunity, or simply the urge to talk robotics? Write to me.",

    "contact.emailPerso": "Personal email",
    "contact.emailEcole": "School email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.interests": "Interests",

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
    "nav.contact": "Contact",

    "hero.greeting": "Bonjour ! 👋",
    "hero.intro": "Je suis",

    "about.heading": "À propos",

    "home.projects.text": "projets personnels et universitaires",
    "home.skills.text": "Techniques, logicielles et transversales",
    "home.experience.text": "Stages, collaborations et bénévolat",
    "home.education.text": "BUT GEII, BIA et baccalauréat",
    "home.press.text": "Retombées presse et interviews",

    "projects.subtitle":
      "Les projets personnels et universitaires qui ont construit mes compétences, de la main robotique au Wall-E animatronique à taille réelle.",
    "skills.subtitle":
      "Les compétences techniques, logicielles et transversales développées au fil de mes projets et de mes expériences.",
    "experience.subtitle":
      "Les expériences professionnelles et associatives qui ont consolidé et diversifié mes capacités.",
    "education.subtitle":
      "Mon parcours scolaire, du baccalauréat au BUT GEII parcours Automatisme et Informatique Industrielle.",
    "press.subtitle":
      "Articles, interviews et retombées presse à propos de mes projets.",
    "press.empty": "Aucune retombée presse pour le moment.",
    "press.read": "Lire l'article",
    "contact.subtitle":
      "Une question, une opportunité de stage ou simplement l'envie d'échanger sur la robotique ? Écrivez-moi.",

    "contact.emailPerso": "Email personnel",
    "contact.emailEcole": "Email école",
    "contact.phone": "Téléphone",
    "contact.address": "Adresse",
    "contact.interests": "Centres d'intérêt",

    "footer.rights": "Tous droits réservés.",
    "lang.switchLabel": "Langue",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
