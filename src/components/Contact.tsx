import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MessageCircle, MapPin } from "lucide-react";
import businessOffice from "@/assets/business-office.jpg";
const Contact = () => {
  return <section id="yhteystiedot" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ota yhteyttä
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Autan yritystäsi löytämään oikeat vakuutusratkaisut. Ota rohkeasti yhteyttä 
            maksuttomaan yritysneuvontaan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Puhelinpalvelu</CardTitle>
              <CardDescription>Nopea yhteys suoraan asiantuntijaan</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <a href="tel:+358504412262" className="block">
                <Button variant="secondary" size="lg" className="w-full mb-4">
                  050 441 2262
                </Button>
              </a>
              <div className="flex flex-col items-center justify-center space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Ma-Su 9-20</span>
                </div>
                <span>Asiakkaille 24/7</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Sähköposti</CardTitle>
              <CardDescription>Lähetä viesti ja vastaan pian</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <a href="mailto:emil.schonberg@pohjola.fi" className="block">
                <Button variant="secondary" size="lg" className="w-full mb-4">
                  emil.schonberg@pohjola.fi
                </Button>
              </a>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span>Vastaan 24h sisään</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Tapaaminen</CardTitle>
              <CardDescription>Henkilökohtainen palvelu</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 text-sm">
                Saamme asiat hoidettua näppärästi puhelimen ja internetin kautta, 
                mutta halutessasi voin myös tavata Uusimaa-alueella henkilökohtaisesti.
              </p>
              <a href="https://calendly.com/emil-schonberg" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="w-full">
                  Varaa tapaaminen
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Yleisiä kysymyksiä
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Onko neuvonta maksutonta?</h4>
                  <p className="text-muted-foreground text-sm">
                    Kyllä, tarjoan maksutonta neuvontaa yritysten vakuutusasioissa. 
                    Maksan toimintani vakuutusyhtiöiden palkkioista.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kuinka nopeasti saan tarjouksen?</h4>
                  <p className="text-muted-foreground text-sm">
                    Useimmiten pystyn tekemään tarjouksen samana päivänä. 
                    Monimutkaisemmat tapaukset voivat vaatia muutaman päivän.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Voitko auttaa olemassa olevien yritysvakuutusten kanssa?</h4>
                  <p className="text-muted-foreground text-sm">Kyllä, voin arvioida yrityksen nykyisiä vakuutuksia ja antaa suosituksia parannuksista tai muutoksista.</p>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                Miksi yrityksen kannattaa ottaa yhteyttä?
              </h3>
              <div className="space-y-4 text-sm">
                <p>
                  Teen sinulle kilpailukykyisen tarjouksen. Joko saamme halvemmat hinnat tai kattavemmat turvat, tai sitten tulee esille, että sinulla on jo vakuutukset niin hyvässä kunnossa, ettei vaihto kannata.
                </p>
                <p>
                  Jos olet halukas lähettämään minulle kopion nykyisistä vakuutuspapereistasi, voin tehdä vertailun puolestasi ja heti kertoa, kannattaako yhtiötä vaihtaa vai ei. Helpoin tapa sinulle on lähettää paperit minulle, kerron suoraan, mikä tilanne on.
                </p>
                <p>
                  Tämä vie sinulta aluksi vain noin 10 minuuttia, ja jos päädymme vaihtamaan yhtiötä, niin noin 20–30 minuuttia lisää. Vastaan myös kaikkiin mahdollisiin ehtojen eroihin liittyviin kysymyksiin.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={businessOffice} 
                    alt="Ammatillinen toimisto, jossa neuvotteluja käydään"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;