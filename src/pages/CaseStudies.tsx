import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, Users, Award, TrendingUp, Globe, Smartphone, Code2, Database, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Revolution",
    client: "TechMart Solutions",
    industry: "Retail & E-Commerce",
    duration: "6 months",
    team: "8 members",
    category: "Web Development",
    image: "/case1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    overview: "Complete transformation of traditional retail business into a modern e-commerce platform with advanced features and seamless user experience.",
    challenge: "TechMart Solutions was struggling with an outdated system that couldn't handle their growing customer base. They needed a scalable solution that could handle high traffic, secure payments, and provide excellent user experience.",
    solution: "We developed a comprehensive e-commerce platform using React for the frontend, Node.js for the backend, and MongoDB for the database. The solution included real-time inventory management, secure payment processing, and advanced analytics.",
    results: [
      { metric: "300%", change: "increase in online sales", icon: TrendingUp },
      { metric: "50%", change: "reduction in operational costs", icon: Award },
      { metric: "4.8/5", change: "customer satisfaction rating", icon: Users },
      { metric: "99.9%", change: "uptime reliability", icon: Shield }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis", "Docker"],
    testimonial: {
      quote: "Royal Byte Tech transformed our business completely. The new platform has exceeded our expectations and our customers love it.",
      author: "Sarah Johnson",
      position: "CEO, TechMart Solutions"
    }
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "MediCare Plus",
    industry: "Healthcare",
    duration: "8 months",
    team: "12 members",
    category: "Enterprise Software",
    image: "/case2.jpg",
    tags: ["React", "Python", "PostgreSQL", "HIPAA Compliance"],
    overview: "Comprehensive healthcare management system that streamlined patient records, appointments, and billing while maintaining HIPAA compliance.",
    challenge: "MediCare Plus needed a modern solution to replace their paper-based system. The challenge was to create a secure, HIPAA-compliant system that could handle sensitive patient data while improving efficiency.",
    solution: "We built a robust healthcare management system with React frontend, Python backend, and PostgreSQL database. The system included patient records management, appointment scheduling, billing, and telemedicine capabilities.",
    results: [
      { metric: "60%", change: "reduction in administrative time", icon: TrendingUp },
      { metric: "40%", change: "faster patient check-ins", icon: Users },
      { metric: "100%", change: "HIPAA compliance achieved", icon: Shield },
      { metric: "24/7", change: "system availability", icon: Globe }
    ],
    technologies: ["React", "Python", "PostgreSQL", "Django", "AWS", "Docker"],
    testimonial: {
      quote: "The system has revolutionized how we manage patient care. It's secure, efficient, and our staff loves using it.",
      author: "Dr. Michael Chen",
      position: "Medical Director, MediCare Plus"
    }
  },
  {
    id: 3,
    title: "FinTech Mobile Banking App",
    client: "SecureBank Digital",
    industry: "Banking & Finance",
    duration: "10 months",
    team: "15 members",
    category: "Mobile Development",
    image: "/case3.jpg",
    tags: ["React Native", "Node.js", "Blockchain", "Security"],
    overview: "Next-generation mobile banking application with advanced security features, real-time transactions, and blockchain integration.",
    challenge: "SecureBank Digital wanted to launch a modern mobile banking app that could compete with major fintech companies while maintaining the highest security standards.",
    solution: "We developed a cutting-edge mobile banking app using React Native for cross-platform compatibility, Node.js backend, and blockchain integration for enhanced security. The app included biometric authentication, real-time transactions, and AI-powered financial insights.",
    results: [
      { metric: "150K+", change: "active users in first 6 months", icon: Users },
      { metric: "99.99%", change: "transaction success rate", icon: Shield },
      { metric: "4.9/5", change: "app store rating", icon: Award },
      { metric: "50%", change: "reduction in customer support calls", icon: TrendingUp }
    ],
    technologies: ["React Native", "Node.js", "Blockchain", "AWS", "Machine Learning", "Biometric Auth"],
    testimonial: {
      quote: "Royal Byte Tech delivered beyond our expectations. The app is secure, fast, and our customers love the features.",
      author: "Robert Williams",
      position: "CTO, SecureBank Digital"
    }
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Button
              onClick={() => navigate("/")}
              className="mb-6 bg-background/10 hover:bg-background/20 text-foreground border border-border/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Case <span className="text-secondary">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results with our innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Award className="w-4 h-4 text-secondary" />
                <span>50+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Users className="w-4 h-4 text-secondary" />
                <span>100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-display font-bold mb-4">{study.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>{study.category}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{study.overview}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <result.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <div className="font-semibold">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-background/50 rounded-lg p-4 border border-border/50 mb-6">
                      <p className="text-sm italic mb-2">"{study.testimonial.quote}"</p>
                      <p className="text-xs font-medium">- {study.testimonial.author}, {study.testimonial.position}</p>
                    </div>

                    <Button 
                      onClick={() => {
                        navigate("/");
                        setTimeout(() => {
                          const contactSection = document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 100);
                      }}
                      className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Image Side */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[size:60px_60px]" />
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-royal flex items-center justify-center">
                        <Code2 className="w-16 h-16 text-foreground" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-background/80 text-foreground rounded-lg text-xs font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Create Your <span className="text-secondary">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our list of successful clients and let us help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/support")}
                variant="outline"
                className="border-border hover:bg-primary/10"
              >
                Get Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
