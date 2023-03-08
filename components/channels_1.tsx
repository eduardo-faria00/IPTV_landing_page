import React from "react";
import Container from "./container";

interface ChannelProperties {
  title: string;
  description: string;
}

const channels = [
  { title: "+1500", description: "Canais com alta qualidade (SD|HD|FHD|4k)" },
  { title: "+8000", description: "Séries e filmes" },
  { title: "24h", description: "Suporte via WhatsApp" },
];

function Channel({ title, description }: ChannelProperties) {
  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <p className="text-center text-xl text-zinc-600">{description}</p>
    </div>
  );
}

export default function Channels1() {
  return (
    <Container className="sticky top-0 bg-zinc-900">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {channels.map((channel, index) => (
          <Channel
            key={index}
            title={channel.title}
            description={channel.description}
          />
        ))}
      </div>
    </Container>
  );
}
