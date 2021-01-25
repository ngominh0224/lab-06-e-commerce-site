export function renderChocolate(chocolates) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const img = document.createElement('img');
    img.classList.add('image');
    li.append(img);
    img.src = `${chocolates.image}`;
    img.setAttribute('height', 500);
    img.setAttribute('width', 500);

    const h2 = document.createElement('h2');
    h2.classList.add('name');
    h2.textContent = chocolates.name;
    li.append(h2);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `${chocolates.price}`;
    li.append(pPrice);

    const pSize = document.createElement('p');
    pSize.classList.add('size');
    pSize.textContent = `${chocolates.size}`;
    li.append(pSize);

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = `${chocolates.description}`;
    li.append(pDescription);

    const button1 = document.createElement('button');
    button1.classList.add('button');
    button1.textContent = 'Add To Cart';
    li.append(button1);

    return li;
}