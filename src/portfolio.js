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
  //gitlab: "",
  //facebook: "",
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
  title: "Skills !!",
  subTitle : "I am aware of these skills !!",
  skills :[
    emoji("Programming"),
    emoji(
      "⚡Python, C/Embedded C, Object-Oriented Programming (OOP), Robot Operating System (ROS2),PLC Programming (Ladder Logic), Computer Vision (OpenCV), MATLAB Programming, SLAM (SimultaneousLocalization and Mapping)."
    ),
    emoji("Simulation Tools"),
    emoji(
      "⚡Gazebo Classic & Ignition Gazebo, RViz, Simulink, Tinkercad."
    ),
    emoji(
      "Design & Analysis Tools"
    ),
    emoji(
      "⚡SolidWorks (Modeling & Simulation), PCB Design (EasyEDA, KiCAD), Human-MachineInterface in PLC (HMI) Design ."
    ),
    emoji(
      "Artificial Intelligence"
    ),
    emoji(
      "⚡Machine Learning (Supervised, Unsupervised, Reinforcement Learning)."
    ),
    emoji(
      "Operating Systems"
    ),
    emoji("⚡Linux (Primary)."),
    emoji("⚡Windows (Secondary)."),
    
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    /*
     {
       skillName: "python",
       fontAwesomeClassname: "fab fa-python"
     },
     {
       skillName: "docker",
       fontAwesomeClassname: "fab fa-docker"
     }
   */
  ],
  display: true // Set false to hide this section, defaults to true
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
      //desc: "Participated in the Events and published 1 paper and 2 patents.",
      //descBullets: [
      //  "Experience in Automation",
      //  "ROS developer for MITRA"
     // ]
    },
    {
      schoolName: "Annamalaiyaar matriculation higher secondary school",
      logo: require("./assets/images/Armhsslogo.png"),
      subHeader: "High School",
      duration: "july 2021 - May 2023",
      //desc: "Ranked top 1 in the Cutoff , Best outgoing student in the school",
      //descBullets: ["Cricketer", "Badmitton player"]
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
      role: "Programming and Electronics Team Member",
      company: "MITRA",
      companylogo: require("./assets/images/mitra.png"),
      date: "Sep 2024 - Present",
      desc: "Madras Institute of Technology Robotics Association",
      descBullets: [
      ]
    }
  ],
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
  display: false // Set false to hide this section, defaults to true
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
      projectDesc: "Currently developing autonomous navigation and guidance techniques for an aerial vehicle on Mars without external aids like GNSS. Focusing on space exploration applications.",
      footerLink: [
        {
          name: "Visit Github",
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
          name: "Visit Github",
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
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NSS Award 2024-2025",
      subtitle:
        "Awarded Best Student Volunteer of the Year 2024-2025.",
      image: require("./assets/images/nss.webp"),
      imageAlt: "NSS Logo",
      footerLink: [
       {
          name: "Instagram",
          url: "https://www.instagram.com/nss_mit/"
        }
      ]
    },
    {
      title: "MIT Variety Team",
      subtitle:
        "Performer in the Official Cultural Club of Madras Institute of Technology, Anna University.",
      image: require("./assets/images/variety.webp"),
      imageAlt: "MIT Variety Team Logo",
      footerLink: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/mit_varietyteam/"
        }
      ]
    },
    {
      title: "Indutrial Automation with PLC & HMI ",
      subtitle: "Completed Certifcation from Siemens for Indutrial Automation with PLC & HMI",
      image: require("./assets/images/siemens.webp"),
      imageAlt: "Siemens Logo",
      footerLink: [
        { name: "Certification", url: "https://www.linkedin.com/posts/bargavan_industrialautomation-plc-hmi-activity-7243337842087657472-ezX-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaAYFgBmKXW9VIKxA-wGM-4-VQsamq2fYE" },
      ]
    },
    {
      title: "Learn to Program: The Fundamentals",
      subtitle: "Completed Certifcation from Coursera for Learn to Program: The Fundamentals",
      image: require("./assets/images/Coursera.webp"),
      imageAlt: "Cousera Logo",
      footerLink: [
        { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/BG2MPGE7IKFC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
      ]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "Completed Certifcation from Coursera for Supervised Machine Learning: Regression and Classification",
      image: require("./assets/images/Coursera.webp"),
      imageAlt: "Cousera Logo",
      footerLink: [
        { name: "Certification", url: "" },
      ]
    },
  ],
  display: true// Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    ".",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
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
  //email_address: "bargavanroboticsengineer@gmail.com",
   display : true// Set false to hide this section, defaults to true
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
