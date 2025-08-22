import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-primary">Transforme o seu negócio.</span>{" "}
            <span className="text-accent">Automatize</span>{" "}
            <span className="text-primary">com sofisticação.</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            A Alavanca AI implementa soluções de inteligência artificial que 
            impulsionam o seu crescimento de forma elegante e eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-poppins font-medium text-lg px-8 py-4">
              Agendar Consultoria Gratuita
            </Button>
            <Button variant="outline" size="lg" className="font-poppins font-medium text-lg px-8 py-4">
              Ver Nosso Portfólio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;