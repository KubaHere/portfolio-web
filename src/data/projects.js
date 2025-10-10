import blackjackImg from '../assets/projects/blackjack.png';
import portfolioImg from '../assets/projects/portfolio.png';
import sysonImg from '../assets/projects/syson.png';
import codelfluxImg from '../assets/projects/codeflux-beta.png';

export const projects = [
  {
    id: 1,
    titleKey: "projects.blackjack.title",
    descriptionKey: "projects.blackjack.description",
    techTags: ["HTML", "JavaScript", "CSS"],
    image: blackjackImg,
    liveUrl: "https://blackjack.jakubzak.tech",
    repoUrl: "https://github.com/KubaHere/javascript-blackjack"
  },
  {
    id: 2,
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    techTags: ["React", "JavaScript", "CSS"],
    image: portfolioImg,
    liveUrl: "https://jakubzak.tech",
    repoUrl: "https://github.com/KubaHere/portfolio-web"
  },
  {
    id: 3,
    titleKey: "projects.syson.title",
    descriptionKey: "projects.syson.description",
    techTags: ["React", "JavaScript", "CSS"],
    image: sysonImg,
    betaTag: true,
    liveUrl: "https://syson.jakubzak.tech",
    repoUrl: "https://github.com/KubaHere/syson-web"
  },
  {
    id: 4,
    titleKey: "projects.codeflux.title",
    descriptionKey: "projects.codeflux.description",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: codelfluxImg,
    earlyBetaTag: true,
  }
];

export const techFilters = [
  { id: "all", label: "All", key: "filterAll" },
  { id: "python", label: "Python", key: "filterPython" },
  { id: "javascript", label: "JavaScript", key: "filterJavaScript" },
  { id: "typescript", label: "TypeScript", key: "filterTypeScript" },
  { id: "css", label: "CSS", key: "filterCSS" }
];
