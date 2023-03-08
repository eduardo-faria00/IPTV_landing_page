import Channels1 from "@/components/channels_1";

import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how_it_works";
import ImageSection from "@/components/image_section";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";

import Image1 from "@/assets/img1.jpg";
import Image2 from "@/assets/img4.png";
import Image3 from "@/assets/img3.png";

const images = [
  {
    title: "Aproveite em qualquer lugar.",
    text: "Assista em Smart TVs, Celular Android, Celular iOS, Computador, TV BOX, e outros dispositivos.",
    image: Image1,
    odd: true,
  },
  {
    title: "Tenha acesso a qualquer tipo de conteúdo.",
    text: "Assista a filmes, séries, documentários, esportes, notícias, e muito mais.",
    image: Image2,
    odd: false,
  },
  {
    title: "Conteúdo para crianças",
    text: "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito para elas, sem pagar a mais por isso.",
    image: Image3,
    odd: true,
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Channels1 />
      <Features />
      <HowItWorks />
      {images.map((image, index) => (
        <ImageSection key={index} {...image} />
      ))}
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
