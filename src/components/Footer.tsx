import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Emil Schönberg</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Emil Schönberg toimii vakuutusedustustajana ja tarjoaa Pohjola Vakuutus Oy:n, 
              OP-Henkivakuutus Oy:n ja Ilmarisen vakuutuksia yrityksille.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>050 441 2262</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>emil.schonberg@pohjola.fi</span>
              </div>
            </div>
          </div>


          <div>
            <h4 className="font-semibold mb-4">Yhtiöt</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Pohjola Vakuutus Oy</li>
              <li>OP-Henkivakuutus Oy</li>
              <li>Ilmarinen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              <p>
                Yritys on rekisteröity Finanssivalvonnan vakuutusedustajarekisteriin, 
                ja sen toimintaa valvoo Finanssivalvonta.
              </p>
            </div>
            <div className="text-sm text-blue-100">
              © 2024 Emil Schönberg - Vakuutusedustustaja
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;