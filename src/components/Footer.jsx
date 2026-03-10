import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                鞠婧祎
              </h3>
              <p className="text-sm tracking-[0.3em] uppercase text-rose-gold/60">Ju Jingyi Fan Hub</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>Weibo: 31.7M+</span>
              <span>Douyin: @jujingyi_official</span>
              <span>แฟนคลับ: Miju (蜜橘)</span>
              <span>สีประจำตัว: สีน้ำเงิน</span>
            </div>

            <div className="flex justify-center gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500" title="สีประจำตัว" />
              <div className="w-3 h-3 rounded-full bg-rose-gold" title="โรสโกลด์" />
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-white/20">
              <p>เว็บไซต์นี้จัดทำโดยแฟนคลับ เพื่อแฟนคลับ ไม่ใช่เว็บทางการ</p>
              <span className="hidden sm:inline">&middot;</span>
              <p>ข้อมูลอ้างอิงจากแหล่งข้อมูลสาธารณะ</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
