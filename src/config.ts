/**
 * Language-neutral settings. Everything that reads as prose lives in
 * `content` below, keyed by language.
 */
export const siteConfig = {
  name: "Edik Planson",
  /** Principal accent. Kept calm: the syntax palette below does the colour work. */
  accentColor: "#4ec9b0",
  social: {
    email: "edikpcontact@gmail.com",
    linkedin: "",
    twitter: "",
    github: "",
  },
  /**
   * VSCode "Dark+" syntax tokens, used as rotating accents so a page is
   * not a single colour. Order matters: sections step through it.
   */
  palette: [
    "#4ec9b0", // type
    "#c586c0", // control
    "#dcdcaa", // function
    "#569cd6", // keyword
    "#ce9178", // string
    "#b5cea8", // number
    "#9cdcfe", // variable
    "#4fc1ff", // constant
  ],
  contact: {
    emailPerso: "edikpcontact@gmail.com",
    emailEcole: "edik.planson@etu.inp-n7.fr",
    phone: "06 02 16 18 87",
    website: "https://edikplanson.wixsite.com/edikplanson",
  },
};

export const content = {
  en: {
    title: "Maker & electrical engineering student",
    description:
      "Portfolio of Edik Planson — engineering student at INP-ENSEEIHT in Toulouse, passionate about robotics and animatronics.",
    address: "2 Rue Charles Camichel, 31000 Toulouse, France",
    aboutMe:
      "Passionate about robotics since I was little and full of wild ideas, I spend my free time building complex and fun projects that grow my expertise in robotics. I'm a first year student at INP-ENSEEIHT in Toulouse. My goal: to work in robotics, and in particular film animatronics (Wētā Workshop is my dream), while keeping the door open to space, humanoid or medical robotics.",
    skills: [
      "C/C++",
      "Python",
      "Embedded programming",
      "CAD",
      "Electronics",
      "3D Printing",
      "Robotics",
    ],
    interests: ["Robotics", "Tinkering", "Stones and crystals", "Cinema"],
    projects: [
      {
        name: "Wall-E Animatronic",
        description:
          "This project aims to build a life-size, fully functional Wall-E robot. It can speak, move its head, arms and hands, and even drive around on its tracks.",
        link: "",
        media: "projects/wall-e-animatronic",
        dateRange: "2023 - 2025",
        type: "Personal project",
        skills: ["Animatronics", "Arduino", "3D Printing", "Mechanics"],
      },
      {
        name: "Wall-E Animatronic Head",
        description:
          "Part of the life-size Wall-E project, this motorised head is entirely remote controlled. It can rotate on two axes and raise its eyebrows.",
        link: "",
        media: "projects/wall-e-head",
        dateRange: "2023 - 2024",
        type: "Personal project",
        skills: ["TinkerCAD", "3D Printing", "Servomotors", "Radio control"],
      },
      {
        name: "Smart Car Connected Vehicle",
        description:
          "Design of a circuit with sized and soldered components. This board handles the signals coming from the car, making it possible to drive it over Bluetooth.",
        link: "",
        media: "projects/smart-car",
        dateRange: "2024",
        type: "University project",
        skills: ["Proteus", "PCB routing", "Bluetooth", "Soldering"],
      },
      {
        name: "Glove-Controlled Robotic Hand",
        description:
          "My very first ambitious project is a robotic hand controlled by a glove, similar to the ones seen in films such as Pacific Rim and Real Steel.",
        link: "",
        media: "projects/robotic-hand-glove",
        dateRange: "2019 - 2020",
        type: "Personal project",
        skills: ["Arduino", "3D Printing", "Servomotors", "Flex sensors"],
      },
      {
        name: "Mind-Controlled Drink Server",
        description:
          "I made a children's mind-control toy usable from an Arduino, then integrated it into a system that drives a servomotor pouring a drink using my thoughts alone.",
        link: "",
        media: "projects/mind-drink-server",
        dateRange: "2023",
        type: "Personal project",
        skills: ["Arduino", "EEG / MindFlex", "Servomotor"],
      },
      {
        name: "Automated Storage Station",
        description:
          "This project consists of programming a station that stores parts arriving from a conveyor belt. Managing several axes of movement was an essential requirement.",
        link: "",
        media: "projects/storage-station",
        dateRange: "2024",
        type: "University project",
        skills: ["GRAFCET", "Programmable logic controller", "Multi-axis"],
      },
      {
        name: "Airsoft Kill Counter",
        description:
          "As both an Airsoft and a video game player, I designed a kill counter inspired by the game Counter-Strike. The device lets me track the statistics of my Airsoft matches.",
        link: "",
        media: "projects/airsoft-counter",
        dateRange: "2023",
        type: "Personal project",
        skills: ["Arduino", "3D modelling", "3D Printing"],
      },
      {
        name: "Cheating Pencil Case",
        description:
          "This pencil case is built to display information on a screen when it is brought near a glue stick. Designing it was particularly challenging.",
        link: "",
        media: "projects/pencil-case",
        dateRange: "2021",
        type: "Personal project",
        skills: ["C++", "Arduino", "Soldering", "Display"],
      },
      {
        name: "0 to 9 Counter on a 7-Segment Display",
        description:
          "Originally designed inside Minecraft, where I discovered that one of the game's items, the repeater, behaves much like a diode in electronics.",
        link: "",
        media: "projects/seven-segment-counter",
        dateRange: "2022",
        type: "Personal project",
        skills: ["Electronics", "Diodes", "7-segment display"],
      },
      {
        name: "Feeding Robot",
        description:
          "Inspired by an idea a friend suggested, I found it both fun and instructive to design a robotic arm able to follow a defined trajectory to carry out a precise task.",
        link: "",
        media: "projects/feeding-robot",
        dateRange: "2021",
        type: "Personal project",
        skills: ["Robotic arm", "Multi-axis programming"],
      },
      {
        name: "Taser Follower Robot",
        description:
          "This robot, however potentially dangerous, was captivating to design. I combined LEGO motors with an Arduino, and wrote an algorithm that lets the robot follow me around.",
        link: "",
        media: "projects/taser-robot",
        dateRange: "2022",
        type: "Personal project",
        skills: ["Arduino", "LEGO motors", "Ultrasonic sensor"],
      },
      {
        name: "COVID Social Distancing Detector",
        description:
          "During the COVID-19 pandemic I came across a toy online that could measure the distance between people. It inspired me to design a social distancing detector.",
        link: "",
        media: "projects/covid-detector",
        dateRange: "2021",
        type: "Personal project",
        skills: ["Arduino", "Ultrasonic sensor", "Distance measurement"],
      },
      {
        name: "Garry's Mod Physics Gun Replica",
        description:
          "For a convention dedicated to video games and manga, I built the signature prop from one of my favourite video games. The build was based on photographs alone.",
        link: "",
        media: "projects/physic-gun",
        dateRange: "2023",
        type: "Personal project",
        skills: ["3D modelling", "3D Printing", "Cosplay"],
      },
    ],
    experience: [
      {
        company: "NUS — National University of Singapore",
        title: "Research engineering internship",
        logo: "/media/logos/nus.webp",
        dateRange: "May 2026 - July 2026",
        bullets: [
          "Project: design and integration of tactile sensors, and development of a teleoperation system to train Visual-Tactile-Language-Action (VTLA) models",
          "A VTLA (Visual-Tactile-Language-Action) model is a large language model trained to combine task objectives, visual information and tactile feedback in order to generate efficient motor actions for a robot",
        ],
      },
      {
        company: "EPFL AI Team Hackathon (Physical AI) — Lausanne",
        title: "Physical AI Hackathon prize winner",
        logo: "/media/logos/epfl.webp",
        dateRange: "May 2026",
        bullets: [
          "Won 2nd place in the Hardware Track of the EPFL AI Team Hackathon (Physical AI)",
          "Trained a small VLA model on a Hugging Face SO-101 robot to autonomously grasp a bottle and water plants",
          "Monitored soil moisture, temperature and other environmental data with an ESP32",
        ],
      },
      {
        company:
          "LAAS-CNRS — Laboratory for Analysis and Architecture of Systems",
        title: "Research engineering internship",
        logo: "/media/logos/laas-cnrs.webp",
        dateRange: "March 2026 - May 2026",
        bullets: [
          "Project: design and implementation of tactile sensors on a robot for the deployment of a VTLA model",
          "A VTLA (Visual-Tactile-Language-Action) model is a large language model trained to combine task objectives, visual information and tactile feedback in order to generate efficient motor actions for a robot",
          "GEPETTO team, supervised by Vincent Bonnet",
        ],
      },
      {
        company: "Y Combinator — RoboHacks by Innate, San Francisco",
        title: "Hackathon entertainer",
        logo: "/media/logos/y-combinator.svg",
        dateRange: "April 2026",
        bullets: [
          "Brought my fully custom-built WALL-E animatronic robot to Innate's 2026 Physical AI Hackathon, hosted at the Y Combinator office in San Francisco",
          "Entertained and inspired sponsors and contestants while showcasing my work in robotics, hardware and animatronics",
        ],
      },
      {
        company: "IUT GEII, Toulouse",
        title: "Tutor",
        logo: "/media/logos/iut-toulouse.svg",
        dateRange: "October 2024 - January 2026",
        bullets: [
          "Tutoring first-year and second-year students",
          "Explaining lectures, tutorials (TD) and practical work (TP)",
        ],
      },
      {
        company:
          "LAAS-CNRS — Laboratory for Analysis and Architecture of Systems",
        title: "Research engineering internship",
        logo: "/media/logos/laas-cnrs.webp",
        dateRange: "May 2025 - July 2025",
        bullets: [
          "Designed and integrated a first complete version of an instrumented insole",
          "Measured foot motion and forces for lower-body kinematics estimation",
        ],
      },
      {
        company: "Keyestudio",
        title: "Brand collaboration",
        dateRange: "2024",
        bullets: [
          "Selected by the brand to showcase one of their robotics kits on TikTok in exchange for the product",
          "Created video content around assembling and programming the kit",
        ],
      },
      {
        company: "Launaguet Sport Loisir Culture (LSLC)",
        title: "Volunteer IT support",
        dateRange: "2022 - 2024",
        bullets: [
          "Solved the association's IT problems",
          "Diagnosed and repaired computer and printer faults",
        ],
      },
      {
        company: "LNCMI-CNRS — National Laboratory for Intense Magnetic Fields",
        title: "Observation internship",
        dateRange: "2019",
        bullets: [
          "Observed how researchers and engineers work together",
          "Discovered real research challenges during my year-10 work placement",
        ],
      },
      {
        company: "FabLab",
        title: "Learning programmable electronics",
        dateRange: "2016 - 2018",
        bullets: [
          "Discovered programmable electronics with Arduino",
          "Learned 3D printing and 3D modelling with TinkerCad",
        ],
      },
      {
        company: "Robotics Trophy — Cité de l'Espace",
        title: "Competitor",
        dateRange: "2014",
        bullets: [
          "Fourth place out of twelve competing clubs",
          "Competed against teams from INSA and ENSEEIHT",
        ],
      },
    ],
    education: [
      {
        school: "ENSEEIHT — Toulouse INP",
        degree:
          "Engineering degree (Diplôme d'ingénieur), Electronics, Electrical Energy and Automation (3EA)",
        logo: "/media/logos/enseeiht.webp",
        dateRange: "2026 - 2029",
        achievements: [
          "3EA track: electrical engineering, electronics, automation and embedded systems",
        ],
      },

      {
        school: "IUT Paul Sabatier, Toulouse",
        logo: "/media/logos/iut-toulouse.svg",
        degree:
          "BUT GEII (Electrical Engineering and Industrial Computing), Industrial Automation and Computing (AII) track",
        dateRange: "2023 - 2026",
        achievements: [
          "Graduated from the BUT GEII, AII track",
          "Admitted to ENSEEIHT — Toulouse INP by application after the third year",
        ],
      },
      {
        school: "Aeronautical Initiation Certificate (BIA), Toulouse",
        degree: "Aeronautical Initiation Certificate",
        dateRange: "2022",
        achievements: ["Obtained the BIA with honours (Assez Bien)"],
      },
      {
        school: "Lycée Ozenne, Toulouse",
        degree:
          "French Baccalauréat, majors in Mathematics and Digital & Computer Science",
        dateRange: "2020 - 2023",
        achievements: ["Obtained with honours (Bien)"],
      },
    ],
    /**
     * Newspaper / media coverage ABOUT you (not work you authored).
     * Keep the headline in the language the article was published in —
     * only `excerpt` is worth translating. Empty this array and the
     * Press tab disappears from the site.
     */
    press: [
      {
        outlet: "Neo",
        logo: "/media/press/neo.webp",
        title:
          "Edik est passionné de bricolage depuis toujours. Alors quand sa mère retrouve sur Internet le WALL-E miniature de son enfance, il a un déclic : et s’il construisait le fameux robot à taille réelle ?",
        date: "31 March 2026",
        format: "Video",
        link: "https://www.instagram.com/reels/DX6aqtosFLK/",
        excerpt:
          "Edik has always been passionate about DIY projects. So when his mother found the miniature WALL-E from his childhood online, it sparked an idea: what if he built the famous robot at full scale?",
      },
      {
        outlet: "Le Média Positif",
        logo: "/media/press/le-media-positif.webp",
        title:
          "À 19 ans, Edik, étudiant à l’IUT GEII de Toulouse, a donné vie à son rêve : recréer Wall-E.",
        date: "25 February 2026",
        format: "Video",
        link: "https://www.instagram.com/reels/DVMR0g4im3a/",
        excerpt:
          "At 19, Edik, a student at the IUT GEII in Toulouse, brought his dream to life: recreating Wall-E.",
      },
      {
        outlet: "La Dépêche",
        logo: "/media/press/la-depeche.webp",
        title:
          "« J’ai dû m’y reprendre plusieurs fois » : à dix-neuf ans, il recrée Wall-E en 3D, un robot made in Toulouse pour émerveiller petits et grands",
        date: "3 August 2025",
        format: "Print",
        link:
          "https://www.ladepeche.fr/2025/08/03/jai-du-my-reprendre-plusieurs-fois-a-dix-neuf-ans-il-recree-wall-e-en-3d-un-robot-made-in-toulouse-pour-emerveiller-petits-et-grands-12856139.php",
        excerpt:
          "“I had to try several times”: at 19, he recreates Wall-E in real life, a robot made in Toulouse designed to amaze both children and adults.",
      },
      {
        outlet: "Université de Toulouse",
        logo: "/media/press/universite-de-toulouse.webp",
        title:
          "Edik Planson, 19 ans, étudiant en 2ᵉ année de BUT GEII à l’Université de Toulouse, a consacré plus d’un an et demi à concevoir son propre robot Wall-E, entièrement fait main.",
        date: "8 April 2025",
        format: "Post",
        link: "https://www.instagram.com/p/DIL9ZbBtE2S/",
        excerpt:
          "Edik Planson, 19, a second-year Electrical Engineering and Industrial Computing (BUT GEII) student at Toulouse University, spent over a year and a half designing his own Wall-E robot, entirely handcrafted.",
      },
    ],
    skillCategories: [
      {
        title: "Technical skills",
        groups: [
          {
            name: "Design",
            items: [
              "Produce a functional analysis of a system",
              "Size a component from a circuit diagram and a specification",
              "Implement a function",
              "Choose the right tool for a given build",
              "Solder through-hole and surface-mount (SMD) components",
              "Write a manufacturing file for a printed circuit board",
              "Draw up a bill of materials",
              "Produce a component layout drawing",
            ],
          },
          {
            name: "Verification",
            items: [
              "Estimate the cost of a board",
              "Simulate how a circuit behaves in Proteus",
              "Set up a test environment and build consistent test sets",
              "Use the VSCode debugger to step through code line by line",
              "Probe an electronic circuit to capture a signal",
              "Use an oscilloscope or a multimeter to analyse a signal",
              "Define measurement points on an electronic circuit",
              "Identify a fault in an electronic system",
            ],
          },
          {
            name: "Wiring and operating a PLC",
            items: [
              "Wire components to the inputs and outputs of a Siemens PLC",
              "Interact with an HMI implemented in a Schneider system",
            ],
          },
        ],
      },
      {
        title: "Software skills",
        groups: [
          {
            name: "Proteus",
            items: [
              "Create a circuit diagram based on a lab notebook",
              "Produce the GERBER file of a circuit from a schematic",
              "Simulate a function of an electrical system",
            ],
          },
          {
            name: "C++",
            items: [
              "Write functions for a range of applications",
              "Program an Arduino microcontroller (Arduino IDE and VSCode)",
              "Set up UART, SPI and I2C links between components",
              "Write unit tests for functions",
              "Prototype functions with Doxygen comments",
            ],
          },
          {
            name: "Python",
            items: [
              "Write functions for a range of applications",
              "Process data from a CSV file in a Python program",
              "Generate a JSON file automatically to store data",
              "Write unit tests for functions",
            ],
          },
          {
            name: "TIA Portal",
            items: [
              "Write a program in FBD or LADDER",
              "Simulate an FBD or LADDER program",
              "Deploy a program to a Siemens PLC",
            ],
          },
          {
            name: "Control Expert",
            items: [
              "Write a program in GRAFCET",
              "Simulate a GRAFCET program",
              "Deploy a program to a Schneider PLC",
            ],
          },
          {
            name: "Vijeo Designer",
            items: [
              "Build an HMI (Human-Machine Interface)",
              "Simulate the HMI with forced values",
              "Deploy an HMI into an existing system",
            ],
          },
          {
            name: "CoppeliaSim",
            items: [
              "Model a simple robot with several rotation axes",
              "Add sensors to a robot model",
              "Use Python to validate a geometric model with CoppeliaSim",
            ],
          },
          {
            name: "TinkerCad",
            items: [
              "Model a part in 3D in TinkerCad",
              "Fix defects in an existing 3D model",
              "Build an electronic prototype around an Arduino",
            ],
          },
          {
            name: "OnShape / Fusion 360",
            items: [
              "Model a part in 3D in OnShape from engineering drawings",
              "Model a simple part in 3D in Fusion 360 from engineering drawings",
            ],
          },
          {
            name: "Word / Excel",
            items: [
              "Write the manufacturing file and lab notebook of a technical project",
              "Create different charts from a data set",
              "Sort and display data according to various criteria",
            ],
          },
        ],
      },
      {
        title: "Transferable skills",
        groups: [
          {
            name: "Technical English",
            items: [
              "Read and understand the datasheet of an electrical component",
              "Describe a technological system and how it works",
              "Debate the ideal behaviour of a system",
            ],
          },
          {
            name: "Teamwork",
            items: [
              "Collaborate in a group on a technical project",
              "Put ideas forward and listen to those of others",
              "Put my skills at the service of a shared goal",
            ],
          },
          {
            name: "Leadership",
            items: [
              "Assess and understand the pace of each member of a group",
              "Assign tasks according to each member's strengths",
              "Take an active part in driving the project to the desired result",
            ],
          },
          {
            name: "Determination",
            items: [
              "Be set on finishing a project within the time allotted",
              "Keep going in the face of obstacles that slow a project down",
            ],
          },
          {
            name: "Attention to detail",
            items: [
              "Watch the smallest details of a project during design and testing",
              "Never settle for the minimum, but go further than asked",
            ],
          },
        ],
      },
    ],
  },

  fr: {
    title: "Maker & étudiant en génie électrique",
    description:
      "Portfolio d'Edik Planson — étudiant ingénieur à l'INP-ENSEEIHT à Toulouse, passionné de robotique et d'animatronique.",
    address: "2 Rue Charles Camichel, 31000 Toulouse",
    aboutMe:
      "Passionné de robotique depuis tout petit et plein d'idées folles, j'occupe mon temps libre à développer des projets complexes et amusants qui construisent mon expertise en robotique. Je suis étudiant en première année à l'INP-ENSEEIHT à Toulouse. Mon objectif : travailler dans la robotique, et en particulier l'animatronique de cinéma (le Wētā Workshop me fait rêver), sans fermer la porte à la robotique spatiale, humanoïde ou médicale.",
    skills: [
      "C/C++",
      "Python",
      "Programmation embarquée",
      "CAO",
      "Électronique",
      "Impression 3D",
      "Robotique",
    ],
    interests: ["Robotique", "Bricolage", "Pierres et cristaux", "Cinéma"],
    projects: [
      {
        name: "Animatronique Wall-E",
        description:
          "Ce projet a pour but de réaliser le robot Wall-E à taille réelle et entièrement fonctionnel. Il peut parler, bouger la tête, les bras et les mains, et même rouler grâce à ses chenilles.",
        link: "",
        media: "projects/wall-e-animatronic",
        dateRange: "2023 - 2025",
        type: "Projet personnel",
        skills: ["Animatronique", "Arduino", "Impression 3D", "Mécanique"],
      },
      {
        name: "Tête animatronique de Wall-E",
        description:
          "Dans le cadre du projet visant à réaliser un Wall-E à échelle réelle, cette tête motorisée est entièrement contrôlée à distance. Elle est capable de pivoter sur deux axes et de lever les sourcils.",
        link: "",
        media: "projects/wall-e-head",
        dateRange: "2023 - 2024",
        type: "Projet personnel",
        skills: ["TinkerCAD", "Impression 3D", "Servomoteurs", "Radiocommande"],
      },
      {
        name: "Voiture connectée Smart Car",
        description:
          "Conception d'un circuit comportant des composants dimensionnés et soudés, cette carte est conçue pour gérer les signaux issus de la voiture, permettant ainsi de la piloter via Bluetooth.",
        link: "",
        media: "projects/smart-car",
        dateRange: "2024",
        type: "Projet universitaire",
        skills: ["Proteus", "Routage PCB", "Bluetooth", "Soudure"],
      },
      {
        name: "Main robotique pilotée par un gant",
        description:
          "Mon tout premier projet ambitieux est une main robotique pilotée par un gant, semblable à celles vues dans des films tels que Pacific Rim et Real Steel.",
        link: "",
        media: "projects/robotic-hand-glove",
        dateRange: "2019 - 2020",
        type: "Projet personnel",
        skills: ["Arduino", "Impression 3D", "Servomoteurs", "Capteurs flex"],
      },
      {
        name: "Serveur de boisson cérébral",
        description:
          "J'ai rendu utilisable un jouet pour enfant de contrôle mental d'un objet par un Arduino. J'ai ensuite intégré ce jouet dans un système pour piloter un servomoteur servant de la boisson, à l'aide de ma pensée.",
        link: "",
        media: "projects/mind-drink-server",
        dateRange: "2023",
        type: "Projet personnel",
        skills: ["Arduino", "EEG / MindFlex", "Servomoteur"],
      },
      {
        name: "Station de stockage automatisée",
        description:
          "Ce projet consiste à programmer une station de stockage de pièces reçues d'un convoyeur. La gestion de plusieurs axes de mouvement a été une exigence essentielle.",
        link: "",
        media: "projects/storage-station",
        dateRange: "2024",
        type: "Projet universitaire",
        skills: ["GRAFCET", "Automate programmable", "Multi-axes"],
      },
      {
        name: "Compteur d'éliminations Airsoft",
        description:
          "En tant que joueur d'Airsoft et de jeux vidéo, j'ai conçu un compteur d'éliminations inspiré du jeu vidéo Counter-Strike. Cet appareil me permet donc de suivre les statistiques de mes parties d'Airsoft.",
        link: "",
        media: "projects/airsoft-counter",
        dateRange: "2023",
        type: "Projet personnel",
        skills: ["Arduino", "Modélisation 3D", "Impression 3D"],
      },
      {
        name: "Trousse de triche",
        description:
          "Cette trousse est conçue pour afficher des informations sur un écran lorsqu'elle est approchée d'un bâton de colle. La conception de cette trousse a été particulièrement complexe.",
        link: "",
        media: "projects/pencil-case",
        dateRange: "2021",
        type: "Projet personnel",
        skills: ["C++", "Arduino", "Soudure", "Écran"],
      },
      {
        name: "Compteur de 0 à 9 sur afficheur 7 segments",
        description:
          "Initialement conçu dans Minecraft, j'ai découvert qu'un objet du jeu, le répéteur, présente des similarités avec la diode dans le domaine de l'électronique.",
        link: "",
        media: "projects/seven-segment-counter",
        dateRange: "2022",
        type: "Projet personnel",
        skills: ["Électronique", "Diodes", "Afficheur 7 segments"],
      },
      {
        name: "Robot nourrisseur",
        description:
          "S'inspirant d'une idée proposée par un ami, j'ai trouvé à la fois amusant et instructif de concevoir un bras robotisé capable de suivre une trajectoire définie pour accomplir une fonction précise.",
        link: "",
        media: "projects/feeding-robot",
        dateRange: "2021",
        type: "Projet personnel",
        skills: ["Bras robotisé", "Programmation multi-axes"],
      },
      {
        name: "Robot suiveur taser",
        description:
          "Ce robot, bien que potentiellement dangereux, a été captivant à concevoir. J'ai intégré des moteurs LEGO avec un Arduino. De plus, j'ai développé un algorithme permettant au robot de me suivre.",
        link: "",
        media: "projects/taser-robot",
        dateRange: "2022",
        type: "Projet personnel",
        skills: ["Arduino", "Moteurs LEGO", "Capteur ultrason"],
      },
      {
        name: "Détecteur de distanciation sociale COVID",
        description:
          "Pendant la pandémie de COVID-19, j'ai découvert sur Internet un jouet capable de mesurer la distance entre les personnes. Cela m'a inspiré à concevoir un détecteur de distanciation sociale.",
        link: "",
        media: "projects/covid-detector",
        dateRange: "2021",
        type: "Projet personnel",
        skills: ["Arduino", "Capteur ultrason", "Mesure de distance"],
      },
      {
        name: "Réplique du Physic Gun de Garry's Mod",
        description:
          "Pour une convention dédiée aux jeux vidéos et mangas, j'ai fabriqué l'accessoire principal d'un de mes jeux vidéos préférés. La réalisation s'est fondée uniquement sur des photographies.",
        link: "",
        media: "projects/physic-gun",
        dateRange: "2023",
        type: "Projet personnel",
        skills: ["Modélisation 3D", "Impression 3D", "Cosplay"],
      },
    ],
    experience: [
      {
        company: "NUS — National University of Singapore",
        title: "Stage ingénieur de recherche",
        logo: "/media/logos/nus.webp",
        dateRange: "Mai 2026 - Juillet 2026",
        bullets: [
          "Projet : conception et intégration de capteurs tactiles, et développement d'un système de téléopération pour l'entraînement de modèles Visual-Tactile-Language-Action (VTLA)",
          "Un modèle VTLA (Visual-Tactile-Language-Action) est un grand modèle de langage entraîné à intégrer l'objectif de la tâche, les informations visuelles et le retour tactile afin de générer des actions motrices efficaces pour un robot",
        ],
      },
      {
        company: "EPFL AI Team Hackathon (Physical AI) — Lausanne",
        title: "Lauréat du Physical AI Hackathon",
        logo: "/media/logos/epfl.webp",
        dateRange: "Mai 2026",
        bullets: [
          "2e place du Hardware Track de l'EPFL AI Team Hackathon (Physical AI)",
          "Entraînement d'un petit modèle VLA sur un robot Hugging Face SO-101 pour saisir une bouteille et arroser des plantes de façon autonome",
          "Suivi de l'humidité du sol, de la température et d'autres données environnementales avec un ESP32",
        ],
      },
      {
        company:
          "LAAS-CNRS — Laboratoire d'Analyse et d'Architecture des Systèmes",
        title: "Stage ingénieur de recherche",
        logo: "/media/logos/laas-cnrs.webp",
        dateRange: "Mars 2026 - Mai 2026",
        bullets: [
          "Projet : conception et implémentation de capteurs tactiles sur un robot pour le déploiement d'un modèle VTLA",
          "Un modèle VTLA (Visual-Tactile-Language-Action) est un grand modèle de langage entraîné à intégrer l'objectif de la tâche, les informations visuelles et le retour tactile afin de générer des actions motrices efficaces pour un robot",
          "Équipe GEPETTO, encadré par Vincent Bonnet",
        ],
      },
      {
        company: "Y Combinator — RoboHacks par Innate, San Francisco",
        title: "Animateur de hackathon",
        logo: "/media/logos/y-combinator.svg",
        dateRange: "Avril 2026",
        bullets: [
          "Présentation de mon robot animatronique WALL-E entièrement fait maison au Physical AI Hackathon 2026 d'Innate, organisé dans les locaux de Y Combinator à San Francisco",
          "Animation et inspiration des sponsors et des participants en mettant en avant mon travail en robotique, électronique et animatronique",
        ],
      },
      {
        company: "IUT GEII, Toulouse",
        title: "Tuteur",
        logo: "/media/logos/iut-toulouse.svg",
        dateRange: "Octobre 2024 - Janvier 2026",
        bullets: [
          "Tutorat d'étudiants de première et de deuxième année",
          "Explication des cours magistraux, des TD et des TP",
        ],
      },
      {
        company:
          "LAAS-CNRS — Laboratoire d'Analyse et d'Architecture des Systèmes",
        title: "Stage ingénieur de recherche",
        logo: "/media/logos/laas-cnrs.webp",
        dateRange: "Mai 2025 - Juillet 2025",
        bullets: [
          "Conception et intégration d'une première version complète d'une semelle instrumentée",
          "Mesure des mouvements et des efforts du pied pour l'estimation de la cinématique du bas du corps",
        ],
      },
      {
        company: "Keyestudio",
        title: "Collaboration de marque",
        dateRange: "2024",
        bullets: [
          "Sélectionné par la marque pour présenter un de leurs kits robotiques sur TikTok en échange du produit",
          "Création de contenu vidéo autour du montage et de la programmation du kit",
        ],
      },
      {
        company: "Launaguet Sport Loisir Culture (LSLC)",
        title: "Bénévole support informatique",
        dateRange: "2022 - 2024",
        bullets: [
          "Résolution des problèmes informatiques de l'association",
          "Diagnostic et réparation de dysfonctionnements d'ordinateurs et d'imprimantes",
        ],
      },
      {
        company:
          "LNCMI-CNRS — Laboratoire National des Champs Magnétiques Intenses",
        title: "Stage d'observation",
        dateRange: "2019",
        bullets: [
          "Observation de la collaboration entre chercheurs et ingénieurs",
          "Découverte des problématiques de recherche lors du stage de troisième",
        ],
      },
      {
        company: "FabLab",
        title: "Apprentissage de l'électronique programmable",
        dateRange: "2016 - 2018",
        bullets: [
          "Découverte de l'électronique programmable avec Arduino",
          "Apprentissage de l'impression 3D et de la modélisation 3D sur TinkerCad",
        ],
      },
      {
        company: "Trophée de Robotique — Cité de l'Espace",
        title: "Compétiteur",
        dateRange: "2014",
        bullets: [
          "Quatrième place sur douze clubs engagés",
          "Compétition face à des équipes de l'INSA et de l'ENSEEIHT",
        ],
      },
    ],
    education: [
      {
        school: "ENSEEIHT — Toulouse INP",
        degree:
          "Diplôme d'ingénieur, filière Électronique, Énergie électrique et Automatique (3EA)",
        logo: "/media/logos/enseeiht.webp",
        dateRange: "2026 - 2029",
        achievements: [
          "Filière 3EA : génie électrique, électronique, automatique et systèmes embarqués",
        ],
      },

      {
        school: "IUT Paul Sabatier, Toulouse",
        logo: "/media/logos/iut-toulouse.svg",
        degree:
          "BUT GEII (Génie Électrique et Informatique Industrielle), parcours Automatisme et Informatique Industrielle (AII)",
        dateRange: "2023 - 2026",
        achievements: [
          "Diplômé du BUT GEII, parcours AII",
          "Intégration de l'ENSEEIHT — Toulouse INP sur dossier après la troisième année",
        ],
      },
      {
        school: "Brevet d'Initiation Aéronautique (BIA), Toulouse",
        degree: "Brevet d'Initiation Aéronautique",
        dateRange: "2022",
        achievements: ["Obtention du BIA avec mention Assez Bien"],
      },
      {
        school: "Lycée Ozenne, Toulouse",
        degree:
          "Baccalauréat général, spécialités Mathématiques et Numérique et Sciences Informatiques",
        dateRange: "2020 - 2023",
        achievements: ["Obtenu avec mention Bien"],
      },
    ],
    /**
     * Couverture médiatique À PROPOS de vous (pas vos propres écrits).
     * Gardez le titre dans la langue de publication de l'article ;
     * seul `excerpt` mérite d'être traduit. Videz ce tableau et
     * l'onglet Presse disparaît du site.
     */
    press: [
      {
        outlet: "Neo",
        logo: "/media/press/neo.webp",
        title:
          "Edik est passionné de bricolage depuis toujours. Alors quand sa mère retrouve sur Internet le WALL-E miniature de son enfance, il a un déclic : et s’il construisait le fameux robot à taille réelle ?",
        date: "31 mars 2026",
        format: "Vidéo",
        link: "https://www.instagram.com/reels/DX6aqtosFLK/",
      },
      {
        outlet: "Le Média Positif",
        logo: "/media/press/le-media-positif.webp",
        title:
          "À 19 ans, Edik, étudiant à l’IUT GEII de Toulouse, a donné vie à son rêve : recréer Wall-E.",
        date: "25 février 2026",
        format: "Vidéo",
        link: "https://www.instagram.com/reels/DVMR0g4im3a/",
      },
      {
        outlet: "La Dépêche",
        logo: "/media/press/la-depeche.webp",
        title:
          "« J’ai dû m’y reprendre plusieurs fois » : à dix-neuf ans, il recrée Wall-E en 3D, un robot made in Toulouse pour émerveiller petits et grands",
        date: "3 août 2025",
        format: "Presse écrite",
        link:
          "https://www.ladepeche.fr/2025/08/03/jai-du-my-reprendre-plusieurs-fois-a-dix-neuf-ans-il-recree-wall-e-en-3d-un-robot-made-in-toulouse-pour-emerveiller-petits-et-grands-12856139.php",
      },
      {
        outlet: "Université de Toulouse",
        logo: "/media/press/universite-de-toulouse.webp",
        title:
          "Edik Planson, 19 ans, étudiant en 2ᵉ année de BUT GEII à l’Université de Toulouse, a consacré plus d’un an et demi à concevoir son propre robot Wall-E, entièrement fait main.",
        date: "8 avril 2025",
        format: "Publication",
        link: "https://www.instagram.com/p/DIL9ZbBtE2S/",
      },
    ],
    skillCategories: [
      {
        title: "Compétences techniques",
        groups: [
          {
            name: "Concevoir",
            items: [
              "Produire une analyse fonctionnelle d'un système",
              "Dimensionner un composant à partir d'un schéma électrique et d'un cahier des charges",
              "Mettre en œuvre une fonction",
              "Choisir le bon outil à utiliser lors d'une réalisation",
              "Souder des composants traversants et montés en surface (CMS)",
              "Rédiger un cahier de fabrication pour un circuit imprimé",
              "Faire un bilan des matériaux utilisés",
              "Réaliser un schéma d'implantation",
            ],
          },
          {
            name: "Vérifier",
            items: [
              "Estimer le coût d'une carte",
              "Simuler le fonctionnement d'un circuit sur Proteus",
              "Élaborer l'environnement d'un test et établir des jeux de tests cohérents",
              "Utiliser le débogueur de VSCode pour manipuler ligne par ligne",
              "Sonder un circuit électronique pour récupérer un signal",
              "Utiliser un oscilloscope ou un multimètre pour analyser un signal",
              "Élaborer des points de mesure sur un circuit électronique",
              "Identifier une défaillance sur un système électronique",
            ],
          },
          {
            name: "Brancher et utiliser un automate programmable",
            items: [
              "Brancher des composants aux entrées et aux sorties d'un automate Siemens",
              "Interagir avec une IHM implémentée dans un système Schneider",
            ],
          },
        ],
      },
      {
        title: "Compétences logicielles",
        groups: [
          {
            name: "Proteus",
            items: [
              "Créer un schéma électrique en s'appuyant sur un cahier de laboratoire",
              "Réaliser le fichier GERBER d'un circuit électrique depuis un schéma",
              "Effectuer une simulation d'une fonction d'un système électrique",
            ],
          },
          {
            name: "C++",
            items: [
              "Écrire des fonctions pour différentes applications",
              "Programmer un microcontrôleur Arduino (IDE Arduino et VSCode)",
              "Établir une liaison UART, SPI et I2C entre différents composants",
              "Réaliser des tests unitaires de fonctions",
              "Prototyper des fonctions avec des commentaires Doxygen",
            ],
          },
          {
            name: "Python",
            items: [
              "Écrire des fonctions pour différentes applications",
              "Exploiter les données d'un fichier CSV depuis un programme Python",
              "Créer un fichier JSON automatiquement pour stocker des données",
              "Réaliser des tests unitaires de fonctions",
            ],
          },
          {
            name: "TIA Portal",
            items: [
              "Écrire un programme en FBD ou en LADDER",
              "Effectuer une simulation d'un programme en FBD ou en LADDER",
              "Implémenter un programme dans un automate Siemens",
            ],
          },
          {
            name: "Control Expert",
            items: [
              "Écrire un programme en GRAFCET",
              "Effectuer une simulation d'un programme en GRAFCET",
              "Implémenter un programme dans un automate Schneider",
            ],
          },
          {
            name: "Vijeo Designer",
            items: [
              "Réaliser une IHM (Interface Homme-Machine)",
              "Effectuer une simulation de l'IHM avec des valeurs imposées",
              "Implémenter une IHM dans un système existant",
            ],
          },
          {
            name: "CoppeliaSim",
            items: [
              "Modéliser un robot simple à plusieurs axes de rotation",
              "Implémenter des capteurs sur un modèle robotique",
              "Utiliser Python pour valider un modèle géométrique avec CoppeliaSim",
            ],
          },
          {
            name: "TinkerCad",
            items: [
              "Modéliser une pièce en 3D sur TinkerCad",
              "Corriger les défauts d'un modèle 3D existant",
              "Réaliser un prototype électronique basé sur un Arduino",
            ],
          },
          {
            name: "OnShape / Fusion 360",
            items: [
              "Modéliser une pièce en 3D sur OnShape à partir de dessins industriels",
              "Modéliser une pièce simple en 3D sur Fusion360 à partir de dessins industriels",
            ],
          },
          {
            name: "Word / Excel",
            items: [
              "Rédiger un cahier de fabrication et un cahier de laboratoire d'un projet technique",
              "Créer des graphiques différents à partir de données",
              "Trier et afficher des données selon différents critères",
            ],
          },
        ],
      },
      {
        title: "Compétences transversales",
        groups: [
          {
            name: "Anglais technique",
            items: [
              "Lire et comprendre une datasheet d'un composant électrique",
              "Décrire un système technologique et son fonctionnement",
              "Débattre sur le fonctionnement idéal d'un système",
            ],
          },
          {
            name: "Esprit d'équipe",
            items: [
              "Collaborer en groupe sur un projet technique",
              "Proposer des idées et écouter celles des autres",
              "Mettre mes compétences au service d'un objectif commun",
            ],
          },
          {
            name: "Leadership",
            items: [
              "Examiner et comprendre le rythme de chaque membre d'un groupe",
              "Donner des tâches selon les atouts des membres d'un groupe",
              "Participer activement dans le but d'amener le projet au résultat souhaité",
            ],
          },
          {
            name: "Détermination",
            items: [
              "Vouloir absolument terminer un projet dans les temps qui sont impartis",
              "Ne pas s'arrêter face aux obstacles qui ralentissent un projet",
            ],
          },
          {
            name: "Méticulosité",
            items: [
              "Faire attention aux moindres détails d'un projet lors de la conception ou des tests",
              "Ne pas se contenter du minimum mais aller plus loin que demandé",
            ],
          },
        ],
      },
    ],
  },
} as const;

export type Lang = keyof typeof content;

export const getContent = (lang: Lang) => content[lang];
