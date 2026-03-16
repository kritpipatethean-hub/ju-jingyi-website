import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'หน้าแรก', href: '#hero' },
  { label: 'ประวัติ', href: '#biography' },
  { label: 'ไทม์ไลน์', href: '#timeline' },
  { label: 'ผลงาน', href: '#filmography' },
  { label: 'เพลง', href: '#music' },
  { label: 'รางวัล', href: '#awards' },
  { label: 'แกลเลอรี', href: '#gallery' },
  { label: 'วิดีโอ', href: '#videos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-rose-gold/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className={`flex items-center gap-1 text-xs tracking-wide transition-colors ${
                  scrolled ? 'text-rose-gold/70 hover:text-rose-gold' : 'text-white/50 hover:text-white/80'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                หน้าหลัก
              </Link>
              <a href="#hero" className="flex items-center gap-2 group">
                <span className={`text-lg lg:text-xl font-bold tracking-wider transition-colors ${
                  scrolled ? 'text-rose-gold' : 'text-white'
                }`}>
                  鞠婧祎
                </span>
                <span className={`hidden sm:inline text-xs tracking-[0.3em] uppercase transition-colors ${
                  scrolled ? 'text-midnight/60' : 'text-white/70'
                }`}>
                  Ju Jingyi
                </span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-rose-gold/10 ${
                    scrolled
                      ? 'text-midnight/70 hover:text-rose-gold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-midnight' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-midnight/80 hover:text-rose-gold transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
