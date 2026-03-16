import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './ZhangYunlongPage.css'

const base = import.meta.env.BASE_URL

const sectionLinks = [
  { id: 'hero', label: 'เปิดเรื่อง' },
  { id: 'biography', label: 'ประวัติ' },
  { id: 'journey', label: 'เส้นทาง' },
  { id: 'spotlight', label: 'บทบาทเด่น' },
  { id: 'works', label: 'ผลงาน' },
  { id: 'stages', label: 'วาไรตี้' },
  { id: 'awards', label: 'รางวัล' },
  { id: 'gallery', label: 'แกลเลอรี' },
  { id: 'videos', label: 'วิดีโอ' },
]

const heroStats = [
  { label: 'อดีตนักฟุตบอล', value: '13 ปี' },
  { label: 'สำเร็จการศึกษา', value: 'BFA 2013' },
  { label: 'ต้นสังกัด', value: 'Jay Walk Studio' },
  { label: 'เวทีระดับชาติ', value: 'CCTV Gala' },
]

const profileStats = [
  { label: 'วันเกิด', value: '2 มีนาคม 1988' },
  { label: 'บ้านเกิด', value: 'ต้าเหลียน, เหลียวหนิง' },
  { label: 'ส่วนสูง', value: '185 ซม.' },
  { label: 'น้ำหนัก', value: '73 กก.' },
  { label: 'กรุ๊ปเลือด', value: 'B' },
  { label: 'ราศี', value: 'มีน' },
]

const careerPhases = [
  {
    years: '1988-2012',
    title: 'จากสนามฟุตบอลสู่เวทีการแสดง',
    summary:
      'เติบโตในต้าเหลียน เมืองที่ขึ้นชื่อเรื่องฟุตบอล ใช้ชีวิตแบบนักกีฬาเยาวชนนาน 13 ปี ก่อนพลิกเส้นทางเข้าสู่ Beijing Film Academy และคว้ารางวัลนักแสดงนำชายยอดเยี่ยมจากภาพยนตร์สั้น Love Express',
  },
  {
    years: '2013-2015',
    title: 'วางรากฐานในสื่อกระแสหลัก',
    summary:
      'เดบิวต์อย่างเป็นทางการกับ V Love ภายใต้การผลักดันของหยางมี่ และสร้างการจดจำระดับประเทศจาก Swords of Legends, A Different Kind of Pretty Man และผลงานภาพยนตร์วัยรุ่น',
  },
  {
    years: '2016-2020',
    title: 'ก้าวสู่พระเอกเต็มตัว',
    summary:
      'Hero Dog 2 ทำให้เขาขึ้นเป็นนักแสดงนำอย่างชัดเจน ตามด้วย The Interpreter, Mr. Pride vs Miss Prejudice และจุดพีกด้านชื่อเสียงจาก My Roommate Is a Detective',
  },
  {
    years: '2021-2026',
    title: 'ขยายพิสัยบทและมุ่งสู่โปรเจกต์พรีเมียม',
    summary:
      'ต่อยอดด้วย Tears in Heaven, Ancient Love Poetry, Pledge of Allegiance, The Furthest Distance และก้าวไปสู่โปรเจกต์ขนาดใหญ่ในยุคใหม่อย่าง My Special Girl, Love in Pavilion และ Unnatural Fire',
  },
]

