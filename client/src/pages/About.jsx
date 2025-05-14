import React, { useEffect, useState } from "react";

function About() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("datamembers");
    setMembers(saved ? JSON.parse(saved) : []);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="font-heading text-4xl font-bold mb-8 text-theme-primary drop-shadow">
          Om os
        </h2>

        <div className="space-y-5 text-lg text-gray-800 text-left md:text-left">
          <p>
            Børnelejren på Langeland er en velgørende, non-profit forening, som
            afholder finansierede lejre for dårligt stillede børn og unge fra
            hele landet. Børnelejrene foregår på foreningens bondegård,
            <strong> Søgård Hovedgård</strong>, beliggende i naturskønne
            omgivelser på sydspidsen af Langeland.
          </p>
          <p>
            Samtlige omkostninger til børnenes ophold og transport til/fra
            lejren finansieres af foreningen, og der opkræves aldrig
            brugerbetaling fra forældrene.
          </p>
          <p>
            Foreningens bestyrelse og frivillige arbejder ulønnet. Medarbejdere
            fra institutionerne på lejrene får ikke kolonitillæg udbetalt af
            foreningen.
          </p>
          <p>
            Det er primært virksomheder og støttemedlemmer, der finansierer
            foreningens drift. Vi er taknemmelige for, at så mange virksomheder
            allerede bakker op, og vi håber på endnu flere private
            støttemedlemmer.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-2xl font-semibold mb-4 text-theme-primary">
            Virksomheder der støtter os
          </h3>
          {members.length === 0 ? (
            <p className="text-gray-500">Ingen medlemmer endnu.</p>
          ) : (
            <ul className="flex flex-wrap justify-center gap-3">
              {members.map((m, i) => (
                <li
                  key={i}
                  className="bg-gray-100 rounded-lg px-4 py-2 shadow text-base"
                >
                  <span className="font-semibold">{m.company}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/camp1.jpg"
              alt="Børnelejren på Langeland"
              className="rounded-xl shadow-md object-cover w-full h-64"
            />
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-2 text-theme-primary">
              Kontakt os
            </h3>
            <address className="not-italic text-gray-700 leading-relaxed">
              Knud Bro Allé 1, st. mf.
              <br />
              3660 Stenløse, Danmark
              <br />
              <a
                href="tel:+4538711260"
                className="text-theme-primary underline"
              >
                +45 38 71 12 60
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
