import { motion } from "framer-motion";
import { Shield, Eye, Lock, UserCheck, Database, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide directly (name, email, phone number)",
        "Information collected automatically when you use our services",
        "Information from third-party services you connect with",
        "Communications and support interactions"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To communicate with you about your projects",
        "To improve our services and user experience",
        "To ensure security and prevent fraud"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Regular security audits and updates",
        "Encrypted data transmission and storage",
        "Limited access to personal information"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access to your personal information",
        "Correction of inaccurate data",
        "Deletion of your account and data",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: Database,
      title: "Data Retention",
      content: [
        "We retain data only as long as necessary",
        "Project data is kept for 7 years after completion",
        "Marketing data is retained for 2 years",
        "Legal requirements may extend retention periods"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content: [
        "Essential cookies for site functionality",
        "Analytics cookies to improve user experience",
        "Marketing cookies for personalized content",
        "You can control cookie preferences in your browser"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>

          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient-royal">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-card border border-border rounded-2xl p-8 mb-12"
          >
            <h2 className="font-display text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Royal Byte, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your data when you use our services.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-semibold mb-4">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
            </p>
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
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
