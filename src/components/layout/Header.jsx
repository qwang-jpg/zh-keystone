import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { serviceGroups, featuredServices } from "@/data/services";
import logo from "@/assets/Logo.png";

const allServiceLinks = [
  ...featuredServices,
  ...serviceGroups.flatMap((g) => g.items),
];

const navLinks = [
  { label: "成功案例", href: "/our-cases" },
  { label: "关于我们", href: "/about-us" },
  { label: "行业洞察", href: "/insights" },
];

// Separate from the marketing nav above: this is a login entry point for
// existing clients, not a page for prospects, so it's styled as a smaller
// secondary link next to the language switcher instead of sitting among
// About Us / Insights.
const clientPortalLink = { label: "客户门户", href: "/client-portal" };

// The site itself is Chinese-only; "EN" links out to Keystone's separate
// English-language site. More languages can be appended here later.
const languages = [
  { code: "中文", label: "中文", current: true },
  { code: "EN", label: "English", href: "https://keystonestrategies.us/", external: true },
];

export default function Header({ ctaLabel = "预约免费咨询" }) {
  const location = useLocation();
  const expandedCta = ctaLabel !== "预约免费咨询";
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const servicesRef = useRef(null);
  const langRef = useRef(null);

  const isServiceActive = allServiceLinks.some((s) => s.href === location.pathname);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollPct(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  // Closes an open dropdown on an outside click/tap or Escape, so the
  // click-to-open trigger (needed for keyboard and touch users) has a way
  // to close again without relying on mouseleave.
  useEffect(() => {
    function handlePointerDown(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevents the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-border"
          : "bg-white/70 backdrop-blur border-b border-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Keystone Strategies" className="h-10 w-auto md:h-11" />
        </Link>

        <div className={cn("hidden flex-1 items-center justify-end gap-8", expandedCta ? "xl:flex" : "lg:flex")}>
          <nav className="flex items-center gap-8">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(true)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                  isServiceActive ? "text-primary" : "text-keystone-ink/80"
                )}
              >
                服务
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "fixed inset-x-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-white shadow-lg transition-all duration-150",
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                )}
              >
                <div className="container grid grid-cols-4 gap-10 py-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      核心方案
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                      {featuredServices.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="group block rounded-xl border border-primary/20 bg-keystone-mist p-4"
                        >
                          <p className="text-sm font-bold leading-snug text-keystone-ink group-hover:text-primary">
                            {s.label}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {s.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {serviceGroups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {group.heading}
                      </p>
                      <div className="mt-4 flex flex-col gap-5">
                        {group.items.map((s) => (
                          <Link key={s.href} to={s.href} className="group block">
                            <p className="text-sm font-semibold leading-snug text-keystone-ink group-hover:text-primary">
                              {s.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {s.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-keystone-ink/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium text-keystone-ink/80 hover:text-primary transition-colors",
                      isActive && "text-primary"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <div className="h-5 w-px bg-border" aria-hidden="true" />

            <NavLink
              to={clientPortalLink.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-keystone-ink/50 hover:text-primary transition-colors",
                  isActive && "text-primary"
                )
              }
            >
              {clientPortalLink.label}
            </NavLink>

            <div
              ref={langRef}
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLangOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-keystone-ink/70 transition-colors hover:text-primary"
                aria-label="切换语言"
                aria-haspopup="true"
                aria-expanded={langOpen}
              >
                中文
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", langOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "absolute right-0 top-full pt-3 transition-all duration-150",
                  langOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                )}
              >
                <div className="w-44 rounded-xl border border-border bg-white p-2 shadow-lg">
                  {languages.map((lang) =>
                    lang.current ? (
                      <span
                        key={lang.code}
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-primary"
                      >
                        {lang.label}
                        <Check className="h-4 w-4" />
                      </span>
                    ) : (
                      <a
                        key={lang.code}
                        href={lang.href}
                        target={lang.external ? "_blank" : undefined}
                        rel={lang.external ? "noreferrer" : undefined}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-keystone-ink/80 transition-colors hover:bg-muted hover:text-primary"
                      >
                        {lang.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <Button asChild size="default">
              <Link to="/contact">{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        <button
          className={cn("inline-flex h-10 w-10 items-center justify-center rounded-md text-keystone-ink", expandedCta ? "xl:hidden" : "lg:hidden")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="切换导航菜单"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="h-0.5 bg-border/60">
        <div
          className="h-0.5 bg-keystone-gradient transition-[width] duration-150"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {mobileOpen && (
        <div className={cn("max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-white", expandedCta ? "xl:hidden" : "lg:hidden")}>
          <nav className="container flex flex-col py-4">
            <button
              className="flex items-center justify-between py-3 text-base font-medium text-keystone-ink/80 border-b border-border/60"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              服务
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col border-b border-border/60 py-2 pl-3">
                {allServiceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className={cn(
                      "py-2.5 text-sm font-medium text-keystone-ink/70",
                      featuredServices.some((f) => f.href === s.href) && "font-semibold text-primary"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 text-base font-medium text-keystone-ink/80 border-b border-border/60"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 text-base font-medium text-keystone-ink/80 border-b border-border/60"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <Button asChild className="mt-4 w-full">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>

            <Link
              to={clientPortalLink.href}
              className="mt-4 text-center text-sm font-medium text-keystone-ink/50"
              onClick={() => setMobileOpen(false)}
            >
              {clientPortalLink.label}
            </Link>

            <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-4">
              <Globe className="h-4 w-4 shrink-0 text-keystone-ink/50" />
              <div className="flex items-center gap-3">
                {languages.map((lang) =>
                  lang.current ? (
                    <span key={lang.code} className="text-sm font-semibold text-primary">
                      {lang.label}
                    </span>
                  ) : (
                    <a
                      key={lang.code}
                      href={lang.href}
                      target={lang.external ? "_blank" : undefined}
                      rel={lang.external ? "noreferrer" : undefined}
                      className="text-sm font-medium text-keystone-ink/60"
                    >
                      {lang.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
