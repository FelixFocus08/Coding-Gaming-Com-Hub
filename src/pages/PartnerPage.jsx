import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, HeartHandshake as Handshake } from 'lucide-react';
import { Link } from "react-router-dom";

const partners = [
  {
    name: "GitHub",
    logoUrl: "https://static.wikia.nocookie.net/windows/images/0/01/GitHub_logo_2013.png/revision/latest?cb=20231201024220",
    description: "GitHub ist eine Plattform zur Versionsverwaltung und Zusammenarbeit von Software.",
    website: "https://github.com",
    category: "Coding, Cloud, Community, Open Source, Collaboration, Software Development",
    imgPlaceholder: "Logo von GitHub"
  },
  {
    name: "Logitech G",
    logoUrl: "https://images.cults3d.com/RA69zeDXdTCI2pyb-LGfeRRCot8=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/29408799/illustration-file/047bf629-0745-4b1d-9341-6f76a596810d/Ekran-Resmi-2023-11-11-22.55.26.png",
    description: "Spezialist für hochwertige Gaming-Equipment und Zubehör. Für das ultimative Spielerlebnis.",
    website: "https://www.logitechg.com/de-de",
    category: "Gaming Hardware, Gaming Zubehör, Innovation, Qualität, Technologie, Gaming",
    imgPlaceholder: "Logo von Logitech G"
  },
  {
    name: "freeCodeCamp",
    logoUrl: "https://design-style-guide.freecodecamp.org/img/fcc_primary_large.svg",
    description: "Online-Lernplattform für angehende und erfahrene Entwickler. Wir fördern Coding-Talente. Perfekt für alle, die Programmieren lernen wollen.",
    website: "https://www.freecodecamp.org",
    category: "Bildung, coding, Open Source, Community, Lernen, Webentwicklung, Programmierung, Softwareentwicklung, Webdesign",
    imgPlaceholder: "Logo von freeCodeCamp"
  },
  {
    name: "Discord",
    logoUrl: "data:image/jpeg;base64,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",
    description: "Plattform zur Vernetzung von Streamern und Zuschauern. Wir bringen die Community zusammen. Perfekt für alle, die Gaming und Live-Streaming lieben. Auch für Programmierer und Entwickler geeignet.",
    website: "https://discord.com",
    category: "Streaming, Community, Kommunikation, Gaming, Live-Streaming, Open Source",
    imgPlaceholder: "Logo von Discord"
  },
  {
    name: "Instant Gaming",
    logoUrl: "data:image/jpeg;base64,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",
    description: "Instant Gaming ist eine Plattform für günstige, schnelle und sichere digitale Spiele-Keys.",
    website: "https://www.instant-gaming.com/de",
    category: "Shopping, Gaming, Software, Community, Schnäppchen, Digitale Spiele",
    imgPlaceholder: "Logo von Instant Gaming"
  },
  {
    name: "Alternate",
    logoUrl: "https://via.placeholder.com/150/DC143C/FFFFFF?text=CyberS",
    description: "Alternate ist ein Online-Shop, der Computerhardware, Elektronik und Gaming-Produkte anbietet. Er überzeugt durch große Auswahl, günstige Preise und schnellen Versand.",
    website: "https://www.alternate.de",
    category: "PC Hardware, Elektronik, Gaming, Online-Shop, Schnäppchen, Technik",
    imgPlaceholder: "Logo von Alternate"
  },
];

const PartnerCard = ({ partner, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full group"
  >
    <Card className="h-full card-hover border-border/50 bg-card/70 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col group-hover:border-primary/50 transform group-hover:-translate-y-1">
      <CardHeader className="items-center text-center p-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/30 group-hover:border-primary shadow-md transition-all duration-300 transform group-hover:scale-105">
          <img  src={partner.logoUrl} alt={partner.imgPlaceholder} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{partner.name}</CardTitle>
        <CardDescription className="text-sm text-primary/80 group-hover:text-primary transition-colors duration-300">{partner.category}</CardDescription>
      </CardHeader>
      <CardContent className="text-center p-6 pt-0 flex-grow">
        <p className="text-muted-foreground mb-6 min-h-[60px]">{partner.description}</p>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white group-hover:scale-105 transform transition-transform duration-300">
          <a href={partner.website} target="_blank" rel="noopener noreferrer">
            Webseite besuchen
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

const PartnerPage = () => {
  return (
    <div className="space-y-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-block p-5 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-full mb-8 shadow-xl transform hover:scale-110 transition-transform duration-300">
          <Handshake className="h-14 w-14" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-gradient mb-4">
          Unsere geschätzten Partner
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Gemeinsam stark: Wir sind stolz auf die Zusammenarbeit mit führenden Unternehmen und Organisationen, die unsere Vision teilen und unserer Community einen echten Mehrwert bieten.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {partners.map((partner, index) => (
          <PartnerCard key={partner.name} partner={partner} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-12"
      >
        <Card className="max-w-3xl mx-auto border-border/50 bg-card/70 backdrop-blur-xl shadow-2xl p-8 md:p-12 rounded-xl">
          <CardHeader className="p-0 mb-6">
            <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10" />
            </div>
            <CardTitle className="text-4xl text-gradient from-green-400 to-teal-400">
              Werden Sie Teil unseres Netzwerks!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Haben Sie Interesse an einer strategischen Partnerschaft mit GameCodeHub? Wir sind stets auf der Suche nach innovativen Kooperationen, die unsere Community bereichern. Lassen Sie uns gemeinsam wachsen!
            </p>
            <Button size="xl" asChild className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-10 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Link to="/tickets?category=partnership&subject=Partnership%20Inquiry">
                Jetzt Kontakt aufnehmen
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PartnerPage;