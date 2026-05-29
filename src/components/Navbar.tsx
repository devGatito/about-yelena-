import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import navbarSchema from '../schema/navbar.json'
import Button from './Button'

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const lang = 'es'
  const content = navbarSchema[lang]
  const navItems = content.navItems

  return (
    <nav
      className="sticky top-0 z-50 bg-(--color-background)/95 backdrop-blur-sm border-b border-line"
      aria-label={content.aria.navigation}
    >
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 py-4">
         
        

          {/* Navegación principal en pill - Desktop */}
          <div className="hidden md:flex items-center">
<div className="flex items-center gap-1 rounded-full border border-line bg-white px-2 py-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
className="relative rounded-full px-4 py-2 text-sm font-medium text-(--color-foreground) transition-colors hover:bg-surface-high"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Barra de búsqueda centrada */}
          <div className="flex-1 max-w-md mx-4">
            <motion.div
              className={`relative flex items-center rounded-full border transition-all duration-200 ${
                isSearchFocused
? 'border-accent ring-2 ring-accent/20'
                  : 'border-line hover:border-outline'
              }`}
              animate={{ scale: isSearchFocused ? 1.02 : 1 }}
            >
              <svg
className="absolute left-4 h-4 w-4 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder={content.search.placeholder}
className="w-full rounded-full border-0 bg-transparent py-2.5 pl-11 pr-10 text-sm text-(--color-foreground) placeholder:text-muted focus:outline-none focus:ring-0"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                aria-label={content.aria.search}
              />
              <div className="absolute right-3 flex items-center gap-1">
<kbd className="hidden rounded border border-line bg-surface-high px-1.5 py-0.5 text-xs text-muted sm:inline-block">
                  ⌘K
                </kbd>
              </div>
            </motion.div>
          </div>

          {/* Botones de acción - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/proyecto"
              variant="secondary"
            >
              {content.actions.viewProject}
            </Button>
            <Button
              href="/mapa"
              variant="primary"
            >
              {content.actions.siteMap}
            </Button>
          </div>

          {/* Menú móvil */}
          <button
className="md:hidden flex items-center justify-center rounded-full p-2 hover:bg-surface-high"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? content.aria.closeMenu : content.aria.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
  className="h-6 w-6 text-(--color-foreground)"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
className="md:hidden border-t border-line py-4"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
className="rounded-full px-4 py-3 text-sm font-medium text-(--color-foreground) transition-colors hover:bg-surface-high"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
<div className="my-2 border-t border-line" />
                <Button
                  href="/proyecto"
                  variant="secondary"
                  size="mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content.actions.viewProject}
                </Button>
                <Button
                  href="/mapa"
                  variant="primary"
                  size="mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content.actions.siteMap}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
