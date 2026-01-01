import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-light.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-8 sm:py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Top Row: Logo & Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logoLight} alt="Saim Saudagar" className="h-8 sm:h-10 w-auto hidden dark:block" />
              <img src={logoDark} alt="Saim Saudagar" className="h-8 sm:h-10 w-auto dark:hidden" />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/saimsaudagar", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/saimsaudagar", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com/saimsaudagar", label: "Twitter" },
                { icon: Mail, href: "mailto:contact@saimsaudagar.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              { name: "Problem", href: "#problem" },
              { name: "Solution", href: "#solution" },
              { name: "Services", href: "#services" },
              { name: "Work", href: "#work" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 sm:pt-6 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Saim Saudagar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
