/**
 * NORDASTRUM Petrochemicals & Advanced Materials
 * Product Portfolio & Technical Specifications Database
 */

window.PETROCHEMICAL_PRODUCTS = [
  // 1. OLEFINS & MONOMERS
  {
    id: "prod-eth-01",
    name: "Polymer-Grade Ethylene",
    category: "olefins",
    categoryName: "Olefins & Monomers",
    formula: "C₂H₄",
    cas: "74-85-1",
    purity: "≥ 99.95 wt%",
    appearance: "Colorless compressed gas",
    density: "0.568 g/cm³ (-104°C)",
    boilingPoint: "-103.7 °C",
    flashPoint: "-136.0 °C",
    astmStandards: "ASTM D5234, ASTM D2504",
    applications: [
      "High & Linear Low-Density Polyethylene (HDPE/LLDPE)",
      "Ethylene Oxide & Glycol Production",
      "Vinyl Chloride Monomer (PVC)",
      "Alpha-Olefins & Synthetic Lubricants"
    ],
    packaging: ["Cryogenic Gas Carrier", "Pipeline Grid", "High-Pressure ISO Tank"],
    description: "Ultra-pure polymer-grade ethylene tailored for metallocene and Ziegler-Natta catalyzed polymerization units, engineered for high-performance film and pipe extrusion."
  },
  {
    id: "prod-prop-02",
    name: "Chemical & Polymer Grade Propylene",
    category: "olefins",
    categoryName: "Olefins & Monomers",
    formula: "C₃H₆",
    cas: "115-07-1",
    purity: "≥ 99.80 wt%",
    appearance: "Colorless liquefied gas",
    density: "0.514 g/cm³ (20°C)",
    boilingPoint: "-47.6 °C",
    flashPoint: "-108.0 °C",
    astmStandards: "ASTM D2163, ASTM D2712",
    applications: [
      "Polypropylene (PP) Homopolymers & Copolymers",
      "Acrylonitrile (PAN) Synthetic Fibers",
      "Propylene Oxide & Polyols",
      "Acrylic Acid & Superabsorbents"
    ],
    packaging: ["Pressurized Rail Car", "ISO Tank Container", "Marine Gas Tanker"],
    description: "High-selectivity catalytic propylene feedstock ensuring minimal trace oxygenates and sulfur compounds for uninterrupted polymerization runs."
  },
  {
    id: "prod-but-03",
    name: "1,3-Butadiene (Polymer Grade)",
    category: "olefins",
    categoryName: "Olefins & Monomers",
    formula: "C₄H₆",
    cas: "106-99-0",
    purity: "≥ 99.60 wt%",
    appearance: "Colorless gas with mild aroma",
    density: "0.621 g/cm³ (20°C)",
    boilingPoint: "-4.4 °C",
    flashPoint: "-76.0 °C",
    astmStandards: "ASTM D2593, ASTM D1157",
    applications: [
      "Styrene-Butadiene Rubber (SBR)",
      "Polybutadiene Rubber (PBR) Tires",
      "Acrylonitrile Butadiene Styrene (ABS) Resins",
      "Styrene-Butadiene Latex"
    ],
    packaging: ["Pressurized Gas Vessel", "Inhibited ISO Tanks"],
    description: "Extracted via extractive distillation with NMP, providing peak consistency for synthetic elastomers and impact-resistant automotive polymers."
  },

  // 2. POLYMERS & RESINS
  {
    id: "prod-hdpe-04",
    name: "Nordastrum H-Resin (HDPE Pipe & Film)",
    category: "polymers",
    categoryName: "Polymers & Resins",
    formula: "(C₂H₄)ₙ",
    cas: "9002-88-4",
    purity: "Bimodal High Density",
    appearance: "White translucent pellets",
    density: "0.948 - 0.960 g/cm³",
    boilingPoint: "N/A (Melt Temp: 130-135°C)",
    flashPoint: "> 340 °C",
    astmStandards: "ASTM D1238 (MFI), ASTM D1505",
    applications: [
      "PE100 Pressure Gas & Water Piping",
      "High-Molecular Weight (HMW) Blown Films",
      "Industrial Blow-Molded Drums & IBC Containers",
      "Geomembranes & Infrastructure Liners"
    ],
    packaging: ["25 kg Valve Bags", "1000 kg Sea-Bulk Bags", "Silo Bulk Tankers"],
    description: "Next-generation bimodal High-Density Polyethylene engineered with superior slow crack growth (SCG) resistance and ultra-high environmental stress crack resistance (ESCR)."
  },
  {
    id: "prod-pp-05",
    name: "AstraPlast Polypropylene Impact Copolymer",
    category: "polymers",
    categoryName: "Polymers & Resins",
    formula: "(C₃H₆)ₙ·(C₂H₄)ₘ",
    cas: "9010-79-1",
    purity: "Automotive Grade Copolymer",
    appearance: "Uniform spherical / cylindrical pellets",
    density: "0.905 g/cm³",
    boilingPoint: "N/A (Melt Temp: 165°C)",
    flashPoint: "> 350 °C",
    astmStandards: "ASTM D1238, ASTM D256 (Izod Impact)",
    applications: [
      "Automotive Bumpers & Interior Trim Modules",
      "Cold-Temperature Industrial Crates & Pallets",
      "Appliance Casings & Battery Housings",
      "Thin-Wall Packaging Containers"
    ],
    packaging: ["25 kg Bags on Pallets", "1.1 MT Big Bags", "Bulk Rail Hoppers"],
    description: "Engineered balance of high melt flow rate (MFR 25-45) and sub-zero impact toughness, delivering lightweighting performance for tier-1 automotive manufacturing."
  },
  {
    id: "prod-lldpe-06",
    name: "Nordastrum Metallocene LLDPE (mLLDPE)",
    category: "polymers",
    categoryName: "Polymers & Resins",
    formula: "C₂H₄ / 1-Hexene Copolymer",
    cas: "25087-34-7",
    purity: "Metallocene Hexene Copolymer",
    appearance: "Clear translucent resin pellets",
    density: "0.918 - 0.924 g/cm³",
    boilingPoint: "N/A (Melt Temp: 120°C)",
    flashPoint: "> 340 °C",
    astmStandards: "ASTM D1709 (Dart Drop), ASTM D1922 (Tear)",
    applications: [
      "Ultra-Tough Agricultural Greenhouse Film",
      "High-Speed Stretch & Collation Shrink Wrap",
      "Heavy-Duty Shipping Sacks",
      "Flexible Food & Barrier Packaging"
    ],
    packaging: ["25 kg Heavy Duty Bags", "Bulk Liners"],
    description: "Synthesized via single-site metallocene catalysts yielding ultra-narrow molecular weight distribution, unmatched dart impact, and superior optical clarity."
  },

  // 3. AROMATICS & INTERMEDIATES
  {
    id: "prod-benz-07",
    name: "Pure Benzene (Nitration Grade)",
    category: "aromatics",
    categoryName: "Aromatics & Intermediates",
    formula: "C₆H₆",
    cas: "71-43-2",
    purity: "≥ 99.90 wt%",
    appearance: "Clear, colorless liquid",
    density: "0.879 g/cm³ (20°C)",
    boilingPoint: "80.1 °C",
    flashPoint: "-11.1 °C",
    astmStandards: "ASTM D2359, ASTM D852",
    applications: [
      "Ethylbenzene & Styrene Production",
      "Cumene & Phenol / Acetone Value Chain",
      "Cyclohexane & Nylon Intermediates (Caprolactam)",
      "Nitrobenzene & MDI Polyurethanes"
    ],
    packaging: ["Chemical Parcel Tankers", "ISO Bulk Tank Containers"],
    description: "High-refinement nitration grade benzene with non-detectable thiophene levels, supporting large-scale downstream styrene and polycarbonate synthesis."
  },
  {
    id: "prod-px-08",
    name: "Paraxylene (p-Xylene / PX)",
    category: "aromatics",
    categoryName: "Aromatics & Intermediates",
    formula: "C₈H₁₀ / C₆H₄(CH₃)₂",
    cas: "106-42-3",
    purity: "≥ 99.85 wt%",
    appearance: "Colorless liquid (crystallizes < 13°C)",
    density: "0.861 g/cm³ (20°C)",
    boilingPoint: "138.4 °C",
    flashPoint: "27.0 °C",
    astmStandards: "ASTM D3798, ASTM D2306",
    applications: [
      "Purified Terephthalic Acid (PTA)",
      "Polyethylene Terephthalate (PET) Bottles & Film",
      "Polyester Textiles & High-Tenacity Yarn",
      "Polybutylene Terephthalate (PBT) Resins"
    ],
    packaging: ["Dedicated Marine Product Tankers", "ISO Bulk Tanks"],
    description: "Adsorptive separation high-purity paraxylene with precise crystallizing point control, driving the global synthetic fiber and circular PET industries."
  },
  {
    id: "prod-sty-09",
    name: "Styrene Monomer (SM Inhibited)",
    category: "aromatics",
    categoryName: "Aromatics & Intermediates",
    formula: "C₈H₈ / C₆H₅CH=CH₂",
    cas: "100-42-5",
    purity: "≥ 99.85 wt%",
    appearance: "Colorless to pale yellow liquid",
    density: "0.906 g/cm³ (20°C)",
    boilingPoint: "145.2 °C",
    flashPoint: "31.1 °C",
    astmStandards: "ASTM D2827, ASTM D2121",
    applications: [
      "General Purpose & High Impact Polystyrene (GPPS/HIPS)",
      "Expandable Polystyrene (EPS) Insulation",
      "Unsaturated Polyester Resins (UPR) Composite Boats/Pipes",
      "Synthetic Rubber (SBR / SBS / SEBS)"
    ],
    packaging: ["Chilled Tankers with TBC Inhibitor", "ISO Tankers"],
    description: "Stabilized with optimal 4-tert-butylcatechol (TBC) inhibitor levels, preserving reactive polymerizability during intercontinental maritime transit."
  },

  // 4. SPECIALTY SOLVENTS & INDUSTRIAL CHEMICALS
  {
    id: "prod-meg-10",
    name: "Monoethylene Glycol (MEG Fiber Grade)",
    category: "solvents",
    categoryName: "Specialty Solvents & Chemicals",
    formula: "C₂H₆O₂",
    cas: "107-21-1",
    purity: "≥ 99.90 wt%",
    appearance: "Clear, viscous odorless liquid",
    density: "1.113 g/cm³ (20°C)",
    boilingPoint: "197.3 °C",
    flashPoint: "111.0 °C",
    astmStandards: "ASTM E2409, ASTM D1209",
    applications: [
      "Polyester Fiber & PET Resin Co-monomer",
      "Automotive Engine Coolants & Anti-Freeze Formulation",
      "Natural Gas Dehydration & Hydrate Inhibition",
      "Industrial Heat Transfer Fluids"
    ],
    packaging: ["Stainless Steel ISO Tanks", "210 L Tight-Head Steel Drums", "Bulk Chemical Vessel"],
    description: "Ultra-low iron content (< 0.05 ppm) and low UV absorbance index, strictly adhering to international polyester fiber manufacturer requirements."
  },
  {
    id: "prod-ipa-11",
    name: "High-Purity Isopropyl Alcohol (IPA Electronic/Industrial)",
    category: "solvents",
    categoryName: "Specialty Solvents & Chemicals",
    formula: "C₃H₈O / (CH₃)₂CHOH",
    cas: "67-63-0",
    purity: "≥ 99.85 wt% (Electronic Grade ≥ 99.99%)",
    appearance: "Colorless transparent volatile liquid",
    density: "0.786 g/cm³ (20°C)",
    boilingPoint: "82.6 °C",
    flashPoint: "11.7 °C",
    astmStandards: "ASTM D770, SEMI C41",
    applications: [
      "Semiconductor Wafer Cleaning & Circuit Defluxing",
      "Pharmaceutical Synthesis & Extraction Solvent",
      "Industrial Coatings, Printing Inks & Resins",
      "Healthcare Antiseptics & Sanitizer Formulation"
    ],
    packaging: ["Fluorinated HDPE Drums", "200 L Steel Drums", "Dedicated ISO Tanks"],
    description: "Catalytically hydrogenated acetone derivative ensuring low moisture (< 0.05%) and trace metal ions down to parts-per-billion (ppb) for electronics fabrication."
  },

  // 5. HIGH-GRADE LUBRICANTS & SYNTHETIC BASE OILS
  {
    id: "prod-pao-12",
    name: "Nordastrum Polyalphaolefin Base Oil (PAO 4 / PAO 6 / PAO 8)",
    category: "lubricants",
    categoryName: "Lubricants & Base Oils",
    formula: "Synthetic Oligomer [C₁₀H₂₀]ₙ",
    cas: "68037-01-4",
    purity: "Group IV Synthetic Base Stock",
    appearance: "Crystal clear water-white liquid",
    density: "0.820 - 0.835 g/cm³",
    boilingPoint: "> 316 °C",
    flashPoint: "220 - 260 °C",
    astmStandards: "ASTM D445 (Viscosity @ 100°C), ASTM D97 (Pour Point)",
    applications: [
      "Next-Gen 0W-16 & 0W-20 Ultra-Low Viscosity Motor Oils",
      "Aerospace & Military Extreme-Temperature Hydraulic Fluids",
      "Industrial Wind Turbine & Heavy Gear Lubricants",
      "EV Drivetrain Dielectric Cooling Fluids"
    ],
    packaging: ["1000 L IBC Totes", "208 L Steel Drums", "Bulk Heated Road Tankers"],
    description: "Decene-1 oligomer Group IV synthetic base stocks offering extreme Viscosity Index (VI > 135), pour points below -60°C, and exceptional thermo-oxidative stability."
  }
];

