export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 snap-end border-t text-center backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Kayc Farias. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
