import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, CheckCircle, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="tietoa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tietoa minusta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kokenut vakuutusalan ammattilainen, joka toimii asiakkaiden etujen mukaisesti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-accent rounded-lg p-6 mb-6">
              <div className="aspect-square bg-white/80 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">
                  Ammatillinen kuva Emil Schönbergistä
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Emil Schönberg</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Valtuutettu vakuutusasiamies
                </p>
                <Badge variant="secondary" className="bg-primary text-white">
                  Finanssivalvonnan rekisterissä
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ammatillinen osaaminen
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Toimin Pohjola Vakuutusyhtiön valtuutettuna vakuutusasiamiehenä ja 
                olen erikoistunut tarjoamaan asiakkailleni parasta mahdollista palvelua 
                vakuutusasioissa. Toimintani perustuu luotettavuuteen, asiantuntemukseen 
                ja henkilökohtaiseen palveluun.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">Valtuutettu asiamies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm">Jatkuva koulutus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Henkilökohtainen palvelu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Luotettava kumppani</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span>Virallinen status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Finanssivalvonnan rekisteri</h4>
                  <p className="text-muted-foreground text-sm">
                    Yritykseni on rekisteröity Finanssivalvonnan vakuutusasiamieheksi, 
                    ja toimintaani valvoo Finanssivalvonta. Tämä takaa toimintani 
                    läpinäkyvyyden ja luotettavuuden.
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <p className="text-sm font-medium text-primary">
                    Valvova viranomainen: Finanssivalvonta (FIN-FSA)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>Asiakkaan etu edellä</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Riippumaton neuvonta</h4>
                  <p className="text-muted-foreground text-sm">
                    Valtuutettuna asiamiehenä toimin asiakkaiden etujen mukaisesti 
                    ja annan puolueetonta neuvontaa vakuutusasioissa. Tavoitteeni 
                    on löytää juuri sinulle sopivat vakuutusratkaisut.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Riippumaton neuvonta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Asiakkaan etu etusijalla</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;