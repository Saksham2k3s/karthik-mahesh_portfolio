import { site } from "@/config/site";

const Footer = () => (
  <footer className="rail-footer">
    <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    <span>{site.title} · {site.location}</span>
  </footer>
);

export default Footer;
