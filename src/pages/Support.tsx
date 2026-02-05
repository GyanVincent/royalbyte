import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Shield, Users, Zap, Headphones, FileText, Search, Send, CheckCircle, AlertCircle, HelpCircle, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const supportOptions = [
  {
    id: "live-chat",
    title: "Live Chat",
    icon: MessageCircle,
    description: "Get instant help from our support team",
    availability: "Available 24/7",
    responseTime: "Instant",
    features: ["Real-time conversation", "Screen sharing", "File attachments", "Chat history"]
  },
  {
    id: "email",
    title: "Email Support",
    icon: Mail,
    description: "Send detailed questions and receive comprehensive answers",
    availability: "24/7",
    responseTime: "Within 24 hours",
    features: ["Detailed responses", "File attachments", "Ticket tracking", "Email history"]
  },
  {
    id: "phone",
    title: "Phone Support",
    icon: Phone,
    description: "Speak directly with our support specialists",
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate during business hours",
    features: ["Direct conversation", "Complex issue resolution", "Priority support", "Call recording"]
  }
];

const faqCategories = [
  {
    title: "Getting Started",
    icon: Zap,
    questions: [
      {
        q: "How do I get started with Royal Byte Tech?",
        a: "Getting started is easy! Sign up for a free account, choose your plan, and follow our quick start guide. Our documentation provides step-by-step instructions for all features."
      },
      {
        q: "What programming languages do you support?",
        a: "We support a wide range of languages including JavaScript, Python, Java, C#, Ruby, PHP, Go, and many more. Check our documentation for the complete list."
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
      }
    ]
  },
  {
    title: "Billing & Accounts",
    icon: Shield,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and wire transfers for enterprise accounts. All payments are processed securely through our payment partners."
      },
      {
        q: "Can I change my plan anytime?",
        a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact our support team for a full refund."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: Headphones,
    questions: [
      {
        q: "How do I report a bug or issue?",
        a: "You can report bugs through our support portal, email, or live chat. Please include detailed information about the issue, steps to reproduce, and any error messages."
      },
      {
        q: "What is your uptime guarantee?",
        a: "We guarantee 99.9% uptime for all paid plans. In the unlikely event of downtime, we'll provide service credits according to our SLA."
      },
      {
        q: "Do you provide technical training?",
        a: "Yes! We offer comprehensive training programs including documentation, video tutorials, webinars, and personalized training sessions for enterprise clients."
      }
    ]
  }
];

const resources = [
  {
    title: "Knowledge Base",
    description: "Comprehensive articles and guides",
    icon: FileText,
    link: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Users,
    link: "#"
  },
  {
    title: "API Documentation",
    description: "Complete API reference and examples",
    icon: Zap,
    link: "#"
  },
  {
    title: "Community Forum",
    description: "Connect with other developers",
    icon: MessageCircle,
    link: "#"
  }
];

const Support = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Support request submitted:", formData);
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Priority: ${formData.priority}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:support@royalbyte.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert("Thank you for contacting us! Your email client has been opened with your support request. Please send the email to submit your ticket.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "normal"
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "high": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "normal": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-muted text-muted-foreground";
    }
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
              Customer <span className="text-secondary">Support</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're here to help you succeed. Get expert support from our dedicated team whenever you need it.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Users className="w-4 h-4 text-secondary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Zap className="w-4 h-4 text-secondary" />
                <span>Fast Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
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
              How Can We <span className="text-secondary">Help You</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the support option that works best for you
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.id}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-royal flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{option.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span>{option.responseTime}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => {
                    if (option.id === "live-chat") {
                      // Open live chat (placeholder for actual chat implementation)
                      alert("Live chat feature coming soon! Please use email or phone support for now.");
                    } else if (option.id === "email") {
                      window.location.href = "mailto:support@royalbyte.com";
                    } else if (option.id === "phone") {
                      window.location.href = "https://wa.me/233530335103";
                    }
                  }}
                  className="w-full bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
                >
                  {option.title === "Live Chat" ? "Start Chat" : option.title === "Email Support" ? "Send Email" : "Call Now"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
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
                Send Us a <span className="text-secondary">Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                      placeholder="Your name"
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

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary/50 text-foreground resize-none"
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {faqCategories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  variant={selectedCategory === index ? "default" : "outline"}
                  className={`${
                    selectedCategory === index 
                      ? "bg-gradient-royal text-foreground" 
                      : "border-border hover:bg-primary/10"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.title}
                </Button>
              ))}
            </div>

            {/* FAQ Items */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqCategories[selectedCategory].questions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{faq.q}</span>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedQuestion === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-muted-foreground pl-8">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources */}
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
              Self-Service <span className="text-secondary">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers and learn at your own pace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <resource.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => alert("Resources coming soon! Please contact our support team for assistance.")}
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="text-secondary">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The support team is incredibly responsive and knowledgeable. They helped us resolve our issues within minutes.",
                author: "Sarah Johnson",
                position: "CTO, TechCorp",
                rating: 5
              },
              {
                quote: "Best customer service I've experienced. They go above and beyond to ensure customer satisfaction.",
                author: "Michael Chen",
                position: "Developer, StartupXYZ",
                rating: 5
              },
              {
                quote: "The documentation and support resources are comprehensive. We were able to implement everything smoothly.",
                author: "Emily Rodriguez",
                position: "Project Manager, Enterprise Inc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Emergency <span className="text-secondary">Support</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                For critical issues affecting your production environment, we offer emergency support with guaranteed response times.
              </p>
              <div className="bg-card rounded-xl border border-orange-500/20 p-6 mb-8">
                <h3 className="font-semibold mb-2">Emergency WhatsApp Support</h3>
                <p className="text-2xl font-bold text-green-500 mb-2">+233530335103</p>
                <p className="text-sm text-muted-foreground">Available 24/7 for critical issues only</p>
              </div>
              <Button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                }}
                className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
              >
                Back to Home
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
