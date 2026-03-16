import { Link } from 'react-router-dom'

export default function ActorDraftPage({ actor }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(183,110,121,0.12),_transparent_45%),linear-gradient(180deg,_#f9f3ef_0%,_#f3ece7_100%)] text-midnight">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-10 px-6 py-16 sm:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-midnight/10 bg-white/70 px-4 py-2 text-sm text-midnight/70 transition-colors hover:text-rose-gold"
          >
            <span aria-hidden="true">←</span>
            กลับหน้าหลัก
          </Link>
          <span className="rounded-full bg-midnight/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-midnight/40">
            Draft Page
          </span>
        </div>

        <div className="grid items-center gap-10 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(32,34,52,0.08)] backdrop-blur xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-rose-gold/80">
              Actor Registry Preview
            </p>
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">{actor?.nameTh ?? 'นักแสดงใหม่'}</h1>
              <p className="mt-3 text-xl tracking-[0.2em] text-midnight/55">{actor?.nameCn}</p>
              <p className="mt-2 text-base uppercase tracking-[0.3em] text-midnight/45">
                {actor?.nameEn}
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-midnight/70">
              หน้านี้ถูกสร้างจากระบบ fallback ของ `actor registry` เพื่อให้คุณสามารถลงทะเบียนนักแสดงใหม่
              ได้ก่อน แม้หน้าเนื้อหาฉบับเต็มจะยังทำไม่เสร็จ
            </p>
            <div className="space-y-3 rounded-2xl bg-midnight/3 p-5 text-sm text-midnight/65">
              <p>สถานะ: {actor?.status === 'ready' ? 'พร้อมใช้งาน' : 'กำลังจัดทำ'}</p>
              <p>เส้นทาง URL: {actor?.route}</p>
              <p>คำอธิบายย่อ: {actor?.teaser ?? actor?.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-midnight/55">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">1. เพิ่มไฟล์สื่อใน `public/`</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">2. สร้าง page component</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">3. ลงทะเบียนใน `actorDirectory`</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] bg-midnight/10">
            <img
              src={actor?.image}
              alt={actor?.nameEn ?? 'Actor preview'}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
