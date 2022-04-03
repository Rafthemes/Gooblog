---
title: "Tailwind Navigation Toggling Without Javascript"
date: 2021-07-19T19:53:47+07:00
description: "Membuat Tailwind Navigation Toggling Without Javascript menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-navigation-toggling-without-javascript.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Navigation Toggling Without Javascript

Hei stuffer kali ini saya ingin share code snippet Tailwind Navigation Toggling Without Javascript

pada navigation saat mode mobile biasa nya kalian memberikan humburger menu untuk toggle buka dan tutup menu.

biasanya kalian melakukan toggle dengan bantuan javascript.

pada tailwind kita dapat memanfaatkan class bernama 'group-focus:' 

jadi logikanya adalah ketika button focus maka menu akan ditampilkan.

dan ajaibnya kalian dapat menutup menu dengan mengklik diluar menu.. sangat ajaib

&nbsp;

Ok langsung saja kita buat navigation ini.

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;

{{< iklan >}}
### Navigation Toggling Without Javascript
```html
<nav class="fixed top-0 left-0 bg-white w-full shadow">
  <div class="container m-auto flex justify-between items-center text-gray-700">
    <h1 class="pl-8 py-4 text-xl font-bold">HARTDEV</h1>
    <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
      <li class="hover:bg-gray-200 py-4 px-6">Home</li>
      <li class="hover:bg-gray-200 py-4 px-6">Contact</li>
      <li class="hover:bg-gray-200 py-4 px-6">Services</li>
      <li class="hover:bg-gray-200 py-4 px-6">About</li>
    </ul>
    <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group"> 
      <div class="w-5 h-1 bg-gray-600 mb-1"></div>
      <div class="w-5 h-1 bg-gray-600 mb-1"></div>
      <div class="w-5 h-1 bg-gray-600"></div>
      <div class="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
      group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
        <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
          <li class="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
          <li class="hover:bg-gray-200 py-4 px-6 w-full">Contact</li>
          <li class="hover:bg-gray-200 py-4 px-6 w-full">Services</li>
          <li class="hover:bg-gray-200 py-4 px-6 w-full">About</li>
        </ul>
      </div>
    </button>
  </div>
</nav>
```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}