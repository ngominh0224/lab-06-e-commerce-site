// IMPORT MODULES under test here:
import { chocolates } from '../products/data.js';
import { renderChocolate } from '../products/render-chocolate.js';
import { calcItemTotal, findId, renderTable, calcOrderTotal } from '../cart/render-table-row.js';
import { cartContent } from '../cart/cart-data.js';
import { clearCart, getCart, setCart } from '../cart/cart-utils.js';

const test = QUnit.test;

test('should take in a chocolate item and return li', (expect) => {
    const expected = `<li class="list-item"><img class="image" src="../assets/kitkat-reg.jpg" height="500" width="500"><h2 class="name">Kit-Kat</h2><p class="price">1.79</p><p class="size">Regular</p><p class="description">Milk Chocolate Wafers</p><button class="button">Add To Cart</button></li>`;

    const actual = renderChocolate(chocolates[0]);

    expect.equal(actual.outerHTML, expected);
});

test('takes in cart quantity and product price to get a total', (expect) => {
    const expected = `1.79`;
    const actual = calcItemTotal(chocolates[0], cartContent[0]);

    expect.equal(actual, expected);
});

test('finds the ID of a product', (expect) => {
    const expected = {
        id: 1,
        name: 'Kit-Kat',
        image: '../assets/kitkat-reg.jpg',
        description: 'Milk Chocolate Wafers',
        category: 'candy',
        size: 'Regular',
        price: 1.79,
    };
    const actual = findId(chocolates, 1);

    expect.deepEqual(actual, expected);
});

test('takes in cart quantity and product price to get a total', (expect) => {
    const expected = `<tr><td>Kit-Kat</td><td>1</td><td>$ 1.79</td></tr>`;
    const actual = renderTable(chocolates[0], cartContent[0]);

    expect.equal(actual.outerHTML, expected);
});

test('takes in item total prices and adds them together', (expect) => {
    const total = 0;
    const itemTotal = 1.79;
    const expected = `1.79`;
    const actual = calcOrderTotal(total, itemTotal);

    expect.equal(actual, expected);
});

test('gets cart from local storage', (expect) => {
    const expected = [];
    const actual = getCart();

    expect.deepEqual(actual, expected);
});