// Global Ports & Logistics Terminals
window.LOGISTICS_HUBS = [
  {
    id: "rotterdam",
    name: "Port of Rotterdam (ARA Hub, Netherlands)",
    country: "Netherlands",
    type: "Deepwater Chemical Terminal & Storage",
    capacity: "1,200,000 m³ Storage",
    transit: "5 - 8 Business Days"
  },
  {
    id: "houston",
    name: "Houston Ship Channel Terminal (USA)",
    country: "United States",
    type: "Refining Complex & Export Terminal",
    capacity: "2,400,000 MT/yr Refining & Export",
    transit: "5 - 8 Business Days"
  },
  {
    id: "singapore",
    name: "Jurong Island Chemical Hub (Singapore)",
    country: "Singapore",
    type: "Asia-Pacific Polymer & Monomer Hub",
    capacity: "850,000 m³ Cryogenic / Chemical",
    transit: "4 - 9 Business Days"
  },
  {
    id: "fujairah",
    name: "Port of Fujairah Energy Zone (UAE)",
    country: "United Arab Emirates",
    type: "Strategic Transshipment & Distribution",
    capacity: "1,800,000 m³ Tank Farm",
    transit: "4 - 9 Business Days"
  },
  {
    id: "antwerp",
    name: "Port of Antwerp-Bruges (Belgium)",
    country: "Belgium",
    type: "Specialty Polymers & Solvents Depot",
    capacity: "950,000 m³ Integrated Logistics",
    transit: "6 - 10 Business Days"
  }
];
