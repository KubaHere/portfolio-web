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
  },
  {
    id: 2,
    titleKey: "projects.taskapp.title",
    descriptionKey: "projects.taskapp.description",
    techTags: ["TypeScript", "JavaScript", "CSS"],
    image: "/projects/taskapp.jpg",
    liveUrl: "https://task-app-demo.com",
    repoUrl: "https://github.com/yourusername/task-management"
  },
  {
    id: 3,
    titleKey: "projects.weather.title",
    descriptionKey: "projects.weather.description",
    techTags: ["JavaScript", "CSS"],
    image: "/projects/weather.jpg",
    liveUrl: "https://weather-dashboard-demo.com",
    repoUrl: "https://github.com/yourusername/weather-app"
  },
  {
    id: 4,
    titleKey: "projects.blog.title",
    descriptionKey: "projects.blog.description",
    techTags: ["Python", "CSS"],
    image: "/projects/blog.jpg",
    liveUrl: "https://blog-cms-demo.com",
    repoUrl: "https://github.com/yourusername/blog-cms"
  },
  {
    id: 5,
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    techTags: ["JavaScript", "CSS"],
    image: "/projects/portfolio.jpg",
    liveUrl: "https://portfolio-demo.com",
    repoUrl: "https://github.com/yourusername/portfolio"
  },
  {
    id: 6,
    titleKey: "projects.dataviz.title",
    descriptionKey: "projects.dataviz.description",
    techTags: ["Python", "JavaScript", "CSS"],
    image: "/projects/dataviz.jpg",
    liveUrl: "https://dataviz-demo.com",
    repoUrl: "https://github.com/yourusername/data-viz"
  }
];

export const techFilters = [
  { id: "all", label: "All", key: "filterAll" },
  { id: "python", label: "Python", key: "filterPython" },
  { id: "javascript", label: "JavaScript", key: "filterJavaScript" },
  { id: "typescript", label: "TypeScript", key: "filterTypeScript" },
  { id: "css", label: "CSS", key: "filterCSS" }
];
