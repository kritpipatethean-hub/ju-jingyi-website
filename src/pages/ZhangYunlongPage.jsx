import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ZhangYunlongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1a3e] to-[#0d1b2a] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md"
      >
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-400/30 shadow-2xl shadow-blue-500/20">
          <img
            src="/images/zhang-yunlong.jpg"
            alt="Zhang Yunlong"
            className="w-full h-full object-cover"
          />
        </div>

        <h1
          className="text-white text-4xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          จางอวิ๋นหลง
        </h1>

        <p
          className="text-white/50 text-xl tracking-widest mb-2"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          张云龙
        </p>

        <p className="text-blue-300/60 text-sm tracking-wider uppercase mb-8">
          Zhang Yunlong
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
          <div className="text-5xl mb-4">🚧</div>
          <h2 className="text-white/80 text-lg font-medium mb-2">กำลังจัดทำ...</h2>
          <p className="text-white/40 text-sm leading-relaxed">
            หน้าข้อมูลของจางอวิ๋นหลงกำลังอยู่ระหว่างการจัดทำ
            <br />
            กรุณากลับมาเยี่ยมชมอีกครั้งเร็วๆ นี้
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-300/70 hover:text-blue-300 transition-colors text-sm tracking-wide"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          กลับหน้าหลัก
        </Link>
      </motion.div>
    </div>
  )
}
