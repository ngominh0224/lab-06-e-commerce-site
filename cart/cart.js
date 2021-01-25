import { chocolates } from '../products/product.js';
import { renderTable, calcItemTotal, findId, calcOrderTotal } from './render-table-row.js';
import { getCart } from '../cart/cart-utils.js';

let total = 0;
const table = document.querySelector('table');
const tr = document.createElement('tr');
const td = document.createElement('td');
const cart = getCart();

for (let item of cart) {
    const chocolateId = findId(chocolates, item.id);

    const itemTotal = calcItemTotal(chocolateId, item);

    total = calcOrderTotal(total, itemTotal);
    const tableRowDOM = renderTable(chocolateId, item);

    table.append(tableRowDOM);
}

td.textContent = `Total Price: $ ${total}`;
tr.append(td);

table.append(tr);