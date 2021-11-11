import BrittHoldingHoodie from "../../IMG/444.png";
import CourtTrenchHat from "../../IMG/555.png";
import State_Of_Mind from "../../IMG/666.png";
import ClassicBigLogo from "../../IMG/222.jpg";
import productCard1 from "../../IMG/productCard1.jpg";
import productcard3 from "../../IMG/productCard3.jpg";
import productcard2 from "../../IMG/productcard2.jpg";

export default st => `
<table id="products">
<tr><th>t</th><th>Quantity</th><th>Color</th><th>Size</th></tr>
${st.products
  .map(product => {
    return `<tr><td>${product.Name}</td><td>${product.Color}</td><td>
     ${product.size.join(" & ")}</td></tr>`;
  })
  .join("")}
</table>
`;
