import ScrollReveal from './ScrollReveal'

const albums = [
  { title: 'MY', titleCn: 'MY', year: 2018, type: 'EP' },
  { title: 'Mindset', titleCn: '知我', year: 2023, type: 'EP' },
  { title: 'IX', titleCn: 'IX', year: 2024, type: 'Single Album' },
]

const osts = [
  { title: 'The Fallen Flowers Turn into Mud', titleCn: '落花成泥', drama: 'Legend of Yun Xi', year: 2018 },
  { title: 'Sigh of Yunxi', titleCn: '叹云兮', drama: 'Legend of Yun Xi', year: 2018 },
  { title: "A Millennium's Wait for a Return", titleCn: '千年等一回', drama: 'The Legend of White Snake', year: 2019 },
  { title: 'Passing Feelings', titleCn: '渡情', drama: 'The Legend of White Snake', year: 2019 },
  { title: 'Ancient Painting', titleCn: '古画', drama: 'The Blooms at Ruyi Pavilion', year: 2020 },
  { title: 'The World is at Peace', titleCn: '天下清', drama: "Heaven Official's Blessing", year: 2021 },
  { title: 'Never Part Again', titleCn: '莫离', drama: 'Rebirth For You', year: 2021 },
  { title: 'Dew Dissipates Before Morning Light', titleCn: '', drama: 'Veil of Shadows', year: 2026 },
]

const singles = [
  { title: 'Drunk Feishuang', titleCn: '醉飞霜', year: 2016 },
  { title: 'RAIN', titleCn: '分裂时差', year: 2017 },
  { title: 'Loneliness and Poetry', titleCn: '孤独与诗', year: 2019 },
  { title: 'Love Lasts Forever', titleCn: '爱未央', year: 2020 },
  { title: 'Past Perfect', titleCn: '过去完成时', year: 2021 },
  { title: 'Like I Do', titleCn: 'Like I Do', year: 2022 },
  { title: 'Sakura', titleCn: '花', year: 2023 },
  { title: 'Sleepless Sunset', titleCn: '落日未眠', year: 2025 },
]

export default function Music() {
  return (
    <section id="music" className="py-24 sm:py-32 bg-gradient-to-b from-deep-navy to-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Discography</p>
            <h2 className="text-4xl sm:text-5xl font-bold">ผลงานเพลง</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Albums */}
          <ScrollReveal delay={0}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-gold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
                อัลบั้ม / EP
              </h3>
              {albums.map((a) => (
                <div
                  key={a.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:border-rose-gold/30 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{a.title}</h4>
                      {a.titleCn !== a.title && (
                        <p className="text-sm text-white/40">{a.titleCn}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-rose-gold bg-rose-gold/10 px-2 py-1 rounded-full">{a.type}</span>
                      <p className="text-xs text-white/30 mt-1">{a.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* OSTs */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-gold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm-1 4h1v2H4V9zm1 4H4v2h1v-2z" clipRule="evenodd" />
                </svg>
                เพลงประกอบซีรีส์
              </h3>
              {osts.map((o) => (
                <div
                  key={o.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-rose-gold/30 transition-all duration-300 hover:bg-white/10"
                >
                  <h4 className="font-medium text-sm">{o.title}</h4>
                  {o.titleCn && <p className="text-xs text-white/40">{o.titleCn}</p>}
                  <p className="text-xs text-rose-gold/60 mt-1">{o.drama} ({o.year})</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Singles */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-gold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                ซิงเกิล
              </h3>
              {singles.map((s) => (
                <div
                  key={s.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-rose-gold/30 transition-all duration-300 hover:bg-white/10 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium text-sm">{s.title}</h4>
                    <p className="text-xs text-white/40">{s.titleCn}</p>
                  </div>
                  <span className="text-xs text-white/30">{s.year}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
