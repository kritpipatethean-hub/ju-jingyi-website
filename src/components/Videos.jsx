import ScrollReveal from './ScrollReveal'

const base = import.meta.env.BASE_URL

const videos = [
  {
    src: `${base}videos/10345266260427210813.mov`,
    title: 'คลิปพิเศษ #1',
    desc: 'คลิปรวมภาพจวีจิ้งอี',
  },
  {
    src: `${base}videos/ScreenRecording_02-15-2569 15-07-31_1.mov`,
    title: 'คลิปพิเศษ #2',
    desc: 'ช่วงเวลาพิเศษของจวีจิ้งอี',
  },
  {
    src: `${base}videos/ScreenRecording_02-18-2569 12-14-46_1.mov`,
    title: 'คลิปพิเศษ #3',
    desc: 'ไฮไลท์ผลงาน',
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-24 sm:py-32 bg-gradient-to-b from-midnight to-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-rose-gold text-sm tracking-[0.3em] uppercase mb-3">Videos</p>
            <h2 className="text-4xl sm:text-5xl font-bold">วิดีโอ</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-rose-gold/30 transition-all duration-500 group">
                <div className="aspect-video bg-black/50 relative">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    playsInline
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1 group-hover:text-rose-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-white/40">{video.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
