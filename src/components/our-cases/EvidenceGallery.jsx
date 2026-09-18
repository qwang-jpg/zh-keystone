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
  title: "企业宣传资料案例精选",
  note: "真实客户企业的宣传册样张，以低分辨率预览展示，保护客户隐私。",
  images: [
    { src: brochureSustainabilityConsulting, label: "可持续发展咨询宣传册" },
    { src: brochureTablewareEcommerce, label: "全球餐具品牌宣传册" },
    { src: brochureFinanceConsulting, label: "财务顾问宣传册" },
    { sourceFile: "music-studio-brochure.jpg", label: "音乐工作室宣传册" },
    { src: brochureUiUxDesign, label: "设计工作室宣传册" },
    { src: brochureSupplyChainWarehousing, label: "仓储与供应链宣传册" },
  ],
};

// Filenames stripped of host/path and WordPress size-suffixes per the
// image-placeholder rule; alt text from the source <img> tags is kept as
// each placeholder's label. Entries with `src` are real assets dropped into
// src/assets/our-cases/; the rest are still-pending originals.
const documentRows = [
  {
    title: "公司注册文件",
    images: [
      { sourceFile: "01.jpeg", label: "01" },
      { sourceFile: "02.jpeg", label: "02" },
      { sourceFile: "03.jpeg", label: "03" },
      { sourceFile: "04.jpeg", label: "04" },
      { src: registrationCalifornia, label: "加利福尼亚州 — 公司注册证书" },
      { src: registrationTexas, label: "德克萨斯州 — 备案证明" },
      { src: registrationIllinois, label: "伊利诺伊州 — 公司注册证书" },
      { src: registrationNewYork, label: "纽约州 — 公司注册证书" },
      { src: registrationGeorgia, label: "佐治亚州 — 公司注册证书" },
      { src: registrationMassachusetts, label: "马萨诸塞州 — 公司组织证书" },
      { src: registrationNewJersey, label: "新泽西州 — 公司注册证书" },
      { src: registrationDc, label: "华盛顿特区 — 公司注册证书" },
    ],
  },
  {
    title: "H-1B获批 — I-797批准通知书",
    images: [
      { sourceFile: "2024-1.png", label: "2024-1" },
      { sourceFile: "2024-2.png", label: "2024-2" },
      { sourceFile: "2024-3.png", label: "2024-3" },
      { sourceFile: "2024-4.png", label: "2024-4" },
      { sourceFile: "2024-5.png", label: "2024-5" },
      { sourceFile: "2024-6.png", label: "2024-6" },
      { sourceFile: "2024-7.png", label: "2024-7" },
      { sourceFile: "2024-8.png", label: "2024-8" },
      { sourceFile: "2025-1.png", label: "H-1B注册与抽签指南" },
      { sourceFile: "2025-2.png", label: "2025-2" },
      { sourceFile: "2025-3.png", label: "2025-3" },
      { sourceFile: "2025-4.png", label: "2025-4" },
      { src: approvalI797a, label: "I-797A批准通知书" },
      { src: approvalI797b, label: "I-797B批准通知书" },
    ],
  },
  {
    title: "H-1B之外 — PERM与I-140获批",
    images: [
      { src: approvalPerm1, label: "PERM劳工证，已批准" },
      { src: approvalPerm2, label: "PERM劳工证，已批准" },
      { src: approvalI140_1, label: "I-140移民申请，已批准" },
      { src: approvalI140_2, label: "I-140移民申请，已批准" },
      { src: approvalI140_3, label: "I-140移民申请，已批准" },
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
            aria-label="关闭"
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
              alt={item.label ?? "证明文件"}
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
        <h2 className="text-xl font-bold text-keystone-ink md:text-2xl">存档证明材料</h2>
        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
          以下为低分辨率预览，客户身份信息已在源头处理。每一行独立滚动——悬停可暂停，
          点击文件可查看大图。
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
