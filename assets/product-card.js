document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".group");

  cards.forEach(card => {
    const swatches = card.querySelectorAll(".swatch");
    const primaryImage = card.querySelector(".primary-image");
    const price = card.querySelector(".product-price");

    swatches.forEach(swatch => {
      swatch.addEventListener("click", () => {
        const newImage = swatch.dataset.image;
        const newPrice = swatch.dataset.price;

        if (newImage) {
          primaryImage.src = newImage;
        }

        if (newPrice) {
          price.textContent = newPrice;
        }
      });
    });
  });
});