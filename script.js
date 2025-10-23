const girlClothes = [
  {
    imageUrl: "/images/1.webp",
    price: "₹255",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/2.webp",
    price: "₹260",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/3.webp",
    price: "₹265",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/4.webp",
    price: "₹270",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/5.webp",
    price: "₹275",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/6.webp",
    price: "₹280",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/7.webp",
    price: "₹285",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/8.webp",
    price: "₹290",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/9.webp",
    price: "₹295",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/10.webp",
    price: "₹299",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/11.webp",
    price: "₹250",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/12.webp",
    price: "₹255",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/14.webp",
    price: "₹265",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/15.webp",
    price: "₹270",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/16.webp",
    price: "₹275",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/17.webp",
    price: "₹280",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/18.webp",
    price: "₹285",
    description: "Stylish suit and pant combo.",
  },
  {
    imageUrl: "/images/19.webp",
    price: "₹290",
    description: "Stylish suit and pant combo.",
  },
];

const productListContainer = document.getElementById("products-list");

// Modal elements
const modal = new bootstrap.Modal(document.getElementById("productModal"));
const modalImage = document.getElementById("modalImage");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

girlClothes.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";

  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${item.imageUrl}" class="card-img-top" alt="Clothing Image" style="height: 300px; object-fit: cover;">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${item.price}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  `;

  card.querySelector(".card").addEventListener("click", () => {
    modalImage.src = item.imageUrl;
    modalPrice.textContent = item.price;
    modalDescription.textContent = item.description;
    modal.show();
  });

  productListContainer.appendChild(card);
});