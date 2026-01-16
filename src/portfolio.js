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
    "🚀  Passionate Robotics and Automation Engineer with expertise in real-time innovations, machine learning, Robotics, crafting impactful solutions in dynamic environments."
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
  subTitle : "Key skills I specialize in",
  skills: [
    emoji("Programming & Development"),
    emoji("⚡ Python, Embedded C, C++, Object-Oriented Programming (OOP), ROS1/ROS2"),
    
    emoji("Robotics & Automation"),
    emoji("⚡ PLC Programming, SLAM, Computer Vision (OpenCV)"),
    
    emoji("Simulation & Design"),
    emoji("⚡ Gazebo, RViz, SolidWorks, PCB Design (EasyEDA, KiCAD)"),
    
    emoji("Artificial Intelligence"),
    emoji("⚡Basics of Machine Learning (Supervised, Unsupervised, RL)"),
    
    emoji("Operating Systems"),
    emoji("⚡ Linux, Windows"),
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
      Stack: "Power Electronics",
      progressPercentage: "70%"
    },
    {
      Stack: "3D Modelling",
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
      role: "Industrial Robotics Intern",
      company: "Epson India Pvt. Ltd",
      companylogo: require("./assets/images/Epson_Logo.png"),
      date: "Bengaluru, IN Jun 2025 – July 2025",
      desc: "Developed an Automated Vending Machine with robotic integration ,Performed HMI testing with force-sensor integration for robotic precision control.Designed LED inspection automation for quality assurance in production.",
      descBullets: [
        "Applied Skills: Industrial Robotics, HMI, Sensor Integration, Automation, Mechatronics, Testing , RC+ Simulation , 6 Axis and SCARA Robot Programming"
      ]
    },
    {
      role: "ROBOTICS & COMPUTER VISION INTERN",
      company: "Astra Industrial Robotics",
      companylogo: require("./assets/images/astra.png"),
      date: "Chennai, IN May 2025 – Jun 2025",
      desc: "Developed a real-time hand-tracking algorithm for monitoring process adherence at Lucas TVS. Optimized vision-based monitoring to improve efficiency and reducemanual inspection.",
      descBullets: [
       " Applied Skills: Computer Vision, Python, OpenCV, Robotics, Real-Time Processing, Industrial Automation."
      ]
    },
    {
      role: "COMPUTER AIDED DESIGN INTERN",
      company: "Karthikesh Robotics Pvt. Ltd",
      companylogo: require("./assets/images/karthikesh_robotics_logo.png"),
      date: "Chennai, IN July 2025 – Aug 2025",
      desc: "Collaborated with cross-functional teams to translate design concepts into working models",
      descBullets: [
        "Applied Skills: CAD, SolidWorks, Mechanical Design, Team Collaboration."
      ]
    },
    {
      role: "Competitive Robotics Team Co-Lead",
      company: "MITRA",
      companylogo: require("./assets/images/mitra.png"),
      date: "Sep 2024 - Present",
      desc: "Madras Institute of Technology Robotics Association",
      descBullets: [
      ]
    }

    // {
    //   role: "Machine Learning intern",
    //   company: "Unified mentor",
    //   companylogo: require("./assets/images/unified_mentor.png"),
    //   date: "Feb 2025 – Mar 2025",
    //   desc: "Developed a heart disease detection model using supervised learning techniques. Analyzedpatient data to enhance predictive accuracy and improve early diagnosis.",
    //   descBullets: [
    //   ]
    // }
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
  // 
  // 
  // 
  projects: [ 
    {
      image: require("./assets/images/spider.png"),
      projectName: "Spider 8-Leg Robot-ROS2 Humble & Ignition Fortress",
      projectDesc: "A comprehensive ROS2-based simulation and control framework for an 8-legged spider robot with 24 degrees of freedom. Built on ROS 2 Humble (Ubuntu 22.04) and Ignition Gazebo Fortress, this project provides complete robot description, motion control, GUI interfaces, SLAM capabilities, and warehouse navigation demonstrations.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/BargavanR/spider_8leg_ros2_humble.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cac.png"),
      projectName: "Caterpillar Autonomy Challenge 2026",
      projectDesc: "The competition evaluates the rover's ability to autonomously navigate, extract materials frmo the sand, and construct a berm by systematically depositing the excavated sand.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/BargavanR/Zenorak.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eyantra.jpeg"),
      projectName: "E-yantra Robotics Competition 2024 -2025 Warehouse drone ",
      projectDesc: "Gained hands-on experience in autonomous drone navigation for warehouse automation.Developed and optimized software for drone control, completing all software rounds successfully.Ranked in the top 45 among 800+ participants, showcasing problem-solving skills in ROS2,computer vision, and path planning.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/BargavanR/Warehouse_Drone_EYRC_2025_SIMULATION.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/isro.png"),
      projectName: "ISRO Robotic Challenge - URSC 2025",
      projectDesc: "Currently developing autonomous navigation and guidance techniques for an aerial vehicle on Mars without external aids like GNSS. Focusing on space exploration applications.",
      footerLink: [
        {
          name: "Visit Github",
         url: "https://github.com/BargavanR/TEAM-SKYMONGERS-ISRO-Robotics-Challenge-IRoC-U-2025.git"
        }
      ]
    },
    {
      image: require("./assets/images/gdg.jpeg"),
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
      image: require("./assets/images/adn.png"),
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
// 
  achievementsCards: [
      {
        title: "TN Skills – Robot Systems Integration (RSI) ",
        subtitle:
          "TN Skills State Finalist and competed with teams from across Tamil Nadu, where I secured a Top 5 position in Robot Systems & Integration.",
        image: require("./assets/images/fanuc.jpeg"),
        imageAlt: "fanuc Logo",
        footerLink: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/posts/fanuc-india-pvt-ltd_tngovt-tnsdc-skilldevelopment-activity-7409079953142706176-lz5U?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEaAYFgBmKXW9VIKxA-wGM-4-VQsamq2fYE/"
          }
        ]
      },    
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
    email_address: "bargavanr01@gmail.com",
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
