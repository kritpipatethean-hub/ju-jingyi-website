import { motion as Motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/artistic-cloud.jpg`}
          alt="Ju Jingyi"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-deep-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-32 px-6 sm:px-12 lg:px-20">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/60 text-sm tracking-[0.4em] uppercase mb-4"
          >
            นักแสดง &middot; นักร้อง &middot; ไอคอนแฟชั่น
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            จวีจิ้งอี
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/50 text-2xl sm:text-3xl tracking-widest font-light"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            鞠婧祎
          </Motion.p>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-white/40 text-sm mt-6 max-w-md leading-relaxed"
          >
            &ldquo;ไอดอลหญิงที่พบได้เพียงครั้งเดียวในรอบ 4,000 ปี&rdquo;
            &mdash; จากเวทีไอดอลสู่นักแสดงระดับแนวหน้าของจีน
          </Motion.p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#biography" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
            <span className="text-xs tracking-widest">SCROLL</span>
            <Motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Motion.div>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}
