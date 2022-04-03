---
title: "Tailwind Live Chat Support"
date: 2021-07-19T17:23:22+07:00
description: "Membuat Tailwind Live Chat Support menggunakan tailwindcss"
draft: false
toc: true
keyword: [code-snippets, website]
thumbnail: "/images/code-snippets/tailwind-live-chat-support.webp"
tags: [tailwindcss]
categories: [code-snippets]
---

## Code Snippet - Tailwind Live Chat

Hei stuffer kali ini saya ingin share code snippet Tailwind Live Chat Support

Apa kalian tahu apa itu Live Chat Support pada sebuah website?

live chat support ini diperuntukan untuk consumer yang ingin menanyakan seputar website tersebut atau menanyakan ketika consumer mendapatkan kesulitan pada website tersebut.

live chat sangat banyak digunakan di berbagai website modern salah satunya adalah website kursus online seperti dicoding.

&nbsp;

Oh iya live chat disini hanya tampilan saja, yang berarti secara fungsional tidak berjalan.

Ok langsung saja kita buat live chat support menggunakan tailwindcss

Jika kalian tidak tahu atau belum menggunakan tailwindcss, kalian dapat akses link dibawah ini:

&nbsp;

{{< iklan >}}
### Live Chat Support
```html
<div class="fixed bottom-0 right-0 flex flex-col items-end ml-6 w-full">
  <!-- chat modal -->
  <div class="chat-modal flex flex-col mb-5 shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white mx-2 md:mx-0 md:mr-5">
    <!-- close button -->
    <div class="close-chat bg-red-500 hover:bg-red-600 text-white mb-1 w-10 flex justify-center items-center px-2 py-1 rounded self-end cursor-pointer">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
    <!-- header -->
    <div class="flex justify-between items-center bg-green-500 border w-full p-2">
      <!-- admin name -->
      <div class="flex items-center text-white">
        <img src="hartdev.jpg" alt="pic" class="rounded-full w-8 h-8 mr-1">
        <h2 class="font-semibold tracking-wider">HartDev</h2>
      </div>
      <!-- admin status -->
      <div class="flex items-center">
        <small class="text-white mr-1">online</small>
        <div class="rounded-full w-2 h-2 bg-white"></div>
      </div>
    </div>
    <!-- end header -->
    <!-- chat message -->
    <div class="chat-support flex flex-col bg-gray-200 px-2 chat-support overflow-auto">
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        apa ada yang bisa saya bantu ?
      </div>
      <div class="bg-green-500 text-white p-2 my-2 ml-3 shadow self-end rounded-l-lg rounded-b-lg">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo quia corporis est. Nisi, natus.
      </div>
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        apa ada yang bisa saya bantu ?
      </div>
      <div class="bg-green-500 text-white p-2 my-2 ml-3 shadow self-end rounded-l-lg rounded-b-lg">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo quia corporis est. Nisi, natus.
      </div>
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        apa ada yang bisa saya bantu ?
      </div>
      <div class="bg-green-500 text-white p-2 my-2 ml-3 shadow self-end rounded-l-lg rounded-b-lg">
        Lorem ipsum dolor sit amet.
      </div>
      <div class="bg-white text-gray-700 p-2 my-2 mr-3 shadow self-start rounded-r-lg rounded-b-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo quia corporis est. Nisi, natus.
      </div>
    </div>
    <!-- end chat message -->
    <!-- input for send message-->
    <div class="relative bg-white">
      <input type="text" name="message" placeholder="ketik pesan anda"
            class="pl-4 pr-10 py-2 border border-green-500 focus:outline-none w-full">
      <button class="absolute right-0 bottom-0 text-green-600 hover:text-green-500 m-1 px-3 py-1">Send</button>
    </div>
  </div>
  <!-- icon chat -->
  <div class="show-chat text-green-500 hover:text-green-600 cursor-pointer mx-10 mb-6 mt-4">
    <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-chat-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
    </svg>
  </div>
</div>
```

### Style CSS
```css
.chat-support::-webkit-scrollbar{
  background: white;
  padding: 10px;
  width: 8px;
}
.chat-support::-webkit-scrollbar-thumb{
  background: #48BB78;
  transition: .5s;
}
.chat-support::-webkit-scrollbar-thumb:hover{
  background: #40a86b;
}
.chat-support{
  height: 0;
  transition: .5s;
}
.chat-support.expand{
  height: 400px;
}

.chat-modal{
  transition: .5s;
  opacity: 0;
  transform: translateX(400px);
}
.chat-modal.show{
  opacity: 1;
  transform: translateX(0);
}
```

### Javascript (untuk membuka dan menutup live chat)
```javascript
const chatModal = document.querySelector('.chat-modal');
const chatSupport = document.querySelector('.chat-support');

const showChat = document.querySelector('.show-chat');
const closeChat = document.querySelector('.close-chat');

showChat.addEventListener('click', function (){
  chatModal.classList.add('show')
  showChat.classList.add('hidden')
  setTimeout(() => {
    chatSupport.classList.add('expand')
  }, 500);
});

closeChat.addEventListener('click', function (){
  chatSupport.classList.remove('expand')
  setTimeout(() => {
    showChat.classList.remove('hidden')
  }, 820);
  setTimeout(() => {
    chatModal.classList.remove('show')
  }, 500);
});
```

&nbsp;

## Video Tutorial
{{< youtube id="" >}}