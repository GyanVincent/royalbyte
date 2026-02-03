import { motion } from "framer-motion";
import { FileText, Users, AlertTriangle, CreditCard, RefreshCw, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By accessing and using Royal Byte services, you agree to be bound by these Terms",
        "These terms constitute a legally binding agreement between you and Royal Byte",
        "If you disagree with any part of these terms, you may not access our services",
        "We reserve the right to modify these terms at any time"
      ]
    },
    {
      icon: Users,
      title: "Services Description",
      content: [
        "Royal Byte provides web development, mobile app development, and digital services",
        "We strive to provide high-quality services but cannot guarantee specific outcomes",
        "Service timelines are estimates and may vary based on project complexity",
        "Client cooperation and timely feedback are essential for project success"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements",
        "Typical payment structure: 50% upfront, 50% upon completion",
        "Late payments may incur interest charges as permitted by law",
        "All prices are quoted in the agreed currency and are exclusive of taxes"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information for your project",
        "Ensure you have rights to any content you provide",
        "Respond promptly to requests for feedback and approvals",
        "Maintain backup copies of your project data"
      ]
    },
    {
      icon: RefreshCw,
      title: "Refund Policy",
      content: [
        "Refunds are evaluated on a case-by-case basis",
        "Work completed and delivered is non-refundable",
        "Refund requests must be submitted within 30 days of delivery",
        "We reserve the right to deduct costs for work already completed"
      ]
    },
    {
      icon: Gavel,
      title: "Intellectual Property",
      content: [
        "We retain ownership of our proprietary tools and methodologies",
        "Final deliverables become your property upon full payment",
        "You grant us license to use your project in our portfolio",
        "Third-party components remain subject to their original licenses"
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
              Terms of <span className="text-gradient-royal">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our services. They outline your rights and responsibilities.
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
            <h2 className="font-display text-2xl font-semibold mb-4">Welcome to Royal Byte</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service govern your use of Royal Byte's web development, mobile app development, and digital services. 
              By using our services, you agree to comply with and be bound by these terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-4 text-center">Limitation of Liability</h3>
            <p className="text-muted-foreground text-center mb-4">
              Royal Byte shall not be liable for any indirect, incidental, special, or consequential damages 
              resulting from your use of our services. Our total liability shall not exceed the amount paid 
              for the specific service in question.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-semibold mb-4">Questions About Our Terms?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please reach out to our team.
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

export default TermsOfService;
