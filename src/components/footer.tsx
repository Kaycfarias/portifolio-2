export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm text-center snap-end">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Kayc Farias. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
