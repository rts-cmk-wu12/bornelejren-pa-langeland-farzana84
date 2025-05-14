import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SponsorForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    supportType: "",
    company: "",
    email: "",
    address: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const saved = localStorage.getItem("datamembers");
    const members = saved ? JSON.parse(saved) : [];
    members.push(formData);
    localStorage.setItem("datamembers", JSON.stringify(members));
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-primary">Bliv sponsor</h2>

      <div>
        <label className="block font-medium mb-1">Støttetype</label>
        <select
          name="supportType"
          value={formData.supportType}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Vælg støttetype</option>
          <option value="Engangsbeløb">Engangsbeløb</option>
          <option value="Fast sponsor">Fast sponsor</option>
          <option value="Andet">Andet</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Firmanavn</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Adresse</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Telefon</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Beløb (DKK)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Tilmeld som sponsor
      </button>
      <button
        type="submit"
        className="bg-theme-primary text-white px-4 py-2 rounded hover:bg-red-700 transition w-full font-semibold mt-2"
      >
        Blev medlem
      </button>
    </form>
  );
}

export default SponsorForm;
