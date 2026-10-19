import { Home, FileQuestion } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content" className="py-24 sm:py-32 bg-white">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
          <FileQuestion className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The page you are looking for does not exist or has been moved. You can return to our homepage or view our legal policies below.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" size="md" href="/">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Back to Home</span>
          </Button>
          <Button variant="outline" size="md" href="/privacy-policy">
            <span>Privacy Policy</span>
          </Button>
          <Button variant="outline" size="md" href="/contact">
            <span>Contact Support</span>
          </Button>
        </div>
      </Container>
    </main>
  );
}
