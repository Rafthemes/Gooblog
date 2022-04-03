---
title: "Tailwind Modal"
date: 2021-07-19T17:15:35+07:00
description: "Membuat Tailwind Modal menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-modal.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Modal

Hei stuffer kali ini saya ingin share code snippet Tailwind Modal

Ok langsung saja kita buat menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

{{< link url="https://tailwindcss.com" >}}
  https://tailwindcss.com
{{< /link >}}

&nbsp;
{{< iklan >}}
### Modal
```html
<div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Modal Title</h3>
        <button class="text-black close-modal">&cross;</button>
      </div>
      <!-- modal body -->
      <div class="p-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, delectus cumque fugiat nemo ducimus quae deserunt cupiditate sapiente incidunt aut accusantium dolore assumenda vitae similique, exercitationem voluptatum praesentium laboriosam nam.
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
        <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
      </div>
    </div>
  </div>
```
Pertama-tama buat button untuk memunculkan modal
```html
<button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white m-5 show-modal">
  show modal
</button>
```

Setelah itu masukan script javascript ini
```js
const modal = document.querySelector('.modal');

const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

showModal.addEventListener('click', function (){
  modal.classList.remove('hidden')
});

closeModal.forEach(close => {
  close.addEventListener('click', function (){
    modal.classList.add('hidden')
  });
});
```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}