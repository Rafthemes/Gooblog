---
title: "Tailwind Toast Notification"
date: 2021-07-17T18:39:20+07:00
description: "Membuat Tailwind Toast Notification menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-toast-notification.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Toast Notification

Hei stuffer, kali ini saya ingin share code snippet toast notification.

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;
{{< iklan >}}

### Wrapper
wrapper ini akan menempatkan toast notification pada pojok atas kanan layar.
```html
  <div class="absolute right-0 top-0 m-5">

    <!-- masukan toast notification disini -->

  </div>
```

&nbsp;

### Versi 1 (Success)
![tailwind-toast-notification-v1](/images/code-snippets/tailwind-toast-notification-v1.png)
versi 1 ini digunakan ketika ada notification success
```html
  <div class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">
    <!-- icons -->
    <div class="text-green-500 rounded-full bg-white mr-3">
      <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
      </svg>
    </div>
    <!-- message -->
    <div class="text-white max-w-xs ">
      ini pesan ketika sukses
    </div>
  </div>
```

&nbsp;

### Versi 2 (Info)
![tailwind-toast-notification-v1](/images/code-snippets/tailwind-toast-notification-v2.png)
versi 1 ini digunakan ketika ada notification info
```html
  <div class="flex items-center bg-blue-400 border-l-4 border-blue-700 py-2 px-3 shadow-md mb-2 ">
    <!-- icons -->
    <div class="text-blue-500 rounded-full bg-white mr-3">
    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
      <circle cx="8" cy="4.5" r="1"/>
    </svg>
    </div>
    <!-- message -->
    <div class="text-white max-w-xs ">
      ini pesan ketika ada informasi
    </div>
  </div>
```

&nbsp;

### Versi 3 (Warning)
![tailwind-toast-notification-v1](/images/code-snippets/tailwind-toast-notification-v3.png)
versi 1 ini digunakan ketika ada notification warning
```html
  <div class="flex items-center bg-orange-400 border-l-4 border-orange-700 py-2 px-3 shadow-md mb-2  ">
      <!-- icons -->
    <div class="text-orange-500 rounded-full bg-white mr-3">
      <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
    </div>
    <!-- message -->
    <div class="text-white max-w-xs ">
      ini pesan ketika ada warning
    </div>
  </div>
```

&nbsp;

### Versi 4 (Error)
![tailwind-toast-notification-v1](/images/code-snippets/tailwind-toast-notification-v4.png)
versi 1 ini digunakan ketika ada notification error
```html
  <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2  " >
    <!-- icons -->
    <div class="text-red-500 rounded-full bg-white mr-3">
      <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
      </svg>
    </div>
    <!-- message -->
    <div class="text-white max-w-xs ">
      ini pesan ketika ada error
    </div>
  </div>
```

&nbsp;

## Video Tutorial
{{< youtube id="fTHUz-Cs9n8" >}}