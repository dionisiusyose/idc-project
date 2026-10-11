import { useId } from "react";

type LogoProps = {
  className?: string;
};

// IDC wordmark drawn as shapes (not <text>) so it renders identically
// regardless of which fonts the browser has loaded.
export function Logo({ className }: LogoProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 104 48"
      role="img"
      aria-label="IDC"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--color-brand-light)" />
          <stop offset="1" stopColor="var(--color-brand)" />
        </linearGradient>
      </defs>

      {/* I */}
      <rect x="0" y="4" width="10" height="40" rx="2" fill={`url(#${gradientId})`} />

      {/* D */}
      <path
        d="M25 9h9a15 15 0 0 1 0 30h-9z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="10"
        strokeLinejoin="round"
      />

      {/* C */}
      <path
        d="M95.6 13.4A15 15 0 1 0 95.6 34.6"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
