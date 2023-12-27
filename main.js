var recipes = {
    sides: [
        "Miso Glazed Carrots",
        "Coleslaw",
        "Garden Salad",
        "Crispy Potatoes",
        "Sweet Potato Tots",
        "Coconut Rice",
        "Caeser Salad",
        "Shrimp Summer Rolls",
        "Garlic Butter Mushrooms",
        "Hush Puppies",
        "Sludgy Spinach",
        "Yam Sprouts",
        "Mushy Pea Pudding",
        "Garlic Grits",
        "Bread Crumbs",
        "Sour Pickle Slaw",
        "Lettuce Soup",
        "Gloopy Carrots",
        "Squishy Squash",
        "Lumpy Potatos",
        "Oil Rings",
        "Fermented Beet Bites",
        "Canned Corn",
        "Mushroom Medley",
        "Bitter Broccoli",
        "Fish Sauce Fries",
        "Bean Gravy",
        "Tomato Relish",
        "Sour Milk Mashed Potatoes",
        "Sticky Stew"
    ],
    mains: [
        "Spaghetti and Meatballs",
        "Pineapple Chicken",
        "Shakshuka",
        "Thai Yellow Curry",
        "Bibimbap",
        "Chicken Parmesean",
        "Butternut Squash Soup",
        "BBQ Chicken Burgers",
        "Ramen",
        "Empanadas",
        "Chicken Fried Rice",
        "Sheet Pan Fajitas",
        "Margarita Pizza",
        "Charred Chicken Charcoal",
        "Octopus Overload",
        "Cheesegrater Sloppy Joe",
        "Singed Salmon",
        "Mystery Loaf",
        "Spaghetti with Clumpy Sauce",
        "Dry Duck Delight",
        "yam",
        "Bland Vegetables",
        "Salty Porridge",
        "Fish Fingers and Peas",
        "Steak Gumbo",
        "Squidgy Eggplant",
        "Tofu Terror",
        "Burnt Bottom Pizza",
        "Sour Shrimp",
        "Meatball Mishap",
        "Risotto Rocks",
        "Hot Dog Stew",
        "Zombie Zucchini Zoodles",
        "Chicken Chunks"
    ],
    desserts: [
        "Apple Pie",
        "Lemon Meringue Pie",
        "Black Forest Cake",
        "Banana Bread",
        "Peach Cobbler",
        "Cheesecake",
        "Funfetti Cake",
        "Baklava",
        "Flan",
        "Macarons",
        "Macaroons",
        "Chocolate Cupcakes",
        "Pavlova",
        "Pumpkin Pie",
        "Key Lime Pie",
        "Tart Tatin",
        "Croissants",
        "Eclairs",
        "Soggy Pudding",
        "Stale Crumble",
        "Burnt Caramel Custard",
        "Overwhipped Cream Pie",
        "Mushy Tart",
        "Sour Lemon Meringue",
        "Bitter Chocolate Eclairs",
        "Hard-as-Rock Candy",
        "Oily Olive Oil Cake",
        "Curdy Cake",
        "Dry Doughnut Disaster",
        "Grainy Ganache",
        "Rice Pudd",
        "Waffle Sundae",
        "Crumbly Crisp Cobbler",
        "Salty Caramel",
        "Cream",
        "Ashy Pie",
        "Chalky Mousse",
        "Gummy Globs"
    ]
}


document.addEventListener('DOMContentLoaded', function() {
    var letsCookButton = document.querySelector('.looking-for button');
    var cookPotDiv = document.querySelector('.cook-pot');

    letsCookButton.addEventListener('click', function() {
        var selectedOptionValue = document.querySelector('input[name="menuChoice"]:checked').value;
        var randomRecipe;

        if (selectedOptionValue === 'Side') {
            randomRecipe = recipes.sides[Math.floor(Math.random() * recipes.sides.length)];
        } else if (selectedOptionValue === 'Main Dish') {
            randomRecipe = recipes.mains[Math.floor(Math.random() * recipes.mains.length)];
        } else if (selectedOptionValue === 'Dessert') {
            randomRecipe = recipes.desserts[Math.floor(Math.random() * recipes.desserts.length)];
        } else {
            randomRecipe = 'Please select another option.';
        }

        cookPotDiv.textContent = randomRecipe;
    });
})

