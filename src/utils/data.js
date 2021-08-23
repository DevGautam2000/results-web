import dev_logo from "../assets/developer.svg";
import res_logo from "../assets/results.svg";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import figma from "../assets/figma.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import portfolio from "../assets/portfolio.svg";

const homeCardData = [
  { id: 1, name: "Check Result", image: res_logo, link: "/form" },
  { id: 2, name: "Developer", image: dev_logo, link: "/developer" },
];

const developerData = [
  { id: 1, src: mail, link: "mailto:devgautam1231@gmail.com", name: "mail" },
  {
    id: 2,
    src: portfolio,
    link: "https://resume-1231.vercel.app",
    name: "portfolio",
  },
  {
    id: 3,
    src: github,
    link: "https://github.com/DevGautam2000",
    name: "github",
  },

  {
    id: 4,
    src: linkedin,
    link: "https://www.linkedin.com/in/gautam-chandra-saha-896735205/",
    name: "linkedin",
  },
  {
    id: 5,
    src: instagram,
    link: "https://www.instagram.com/gautamcsaha/",
    name: "instagram",
  },
  {
    id: 6,
    src: figma,
    link: "https://www.figma.com/@devgautam",
    name: "figma",
  },
];

const periods = [
  "Aug Sem 2021",
  "May/June 2021",
  "March Sem 2021",
  "Nov/Dec 2020",
  "May/June 2020",
  "Nov/Dec 2019",
  "April/May 2019",
  "Nov/Dec 2018",
  "April/May 2018",
  "Nov/Dec 2017",
];

const urlList = [
  "https://devgautam2000.github.io/results.github.io/json/21.aug_2021.json",
  "https://devgautam2000.github.io/results.github.io/json/21.may_june_2021.json",
  "https://devgautam2000.github.io/results.github.io/json/21_march_semester(first%20year%20only)_2021.json",
  "https://devgautam2000.github.io/results.github.io/json/20.nov_dec_2020.json",
  "https://devgautam2000.github.io/results.github.io/json/20.may_june_2020.json",
  "https://devgautam2000.github.io/results.github.io/json/19.nov_dec_2019.json",
  "https://devgautam2000.github.io/results.github.io/json/19.may_june_2019.json",
  "https://devgautam2000.github.io/results.github.io/json/18.nov_dec_2018.json",
  "https://devgautam2000.github.io/results.github.io/json/18.may_june_2018.json",
  "https://devgautam2000.github.io/results.github.io/json/17.nov_dec_2017.json",
];

export { homeCardData, developerData, periods, urlList };
