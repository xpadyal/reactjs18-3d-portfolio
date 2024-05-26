import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  // redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  // meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pythonIcon,
  awsIcon,
  gcpIcon,
  javaIcon,
  huggingIcon,


} from "../assets";
import { AI, drone, sipho, skin, vikrant, vishesh } from "../assets/index";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/xpadyal"
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/13SVsXMnZhaIR0-yJFWdi4og_p9_Lqj67/view?usp=sharing"
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Artifical Intelligence",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Cloud",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
 
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // 
  
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Java",
    icon: javaIcon,
  },
  {
    name: "HuggingFace",
    icon: huggingIcon,
  },
  {
    name: "AWS",
    icon: awsIcon,
  },
  {
    name: "GCP",
    icon: gcpIcon,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer Intern(AI/ML)",
    companyName: "Matrix Rental Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - December 2023",
    points: [
      "Enhanced user engagement by 40% through the development of a RAG-based conversational chatbot using Langchain and Palm-2 LLM with Vertex AI from scratch.",
      "Contributed to the migration of workflows from on-premises systems to GCP, using Python for scripting and Terraform for infrastructure as code.",
      "Increased model accuracy by 30% by fine tuning the Text-Bison model with 10,000 tailored prompts in collaboration with Google's team using Google’s cloud based AI/ML platform Vertex AI.",
      "Implemented unit testing frameworks like Behave and PyUnit that reduced bug rates by 25% for the RAG-based chatbot by focusing on comprehensive profiling and efficient coding practices.",
      "Boosted decision-making efficiency by 50% by creating a real-time user interaction visualization dashboard using Google Looker.",
      "Reduced processing time by 60% by designing and implementing a paystubs extraction model with GCP processors.",
      "Technology used: GCP, Langchain, ReactJS, Typescript, Python, FastAPI, RESTful APIs, Vertex AI, Google Looker, Palm-2 LLM, RAG, Unit Testing, Profiling , Code Tuning, Terraform",
    ],
  },
  {
    title: "Software Development Engineer(Machine Learning) ",
    companyName: "Convrse.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jun 2022",
    points: [
    "Led the development of 3D mesh optimization tool by utilizing advance machine learning tools (Spark) and concepts.",
    "Migrated the workflow management tools from legacy systems to modern platforms (AWS, Airflow), improving operational efficiency by 30%.",
    // "Cut processing time by 30% through asynchronous batch processing for optimizations.",
    "Decreased deployment time by 50% and errors by 60% by developing a CI/CD pipeline using AWS CodeBuild and ArgoCD.",
    "Elevated system efficiency by 25% with high-scale distributed systems using Kubernetes autoscaler.",
    "Lowered operational costs by 15% by transitioning architecture from EC2 to Fargate.",
    "Ensured data integrity and security with a security layer using AWS Lambda for file downloads via CDN.",
    "Technology used: AWS, AWS CodeBuild, EC2, Fargate, S3, AWS Lambda, CDN, Kubernetes, ArgoCD, Spark, Pytorch, Tensorflow.",

    ],
  },
  {
    title: "Software Engineer",
    companyName: "BlueTick VR",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2018 - Oct 2019",
    points: [
      "Constructed an enterprise level SaaS tool with rich UI for real-estate builders using Java, SpringBoot, JavaSpring, OpenGL on IntelliJ, generating a $500,000 revenue initially.",
      "Effectively utilized data structures and algorithms to build complex features for the SaaS tool, leveraging object-oriented design and design patterns to enhance code performance and scalability, resulting in a 40% increase in processing speed and completing the project 15 days ahead of schedule.",
      "Conducted comprehensive testing for the SaaS tool using JUnit, ensuring robust performance, reliability, and user satisfaction through rigorous unit, integration, and system testing.",
      "Got acknowledged for the development of the company's first product, an enterprise-level SaaS tool, which drove significant growth for the Bootstrap startup and established a strong market presence.",
      "Technology used: Java, SpringBoot, JavaSpring, WebGL, Junit Testing",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Sahil's creativity and dedication were crucial in launching our first product, significantly boosting our market presence. His commitment to excellence is truly commendable.",
    name: "Vishesh Khatri",
    designation: "CFO",
    company: "BlueTick VR",
    image: vishesh,
  },
  {
    testimonial:
      "Sahil's passion for machine learning and his reliable, innovative solutions transformed our workflows and enhanced efficiency. His dedication set new standards for our team.",
    name: "Vikrant Singh",
    designation: "COO",
    company: "Convrse.ai",
    image: vikrant,
  },
  {
    testimonial:
      "Sahil's enthusiasm for AI and unwavering dedication were key to developing our conversational chatbot. His innovative solutions greatly enhanced user engagement and interaction.",
    name: "Sipho Simela",
    designation: "CEO",
    company: "456 Enterprises",
    image: sipho,
  },
];

