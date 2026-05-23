let allPlant = [];

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      allPlant = data.plants;
      const dataPlant = allPlant;

      loadDataCategories(dataPlant);
      //   console.log(dataPlant);
    });
};

const loadDataCategories = (loadData) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";
  //   console.log(loadData);
  loadData.forEach((data) => {
    const dataDiv = document.createElement("div");
    dataDiv.innerHTML = `
    <div class="card bg-base-100 w-auto shadow-sm" id="all-categories">
          <figure class="px-6 pt-4">
            <img
            
              src="${data.image}"
              alt="Shoes"
              class="rounded-xl w-80 h-48 "
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <p class="text-justify">
              ${data.description}
            </p>

            <div class="flex justify-between items-center">
              <div class="text-[#15803D] bg-[#DCFCE7] p-1 rounded-xl">
                 ${data.category}
              </div>
              <div class="font-bold">${data.price}</div>
            </div>

            <div class="card-actions">
              <button class="btn green text-white w-full rounded-3xl">
                Add to cart
              </button>
            </div>
          </div>
        </div>
    `;
    categoriesContainer.append(dataDiv);
  });
};
loadCategories();
const filterCategories = (categoryName) => {
  const filteredPlant = allPlant.filter((plant) => {
    console.log(plant.category);
    return plant.category === categoryName;
  });

  loadDataCategories(filteredPlant);
};

// function showModal() {
//   const modalContainer = document.getElementById("modal-container");
//   const modals = document.createElement("div");
//   modals.innerHTML = `

//   `;
//   modalContainer.append(modals);
// }

// const filterCategories = (categoryName) => {
//   const categoriesContainer = document.getElementById("categories-container");

//   const filteredPlant = categoryName.filter((plant) => {
//     console.log(plant.category_name);
//     const plantCategory = plant.category_name;
//     return plantCategory;
//   });
// };

// {
//       "id": 1,
//       "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//       "name": "Mango Tree",
//       "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//       "category": "Fruit Tree",
//       "price": 500
//     },
