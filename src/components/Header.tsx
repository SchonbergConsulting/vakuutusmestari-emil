import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Emil Schönberg
            </div>
            <div className="hidden md:block text-sm text-muted-foreground">
              Valtuutettu vakuutusasiamies
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#palvelut" className="text-foreground hover:text-primary transition-colors">
              Palvelut
            </a>
            <a href="#tietoa" className="text-foreground hover:text-primary transition-colors">
              Tietoa minusta
            </a>
            <a href="#yhteystiedot" className="text-foreground hover:text-primary transition-colors">
              Yhteystiedot
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Phone className="h-4 w-4" />
              050 441 2262
            </Button>
            <Button variant="professional" size="sm">
              <Mail className="h-4 w-4" />
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;