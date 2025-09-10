import blackjackImg from '../assets/projects/blackjack.png';

export const projects = [
  {
    id: 1,
    titleKey: "projects.blackjack.title",
    descriptionKey: "projects.blackjack.description",
    techTags: ["HTML", "JavaScript", "CSS"],
    image: blackjackImg,
    liveUrl: "https://blackjack.jakubzak.tech",
    repoUrl: "https://github.com/KubaHere/javascript-blackjack"
  }
];

export const techFilters = [
  { id: "all", label: "All", key: "filterAll" },
  { id: "python", label: "Python", key: "filterPython" },
  { id: "javascript", label: "JavaScript", key: "filterJavaScript" },
  { id: "typescript", label: "TypeScript", key: "filterTypeScript" },
  { id: "css", label: "CSS", key: "filterCSS" }
];
