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

        // 🔵 ACTIVE STATE
        swatches.forEach(s => s.classList.remove("ring-2", "ring-black"));
        swatch.classList.add("ring-2", "ring-black");

        // 🖼️ IMAGE TRANSITION (fade out → change → fade in)
        if (newPrimary && primaryImage) {
          primaryImage.classList.add("opacity-0");

          setTimeout(() => {
            primaryImage.src = newPrimary;
            primaryImage.classList.remove("opacity-0");
          }, 200);
        }

        // 🖼️ SECONDARY IMAGE UPDATE (for hover)
        if (secondaryImage && newSecondary) {
          secondaryImage.classList.add("opacity-0");

          setTimeout(() => {
            secondaryImage.src = newSecondary;
            secondaryImage.classList.remove("opacity-0");
          }, 200);
        }

        // 💲 PRICE UPDATE
        if (newPrice && price) {
          price.classList.add("opacity-0");

          setTimeout(() => {
            price.textContent = newPrice;
            price.classList.remove("opacity-0");
          }, 200);
        }
      });
    });

    // ✨ OPTIONAL: smoother hover animation using JS (enhances Tailwind)
    if (primaryImage && secondaryImage) {
      card.addEventListener("mouseenter", () => {
        secondaryImage.classList.add("opacity-100");
        secondaryImage.classList.remove("opacity-0");

        primaryImage.classList.add("opacity-0");
      });

      card.addEventListener("mouseleave", () => {
        secondaryImage.classList.remove("opacity-100");
        secondaryImage.classList.add("opacity-0");

        primaryImage.classList.remove("opacity-0");
      });
    }
  });
});