const spotlightRoles = [
  {
    id: 'qiao',
    badge: 'จุดเปลี่ยนระดับเอเชีย',
    title: 'เฉียวฉู่เซิง',
    subtitle: 'My Roommate Is a Detective (2020)',
    image: `${base}images/zhang-yunlong/zhang-02.jpg`,
    summary:
      'ตัวละครอดีตนักเลงที่ผันตัวมาเป็นสารวัตรตำรวจ ผู้มีทั้งความเด็ดขาด ความดิบ และจิตใจที่ยึดโยงกับความยุติธรรม บทนี้ทำให้จางอวิ๋นหลงถูกมองใหม่ในฐานะนักแสดงที่ควบคุมโทนอารมณ์ซับซ้อนได้อย่างหนักแน่น',
    bullets: [
      'เคมีแบบ bromance กับหูอี้เทียนช่วยผลักซีรีส์ให้ดังข้ามภูมิภาค',
      'ความสำเร็จของบทนี้นำไปสู่รางวัล Leaping Actor of the Year',
      'เป็นผลงานที่ทำให้ชื่อของเขาแข็งแรงในตลาดเอเชียตะวันออกเฉียงใต้',
    ],
  },
  {
    id: 'qin',
    badge: 'บทวิเคราะห์เชิงจิตวิทยา',
    title: 'ฉินอวิ๋นเซิง',
    subtitle: 'The Furthest Distance (2023)',
    image: `${base}images/zhang-yunlong/zhang-03.jpg`,
    summary:
      'ศัลยแพทย์ทรวงอกและแพทย์ฉุกเฉินที่ซ่อนบาดแผลจากการสูญเสียไว้ลึกมาก บ้านกระจกริมทะเลกลายเป็นสัญลักษณ์ของความทรงจำ ความรู้สึกผิดของคนเป็น และการค่อย ๆ เรียนรู้ที่จะเปิดใจให้กับความรักครั้งใหม่',
    bullets: [
      'จุดเด่นของบทนี้คือความเปราะบางที่ถูกกดไว้ใต้บุคลิกมืออาชีพ',
      'ฉากสารภาพรักกลายเป็นโมเมนต์ไวรัลทางอารมณ์ของซีรีส์',
      'เป็นบทที่แสดงให้เห็นว่าจางอวิ๋นหลงไปได้ไกลกว่าบทพระเอกหล่อทั่วไป',
    ],
  },
  {
    id: 'wangquan',
    badge: 'ยุคโปรเจกต์พรีเมียม',
    title: 'หวังเฉวียนหงเย่',
    subtitle: 'Love in Pavilion (2025)',
    image: `${base}images/zhang-yunlong/zhang-04.jpg`,
    summary:
      'โปรเจกต์ที่เอกสารต้นฉบับมองว่าเป็นไฮไลต์สำคัญของช่วง 2025 เพราะเป็นงานระดับ S-Tier ที่รวมพลังของ IP ดัง นักแสดงระดับแนวหน้า และอารมณ์แบบจีนโบราณที่ช่วยตอกย้ำความยืดหยุ่นของเขาในสายคอสตูมดราม่า',
    bullets: [
      'รับบทนำร่วมในโปรเจกต์ที่ถูกคาดหวังสูงมาก',
      'มีเพลงประกอบ Zhu Ye ที่ขยายภาพลักษณ์ด้านดนตรีของเขา',
      'สะท้อนการขยับจากนักแสดงที่มั่นคง ไปสู่งานระดับเรือธงของตลาด',
    ],
  },
]

