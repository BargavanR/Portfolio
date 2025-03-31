/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bargavan R",
  title: "Hi all, I'm Bargavan",
  subTitle: emoji(
    "🚀  Passionate Robotics and Automation Engineer with expertise in real-time innovations, machine learning, Robotics, crafting impactful solutions in dynamic environments.."
  ),
  resumeLink:
    "https://annauniv0-my.sharepoint.com/:f:/g/personal/2023511001_student_annauniv_edu/EvocIJMVqX1JorjW5cmRXi4BxH0eWk9SMYPorLlm2v51_g?e=ieeve0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BargavanR",
  linkedin: "https://www.linkedin.com/in/bargavan",
  gmail: "bargavanroboticsengineer@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@bargavanroboticsengineer",
  stackoverflow: "https://stackoverflow.com/users/29858058/bargavanr",
  Instagram: 'https://www.instagram.com/__godse._.devil__',
  twitter: 'https://x.com/Bargavan143',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ROBOTICS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Simulation stufsssss"
    ),
    emoji("⚡ BLAhh blahh "),
    emoji(
      "⚡ Integration of third party services such as omniverse, ROS, Gazebo, etc"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    /* //{
      // skillName: "html-5",
       //fontAwesomeClassname: "fa-solid fa-user-robot"
     //},
     {
       skillName: "css3",
       fontAwesomeClassname: "fab fa-css3-alt"
     },
     {
       skillName: "sass",
       fontAwesomeClassname: "fab fa-sass"
     },
     {
       skillName: "JavaScript",
       fontAwesomeClassname: "fab fa-js"
     },
     {
       skillName: "reactjs",
       fontAwesomeClassname: "fab fa-react"
     },
     {
       skillName: "nodejs",
       fontAwesomeClassname: "fab fa-node"
     },
     {
       skillName: "swift",
       fontAwesomeClassname: "fab fa-swift"
     },
     {
       skillName: "npm",
       fontAwesomeClassname: "fab fa-npm"
     },
     {
       skillName: "sql-database",
       fontAwesomeClassname: "fas fa-database"
     },
     {
       skillName: "aws",
       fontAwesomeClassname: "fab fa-aws"
     },
     {
       skillName: "firebase",
       fontAwesomeClassname: "fas fa-fire"
     },
     {
       skillName: "python",
       fontAwesomeClassname: "fab fa-python"
     },
     {
       skillName: "docker",
       fontAwesomeClassname: "fab fa-docker"
     }
   */
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fab fa-robot"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fab fa-matlab"
    },
    {
      skillName: "Computer aided design",
      fontAwesomeClassname: "fab fa-solid fa-user-robot"
    },

  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madras institute of Technology",
      logo: require("./assets/images/mitlogo.png"),
      subHeader: "Bachelor of Engineering in Robotics and Automation",
      duration: "August 2023 - july 2027",
      desc: "Participated in the Events and published 1 paper and 2 patents.",
      descBullets: [
        "Experience in Automation",
        "ROS developer for MITRA"
      ]
    },
    {
      schoolName: "Annamalaiyaar matriculation higher secondary school",
      logo: require("./assets/images/Armhsslogo.png"),
      subHeader: "High School",
      duration: "july 2021 - May 2023",
      desc: "Ranked top 1 in the Cutoff , Best outgoing student in the school",
      descBullets: ["Cricketer", "Badmitton player"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "3D Modelling",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning intern",
      company: "Unified mentor",
      companylogo: require("./assets/images/unified_mentor.png"),
      date: "Feb 2025 – Mar 2025",
      desc: "Developed a heart disease detection model using supervised learning techniques. Analyzedpatient data to enhance predictive accuracy and improve early diagnosis.",
      descBullets: [
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/eyantra.webp"),
      projectName: "E-yantra Robotics Competition 2024 -2025 Warehouse drone ",
      projectDesc: "Gained hands-on experience in autonomous drone navigation for warehouse automation.Developed and optimized software for drone control, completing all software rounds successfully.Ranked in the top 45 among 800+ participants, showcasing problem-solving skills in ROS2,computer vision, and path planning.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/BargavanR/e-yantra_WD/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/isro.webp"),
      projectName: "ISRO Robotic Challenge - URSC 2025",
      projectDesc: "Currently developing autonomous navigation and guidance techniques for an aerial vehicle on Marswithout external aids like GNSS. Focusing on space exploration applications.",
      footerLink: [
        {
          //name: "Visit Github",
         // url: ""
        }
      ]
    },
    {
      image: require("./assets/images/gdg.webp"),
      projectName: "AI-Driven Accelerating Drug Discovery",
      projectDesc: "Designed a neural network model to predict drug’s efficiency and reduce trial durations.Achieved improved prediction accuracy by fine-tuning hyperparameters.Analyzed drug compounds to accelerate discovery timelines.",
      footerLink: [
        {
          //name: "Visit Github",
         // url: ""
        }
      ]
    },
    {
      image: require("./assets/images/adn.webp"),
      projectName: "Autonomous Drone Navigation",
      projectDesc: "Developed a drone navigation system using Reinforcement Learning (PPO), enabling thedrone to autonomously navigate between multiple points.Optimized the model for obstacle avoidance and efficient pathfinding without using ROS.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/BargavanR/Autonomous-Drone-Navigation"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
   //number: "+91-6374289565",
  email_address: "bargavanroboticsengineer@gmail.com",
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "Bargavan143", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
