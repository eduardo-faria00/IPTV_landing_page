import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "./button";
import Container from "./container";

interface PricingProperties {
  children?: React.ReactNode;
}

const features = [
  "Mais de 1.500 canais de alta qualidade SD|HD|FHD|4K",
  "Mais de 8.000 séries e filmes",
  "Canais nacionais e internacionais",
  "Suporte 24/7 via WhatsApp",
  "Acesso ao painel do cliente",
];

export default function Pricing() {
  return (
    <Container className="sticky top-0 flex flex-col bg-zinc-900">
      <div className="mb-12 flex flex-col text-left text-5xl font-bold">
        <span>ok, mas...</span>
        <span>quanto custa tudo isso?</span>
      </div>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="rounded-lg bg-black p-4">
          <ul className="space-y-4 text-left text-xl">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-white">
                <div>
                  <CheckIcon className="h-5 w-5 text-indigo-700" />
                </div>
                <div className="ml-2">{feature}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-12 flex flex-col space-y-4 text-left">
          <span>garanta já o seu acesso por apenas</span>
          <div>
            <span className="text-5xl font-bold">R$ 29,90</span> por mês
          </div>
          <Button className="w-fit px-8">Vamos lá</Button>
        </div>
      </div>
    </Container>
  );
}
