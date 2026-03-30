document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".group");

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

        // ACTIVE STATE
        swatches.forEach(s => s.classList.remove("ring-2", "ring-black"));
        swatch.classList.add("ring-2", "ring-black");

        // PRIMARY IMAGE
        if (newPrimary && primaryImage) {
          primaryImage.src = newPrimary;
        }

        // SECONDARY IMAGE
        if (newSecondary && secondaryImage) {
          secondaryImage.src = newSecondary;
        }

        // PRICE
        if (newPrice && price) {
          price.textContent = newPrice;
        }
      });
    });
  });
});