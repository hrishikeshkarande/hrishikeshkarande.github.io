import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hrishikesh Karande",
  author: "Hrishikesh Karande",
  description:
    "Passionate young Embedded Engineer based in Siegen, Germany.",
  lang: "en",
  siteLogo: "/photo.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Blogs", href: "#blogs" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hrishikeshkarande/" },
    { text: "Github", href: "https://github.com/hrishikeshkarande" },
    { text: "Dev.to", href: "https://dev.to/hrishikesh_karande" },
    { text: "Email", href: "mailto:hrishiekshkarande1997@email.com" },
  ],
  socialImage: "/photo.png",
  canonicalURL: "https://hrishikeshkarande.github.io/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hrishikesh Karande",
    specialty: "Embedded Systems Engineer",
    summary:
      "Hi there, I'm a post-graduate young engineer currently based in Siegen, Germany. My interest spans Microcontrollers (ARM Cortex M, ESP32, STM32, AVR-Atmel, RISC-V), FPGA, PCB design (KiCad, Altium), and embedded firmware development in C/C++, Python, and Rust.",
    email: "hrishiekshkarande1997@email.com",
  },
  experience: [
    {
      company: "Infineon Technologies AG, Munich",
      position: "Embedded Software Developer - Intern",
      startDate: "Dec 2024",
      endDate: "Mar 2025",
      summary: [
        "Worked in a PHD research project in (DES) Design Enabling and Services group in the META-Software project.",
        "Wrote CLI python scripts for the metasw project for carrying out specific custom tasks.",
        "Got introduced to MDA (Model Driven Architecture) and Software Modelling using technologies like BOUML, mako templates and internal MetaGen framework and API libraries.",
        "Took a closer look at the control flow metamodel and parsers designed to generate code in C and RUST.",
        "Used pytest to test the Scope Manager implementation for metasoftware.",
      ],
    },
    {
      company: "elab - Uni Siegen, Germany",
      position: "Wissenschaftliche Hilfskraft mit Bachelor-Abschluss",
      startDate: "July 2024",
      endDate: "Mar 2025",
      summary: [
        "Worked in a university electronics lab and supervised student projects based on expertise in Microcontrollers, 3D Printing, Soldering and PCB Design.",
        "Designed and programmed firmware for microcontrollers (Raspberry Pi, ESP32, Arduino, STM32) in C/C++.",
        "Developed and tested device drivers for sensor integration (temperature, pressure, motion sensors).",
        "Debugged hardware using oscilloscopes,function generators, and digital multimeters.",
        "Conducted training on using embedded protocols (I2C, SPI,UART) and PCB design using Eagle, KiCad, and Altium.",
      ],
    },
    {
      company: "Birlasoft, Pune",
      position: "Software Developer in Test",
      startDate: "Dec 2020",
      endDate: "July 2022",
      summary: [
        "Automated software testing using Selenium Java, improving efficiency across 750+ test cases.",
        "Worked with CI/CD pipelines,Git,Jenkins, and collaborative code reviews, ensuring robust release cycles.",
        "Gained professional exposure to software development lifecycle (Agile + Waterfall).",
    ],
    },
  ],
  projects: [
    {
      name: "Stair Vs Lift Detection using smartwatch",
      summary: "This project consist of a dataset collected using Bangle.js 2 Smart Watch. This collected data was used to train an ML model to detect stairs and lift usage.",
      linkPreview: "/",
      linkSource: "https://github.com/hrishikeshkarande/project_work_stairs_lift_detection",
      image: "/LiftVsStairs.png",
    },
    {
      name: "XY Plotter",
      summary: "Developed an XY axis plotter using multiple-precision motors, integrated with Arduino and CNC platforms. Tested the device under multiple conditions.",
      linkPreview: "https://www.linkedin.com/in/hrishikeshkarande/details/projects/759751119/multiple-media-viewer/?profileId=ACoAACujZsgBxtcgr3wyppEjRjwTFvG9a3vjDHE&treasuryMediaId=1742828892122",
      linkSource: "https://www.linkedin.com/in/hrishikeshkarande/details/projects/759751119/multiple-media-viewer/?profileId=ACoAACujZsgBxtcgr3wyppEjRjwTFvG9a3vjDHE&treasuryMediaId=1742828892122",
      image: "/Plotter.png",
    },
    {
      name: "Luminosense - NILM",
      summary: "An Energy Monitoring Solution for commercial buildings. Carried out aggregated current and voltage wave-forms measurement at a single point.",
      linkPreview: "https://www.linkedin.com/in/hrishikeshkarande/details/projects/759681027/multiple-media-viewer/?profileId=ACoAACujZsgBxtcgr3wyppEjRjwTFvG9a3vjDHE&treasuryMediaId=1742829171876",
      linkSource: "https://www.linkedin.com/in/hrishikeshkarande/details/projects/759681027/multiple-media-viewer/?profileId=ACoAACujZsgBxtcgr3wyppEjRjwTFvG9a3vjDHE&treasuryMediaId=1742829171876",
      image: "/Lumino.png",
    },
  ],
  about: {
    description: `
      Hello! I’m Hrishikesh Karande, an Embedded Systems Engineer with a passion for designing high-performance solutions at the intersection of hardware and software. 

      Skilled in C/C++, device driver development, and industrial communication protocols (I2C, SPI, UART, CAN, Ethernet). Experienced with STM32, RISC-V, ARM Cortex MCUs, and debugging tools such as oscilloscopes, JTAG and SWD debuggers, and emulators.
      
      Beyond engineering, I enjoy learning German (currently B1), playing chess, and hiking. 

      Let’s connect if you share a passion for embedded systems, hardware hacking, or just want to chat about tech!

    `,
    image: "/photo.jpeg",
  },
};

// #5755ff
