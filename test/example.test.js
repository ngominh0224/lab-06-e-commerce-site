// IMPORT MODULES under test here:
import { chocolates } from '../products/data.js';
import { renderChocolate } from '../products/render-chocolate.js';


const test = QUnit.test;

test('should take in a chocolate item and return li', (expect) => {
    const expected = `<li class="list-item"><img class="image" src="../assets/kitkat-reg.jpg" height="500" width="500"><h2 class="name">Kit-Kat</h2><p class="price">1.79</p><p class="size">Regular</p><p class="description">Milk Chocolate Wafers</p><button class="button">Add To Cart</button></li>`;

    const actual = renderChocolate(chocolates[0]);

    expect.equal(actual.outerHTML, expected);
});
