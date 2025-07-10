'use client'

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Code, 
  Database, 
  Zap, 
  Globe, 
  Mail, 
  MapPin, 
  Star,
  Moon,
  Sun,
  ChevronRight,
  Play,
  CheckCircle,
  MessageCircle,
  Rocket,
  Shield,
  Server,
  Brain,
  Cpu,
  Monitor,
  Users,
  Clock,
  Award,
  Heart,
  Coffee,
  Terminal,
  Layers,
  GitBranch,
  TrendingUp,
  Settings,
  Eye,
  Wifi,
  Camera,
  Gamepad2,
  Lock,
  BarChart3,
  Target,
  ArrowRight,
  Calendar,
  BookOpen,
  Book,
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'testimonials', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    
    {
      title: "Improglish",
      description: "Teacher-student progress tracker with real-time collaboration, assignment workflows, and performance analytics.",
      tech: ["Node.js", "Express", "PostgreSQL", "Socket.io", "React"],
      impact: "Gained more than 7 hours for admin with accuracy go beyond 100%",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Toiletverse",
      description: "Quirky indie 3D experience with avatar customization, Stripe payments, and multiplayer toilet adventures.",
      tech: ["Three.js", "React Native", "Stripe", "Node.js"],
      impact: "Learned How to fetch for free X profiles how to create scenes and meshs in thereejs ",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
     {
      title: "3D Book",
      description: "3D Book as a backlink place for indie hackers to showcase their work and get traffic",
      tech: ["Three.js", "React", "Stripe", "Node.js"],
      impact: "10 SignUp in first day",
      icon: <Book className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    
   
    {
      title: "ConflictFlow",
      description: "Domain management dashboard with conflict resolution UI, automated workflows, and real-time notifications.",
      tech: ["nextjs", "tailwind", "React", ],
      impact: "Working as Intern at Yutapp ",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500"
    },
     {
      title: "Udemy but for Moroccan linguistics",
      description: "Currently i am a founder engineer with collaboration with improglish to make a platform that hosts courses in dofferent languages but for morrocans ",
      tech: ["nextjs", "PostgreSQL", "React", "AWS", "Google Drive"],
      impact: "Make easy to learn language for local moroccans",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const skills = [
    { name: "Node.js", icon: <Server className="w-6 h-6" />, context: "Built 20+ production APIs" },
    { name: "Go", icon: <Zap className="w-6 h-6" />, context: "High-performance microservices" },
    { name: "Rust", icon: <Cpu className="w-6 h-6" />, context: "System-level optimization" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, context: "Complex query optimization" },
    { name: "Redis", icon: <Layers className="w-6 h-6" />, context: "Caching & real-time data" },
    { name: "WebSockets", icon: <Wifi className="w-6 h-6" />, context: "Real-time communication" },
    { name: "React", icon: <Globe className="w-6 h-6" />, context: "Modern UI development" },
    { name: "Next.js", icon: <Rocket className="w-6 h-6" />, context: "Full-stack applications" },
    { name: "Three.js", icon: <Eye className="w-6 h-6" />, context: "3D web experiences" },
    { name: "Stripe", icon: <Target className="w-6 h-6" />, context: "Payment processing" },
    { name: "Prisma", icon: <Settings className="w-6 h-6" />, context: "Database ORM" },
    { name: "OpenAI", icon: <Brain className="w-6 h-6" />, context: "AI integrations" }
  ];

  const testimonials = [
    {
      text: "Delivered a working product in 4 days. The real-time features work flawlessly and the code is production-ready.",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
      rating: 5
    },
    {
      text: "Best backend developer I've worked with. Built our entire infrastructure from scratch and it scales beautifully.",
      author: "Marcus Rodriguez",
      role: "Founder, DataSync",
      rating: 5
    },
    {
      text: "Incredible problem-solving skills. Optimized our API response time from 2s to 150ms. Would definitely hire again.",
      author: "Emma Thompson",
      role: "Product Manager, CloudBase",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Why I Chose Go for Real-Time APIs",
      excerpt: "Breaking down the performance benefits and architectural decisions that make Go perfect for high-throughput systems.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Backend"
    },
    {
      title: "How I Built a 3D Book with SkinnedMesh in React Three Fiber",
      excerpt: "A deep dive into creating interactive 3D objects with realistic page-turning animations and physics.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "3D Development"
    },
    {
      title: "Lessons from Parsing JSON by Hand",
      excerpt: "What I learned building a JSON parser from scratch in Rust and why it made me a better developer.",
      date: "Nov 12, 2024",
      readTime: "6 min read",
      category: "Systems"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 backdrop-blur-md border-gray-800' : 'bg-white/95 backdrop-blur-md border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Hamza</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors hover:text-blue-500 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Based in Morocco • Available Worldwide</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  I Build{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Startup-Ready
                  </span>{' '}
                  Backends & Interfaces
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Full-stack developer specializing in high-performance APIs, real-time systems, and scalable architectures. 
                  I ship production-ready code fast and help startups build their technical foundation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.upwork.com/freelancers/~01eee137f3513a996c?mp_source=share" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Hire Me on Upwork
                </a>
                
                <a 
                  href="#projects"
                  className={`inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white ${darkMode ? 'hover:bg-blue-500' : 'hover:bg-blue-500'}`}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View My Work
                </a>
              </div>

              {/* <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>48hr avg response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>5.0 rating on Upwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>15+ projects completed</span>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                    
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-gray-500 dark:text-gray-400">$ go run main.go</div>
                      <div className="text-green-500">✓ Server started on :8080</div>
                      <div className="text-blue-500">✓ Database connected</div>
                      <div className="text-purple-500">✓ Redis cache ready</div>
                      <div className="text-yellow-500">✓ WebSocket handler active</div>
                      <div className="text-green-500">✓ Ready to ship 🚀</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real products that solve real problems. Built with modern tech stacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>
                
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Battle-tested technologies I use to build production systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-500 group-hover:text-purple-500 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real feedback from real projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Me */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              I'm a hands-on backend developer from Morocco who loves building things that actually work. 
              While others debate frameworks, I'm shipping production code that scales.
            </p>
            
            <p>
              I've been coding for 3+ years, worked with early-stage startups, and built everything from 
              real-time chat systems to 3D web experiences. My superpower? Taking complex technical problems 
              and turning them into simple, elegant solutions.
            </p>
            
            <p>
              I work async, communicate clearly, and prefer startups with technical depth over corporate bureaucracy. 
              When I'm not coding, you'll find me exploring new tech, learning about distributed systems, 
              or probably drinking way too much coffee ☕
            </p>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/Elyoussf" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            {/* <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a> */}
            <a 
              href="https://twitter.com/helyoussfii" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Thoughts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Insights from building real systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    {post.category}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Ready to build something amazing? I'm available for freelance projects and startup consulting.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm`}>
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Need something built fast? I typically respond within 24 hours and can start immediately.
              </p>
              <a 
                href="mailto:your.email@example.com"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>elyoussfiihaamza@gmail.com</span>
              </a>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm`}>
              <h3 className="text-2xl font-bold mb-4">Prefer Upwork?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm active on Upwork with a 5-star rating. Browse my profile and send me a message.
              </p>
              <a 
                href="https://www.upwork.com/freelancers/~01eee137f3513a996c?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Upwork Profile</span>
              </a>
            </div>
          </div>
           </div>
          </section>
          {/* Contact Form */}
          {/* <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border backdrop-blur-sm`}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                <input 
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
              </div>
              
              <input 
                type="text"
                placeholder="Project Budget (e.g., $5,000 - $10,000)"
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
              />
              
              <textarea 
                rows="5"
                placeholder="Tell me about your project. What are you building? What's your timeline? Any specific technical requirements?"
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Hamza</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building the future, one commit at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Backend Development</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">API Design</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Database Architecture</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">System Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Node.js & Go</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">PostgreSQL & Redis</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">React & Next.js</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Three.js & WebGL</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Elyoussf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                {/* <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a> */}
                <a 
                  href="https://twitter.com/helyoussfii" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="elyoussfiihaamza@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Hamza. Built with Next.js, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;