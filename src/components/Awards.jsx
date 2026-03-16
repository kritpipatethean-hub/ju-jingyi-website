import { motion as Motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const awards = [
  {
    year: 2018,
    title: 'Best Actress (Web Series)',
    event: 'China Canada International Television Festival',
    work: 'Legend of Yun Xi',
    icon: '🏆',
  },
  {
    year: 2019,
    title: 'Forbes China 30 Under 30 Asia',
    event: 'Forbes',
    work: 'อิทธิพลทางวัฒนธรรมและธุรกิจ',
    icon: '⭐',
  },
  {
    year: 2019,
    title: 'Forbes China Celebrity 100',
    event: 'Forbes China - อันดับ 94',
    work: 'ภาพรวมความสำเร็จทางอาชีพ',
    icon: '📊',
  },
  {
    year: 2020,
    title: 'Forbes China Celebrity 100',
    event: 'Forbes China - อันดับ 84',
    work: 'ขยับขึ้น 10 อันดับ',
    icon: '📈',
  },
  {
    year: 2016,
    title: 'อันดับ 1 SNH48 General Election',
    event: 'SNH48 General Election ครั้งที่ 3',
    work: 'คะแนนโหวตสูงสุดในประวัติศาสตร์ (ขณะนั้น)',
    icon: '👑',
  },
  {
    year: 2017,
    title: 'อันดับ 1 SNH48 General Election',
    event: 'SNH48 General Election ครั้งที่ 4',
    work: 'แชมป์สองปีซ้อน สร้างประวัติศาสตร์',
    icon: '👑',
  },
  {
    year: 2025,
    title: 'COSMO Cover Sales Record',
    event: 'Cosmopolitan China',
    work: 'ทำลายสถิติยอดขายปกนิตยสาร 560,000 เล่มใน 24 ชม.',
    icon: '📰',
  },
  {
    year: 2025,
    title: 'Brand Ambassador - Fred Jewelry',
    event: 'Fred (France)',
    work: 'แบรนด์แอมบาสเดอร์ประจำประเทศจีน',
    icon: '💎',
  },
  {
    year: 2025,
    title: 'Brand Face - MAC Cosmetics',
    event: 'MAC Cosmetics',
    work: 'โฉมหน้าแบรนด์ ลุค Warrior Goddess Makeup',
    icon: '💄',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Awards & Achievements</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-midnight">รางวัลและเกียรติยศ</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <Motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-rose-gold/10 border border-rose-gold/5 hover:border-rose-gold/20 transition-shadow duration-500 h-full"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{award.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-white bg-rose-gold/80 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-midnight text-sm leading-snug mb-1">
                      {award.title}
                    </h3>
                    <p className="text-xs text-rose-gold/70 mb-2">{award.event}</p>
                    <p className="text-xs text-midnight/50 leading-relaxed">{award.work}</p>
                  </div>
                </div>
              </Motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
