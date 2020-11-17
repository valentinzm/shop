productsAPI = [{
    id: 01,
    title: 'Апельсины вкусные "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/apelsin.jpg'
}, {
    id: 02,
    title: 'Киви вкусные',
    price: 116.00,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/kivi.png'
}, {
    id: 03,
    title: 'Овсяные хлопья “Стандарт”',
    price: 116.00,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/kawa.png'
}, {
    id: 04,
    title: 'Вкусный ананас "Снедок фрукты"',
    price: 450.50,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/ananas.png'
}, {
    id: 05,
    title: 'Овсяные хлопья “Стандарт”',
    price: 116.00,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/kawa.png'
}, {
    id: 06,
    title: 'Яблоки балканские "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/yabloki.jpg'
}, {
    id: 07,
    title: 'Сливы балканские "Снедок фрукты"',
    price: 120.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/slivi.jpg'
}, {
    id: 08,
    title: 'Виноград чёрный “Молдова”',
    price: 500.00,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/vinograd.jpg'
}, {
    id: 09,
    title: 'Бананы Эквадор "Снедок фрукты"',
    price: 40.70,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/banani.png'
}, {
    id: 10,
    title: 'Томаты балканские "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/tomat1.png'
}, {
    id: 11,
    title: 'Томаты балканские "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/tomat2.png'
}, {
    id: 12,
    title: 'Томаты балканские "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/tomat3.png'
}, {
    id: 13,
    title: 'Томаты балканские "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/tomat4.png'
}, {
    id: 14,
    title: 'Апельсины вкусные "Снедок фрукты"',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/apelsin.jpg'
}, {
    id: 15,
    title: 'Киви вкусные',
    price: 336.60,
    favorite: false,
    added: false,
    qty: 0,
    image: 'images/products/kivi.png'
}]



const productCard = (options) => {
    return `
    <div class="products__item products__added--${options.added}">
                        <div class="products__header">
                            <p class="products__sale">
                                Скидка
                            </p>
                            <a href="#" class="products__fav products__fav--${options.favorite}" onClick="addFavotire(${options.id}); return false">
                                <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7785 2.06089C13.4402 1.72455 13.0385 1.45775 12.5963 1.27572C12.1542 1.09369 11.6803 1 11.2018 1C10.7232 1 10.2493 1.09369 9.80718 1.27572C9.36506 1.45775 8.96336 1.72455 8.62504 2.06089L7.9229 2.75857L7.22076 2.06089C6.53737 1.38184 5.61049 1.00035 4.64404 1.00035C3.67758 1.00035 2.7507 1.38184 2.06731 2.06089C1.38392 2.73994 1 3.66092 1 4.62124C1 5.58157 1.38392 6.50255 2.06731 7.1816L2.76945 7.87928L7.9229 13L13.0763 7.87928L13.7785 7.1816C14.117 6.84543 14.3855 6.44628 14.5687 6.00697C14.7519 5.56765 14.8462 5.09678 14.8462 4.62124C14.8462 4.14571 14.7519 3.67484 14.5687 3.23552C14.3855 2.79621 14.117 2.39706 13.7785 2.06089V2.06089Z" stroke="#BABABA" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                            </a>
                            <a href="#" class="products__rate">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L10.163 5.27865L15 5.96898L11.5 9.29758L12.326 14L8 11.7787L3.674 14L4.5 9.29758L1 5.96898L5.837 5.27865L8 1Z" stroke="#FFD43C" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                            </a>
                            <p class="products__rating">
                                5.5
                            </p>
                        </div>
                        <div class="products__image">
                            <a href="product.html"></a>
                            <img src="${options.image}" alt="">
                        </div>
                        <h4 class="products__title">${options.title}</h4>
                        <div class="products__info_hidden">
                            <div class="products__quanity">
                                <span class="products__mark products-minus" onClick="minusProduct(${options.id});">-</span>
                                <input type="number" disabled class="products__input" value="${options.qty}">
                                <span class="products__mark products-plus" onClick="plusProduct(${options.id});">+</span>

                            </div>
                            <p class="products__qty">1 шт. = 0,5 кг.</p>
                        </div>
                        <div class="products__info">
                            <div class="products__price">
                                <p class="products__price_regular">${options.price} руб</p>
                                <p class="products__price_sale">
                                    <span class="text-overline">500</span> за кг.
                                </p>
                            </div>
                            <a href="#" class="products__add" onClick="addProduct(${options.id}); return false">
                                <img src="images/icons/product-cart.svg" alt="">
                            </a>
                        </div>
                    </div>
    `
}
const paginationLinks = (pages) => {
    return `
        <a href="#" class="pagination__link" onclick="paged(products, ${pages}); return false">${pages}</a>
    `
}
let products;
if (localStorage.getItem('productList') == null) {
    localStorage.setItem('productList', JSON.stringify(productsAPI));
    products = JSON.parse(localStorage.getItem('productList'));
} else {
    products = JSON.parse(localStorage.getItem('productList'));
    console.log();
}

