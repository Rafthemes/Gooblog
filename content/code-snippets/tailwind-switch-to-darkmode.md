---
title: "Tailwind Switch to Darkmode"
date: 2021-07-19T17:49:13+07:00
description: "Membuat Tailwind Switch to Darkmode menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-switch-to-darkmode.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Switch to Darkmode

Hei stuffer kali ini saya ingin share code snippet Tailwind Switch to Darkmode

Dark mode adalah tema yang sedang paling digemari sekarang ini.

kita akan  membuat switch darkmode menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

lalu bagaimana kita menggunakan darkmode pada tailwindcss?

kalian hanya perlu mengaktifkan darkmode pada file {{< filename name="tailwind.config.js" >}}

dan ubah option darkmode menjadi 'media' atau 'class'

```js
 darkMode: 'class', // false or 'media' or 'class'
```

pada kali saya menggunakan 'class' untuk menjalankan darkmode nya.

untuk penjelasan lengkapnya kalian dapat ke website tailwindcss : 

oh iya switch darkmode ini juga saya gunakan pada website ini hehehe..

&nbsp;
{{< iklan >}}

### Wrapper
pada body ini kita akan menempatkan class 'dark' agar darkmode berjalan

secara default class 'dark' tidak ada
```html
<body class="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">

  <!-- Switch to darkmode -->

</body>
```

### Switch Theme to Darkmode
```html
<button
  class="absolute top-5 right-5 w-10 h-5 md:w-12 md:h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
  onclick="toggleTheme()">
  <div
    id="switch-toggle"
    class="w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </div>
</button>
```

### Script javascript
Pada script javascript ini berfungsi untuk mengubah theme ke darkmode maupun lightmode
```javascript
const switchToggle = document.querySelector('#switch-toggle');
const html = document.querySelector('html');
let isDarkmode = false
const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'))

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`


// Jika ada isDarkmode di localstorage 
if (localDarkmode) {
  isDarkmode = localDarkmode
  html.classList.add('dark')
} else {
  html.classList.remove('dark')
}

function toggleTheme (){
  isDarkmode = !isDarkmode
  localStorage.setItem('isDarkmode', isDarkmode)
  switchTheme()
}

function switchTheme (){
  if (isDarkmode) {
    html.classList.add('dark')
    switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
    switchToggle.classList.add('bg-gray-700','translate-x-full')
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon
    }, 250);
  } else {
    html.classList.remove('dark')
    switchToggle.classList.add('bg-yellow-500','-translate-x-2')
    switchToggle.classList.remove('bg-gray-700','translate-x-full')
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon
    }, 250);
  }
}

switchTheme()

```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}