import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-poppins font-bold text-2xl text-accent">
              Alavanca AI
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-poppins text-primary-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="/about" className="font-poppins text-primary-foreground/80 hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="/#solutions" className="font-poppins text-primary-foreground/80 hover:text-accent transition-colors">
              Soluções
            </a>
            <a href="/portfolio" className="font-poppins text-primary-foreground/80 hover:text-accent transition-colors">
              Portfólio
            </a>
            <a href="/contact" className="font-poppins text-primary-foreground/80 hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;