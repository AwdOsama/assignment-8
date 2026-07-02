var meals = [
  {
    name: "Tomato Basil Soup",
    rate: 4.5,
    reviews: 128,
    prepTime: 10,
    cookTime: 15,
    servings: "2 people",
    image: "images/food1.jpg",
    desc: "Rich and creamy tomato soup served with fresh basil",
    level: "Easy",
    type: "Soup",
    calories: "250 kcal",
    protein: "4g",
    carbohydrates: "30g",
    fat: "12g",
    fiber: "4g",
    sodium: "480mg",
    ingredients: [
      "4 large ripe tomatoes, chopped",
      "1 cup vegetable broth",
      "2 cloves garlic, minced",
      "1/2 cup heavy cream",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    instructions: [
      "Heat olive oil in a pot and sauté minced garlic until fragrant.",
      "Add chopped tomatoes and vegetable broth, bring to a boil, then simmer for 10 minutes.",
      "Use a blender to purée the soup until completely smooth.",
      "Return to heat, stir in the heavy cream, and season with salt and pepper.",
      "Garnish with fresh basil leaves and serve warm.",
    ],
    chef: [
      "For a richer flavor, roast the tomatoes in the oven before boiling",
      "Serves beautifully with a side of crispy grilled cheese bread",
    ],
  },
  {
    name: "Shrimp Scampi",
    rate: 4.7,
    reviews: 367,
    prepTime: 15,
    cookTime: 10,
    servings: "3 people",
    image: "images/food2.jfif",
    desc: "Garlicky shrimp in white wine butter sauce",
    level: "Easy",
    type: "Seafood",
    calories: "520 kcal",
    protein: "36g",
    carbohydrates: "54g",
    fat: "18g",
    fiber: "3g",
    sodium: "620mg",
    ingredients: [
      "250g linguine pasta",
      "500g large shrimp, peeled and deveined",
      "4 tablespoons unsalted butter",
      "2 tablespoons olive oil",
      "4 cloves garlic, minced",
      "1/2 cup chicken broth or white wine",
      "Juice of 1 lemon",
      "1/4 teaspoon red pepper flakes",
      "Fresh parsley, chopped",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add broth to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss together.",
      "Garnish with parsley and serve immediately.",
    ],
    chef: [
      "Don't overcook shrimp - they cook very quickly",
      "Toss pasta in sauce thoroughly for maximum flavor absorption",
    ],
  },
  {
    name: "Beef Stir-Fry Noodles",
    rate: 4.6,
    reviews: 245,
    prepTime: 20,
    cookTime: 30,
    servings: "2 people",
    image: "images/food3.jfif",
    desc: "Tender beef strips with crunchy vegetables and noodles",
    level: "Easy",
    type: "Asian",
    calories: "580 kcal",
    protein: "34g",
    carbohydrates: "65g",
    fat: "16g",
    fiber: "4g",
    sodium: "910mg",
    ingredients: [
      "200g egg noodles",
      "300g beef sirloin, thinly sliced",
      "1 cup mixed bell peppers, sliced",
      "3 tablespoons soy sauce",
      "1 tablespoon honey",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
    ],
    instructions: [
      "Cook noodles according to package instructions and set aside.",
      "Whisk soy sauce, honey, and sesame oil in a small bowl.",
      "Heat a large skillet, cook beef slices for 3 minutes until browned, then remove.",
      "Stir-fry bell peppers and garlic in the same pan for 3 minutes.",
      "Add noodles, beef, and the sauce back into the pan, toss for 1 minute on high heat.",
    ],
    chef: [
      "Slice the beef against the grain so it stays very tender",
      "Make sure the skillet is completely hot before adding the beef",
    ],
  },
  {
    name: "Healthy Vegetarian Bowl",
    rate: 4.8,
    reviews: 195,
    prepTime: 15,
    cookTime: 10,
    servings: "2 people",
    image: "images/food4.jfif",
    desc: "Vibrant and colorful nutritious bowl loaded with fresh greens and quinoa",
    level: "Easy",
    type: "Salad",
    calories: "390 kcal",
    protein: "12g",
    carbohydrates: "48g",
    fat: "14g",
    fiber: "8g",
    sodium: "290mg",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas, roasted",
      "1/2 cup shredded carrots",
      "1/2 cup diced cucumbers",
      "A handful of cherry tomatoes",
      "2 tablespoons tahini dressing",
    ],
    instructions: [
      "Arrange the cooked quinoa at the base of your serving bowl.",
      "Place roasted chickpeas, carrots, cucumbers, and cherry tomatoes in separate sections on top.",
      "Drizzle the creamy tahini dressing evenly over the entire bowl before serving.",
    ],
    chef: [
      "You can prep all these veggies ahead of time for a quick lunch assembly",
      "Add a squeeze of fresh lemon juice for a bright, tangy finish",
    ],
  },
  {
    name: "Spicy Thai Chicken Curry",
    rate: 4.7,
    reviews: 312,
    prepTime: 15,
    cookTime: 20,
    servings: "3 people",
    image: "images/food5.jpg",
    desc: "Aromatic red curry with chicken breast cooked in coconut milk",
    level: "Medium",
    type: "Asian",
    calories: "540 kcal",
    protein: "32g",
    carbohydrates: "18g",
    fat: "26g",
    fiber: "3g",
    sodium: "720mg",
    ingredients: [
      "400g chicken breast, cubed",
      "2 tablespoons Thai red curry paste",
      "1 can (400ml) coconut milk",
      "1 bell pepper, chopped",
      "1 tablespoon fish sauce",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Sauté the curry paste in a large pan over medium heat for 1 minute until fragrant.",
      "Gradually pour in the coconut milk, stirring constantly until well combined.",
      "Add the cubed chicken and simmer gently for 10 minutes.",
      "Toss in the chopped bell peppers and fish sauce, cooking for another 5 minutes.",
      "Garnish with fresh cilantro leaves and serve alongside warm jasmine rice.",
    ],
    chef: [
      "Shake the coconut milk can thoroughly before opening it",
      "Adjust the spice level by adding more or less curry paste to taste",
    ],
  },
  {
    name: "Chicken Caesar Salad",
    rate: 4.6,
    reviews: 145,
    prepTime: 15,
    cookTime: 8,
    servings: "1 person",
    image: "images/food6.jfif",
    desc: "Crisp romaine lettuce tossed in creamy Caesar dressing with grilled chicken",
    level: "Easy",
    type: "Salad",
    calories: "380 kcal",
    protein: "28g",
    carbohydrates: "12g",
    fat: "24g",
    fiber: "3g",
    sodium: "510mg",
    ingredients: [
      "1 large chicken breast",
      "1 head of Romaine lettuce, chopped",
      "1/4 cup crunchy croutons",
      "3 tablespoons Caesar dressing",
      "2 tablespoons shaved Parmesan cheese",
    ],
    instructions: [
      "Season chicken breast with salt, pepper, and garlic powder.",
      "Pan-fry the chicken for 4-5 minutes per side until fully cooked, then slice into strips.",
      "In a large bowl, toss the chopped romaine lettuce with the Caesar dressing.",
      "Top the dressed lettuce with croutons, shaved Parmesan, and the warm sliced chicken.",
    ],
    chef: [
      "Chill the lettuce in ice water for 5 minutes and dry completely for maximum crispness",
      "Add a light squeeze of fresh lemon over the salad right at the end",
    ],
  },
  {
    name: "Crispy Potato Samosas",
    rate: 4.8,
    reviews: 410,
    prepTime: 25,
    cookTime: 15,
    servings: "4 people",
    image: "images/food7.jpg",
    desc: "Golden, crispy pastry sheets filled with spiced mashed potatoes and peas",
    level: "Medium",
    type: "Appetizer",
    calories: "310 kcal",
    protein: "6g",
    carbohydrates: "42g",
    fat: "14g",
    fiber: "5g",
    sodium: "390mg",
    ingredients: [
      "8 samosa pastry sheets",
      "2 large potatoes, boiled and mashed",
      "1/2 cup green peas",
      "1 teaspoon cumin and coriander powder",
      "1/2 teaspoon chili powder",
      "Oil for deep frying",
    ],
    instructions: [
      "In a bowl, mix the mashed potatoes, peas, cumin, coriander, and chili powder together.",
      "Fold a pastry sheet into a cone shape, fill it with the potato mixture, and seal the edges with a flour-water paste.",
      "Repeat the process for all remaining pastry sheets.",
      "Heat oil in a deep pan and fry the samosas until they turn perfectly golden brown and crispy.",
      "Drain on paper towels and serve hot with mint chutney.",
    ],
    chef: [
      "Ensure the oil is hot enough before frying so the samosas don't absorb excess oil",
      "You can bake them at 200°C for 20 minutes for a healthier alternative",
    ],
  },
  {
    name: "Roasted Chicken with Gravy",
    rate: 4.9,
    reviews: 280,
    prepTime: 15,
    cookTime: 45,
    servings: "4 people",
    image: "images/food8.jfif",
    desc: "Tender roasted chicken pieces served with a rich savory brown gravy",
    level: "Medium",
    type: "Chicken",
    calories: "620 kcal",
    protein: "45g",
    carbohydrates: "15g",
    fat: "32g",
    fiber: "1g",
    sodium: "760mg",
    ingredients: [
      "1 kg chicken pieces (thighs or breasts)",
      "2 tablespoons melted butter",
      "1 teaspoon onion powder and paprika",
      "1 cup chicken stock",
      "1 tablespoon flour (for the gravy)",
    ],
    instructions: [
      "Preheat your oven to 200°C.",
      "Brush chicken pieces with melted butter, then season with onion powder, paprika, salt, and pepper.",
      "Roast in the oven for 40-45 minutes until the skin is crispy and the chicken is fully cooked.",
      "To make the gravy: Mix chicken stock with flour and pan drippings in a small pot, simmer until thick.",
    ],
    chef: [
      "Let the chicken rest for 5 minutes after baking before slicing to retain its juices",
      "Serve alongside mashed potatoes to complement the delicious gravy sauce",
    ],
  },
  {
    name: "Fettuccine Alfredo Pasta",
    rate: 4.9,
    reviews: 512,
    prepTime: 10,
    cookTime: 20,
    servings: "4 people",
    image: "images/food9.jpg",
    desc: "Rich and creamy fettuccine pasta tossed in a velvety Parmesan butter sauce",
    level: "Easy",
    type: "Pasta",
    calories: "710 kcal",
    protein: "18g",
    carbohydrates: "68g",
    fat: "28g",
    fiber: "2g",
    sodium: "640mg",
    ingredients: [
      "300g fettuccine pasta",
      "2 cups heavy cream",
      "1 cup freshly grated Parmesan cheese",
      "3 cloves garlic, minced",
      "2 tablespoons butter",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Boil the fettuccine pasta in salted water until al dente, then drain.",
      "Melt butter in a large pan over medium heat and sauté minced garlic for 30 seconds.",
      "Pour in the heavy cream and bring to a gentle simmer.",
      "Turn off the heat, stir in the grated Parmesan cheese until completely melted and smooth.",
      "Toss the pasta directly into the cream sauce, coat well, and season with black pepper.",
    ],
    chef: [
      "Keep a cup of pasta water to adjust and thin the sauce consistency if needed",
      "Freshly grated Parmesan cheese creates a much smoother texture than pre-packaged options",
    ],
  },
  {
    name: "Margherita Pizza",
    rate: 4.8,
    reviews: 430,
    prepTime: 30,
    cookTime: 40,
    servings: "6 people",
    image: "images/food10.jpg",
    desc: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil",
    level: "Hard",
    type: "Pasta",
    calories: "680 kcal",
    protein: "38g",
    carbohydrates: "52g",
    fat: "24g",
    fiber: "3g",
    sodium: "840mg",
    ingredients: [
      "9 lasagna pasta sheets",
      "400g minced beef, cooked in tomato sauce",
      "2 cups béchamel sauce",
      "2 cups shredded mozzarella cheese",
      "1/4 cup grated Parmesan cheese",
    ],
    instructions: [
      "Preheat the oven to 180°C.",
      "In a baking dish, spread a thin layer of meat sauce, then place 3 lasagna sheets on top.",
      "Layer with meat sauce, creamy béchamel sauce, and a handful of mozzarella cheese.",
      "Repeat the layering process two more times, finishing with a generous layer of mozzarella and Parmesan on top.",
      "Bake in the oven for 35-40 minutes until the cheese is beautifully golden and bubbling.",
    ],
    chef: [
      "Let the lasagna rest for 15 minutes after baking so it cuts into perfect clean slices",
      "Cover with foil for the first 20 minutes of baking to prevent the top cheese from burning",
    ],
  },
];

