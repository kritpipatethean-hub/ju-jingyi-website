# Chinese Stars Fan Hub

โปรเจกต์นี้คือเว็บแฟนฮับที่สร้างด้วย React + Vite สำหรับรวมข้อมูลดาราจีนหลายคนใน repo เดียว

## สถานะปัจจุบัน

- หน้า `/` เป็น landing page สำหรับเลือกนักแสดง
- หน้า `/ju-jingyi` เป็นหน้าโปรไฟล์เต็มของจวีจิ้งอี
- หน้า `/zhang-yunlong` เป็นหน้าโปรไฟล์เต็มของจางอวิ๋นหลง
- route นักแสดงถูกลงทะเบียนจากไฟล์เดียวที่ `src/data/actorDirectory.js`
- public asset path ถูกสร้างผ่าน helper เดียวที่ `src/lib/site.js`

## คำสั่งใช้งาน

```bash
npm install
npm run dev
npm run build
npm run lint
```

## โครงสร้างที่ควรรู้

```text
ju-jingyi-website/
├─ public/
│  ├─ images/   # รูปที่เว็บใช้จริง
│  └─ videos/   # วิดีโอที่เว็บใช้จริง
├─ src/
│  ├─ data/
│  │  └─ actorDirectory.js
│  ├─ lib/
│  │  └─ site.js
│  ├─ components/
│  ├─ pages/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
└─ .github/workflows/deploy.yml
```

## หมายเหตุ

- asset ต้นฉบับที่ยังไม่ได้ใช้ทั้งหมด ถูกเก็บไว้นอกโปรเจกต์ที่ `../source-materials/`
- `dist/` เป็น build output ที่สร้างใหม่ได้เสมอ จึงไม่ถูกเก็บเป็น source หลัก
- โปรเจกต์นี้ deploy ไป GitHub Pages ผ่าน workflow ใน `.github/workflows/deploy.yml`
- GitHub Pages ใช้ `base` และ router config จากจุดกลางใน `src/lib/site.js`

## วิธีเพิ่มนักแสดงในอนาคต

1. คัดรูปและวิดีโอที่ต้องใช้เข้า `public/images/<slug>/` และ `public/videos/<slug>/`
2. สร้างหน้าใหม่ใน `src/pages/<ActorName>Page.jsx`
3. ลงทะเบียนนักแสดงเพิ่มเพียงจุดเดียวใน `src/data/actorDirectory.js`
4. ถ้ายังทำหน้าไม่เสร็จ ให้เว้น `page` ไว้ได้ ระบบจะใช้ `ActorDraftPage` ให้โดยอัตโนมัติ
5. ตรวจงานด้วย `npm run lint` และ `npm run build`

## จุดที่ไม่ควร hardcode ซ้ำ

- อย่าเขียน `import.meta.env.BASE_URL` กระจายหลายไฟล์ ให้ใช้ `publicAsset()` จาก `src/lib/site.js`
- อย่าเพิ่ม route นักแสดงตรง ๆ ใน `App.jsx` ให้ลงทะเบียนผ่าน `actorDirectory`
- อย่า hardcode การ์ดหน้า landing ใน `LandingPage.jsx` เพราะดึงจาก `actorDirectory` แล้ว
