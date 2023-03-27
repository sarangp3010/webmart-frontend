const buttonAddNew = document.querySelector("#add-inventory-btn");
const buttonAPI = document.querySelector("#btn-pi-fetch-table");
const buttonUpdate = document.querySelector("#btn-update-inventory-items");
// const apiKey = "YOUR_RAPIDAPI_KEY"; // Replace with your RapidAPI key
// const apiUrl = "https://api.example.com"; // Replace with the API endpoint URL
const API_KEY = '4c391941b8msh63952f885f2594ep16b019jsn1d7447ebdd36';
const API_ENDPOINT = 'aapidAPI.com';

// buttonAPI.addEventListener("click", buttonAPIClick);

// document.getElementById("btn-pi-fetch-table").addEventListener("click", function () {
//     fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
//       .then(response => response.json())
//       .then(data => {
//         const productName = data.product.product_name;
//         const productQuantity = data.product.quantity;
//         const productImage = data.product.image_url;
//         const tableRow = document.createElement("tr");
//         const nameCell = document.createElement("td");
//         const quantityCell = document.createElement("td");
//         const imageCell = document.createElement("td");
//         const imageElement = document.createElement("img");
  
//         nameCell.textContent = productName;
//         quantityCell.textContent = productQuantity;
//         imageElement.src = productImage;
//         imageCell.appendChild(imageElement);
//         tableRow.appendChild(nameCell);
//         tableRow.appendChild(quantityCell);
//         tableRow.appendChild(imageCell);
//         document.getElementById("table-body").appendChild(tableRow);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   });

// Get the button element
// Select the modal and the button that triggers the update
const modal = document.querySelector('#myModal');
const updateButton = document.querySelector('#update-inventory');

// Attach a click event listener to the button
updateButton.addEventListener('click', () => {
  // Make a GET request to your server using Axios
  axios.get('http://localhost:5001/api/data')
    .then(response => {
      // Extract the data from the response
      const inventory = response.data;

      // Update the modal with the retrieved data
      const modalBody = modal.querySelector('.modal-body');
      modalBody.innerHTML = '';

      inventory.forEach(item => {
        const { name, quantity, image_url } = item;

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemName = document.createElement('h3');
        itemName.textContent = name;

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${quantity}`;

        const itemImage = document.createElement('p');
        itemImage.textContent = image_url;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemQuantity);
        itemContainer.appendChild(itemImage);

        modalBody.appendChild(itemContainer);
      });

      // Display the modal
      $(modal).modal('show');
    })
    .catch(error => {
      console.error(error);
    });
});


// Add a click event listener to the button
// updateButton.addEventListener('click', async () => {
//   try {
//     // Make a GET request to the backend API endpoint to fetch the inventory data
//     const response = await fetch('/api/inventory');
//     const data = await response.json();

//     // Get the inventory list element in the HTML page
//     const inventoryList = document.getElementById('inventory-list');

//     // Clear the current list of inventory items
//     inventoryList.innerHTML = '';

//     // Loop through the inventory data and add each item to the list element
//     data.forEach((item) => {
//       // Create a new list item element
//       const listItem = document.createElement('li');

//       // Create an image element for the item
//       const image = document.createElement('img');
//       image.src = item.image;
//       image.alt = item.name;
//       image.width = 100;
//       image.height = 100;

//       // Create a span element for the item name
//       const nameSpan = document.createElement('span');
//       nameSpan.textContent = item.name;

//       // Create a span element for the item quantity
//       const quantitySpan = document.createElement('span');
//       quantitySpan.textContent = `Quantity: ${item.quantity}`;

//       // Add the image, name, and quantity elements to the list item
//       listItem.appendChild(image);
//       listItem.appendChild(nameSpan);
//       listItem.appendChild(quantitySpan);

//       // Add the list item to the inventory list
//       inventoryList.appendChild(listItem);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });




buttonUpdate.addEventListener("click", buttonUpdateClicked);
buttonAddNew.addEventListener("click", buttonAddNewClicked);

function buttonUpdateClicked() {
    console.log("toptal82","button updated")
}

function buttonAPIClick(){
    console.log("cdo","haha");
    fetch(API_ENDPOINT, {
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        },
      })
        .then(response => response.json())
        .then(data => {
          // Parse the data and create an HTML table
          const table = document.createElement('table');
          const headerRow = table.insertRow();
          for (const key in data[0]) {
            const headerCell = headerRow.insertCell();
            headerCell.textContent = key;
          }
          data.forEach(item => {
            const row = table.insertRow();
            for (const key in item) {
              const cell = row.insertCell();
              cell.textContent = item[key];
            }
          });
          // Display the table in the DOM
          const container = document.querySelector('#table-container');
          container.appendChild(table);
        })
        .catch(error => {
          console.error(error);
        });
}

function buttonAddNewClicked() {
  const nameInput = document.getElementById('inventory-name');
  const quantityInput = document.getElementById('inventory-quantity');
  const imgInput = document.getElementById('inventory-image');
  const name = nameInput.value;
  const quantity = quantityInput.value;
  const img = imgInput.value;
  console.log("top82:   =>    ", name + " : " + quantity + " : " + img); // Or you can send thi
}