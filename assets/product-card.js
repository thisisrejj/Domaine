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
        if (newPrimary) {
          primaryImage.classList.add("opacity-0");

          setTimeout(() => {
            primaryImage.src = newPrimary;
            primaryImage.classList.remove("opacity-0");
          }, 200);
        }

        // SECONDARY IMAGE (key fix)
        if (secondaryImage) {
          secondaryImage.classList.add("opacity-0");

          setTimeout(() => {
            if (newSecondary) {
              secondaryImage.src = newSecondary;
            } else {
              secondaryImage.src = newPrimary; // fallback
            }
            secondaryImage.classList.remove("opacity-0");
          }, 200);
        }

        // PRICE
        if (newPrice) {
          price.classList.add("opacity-0");

          setTimeout(() => {
            price.textContent = newPrice;
            price.classList.remove("opacity-0");
          }, 200);
        }
      });
    });
  });
});