import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const dramas = [
  { year: 2026, title: 'Veil of Shadows', titleCn: '帷幕之影', role: 'นักแสดงนำ', type: 'ซีรีส์', platform: 'iQIYI', genre: 'ย้อนยุค' },
  { year: 2023, title: 'Legend of Anle', titleCn: '安乐传', role: 'ตี๋อันเล่อ', type: 'ซีรีส์', platform: 'Youku', genre: 'ย้อนยุค/โรแมนติก' },
  { year: 2023, title: 'Forever and Ever', titleCn: '一生一世', role: 'ซือเยี่ยน', type: 'ซีรีส์', platform: 'Tencent', genre: 'โรแมนติก' },
  { year: 2021, title: 'The Blooms at Ruyi Pavilion', titleCn: '如意芳霏', role: 'ฟู่หรง', type: 'ซีรีส์', platform: 'iQIYI', genre: 'ย้อนยุค/โรแมนติก' },
  { year: 2021, title: 'Rebirth For You', titleCn: '嘉南传', role: 'หลี่เชียน', type: 'ซีรีส์', platform: 'iQIYI', genre: 'ย้อนยุค' },
  { year: 2020, title: 'Please Give Me a Pair of Wings', titleCn: '请赐我一双翅膀', role: 'หลินจิ่วเกอ', type: 'ซีรีส์', platform: 'Hunan TV', genre: 'ดราม่า' },
  { year: 2019, title: 'The Legend of White Snake', titleCn: '新白娘子传奇', role: 'ไป๋ซู่เจิน', type: 'ซีรีส์', platform: 'iQIYI', genre: 'แฟนตาซี/ตำนาน' },
  { year: 2018, title: 'Legend of Yun Xi', titleCn: '芸汐传', role: 'หานอวิ๋นซี', type: 'ซีรีส์', platform: 'iQIYI', genre: 'ย้อนยุค/การแพทย์' },
  { year: 2017, title: 'Novoland: The Castle in the Sky', titleCn: '九州天空城', role: 'อี้ฝูหลิง', type: 'ซีรีส์', platform: 'iQIYI', genre: 'แฟนตาซี' },
]

const films = [
  { year: 2023, title: 'The Battle of Zhuolu', titleCn: '逐鹿之战', role: 'นักแสดง', type: 'ภาพยนตร์', genre: 'แอคชั่น' },
  { year: 2019, title: 'The Legend of White Snake (Film)', titleCn: '白蛇传奇', role: 'ไป๋ซู่เจิน', type: 'ภาพยนตร์', genre: 'แฟนตาซี' },
]

const filters = ['ทั้งหมด', 'ซีรีส์', 'ภาพยนตร์']

export default function Filmography() {
  const [filter, setFilter] = useState('ทั้งหมด')
  const allWorks = [...dramas, ...films].sort((a, b) => b.year - a.year)
  const filtered = filter === 'ทั้งหมด' ? allWorks : allWorks.filter(w => w.type === filter)

  return (
    <section id="filmography" className="py-24 sm:py-32 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Filmography</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-midnight">ผลงานการแสดง</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === f
                    ? 'bg-rose-gold text-white shadow-lg shadow-rose-gold/30'
                    : 'bg-white/70 text-midnight/60 hover:bg-rose-gold/10 hover:text-rose-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.div
                key={work.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-rose-gold/10 transition-all duration-500 border border-rose-gold/5 hover:border-rose-gold/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-white bg-rose-gold/80 px-3 py-1 rounded-full">
                    {work.year}
                  </span>
                  <span className="text-xs text-midnight/40 bg-midnight/5 px-3 py-1 rounded-full">
                    {work.genre}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-midnight group-hover:text-rose-gold transition-colors mb-1">
                  {work.title}
                </h3>
                <p className="text-sm text-midnight/40 mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {work.titleCn}
                </p>
                <div className="flex items-center justify-between text-xs text-midnight/50">
                  <span>บท: {work.role}</span>
                  {work.platform && <span className="text-rose-gold/60">{work.platform}</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
