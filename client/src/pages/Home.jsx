import React from "react";
import { Link } from "react-router-dom";
const images = Array.from({ length: 7 }, (_, i) => `/images/camp${i + 1}.jpg`);

function Home() {
  return (
    <section className="container m-0 p-0">
      <div
        className="relative h-[400px] flex items-center justify-center bg-cover rounded-none w-full"
        style={{
          backgroundImage: "url('/images/heroimage.jpg')",
        }}
      >
        <div className="relative z-10 text-center w-full">
          <h1 className="font-heading text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Velkommen til Børnelejren på Langeland
          </h1>
          <Link
            to="/sponsor"
            className="inline-block bg-theme-primary text-white font-heading px-8 py-3 rounded shadow hover:bg-red-700 transition font-semibold text-lg"
          >
            Bliv sponsor
          </Link>
        </div>
      </div>

      {/* Missionserklæring */}
      <div className="mt-16 space-y-4 max-w-3xl mx-auto">
        <p>
          Der er mange børn i verden, der ikke har det så godt, som de burde
          have det – og desværre gælder det også i Danmark. Nogle har medfødte
          handicap, nogle er blevet alvorligt syge, nogle lider under
          omsorgssvigt eller overgreb, nogle har mistet én eller begge forældre,
          nogle er tvangsfjernet fra hjem og familie, nogle bliver mobbet i
          skolen, nogle vokser op i meget fattige familier, og nogle kommer fra
          skilsmisse- eller sammenbragte familier. Vi kender alle et barn, der
          tilhører en af disse grupper – og det er disse børn, vi gerne vil gøre
          noget for.
        </p>
        <p>
          Foreningen Børnelejren på Langeland samler penge ind fra
          erhvervslivet, fonde og private for at sende dårligt stillede børn på
          et velfortjent lejrophold på Søgård. Hjælp os med at hjælpe dem!
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading mb-6 text-theme-primary text-center">
          Billeder fra Børnelejren
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Børnelejren foto ${index + 1}`}
              className="w-full h-48 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
