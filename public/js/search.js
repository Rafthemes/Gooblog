const searchInput = document.querySelector('#search-input');

const params = new URLSearchParams(window.location.search)
const query = params.get('query')

searchInput.value = query

searchContent(query)

searchInput.addEventListener('input', debounce((e) => {

  const query = e.target.value
  // Perform a search if there is a query
  searchContent(query)
}, 250))


function searchContent(query) {
  if (query) {
    // Retain the search input in the form when displaying results
    document.getElementById('search-input').setAttribute('value', query)

    const idx = lunr(function () {
      this.ref('id')
      this.field('title', {
        boost: 15
      })
      this.field('category')

      for (const key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          thumbnail: window.store[key].thumbnail,
          category: window.store[key].category
        })
      }
    })

    console.log(idx);

    // Perform the search
    const results = idx.search(query)

    console.log(results);
    // Update the list with results
    displayResults(results, window.store)
  } 
}

function displayResults (results, store) {
  const searchResults = document.querySelector('#results')
  if (results.length) {
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += `
        <figure class="flex flex-col md:flex-row items-center gap-0 md:gap-8 p-6 md:px-9 md:py-8 border-b md:!border md:rounded-md dark:border-white/10">
        <a href="${item.url}" class="w-full md:w-[40%] aspect-[12/8] rounded-md overflow-hidden hover:opacity-90 transition">
          <img src="${item.thumbnail}"  class="w-full h-full object-cover" alt="{{ .Title }}">
        </a>
        <div class="space-y-5 w-full md:w-[60%]">
          <a href="${item.url}" class="hover:underline">
            <figcaption class="text-2xl font-medium leading-snug line-clamp-2 capitalize">
              ${item.title}
            </figcaption>
          </a>
          <div class="flex items-center gap-3 text-sm text-black dark:text-white">
            <a href="#" class="flex items-center gap-2">
              <img class="dark:invert" src="/images/icons/${item.category}.svg" alt="">
              ${item.category}
            </a>
          </div>
        </div>
      </figure>
      `
    }
    searchResults.innerHTML = resultList
  } else {
    searchResults.innerHTML = 'No results found.'
  }
}

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {  
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};