// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-i-started-my-phd-at-cis-lmu-munich-under-the-supervision-of-prof-alex-fraser-and-dr-viktor-hangya-working-on-nlp-efficient-transfer-learning-and-hate-speech-detection",
          title: 'I started my PhD at CIS, LMU Munich under the supervision of Prof....',
          description: "",
          section: "News",},{id: "news-our-research-paper-on-analyzing-communication-acts-during-crises-will-be-presented-at-asonam-2024-this-work-is-from-my-internship-at-aalto-university-finaland",
          title: 'Our research paper on analyzing communication acts during crises will be presented at...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-the-poster-for-label-specific-soft-prompt-tuning-at-the-2024-all-hands-meeting-of-the-national-ai-centers-in-dresden-germany",
          title: 'I will be presenting the poster for “Label-Specific Soft Prompt Tuning” at the...',
          description: "",
          section: "News",},{id: "news-i-have-moved-to-the-tum-campus-in-heilbronn-and-after-a-year-and-two-months-as-a-phd-student-at-lmu-munich-i-am-now-a-phd-student-at-tu-munich",
          title: 'I have moved to the TUM campus in Heilbronn, and after a year...',
          description: "",
          section: "News",},{id: "news-our-paper-label-specific-representation-and-knowledge-transfer-for-harmful-content-detection-has-been-accepted-at-naacl-2025",
          title: '🎉 Our paper “Label-Specific Representation and Knowledge Transfer for Harmful Content Detection” has...',
          description: "",
          section: "News",},{id: "news-our-paper-differentiating-emigration-and-return-migration-has-been-accepted-at-icwsm-2025-this-work-is-from-my-research-visit-at-mpidr-rostock-germany",
          title: '🎉 Our paper “Differentiating Emigration and Return Migration” has been accepted at ICWSM...',
          description: "",
          section: "News",},{id: "news-our-paper-can-prompting-llms-unlock-hate-speech-detection-across-languages-a-zero-shot-and-few-shot-study-has-been-accepted-to-woah-at-acl-2025",
          title: '🎉Our paper “Can Prompting LLMs Unlock Hate Speech Detection across Languages? A Zero-shot...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
