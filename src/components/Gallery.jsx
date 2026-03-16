import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const base = import.meta.env.BASE_URL

const images = [
  { src: `${base}images/artistic-cloud.jpg`, alt: 'จวีจิ้งอี - ลุคศิลปะเมฆ', desc: 'แฟชั่นถ่ายแบบ - ลุคอาร์ตติสติก' },
  { src: `${base}images/fred-red.jpg`, alt: 'จวีจิ้งอี - Fred Jewelry Red', desc: 'แคมเปญ Fred Jewelry - ชุดแดง' },
  { src: `${base}images/fred-black.jpg`, alt: 'จวีจิ้งอี - Fred Jewelry Black', desc: 'แคมเปญ Fred Jewelry - ชุดดำ' },
  { src: `${base}images/closeup-pink.jpg`, alt: 'จวีจิ้งอี - โคลสอัพ', desc: 'บิวตี้ช็อต - ลุคธรรมชาติ' },
  { src: `${base}images/traditional.jpg`, alt: 'จวีจิ้งอี - ชุดจีน', desc: 'ถ่ายแบบลุคจีนดั้งเดิม' },
  { src: `${base}images/lavender.jpg`, alt: 'จวีจิ้งอี - ลาเวนเดอร์', desc: 'แฟชั่นช็อต - ชุดลาเวนเดอร์' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Gallery</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-midnight">แกลเลอรี</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <Motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(img)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg shadow-rose-gold/5 aspect-[3/4]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{img.desc}</p>
                </div>
              </Motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p className="text-white/70 text-center mt-4 text-sm">{selected.desc}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
