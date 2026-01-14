import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gyanvincent111@gmail.com",
    href: "mailto:gyanvincent111@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Start Your <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-display text-2xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input
                      required
                      placeholder="Your name"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                  <Input
                    required
                    placeholder="Project inquiry"
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <Textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-royal hover:opacity-90 text-foreground font-semibold py-6"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent
                    </>
                  ) : isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-4">Let's Talk</h3>
                <p className="text-muted-foreground">
                  Have a project in mind? We'd love to hear about it. Drop us a message or reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-display text-lg font-semibold mb-2 text-secondary">
                  Quick Response Guaranteed
                </h4>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours. For urgent projects, call us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
