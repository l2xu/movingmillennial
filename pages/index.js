import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-16"> Moving Millennial</h1>

      <h2 className="text-2xl font-bold mb-6">Willkommen bei Moving Millennial</h2>
      <div className="flex gap-20 text-lg">
        <p>Moving Millennial ist dein Hub für Porduktivität. Hier findest du nützliche <b>Informationen</b>, <b>Videos</b>, <b>Tempaltes</b> und <b>Applikationen</b> die dir helfen effizienter und produktiver zu arbeiten und zu leben.<br></br>
          Unser Ziel ist es, dir zu helfen, <b>die beste Version von dir selbst</b> zu werden.</p>

        <Image src="/cuteIcon.png" width="100" height="100"></Image>

      </div>
    </>
  );
}
