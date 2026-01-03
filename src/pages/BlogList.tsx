import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { blogPosts, categories } from "@/data/blogPosts";

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Blog - Saim Saudagar | Web Development & Tech Insights</title>
      <meta
        name="description"
        content="Explore articles on web development, design systems, AI in tech, and business growth. Expert insights from a full-stack developer."
      />
      <meta
        name="keywords"
        content="web development blog, React tutorials, Next.js guides, TypeScript tips, design systems, AI development"
      />
      <link rel="canonical" href="https://saimsaudagar.com/blog" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Blog - Saim Saudagar" />
      <meta property="og:description" content="Web development insights, tutorials, and tech articles" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saimsaudagar.com/blog" />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            {/* Page Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Insights & Articles
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The <span className="text-primary">Blog</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Thoughts on development, design, and building products that make a difference
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Featured Post */}
            {activeCategory === "All" && !searchQuery && featuredPost && (
              <motion.article
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to={`/blog/${featuredPost.slug}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50" />
                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-primary text-sm font-medium mb-3">
                          {featuredPost.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm">{featuredPost.author.name}</p>
                            <p className="text-muted-foreground text-xs">{featuredPost.author.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((post) => !post.featured || activeCategory !== "All" || searchQuery)
                .map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="group block h-full">
                      <div className="bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <span className="text-primary text-sm font-medium mb-2">
                            {post.category}
                          </span>
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>

          <Newsletter />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogList;
