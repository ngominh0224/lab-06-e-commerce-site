import { chocolates } from './data.js';
import { renderChocolate } from './render-chocolate.js';

const list = document.getElementById('list');

for (let chocolate of chocolates) {
    const productElement = renderChocolate(chocolate);

    list.append(productElement);
}