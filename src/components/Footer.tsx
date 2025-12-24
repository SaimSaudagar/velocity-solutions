import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">SS</span>
              <span className="text-lg font-semibold text-foreground">Saim Saudagar</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Saim Saudagar. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Problem", "Solution", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "mailto:contact@saimsaudagar.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
