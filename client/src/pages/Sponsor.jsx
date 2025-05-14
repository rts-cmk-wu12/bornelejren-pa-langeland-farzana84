import React, { useState } from "react";
import SponsorForm from "../components/sponsorForm.jsx";

function Sponsor() {
  const [members, setMembers] = useState(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem("members");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddMember = (member) => {
    const updated = [...members, member];
    setMembers(updated);
    localStorage.setItem("members", JSON.stringify(updated));
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-heading text-center text-4xl text-theme-primary font-bold mb-6">
        Tilmeld som sponsor
      </h2>
      <SponsorForm onAddMember={handleAddMember} />
      <div className="mt-10">
        <h3 className="font-heading text-2xl mb-4 text-theme-primary">
          Medlemmer
        </h3>
        <ul>
          {members.map((m, i) => (
            <li key={i} className="mb-2">
              {m.name} ({m.email})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sponsor;
