import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import EvidenceCard from "@/components/our-cases/EvidenceCard";
import MarqueeRow from "@/components/our-cases/MarqueeRow";
import brochureFinanceConsulting from "@/assets/our-cases/brochure-finance-consulting.png";
import brochureSustainabilityConsulting from "@/assets/our-cases/brochure-sustainability-consulting.png";
import brochureUiUxDesign from "@/assets/our-cases/brochure-ui-ux-design.png";
import brochureSupplyChainWarehousing from "@/assets/our-cases/brochure-supply-chain-warehousing.png";
import brochureTablewareEcommerce from "@/assets/our-cases/brochure-tableware-ecommerce.png";
import registrationCalifornia from "@/assets/our-cases/registration-california.png";
import registrationIllinois from "@/assets/our-cases/registration-illinois.png";
import registrationTexas from "@/assets/our-cases/registration-texas.png";
import registrationGeorgia from "@/assets/our-cases/registration-georgia.png";
import registrationMassachusetts from "@/assets/our-cases/registration-massachusetts.png";
import registrationNewJersey from "@/assets/our-cases/registration-new-jersey.png";
import registrationNewYork from "@/assets/our-cases/registration-new-york.png";
import registrationDc from "@/assets/our-cases/registration-district-of-columbia.png";
import approvalI797a from "@/assets/our-cases/approval-i797a-h1b.png";
import approvalI797b from "@/assets/our-cases/approval-i797b-h1b.png";
import approvalI140_1 from "@/assets/our-cases/approval-i140-1.png";
import approvalI140_2 from "@/assets/our-cases/approval-i140-2.png";
import approvalI140_3 from "@/assets/our-cases/approval-i140-3.png";
import approvalPerm1 from "@/assets/our-cases/approval-perm-1.png";
import approvalPerm2 from "@/assets/our-cases/approval-perm-2.png";

// Low-resolution previews of client-built company brochures, one per case.
// Client-identifying details are scrubbed at the source.
//
// This theme is never served from its site's domain root (see
// functions.php), so images must be imported from src/assets/ like every
// other real image in this codebase — not referenced by an absolute
// "/images/..." path, which would 404. To replace a pending preview below,
// drop the file into src/assets/our-cases/, add an
// `import x from "@/assets/our-cases/<file>"` above, and set `src: x`
// on that entry.
const brochureRow = {
  title: "Case Highlights from Our Company Brochure",
  note: "Sample brochure pages from real client businesses, shown as low-resolution previews to protect client confidentiality.",
  images: [
    { src: brochureSustainabilityConsulting, label: "Sustainability Consulting Brochure" },
    { src: brochureTablewareEcommerce, label: "Global Tableware Brand Brochure" },
    { src: brochureFinanceConsulting, label: "Financial Advisory Brochure" },
    { sourceFile: "music-studio-brochure.jpg", label: "Music Studio Brochure" },
    { src: brochureUiUxDesign, label: "Design Studio Brochure" },
    { src: brochureSupplyChainWarehousing, label: "Warehousing & Supply Chain Brochure" },
  ],
};

