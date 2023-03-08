import React from "react";
import Button from "./button";
import Container from "./container";

interface HeroProperties {
  children?: React.ReactNode;
}

export default function Hero({}: HeroProperties) {
  return (
    <Container className="sticky top-0">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-center text-7xl font-bold text-transparent">
          Filmes, séries, novelas, e muito mais. Sem limites.
        </h1>
        <span className="text-2xl">
          Assista onde quiser. Cancele quando quiser.
        </span>
        <span className="text-2xl">Pronto para assistir?</span>
        <div className="w-1/3">
          <Button>
            <span>Assista agora</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
