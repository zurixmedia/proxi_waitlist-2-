import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-textPrimary">
      <Navbar
        right={
          <a href="/" className="text-sm font-semibold text-brand-primary">
            Back home
          </a>
        }
      />
      <main className="py-14 tablet:py-16 laptop:py-20">
        <Container className="space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <Typography as="h1" variant="h1" className="text-brand-dark">
              Join the future of trusted local services
            </Typography>
            <Typography variant="body" className="mx-auto mt-4 max-w-2xl">
              Proxi is building a better way to discover, compare, and trust
              local professionals. Sign up to stay informed.
            </Typography>
          </div>
          <WaitlistForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
