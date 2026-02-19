import { motion } from "framer-motion";
import { FileText, Shield, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

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
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <FileText className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              By using our services, you agree to these terms and conditions.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using Royal Byte Tech's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
              <p className="text-muted-foreground mb-4">
                We provide website development, web applications, mobile apps, UI/UX design, and digital marketing services.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom website and application development</li>
                <li>• Mobile app development for iOS and Android</li>
                <li>• UI/UX design and user experience optimization</li>
                <li>• Digital marketing and social media management</li>
                <li>• Technical support and maintenance</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Payment Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                Payment for services is required before commencement. We accept various payment methods as specified in your service agreement.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                Royal Byte Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us:<br />
                  Email: info@royalbyte.com<br />
                  Phone: +233 20 830 4627<br />
                  Location: Accra, Ghana
                </p>
              </div>
            </motion.section>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              onClick={() => navigate("#/")}
              className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold px-8 py-6 text-lg"
            >
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
