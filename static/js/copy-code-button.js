function addCopyButtons(clipboard) {
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
      const copyIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      `
      const copiedIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      `

      var button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.innerHTML = copyIcon;

      button.addEventListener('click', function () {
          clipboard.writeText(codeBlock.innerText).then(function () {
              /* Chrome doesn't seem to blur automatically,
                 leaving the button in a focused state. */
              button.blur();

              button.innerHTML = copiedIcon;

              setTimeout(function () {
                  button.innerHTML = copyIcon;
              }, 2000);
          }, function (error) {
              button.innerText = 'Error';
          });
      });

      var pre = codeBlock.parentNode;
      pre.parentNode.insertBefore(button, pre);
  });
}

if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
  script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
  script.crossOrigin = 'anonymous';
  script.onload = function(clipboard) {
      addCopyButtons(clipboard);
  };

  document.body.appendChild(script);
}