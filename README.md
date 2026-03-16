# Ju Jingyi Website

โปรเจกต์นี้คือเว็บแฟนฮับที่สร้างด้วย React + Vite สำหรับรวมข้อมูลดาราจีน

## สถานะปัจจุบัน

- หน้า `/` เป็น landing page สำหรับเลือกนักแสดง
- หน้า `/ju-jingyi` ทำเสร็จแล้วหลาย section
- หน้า `/zhang-yunlong` ยังเป็น placeholder

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
