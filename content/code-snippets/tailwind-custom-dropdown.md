---
title: "Tailwind Custom Dropdown"
date: 2021-07-19T19:47:03+07:00
description: "Membuat Tailwind Custom Dropdown menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-custom-dropdown.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Custom Dropdown

Hei stuffer kali ini saya ingin share code snippet Tailwind Custom Dropdown

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;

{{< iklan >}}
### Wrapper
wrapper hanya untuk menengahkan dropdown (optional digunakan)
```html
<body class="relative flex justify-center items-center gap-5 pt-20 bg-gray-100">

  <!-- Dropdown Light Mode -->
  <!-- Dropdown Dark Mode -->

</body>
```

### Light Mode Version
```html
<!-- Light mode -->
<button class="relative flex jutify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
  <p class="px-4">Dropdown</p>
  <span class="border-l p-2 hover:bg-gray-100">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
  </span>
  <div class="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
    <ul class="text-left border rounded">
      <li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 1</li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 2</li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 3</li>
      <li class="px-4 py-1 hover:bg-gray-100 border-b">menu list 4</li>
      <li class="px-4 py-1 hover:bg-gray-100">menu list 5</li>
    </ul>
  </div>
</button>
```

### Dark Mode Version
```html
<!-- Dark mode -->
<button class="relative flex jutify-center items-center bg-gray-600 border focus:outline-none shadow text-white rounded focus:ring ring-gray-300 group">
  <p class="px-4">Dropdown</p>
  <span class="border-l border-gray-500 p-2 hover:bg-gray-500">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
  </span>
  <div class="absolute hidden group-focus:block top-full min-w-full w-max bg-gray-600 shadow-md mt-1 rounded">
    <ul class="text-left border rounded">
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">menu list 1</li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">menu list 2</li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">menu list 3</li>
      <li class="px-4 py-1 hover:bg-gray-700 border-b border-gray-500">menu list 4</li>
      <li class="px-4 py-1 hover:bg-gray-700">menu list 5</li>
    </ul>
  </div>
</button>
```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}