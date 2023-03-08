import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Container from "./container";

const features = [
  "Sem compromissos, cancele quando quiser",
  "Todo o conteúdo por um preço único e acessível",
  "Assista o quanto quiser em todos os seus dispositivos",
  "Não precisa de antena, só baixar o aplicativo e começar a utilizar",
  "Mais de 8.000 filmes e séries, e muito mais.",
  "Mais de 1.500 canais abertos e fechados.",
  "Canais de futebol 24 horas ao vivo",
  "Canais de reality shows 24 horas ao vivo",
  "Novelas brasileiras e internacionais, conteúdo atualizado diariamente.",
];

interface FeaturesProperties {
  text: string;
}

function Feature({ text }: FeaturesProperties) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-700">
        <CheckIcon className="h-8 w-8" />
      </div>
      <span className="text-center text-xl font-semibold">{text}</span>
    </div>
  );
}

export default function Features() {
  return (
    <Container className="sticky top-0 bg-black">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </div>
    </Container>
  );
}
