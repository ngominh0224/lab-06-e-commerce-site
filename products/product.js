import { chocolates } from './data.js';
import { renderChocolate } from './render-chocolate.js';

const chocolateList = document.getElementById('list');

for (let chocolate of chocolates) {
    const chocolateElement = renderChocolate(chocolate);

    chocolateList.append(chocolateElement);
}