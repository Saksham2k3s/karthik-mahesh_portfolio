import { site } from "@/config/site";

const Footer = () => (
  <footer className="rail-footer">
    <p>© {new Date().getFullYear()} {site.name}</p>
    <span>Portrait template</span>
  </footer>
);

export default Footer;
