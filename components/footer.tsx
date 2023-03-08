import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <Container className="bg-zinc-900">
      <footer className="flex w-full min-w-full flex-col space-y-4">
        <span>
          Duvidas? Entre em contato conosco pelo WhatsApp: (62) 1234-5678
        </span>
        <span>IPTV Brasil ©</span>
      </footer>
    </Container>
  );
}
