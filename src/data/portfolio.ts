import {
  BriefcaseBusiness,
  Code2,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
} from 'lucide-react';

export const navLinks = [
  { label: 'About', id: 'about', path: '/about' },
  { label: 'Skills', id: 'skills', path: '/skills' },
  { label: 'Projects', id: 'projects', path: '/projects' },
  { label: 'Experience', id: 'experience', path: '/experience' },
  { label: 'Contact', id: 'contact', path: '/contact' },
];

export const heroMetrics = [
  { value: '6+', label: 'Years of experience' },
  { value: '5', label: 'Featured builds' },
  { value: '3', label: 'Core product areas' },
];

export const heroFocusItems = [
  {
    title: 'Primary stack',
    description: 'React.js, Next.js, TypeScript',
    icon: Code2,
  },
  {
    title: 'Product focus',
    description: 'Commerce, dashboards, realtime apps',
    icon: LayoutDashboard,
  },
  {
    title: 'Working style',
    description: 'Responsive, polished, production-ready',
    icon: Rocket,
  },
];

export const aboutPrinciples = [
  {
    title: 'Build style',
    description: 'Clean component systems, responsive implementation, and maintainable frontend structure.',
    icon: Code2,
  },
  {
    title: 'Product mindset',
    description: 'Interfaces shaped around usability, clarity, and confidence for end users.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Delivery',
    description: 'Production-ready work built for handoff, launch, and long-term iteration.',
    icon: BriefcaseBusiness,
  },
];

export const skillGroups = [
  {
    title: 'Frontend Systems',
    description: 'Responsive interfaces and scalable UI structure.',
    icon: Code2,
    tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'HTML5', 'CSS3'],
  },
  {
    title: 'Design and Delivery',
    description: 'Polished implementation with maintainable components.',
    icon: MonitorSmartphone,
    tags: ['Tailwind CSS', 'Responsive UI', 'Component Systems', 'Adobe XD', 'Figma', 'Accessibility'],
  },
  {
    title: 'Integrations',
    description: 'Auth, payments, and realtime product flows.',
    icon: ShieldCheck,
    tags: ['Firebase Auth', 'REST APIs', 'Realtime Data', 'Stripe.js', 'Razorpay'],
  },
  {
    title: 'Deployment Stack',
    description: 'Shipping clean frontend builds to production.',
    icon: BriefcaseBusiness,
    tags: ['Vercel', 'Netlify', 'GitHub', 'Postman', 'Performance Optimization'],
  },
  {
    title: 'Backend and Data',
    description: 'Database, API, and backend technologies used across projects.',
    icon: LayoutDashboard,
    tags: ['Python', 'Django', 'SQL', 'NoSQL', 'PostgreSQL', 'MongoDB'],
  },
];