const works = [
  {
    year: '2014',
    title: 'Swords of Legends',
    titleCn: '古剑奇谭',
    role: 'เฮยเย่า',
    category: 'ซีรีส์เด่น',
    note: 'ซีรีส์แฟนตาซีที่ทำให้เขาเริ่มเป็นที่รู้จักในวงกว้าง',
  },
  {
    year: '2016',
    title: 'Hero Dog 2',
    titleCn: '神犬小七第二季',
    role: 'เปาอวี่',
    category: 'ซีรีส์เด่น',
    note: 'บทนำเต็มตัวครั้งแรก และขึ้นเป็นแชมป์เรตติ้งช่วงออกอากาศ',
  },
  {
    year: '2016',
    title: 'The Interpreter',
    titleCn: '亲爱的翻译官',
    role: 'หวังซวี่ตง',
    category: 'ซีรีส์เด่น',
    note: 'ย้ำภาพลักษณ์พระเอกสายโรแมนติกในซีรีส์กระแสหลัก',
  },
  {
    year: '2017',
    title: 'Mr. Pride vs Miss Prejudice',
    titleCn: '傲娇与偏见',
    role: 'จูโหว',
    category: 'ภาพยนตร์',
    note: 'บทนำคู่กับตี๋ลี่เร่อปา และเป็นผลงานที่พาเขาไปรับรางวัล Best Chivalry',
  },
  {
    year: '2019',
    title: 'S.W.A.T.',
    titleCn: '特警队',
    role: 'จ้าวไห่หลง',
    category: 'ภาพยนตร์',
    note: 'งานแอคชั่นที่ดึงความแข็งแรงจากพื้นฐานนักกีฬาออกมาเต็มที่',
  },
  {
    year: '2020',
    title: 'My Roommate Is a Detective',
    titleCn: '民国奇探',
    role: 'เฉียวฉู่เซิง',
    category: 'ซีรีส์เด่น',
    note: 'ผลงานชิ้นเอกที่ขยายชื่อเสียงของเขาในภูมิภาคเอเชีย',
  },
  {
    year: '2021',
    title: 'Tears in Heaven',
    titleCn: '海上繁花',
    role: 'เส้าเจิ้นหรง',
    category: 'ซีรีส์เด่น',
    note: 'บทอบอุ่นปนเศร้าที่ได้รับคำชมด้านอารมณ์อย่างสูง',
  },
  {
    year: '2023',
    title: 'Pledge of Allegiance',
    titleCn: '山河之影',
    role: 'หลี่อู้',
    category: 'ซีรีส์เด่น',
    note: 'คอสตูมดราม่าเข้มข้นที่เด่นด้านองค์ประกอบศิลป์และการเมือง',
  },
  {
    year: '2023',
    title: 'The Furthest Distance',
    titleCn: '最遥远的距离',
    role: 'ฉินอวิ๋นเซิง',
    category: 'ซีรีส์เด่น',
    note: 'บทโรแมนติกที่เจาะลึกบาดแผลและการเยียวยาใจ',
  },
  {
    year: '2024',
    title: 'My Special Girl',
    titleCn: '独一有二的她',
    role: 'กู้จิ่วหลี่',
    category: 'ซีรีส์เด่น',
    note: 'ซีรีส์โรแมนติกคอเมดี้ยุคดิจิทัลที่สะท้อนการปรับตัวของเขา',
  },
  {
    year: '2025',
    title: 'Love in Pavilion',
    titleCn: '淮水竹亭',
    role: 'หวังเฉวียนหงเย่',
    category: 'อนาคต',
    note: 'โปรเจกต์ S-Tier ที่ถูกจับตาในฐานะก้าวสำคัญของเขา',
  },
  {
    year: '2025',
    title: 'Unnatural Fire',
    titleCn: '燃罪',
    role: 'สวีถงเซิง',
    category: 'อนาคต',
    note: 'งานสืบสวนที่เน้นความสมจริงและความเข้มของตัวละคร',
  },
  {
    year: '2026',
    title: 'Yun Chu Ling',
    titleCn: '云初令',
    role: 'ฉู่อี้',
    category: 'อนาคต',
    note: 'งานโรแมนติกย้อนยุคที่ตอกย้ำความคล่องตัวในสายคอสตูมดราม่า',
  },
]

const stageMoments = [
  {
    title: 'Call Me by Fire ซีซัน 1 และ 2',
    detail:
      'เวทีที่ขยายฐานแฟนจากผู้ชมละครไปสู่กลุ่มคนดูรายการเพลงและวาไรตี้ เผยด้านความพยายามในการฝึกร้อง เต้น และทำงานร่วมกับศิลปินหลากรุ่น',
  },
  {
    title: 'Negotiator Mode',
    detail:
      'เอกสารต้นฉบับชี้ว่าเขาถูกจดจำเรื่องไหวพริบและการเจรจาต่อรองในรายการ เป็นคาแรกเตอร์ที่ทำให้ผู้ชมเห็นความฉลาดและความนิ่งนอกบทละคร',
  },
  {
    title: 'CCTV Spring Festival Gala',
    detail:
      'ได้ขึ้นเวทีระดับชาติอย่างต่อเนื่องในปี 2019, 2021 และมีแผนเข้าร่วมอีกครั้งในปี 2026 ซึ่งสะท้อนสถานะการยอมรับในวงกว้าง',
  },
]

