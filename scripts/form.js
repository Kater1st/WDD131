// Product array (used for form.html)
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate the Product Name options dynamically
  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    if (productSelect) {
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
      });
    }
  
    // Review count logic (used for review.html)
    const reviewCountSpan = document.getElementById("review-count");
    if (reviewCountSpan) {
      const reviewCountKey = "reviewCount";
      const currentCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
      const newCount = currentCount + 1;
      localStorage.setItem(reviewCountKey, newCount);
  
      // Update the review count display
      reviewCountSpan.textContent = newCount;
    }
  });
  