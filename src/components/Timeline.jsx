import { motion as Motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const events = [
  {
    year: '1994',
    title: 'ถือกำเนิด',
    desc: 'เกิดวันที่ 18 มิถุนายน ณ เมืองซุ่ยหนิง มณฑลเสฉวน ประเทศจีน',
    color: 'bg-pink-400',
  },
  {
    year: '2010',
    title: 'ศึกษาดนตรี',
    desc: 'เข้าศึกษาเอกไวโอลินที่วิทยาลัยดนตรีเสฉวน พื้นฐานดนตรีคลาสสิกที่แข็งแกร่ง',
    color: 'bg-purple-400',
  },
  {
    year: '2013',
    title: 'เข้าร่วม SNH48',
    desc: 'ผ่านการออดิชั่นรุ่นที่ 2 ของ SNH48 เป็น 1 ใน 34 คนที่ได้รับเลือก เข้าประจำ Team NII',
    color: 'bg-blue-400',
  },
  {
    year: '2014',
    title: 'ฉายา 4,000 ปี',
    desc: 'สื่อญี่ปุ่นตั้งฉายา "ไอดอลหญิงที่พบได้เพียงครั้งเดียวในรอบ 4,000 ปี" สร้างกระแสไวรัลทั่วประเทศ',
    color: 'bg-rose-400',
  },
  {
    year: '2016-17',
    title: 'แชมป์เลือกตั้ง SNH48',
    desc: 'คว้าอันดับ 1 การเลือกตั้งทั่วไป SNH48 สองปีซ้อน สร้างประวัติศาสตร์ใหม่ของวง',
    color: 'bg-amber-400',
  },
  {
    year: '2018',
    title: 'จุดเปลี่ยนสู่นักแสดง',
    desc: 'แสดงนำใน Legend of Yun Xi คว้ารางวัล Best Actress จาก China Canada Television Festival',
    color: 'bg-emerald-400',
  },
  {
    year: '2019',
    title: 'นางพญางูขาว',
    desc: 'รับบท ไป๋ซู่เจิน ใน The Legend of White Snake ติด Forbes China 30 Under 30 Asia',
    color: 'bg-teal-400',
  },
  {
    year: '2020',
    title: 'เวที CCTV Gala',
    desc: 'ปรากฏตัวใน CCTV New Year\'s Gala รายการที่มีผู้ชมมากที่สุดในโลก ยืนยันสถานะระดับชาติ',
    color: 'bg-sky-400',
  },
  {
    year: '2024',
    title: 'อิสระทางอาชีพ',
    desc: 'สัญญากับ STAR48 สิ้นสุดลง เริ่มดำเนินงานอิสระเต็มรูปแบบผ่าน Ju JingYi Studio',
    color: 'bg-violet-400',
  },
  {
    year: '2025',
    title: 'ไอคอนแฟชั่นระดับโลก',
    desc: 'ขึ้นปก 5 นิตยสาร ยอดขายรวม 60 ล้านหยวน เป็นแอมบาสเดอร์ Fred และ MAC Cosmetics',
    color: 'bg-rose-gold',
  },
  {
    year: '2026',
    title: 'Veil of Shadows',
    desc: 'ซีรีส์ล่าสุด Veil of Shadows ออกอากาศ 16 มกราคม เสริมสถานะนักแสดงแถวหน้า',
    color: 'bg-red-400',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-gradient-to-b from-midnight to-deep-navy text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Timeline</p>
            <h2 className="text-4xl sm:text-5xl font-bold">เส้นทางชีวิต</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-gold/50 via-rose-gold/20 to-transparent sm:-translate-x-px" />

          {events.map((event, i) => (
            <ScrollReveal key={i} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}>
                <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <span className="text-rose-gold/80 text-sm tracking-wider">{event.year}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
                </div>

                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <Motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`w-4 h-4 rounded-full ${event.color} ring-4 ring-deep-navy shadow-lg`}
                  />
                </div>

                <div className="sm:hidden ml-10">
                  <span className="text-rose-gold/80 text-sm tracking-wider">{event.year}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-1">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
                </div>

                <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'pl-12' : 'pr-12'}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
