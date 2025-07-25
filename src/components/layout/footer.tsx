export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
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
    </footer>
  );
}
