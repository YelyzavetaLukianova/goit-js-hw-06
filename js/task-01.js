const categoriesNumber = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesNumber.length}`);

[...categoriesNumber].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});
