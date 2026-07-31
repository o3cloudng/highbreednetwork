export interface ServiceCategory {
  slug: string;
  title: string;
  headline: string;
  description: string;
  capabilities: string[];
  supportedBrands: string[];
  ctaText: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "vehicle-diagnostics",
    title: "Vehicle Diagnostics",
    headline: "Dealer-level diagnostics for every brand",
    description:
      "High Breed Network delivers comprehensive, dealer-level vehicle diagnostics for all makes and fuel types — petrol, diesel, hybrid, PHEV, and full EV. Using the latest OEM-grade scan tools and proprietary software databases, our technicians can communicate with every control module in your vehicle to pinpoint faults accurately and quickly.\n\nWhether you need a full system scan before a long journey, a pre-purchase inspection to protect your investment, or a targeted fault-finding session after a warning light appears, we provide clear, documented reports that give you and your mechanic a precise roadmap to resolution.\n\nWe operate as a mobile unit — we come to you — and also offer in-shop appointments. No guesswork, no unnecessary parts replacements: just accurate diagnosis at an affordable price.",
    capabilities: [
      "Full system scan (engine, ABS, airbag, transmission, body)",
      "Fault code reading & clearing",
      "Live data streaming & parameter analysis",
      "Pre-purchase inspection reports",
      "Battery & charging system health check",
      "Emissions readiness & MOT preparation scan",
      "Throttle body & injector adaptation reset",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Ford",
      "Volkswagen",
      "BMW",
      "Hyundai",
      "Kia",
      "All European, Japanese & Korean brands",
    ],
    ctaText: "Book a Diagnostic",
  },
  {
    slug: "ecu-programming",
    title: "ECU Programming",
    headline: "Precision ECU programming & software solutions",
    description:
      "The Engine Control Unit (ECU) is the brain of your vehicle — responsible for fuel delivery, ignition timing, emissions control, and dozens of other critical functions. High Breed Network offers professional ECU programming, re-flashing, and calibration services using genuine OEM software and approved aftermarket tools.\n\nFrom replacing a faulty ECU and programming it to match your vehicle's VIN, to performing manufacturer software updates that resolve factory-known issues, our technicians work precisely and securely. We also handle immobiliser pairing, variant coding, and module configuration after repairs or upgrades.\n\nAll programming work is performed with the battery on a maintained supply to prevent voltage drops that could corrupt firmware — giving you confidence that every job is completed to the highest standard.",
    capabilities: [
      "ECU replacement & VIN pairing",
      "OEM firmware flashing & software updates",
      "Immobiliser & transponder pairing",
      "Variant coding & module configuration",
      "Adaptation resets after component replacement",
      "Throttle, injector & transmission control unit programming",
      "Checksum correction & data recovery",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Nissan",
      "Volkswagen",
      "BMW",
      "Peugeot",
      "Renault",
      "All European, Japanese & Korean brands",
    ],
    ctaText: "Book ECU Programming",
  },
  {
    slug: "key-immobilizer",
    title: "Key & Immobilizer",
    headline: "Lost keys, spare keys & immobiliser solutions",
    description:
      "Losing your car keys or dealing with an immobiliser fault can leave you stranded. High Breed Network provides a fast, professional key and immobiliser service — from cutting and programming new keys to diagnosing and repairing faulty immobiliser systems on a wide range of vehicles.\n\nWe handle all key types: traditional transponder keys, remote flip keys, proximity smart keys, and push-start fobs. Using dedicated automotive locksmith equipment alongside our diagnostic suite, we can add keys, delete lost keys from the vehicle's memory, and synchronise new remotes — all without needing the original key in most cases.\n\nOur immobiliser repair service covers communication faults between the ECU, body control module (BCM), and key reader ring — ensuring your vehicle starts reliably every time.",
    capabilities: [
      "Transponder key cutting & programming",
      "Remote key fob programming & synchronisation",
      "Smart key / proximity key coding",
      "Lost all keys — key generation from scratch",
      "Immobiliser fault diagnosis & repair",
      "Key reader ring & BCM pairing",
      "Spare key addition & lost key deletion",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Nissan",
      "Ford",
      "Hyundai",
      "Kia",
      "Mitsubishi",
      "All European, Japanese & Korean brands",
    ],
    ctaText: "Get a Key Programmed",
  },
  {
    slug: "hybrid-ev",
    title: "Hybrid & EV Services",
    headline: "Specialist care for hybrid, PHEV & electric vehicles",
    description:
      "Modern hybrid and electric vehicles require specialist knowledge that goes beyond conventional diagnostics. High Breed Network is fully equipped to service, diagnose, and repair hybrid and EV systems — from the high-voltage battery pack and inverter to the electric motor controller and regenerative braking system.\n\nOur technicians are trained in high-voltage safety procedures and use dedicated hybrid/EV diagnostic platforms that communicate directly with the battery management system (BMS), inverter, and powertrain control module. We provide transparent battery health reports so you understand your pack's state of health, remaining capacity, and individual cell balance.\n\nWhether you drive a Toyota Prius, a Lexus hybrid, a plug-in hybrid SUV, or a full battery-electric vehicle, we offer the expertise to keep your advanced powertrain running at peak efficiency.",
    capabilities: [
      "Hybrid System Diagnostics & Repair",
      "Battery Health Check & Regeneration",
      "High-voltage battery pack inspection & cell balancing",
      "Inverter & motor controller diagnostics",
      "Regenerative braking system calibration",
      "Hybrid ECU & battery management system (BMS) programming",
      "EV charging system fault diagnosis",
      "Pre-purchase hybrid & EV inspection",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Nissan",
      "Hyundai",
      "Kia",
      "All European, Japanese & Korean brands",
    ],
    ctaText: "Book Hybrid/EV Service",
  },
  {
    slug: "anti-theft-tracking",
    title: "Anti-Theft & Tracking",
    headline: "Protect your vehicle with real-time tracking & remote control",
    description:
      "Vehicle theft is a growing concern across Nigeria. High Breed Network offers advanced anti-theft and GPS tracking solutions that go far beyond a simple alarm — giving you real-time visibility of your vehicle's location and the ability to take immediate action if it is stolen or driven without your permission.\n\nOur tracking units are discreetly installed and paired with a companion mobile app and SMS alert system. You can monitor your vehicle's live position at any time, receive instant alerts if the vehicle moves outside a predefined geofence, and — in an emergency — remotely cut off fuel or ignition to immobilise the vehicle and assist recovery.\n\nAll installations are performed by certified technicians using hardwired, tamper-resistant connections. We offer unit options for personal vehicles, commercial fleets, and high-value assets.",
    capabilities: [
      "Remote Cut-Off",
      "SMS/App Alerts",
      "Real-Time Location Tracking",
      "Geofence zone setup & breach alerts",
      "Journey history & mileage reporting",
      "Tamper detection & low-battery alerts",
      "Fleet management dashboard access",
      "Discreet hardwired installation",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Ford",
      "Nissan",
      "All European, Japanese & Korean brands",
      "Commercial vans & fleet vehicles",
    ],
    ctaText: "Protect My Vehicle",
  },
  {
    slug: "performance-tuning",
    title: "Performance Tuning",
    headline: "Unlock more power, torque & efficiency from your engine",
    description:
      "Performance tuning is the art and science of optimising your vehicle's engine management parameters to deliver more power, better throttle response, improved fuel economy, or a combination of all three — while keeping the vehicle reliable and driveable.\n\nHigh Breed Network offers ECU remapping and performance calibration using industry-trusted tuning platforms. Our tuners analyse your vehicle's stock map, adjust fuel delivery, ignition timing, boost pressure (where applicable), and rev limits to extract the maximum safe performance from your engine.\n\nAll tuning work is performed on a rolling road or via live data logging to verify results, and every map is custom-written for your specific vehicle — not a generic off-the-shelf file. We also offer economy maps for fleet operators looking to reduce fuel costs without sacrificing reliability.",
    capabilities: [
      "Stage 1 ECU remap (naturally aspirated & turbocharged)",
      "Custom fuel & ignition map optimisation",
      "Boost pressure calibration (turbocharged engines)",
      "Rev limiter & speed limiter adjustment",
      "Fuel economy / eco remap for fleet vehicles",
      "Launch control & flat-shift setup",
      "DPF / EGR delete preparation (off-road use only)",
      "Rolling road data logging & verification",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Volkswagen",
      "BMW",
      "Ford",
      "Subaru",
      "Mitsubishi",
      "All European, Japanese & Korean brands",
    ],
    ctaText: "Tune My Vehicle",
  },
  {
    slug: "dash-cam",
    title: "Dash Cam Installation",
    headline: "Professional dash cam fitting for every vehicle",
    description:
      "A professionally installed dash cam provides crucial evidence in the event of an accident, protects against fraudulent claims, and can lower your insurance premiums. High Breed Network offers expert dash cam supply and installation — with a clean, hidden-wire finish that looks factory-fitted.\n\nWe install front-only, front-and-rear, and three-channel camera systems from leading brands, hardwiring units to a switched ignition feed so they power on automatically with the engine. Where requested, we configure parking mode using a dedicated hardwire kit, allowing the camera to continue monitoring your vehicle when parked and unattended.\n\nOur installation includes full camera angle optimisation, firmware updates, loop recording configuration, and a guided walkthrough of the companion app — so you leave knowing exactly how to review, download, and share footage when you need it most.",
    capabilities: [
      "Front camera, front-and-rear, and 3-channel systems",
      "Hardwired installation (no trailing cables)",
      "Parking mode configuration with hardwire kit",
      "Loop recording & emergency file lock setup",
      "GPS module integration for speed & location logging",
      "Wi-Fi / app pairing & firmware update",
      "Interior camera installation (taxi & fleet use)",
      "Adhesive mount & bracket fitting on any windscreen",
    ],
    supportedBrands: [
      "Toyota",
      "Lexus",
      "Mercedes-Benz",
      "Honda",
      "Ford",
      "Hyundai",
      "Kia",
      "All European, Japanese & Korean brands",
      "Commercial vans & minibuses",
    ],
    ctaText: "Book Dash Cam Installation",
  },
];

