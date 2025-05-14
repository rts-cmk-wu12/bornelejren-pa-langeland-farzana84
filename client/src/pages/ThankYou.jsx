import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Tak for din støtte!</h2>
      <p className="text-lg mb-6">
        Vi er dybt taknemmelige for din generøse donation og støtte til
        Børnelejren på Langeland. Din hjælp gør en stor forskel for de børn, vi
        sender på lejren.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-red-700 transition"
      >
        Tilbage til forsiden
      </Link>
    </section>
  );
}

export default ThankYou;
