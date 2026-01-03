import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Link2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "sonner";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  // Parse markdown-like content to HTML
  const parseContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        // Headers
        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
              {line.replace("### ", "")}
            </h3>
          );
        }
        // Code blocks
        if (line.startsWith("```")) {
          return null; // Handle separately
        }
        // List items
        if (line.startsWith("- ")) {
          return (
            <li key={index} className="ml-6 mb-2 text-muted-foreground">
              {line.replace("- ", "")}
            </li>
          );
        }
        if (line.match(/^\d+\. /)) {
          return (
            <li key={index} className="ml-6 mb-2 text-muted-foreground list-decimal">
              {line.replace(/^\d+\. /, "")}
            </li>
          );
        }
        // Table rows
        if (line.startsWith("|")) {
          return null; // Handle tables separately
        }
        // Empty lines
        if (line.trim() === "") {
          return <div key={index} className="h-4" />;
        }
        // Regular paragraphs
        return (
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {line}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{post.title} | Saim Saudagar</title>
      <meta name="description" content={post.metaDescription} />
      <meta name="keywords" content={post.metaKeywords.join(", ")} />
      <link rel="canonical" href={`https://saimsaudagar.com/blog/${post.slug}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.metaDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://saimsaudagar.com/blog/${post.slug}`} />
      <meta property="og:image" content={post.image} />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:author" content={post.author.name} />
      <meta property="article:section" content={post.category} />
      {post.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.metaDescription} />
      <meta name="twitter:image" content={post.image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: post.image,
          author: {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.role,
          },
          datePublished: post.date,
          publisher: {
            "@type": "Person",
            name: "Saim Saudagar",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://saimsaudagar.com/blog/${post.slug}`,
          },
          keywords: post.tags.join(", "),
        })}
      </script>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16">
          <article className="container mx-auto px-4 md:px-6 max-w-4xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.header
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {parseContent(post.content)}
            </motion.div>

            {/* Tags */}
            <motion.div
              className="mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share:
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("twitter")}
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("linkedin")}
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("copy")}
                aria-label="Copy link"
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Post Navigation */}
            <motion.div
              className="mt-12 grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <span className="text-muted-foreground text-sm flex items-center gap-1 mb-2">
                    <ChevronLeft className="w-4 h-4" />
                    Previous Article
                  </span>
                  <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors md:text-right"
                >
                  <span className="text-muted-foreground text-sm flex items-center gap-1 mb-2 md:justify-end">
                    Next Article
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </motion.div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="container mx-auto px-4 md:px-6 mt-20">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="group block">
                      <div className="bg-card rounded-xl overflow-hidden border border-border hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-primary text-xs font-medium">
                            {relatedPost.category}
                          </span>
                          <h3 className="font-bold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          )}

          <Newsletter />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
