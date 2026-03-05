import { motion } from "framer-motion";
import { FileText, Shield, Users, AlertCircle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-royal">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              By using our services, you agree to these terms and conditions.
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
                <Users className="w-6 h-6 text-primary" />
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="mb-4">
                  By accessing or using Royal Byte Tech's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold mb-2 text-foreground">Binding Agreement</h4>
                  <p className="text-sm">These terms constitute a legally binding agreement between you and Royal Byte Tech.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Services Description</h2>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Core Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Custom website and application development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Mobile app development for iOS and Android
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      UI/UX design and user experience optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                      Digital marketing and social media management
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Additional Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Technical support and maintenance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0"></span>
                      Consulting and training
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
                <Shield className="w-6 h-6 text-primary" />
                Payment Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold mb-2 text-foreground">Payment Methods</h4>
                  <p className="text-sm">We accept various payment methods including:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Bank transfers</li>
                    <li>• Mobile money transfers</li>
                    <li>• Credit/debit cards</li>
                    <li>• Digital wallets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Payment Schedule</h4>
                  <p className="text-sm">Payment is required before commencement of services.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
                <AlertCircle className="w-6 h-6 text-primary" />
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="mb-4">
                  Royal Byte Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold mb-2 text-foreground">What We're Not Liable For</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Lost profits or opportunities</li>
                    <li>• Data loss or corruption</li>
                    <li>• Third-party service interruptions</li>
                    <li>• Force majeure events</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button
              onClick={handleBackToHome}
              className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold px-8 py-6 text-lg flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
