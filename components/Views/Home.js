import MainPhoto from "../../IMG/MainPhoto.png";
import CourtTrenchHat from "../../IMG/Court_Trench_Hat.png";
import BrittHoldingHoodie from "../../IMG/Britt_Holding_Hoodie.png";
import MikeBlackShirt from "../../IMG/Mike_Black_Shirt.jpg";
import YinYangBag from "../../IMG/YinYangBag.jpg";
import CallToAction from "../../IMG/CallToAction.png";

export default () => `

<img src=" ${MainPhoto} ">

<div class="YinYangBag">
<img src=" ${YinYangBag} ">
</div>
<div>
<h3> <a href="Featured Products">Featured Products</a>
</div>

<<!---------------------Featured Products-------------------------->
<div class="Featured-Products">
    <img src=" ${BrittHoldingHoodie} ">
    <img src=" ${MikeBlackShirt} ">
    <img src=" ${CourtTrenchHat} ">

</div>
<div>
    <h3> <a href="contact.html">Join the Pledge</thead></a>
</div>
<div class="CallToAction header">
<img src=" ${CallToAction} ">
<img src=" ${CallToAction} ">
<img src=" ${CallToAction} ">
<img src=" ${CallToAction} ">
</div>>`;
