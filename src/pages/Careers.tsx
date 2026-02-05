import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, DollarSign, Briefcase, Users, Award, TrendingUp, Heart, Target, Zap, Shield, Globe, Calendar, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Accra, Ghana",
    type: "Full-time",
    experience: "5+ years",
    salary: "$60,000 - $80,000",
    description: "We're looking for an experienced Full Stack Developer to join our growing team and help build amazing web applications for our clients.",
    responsibilities: [
      "Design and develop scalable web applications using modern technologies",
      "Collaborate with cross-functional teams to define and ship new features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Mentor junior developers and help them grow their skills"
    ],
    requirements: [
      "5+ years of experience in full stack development",
      "Strong proficiency in JavaScript, React, Node.js, and modern frameworks",
      "Experience with cloud services (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: ["Health insurance", "Flexible work hours", "Professional development budget", "Remote work options"],
    posted: "2 weeks ago",
    featured: true
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Accra, Ghana",
    type: "Full-time",
    experience: "3+ years",
    salary: "$45,000 - $65,000",
    description: "Join our creative team to design beautiful and intuitive user interfaces that delight our customers and drive business success.",
    responsibilities: [
      "Create wireframes, mockups, and prototypes for web and mobile applications",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve our design system",
      "Stay up-to-date with design trends and best practices"
    ],
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe Creative Suite, or similar tools",
      "Strong portfolio demonstrating design skills",
      "Understanding of user-centered design principles",
      "Excellent communication and presentation skills"
    ],
    benefits: ["Health insurance", "Flexible work hours", "Creative freedom", "Remote work options"],
    posted: "1 week ago",
    featured: false
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote / Accra, Ghana",
    type: "Full-time",
    experience: "4+ years",
    salary: "$55,000 - $75,000",
    description: "We're seeking a talented Mobile App Developer to create innovative mobile applications for iOS and Android platforms.",
    responsibilities: [
      "Develop and maintain mobile applications using React Native or Flutter",
      "Collaborate with design and backend teams to implement features",
      "Optimize app performance and ensure smooth user experience",
      "Write unit tests and maintain code quality",
      "Stay current with mobile development trends and technologies"
    ],
    requirements: [
      "4+ years of mobile app development experience",
      "Strong proficiency in React Native or Flutter",
      "Experience with iOS and Android development guidelines",
      "Understanding of mobile app architecture and best practices",
      "Experience with RESTful APIs and third-party integrations"
    ],
    benefits: ["Health insurance", "Flexible work hours", "Latest equipment", "Remote work options"],
    posted: "3 days ago",
    featured: true
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Accra, Ghana",
    type: "Full-time",
    experience: "2+ years",
    salary: "$35,000 - $50,000",
    description: "Help us grow our brand and reach new customers through innovative digital marketing strategies and campaigns.",
    responsibilities: [
      "Develop and execute digital marketing campaigns across multiple channels",
      "Manage social media accounts and create engaging content",
      "Analyze marketing data and optimize campaigns for better results",
      "Collaborate with sales team to generate qualified leads",
      "Stay updated with digital marketing trends and tools"
    ],
    requirements: [
      "2+ years of digital marketing experience",
      "Experience with social media marketing, SEO, and PPC",
      "Strong analytical skills and data-driven mindset",
      "Excellent written and verbal communication skills",
      "Creative thinking and problem-solving abilities"
    ],
    benefits: ["Health insurance", "Flexible work hours", "Marketing budget", "Remote work options"],
    posted: "5 days ago",
    featured: false
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs to keep you healthy and happy."
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Professional development opportunities, training programs, and clear career paths."
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance that fits your lifestyle."
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable company with growth opportunities and long-term career prospects."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Work on projects that make a difference for clients around the world."
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Regular performance reviews, bonuses, and recognition for your contributions."
  }
];

const cultureValues = [
  {
    title: "Innovation First",
    description: "We embrace new ideas and creative solutions to solve complex problems.",
    icon: Zap
  },
  {
    title: "Customer Obsessed",
    description: "Our customers' success is our success. We go above and beyond to deliver excellence.",
    icon: Heart
  },
  {
    title: "Team Collaboration",
    description: "We believe in the power of teamwork and support each other to achieve great things.",
    icon: Users
  },
  {
    title: "Continuous Learning",
    description: "We're always learning, growing, and improving ourselves and our processes.",
    icon: TrendingUp
  }
];

const Careers = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null
  });

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

  const handleApply = (job) => {
    setSelectedJob(job);
    setFormData({...formData, position: job.title});
    // Scroll to application form
    setTimeout(() => {
      const formSection = document.getElementById("application-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience}

Message:
${formData.message}

Resume: ${formData.resume ? formData.resume.name : "No file uploaded"}
    `.trim();
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:careers@royalbyte.com?subject=Job Application: ${formData.position}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert("Thank you for your application! Your email client has been opened. Please send the email with your resume attached to complete your application.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
      resume: null
    });
    setSelectedJob(null);
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
              Join Our <span className="text-secondary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build your career with a team that's passionate about innovation, growth, and making a difference in the tech world.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Users className="w-4 h-4 text-secondary" />
                <span>20+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Globe className="w-4 h-4 text-secondary" />
                <span>Global Clients</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span>Growing Fast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Why <span className="text-secondary">Work With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and amazing benefits.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-royal flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Our <span className="text-secondary">Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building a team that values innovation, collaboration, and continuous growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-royal flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Open <span className="text-secondary">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity and join our amazing team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card rounded-2xl border ${job.featured ? 'border-secondary/50' : 'border-border'} p-8 hover:border-primary/50 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      {job.featured && (
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Experience: {job.experience}</span>
                      <span>•</span>
                      <span>Posted: {job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => handleApply(job)}
                      className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                      className="border-border hover:bg-primary/10"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                {selectedJob?.id === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-6 pt-6 border-t border-border"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Apply for <span className="text-secondary">Position</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                      placeholder="+233 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Position *</label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                      placeholder="Position you're applying for"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter / Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground resize-none"
                    placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Resume (CV)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
                >
                  Submit Application
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Don't See the <span className="text-secondary">Right Fit</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setFormData({...formData, position: "General Application"});
                  const formSection = document.getElementById("application-form");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
              >
                Send General Application
                <Mail className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/support")}
                variant="outline"
                className="border-border hover:bg-primary/10"
              >
                Contact HR
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
