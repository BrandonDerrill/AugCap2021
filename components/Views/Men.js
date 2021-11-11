import productcard4 from "../../IMG/productcard4.jpg";
import productcard1 from "../../IMG/productcard1.jpg";
import productcard2 from "../../IMG/productcard2.jpg";
import productcard3 from "../../IMG/productcard3.jpg";

export default () => `


<<!---------------------Men Products-------------------------->
<section class="men-products">
    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
                  <span class="new-item">Ourobors $30</span>
                  <img src=" ${productcard3}" class="product-thumb" alt="">
                  <button class="wish-btn">add to wishlist</button>
            </div>
            <div class="product-info">

            </div>
            <div class="product-image">
                  <span class="new-item">Black $30</span>
                  <img src=" ${productcard1}" class="product-thumb" alt="">
                  <button class="wish-btn">add to wishlist</button>
            </div>
            <div class="product-info">
            </div>
            <div class="product-image">
            <span class="new-item">Signature Logo $30</span>
            <img src=" ${productcard2}" class="product-thumb" alt="">
            <button class="wish-btn">add to wishlist</button>
            </div>
            <div class="product-info">
            </div>
            </div>
        </div>
    </div>
</section>`;
