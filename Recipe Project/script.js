// Define an array of 10 dinner recipes
// Define an array of 10 dinner recipes
const recipes = [
    {
        name: "Spaghetti Carbonara",
        ingredients: [
            "200g spaghetti",
            "2 large eggs",
            "100g Pecorino Romano cheese, grated",
            "100g guanciale or pancetta, diced",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste",
        ],
        instructions: [
            "Cook the spaghetti according to package instructions until al dente.",
            "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
            "In a skillet, cook the diced guanciale or pancetta until crispy. Add minced garlic and sauté briefly.",
            "Add the cooked pasta to the skillet with the pancetta and garlic. Toss to combine.",
            "Remove from heat and quickly stir in the egg and cheese mixture. The heat from the pasta will cook the eggs and create a creamy sauce.",
            "Serve hot with additional grated cheese and black pepper if desired.",
        ],
    },
    {
        name: "Chicken Alfredo",
        ingredients: [
            "8 oz fettuccine pasta",
            "2 boneless, skinless chicken breasts",
            "2 cups heavy cream",
            "1 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "2 tablespoons butter",
            "Salt and black pepper to taste",
        ],
        instructions: [
            "Cook the fettuccine pasta according to package instructions until al dente.",
            "Season chicken breasts with salt and black pepper. In a skillet, cook chicken until no longer pink in the center. Remove and slice into strips.",
            "In the same skillet, melt butter and sauté minced garlic until fragrant.",
            "Pour in the heavy cream and grated Parmesan cheese. Stir until the sauce thickens.",
            "Add cooked fettuccine pasta and chicken strips to the skillet. Toss to coat with the sauce.",
            "Serve hot with additional Parmesan cheese and black pepper if desired.",
        ],
    },

        {
            name: "Spaghetti Carbonara",
            ingredients: [
                "200g spaghetti",
                "2 large eggs",
                "100g Pecorino Romano cheese, grated",
                "100g guanciale or pancetta, diced",
                "2 cloves garlic, minced",
                "Salt and black pepper to taste",
            ],
            instructions: [
                "Cook the spaghetti according to package instructions until al dente.",
                "In a bowl, whisk together eggs, grated Pecorino Romano cheese, salt, and black pepper.",
                "In a skillet, cook the diced guanciale or pancetta until crispy. Add minced garlic and sauté briefly.",
                "Add the cooked pasta to the skillet with the pancetta and garlic. Toss to combine.",
                "Remove from heat and quickly stir in the egg and cheese mixture. The heat from the pasta will cook the eggs and create a creamy sauce.",
                "Serve hot with additional grated cheese and black pepper if desired.",
            ],
        },
        {
            name: "Chicken Alfredo",
            ingredients: [
                "8 oz fettuccine pasta",
                "2 boneless, skinless chicken breasts",
                "2 cups heavy cream",
                "1 cup grated Parmesan cheese",
                "2 cloves garlic, minced",
                "2 tablespoons butter",
                "Salt and black pepper to taste",
            ],
            instructions: [
                "Cook the fettuccine pasta according to package instructions until al dente.",
                "Season chicken breasts with salt and black pepper. In a skillet, cook chicken until no longer pink in the center. Remove and slice into strips.",
                "In the same skillet, melt butter and sauté minced garlic until fragrant.",
                "Pour in the heavy cream and grated Parmesan cheese. Stir until the sauce thickens.",
                "Add cooked fettuccine pasta and chicken strips to the skillet. Toss to coat with the sauce.",
                "Serve hot with additional Parmesan cheese and black pepper if desired.",
            ],
        },
        {
            name: "Beef Stir-Fry",
            ingredients: [
                "1 lb flank steak, thinly sliced",
                "1 bell pepper, sliced",
                "1 onion, sliced",
                "2 cloves garlic, minced",
                "1/4 cup soy sauce",
                "2 tablespoons vegetable oil",
                "1 tablespoon cornstarch",
                "1 teaspoon sugar",
                "1/2 teaspoon ginger, minced",
                "Cooked rice for serving",
            ],
            instructions: [
                "In a bowl, whisk together soy sauce, cornstarch, sugar, and minced ginger. Set aside.",
                "In a large skillet or wok, heat vegetable oil over high heat. Add sliced flank steak and stir-fry until browned. Remove from skillet and set aside.",
                "In the same skillet, add sliced bell pepper and onion. Stir-fry until slightly tender.",
                "Add minced garlic and cook for an additional minute.",
                "Return the cooked beef to the skillet and pour the soy sauce mixture over the ingredients. Stir-fry until the sauce thickens and coats the beef and vegetables.",
                "Serve hot over cooked rice.",
            ],
        },
        // Add more recipes here
    ];
    


// ... (Add more recipes following the same format)



// Get HTML elements
const recipeNameElement = document.getElementById("recipeName");
const ingredientsListElement = document.getElementById("ingredientsList");
const instructionsListElement = document.getElementById("instructionsList");
const generateButton = document.getElementById("generateButton");

// Function to generate a random recipe
function generateRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    recipeNameElement.textContent = randomRecipe.name;
    
    // Clear previous ingredients and instructions
    ingredientsListElement.innerHTML = "";
    instructionsListElement.innerHTML = "";

    // Populate ingredients list
    randomRecipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsListElement.appendChild(li);
    });

    // Populate instructions list
    randomRecipe.instructions.forEach((instruction) => {
        const li = document.createElement("li");
        li.textContent = instruction;
        instructionsListElement.appendChild(li);
    });
}

// Generate a random recipe when the button is clicked
generateButton.addEventListener("click", generateRandomRecipe);

// Generate a random recipe on page load
generateRandomRecipe();