//находим минимальную и максимальные цены, вставляем их в ценовые инпуты. 
const maxvalue = (array, maxPrice) => {
    let maxObj = array.reduce((prev, cur) => cur.price > prev.price ? cur : prev);
    maxPrice = maxObj.price
    return maxPrice;
}
const minvalue = (array, minPrice) => {
    let maxObj = array.reduce((prev, cur) => cur.price < prev.price ? cur : prev);
    minPrice = maxObj.price
    return minPrice;
}
let maxPrice = maxvalue(products);
let minPrice = minvalue(products);
let sliderStart = minPrice + 50;
let sliderEnd = maxPrice - 50;

const slider = document.getElementById('slider');
const input0 = document.getElementById('input-with-keypress-0');
const input1 = document.getElementById('input-with-keypress-1');
const inputs = [input0, input1];

noUiSlider.create(slider, {
    start: [sliderStart, sliderEnd],
    connect: true,
    range: {
        'min': minPrice,
        'max': maxPrice
    }
});

slider.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = values[handle];
});

function paged(products, page) {
    if (page == undefined) {
        page = 1;
    }

    let productsPerPage = 8;
    //значение выше определяет кол-во товаров на странице
    let totalEnd = productsPerPage * page;
    let totalStart = totalEnd - productsPerPage;

    let productsMapped = products.map((product, idx = 1) => {
        if (idx >= totalStart && idx < totalEnd) {
            return productCard(product);
        }
    });

    let pages = Math.ceil(products.length / productsPerPage);

    let pagination = [];

    for (let i = 0; i < pages; i++) {
        pagination[i] = i + 1;
    }
    let pageMap = pagination.map(page => {
        if (pagination.length !== 1) {
            return paginationLinks(page);
        }
    });
    document.querySelector('.pagination').innerHTML = pageMap.join('');
    document.querySelector('#category').innerHTML = productsMapped.join('');

    document.querySelectorAll('.pagination__link').forEach(item => {
        if (item.textContent == page) {
            item.classList.add('pagination__current')
        }
    })
}


Object.prototype.addFavotire = function(id) {
    let result = products.find(product => product.id == id)
    result.favorite = true;
    let currentPage = document.querySelector('.pagination__current');
    if (currentPage !== null) {
        page = currentPage.textContent;
    }
    localStorage.setItem('productList', JSON.stringify(products));
}
Object.prototype.addProduct = function(id) {
    let result = products.find(product => product.id == id)
    result.added = true;
    result.qty++;
    let currentPage = document.querySelector('.pagination__current');
    if (currentPage !== null) {
        page = currentPage.textContent;
    }
    paged(products, page)
    localStorage.setItem('productList', JSON.stringify(products));
}
Object.prototype.minusProduct = function(id) {
    let result = products.find(product => product.id == id)

    // result.added = false;
    // result.qty--;
    // let currentPage = document.querySelector('.pagination__current');
    // if (currentPage !== null) {
    //     page = currentPage.textContent;
    // }
    // paged(products, page)
    // localStorage.setItem('productList', JSON.stringify(products));
}
Object.prototype.plusProduct = function(id) {
    let result = products.find(product => product.id == id)
    result.qty++;
    let currentPage = document.querySelector('.pagination__current');
    if (currentPage !== null) {
        page = currentPage.textContent;
    }
    paged(products, page)
    localStorage.setItem('productList', JSON.stringify(products));
}

paged(products);

//карта
const productCart = (options) => {
    return `
    <div class="aside-cart__product">
        <div class="aside-cart__product--image">
            <img src="${options.image}" alt="">
        </div>
        <div class="aside-cart__product--info">
            <p class="aside-cart__product--price">${options.price} руб.</p>
            <span class="aside-cart__product--weight">1 кг. </span>
        </div>
        <div class="aside-cart__product--count">
            <div class="products__quanity">
                <span class="products__mark products-minus">-</span>
                <input type="number" class="products__input" value="1">
                <span class="products__mark products-plus">+</span>

            </div>
            <a href="#" class="aside-cart__product--remove">Удалить</a>
        </div>
    </div>
    `
}

// function productsInCart(products) {
//     let result = products
//         .filter(product => product.added == true)
//         .map(item => productCart(item));
//     document.querySelector('#aside-cart').innerHTML = result.join('');

// }
// productsInCart(products);


//сортировка товаров
document.querySelector('.sort__button').addEventListener('click', showSelect);

const sortList = document.querySelector('.sort__list');

function showSelect(event) {
    event.preventDefault();
    if (sortList.classList.contains('sort__list--show')) {
        sortList.classList.remove('sort__list--show');
    } else {
        sortList.classList.add('sort__list--show');
    }
}


document.querySelector('.sort__price').addEventListener('click', sortByPrice)
document.querySelector('.sort__name').addEventListener('click', sortByName)

function sortByPrice(event) {
    event.preventDefault();
    sortList.classList.remove('sort__list--show');
    let result = products.sort(function(a, b) {
        if (a.price < b.price) {
            return 1;
        }
        if (a.price > b.price) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    paged(result);
}

//Сортируем в алфавитном порядке
function sortByName(event) {
    event.preventDefault();
    sortList.classList.remove('sort__list--show');
    let result = products.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    paged(result);
}