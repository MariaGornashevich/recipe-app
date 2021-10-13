getRandomMeal();

async function getRandomMeal() {
  const response = await fetch(
    "http://www.themealdb.com/api/json/v1/1/random.php"
  );

  const responseData = await response.json();
  const randomMeal = responseData.meals[0];

  console.log(randomMeal);
}

async function getMealById(id) {
  const meal = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealsBySearch(term) {
  const meals = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}
