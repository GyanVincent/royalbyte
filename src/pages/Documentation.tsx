import { motion } from "framer-motion";
import { ArrowRight, Search, Book, Code, Database, Cloud, Shield, Globe, Smartphone, Users, FileText, Download, ExternalLink, ChevronRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const documentationSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Book,
    description: "Learn the basics and set up your first project",
    articles: [
      {
        title: "Installation & Setup",
        description: "Step-by-step guide to install and configure Royal Byte Tech tools",
        difficulty: "Beginner",
        readTime: "5 min",
        content: "Complete installation instructions for all supported platforms..."
      },
      {
        title: "Quick Start Guide",
        description: "Get up and running in minutes with our quick start tutorial",
        difficulty: "Beginner", 
        readTime: "10 min",
        content: "Learn the essentials and create your first application..."
      },
      {
        title: "Basic Concepts",
        description: "Understanding core concepts and terminology",
        difficulty: "Beginner",
        readTime: "8 min",
        content: "Master the fundamental concepts behind our technology..."
      }
    ]
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: Code,
    description: "Complete API documentation and examples",
    articles: [
      {
        title: "REST API Overview",
        description: "Complete REST API documentation with endpoints",
        difficulty: "Intermediate",
        readTime: "15 min",
        content: "Detailed API reference including all endpoints, parameters, and responses..."
      },
      {
        title: "Authentication",
        description: "Secure authentication methods and best practices",
        difficulty: "Intermediate",
        readTime: "12 min",
        content: "Learn about OAuth, API keys, and secure authentication..."
      },
      {
        title: "GraphQL API",
        description: "GraphQL schema and query documentation",
        difficulty: "Advanced",
        readTime: "20 min",
        content: "Complete GraphQL API documentation with schema and examples..."
      }
    ]
  },
  {
    id: "tutorials",
    title: "Tutorials",
    icon: Users,
    description: "Step-by-step tutorials for common use cases",
    articles: [
      {
        title: "Building a Web App",
        description: "Complete tutorial for building a modern web application",
        difficulty: "Intermediate",
        readTime: "30 min",
        content: "Build a full-featured web application from scratch..."
      },
      {
        title: "Mobile App Development",
        description: "Create cross-platform mobile applications",
        difficulty: "Intermediate",
        readTime: "25 min",
        content: "Learn to build mobile apps for iOS and Android..."
      },
      {
        title: "Database Integration",
        description: "Connect your applications to various databases",
        difficulty: "Advanced",
        readTime: "35 min",
        content: "Master database integration with different systems..."
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: Cloud,
    description: "Deploy your applications to production",
    articles: [
      {
        title: "Cloud Deployment",
        description: "Deploy to AWS, Google Cloud, and Azure",
        difficulty: "Intermediate",
        readTime: "20 min",
        content: "Complete guide to cloud deployment strategies..."
      },
      {
        title: "Docker & Containers",
        description: "Containerize and deploy your applications",
        difficulty: "Advanced",
        readTime: "25 min",
        content: "Learn Docker best practices and container deployment..."
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated testing and deployment workflows",
        difficulty: "Advanced",
        readTime: "30 min",
        content: "Set up continuous integration and deployment..."
      }
    ]
  }
];

const codeExamples = [
  {
    title: "Basic API Call",
    language: "javascript",
    code: `// Simple API request example
const response = await fetch('/api/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`
  },
  {
    title: "Database Connection",
    language: "python",
    code: `# Database connection example
import royalbyte_db

# Initialize connection
db = royalbyte_db.connect(
    host='localhost',
    database='myapp',
    user='username',
    password='password'
)

# Execute query
result = db.query("SELECT * FROM users WHERE active = true")
print(result)`
  },
  {
    title: "React Component",
    language: "jsx",
    code: `// React component example
import { RoyalByteAPI } from '@royalbyte/react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    RoyalByteAPI.getUser(userId).then(setUser);
  }, [userId]);
  
  return user ? (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  ) : <div>Loading...</div>;
}`
  }
];

const Documentation = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedCode, setCopiedCode] = useState(null);

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

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-500 border-red-500/20";
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
              <span className="text-secondary">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and tutorials to help you build amazing applications with Royal Byte Tech.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary/50 text-foreground placeholder-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Book, label: "Getting Started", count: "12 articles" },
              { icon: Code, label: "API Reference", count: "45 endpoints" },
              { icon: Users, label: "Tutorials", count: "28 guides" },
              { icon: FileText, label: "Examples", count: "100+ samples" }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <item.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.count}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {documentationSections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-royal flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.articles.map((article, index) => (
                      <div key={index} className="bg-background/50 rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="font-semibold mb-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Code <span className="text-secondary">Examples</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use code snippets and examples to accelerate your development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="p-6 border-b border-border">
                  <h3 className="font-semibold mb-2">{example.title}</h3>
                  <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                    {example.language}
                  </span>
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm overflow-x-auto bg-muted/50">
                    <code>{example.code}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(example.code, index)}
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  >
                    {copiedCode === index ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-12">
              Additional <span className="text-secondary">Resources</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "SDK Downloads", description: "Download official SDKs", icon: Download },
                { title: "Video Tutorials", description: "Watch video guides", icon: Users },
                { title: "Community Forum", description: "Join our community", icon: Globe },
                { title: "GitHub Repository", description: "View source code", icon: Code }
              ].map((resource, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                  <resource.icon className="w-8 h-8 text-secondary mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
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
              Need More <span className="text-secondary">Help</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get expert assistance whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/support")}
                className="bg-gradient-royal hover:opacity-90 text-foreground font-semibold"
              >
                Get Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/case-studies")}
                variant="outline"
                className="border-border hover:bg-primary/10"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
