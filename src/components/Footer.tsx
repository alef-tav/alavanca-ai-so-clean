const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">AI</span>
              </div>
              <span className="font-poppins font-semibold text-xl">
                Alavanca AI
              </span>
            </div>
            <p className="font-poppins text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Transformando negócios através da inteligência artificial. 
              Soluções sofisticadas e personalizadas para impulsionar seu crescimento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <span className="text-lg">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <span className="text-lg">📱</span>
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 font-poppins text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Chatbots Inteligentes</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Análise Preditiva</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Visão Computacional</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 font-poppins text-primary-foreground/80">
              <li>contato@alavancaia.online</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Agendar Consultoria</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins text-primary-foreground/60 text-sm">
            © 2024 Alavanca AI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="font-poppins text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="/terms-of-use" className="font-poppins text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;