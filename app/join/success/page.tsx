'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2 } from 'lucide-react';

export default function JoinSuccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-brand-background text-brand-textPrimary">
      <Container className="py-14 tablet:py-16 laptop:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="success">Success</Badge>
          <Typography as="h1" variant="h1" className="text-brand-dark">
            You’re on the Proxi waitlist
          </Typography>
          <Typography variant="body">
            Thank you for signing up. We’ll email you with next steps and your early access details.
          </Typography>
        </div>

        <Card className="mx-auto mt-12 max-w-3xl p-8 text-brand-textPrimary">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div className="space-y-6">
              <Typography as="h2" variant="h3" className="text-brand-dark">
                Your waitlist registration is complete.
              </Typography>
              <Typography variant="body">
                We’ll keep you updated with launch news, early beta invites, and priority access
                when Proxi goes live.
              </Typography>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => router.push('/')}>Back to Home</Button>
                <Button
                  variant="secondary"
                  type="button"
                  disabled
                  aria-label="Share Proxi (UI only)"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Proxi
                </Button>
              </div>
            </div>
            <div className="mx-auto max-w-sm">
              <Image
                src="/images/success-illustration.png"
                alt="Success illustration"
                width={420}
                height={420}
                className="h-auto w-full rounded-[2rem]"
              />
            </div>
          </div>
        </Card>
      </Container>
    </main>
  );
}
