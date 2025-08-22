import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-poppins font-semibold text-xl text-primary">
              Alavanca AI
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" className="font-poppins text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#portfolio" className="font-poppins text-foreground hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#contato" className="font-poppins text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button className="font-poppins font-medium">
              Consultoria Gratuita
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;