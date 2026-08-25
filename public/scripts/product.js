let allProduct = [
  {
    id: 1,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p4.png",
    price: {
      current: 175000,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 4.8,
    stock: true,
  },

  {
    id: 2,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p3.png",
    price: {
      current: null,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 3.7,
    stock: false,
  },

  {
    id: 3,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p1.png",
    price: {
      current: 154000,
      old: 175000,
      currency: "تومان",
    },
    discount: 12,
    rating: 5,
    stock: true,
  },
  {
    id: 4,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p2.png",
    price: {
      current: 175000,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 4.4,
    stock: true,
  },
  {
    id: 5,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p1.png",
    price: {
      current: 154000,
      old: 175000,
      currency: "تومان",
    },
    discount: 12,
    rating: 4.6,
    stock: true,
  },
  {
    id: 6,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p2.png",
    price: {
      current: null,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 2.5,
    stock: false,
  },
  {
    id: 7,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p4.png",
    price: {
      current: 175000,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 5,
    stock: true,
  },

  {
    id: 8,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./assets/images/p3.png",
    price: {
      current: 175000,
      old: null,
      currency: "تومان",
    },
    discount: null,
    rating: 4.2,
    stock: true,
  },
];

const productList = document.getElementById("product-list");

allProduct.forEach((product) => {
  const card = document.createElement("div");

  card.className = "bg-white dark:bg-zinc-700 p-2 md:p-5 rounded-2xl shadow-md";

  card.insertAdjacentHTML(
  "beforeend", `
  <div class="relative mb-2 md:mb-5">
    <img src="${product.image}" alt="${product.title}" class="w-32 mx-auto md:w-auto"  />
   ${
     product.discount
       ? `<span class="absolute top-1.5 right-1.5 block h-5 text-xs/6 font-dana font-semibold bg-orange-300 text-white dark:text-zinc-700 px-2.5 rounded-full md:h-7.5 md:text-base/8.5 md:px-3.5"
      >${product.discount}%</span>`
       : ""
   }
  </div>
  <h5 class="font-dana font-medium text-sm h-10 md:h-14 md:text-xl text-zinc-700 line-clamp-2 dark:text-white">${product.title}</h5>
  <div class="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">

  ${
    product.stock
      ? `<div class="text-teal-600 dark:text-emerald-500">
      <span class="font-dana font-semibold text-sm xs:text-base md:text-xl">${product.price.current.toLocaleString()}</span>
      <span class="tracking-tighter text-xs md:text-sm">تومان</span>
    </div>`
      : ` <div class="font-dana font-semibold text-sm xs:text-base md:text-xl ">
          <span class="font-dana font-semibold text-red-400 text-sm md:text-lg">فعلاً موجود نیست</span>
        </div>`
  }

   ${
     product.price.old
       ? ` <div class="offer">
      <span class="text-xs md:text-xl">${product.price.old.toLocaleString()}</span>
      <span class="hidden xl:inline tracking-tighter md:text-sm">تومان</span>
    </div>`
       : ""
   }
  </div>
  <div class="flex items-center justify-between mt-2.5">
    <div class="flex items-center gap-x-2.5 md:gap-x-3">
      <button
        type="button"
        class="flex-center size-6 text-gray-400 bg-gray-100 rounded-full transition-all cursor-pointer md:size-9 dark:bg-zinc-800 hover:text-white hover:bg-teal-600 dark:hover:bg-emerald-500">
        <svg class="size-4 md:size-5.5">
          <use href="#shopping-cart"></use>
        </svg>
      </button>
      <a href="" class="block text-gray-400 rounded-full transition-all hover:text-teal-600 dark:hover:text-emerald-500">
        <svg class="size-4 md:size-6">
          <use href="#arrows-right-left"></use>
        </svg>
      </a>
    </div>

    <div class="flex">
      <div class="relative inline-flex">

        <div class="flex flex-row-reverse text-gray-300">
        ${Array(5)
          .fill()
          .map(
            () => `
                  <svg class="size-4 md:size-6">
                    <use href="#star"></use>
                  </svg>
                `,
          )
          .join("")}
        </div>

        <div id="rating-fill" class="absolute inset-y-0 left-0 overflow-hidden" style="width: ${(product.rating / 5) * 100}%">
          <div class="flex flex-row-reverse text-yellow-400"   >
            ${Array(5)
              .fill()
              .map(
                () => `
                  <svg class="size-4 md:size-6 shrink-0">
                    <use href="#star"></use>
                  </svg>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </div>
  `);

  productList.appendChild(card);
});
