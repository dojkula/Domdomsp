const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

const dur = (ms: number) => (prefersReducedMotion ? 0 : ms)

export const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: dur(0.6), delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: dur(0.5), delay },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: dur(0.5), delay, type: 'spring', stiffness: 300, damping: 24 },
  }),
}

export const slideRight = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: dur(0.6), delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const slideLeft = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: dur(0.6), delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 8px 32px rgba(30,27,75,0.12)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 48px rgba(124,58,237,0.25)',
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  },
}
