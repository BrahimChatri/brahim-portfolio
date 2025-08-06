export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic mb-2">
            "Backend is the engine of innovation—build it right, scale it strong."
          </p>
          <p className="text-sm text-muted-foreground">
            Built using{' '}
            <a
              href="https://firebase.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Firebase Studio
            </a>{' '}
            · Designed & Developed by BraHim © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}