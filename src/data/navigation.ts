import { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },

  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
