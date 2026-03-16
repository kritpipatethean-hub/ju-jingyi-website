import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { actorDirectory } from '../data/actorDirectory'
import './LandingPage.css'

function FloatingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    })),
  )

  return (
    <div className="landing-particles">
      {particles.map((p) => (
        <Motion.div
          key={p.id}
          className="landing-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function ActorCard({ actor, index }) {
  const [tapped, setTapped] = useState(false)
  const actionLabel = actor.page ? 'ดูโปรไฟล์' : 'ดูหน้าพรีวิว'

  return (
    <Motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.8 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="landing-card-wrapper"
    >
      <Link to={actor.route} className="landing-card-link">
        <Motion.div
          className="landing-card"
          whileHover={{ scale: 1.03, y: -6 }}
          whileTap={{ scale: 0.97 }}
          onTapStart={() => setTapped(true)}
          onTap={() => setTapped(false)}
          onTapCancel={() => setTapped(false)}
          style={{
            '--accent': actor.accentColor,
            '--accent-glow': actor.accentGlow,
          }}
        >
          {/* Card glow effect */}
          <div className="landing-card-glow" />

          {/* Image */}
          <div className="landing-card-image-container">
            <Motion.img
              src={actor.image}
              alt={actor.nameEn}
              className="landing-card-image"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
            <div className="landing-card-image-overlay" />
          </div>

          {/* Info */}
          <div className="landing-card-info">
            <Motion.p
              className="landing-card-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.2 }}
            >
              {actor.subtitle}
            </Motion.p>

            <h2 className="landing-card-name-th">{actor.nameTh}</h2>

            <p className="landing-card-name-cn">{actor.nameCn}</p>

            <div className="landing-card-action">
              <span>{actionLabel}</span>
              <Motion.svg
                className="landing-card-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: tapped ? 4 : 0 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Motion.svg>
            </div>
          </div>

          {/* Shimmer effect */}
          <div className="landing-card-shimmer" />
        </Motion.div>
      </Link>
    </Motion.div>
  )
}

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="landing-page">
      {/* Animated background */}
      <div className="landing-bg">
        <div className="landing-bg-gradient-1" />
        <div className="landing-bg-gradient-2" />
        <div className="landing-bg-gradient-3" />
      </div>

      <FloatingParticles />

      {/* Main content */}
      <div className="landing-content">
        {/* Header */}
        <Motion.header
          className="landing-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Motion.div
            className="landing-logo"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦
          </Motion.div>

          <Motion.p
            className="landing-tagline"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            CHINESE STARS FAN HUB
          </Motion.p>

          <Motion.h1
            className="landing-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            เลือกดาราที่คุณรัก
          </Motion.h1>

          <Motion.p
            className="landing-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            รวมข้อมูล ผลงาน แกลเลอรี และวิดีโอของนักแสดงจีนที่คุณชื่นชอบ
          </Motion.p>
        </Motion.header>

        {/* Actor Cards */}
        <AnimatePresence>
          {showContent && (
            <div className="landing-cards-grid">
              {actorDirectory.map((actor, i) => (
                <ActorCard key={actor.slug} actor={actor} index={i} />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Footer hint */}
        <Motion.footer
          className="landing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p>แตะที่การ์ดเพื่อเข้าสู่โปรไฟล์นักแสดง</p>
        </Motion.footer>
      </div>
    </div>
  )
}
