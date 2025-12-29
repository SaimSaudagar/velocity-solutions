import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Inc",
    content: "Saim delivered exactly what we needed - a beautiful, high-converting landing page that increased our signups by 340%. His attention to detail and communication were exceptional.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Marcus Chen",
    role: "Founder, OnlyPark",
    content: "Working with Saim was a game-changer for our startup. He understood our vision immediately and built an MVP that helped us secure our first round of funding.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLabs",
    content: "The dashboard Saim built for us transformed how we track metrics. Clean, intuitive, and exactly what we asked for. Will definitely work with him again.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "James Thompson",
    role: "CTO, DataSync",
    content: "Saim's technical expertise and design sense are rare to find in one person. He delivered our SaaS platform ahead of schedule with zero bugs.",
    rating: 5,
    avatar: "JT",
  },
  {
    name: "Lisa Park",
    role: "Founder, CreativeStudio",
    content: "From concept to launch in just 2 weeks. Saim made the entire process seamless and the final product exceeded our expectations.",
    rating: 5,
    avatar: "LP",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-drift" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-drift-reverse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>average rating from 20+ clients</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-transparent flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-12 bg-card/80 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </Carousel>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-1.5 mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
