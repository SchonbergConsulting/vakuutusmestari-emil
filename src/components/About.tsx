import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, CheckCircle, Shield } from "lucide-react";
import PhotoCarousel from "./PhotoCarousel";
const About = () => {
  return <section id="tietoa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tietoa minusta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Emil Schönberg toimii vakuutusedustustajana ja on erikoistunut yritysten 
            vakuutusratkaisuihin toimien aina asiakasyritysten etujen mukaisesti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <PhotoCarousel />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ammatillinen osaaminen
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Emil Schönberg toimii vakuutusedustustajana ja tarjoaa Pohjola Vakuutus Oy:n, 
                OP-Henkivakuutus Oy:n ja Ilmarisen vakuutuksia. Yritys on rekisteröity 
                Finanssivalvonnan vakuutusedustajarekisteriin, ja sen toimintaa valvoo Finanssivalvonta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">Vakuutusedustustaja</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm">Jatkuva koulutus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Yrityskeskeinen palvelu</span>
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
                    Yritys on rekisteröity Finanssivalvonnan vakuutusedustajarekisteriin, 
                    ja sen toimintaa valvoo Finanssivalvonta. Tämä takaa toiminnan 
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
            <CardContent className="py-[50px]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Kerron sinulle asiat niin kuin ne on, en koita myydä sinulle ns. turhia vakuutuksia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Yrityksen tarpeet etusijalla, jos tarjoukseni ei ole kilpailukykyinen ymmärrän hyvin jos et halua vaihtaa palveluntarjoojaa. Lupaan kuitenkin tehdä parhani että saamme kilpailukykyisen tarjouksen sinun yritykselle.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;