function displayMeal(meal) {
  document.getElementById("rate").innerText = meal.rate;
  document.getElementById("review").innerText = `(${meal.reviews} reviews)`;

  document.getElementById("prep-time").innerText = meal.prepTime + " min";
  document.getElementById("cook-time").innerText = meal.cookTime + " min";
  document.getElementById("servings").innerText = meal.servings;
  document.getElementById("food-img").src = meal.image;
  document.getElementById("name").innerHTML = meal.name;
  document.getElementById("desc").innerHTML = meal.desc;
  document.getElementById("level").innerHTML = meal.level;
  document.getElementById("type").innerHTML = meal.type;
  document.getElementById("Calories").innerHTML = meal.calories;
  document.getElementById("protein").innerHTML = meal.protein;
  document.getElementById("carbohydrates").innerHTML = meal.carbohydrates;
  document.getElementById("fat").innerHTML = meal.fat;
  document.getElementById("fiber").innerHTML = meal.fiber;
  document.getElementById("sodium").innerHTML = meal.sodium;

  var cartonaIngrad = "";
  for (var i = 0; i < meal.ingredients.length; i++) {
    cartonaIngrad += `
      <li>
        <div class="d-flex gap-3">
          <span class="navs-icon-1 d-flex align-items-center justify-content-center bg-navs-icon rounded-circle text-white fw-semibold" style="width: 25px; height: 25px">
            ${i + 1}
          </span>
          <p>${meal.ingredients[i]}</p>
        </div>
      </li>`;
  }
  document.getElementById("ingredients-list").innerHTML = cartonaIngrad;

  var cartonaInstructions = "";
  for (var i = 0; i < meal.instructions.length; i++) {
    cartonaInstructions += `
      <li>
        <div class="d-flex gap-3 align-items-center">
          <span class="navs-icon-1 d-flex align-items-center justify-content-center flex-shrink-0 bg-navs-icon rounded-4 text-white fw-bold fs-6" style="width: 50px; height: 50px">
            ${i + 1}
          </span>
          <p class="pra4 mb-0">
            ${meal.instructions[i]}
          </p>
        </div>
      </li>`;
  }
  document.getElementById("instructions-list").innerHTML = cartonaInstructions;
  var cartonachef = "";
  for (var i = 0; i < meal.chef.length; i++) {
    cartonachef += ` <div class="chef-card p-3 d-flex gap-3 align-items-center rounded-3">
                        <div class="chef-icon d-flex align-items-center justify-content-center rounded-circle" style="width: 20px; height: 20px">
                          <i class="fa-solid fa-check text-white fs-6"></i>
                        </div>
                        <p class="mb-0 pra4" id="chef-pra">${meal.chef[i]}</p>
                      </div>`;
  }
  document.getElementById("chef-tips-list").innerHTML = cartonachef;
}

function checkTime(prepTime, cookTime) {
  var totalTime = prepTime + cookTime;

  if (totalTime >= 45) {
    document.getElementById("warnning").classList.remove("d-none");
  } else {
    document.getElementById("warnning").classList.add("d-none");
  }
}

function getRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * meals.length);
  var randomMeal = meals[randomIndex];

  checkTime(randomMeal.prepTime, randomMeal.cookTime);
  displayMeal(randomMeal);
}
getRandomRecipe();
