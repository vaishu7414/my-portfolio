// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';






// Project Section Logo's
import Netflix from './assets/work_logo/Netflix.png';

import Starbucks from './assets/work_logo/Starbucks.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
    
      { name: 'MySQL', logo: mysqlLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'Java', logo: javaLogo },
     
     
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
     
    ],
  },
];

  
  export const education = [
    {
      id: 0,
     
      school: "Dr. Babasaheb Ambedkar Science Mahavidyalaya, Vasai",
      date: "Sept 2022 - July 2025",
      grade: "9.40 CGPA",
    },
    {
      id: 1,
      
      school: "Viva College of Arts, Commerce & Science",
      date: "Sept 2018 - Aug 2021",
      grade: "45%",
    },
    {
      id: 2,
    
      school: "Om Sai English High School",
      date: "Apr 2017 - March 2018",
      grade: "73%",
      
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Netflix Project",
      description:
      " My first project to only use by html, css,javascript  ",
      image: Netflix,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vaishu7414/Netflix-Project",
    },
    {
      id: 1,
      title: "Starbucks Project",
      description:
      "This is my second project by using only html,css",
      image: Starbucks,
      tags: [ "HTML", "CSS", ],
      github: "https://github.com/vaishu7414/Starbucks",
    },

 
  
  
  ];  