// Filenames stripped of host/path and WordPress size-suffixes per the
// image-placeholder rule; alt text from the source <img> tags is kept as
// each placeholder's label. Entries with `src` are real assets dropped into
// src/assets/our-cases/; the rest are still-pending originals.
const documentRows = [
  {
    title: "Company Registration File",
    images: [
      { sourceFile: "01.jpeg", label: "01" },
      { sourceFile: "02.jpeg", label: "02" },
      { sourceFile: "03.jpeg", label: "03" },
      { sourceFile: "04.jpeg", label: "04" },
      { src: registrationCalifornia, label: "California — Articles of Incorporation" },
      { src: registrationTexas, label: "Texas — Certificate of Filing" },
      { src: registrationIllinois, label: "Illinois — Articles of Incorporation" },
      { src: registrationNewYork, label: "New York — Certificate of Incorporation" },
      { src: registrationGeorgia, label: "Georgia — Certificate of Incorporation" },
      { src: registrationMassachusetts, label: "Massachusetts — Articles of Organization" },
      { src: registrationNewJersey, label: "New Jersey — Certificate of Incorporation" },
      { src: registrationDc, label: "Washington, D.C. — Certificate of Incorporation" },
    ],
  },
  {
    title: "H-1B Approved — I-797 Approval Notice",
    images: [
      { sourceFile: "2024-1.png", label: "2024-1" },
      { sourceFile: "2024-2.png", label: "2024-2" },
      { sourceFile: "2024-3.png", label: "2024-3" },
      { sourceFile: "2024-4.png", label: "2024-4" },
      { sourceFile: "2024-5.png", label: "2024-5" },
      { sourceFile: "2024-6.png", label: "2024-6" },
      { sourceFile: "2024-7.png", label: "2024-7" },
      { sourceFile: "2024-8.png", label: "2024-8" },
      { sourceFile: "2025-1.png", label: "H-1B Registration & Lottery Guidance" },
      { sourceFile: "2025-2.png", label: "2025-2" },
      { sourceFile: "2025-3.png", label: "2025-3" },
      { sourceFile: "2025-4.png", label: "2025-4" },
      { src: approvalI797a, label: "I-797A Approval Notice" },
      { src: approvalI797b, label: "I-797B Approval Notice" },
    ],
  },
  {
    title: "Beyond H-1B — PERM & I-140 Approvals",
    images: [
      { src: approvalPerm1, label: "PERM Labor Certification, Approved" },
      { src: approvalPerm2, label: "PERM Labor Certification, Approved" },
      { src: approvalI140_1, label: "I-140 Immigrant Petition, Approved" },
      { src: approvalI140_2, label: "I-140 Immigrant Petition, Approved" },
      { src: approvalI140_3, label: "I-140 Immigrant Petition, Approved" },
    ],
  },
];

// Rows alternate scroll direction so the strip reads as a wall, not a
// single conveyor belt. Speed is scaled to how many cards are in the row
// so every strip moves at roughly the same visual pace per card.
const rows = [brochureRow, ...documentRows].map((row, idx) => ({
  ...row,
  direction: idx % 2 === 0 ? "right" : "left",
  speed: Math.max(row.images.length * 6, 26),
}));

function EvidenceLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-keystone-ink/85 p-4 backdrop-blur-sm md:p-10"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.figure
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-full flex-col items-center gap-3"
          >
            <img
              src={item.src}
              alt={item.label ?? "Evidence document"}
              className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            {item.label && <figcaption className="text-sm font-medium text-white/80">{item.label}</figcaption>}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function EvidenceGallery({ h1bOnly = false }) {
  const visibleRows = h1bOnly
    ? rows.slice(0, 3).map((row) => ({ ...row, images: row.images.filter((image) => image.src) }))
    : rows;
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="bg-keystone-mist py-20 md:py-28">
      <div className="container">
        <h2 className="text-xl font-bold text-keystone-ink md:text-2xl">Evidence on file</h2>
        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
          Low-resolution previews; client-identifying details scrubbed at the source. Each row
          scrolls on its own — hover to pause, or click a document to view it larger.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-12">
        {visibleRows.map((row) => (
          <motion.div
            key={row.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <h3 className="text-base font-bold text-keystone-ink">{row.title}</h3>
              {row.note && <p className="mt-1 text-xs text-muted-foreground">{row.note}</p>}
            </div>
            <MarqueeRow
              items={row.images}
              direction={row.direction}
              speed={row.speed}
              ariaLabel={row.title}
              className="mt-5"
              renderItem={(img) => (
                <EvidenceCard
                  src={img.src}
                  sourceFile={img.sourceFile}
                  label={img.label}
                  onClick={img.src ? () => setLightbox(img) : undefined}
                />
              )}
            />
          </motion.div>
        ))}
      </div>

      <EvidenceLightbox item={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
