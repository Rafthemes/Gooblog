---
title: "Tailwind Simple Card"
date: 2021-07-16T17:54:14+07:00
description: "Membuat simple card menggunakan tailwindcss"
draft: false
toc: true
keyword: [tailwindcss, code-snippets, website, card]
thumbnail: "/images/code-snippets/tailwind-simple-card.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippets - Simple Card

Hei stuffer, kali ini saya ingin share code snippet simple card

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;
{{< iklan >}}

### Wrapper
wrapper untuk membungkus card agar card berada di tengah (optional digunakan)
```html
  <div class="w-full h-screen flex justify-center items-center">

    <!-- Simple Card -->

  </div>
```

&nbsp;

### Simple Card
```html
  <div class="bg-white w-64 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden">
    <img 
      class="h-48 w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80"
      alt="card-image"
    />
    <div class="w-full flex flex-col">
      <h3 class="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">
        My Name
      </h3>
      <p class="p-3 pt-1 cursor-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?
      </p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">
        Look
      </button>
    </div>
  </div>
```

&nbsp;

## Video Tutorial
{{< youtube id="1B8r42x8QbM" >}}