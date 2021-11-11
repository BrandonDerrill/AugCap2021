import MainPhoto from "../../IMG/MainPhoto.png";
import productcard5 from "../../IMG/productcard5.png";
import productcard6 from "../../IMG/productcard6.png";
import productcard1 from "../../IMG/productcard1.jpg";
import productcard8 from "../../IMG/productcard8.jpg";
import CallToAction from "../../IMG/CallToAction.png";
import productcard9 from "../../IMG/productcard9.png";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => `

<div class="nav-search">
   <div class="search-nav">
       <div class="search-items
        <div class="search">
       <input type+"text" class="search-box" placeholder="search brand,">
       <button class= "search-btn"> search</button>
   </div>
</div>


<img src=" ${MainPhoto}" height="895px"> </a>

<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</h3>

<!--------------------- YinYangBag -------------------------->

<div class="YinYangBag">
<a href="http://www.localhost:1234/Cart"> <img src=" ${productcard8}" height="200px"> </a>
</div>
<div>
<h3> <a href="Featured Products">Featured Products</a>
</div>

<!---------------------Featured Products-------------------------->

<div class="Featured-Products">
    <a href="http://www.localhost:1234/Cart"> <img src=" ${productcard6}" height="490px"> </a>
    <a href="http://www.localhost:1234/Cart"> <img src=" ${productcard1}" height="490px"> </a>
    <a href="http://www.localhost:1234/Cart"> <img src=" ${productcard5}" height="490px"> </a>
</div>

<!--------------------- Wall-Art -------------------------->

<div>
    <h3> <a href="http://www.localhost:1234/Art">Art</thead></a>
</div>


<div class="Wall-Art">
    <a href="http://www.localhost:1234/Art"> <img src=" ${productcard9}" height="490px"> </a>


</div>

<!--------------------- Join the Pledge -------------------------->

<div>
    <h3> <a href="http://www.localhost:1234/Contact">Join the Pledge</thead></a>
</div>

<div class="CallToAction ">
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>

</div>`;
