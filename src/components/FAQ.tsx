import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 4-12 weeks, depending on scope. We use an agile methodology with weekly deliverables, so you'll see progress from day one."
  },
  {
    question: "What's included in the discovery phase?",
    answer: "The discovery phase includes stakeholder interviews, technical architecture planning, user research, competitive analysis, and a detailed project roadmap with milestones."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer flexible maintenance packages including 24/7 monitoring, bug fixes, performance optimization, and feature updates. Most clients choose our monthly retainer option."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Next.js, Node.js, PostgreSQL, and cloud platforms (AWS/GCP). We choose the best stack for each project's specific needs and scalability requirements."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use Slack for daily communication, weekly video calls for progress updates, and provide access to our project management tools. You'll always know exactly where your project stands."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer both fixed-price projects and time & materials engagements. After our discovery call, we'll provide a detailed proposal with transparent pricing based on your specific requirements."
  },
];

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);

  return (
    <section 
      ref={containerRef}
      id="faq" 
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          style={{ opacity, y, scale }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            Common Questions
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
