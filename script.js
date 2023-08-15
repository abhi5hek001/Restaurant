
function myFunction(x) {
    x.classList.toggle("change");
}

let flag = 0;

function controller(x) {
    flag += x;
    if (flag == 5) {
        flag = 0;
    }
    if (flag == -1) {
        flag = 4;
    }
    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let num1;
    num1 = num;
    let slides = document.getElementsByClassName('slide');
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}

const orderList = document.querySelector('#orderList');
function myOrder(y) {
    let li = document.createElement('li');
    li.innerText(y.value);
    orderList.appendChild(li);
}

// Shopping Cart

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

localStorage.clear();

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Samosa',
        image: '1samosa.png',
        price: 100
    },
    {
        id: 2,
        name: 'Paneer Pakora',
        image: '2pakora.png',
        price: 200
    },
    {
        id: 3,
        name: 'Paneer Tikka',
        image: '3paneerTikka.png',
        price: 250
    },
    {
        id: 4,
        name: 'French Fries',
        image: '4fries.png',
        price: 200
    },
    {
        id: 5,
        name: 'Hummus',
        image: '5hummus.png',
        price: 375
    },
    {
        id: 6,
        name: 'Shawarma',
        image: '6shawarma.png',
        price: 175
    },
    {
        id: 7,
        name: 'Kadhai Paneer',
        image: '7paneersabzi.png',
        price: 400
    },
    {
        id: 8,
        name: 'Chola Special',
        image: '8chola.png',
        price: 250
    },
    {
        id: 9,
        name: 'Palak Paneer',
        image: '9palakpaneer.png',
        price: 380
    },
    {
        id: 10,
        name: 'Dal Makhani',
        image: '10dalmakhani.png',
        price: 350
    },
    {
        id: 11,
        name: 'Mushroom Curry',
        image: '11mushroomcurry.png',
        price: 300
    },
    {
        id: 12,
        name: 'Hyderabadi Biryani',
        image: '12hyderabadibiryani.png',
        price: 300
    },
    {
        id: 13,
        name: 'Pizza',
        image: '13pizza.png',
        price: 325
    },
    {
        id: 14,
        name: 'Burger Combo',
        image: '14burgercombo.png',
        price: 500
    },
    {
        id: 15,
        name: 'Chowmein',
        image: '15chowmein.png',
        price: 250
    },
    {
        id: 16,
        name: 'Momos',
        image: '16momos.png',
        price: 150
    },
    {
        id: 17,
        name: 'Idli Sambhar',
        image: '17idli.png',
        price: 275
    },
    {
        id: 18,
        name: 'Dosa Special',
        image: '18dosa.png',
        price: 200
    },
    {
        id: 19,
        name: 'Oreo Shake',
        image: '19oreo.png',
        price: 175
    },
    {
        id: 20,
        name: 'Kit-Kat Shake',
        image: '20kitkat.png',
        price: 160
    },
    {
        id: 21,
        name: 'Strawberry Shake',
        image: '21strawberry.png',
        price: 220
    },
    {
        id: 22,
        name: 'Mango Shake',
        image: '22mango.png',
        price: 160
    },
    {
        id: 23,
        name: 'Kiwi Shake',
        image: '23kiwi.png',
        price: 220
    },
    {
        id: 24,
        name: 'Orange Juice',
        image: '24orange.png',
        price: 150
    },
    {
        id: 25,
        name: 'Strawberry Ice-Cream',
        image: '25strawberry.png',
        price: 160
    },
    {
        id: 26,
        name: 'Chocolate Ice-Cream',
        image: '26chocolate.png',
        price: 150
    },
    {
        id: 27,
        name: 'Vanilla Ice-Cream',
        image: '27vanilla.png',
        price: 140
    },
    {
        id: 28,
        name: 'ButterScotch Ice-Cream',
        image: '28butterscotch.png',
        price: 150
    },
    {
        id: 29,
        name: 'Mint Ice-Cream',
        image: '29mint.png',
        price: 120
    },
    {
        id: 30,
        name: "Cookies N' Cream",
        image: '30cookies.png',
        price: 175
    },
];

let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}&#8377</div>
            <button onclick="addToCard(${key})">Add To Card </button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()} &#8377</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerHTML = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}