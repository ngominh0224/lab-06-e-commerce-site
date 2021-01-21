export function renderChocolate(chocolate) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const img = document.createElement('img');
    img.classList.add('image');
    li.append(img);
    img.src = `${chocolate.image}`;
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);

    const h2 = document.createElement('h2');
    h2.classList.add('name');
    h2.textContent = chocolate.name;
    li.append(h2);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${chocolate.price}`;
    li.append(pPrice);

    const pSize = document.createElement('p');
    pSize.classList.add('size');
    pSize.textContent = `Size: ${chocolate.size}`;
    li.append(pSize);

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = `${chocolate.description}`;
    li.append(pDescription);

    const button1 = document.createElement('button');
    button1.classList.add('button');
    button1.textContent = 'Add To Cart';
    li.append(button1);

    return li;
}