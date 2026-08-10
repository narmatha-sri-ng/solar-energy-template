import { images } from './images';

export const servicesData = [
  {
    id: "residential",
    slug: "residential-solar",
    title: "Residential Solar Systems",
    shortDescription: "Custom rooftop solar PV panel systems designed to eliminate electric bills and provide clean power for your family.",
    fullDescription: "Transform your home into an independent clean energy powerhouse. Our residential solar packages include high-efficiency monocrystalline panels, sleek low-profile mounting, smart inverters, and full smartphone monitoring. Enjoy up to 90% savings on monthly utility bills.",
    icon: "Home",
    image: images.services.residential,
    features: [
      "25-Year Manufacturer Warranty",
      "Sleek Rooftop Aesthetic Design",
      "Net Metering Compatibility",
      "Real-time Smartphone App Tracking"
    ],
    highlightStats: "Save up to $1,800/year on home electricity"
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    title: "Commercial Solar Power",
    shortDescription: "Scalable solar arrays for office buildings, warehouses, retail centers, and agricultural businesses.",
    fullDescription: "Lower operational expenses and achieve corporate sustainability goals with custom commercial solar installations. We deliver rapid payback periods, tax equity guidance, and minimal operational downtime during installation.",
    icon: "Building2",
    image: images.services.commercial,
    features: [
      "Maximized Federal Tax ITC (30%+)",
      "Accelerated Depreciation (MACRS)",
      "Roof, Carport & Ground-Mount Options",
      "Zero-Down Commercial Solar Leases & PPAs"
    ],
    highlightStats: "Average ROI in 4 to 6 years"
  },
  {
    id: "industrial",
    slug: "industrial-energy",
    title: "Industrial & Utility Solar",
    shortDescription: "Megawatt-scale renewable power plants and microgrids designed for high energy consumption facilities.",
    fullDescription: "Engineered for factories, manufacturing plants, logistics hubs, and grid-tied energy projects. We design high-voltage utility interconnects, robust SCADA control systems, and heavy-duty structural mounts built for maximum longevity.",
    icon: "Factory",
    image: images.services.industrial,
    features: [
      "Multi-Megawatt Systems Engineering",
      "Grid Stability & Demand Charge Reduction",
      "SCADA & Automated Utility Controls",
      "Comprehensive O&M SLA Guarantees"
    ],
    highlightStats: "Over 200+ MW deployed across industrial hubs"
  },
  {
    id: "installation",
    slug: "solar-installation",
    title: "Turnkey Solar Installation",
    shortDescription: "Precision panel mounting, electrical inverter wiring, and utility interconnect setup by licensed technicians.",
    fullDescription: "Our certified installation crews manage every physical aspect of your solar deployment—from structural roof mounting brackets and conduit runs to rapid inverter commissioning and utility net-metering activation.",
    icon: "Zap",
    image: images.services.installation,
    features: [
      "Licensed & NABCEP Certified Technicians",
      "Rapid 1 to 3 Day Physical Installation",
      "Code Compliant Electrical Wiring",
      "Complete Utility Interconnect Approval"
    ],
    highlightStats: "Zero-Downtime Installation Process"
  },
  {
    id: "maintenance",
    slug: "solar-maintenance",
    title: "Solar Maintenance & Diagnostics",
    shortDescription: "Proactive inspection, panel washing, inverter diagnostics, and performance optimization services.",
    fullDescription: "Ensure your solar system operates at peak output throughout its 25+ year lifespan. Our thermal imaging drone inspections, robotic panel cleaning, wire audits, and rapid inverter replacement keep energy loss to a minimum.",
    icon: "Wrench",
    image: images.services.maintenance,
    features: [
      "Deionized Water Panel Washing",
      "Thermal Drone Infrared Fault Scanning",
      "Rapid On-Site Technicians Within 24h",
      "Inverter & Component Warranty Repairs"
    ],
    highlightStats: "Restores up to 15-25% lost energy efficiency"
  },
  {
    id: "battery",
    slug: "battery-storage",
    title: "Battery Energy Storage (BESS)",
    shortDescription: "Next-gen lithium energy storage systems to secure uninterrupted backup power and store excess solar electricity.",
    fullDescription: "Keep your home or enterprise operational during grid blackouts. Our integrated battery storage solutions store daytime solar energy for use during peak evening rates or stormy power outages.",
    icon: "BatteryCharging",
    image: images.services.battery,
    features: [
      "Automatic Power Outage Switching",
      "Peak-Shaving & TOU Rate Optimization",
      "Modular Lithium Iron Phosphate (LiFePO4)",
      "UL Certified Thermal Safety Systems"
    ],
    highlightStats: "100% Seamless Emergency Backup Power"
  }
];
