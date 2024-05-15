import { json } from "react-router";

class API {
  constructor() {}

  async getCatetoryList() {
    const s = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const p = await s.json();
    return p;
  }

  async getAutoSuggetion(limit = 5, value) {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value
    );
    const json = await data.json();
    const meals = json.meals;
    const a = [];
    for (let i = 0; i < meals.length && i < limit; i++) {
      a.push(meals[i].strMeal);
    }
    return a;
  }

  async getMeal(state, limit) {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    const jsonData = await data.json();
    const { meals } = jsonData;
    const tempMeal = [];
    for (let i = state; i < state + limit; i++) {
      tempMeal.push(meals[i]);
    }
    return tempMeal;
  }

  async getMealPagination(length, state, limit) {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    const jsonData = await data.json();
    const { meals } = jsonData;
    const tempMeal = [];
    for (let i = length; i < length + limit; i++) {
      if (i < meals.length) tempMeal.push(meals[i]);
    }
    return tempMeal;
  }
}

const api = new API();
const apiBase = "www.themealdb.com/api/json/v1/1";
export { apiBase };
export default api;
