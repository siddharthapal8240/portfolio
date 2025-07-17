import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Siddhartha Pal",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kolkata,West Bengal,India",
  description:
    "Full-stack developer who loves turning ideas into working products and collaborating with the tech community to grow together.",
  summary:
    "From the start of college, [I’ve been curious about coding and development](#curiocity)—and that curiosity quickly turned into a passion. Over the years, [I’ve explored full-stack development](#development),built real-world projects, and [participated in 5+ hackathons](#hackathons). I’ve [won a track prize and secured 3rd place at an MLH hackathon](#hackathon-winning). I’m currently in my final year of Computer Science & Engineering at JIS College of Engineering, actively contributing to my college’s coding club and engaging with national tech communities. I love building for fun, learning, and impact—and this journey is just getting started.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Html",
    "Css",
    "Tailwind Css",
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Django",
    "Mongodb",
    "Mysql",
    "Python",
    "C++",
    "git",
    "gitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "siddharthapal814@gmail.com",
    tel: "+91 8240578123",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/siddharthapal8240",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddharthapal1234/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Siddhartha3108?t=QRdN6G3Gx-Bl9TkT8mfSSA&s=09",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:siddharthapal814@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "DevDotCom",
      href: "https://devdotcom.in",
      badges: [],
      location: "Remote",
      title: "Vice lead",
      logoUrl: "/ddc.webp",
      start: "Nov 2022",
      end: "Present",
      description:
        "Scaled DevDotCom from 0 to 5000+ members as a core team member by organizing tech workshops, hosting hackathons, leading open-source projects using React & Node.js, and building strategic partnerships with national tech fests.",
    },
  ],
  education: [
    {
      school: "JIS College of Engineering",
      href: "https://www.jiscollege.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/jisce.png",
      start: "2022",
      end: "present",
    },
    {
      school: "Burikhali.K.M.Institution",
      href: "#",
      degree: "Higher Secondary Education",
      logoUrl: "/bkmi.jpeg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Burikhali.K.M.Institution",
      href: "#",
      degree: "Secondary Education",
      logoUrl: "/bkmi.jpeg",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "GestureSlide",
      href: "https://chatcollect.com",
      dates: "August 2025",
      active: true,
      description:
        "Developed a gesture-controlled presentation platform that allows users to navigate slides in real-time using hand gestures. The system features a smart whiteboard equipped with live drawing and annotation tools, supporting various presentation formats. It also includes a history dashboard for secure session storage, activity tracking, and easy file retrieval, all within a responsive and intuitive user interface.",
      technologies: [
        "ReactJs",
        "Javascript",
        "TailwindCSS",
        "NodeJs",
        "Mongodb",
        "Cloudinary",
        "OpenCV",
        "Mediapipe",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.hackquest.io/projects/GestureSlide",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/siddharthapal8240/GestureSlide-DebugDivas.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/GestureSlide.mp4",
    },
    {
      title: "AI BackGround Removal",
      href: "https://bgremoval-siddhartha.vercel.app/",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "Developed Built a full-featured SaaS platform that offers a seamless and responsive user experience, featuring secure user authentication, AI-powered background removal for efficient image processing, and integrated online payment support. The system enables users to manage accounts safely, enhance visuals with automated background editing, and unlock premium features through reliable and scalable transactions.",
      technologies: [
        "ReactJs",
        "TailwindCSS",
        "Javascript",
        "Mongodb",
        "NodeJs",
        "Razorpay",
        "Api Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://bgremoval-siddhartha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/siddharthapal8240/Bg-remover",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bgRemoval.png",
      video: "",
    },
    {
      title: "MediaHub",
      href: "#",
      dates: "July 2024",
      active: true,
      description:
        "Developed MediaHub, a social media platform that allows users to browse posts without logging in, while requiring authentication for content creation to balance accessibility with security. The platform features efficient data handling through dynamic forms and offers a user-friendly interface that promotes engagement while maintaining control over user interactions.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Cloudinary",
        "PostgreSQL",
        "Django",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/siddharthapal8240/MediaHub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/MediaHub.mp4",
    },
    {
      title: "TouchMap",
      href: "https://devfolio.co/projects/touch-map-interactive-map-visualization-92d4",
      dates: "February 2024",
      active: true,
      description:
        "Co-created TouchMap, an interactive learning platform that enables users to physically engage with a map to explore countries and participate in educational games. The system enhances learning through tactile interaction and visual feedback, offering a dynamic and engaging user experience supported by efficient data processing and real-time computer vision capabilities.",
      technologies: [
        "Python",
        "Mediapipe",
        "Opencv",
        "Numpy",
      ],
      links: [
        {
          type: "Demo",
          href: "https://devfolio.co/projects/touch-map-interactive-map-visualization-92d4",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/siddharthapal8240/Diversion_TouchMap",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Binary",
      dates: "",
      location: "Kalyani, Nadia",
      description:
        "Developed GestureSlide an interactive presentation tool with gesture-based slide control, a smart whiteboard for real-time annotations, and a secure dashboard for session tracking and file management.",
      image:
        "/Binary.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/siddharthapal8240/Diversion_TouchMap",
        },
        {
          title: "Hackquest",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hackquest.io/projects/GestureSlide",
        },
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/-astPy8iFCM?si=QjoV1GXfL-KY8V3V",
        },
      ],
    },
    {
      title: "StatusCode 1",
      dates: "",
      location: "Kolkata,West Bengal",
      description:
        "Developed an organ donation web app that enables donors and patients to transparently view organ availability and easily connect with hospitals to schedule procedures or make inquiries.",
      image:
        "/stscode-1.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/siddharthapal8240/StatusCode-1.git",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/jeevandayak-26d5",
        },
      ],
    },
    {
      title: "Diversion 2k25",
      dates: "",
      location: "Kolkata, West Bengal",
      description:
        "Developed a web app where hosts can upload a sheet of registered users to automate meeting link reminders and share post-meeting summaries with attendees.",
      image:
        "/Diversion.avif",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/siddharthapal8240/MeetManager.git",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/meetmanager-3576",
        },
      ],
    },
    {
      title: "Level SuperMind",
      dates: "",
      location: "Mumbai, Maharashtra",
      description:
        "Developed a Austrologer web app that generates detailed birth charts and kundlis based on user-provided birth details for personalized astrological insights.",
      icon: "public",
      image:
        "/levelSuperMind.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/siddharthapal8240/LevelSuperMind",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/level-supermind-1234",
        },
      ],
    },
    {
      title: "Diversion 2k24",
      dates: "",
      location: "Kolkata, West Bengal",
      description:
        "Co-created TouchMap, an interactive platform that lets users physically explore maps and play educational games through real-time computer vision and tactile interaction.",
      image:"/Diversion2k24.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/siddharthapal8240/Diversion_TouchMap",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/touch-map-interactive-map-visualization-92d4",
        },
      ],
    },
  ],
} as const;
