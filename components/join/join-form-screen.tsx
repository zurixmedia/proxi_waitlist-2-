'use client';

import { useRouter } from 'next/navigation';
import { WaitlistForm } from '@/components/waitlist/waitlist-form';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

interface JoinFormScreenProps {
  role: 'customer' | 'artisan';
}

export function JoinFormScreen({ role }: JoinFormScreenProps) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-brand-background text-brand-textPrimary">
      <Container className="py-14 tablet:py-16 laptop:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="primary">{role === 'customer' ? 'Customer' : 'Artisan'}</Badge>
          <Typography as="h1" variant="h1" className="text-brand-dark">
            {role === 'customer'
              ? 'Join the Proxi customer waitlist'
              : 'Join the Proxi artisan waitlist'}
          </Typography>
          <Typography variant="body">
            {role === 'customer'
              ? 'Complete your details to access our early customer launch experience.'
              : 'Complete your details to join early as a verified artisan and get first access to local jobs.'}
          </Typography>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="sm" onClick={() => router.push('/')}>
              Back to home
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push('/join')}>
              Change role
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <WaitlistForm
            defaultRole={role}
            fixedRole={true}
            onSuccess={() => router.push('/join/success')}
          />
        </div>
      </Container>
    </main>
  );
}