const ostTracks = [
  {
    year: '2013',
    title: 'First Love',
    titleCn: '初恋',
    note: 'เพลงประกอบภาพยนตร์สั้น Love Express',
  },
  {
    year: '2014',
    title: 'Our Generation / Colorful Youth',
    titleCn: '我们的时代 / 青春不留白',
    note: 'เพลงจากซีรีส์ V Love ที่ให้พลังวัยรุ่นชัดเจน',
  },
  {
    year: '2017',
    title: 'Mr. Pride vs Miss Prejudice',
    titleCn: '傲娇与偏见',
    note: 'เพลงประกอบภาพยนตร์ที่ร้องคู่กับตี๋ลี่เร่อปา',
  },
  {
    year: '2019',
    title: 'It is Raining, Where are You',
    titleCn: '下雨了，你在哪里',
    note: 'เพลงรักจาก My Poseidon ที่ให้อารมณ์โหยหา',
  },
  {
    year: '2023',
    title: 'Air of Youth',
    titleCn: '少年气',
    note: 'เพลงประกอบ Pledge of Allegiance ที่เน้นพลังแห่งการต่อสู้',
  },
  {
    year: '2025',
    title: 'Zhu Ye',
    titleCn: '竹夜',
    note: 'OST ของ Love in Pavilion ที่มีกลิ่นอายจีนโบราณชัดเจน',
  },
]

const awards = [
  {
    year: '2012',
    title: 'Best Actor',
    event: 'Beijing Student Original Film Competition ครั้งที่ 21',
    note: 'จากภาพยนตร์สั้น Love Express',
  },
  {
    year: '2014',
    title: 'Newcomer Award',
    event: 'Fashion Power Awards',
    note: 'ยืนยันการเปิดตัวอย่างน่าจับตาในสายบันเทิง',
  },
  {
    year: '2016',
    title: 'Best Chivalry',
    event: 'China Britain Film Festival',
    note: 'จาก Mr. Pride vs Miss Prejudice',
  },
  {
    year: '2016',
    title: 'Most Popular Actor',
    event: 'Chinese Campus Art Glory Festival',
    note: 'สะท้อนความนิยมในกลุ่มผู้ชมวัยเรียน',
  },
  {
    year: '2017',
    title: 'Trend Actor',
    event: "Men's UNO YOUNG Awards",
    note: 'ตอกย้ำภาพลักษณ์นักแสดงชายที่เป็นที่จับตา',
  },
  {
    year: '2019',
    title: 'Youth Role Model',
    event: 'CCTV Spring Gala',
    note: 'ภาพลักษณ์ศิลปินที่ได้รับการยอมรับในระดับสาธารณะ',
  },
  {
    year: '2020',
    title: 'Leaping Actor of the Year',
    event: 'Golden Bud - The 5th Network Film And Television Festival',
    note: 'ผลจากแรงส่งของ My Roommate Is a Detective',
  },
  {
    year: '2025',
    title: 'Breakthrough Actor of the Year - Dramas',
    event: 'iQIYI Scream Night',
    note: 'เอกสารต้นฉบับใช้รางวัลนี้เพื่อชี้ภาพการเติบโตในยุคโปรเจกต์ใหญ่',
  },
]

const galleryImages = [
  {
    src: `${base}images/zhang-yunlong/zhang-hero.jpg`,
    alt: 'จางอวิ๋นหลง พอร์ตเทรตหลัก',
    caption: 'พอร์ตเทรตหลักที่ให้ภาพลักษณ์สุขุมและคมชัด',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-02.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 2',
    caption: 'ลุคกึ่งแฟชั่นที่ขับความนิ่งแบบนักแสดงรุ่นพี่',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-03.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 3',
    caption: 'โคลสอัพที่เหมาะกับโทนดราม่าและบทบาททางอารมณ์',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-04.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 4',
    caption: 'จังหวะภาพนิ่งที่ให้คาแรกเตอร์สุขุม ละเอียด และทันสมัย',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-05.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 5',
    caption: 'อีกมุมของภาพลักษณ์นักแสดงที่พร้อมไปได้หลายแนว',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-06.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 6',
    caption: 'งานพอร์ตเทรตที่เน้นความนิ่งและจังหวะสายตา',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-07.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 7',
    caption: 'เฟรมแฟชั่นที่เติมมิติความร่วมสมัยให้หน้าเว็บ',
  },
  {
    src: `${base}images/zhang-yunlong/zhang-08.jpg`,
    alt: 'จางอวิ๋นหลง ภาพที่ 8',
    caption: 'ภาพปิดท้ายที่ช่วยขยายบรรยากาศของแกลเลอรีให้หลากหลาย',
  },
]

