export default links => `


  <nav>
<ul>
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
   </ul>
  </nav>
  `;
