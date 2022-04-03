---
title: "Tailwind Profile Card"
date: 2021-07-19T20:12:49+07:00
description: "Membuat Tailwind Profile Card menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-profile-card.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Profile Card

Hei stuffer kali ini saya ingin share code snippet Tailwind Profile Card

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;

{{< iklan >}}
### Profile Card
```html
<!-- Profile card -->
<div class="w-[400px] group cursor-pointer active:opacity-70 transition-opacity duration-300">

  <!-- Title Card -->
  <div class="relative group bg-black rounded-t h-[50px] 
  group-hover:h-[100px] transition-all duration-300">
    <img 
      src="./images/slidebean-TpGIpUF67po-unsplash.jpg"
      class="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
    >
    <img 
      src="./images/italo_melo.png" 
      class="object-cover absolute w-[160px] bottom-0 opacity-0 group-hover:opacity-100 transform translate-y-3/4 group-hover:translate-y-0 transition duration-300"
    >
    <h1 class="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-52 text-white font-bold text-2xl transition-all duration-300">
      Italo Melo
    </h1>
  </div>

  <!-- Body Card -->
  <div class="min-h-[120px] py-3 px-4 bg-white rounded-b relative z-10 shadow text-gray-600">
    <div class="font-semibold mb-1">
      <p>Frontend Developer</p>
      <p>Email : italomelo@gmail.com</p>
    </div>
    <p class="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis neque nemo atque fugit iure voluptatibus.</p>
  </div>
</div>
```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}