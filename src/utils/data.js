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
    link: "https://inginer.tech",
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

const periodsData = [
  { period: "Nov/Dec 2022", step: 2 ,blackList:["2021"]},
  { period: "June/July 2022", step: 2 ,blackList:[]},
  { period: "May/June 2022", step: 2,blackList:[] },
  { period: "Jan/Feb 2022", step: 0 ,blackList:[]},
  { period: "Nov/Dec 2021", step: 2 ,blackList:[]},
  { period: "Aug-Sem 2021", step: 2 ,blackList:[]},
  { period: "May/June 2021", step: 2 ,blackList:[]},
  { period: "March-Sem 2021", step: 0 ,blackList:[]},
  { period: "Nov/Dec 2020", step: 1 ,blackList:["20200"]},
  { period: "May/June 2020", step: 1 ,blackList:[]},
  { period: "Nov/Dec 2019", step: 1 ,blackList:[]},
  { period: "April/May 2019", step: 1 ,blackList:[]},
  { period: "Nov/Dec 2018", step: 1 ,blackList:[]},
  { period: "April/May 2018", step: 1 ,blackList:[]},
  { period: "Nov/Dec 2017", step: 0 ,blackList:[]},
];
const periodsDataSupplementary = [
  { period: "Jan/Feb 2022", step: 0 ,blackList:[]},
  { period: "Jul/Aug 2021", step: 0 ,blackList:[]},
  { period: "Jan 2021", step: 0 ,blackList:[]},
  { period: "Jul/Aug 2020", step: 0 ,blackList:[]},
  { period: "Jan 2020", step: 0 ,blackList:[]},
  { period: "Jul/Aug 2019", step: 0 ,blackList:[]},
  { period: "Jan 2019", step: 0 ,blackList:[]},
];

/* 

[
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
];*/
const periods = periodsData.map((period) => period.period);
const periodsSupplementary = periodsDataSupplementary.map((per) => per.period);
const urlList = [
  "/22.nov_dec_2022.json",
  "/22.june_july_2022.json",
  "/22.may_june_2022.json",
  "/22.jan_feb_2022.json",
  "/21.nov_dec_2021.json",
  "/21.aug_2021.json",
  "/21.may_june_2021.json",
  "/21_march_semester(first%20year%20only)_2021.json",
  "/20.nov_dec_2020.json",
  "/20.may_june_2020.json",
  "/19.nov_dec_2019.json",
  "/19.may_june_2019.json",
  "/18.nov_dec_2018.json",
  "/18.may_june_2018.json",
  "/17.nov_dec_2017.json",
];

const urlListSupplementary = [
  "/22.jan_feb_supplementary_2022.json",
  "/21.july_aug_supplementary_2021.json",
  "/21.jan_supplementary_2021.json",
  "/20.july_aug_supplementary_2020.json",
  "/20.jan_supplementary_2020.json",
  "/19.june_july_supplementary_2019.json",
  "/19.jan_supplementary_2019.json",
];

export {
  homeCardData,
  developerData,
  periods,
  periodsData,
  periodsDataSupplementary,
  urlList,
  urlListSupplementary,
  periodsSupplementary,
};
