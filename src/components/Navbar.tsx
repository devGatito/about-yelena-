import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Menu,
  X,
  ChevronDown,
  Search,
  FolderOpen,
  Map,
} from "lucide-react";
import navbarSchema from "../schema-aylin/navbar.json";
import Button from "./Button";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const location = useLocation();
  const lang = "es";
  const content = navbarSchema[lang];
  const navItems = content.navItems;

  const isParentActive = (item) => {
    if (item.href === location.pathname) return true;
    if (item.children?.some((child) => child.href === location.pathname)) return true;
    return false;
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-line bg-(--color-background)/95 backdrop-blur-sm"
        aria-label={content.aria.navigation}
      >
        <div className="container-shell">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="hidden md:flex items-center">
              <ul className="flex items-center gap-1 rounded-full border border-line bg-white p-2">
                {navItems.map((item) => (
                  <li key={item.label} className="relative">
                    {!item.children ? (
                      <NavLink
                        to={item.href}
                        end={item.href === "/aylin"}
                        className={({ isActive }) =>
                          `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-surface-high text-(--color-foreground)"
                              : "text-(--color-foreground) hover:bg-surface-high"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => toggleSubmenu(item.label)}
                          aria-expanded={openSubmenu === item.label}
                          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            isParentActive(item)
                              ? "bg-surface-high text-(--color-foreground)"
                              : "text-(--color-foreground) hover:bg-surface-high"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openSubmenu === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-lg"
                            >
                              <div className="p-2">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.href}
                                    to={child.href}
                                    className={({ isActive }) =>
                                      `block rounded-xl px-3 py-2 text-sm transition-colors ${
                                        isActive
                                          ? "bg-surface-high text-(--color-foreground)"
                                          : "text-(--color-foreground) hover:bg-surface-high"
                                      }`
                                    }
                                    onClick={() => setOpenSubmenu(null)}
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden flex-1 max-w-md mx-4 md:flex">
              <motion.div
                className={`relative flex w-full items-center rounded-full border transition-all duration-200 ${
                  isSearchFocused
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-line hover:border-outline"
                }`}
                animate={{ scale: isSearchFocused ? 1.02 : 1 }}
              >
                <Search
                  size={16}
                  className="absolute left-4 text-muted"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder={content.search.placeholder}
                  className="w-full rounded-full border-0 bg-transparent py-2.5 pl-11 pr-10 text-sm text-(--color-foreground) placeholder:text-muted focus:outline-none focus:ring-0"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  aria-label={content.aria.search}
                />
              </motion.div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button to="/aylin" variant="secondary">
                {content.actions.viewProject}
              </Button>
              <Button to="/aylin/mapa-sitio" variant="primary">
                {content.actions.siteMap}
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden flex items-center justify-center rounded-full p-2 text-(--color-foreground) hover:bg-surface-high"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.aside
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] md:hidden bg-(--color-background)"
            aria-label={content.aria.navigation}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.28 }}
              className="flex h-dvh flex-col"
            >
              <div className="flex items-center justify-between border-b border-line px-4 py-4">
                <span className="text-base font-semibold text-(--color-foreground)">
                  Navegación
                </span>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-(--color-foreground) hover:bg-surface-high"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenSubmenu(null);
                  }}
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="border-b border-line px-4 py-4">
                <div
                  className={`relative flex items-center rounded-full border transition-all duration-200 ${
                    isSearchFocused
                      ? "border-accent ring-2 ring-accent/20"
                      : "border-line"
                  }`}
                >
                  <Search
                    size={16}
                    className="absolute left-4 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    placeholder={content.search.placeholder}
                    className="w-full rounded-full border-0 bg-transparent py-3 pl-11 pr-4 text-sm text-(--color-foreground) placeholder:text-muted focus:outline-none focus:ring-0"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    aria-label={content.aria.search}
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-3">
                  {navItems.map((item) =>
                    !item.children ? (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        end={item.href === "/aylin"}
                        className={({ isActive }) =>
                          `flex min-h-11 items-center rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                            isActive
                              ? "bg-surface-high text-(--color-foreground)"
                              : "text-(--color-foreground) hover:bg-surface-high"
                          }`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <div
                        key={item.label}
                        className="overflow-hidden rounded-3xl border border-line"
                      >
                        <div className="flex items-center">
                          <NavLink
                            to={item.href}
                            className={() =>
                              `flex min-h-11 flex-1 items-center px-4 py-4 text-base font-medium ${
                                isParentActive(item)
                                  ? "text-(--color-foreground)"
                                  : "text-(--color-foreground)"
                              }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </NavLink>

                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.label)}
                            aria-expanded={openSubmenu === item.label}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-(--color-foreground)"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${
                                openSubmenu === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="px-2 pb-2">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.href}
                                    to={child.href}
                                    className={({ isActive }) =>
                                      `block rounded-2xl px-4 py-3 text-sm transition-colors ${
                                        isActive
                                          ? "bg-surface-high text-(--color-foreground)"
                                          : "text-muted hover:bg-surface-high hover:text-(--color-foreground)"
                                      }`
                                    }
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setOpenSubmenu(null);
                                    }}
                                  >
                                    {child.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="border-t border-line px-4 py-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    to="/aylin"
                    variant="secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FolderOpen size={18} />
                      {content.actions.viewProject}
                    </span>
                  </Button>

                  <Button
                    to="/aylin/mapa-sitio"
                    variant="primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Map size={18} />
                      {content.actions.siteMap}
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;