'use client';

import * as React from 'react';
import { X, CheckCircle, Shield, Award, Sparkles } from 'lucide-react';

interface RoleModalProps {
  isOpen: boolean;
  role: 'homeowner' | 'artisan' | null;
  onClose: () => void;
}

export function RoleModal({ isOpen, role, onClose }: RoleModalProps) {
  if (!isOpen || !role) return null;

  const isHomeowner = role === 'homeowner';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-brand-border bg-white p-6 shadow-2xl animate-in zoom-in-95 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 focus-visible:outline-none"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon Header */}
        <div className="flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              isHomeowner
                ? 'bg-brand-tealLight text-brand-primary'
                : 'bg-emerald-100 text-brand-green'
            }`}
          >
            {isHomeowner ? (
              <Shield className="h-8 w-8 stroke-[2]" />
            ) : (
              <Award className="h-8 w-8 stroke-[2]" />
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-5 text-center">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
              isHomeowner
                ? 'bg-brand-primary/10 text-brand-primary'
                : 'bg-brand-green/10 text-brand-green'
            }`}
          >
            {isHomeowner ? 'Homeowner Beta Preview' : 'Professional Beta Preview'}
          </span>
          
          <h3 className="mt-3 text-2xl font-extrabold text-brand-dark">
            {isHomeowner ? 'Join as Homeowner' : 'Grow as a Verified Pro'}
          </h3>

          <p className="mt-2 text-sm text-brand-textSecondary">
            {isHomeowner
              ? 'You selected the Homeowner role. Enjoy early access, escrow protection, and a $25 launch credit.'
              : 'You selected the Artisan & Pro role. Enjoy 0% commission on your first 10 bookings and direct escrow payouts.'}
          </p>
        </div>

        {/* Highlighted Benefits */}
        <div className="mt-6 rounded-2xl bg-gray-50 p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-dark uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-brand-accent" />
            Approved Early Benefits
          </div>
          <ul className="mt-3 space-y-2 text-xs text-brand-textSecondary">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>100% Escrow-protected transactions</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>Background-checked & verified matching</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onClose}
            className={`w-full rounded-xl py-3 text-sm font-bold text-white transition-all shadow-md active:scale-[0.98] ${
              isHomeowner
                ? 'bg-brand-primary hover:bg-brand-secondary'
                : 'bg-brand-green hover:opacity-90'
            }`}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
