import { Button } from "@/components/ui/button";
import { Shield, Phone, Award, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-blue-100 font-medium">Vakuutusedustustaja</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Emil Schönberg
            </h1>
            
            <p className="text-xl mb-6 text-blue-100 leading-relaxed">
              Emil Schönberg toimii vakuutusedustustajana ja tarjoaa Pohjola Vakuutus Oy:n, 
              OP-Henkivakuutus Oy:n ja Ilmarisen vakuutuksia yrityksille.
            </p>
            
            <div className="flex items-center space-x-2 mb-8">
              <Award className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100 text-sm">
                Rekisteröity Finanssivalvonnan vakuutusedustajarekisteriin
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="h-5 w-5" />
                Soita nyt: 050 441 2262
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-5 w-5" />
                emil.schonberg@pohjola.fi
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-elegant">
              <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white/60 text-sm">Kuva Emil Schönbergistä</span>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Luotettava asiantuntija</h3>
                <p className="text-blue-100 text-sm">
                  Yli vuosien kokemus vakuutusalalta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;