import JuJingyiPage from '../pages/JuJingyiPage'
import ZhangYunlongPage from '../pages/ZhangYunlongPage'
import { publicAsset } from '../lib/site'

export const actorDirectory = [
  {
    slug: 'ju-jingyi',
    route: '/ju-jingyi',
    page: JuJingyiPage,
    status: 'ready',
    nameTh: 'จวีจิ้งอี',
    nameCn: '鞠婧祎',
    nameEn: 'Ju Jingyi',
    subtitle: 'นักแสดง · นักร้อง · ไอคอนแฟชั่น',
    teaser: 'จากเวทีไอดอลสู่หนึ่งในนักแสดงหญิงจีนที่มีภาพจำชัดที่สุดของยุคปัจจุบัน',
    image: publicAsset('images/closeup-pink.jpg'),
    accentColor: '#b76e79',
    accentGlow: 'rgba(183, 110, 121, 0.4)',
  },
  {
    slug: 'zhang-yunlong',
    route: '/zhang-yunlong',
    page: ZhangYunlongPage,
    status: 'ready',
    nameTh: 'จางอวิ๋นหลง',
    nameCn: '张云龙',
    nameEn: 'Zhang Yunlong',
    subtitle: 'นักแสดง · นายแบบ',
    teaser: 'อดีตนักฟุตบอลที่ต่อยอดสู่นักแสดงสายดราม่า แอคชั่น และโปรเจกต์พรีเมียม',
    image: publicAsset('images/zhang-yunlong.jpg'),
    accentColor: '#6e9cb7',
    accentGlow: 'rgba(110, 156, 183, 0.4)',
  },
]

export function getActorBySlug(slug) {
  return actorDirectory.find((actor) => actor.slug === slug)
}