const projects: TProject[] = [
  {
    name: "Data-Science Query Conversational Bot",
    description:
      "The Data Science Query Assistant is a Streamlit app that provides detailed explanations, generates quizzes on data science topics, analyzes CSV datasets, and facilitates conversations with website-sourced information using AI models from Cohere and EdenAI..",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "silver-text-gradient",
      },
      {
        name: "Generative AI",
        color: "green-text-gradient",
      },
      {
        name: "LLMs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/xpadyal/GenerativeAI-LLM-Projects/tree/main/Data-Science-Assistant",
  },
  {
    name: "E-Commerce MERN Stack",
    description:
      "Web application that enables users to search for products, buy products, sell products and admin to manage the whole website .",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/xpadyal/Full-Stack-Ecommerce-MERN/tree/main/mern-ecommerce-master",
  },
  {
    name: "Road Line Detection using OpenCV",
    description:
      "A simple project that showcase how you can build a Road Line Detection application using OpenCV",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/xpadyal/Computer-Vision-Projects/tree/main/Road_Line_Detection",
  },

  {
    name: "Skin Cancer Classification Model",
    description:
      "Developed a skin cancer classification model for my Parallel Machine Learning and AI course's final project where I optimized a deep learning model(ResNet50) using PyTorch and Cuda to classify skin lesions into malignant or benign categories, achieving high accuracy and specificity on a large dermatoscopic image dataset achieving an accuracy of 94%. ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Convolutional Neural Networks",
        color: "orange-text-gradient",
      },
      {
        name: "Parallel Computing",
        color: "pink-text-gradient",
      },
    ],
    image: skin,
    sourceCodeLink: "https://github.com/xpadyal/DataScience-Notebooks/tree/main/CancerDetectionModel_Using_Parallel_Computing",
  },

  {
    name: "AI Stock Trading Model ",
    description:
      "In this notebook I have create a complete process for predicting stock price movements.For that purpose I have used a Generative Adversarial Network (GAN) with LSTM,as generator, and a Convolutional Neural Network, CNN, as a discriminator. ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Convolutional Neural Networks",
        color: "orange-text-gradient",
      },
      {
        name: "GANs",
        color: "pink-text-gradient",
      },
    ],
    image: AI,
    sourceCodeLink: "https://github.com/xpadyal/DataScience-Notebooks/tree/main/AI_Trading_model",
  },

  {
    name: "Aerial Drone Image Segmentation  ",
    description:
      "In this notebook I have create a image segmentation model which detects different objects in the image taken by the drone. This is done using Inception4 pretrained model. ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Convolutional Neural Networks",
        color: "orange-text-gradient",
      },
      {
        name: "ComputerVision",
        color: "pink-text-gradient",
      },
    ],
    image: drone,
    sourceCodeLink: "https://github.com/xpadyal/DataScience-Notebooks/blob/main/Aerial-Drone-Image-Segmentation/Inceptionv4_Pretrained_Torch.ipynb",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
