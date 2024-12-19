// Open and close the modal for adding a new recipe
const modal = document.getElementById("recipeModal");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const closeBtn = document.querySelector(".close-btn");

addRecipeBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Handle form submission to add a new recipe
const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");

recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const recipeName = document.getElementById("recipeName").value;
  const recipeIngredients = document.getElementById("recipeIngredients").value;
  const recipeInstructions = document.getElementById("recipeInstructions").value;

  const newRecipe = document.createElement("li");
  newRecipe.innerHTML = `
    <h3>${recipeName}</h3>
    <p><strong>Ingredients:</strong> ${recipeIngredients}</p>
    <p><strong>Instructions:</strong> ${recipeInstructions}</p>
  `;
  
  recipeList.appendChild(newRecipe);

  // Clear the form and close the modal
  recipeForm.reset();
  modal.style.display = "none";
});