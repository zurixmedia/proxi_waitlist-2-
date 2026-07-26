import * as React from 'react';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn('mb-6 max-w-2xl', className)} {...props}>
      {eyebrow ? (
        <Typography as="p" variant="caption" className="mb-1 text-brand-secondary">
          {eyebrow}
        </Typography>
      ) : null}
      <Typography as="h2" variant="h2" className="mb-2">
        {title}
      </Typography>
      {description ? <Typography variant="body">{description}</Typography> : null}
    </div>
  );
}

export default SectionTitle;
