import { link } from "fs";
export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Before the launch, there’s a plan. Peek into how we engineer every detail.",
    description: "Blueprints of Innovation",
    className: "md:col-span-3 md:row-span-2 flex-wrap gap-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center max-w-[90%] lg:text-left text-lg md:text-xl",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },  
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sync",
    des: "A smart music tool that creates personalized playlists based on your current emotions. By analyzing your mood—through text input or facial expressions.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/springboot.svg", "/postman.svg"],
    github: "https://github.com/dofreelancingwithus/Sync_MB", // ← Add this
  },
  {
    id: 2,
    title: "Screamium",
    des: "A web application using Django for Screamium Ice Creams.",
    img: "/p2.png",
    iconLists: ["/django.svg", "/tail.svg", "/c.svg"],
    github: "https://github.com/dofreelancingwithus/Screamium",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL SaaS app with AI, payments, and credits system.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   github: "https://github.com/your-username/ai-image-saas",
  // },
  {
    id: 4,
    title: "DevOps & Automation",
    des: "CI/CD with Jenkins, GitHub. Dockerized apps, Ansible for automation.",
    img: "/p4.svg",
    iconLists: ["/git.svg", "/jenkins.svg", "/dock.svg", "/kubernetes.svg"],
    github: "https://github.com/dofreelancingwithus/DevOps_project_1",
  },
];


export const testimonials = [
  {
    quote:
      "They built a simple and clean website for my small business. The team was easy to talk to, quick to respond, and delivered what I asked for on time. Would definitely recommend them.",
    name: "Sanjay Rao",
    title: "Owner, Rao Electronics",
  },
  {
    quote:
      "I needed a basic app for managing orders, and they handled both the design and the backend. They kept me updated regularly and made the whole process smooth.",
    name: "Neel Kulkarni",
    title: "Freelance Designer",
  },
  {
    quote:
      "They helped set up a simple data dashboard for my shop. It’s made tracking stock and sales much easier. They even gave a quick walkthrough to help me use it.",
    name: "Ramesh Patel",
    title: "Retail Business Owner",
  },
  {
    quote:
      "I approached them to make a portfolio site for me. They listened to what I wanted and added their own suggestions to improve it. Happy with the final result!",
    name: "Anand Verma",
    title: "Photography Student",
  },
];


export const companies = [
  {
    id: 1,
    name: "Web Development",
    img: "/Next.svg",
    nameImg: "/WebName.svg",
  },
  {
    id: 2,
    name: "AI and Data Science",
    img: "/ai.svg",
    nameImg: "/aiName.svg",
  },
  {
    id: 3,
    name: "DevOps & Automation",
    img: "/dev-ops.svg",
    nameImg: "/devName.svg",
  },
  {
    id: 4,
    name: "Digital Marketing",
    img: "/digitalmarketing.svg",
    nameImg: "/diName.svg",
  },
  {
    id: 5,
    name: "UI/UX Design",
    img: "/figma.svg",
    nameImg: "/uiName.svg",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer  - Sync",
    desc: "Developed a fullstack AI-based music recommendation system using React.js, Spring Boot, Flask, and MySQL. Integrated facial and text mood detection using OpenCV and TensorFlow.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web & Python Developer - Screamium",
    desc: "Built a Django-based website for Screamium Ice Creams. Also contributed to backend data analysis using Python (Pandas, Matplotlib) to extract business insights.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "DevOps & Automation",
    desc: "Implemented CI/CD pipelines using Jenkins and GitHub. Containerized apps with Docker, managed infrastructure automation with Ansible, and worked with DevPipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Tech & Social Media Consultant",
    desc: "Managed social media strategy and utilized AI tools for content automation. Bridged technical development and digital marketing for greater outreach and engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dofreelancingwithus",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/dofreelacing15",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dofreelancingwithus",
  },
  {
    id: 4,
    img: "/insta.svg",
    link: "https://www.instagram.com/dofreelancingwithus?igsh=MTc2dWVoNG93N29rbA==",
  },
];
