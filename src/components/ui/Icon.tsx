const paths: Record<string, JSX.Element> = {
  pressure: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#dbeafe"/>
      <path d="M16 20c0-2.2 1.8-4 4-4h4a4 4 0 0 1 4 4v2H16v-2z" stroke="#2563eb" strokeWidth="1.8" fill="#eff6ff"/>
      <rect x="23" y="22" width="10" height="5" rx="2" fill="#2563eb" opacity=".7"/>
      <path d="M33 24.5h8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="41" cy="24.5" r="1.8" fill="#0ea5e9"/>
      <path d="M16 22v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="20" cy="36" r="2" fill="#60a5fa" opacity=".7"/>
      <circle cx="25" cy="39" r="1.4" fill="#93c5fd" opacity=".6"/>
      <circle cx="17" cy="39" r="1.2" fill="#bfdbfe" opacity=".5"/>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#dbeafe"/>
      <rect x="10" y="10" width="28" height="28" rx="3" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8"/>
      <line x1="24" y1="10" x2="24" y2="38" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="0"/>
      <line x1="10" y1="24" x2="38" y2="24" stroke="#2563eb" strokeWidth="1.5"/>
      <path d="M15 14 Q17 13 19 15" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M29 14 Q33 12 36 16" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 30 L12 38" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="37" width="6" height="3" rx="1.5" fill="#2563eb"/>
    </svg>
  ),
  office: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#dbeafe"/>
      <rect x="10" y="12" width="28" height="26" rx="2" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8"/>
      <rect x="14" y="17" width="6" height="5" rx="1" fill="#2563eb"/>
      <rect x="21" y="17" width="6" height="5" rx="1" fill="#60a5fa"/>
      <rect x="28" y="17" width="6" height="5" rx="1" fill="#93c5fd"/>
      <rect x="14" y="25" width="6" height="5" rx="1" fill="#bfdbfe"/>
      <rect x="21" y="25" width="6" height="5" rx="1" fill="#2563eb" opacity=".6"/>
      <rect x="28" y="25" width="6" height="5" rx="1" fill="#60a5fa" opacity=".6"/>
      <rect x="10" y="38" width="28" height="2" rx="1" fill="#2563eb"/>
    </svg>
  ),
  deep: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect width="48" height="48" rx="12" fill="#dbeafe"/>
      <path d="M24 8L36 20H12L24 8z" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="12" y="20" width="24" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.8"/>
      <line x1="18" y1="20" x2="18" y2="32" stroke="#2563eb" strokeWidth="1.4" strokeDasharray="2 2"/>
      <line x1="24" y1="20" x2="24" y2="32" stroke="#2563eb" strokeWidth="1.4" strokeDasharray="2 2"/>
      <line x1="30" y1="20" x2="30" y2="32" stroke="#2563eb" strokeWidth="1.4" strokeDasharray="2 2"/>
      <rect x="10" y="32" width="28" height="4" rx="2" fill="#2563eb"/>
      <path d="M22 36v5M26 36v5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
  ),
}

export function Icon({ name, className = 'w-5 h-5' }: { name: keyof typeof paths; className?: string }) {
  return <span className={`inline-flex items-center justify-center ${className}`}>{paths[name]}</span>
}

export function ServiceIcon({ name }: { name: string }) {
  const el = paths[name]
  return el
    ? <div className="w-12 h-12">{el}</div>
    : <div className="w-12 h-12 rounded-xl bg-brand-blue-light" />
}
