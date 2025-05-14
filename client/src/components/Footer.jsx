function Footer() {
  return (
    <footer className="bg-theme-primary text-white py-6 mt-8">
      <div className="container mx-auto text-center font-heading text-sm">
        © {new Date().getFullYear()} Børnelejren på Langeland. Alle rettigheder
        forbeholdes.
      </div>
    </footer>
  );
}

export default Footer;
