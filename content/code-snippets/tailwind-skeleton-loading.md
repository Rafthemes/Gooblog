---
title: "Tailwind Skeleton Loading"
date: 2021-07-19T18:52:36+07:00
description: "Membuat skeleton loading menggunakan tailwindcss"
draft: false
toc: true
keyword: [tailwindcss, code-snippets, website, loading]
thumbnail: "/images/code-snippets/tailwind-skeleton-loading.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippets - Tailwind Skeleton Loading
Hei stuffer, kali ini saya ingin share code snippet Skeleton Loading.

Apa kalian tahu apa itu skeleton loading?

Skeleton loading adalah efek loading yang berbentuk seperti kerangka konten, skeleton loading ini ditampilkan sebelum konten sebenarnya ditampilkan.

Sekarang ini skeleton loading adalah efek loading yang sedang populer dan banyak sekali digunakan di website modern seperti tokopedia, facebook, bahkan youtube.

&nbsp;

Ok langsung saja kita buat skeleton loadingnya menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;
{{< iklan >}}

### Wrapper
Wrapper ini untuk membungkus skeleton loading (optional untuk digunakan)
```html
  <div class="flex flex-col w-1/2 pt-5 gap-5">

    <!-- Skeleton Loading Versi 1 -->
    <!-- Skeleton Loading Versi 2 -->

  </div>
```

&nbsp;

### Skeleton Loading Versi 1

![tailwind-skeleton-loading-v1](/images/code-snippets/tailwind-skeleton-loading-v1.jpg)

Pada versi 1 ini cocok untuk content yang memiliki banner image, profile image, dan deskripsi
```html
<div class="flex flex-col w-full px-3 animate-pulse">
  <div class="relative flex flex-col rounded w-full p-4 overflow-hidden shadow bg-white">

    <div class="absolute bg-white w-10 h-full pulse"></div>

    <div class="flex flex-col w-full h-full justify-center">
      <div class="w-full h-24 bg-gray-300 rounded"></div>
    </div>
    <div class="flex items-center gap-2 mt-3">
      <div class="w-1/6 ml-3">
        <div class="bg-gray-300 rounded-full w-20 h-20"></div>
      </div>
      <div class="w-full pl-1">
        <div class="bg-gray-300 w-2/3 h-6 rounded mb-2"></div>
        <div class="bg-gray-300 w-1/2 h-6 rounded mb-2"></div>
        <div class="flex items-center gap-2">
          <div class="bg-gray-300 w-14 h-4 rounded"></div>
          <div class="bg-gray-300 w-14 h-4 rounded"></div>
          <div class="bg-gray-300 w-14 h-4 rounded"></div>
        </div>
      </div>  
    </div>
  </div>
</div>
```

&nbsp;

### Skeleton Loading Versi 2

![tailwind-skeleton-loading-v2](/images/code-snippets/tailwind-skeleton-loading-v2.jpg)

Pada versi 2 ini cocok untuk list article yang memiliki thumbnail, title, dan dekripsi
```html
<div class="flex flex-col w-full px-3 animate-pulse">
  <div class="relative flex items-center rounded p-4 overflow-hidden shadow bg-white">
    <div class="absolute bg-white w-20 h-full pulse"></div>
    <div class="flex flex-col w-1/6 h-full justify-center">
      <div class="w-24 h-24 bg-gray-300 rounded"></div>
    </div>
    <div class="w-full h-full flex flex-col gap-2 ml-3">
      <div class="bg-gray-300 w-full h-4 rounded"></div>
      <div class="bg-gray-300 w-10/12 h-4 rounded"></div>
      <div class="bg-gray-300 w-full h-4 rounded"></div>
      <div class="bg-gray-300 w-8/12 h-4 rounded"></div>
    </div>
  </div>
</div>
```

&nbsp;

### Style CSS
Pada style css ini berguna untuk memberikan animasi splash yang bergerak dari kiri ke kanan
```css
.pulse {
  filter: blur(3px);
  animation: leftToRight 2s infinite;
}

@keyframes leftToRight {
  0% {
    transform: translateX(-300px);
    opacity: 0.4;
  }
  100% {
    transform: translateX(800px);
    opacity: 0;
  }
}
```

&nbsp;

## Video Tutorial
{{< youtube id="MwlGNXU1JPU" >}}
