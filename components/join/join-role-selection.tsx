'use client';

import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Wrench } from 'lucide-react';

export function JoinRoleSelection() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-brand-background text-brand-textPrimary">
      <Container className="py-14 tablet:py-16 laptop:py-20">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge variant="primary">Choose your path</Badge>
          <Typography as="h1" variant="h1" className="text-brand-dark">
            Are you joining as a customer or an artisan?
          </Typography>
          <Typography variant="body">
            Select the experience that fits your role and continue to the waitlist sign-up.
          </Typography>
        </div>

        <div className="mt-12 grid gap-6 laptop:grid-cols-2">
          <Card className="space-y-6 p-8">
            <div className="flex items-center gap-3 text-brand-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-tealLight">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <Typography as="h2" variant="h3" className="text-brand-dark">
                  Customer
                </Typography>
                <Typography variant="body">
                  Join as a homeowner to discover vetted local pros with trusted reviews.
                </Typography>
              </div>
            </div>
            <Button className="w-full" onClick={() => router.push('/join/customer')}>
              Continue as customer
            </Button>
          </Card>

          <Card className="space-y-6 p-8">
            <div className="flex items-center gap-3 text-brand-green">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-green/10">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <Typography as="h2" variant="h3" className="text-brand-dark">
                  Artisan
                </Typography>
                <Typography variant="body">
                  Join as an artisan to access early job opportunities and verified clients.
                </Typography>
              </div>
            </div>
            <Button className="w-full" onClick={() => router.push('/join/artisan')}>
              Continue as artisan
            </Button>
          </Card>
        </div>
      </Container>
    </main>
  );
}
