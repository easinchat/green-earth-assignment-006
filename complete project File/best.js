let allPlant = [];

const loadDataApi = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((resp) => resp.json())
    .then((json) => {
      const data = json.plants;
      allPlant = data;
      loadData(allPlant);
    });
};

const loadData = (loads) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";
  loads.forEach((load) => {
    const dataDiv = document.createElement("div");
    dataDiv.innerHTML = `
    <div class="card bg-base-100 w-auto shadow-sm" id="all-categories">
          <figure class="px-6 pt-4">
            <img
              src="${load.image}"
              alt="Shoes"
              class="rounded-xl w-full h-48"
            />
          </figure>
          <div class="card-body" >
            <h2 class="card-title" onclick="showModal('${load.image}','${load.name}','${load.price}','${load.description}')">${load.name}</h2>
            <p class="text-justify">
              ${load.description}
            </p>

            <div class="flex justify-between items-center">
              <div class="text-[#15803D] bg-[#DCFCE7] p-1 rounded-xl">
                ${load.category}
              </div>
              <div class="font-bold">${load.price}</div>
            </div>

            <div class="card-actions">
              <button class="btn green text-white w-full rounded-3xl" onclick="showCart('${load.name}'
              ,${load.price})">
                Add to cart
              </button>
            </div>
          </div>
        </div>
    `;
    categoriesContainer.append(dataDiv);
  });
};
const filterCategories = (categoryName) => {
  const dataPlan = allPlant.filter((data) => {
    // console.log(data.category);
    return data.category === categoryName;
  });
  loadData(dataPlan);
};
loadDataApi();

function showModal(image, name, price, description) {
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-title").innerText = "Category:" + name;
  document.getElementById("modal-price").innerText = "Price:" + " " + price;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("my_modal_5").showModal();
}
let total = 0;
function showCart(name, price) {
  const yourCartContainer = document.getElementById("your-cart-container");

  total = total + price;
  const yourCart = document.createElement("div");
  yourCart.innerHTML = `
   <div
          class="bg-[#F0FDF4] p-2 m-2 rounded-md flex items-center justify-between"
        >
          <div class="">
            <h3>${name}</h3>
            <p>${price}</p>
          </div>
          
          <p onclick="deleteCard(this, ${price})">x</p>
        </div>
        
    `;
  document.getElementById("total-container").innerText = total;

  yourCartContainer.append(yourCart);
}
function deleteCard() {
  const yourCartContainer = document.getElementById("your-cart-container");
  return (yourCartContainer.innerHTML = "");
}

function deleteCard(el, price) {
  const item = el.parentElement;
  item.remove();

  total = total - price;

  document.getElementById("total-container").innerText = total;
}
