import React from "react";

import Button from "./button";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between bg-transparent py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-xl font-bold text-white">Logo</div>
      <div className="w-auto">
        <Button>Suporte</Button>
      </div>
    </nav>
  );
}
