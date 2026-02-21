const monthlyBudget = 1500; 
let totalSpent = 0; 
let totalProtein = 0;   
let totalCalories = 0;

const mealName = "Oats and 4 Eggs";
const mealCostString = "85.50"; 
const mealProteinString = "24"; 
const mealCaloriesString = "350";

const mealCost = Number(mealCostString);
const mealProtein = Number(mealProteinString);
const mealCalories = Number(mealCaloriesString);

totalSpent = totalSpent + mealCost;
totalProtein = totalProtein + mealProtein;
totalCalories = totalCalories + mealCalories;

console.log("--- Meal Added: " + mealName + " ---");
console.log("Protein: " + mealProtein + "g");
console.log("Calories: " + mealCalories + "kcal");
console.log("Cost: ₹" + mealCost);

console.log("\n--- Daily Tracker Summary ---");
console.log("Total Protein Today: " + totalProtein + "g");
console.log("Total Spent: ₹" + totalSpent);
console.log("Remaining Monthly Budget: ₹" + (monthlyBudget - totalSpent));