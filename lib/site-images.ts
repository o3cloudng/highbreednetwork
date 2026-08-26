export const SITE_IMAGES = {
  hero: {
    src: "/images/technician-hero.jpg",
    alt: "Nigerian automotive technician running a live diagnostic scan on a vehicle",
  },
  diagnostics: {
    src: "/images/technician-diagnostics.jpg",
    alt: "African American technician analysing hybrid vehicle data on a laptop",
  },
  ev: {
    src: "/images/technician-ev.jpg",
    alt: "Nigerian technicians inspecting an electric vehicle in a modern workshop",
  },
  keys: {
    src: "/images/technician-keys.jpg",
    alt: "Nigerian technician programming a vehicle key with diagnostic equipment",
  },
  team: {
    src: "/images/technician-team.jpg",
    alt: "High Breed Network technicians in a modern Nigerian auto workshop",
  },
  dashcam: {
    src: "/images/technician-dashcam.jpg",
    alt: "African American technician installing a dash camera in a vehicle",
  },
} as const;

export const SERVICE_IMAGES: Record<
  string,
  { src: string; alt: string }
> = {
  "vehicle-diagnostics": SITE_IMAGES.diagnostics,
  "ecu-programming": SITE_IMAGES.hero,
  "key-immobilizer": SITE_IMAGES.keys,
  "hybrid-ev": SITE_IMAGES.ev,
  "anti-theft-tracking": SITE_IMAGES.keys,
  "performance-tuning": SITE_IMAGES.hero,
  "dash-cam": SITE_IMAGES.dashcam,
};
