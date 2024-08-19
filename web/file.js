document.addEventListener("DOMContentLoaded", function () {
  var images = [
    "https://danangbest.com/uploads/banner-danangbest.webp",
    "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
    "https://wiki-travel.com.vn/Uploads/picture/Thaophuongnguyen-171621041606-da-1.jpg",
  ];

  var currentIndex = 0;
  var sliderImage = document.querySelector(".slide-show img");

  // Function to change the image
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
  }

  // Set interval to change image every 3 seconds
  setInterval(changeImage, 3000);
});

const datas1 = [
  {
    id: 1,
    image:
      "https://danangbest.com/uploads/product/ngu-hanh-son-hoi-an-1-ngay.webp",
    title: "Ngũ Hành Sơn - Hội An ",
    time: "2 ngày 1 đêm A1",
    start: "Hằng Ngày",
  },
  {
    id: 2,
    image:
      "https://danangbest.com/uploads/product/ba-na-hills-2-ngay-1-dem1.webp",
    title: "Bà Nà - Ngũ Hành Sơn",
    time: "2 ngày 1 đêm A2",
    start: "Hằng Ngày",
  },
  {
    id: 3,
    image: "https://danangbest.com/uploads/product/nui-than-tai-1-ngay.webp",
    title: "Núi Thần Tài",
    time: "2 ngày 1 đêm A3",
    start: "Hằng Ngày",
  },
];

const datas2 = [
  {
    id: 1,
    image:
      "https://danangbest.com/uploads/product/ngu-hanh-son-hoi-an-1-ngay.webp",
    title: "Ngũ Hành Sơn - Hội An ",
    time: "3 ngày 2 đêm B1",
    start: "Hằng Ngày",
  },
  {
    id: 2,
    image:
      "https://danangbest.com/uploads/product/ba-na-hills-2-ngay-1-dem1.webp",
    title: "Bà Nà - Ngũ Hành Sơn",
    time: "3 ngày 2 đêm B2",
    start: "Hằng Ngày",
  },
  {
    id: 3,
    image: "https://danangbest.com/uploads/product/nui-than-tai-1-ngay.webp",
    title: "Núi Thần Tài",
    time: "3 ngày 2 đêm B3",
    start: "Hằng Ngày",
  },
];
const datas3 = [
  {
    id: 1,
    image:
      "https://danangbest.com/uploads/product/ngu-hanh-son-hoi-an-1-ngay.webp",
    title: "Ngũ Hành Sơn - Hội An ",
    time: "4 ngày 3 đêm C1",
    start: "Hằng Ngày",
  },
  {
    id: 2,
    image:
      "https://danangbest.com/uploads/product/ba-na-hills-2-ngay-1-dem1.webp",
    title: "Bà Nà - Ngũ Hành Sơn",
    time: "4 ngày 3 đêm C2",
    start: "Hằng Ngày",
  },
  {
    id: 3,
    image: "https://danangbest.com/uploads/product/nui-than-tai-1-ngay.webp",
    title: "Núi Thần Tài",
    time: "4 ngày 3 đêm C3",
    start: "Hằng Ngày",
  },
];
const datas4 = [
  {
    id: 1,
    image:
      "https://danangbest.com/uploads/product/ngu-hanh-son-hoi-an-1-ngay.webp",
    title: "Ngũ Hành Sơn - Hội An ",
    time: "5 ngày 4 đêm D1",
    start: "Hằng Ngày",
  },
];

function createProductCards(data, productcardid) {
  const container = document.getElementById(productcardid);

  data.forEach((item) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Create card content
    card.innerHTML = `
        <div class="card-image">
          <img src="${item.image}" alt="">
        </div>
        <div class="card__info">
          <h3 class="card__title">${item.title}</h3>
          <p class="card__time">Thời Gian: <span>${item.time}</span></p>
          <p class="card__time">Khởi Hành: <span>${item.start}</span></p>
        </div>
        <div class="buttons">
          <button class="card__btn">Liên Hệ</button>
        </div>
      `;

    // Append card to container
    container.appendChild(card);
  });
}

// Call the function with the data
createProductCards(datas1, "productContainer2");
createProductCards(datas2, "productContainer3");
createProductCards(datas3, "productContainer4");
createProductCards(datas4, "productContainer5");
