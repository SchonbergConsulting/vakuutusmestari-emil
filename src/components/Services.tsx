import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Building2, CheckCircle } from "lucide-react";
const Services = () => {
  const companies = [{
    name: "Pohjola Vakuutus Oy",
    icon: Shield,
    description: "Yrityksen vakuutukset",
    services: ["Vastuuvakuutukset", "Oikeusturva", "Omaisuus- ja kiinteistövakuutus", "Keskeytysvakuutus"],
    highlight: "Pääasiallinen vakuutusyhtiö"
  }, {
    name: "OP-Henkivakuutus Oy",
    icon: Heart,
    description: "Henkilöstövakuutukset",
    services: ["Tapaturmavakuutus", "Terveysturvavakuutus", "Eläkevakuutus", "Ryhmähenkivakuutus"],
    highlight: "Henkilöstöturva"
  }, {
    name: "Ilmarinen",
    icon: Building2,
    description: "Lakisääteiset työeläkevakuutukset",
    services: ["TyEL-vakuutus", "YEL-vakuutus"],
    highlight: "Työeläketurva"
  }];
  return <section id="palvelut" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Yritysvakuutukset
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Emil Schönberg toimii vakuutusedustustajana ja tarjoaa Pohjola Vakuutus Oy:n, 
            OP-Henkivakuutus Oy:n ja Ilmarisen vakuutuksia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => {
          const Icon = company.icon;
          return <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {company.highlight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{company.description}</p>
                  <ul className="space-y-2">
                    {company.services.map((service, serviceIndex) => <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{service}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ➤ Miksi valita Emil Schönberg yrityksesi vakuutusedustajaksi?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Henkilökohtainen palvelu ja pitkäaikaiset asiakassuhteet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>➤ Myyn vakuutukset sinun tarpeesi mukaan, mutta toki jos huomaan isoja puutteita niin suosittelen järkeviä lisäratkaisuja.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Vastaan oikeasti puhelimeen kun minulle soitetaan </span>
                </li>
                
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-6 text-center">
              <div className="aspect-video bg-white/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-sm">
                  Kuva yritysneuvottelusta tai toimistosta
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Yritysten vakuutustarpeiden tunnistaminen on erikoisalani
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;