export const projects = [
  {
    title: 'ADiiNO',
    label: 'Flagship build',
    previewLabel: 'Luxury ecommerce website',
    imageUrl: '/projects/adiino-custom.jpg',
    imageAlt: 'ADiiNO luxury ecommerce website homepage preview',
    summary:
      'A full-featured luxury e-commerce platform with product catalog, authentication, and a polished checkout experience built for premium presentation.',
    highlights: [
      'Built catalog, cart, checkout, and account flows.',
      'Integrated Razorpay, Firebase auth, and responsive premium UI.',
    ],
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Firebase', 'Razorpay', 'Vercel'],
    accent: 'gold',
    icon: ShoppingBag,
  },
  {
    title: 'Paynex',
    label: 'Product dashboard',
    previewLabel: 'Global money movement',
    imageUrl: '/projects/paynex.jpg',
    imageAlt: 'Paynex financial app homepage preview',
    summary:
      'A frontend dashboard for international money transfers, designed around transaction tracking, form-driven workflows, and fintech-style usability.',
    highlights: [
      'Built responsive dashboards, forms, and tables for a sandboxed product UI.',
      'Integrated Firebase auth and realtime user data updates.',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    accent: 'slate',
    icon: CreditCard,
  },
  {
    title: 'Foodundo',
    label: 'Realtime ordering',
    previewLabel: 'Food delivery app',
    imageUrl: '/projects/foodundo.jpg',
    imageAlt: 'Foodundo food delivery app homepage preview',
    summary:
      'A food ordering application with dynamic menus, realtime cart updates, secure checkout, and a mobile-first ordering experience.',
    highlights: [
      'Built dynamic ordering flows with realtime cart updates.',
      'Integrated Stripe.js, Firebase auth, and order tracking.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Stripe.js'],
    accent: 'coral',
    icon: UtensilsCrossed,
  },
  {
    title: 'Oru Kattan Vibe',
    label: 'Brand site',
    previewLabel: 'Restaurant website',
    imageUrl: '/projects/oru-kattan-vibe.jpg',
    imageAlt: 'Oru Kattan Vibe restaurant website homepage preview',
    summary:
      'A modern restaurant website focused on menu discovery, visual storytelling, and a responsive booking-oriented brand experience.',
    highlights: [
      'Built a responsive website with menu, gallery, and booking sections.',
      'Created reusable UI components for a clean, lightweight build.',
    ],
    tech: ['React.js', 'Tailwind CSS'],
    accent: 'forest',
    icon: Smartphone,
  },
  {
    title: 'Mini E-Commerce Client Project',
    label: 'Client delivery',
    previewLabel: 'Client e-commerce build',
    summary:
      'A client-focused e-commerce website with product listing, authentication, and checkout, delivered as a production-ready storefront.',
    highlights: [
      'Built reusable storefront components with Stripe and Firebase integration.',
      'Delivered a responsive client-ready site and deployed it to Netlify.',
    ],
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Firebase', 'Stripe.js', 'Netlify'],
    accent: 'plum',
    icon: ShoppingBag,
  },
];

export const timeline = [
  {
    date: '2025 - Present',
    role: 'Freelance Frontend Developer',
    company: 'Self-employed, Remote',
    bullets: [
      'Delivered 5+ production-ready web applications across e-commerce, fintech-style dashboards, and food delivery products.',
      'Built reusable UI components with Tailwind CSS and implemented Firebase authentication with realtime features.',
      'Integrated Stripe and Razorpay for secure checkout and payment flows.',
      'Managed frontend delivery, deployment, client communication, and post-launch support.',
    ],
  },
  {
    date: '2021 - 2024',
    role: 'Frontend Developer',
    company: 'Pong Game Studios',
    bullets: [
      'Developed and maintained React.js and TypeScript features for a high-traffic e-commerce platform.',
      'Built reusable component libraries that improved UI consistency and reduced development time.',
      'Implemented Redux for centralized state management across cart, user session, and product flows.',
      'Optimized performance through lazy loading and code splitting, reducing page load time by 35%.',
    ],
  },
  {
    date: '2019 - 2021',
    role: 'Software Developer',
    company: 'Hero Energy and Engineering',
    bullets: [
      'Built React.js frontend modules for a realtime energy management dashboard.',
      'Integrated Firebase Realtime Database for live data updates and visualization.',
      'Collaborated with backend teams to connect frontend features with REST APIs.',
    ],
  },
  {
    date: '2015 - 2018',
    role: 'Web Developer',
    company: 'JH Assemblies',
    bullets: [
      'Developed responsive websites using HTML, CSS, and JavaScript.',
      'Improved website performance, SEO, and cross-browser compatibility across multiple projects.',
    ],
  },
];

export const contactDetails = [
  {
    label: 'Email',
    value: 'soniadolfus.26@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=soniadolfus.26@gmail.com',
  },
  { label: 'Phone', value: '437-223-6141', href: 'tel:+14372236141' },
  { label: 'Location', value: 'Ajax, Ontario, Canada' },
];
