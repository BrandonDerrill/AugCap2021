import MainPhoto from "../../IMG/MainPhoto.png";
import CourtTrenchHat from "../../IMG/Court_Trench_Hat.png";
import BrittHoldingHoodie from "../../IMG/Britt_Holding_Hoodie.png";
import MikeBlackShirt from "../../IMG/Mike_Black_Shirt.jpg";
import YinYangBag from "../../IMG/YinYangBag.jpg";
import CallToAction from "../../IMG/CallToAction.png";
import GkWallArt from "../../IMG/GK-wallArt.png";
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => `
<img src=" ${MainPhoto} ">

<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</h3>

<div class="YinYangBag">
<a href="http://www.localhost:1234/Cart"> <img src=" ${YinYangBag}" height="200px"> </a>
</div>
<div>
<h3> <a href="Featured Products">Featured Products</a>
</div>

<!---------------------Featured Products-------------------------->
<div class="Featured-Products">
    <a href="http://www.localhost:1234/Cart"> <img src=" ${BrittHoldingHoodie}" height="490px"> </a>
    <a href="http://www.localhost:1234/Cart"> <img src=" ${MikeBlackShirt}" height="490px"> </a>
    <a href="http://www.localhost:1234/Cart"> <img src=" ${CourtTrenchHat}" height="490px"> </a>
</div>

<!--------------------- Wall-Art -------------------------->

<div>
    <h3> <a href="http://www.localhost:1234/Art">Art</thead></a>
</div>


<div class="Wall-Art">
    <a href="http://www.localhost:1234/Art"> <img src=" ${GkWallArt}" height="490px"> </a>


</div>

<div>
    <h3> <a href="http://www.localhost:1234/Contact">Join the Pledge</thead></a>
</div>

<div class="CallToAction ">
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
    <a href="http://www.localhost:1234/Contact"> <img src=" ${CallToAction}" height="325px"> </a>
</div>`;
