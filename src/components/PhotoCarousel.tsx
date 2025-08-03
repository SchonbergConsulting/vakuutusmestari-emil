import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import emilPhoto1 from "@/assets/emil-photo-1.jpg";
import emilPhoto2 from "@/assets/emil-photo-2.jpg";
import emilPhoto3 from "@/assets/emil-photo-3.jpg";
import emilPhoto4 from "@/assets/emil-photo-4.jpg";
import emilPhoto5 from "@/assets/emil-photo-5.jpg";

const PhotoCarousel = () => {
  const photos = [emilPhoto1, emilPhoto2, emilPhoto3, emilPhoto4, emilPhoto5];

  return (
    <div className="space-y-6">
      <Carousel className="w-full max-w-sm mx-auto">
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img 
                    src={photo} 
                    alt={`Emil Schönberg - Kuva ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div className="text-center space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">Emil Schönberg</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Vakuutusedustustaja
          </p>
          <Badge variant="secondary" className="bg-primary text-white">
            Finanssivalvonnan rekisterissä
          </Badge>
        </div>
        
        <div className="bg-accent rounded-lg p-6 text-left">
          <h4 className="font-semibold text-lg mb-3 text-primary">Luotettava asiantuntija</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Hei, kiva että löysit verkkosivuilleni! Olen Emil Schönberg, 24-vuotias Espoosta kotoisin, 
            mutta nykyään asustelen Helsingissä. Kesät olen pitkälti viettänyt maaseudulla Padasjoella. 
            Vakuutusedustustajan työn lisäksi kirjoitan parhaillaan graduani Hanken School of Economicsissa, 
            josta valmistun kauppatieteiden maisteriksi joulukuussa 2025. Olen ihmisläheinen ja ymmärrän 
            hyvin muiden ihmisten tarpeita ja tunteita. Myyn vakuutuksia vain, jos yhtiön vaihto on 
            sinulle järkevää. Minulla on jo kertynyt paljon kokemusta vakuutusalalta, erityisesti korvauspuolelta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;