export interface PageMetadata {
  title: string;
  description: string;
}

export const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: "High Breed Network | One Network. All Solutions.",
    description:
      "High Breed Network delivers dealer-level vehicle diagnostics, ECU programming, key & immobiliser services, hybrid/EV repair, anti-theft tracking, performance tuning, and dash cam installation across all vehicle brands.",
  },
  about: {
    title: "About Us | High Breed Network",
    description:
      "Learn about High Breed Network — our mission, values, and commitment to delivering OEM-quality automotive diagnostics and programming services for individuals, fleets, and dealerships.",
  },
  services: {
    title: "Our Services | High Breed Network",
    description:
      "Explore the full range of High Breed Network automotive services: vehicle diagnostics, ECU programming, key & immobiliser, hybrid & EV services, anti-theft tracking, performance tuning, and dash cam installation.",
  },
  contact: {
    title: "Contact Us | High Breed Network",
    description:
      "Get in touch with High Breed Network by phone, WhatsApp, or email, or fill in our contact form to book a service or request a quote. We come to you or you visit us.",
  },
  "vehicle-diagnostics": {
    title: "Vehicle Diagnostics | High Breed Network",
    description:
      "Dealer-level diagnostics for all vehicle brands — petrol, diesel, hybrid, PHEV, and EV. Full system scans, fault code reading, live data streaming, and pre-purchase inspection reports.",
  },
  "ecu-programming": {
    title: "ECU Programming | High Breed Network",
    description:
      "Professional ECU programming, firmware flashing, and module coding services for all makes and models. VIN pairing, OEM software updates, immobiliser pairing, and adaptation resets.",
  },
  "key-immobilizer": {
    title: "Key & Immobilizer Services | High Breed Network",
    description:
      "Lost your car key? Need a spare? High Breed Network programs all key types — transponder, remote, smart, and push-start — and diagnoses and repairs immobiliser faults across all vehicle brands.",
  },
  "hybrid-ev": {
    title: "Hybrid & EV Services | High Breed Network",
    description:
      "Specialist hybrid and electric vehicle diagnostics, battery health checks, high-voltage system repair, and BMS programming for Toyota, Lexus, Honda, Nissan, and all other hybrid and EV brands.",
  },
  "anti-theft-tracking": {
    title: "Anti-Theft & GPS Tracking | High Breed Network",
    description:
      "Protect your vehicle with real-time GPS tracking, remote cut-off, SMS/app alerts, geofencing, and tamper detection. Professional hardwired installation for personal vehicles and fleets.",
  },
  "performance-tuning": {
    title: "Performance Tuning | High Breed Network",
    description:
      "Custom ECU remapping and performance calibration to unlock more power, torque, and efficiency from your engine. Stage 1 maps, economy remaps, and rolling road verification for all brands.",
  },
  "dash-cam": {
    title: "Dash Cam Installation | High Breed Network",
    description:
      "Professional supply and hardwired installation of front, front-and-rear, and 3-channel dash cam systems. Clean cable management, parking mode setup, and app configuration included.",
  },
};
