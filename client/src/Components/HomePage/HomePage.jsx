import React from "react";

const Home = () => {
  return;
  //   <div class="flex p-6">
  //   <div class="flex-none w-44 relative">
  //     <img src="/kids-jumpsuit.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
  //   </div>
  //   <form class="flex-auto pl-6">
  //     <div class="flex flex-wrap items-baseline">
  //       <h1 class="w-full flex-none font-semibold mb-2.5">
  //         Kids Jumpsuit
  //       </h1>
  //       <div class="text-4xl leading-7 font-bold text-purple-600">
  //         $39.00
  //       </div>
  //       <div class="text-sm font-medium text-gray-400 ml-3">
  //         In stock
  //       </div>
  //     </div>
  //     <div class="flex items-baseline my-8">
  //       <div class="space-x-2 flex text-sm font-medium">
  //         <label>
  //           <input class="w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white" name="size" type="radio" value="xs" checked>
  //           XS
  //         </label>
  //         <label>
  //           <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="s">
  //           S
  //         </label>
  //         <label>
  //           <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="m">
  //           M
  //         </label>
  //         <label>
  //           <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="l">
  //           L
  //         </label>
  //         <label>
  //           <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="xl">
  //           XL
  //         </label>
  //       </div>
  //       <div class="ml-3 text-sm text-gray-500 underline">Size Guide</div>
  //     </div>
  //     <div class="flex space-x-3 mb-4 text-sm font-semibold">
  //       <div class="flex-auto flex space-x-3">
  //         <button class="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</button>
  //         <button class="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
  //       </div>
  //       <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
  //         <svg width="20" height="20" fill="currentColor">
  //           <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
  //         </svg>
  //       </button>
  //     </div>
  //     <p class="text-sm text-gray-500">
  //       Free shipping on all continental US orders.
  //     </p>
  //   </form>
  // </div>

  {
    /* <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
  <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
    <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Entire house</p>
    <h2 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Beach House in Collingwood</h2>
  </div>
  <div class="col-start-1 row-start-2 px-4 sm:pb-16">
    <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
      <svg width="20" height="20" fill="currentColor" class="text-violet-600">
        <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
      </svg>
      <div class="ml-1">
        <span class="text-black">4.94</span>
        <span class="sm:hidden md:inline">(128)</span>
      </div>
      <div class="text-base font-normal mx-2">·</div>
      <div>Collingwood, Ontario</div>
    </div>
    <hr class="w-16 border-gray-300 hidden sm:block">
  </div>
  <div class="col-start-1 row-start-3 space-y-3 px-4">
    <p class="flex items-center text-black text-sm font-medium">
      <img src="/kevin-francis.jpg" alt="" class="w-6 h-6 rounded-full mr-2 bg-gray-100">
      Hosted by Kevin Francis
    </p>
    <button type="button" class="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button>
  </div>
  <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
    <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
      <div class="relative col-span-3 row-span-2 md:col-span-2">
        <img src="/beach-house.jpg" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
      </div>
      <div class="relative hidden md:block">
        <img src="/beach-house-interior.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
      </div>
      <div class="relative hidden md:block">
        <img src="/beach-house-view.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
      </div>
    </div>
  </div>
</div> 




<section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
  <header class="flex items-center justify-between">
    <h2 class="text-lg leading-6 font-medium text-black">Projects</h2>
    <button class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
      <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
      </svg>
      New
    </button>
  </header>
  <form class="relative">
    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg>
    <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
  </form>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    <li x-for="item in items">
      <a :href="item.url" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white leading-6 font-medium text-black">
              {item.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              {item.category}
            </dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3">
            <dt class="sr-only">Users</dt>
            <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
              <img x-for="user in item.users" :src="user.avatar" :alt="user.name" width="48" height="48" class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
            </dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="hover:shadow-lg flex rounded-lg">
      <a href="/new" class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4">
        New Project
      </a>
    </li>
  </ul>
</section>
*/
  }
};

export default Home;
