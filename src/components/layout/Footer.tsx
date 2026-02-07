import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Heart className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-serif font-semibold">Presbyterian Heart Group</p>
              <p className="text-xs text-primary-foreground/70">Internal Clinical Guidance</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <Link to="/providers/ordersets" className="hover:text-primary-foreground transition-colors">
              Providers
            </Link>
            <Link to="/nursing/assessment" className="hover:text-primary-foreground transition-colors">
              Nursing
            </Link>
            <Link to="/pharmacy" className="hover:text-primary-foreground transition-colors">
              Pharmacy
            </Link>
            <Link to="/therapy" className="hover:text-primary-foreground transition-colors">
              PT/OT
            </Link>
            <a 
              href="https://www.phscenter.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              The Center
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-primary-foreground/50">
          <p>For internal use only. Contact PHG for questions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;