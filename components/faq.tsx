import React from "react";
import Container from "./container";

interface QuestionsProperties {
  title: string;
  description: string;
}

const questions = [
  {
    title: "O que é a SmartPlay?",
    description:
      "A SmartPlay é um serviço de transmissão online que oferece uma ampla variedade de canais, filmes e séries. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais por um preço mensal bem acessível.",
  },
  {
    title: "Quanto custa a SmartPlay?",
    description:
      "Assista à SmartPlay no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos são a partir de R$29,90 por mês. Sem contrato nem taxas extras.",
  },
  {
    title: "Onde posso assistir?",
    description:
      "Assista onde quiser, quando quiser. Faça login com sua conta SmartPlay no seu aplicativo para começar a assistir no computador ou em qualquer aparelho conectado à Internet, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.",
  },
  {
    title: "Como faço para cancelar?",
    description:
      "A SmartPlay é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento você pode começar ou encerrar a sua assinatura a qualquer momento.",
  },
  {
    title: "O que eu posso assistir na SmartPlay?",
    description:
      "A SmartPlay tem um grande catálogo de canais, filmes e séries, premiados e muito mais. Assista o quanto quiser, quando quiser.",
  },
  {
    title: "O SmartPlay é adequado para crianças?",
    description:
      "A experiência infantil da SmartPlay faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.",
  },
];

function QuestionCard({ title, description }: QuestionsProperties) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-md bg-zinc-800 p-2">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function Faq() {
  return (
    <Container className="sticky top-0 flex flex-col items-center justify-center bg-black text-center">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Perguntas Frequentes
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
    </Container>
  );
}
