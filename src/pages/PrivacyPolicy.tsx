import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    // Scroll to top of page
    window.scrollTo(0, 0);
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <Button
            onClick={handleBackToHome}
            className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold px-8 py-6 text-lg flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-royal rounded-full mb-6"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-royal">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our priority. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
                <Lock className="w-6 h-6 text-primary" />
                Information We Collect
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">What We Collect</h3>
                  <p className="mb-4">We collect information you provide directly to us:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Name and contact information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Service requirements and preferences
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Communication details
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Technical information related to services
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">How We Use It</h3>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Respond to your inquiries and requests
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Provide our services and support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Communicate with you about our services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Improve our website and services
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
                <Eye className="w-6 h-6 text-primary" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Our Commitment</h3>
                  <p className="mb-4">We are committed to:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Providing excellent service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Respecting your privacy choices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Being transparent about our practices
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Your Rights</h3>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Access and update your information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Request data deletion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Opt-out of marketing communications
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
                <Database className="w-6 h-6 text-primary" />
                Data Security
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Encryption & Protection</h4>
                    <p className="text-sm">We use industry-standard encryption to protect your data during transmission and storage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Access Control</h4>
                    <p className="text-sm">Only authorized personnel can access your personal information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Regular Updates</h4>
                    <p className="text-sm">We regularly review and update our security measures.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Database className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">royalbytetech@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+233 20 830 4627</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
