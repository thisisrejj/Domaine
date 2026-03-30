document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".relative.w-full.bg-white"); // select all product cards

  cards.forEach(card => {
    const swatches = card.querySelectorAll(".swatch");
    const primaryImage = card.querySelector(".primary-image");
    const secondaryImage = card.querySelector(".secondary-image");
    const price = card.querySelector(".product-price");

    swatches.forEach(swatch => {
      swatch.addEventListener("click", () => {
        const newPrimary = swatch.dataset.image;
        const newSecondary = swatch.dataset.secondary;
        const newPrice = swatch.dataset.price;

        // Active ring for selected swatch
        swatches.forEach(s => s.classList.remove("ring-2", "ring-black"));
        swatch.classList.add("ring-2", "ring-black");

        // Update images
        if (primaryImage) primaryImage.src = newPrimary;
        if (secondaryImage) secondaryImage.src = newSecondary || newPrimary;

        // Update price
        if (price) price.textContent = newPrice;
      });
    });
  });
});