const videos = [
  {
    src: `${base}videos/zhang-yunlong/zhang-01.mov`,
    title: 'คลิปพิเศษ #1',
    desc: 'ชุดภาพเคลื่อนไหวของจางอวิ๋นหลงในโทนอบอุ่นและละมุน',
  },
  {
    src: `${base}videos/zhang-yunlong/zhang-02.mov`,
    title: 'คลิปพิเศษ #2',
    desc: 'บรรยากาศที่ดึงภาพลักษณ์ความนิ่งและเสน่ห์แบบผู้ใหญ่',
  },
  {
    src: `${base}videos/zhang-yunlong/zhang-03.mov`,
    title: 'คลิปพิเศษ #3',
    desc: 'อีกหนึ่งมู้ดวิดีโอที่ช่วยให้หน้าโปรไฟล์มีจังหวะการรับชมมากขึ้น',
  },
]

const workFilters = ['ทั้งหมด', 'ซีรีส์เด่น', 'ภาพยนตร์', 'อนาคต']

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="zy-section-heading">
      <p className="zy-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="zy-section-description">{description}</p>}
    </div>
  )
}

export default function ZhangYunlongPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedRole, setSelectedRole] = useState('qiao')
  const [workFilter, setWorkFilter] = useState('ทั้งหมด')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = sectionLinks
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -35% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  const currentRole = spotlightRoles.find((role) => role.id === selectedRole) ?? spotlightRoles[0]
  const filteredWorks = workFilter === 'ทั้งหมด'
    ? works
    : works.filter((work) => work.category === workFilter)

  return (
    <div className="zy-page-shell">
      <div
        className="zy-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className="zy-topbar">
        <div className="zy-topbar-inner">
          <Link to="/" className="zy-back-link">
            <span className="zy-back-icon">←</span>
            กลับหน้าหลัก
          </Link>

          <div className="zy-topbar-brand">
            <span className="zy-topbar-cn">张云龙</span>
            <span className="zy-topbar-en">Leon Zhang</span>
          </div>

          <nav className="zy-nav-scroller" aria-label="Section navigation">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`zy-nav-pill ${activeSection === section.id ? 'is-active' : ''}`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="zy-page">
        <section id="hero" className="zy-hero">
          <div className="zy-hero-glow zy-hero-glow-left" />
          <div className="zy-hero-glow zy-hero-glow-right" />

          <div className="zy-hero-grid">
            <div className="zy-hero-copy">
              <p className="zy-kicker">Athlete · Actor · Variety Star</p>
              <h1>จางอวิ๋นหลง</h1>
              <p className="zy-name-cn">张云龙</p>
              <p className="zy-name-en">Leon Zhang</p>
              <p className="zy-hero-text">
                จากเมืองฟุตบอลอย่างต้าเหลียน สู่ Beijing Film Academy และต่อยอดไปเป็นนักแสดง
                ที่ขยับบทบาทได้ตั้งแต่ดราม่าสืบสวน คอสตูมซีรีส์ ไปจนถึงเวทีวาไรตี้ระดับประเทศ
              </p>

              <div className="zy-hero-actions">
                <a href="#biography" className="zy-primary-link">อ่านประวัติฉบับเต็ม</a>
                <a href="#spotlight" className="zy-secondary-link">ดูบทบาทที่เปลี่ยนภาพจำ</a>
              </div>

              <div className="zy-hero-stat-row">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="zy-hero-stat">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="zy-hero-stage">
              <div className="zy-orbit zy-orbit-one" />
              <div className="zy-orbit zy-orbit-two" />
              <div className="zy-portrait-panel">
                <img
                  src={`${base}images/zhang-yunlong/zhang-hero.jpg`}
                  alt="จางอวิ๋นหลง"
                  className="zy-portrait-image"
                />
              </div>

              <div className="zy-floating-note zy-note-top">
                <span>ต้นทุนเดิม</span>
                <strong>13 ปีในสนามฟุตบอล</strong>
              </div>

              <div className="zy-floating-note zy-note-bottom">
                <span>รางวัลที่เปิดทาง</span>
                <strong>Best Actor จาก Love Express</strong>
              </div>

              <div className="zy-mini-strip">
                <img src={`${base}images/zhang-yunlong/zhang-05.jpg`} alt="จางอวิ๋นหลง มุมภาพที่ 1" />
                <img src={`${base}images/zhang-yunlong/zhang-06.jpg`} alt="จางอวิ๋นหลง มุมภาพที่ 2" />
              </div>
            </div>
          </div>

          <a href="#biography" className="zy-scroll-hint">
            เลื่อนลงเพื่ออ่านต่อ
          </a>
        </section>

        <section id="biography" className="zy-section">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Biography"
                title="นักแสดงที่พกกรอบคิดแบบนักกีฬา"
                description="แก่นของจางอวิ๋นหลงตามเอกสารต้นฉบับ ไม่ได้อยู่ที่ความหล่อหรือความนิ่งอย่างเดียว แต่คือวินัย ความอึด และความสามารถในการกดอารมณ์ไว้ใต้พื้นผิว"
              />
            </ScrollReveal>

            <div className="zy-biography-grid">
              <ScrollReveal direction="left">
                <div className="zy-image-stack">
                  <img
                    src={`${base}images/zhang-yunlong/zhang-03.jpg`}
                    alt="จางอวิ๋นหลง ภาพพอร์ตเทรต"
                    className="zy-image-stack-main"
                  />
                  <div className="zy-image-stack-card">
                    <p className="zy-image-stack-label">ชื่อในวงการ</p>
                    <h3>Leon Zhang</h3>
                    <p>
                      เอกสารระบุว่าเขายังเป็นที่รู้จักในชื่อ Jack Zhang และได้รับการจดจำในฐานะ
                      นักแสดงชายที่รักษาสมดุลระหว่างความนิยมและคุณภาพงานแสดงได้ดี
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="zy-biography-copy">
                  <p>
                    จางอวิ๋นหลงเกิดเมื่อวันที่ 2 มีนาคม 1988 ที่เมืองต้าเหลียน มณฑลเหลียวหนิง
                    เติบโตมากับวัฒนธรรมฟุตบอลอย่างเข้มข้น และใช้ชีวิตแบบนักกีฬาเยาวชนยาวนานถึง
                    13 ปี ช่วงเวลานี้กลายเป็นฐานของความมีวินัย การรับมือแรงกดดัน และความฟิตทางกาย
                    ที่ภายหลังส่งผลโดยตรงต่อการรับบทสายแอคชั่นและงานคอสตูมที่ใช้พลังกายสูง
                  </p>
                  <p>
                    หลังจากตัดสินใจเปลี่ยนเส้นทาง เขาเข้าสู่สาขาการแสดงของ
                    Beijing Film Academy และสำเร็จการศึกษาในปี 2013 ระหว่างเรียนยังได้ลองงาน
                    ละครเวทีและภาพยนตร์สั้นหลายรูปแบบ ก่อนแจ้งเกิดจาก Love Express
                    ซึ่งพาเขาไปสู่การเซ็นสัญญากับ Jay Walk Studio
                  </p>
                  <p>
                    เสน่ห์ของเขาอยู่ตรงการวางตัวที่นิ่ง สุขุม และไม่เร่งเร้า แต่เมื่อลงบทจริง
                    เขาสามารถสลับจากพลังดิบแบบอดีตนักเลง ไปสู่ความอบอุ่นแบบแพทย์ หรือความคมของตัวละคร
                    ในคอสตูมดราม่าได้โดยไม่รู้สึกฝืน
                  </p>

                  <div className="zy-stat-grid">
                    {profileStats.map((stat) => (
                      <div key={stat.label} className="zy-stat-card">
                        <span>{stat.label}</span>
                        <strong>{stat.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="zy-tag-row">
                    <span>Weibo / Douyin</span>
                    <span>Thai fandom active community</span>
                    <span>CCTV Spring Festival Gala</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="journey" className="zy-section zy-section-alt">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Career Arc"
                title="เส้นทางอาชีพ 4 ระยะ"
                description="หน้าเว็บส่วนนี้สรุปภาพใหญ่จากเอกสารวิจัยให้เห็นชัดว่าเขาไม่ได้โตแบบชั่วข้ามคืน แต่ค่อย ๆ สะสมเครดิตจนไปถึงงานระดับเรือธง"
              />
            </ScrollReveal>

            <div className="zy-phase-grid">
              {careerPhases.map((phase, index) => (
                <ScrollReveal key={phase.years} delay={index * 0.06}>
                  <article className="zy-phase-card">
                    <span className="zy-phase-years">{phase.years}</span>
                    <h3>{phase.title}</h3>
                    <p>{phase.summary}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="spotlight" className="zy-section">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Spotlight Roles"
                title="บทบาทที่เปลี่ยนภาพจำของเขา"
                description="เลือกดู 3 ช่วงสำคัญที่สะท้อนการเติบโตจากนักแสดงดาวรุ่ง ไปสู่นักแสดงที่แบกรับงานใหญ่และงานที่มีชั้นเชิงทางอารมณ์"
              />
            </ScrollReveal>

            <div className="zy-role-switcher">
              <div className="zy-role-tabs" role="tablist" aria-label="Highlight roles">
                {spotlightRoles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`zy-role-tab ${selectedRole === role.id ? 'is-active' : ''}`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <span>{role.badge}</span>
                    <strong>{role.title}</strong>
                  </button>
                ))}
              </div>

              <div className="zy-role-panel">
                <div className="zy-role-image-wrap">
                  <img src={currentRole.image} alt={currentRole.title} className="zy-role-image" />
                </div>

                <div className="zy-role-copy">
                  <p className="zy-role-badge">{currentRole.badge}</p>
                  <h3>{currentRole.title}</h3>
                  <p className="zy-role-subtitle">{currentRole.subtitle}</p>
                  <p className="zy-role-summary">{currentRole.summary}</p>
                  <ul className="zy-role-points">
                    {currentRole.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="zy-section zy-section-alt">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Filmography"
                title="ผลงานเด่นและโปรเจกต์ที่ถูกจับตา"
                description="คัดเฉพาะงานที่ช่วยอธิบายพัฒนาการของเขาได้ชัด ทั้งผลงานแจ้งเกิด บทพลิกเกม และงานอนาคตที่เอกสารมองว่าสำคัญ"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="zy-filter-row">
                {workFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`zy-filter-pill ${workFilter === filter ? 'is-active' : ''}`}
                    onClick={() => setWorkFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="zy-work-grid">
              {filteredWorks.map((work, index) => (
                <ScrollReveal key={`${work.year}-${work.title}`} delay={index * 0.03}>
                  <article className="zy-work-card">
                    <div className="zy-work-topline">
                      <span>{work.year}</span>
                      <em>{work.category}</em>
                    </div>
                    <h3>{work.title}</h3>
                    <p className="zy-work-cn">{work.titleCn}</p>
                    <p className="zy-work-role">บท: {work.role}</p>
                    <p className="zy-work-note">{work.note}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="zy-section">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Variety & Music"
                title="เวทีวาไรตี้ ดนตรี และการขยายฐานแฟน"
                description="จางอวิ๋นหลงไม่ได้สร้างตัวตนผ่านงานแสดงเพียงอย่างเดียว เอกสารยังชี้ชัดว่าเวทีรายการและเพลงประกอบมีบทบาทสำคัญต่อการขยายฐานผู้ชมของเขา"
              />
            </ScrollReveal>

            <div className="zy-stage-grid">
              <div className="zy-stage-column">
                {stageMoments.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.05}>
                    <article className="zy-stage-card">
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="right" delay={0.08}>
                <div className="zy-sound-panel">
                  <p className="zy-sound-kicker">OST Selection</p>
                  <h3>บทเพลงที่ช่วยขยายภาพของเขาในฐานะพหุศิลปิน</h3>
                  <div className="zy-track-list">
                    {ostTracks.map((track) => (
                      <div key={`${track.year}-${track.title}`} className="zy-track-item">
                        <span>{track.year}</span>
                        <div>
                          <strong>{track.title}</strong>
                          <p>{track.titleCn}</p>
                          <small>{track.note}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="awards" className="zy-section zy-section-alt">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Awards"
                title="รางวัลที่สะท้อนทั้งคุณภาพและความนิยม"
                description="เส้นทางของเขาน่าสนใจตรงที่มีทั้งรางวัลจากงานแสดง การยอมรับด้านภาพลักษณ์ และเวทีที่สะท้อนความนิยมในระดับสาธารณะ"
              />
            </ScrollReveal>

            <div className="zy-awards-grid">
              {awards.map((award, index) => (
                <ScrollReveal key={`${award.year}-${award.title}`} delay={index * 0.04}>
                  <article className="zy-award-card">
                    <span className="zy-award-year">{award.year}</span>
                    <h3>{award.title}</h3>
                    <p className="zy-award-event">{award.event}</p>
                    <p className="zy-award-note">{award.note}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="zy-section">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Gallery"
                title="แกลเลอรีภาพนิ่ง"
                description="ใช้ภาพจากโฟลเดอร์ต้นฉบับทั้งหมดเพื่อให้หน้า Zhang มีฐานภาพของตัวเองจริง ไม่ใช่เพียงภาพเดียวแบบ placeholder เดิม"
              />
            </ScrollReveal>

            <div className="zy-gallery-grid">
              {galleryImages.map((image, index) => (
                <ScrollReveal key={image.src} delay={index * 0.04}>
                  <button
                    type="button"
                    className={`zy-gallery-tile ${index % 3 === 0 ? 'is-tall' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.alt} />
                    <span>{image.caption}</span>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="zy-section zy-section-alt">
          <div className="zy-container">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Videos"
                title="คลิปวิดีโอจากโฟลเดอร์ต้นฉบับ"
                description="วิดีโอทั้ง 3 ชิ้นถูกนำเข้ามาเป็นส่วนหนึ่งของหน้าโปรไฟล์ เพื่อให้การเลื่อนดูเว็บมีจังหวะมากกว่าการอ่านข้อมูลอย่างเดียว"
              />
            </ScrollReveal>

            <div className="zy-video-grid">
              {videos.map((video, index) => (
                <ScrollReveal key={video.src} delay={index * 0.05}>
                  <article className="zy-video-card">
                    <div className="zy-video-frame">
                      <video
                        src={video.src}
                        controls
                        preload="metadata"
                        className="zy-video"
                        playsInline
                      />
                    </div>
                    <div className="zy-video-copy">
                      <h3>{video.title}</h3>
                      <p>{video.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="zy-footer">
        <div className="zy-container zy-footer-inner">
          <div>
            <p className="zy-footer-cn">张云龙</p>
            <p className="zy-footer-en">Zhang Yunlong Fan Profile</p>
          </div>
          <div className="zy-footer-meta">
            <span>ข้อมูลสรุปจากเอกสารต้นฉบับภายในโปรเจกต์</span>
            <span>แพลตฟอร์มที่แฟนไทยติดตามบ่อย: iQIYI, WeTV, MangoTV</span>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="zy-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="zy-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="zy-lightbox-image" />
            <p className="zy-lightbox-caption">{selectedImage.caption}</p>
            <button
              type="button"
              className="zy-lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
