export const numberToPrice = (price: number): string =>
  // const euro =  price / 100;
  (price / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" €");

// ₴
