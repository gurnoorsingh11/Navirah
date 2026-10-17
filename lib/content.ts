export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  deliverables: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "full-stack-development",
    title: "Full-stack development",
    category: "Digital products",
    summary: "Web applications built across the interface, backend, data layer and deployment.",
    detail: "From an initial product brief to a maintainable application, we bring interface design, application logic, data modelling and release planning into one delivery process.",
    deliverables: ["Responsive web interfaces", "Backend APIs and data models", "Authentication and integrations", "Deployment and handover"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=82&fit=crop"
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX design",
    category: "Product design",
    summary: "Clear, accessible experiences shaped around real user tasks and business goals.",
    detail: "We structure information, map important journeys and design interfaces that make complex products easier to understand and use.",
    deliverables: ["Information architecture", "User flows and wireframes", "Responsive interface systems", "Accessibility review"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=82&fit=crop"
  },
  {
    slug: "wordpress",
    title: "WordPress development",
    category: "Content platforms",
    summary: "Manageable websites with custom layouts and practical content workflows.",
    detail: "Build a website that the team can update without calling a developer for every small content change.",
    deliverables: ["Custom themes and page templates", "Content model setup", "Performance and SEO basics", "Editor handover"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=82&fit=crop"
  },
  {
    slug: "ai-machine-learning",
    title: "AI and machine learning",
    category: "Data and intelligence",
    summary: "Applied machine learning and automation planned around a defined use case.",
    detail: "We help scope data requirements, evaluate feasibility and design responsible integrations for prediction, classification or workflow assistance.",
    deliverables: ["Use-case and data assessment", "Model or provider evaluation", "Prototype and API integration", "Evaluation and monitoring plan"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=82&fit=crop"
  },
  {
    slug: "software-development",
    title: "Software development",
    category: "Custom engineering",
    summary: "Purpose-built software for specific operational and product requirements.",
    detail: "Translate a working process into maintainable software with clear requirements, predictable releases and useful documentation.",
    deliverables: ["Requirements and architecture", "Application implementation", "Testing and release support", "Technical documentation"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=82&fit=crop"
  },
  {
    slug: "api-integrations",
    title: "API integrations",
    category: "Connected systems",
    summary: "Connect services and data sources with reliable, documented interfaces.",
    detail: "Reduce manual handoffs by integrating systems with clear ownership, validation and failure handling.",
    deliverables: ["Integration mapping", "API implementation", "Retries and error handling", "Monitoring and documentation"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=82&fit=crop"
  },
  {
    slug: "drone-technology",
    title: "Drone technology",
    category: "Robotics and aerospace",
    summary: "Support for drone concepts, control software and aerial-data workflows.",
    detail: "Explore the software and systems required for an aerial use case, from control requirements to mapping and data processing.",
    deliverables: ["Use-case feasibility", "Control and telemetry planning", "Mapping workflow design", "Prototype planning"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=82&fit=crop"
  },
  {
    slug: "nanotechnology",
    title: "Nanotechnology",
    category: "Research and materials",
    summary: "Research-oriented support for nanomaterials and nanoelectronics concepts.",
    detail: "Structure research and prototype requirements into clear technical questions, evidence needs and practical next steps.",
    deliverables: ["Problem and literature framing", "Research workflow planning", "Measurement requirements", "Prototype documentation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=82&fit=crop"
  },
  {
    slug: "energy-management",
    title: "Energy management",
    category: "Energy systems",
    summary: "Monitoring and software concepts for energy use, renewables and connected systems.",
    detail: "Define the signals, dashboards and integrations needed to understand energy consumption and support better operational decisions.",
    deliverables: ["Requirements and sensor mapping", "Monitoring dashboard plan", "Data integration", "Reporting and handover"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=82&fit=crop"
  }
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: "Leadership" | "Engineering" | "Operations";
  image?: string;
  bio?: string;
};

export const team: TeamMember[] = [
  { slug: "suresh-gupta", name: "Sh. Suresh Gupta", role: "Chancellor Nominee & Chairperson", group: "Leadership", image: "https://www.navirahinnovations.com/team/Suresh.png" },
  { slug: "rahul-gupta", name: "Dr. Rahul Gupta", role: "CEO", group: "Leadership", image: "https://www.navirahinnovations.com/team/RG.png" },
  { slug: "navneet-sharma", name: "Navneet Sharma", role: "COO", group: "Operations", image: "https://www.navirahinnovations.com/team/nav%20(1).png" },
  { slug: "devesh-sharma", name: "Devesh Sharma", role: "CSE Head", group: "Engineering", image: "https://www.navirahinnovations.com/team/dev.png" },
  { slug: "meghna", name: "Meghna", role: "AI & Software Developer", group: "Engineering", image: "https://www.navirahinnovations.com/team/Meg.png" },
  { slug: "harsh-rai", name: "Harsh Rai", role: "Operations Manager", group: "Operations", image: "https://www.navirahinnovations.com/team/Harsh%20Rai.png" },
  { slug: "ayan", name: "Ayan", role: "Marketing Executive", group: "Operations", image: "https://www.navirahinnovations.com/team/Ayan.png" }
];

export type Capability = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  status: "Capability area" | "Case study pending";
  publicCaseStudy?: boolean;
};

export const capabilities: Capability[] = [
  { slug: "digital-platforms", title: "Digital platforms", category: "Software", summary: "Web experiences, internal tools and connected application workflows.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=82&fit=crop", status: "Capability area" },
  { slug: "intelligent-systems", title: "Intelligent systems", category: "Applied AI and automation", summary: "Practical prototypes and integrations scoped around a specific problem.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=82&fit=crop", status: "Capability area" },
  { slug: "connected-hardware", title: "Connected hardware", category: "Robotics and devices", summary: "Early-stage planning for telemetry, control, mapping and monitoring systems.", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=82&fit=crop", status: "Capability area" }
];

export const company = {
  name: "Navirah Innovations",
  tagline: "Building technology. Empowering innovation.",
  email: "connectgurnoor@gmail.com",
  phone: "+91 99881 02588",
  phoneHref: "+91 99881 02588",
  address: "Atal Shiksha Kunj, Kalujhanda, Barotiwala, Baddi, District Solan, Himachal Pradesh, India",
  centreOfExcellence: "https://navirah-center-of-excellence.vercel.app/"
};
