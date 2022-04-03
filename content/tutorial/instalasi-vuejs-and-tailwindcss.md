---
title: "Membuat Aplikasi Todolist Dengan Vuejs dan Tailwincss #2 - Install Vuejs dan Tailwindcss"
description: "Pada tahap ini kalian akan menginstall vuejs dan tailwindcss dengan melakukan setup keseluruhan stuff stuff sampai website dapat ditampilkan."
date: 2021-07-20T20:19:50+07:00
draft: false
toc: true
keyword: [tutorial, vuejs, tailwindcss]
thumbnail: "/images/tutorial/instalasi-vuejs-dan-tailwindcss.png"
tags: [vuejs, tailwindcss]
categories: [tutorial]
---

<br/>

## Persiapan
Pertama-tama sebelum menginstall Vuejs dan tailwindcss kalian harus menginstall Nodejs dan npm terlabih dahulu.

Install nodejs cukup mudah, kalian hanya perlu download di sini:
{{< link url="https://nodejs.org/en/" >}}
  Download Node.js
{{< /link >}}

&nbsp;

Setelah menginstall nodejs kalian harus memastikan nodejs dan npm sudah terinstall.

Kalian hanya perlu ketikan baris kode ini di cmd/gitbash
```bash
node --version
```
```bash
npm --version
```

&nbsp;

## Install Vuejs

Pada tutorial kali ini kalian akan menginstall Vuejs menggunakan Vitejs.

Kenapa menggunakan Vitejs?

Kalian bisa lihat penjelasannya lengkapnya disini:
{{< link url="https://vitejs.dev/guide/why.html" >}}
  Why Vite?
{{< /link >}}

Dengan menggunakan Vitejs kalian dapat menjalankan server dengan sangat cepat hanya beberapa detik dan dependencies yang terinclude hanya sedikit jadi lebih hemat untuk penyimpanan.

{{< iklan >}}

&nbsp;
### Init Vitejs App

ketikan script ini pada cmd/gitbash dan pilih 
```bash
 npm init @vitejs/app first-vuejs-app
```

masuk ke directory {{< filename name="first-vuejs-app" >}}
```bash
cd first-vuejs-app
```

untuk menginstall semua dependecies yang dibutuhkan
```bash
npm install
```

untuk menjalankan server vuejs yang akan jalan pada <span class="underline">http://localhost:3000</span>
```bash
npm run dev
```

&nbsp;
### First look Vuejs App
![firstlook-vuejs](/images/tutorial/firstlook-vuejs-app.png)


## Install Tailwindcss
Setelah menginstall Vuejs sekarang kalian akan menginstall tailwindcss, untuk menginstall tailwind kalian perlu beberapa package tambahan seperti postcss dan autoprefixer.

pastikan kalian sudah berada didalam directory project vuejs.

ketikan script ini di cmd/gitbash:
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

&nbsp;
### Membuat file konfigurasi

membuat file {{< filename name="tailwind.config.js" >}} dan {{< filename name="postcss.config.js" >}} secara otomatis dengan mengetikan:
```bash
npx tailwindcss init -p
```

ini akan membuatkan file {{< filename name="tailwind.config.js" >}}
```javascript
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

dan membuatkan file {{< filename name="postcss.config.js" >}} yang sudah memasukan plugin tailwindcss dan autoprefix.
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

&nbsp;
### Hapus css yang tidak terpakai dengan purge

pada file {{< filename name="tailwind.config.js" >}}, ubah option purge menjadi seperti ini.


{{< highlight javascript "hl_lines=3" >}}
  // tailwind.config.js
  module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  } 
{{< / highlight >}}

&nbsp;
### Masukan Tailwind pada css file

buat dulu file {{< filename name="/src/tailwind.css" >}} dan masukan kode ini.
```css
/* ./src/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

pada file {{< filename name="/src/main.js" >}} masukan file {{< filename name="tailwind.css" >}} dengan import
```javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'

createApp(App).mount('#app')
```

&nbsp;
Ok, Sekarang tailwind sudah siap digunakan.

untuk memastikan mari kita coba masukan class tailwind dengan mengubah file {{< filename name="/src/App.vue" >}}

```html
<!-- /src/App.vue --> 
<template>
  <div class="bg-blue-600 h-screen grid place-items-center">
    <h1 class="text-6xl font-bold text-white">First Vuejs + Tailwind App</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
```

jika tampilkan kalian seperti ini, berarti tailwindcss sudah bisa digunakan. congrats!! :D
![firstlook-tailwind](/images/tutorial/firstlook-tailwind.png)

{{< iklan >}}

&nbsp;
## Kesimpulan
pada tutorial pertama ini kalian menginstall vuejs menggunakan vitejs dan menginstall tailwindcss beserta package pendukungnya seperti postcss dan autoprefixer.

kalian juga sudah mengkonfigurasi tailwindcss, dari mengkonfigurasi agar menghapus css yang tidak terpakai sampai tailwindcss siap untuk digunakan.
\
&nbsp;
>sampai nanti di tutorial selanjutnya di series:
> **Membuat Website Pertamamu Menggunakan Vuejs 3 + Vite dan Tailwindcss**
