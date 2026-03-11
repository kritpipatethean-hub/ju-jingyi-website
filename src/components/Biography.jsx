import ScrollReveal from './ScrollReveal'

const stats = [
  { label: 'วันเกิด', value: '18 มิ.ย. 1994' },
  { label: 'บ้านเกิด', value: 'ซุ่ยหนิง, เสฉวน' },
  { label: 'ส่วนสูง', value: '159 ซม.' },
  { label: 'กรุ๊ปเลือด', value: 'O' },
  { label: 'ราศี', value: 'เมถุน (Gemini)' },
  { label: 'ปีนักษัตร', value: 'ปีจอ' },
]

const nicknames = ['เสี่ยวจวี (小鞠)', 'คิคุ (Kiku)', 'Cecily Ju']

export default function Biography() {
  return (
    <section id="biography" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Biography</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-midnight">ประวัติส่วนตัว</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-gold/20 to-soft-gold/20 rounded-3xl blur-2xl" />
              <img
                src={`${import.meta.env.BASE_URL}images/closeup-pink.jpg`}
                alt="จวีจิ้งอี"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-rose-gold/10 object-cover aspect-[3/4]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-midnight">
                จวีจิ้งอี <span className="text-rose-gold/60 font-normal">(鞠婧祎)</span>
              </h3>

              <p className="text-midnight/70 leading-relaxed">
                <strong className="text-midnight">จวีจิ้งอี (Ju Jingyi)</strong> เกิดเมื่อวันที่ 18 มิถุนายน ค.ศ. 1994
                ณ เมืองซุ่ยหนิง มณฑลเสฉวน ประเทศจีน เป็นนักแสดง นักร้อง และอดีตสมาชิกวงไอดอล SNH48
                เธอได้รับฉายาจากสื่อญี่ปุ่นว่า &ldquo;ไอดอลหญิงที่พบได้เพียงครั้งเดียวในรอบ 4,000 ปี&rdquo;
              </p>

              <p className="text-midnight/70 leading-relaxed">
                ก่อนเข้าวงการบันเทิง เธอศึกษาวิชาเอกไวโอลินที่วิทยาลัยดนตรีเสฉวน
                ก่อนตัดสินใจลาออกเพื่อเข้าร่วมออดิชั่นกับ SNH48 ในปี 2013
                ปัจจุบันเธอเป็นหนึ่งในนักแสดงแถวหน้าที่มีผลงานซีรีส์ย้อนยุคและแฟนตาซีมากมาย
                รวมถึงเป็นแบรนด์แอมบาสเดอร์ของแบรนด์หรูระดับโลก
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {nicknames.map((n) => (
                  <span
                    key={n}
                    className="px-4 py-1.5 bg-rose-gold/10 text-rose-gold text-sm rounded-full"
                  >
                    {n}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center border border-rose-gold/5">
                    <p className="text-xs text-midnight/40 uppercase tracking-wider mb-1">{s.label}</p>
                    <p className="text-sm font-semibold text-midnight">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3 text-sm text-midnight/50">
                <span>ภาษา: จีนกลาง, เกาหลี, อังกฤษ</span>
                <span>&middot;</span>
                <span>Weibo: 31.7M+ ผู้ติดตาม</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
