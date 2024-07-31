import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div class="main">
      <img
        class="product__image"
        src="https://raw.githubusercontent.com/araltasher/misc/master/random_img/porganic.png"
        alt="soda_can"
      />
      <div class="container">
        <div class="title">
          PORGANIC
          <span>TANGERINE</span>
        </div>
        <p class="desc">
          Organic pitaya blended with sprouted chia, bananas, and fresh fruit.
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
