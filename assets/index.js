const products = document.querySelector('.products-container');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const categories = document.querySelector('.categories');
const categoriesList = document.querySelector('.category');
const btnLoad = document.querySelector('.btn-load');
const buyBtn = document.querySelector('.btn-buy');
const barsBtn = document.querySelector('.menu-label');
const cartBtn = document.querySelector('.cart-label');
const cartMenu = document.querySelector('.cart');
const barsMenu = document.querySelector('.navbar-list');

// LocalStorage

let cart = JSON.parse(localStorage.getItem(`cart`)) || [];

const saveLocalStorage = cartList => {
    localStorage.setItem(`cart`, JSON.stringify(cartList));
};

// render prodcuts

const renderProduct = product => {
    const { id, name , bid, user,Img} = product;
    return `
    <div class="box">
    
        <img src=${Img} alt="">
   
    <div class="content">
        <h3>${name}</h3>
        <p>${user}</p>
        <span>$${bid}</span>
        </div>
        <button class="btn-add"
        data-id='${id}'
        data-name='${name}'
        data-bid='${bid}'
        data-user='${user}'
        data-img='${Img}'> Add</button>
    </div>
 `;
};

const renderProducts = (category, index) => {
    if (category === 'all') {
        products.innerHTML += allProducts.productList[index]
        .map(renderProduct)
        .join('');
        return;
    }

    const productList = productsData.filter(p => p.category === category);
    products.innerHTML = productList.map(renderProduct).join('');

};


const changeFilterState = (e) =>{
    const selectedCategory = e.target.dataset.category;
    const categories = [...categoriesList];
    categories.forEach(category => {
        if (category.dataset.category !== selectedCategory) {
            category.classList.remove('active');

        }else {
            category.classList.add('active');
        }
    });


    if (selectedCategory !== 'all') {
        btnLoad.classList.add('hidden');
    }else {
        btnLoad.classList.remove('hidden');
    }

};



const filterProducts = e => {
    if(!e.target.classList.contains('category')) return;
    changeFilterState;
    if(e.target.dataset.category.toLowerCase() === 'all'){
        products.innerHTML = '';
        renderProducts('all' , 0);
      }else {
        renderProducts(e.target.dataset.category);
      };

};


// Carrito

const renderCartProduct = cartProduct => {
    const { id,name,bid,user,Img,quantity} = cartProduct;
    return `
    <div class= "cart-item">
    <img src= ${Img}/>
    <div class="item-info">
     <h3 class="item-title">${name}</h3>
     <h3 class="item-user">${user}</h3>
     <span class="item-price">$${bid}</span>
 </div>
 </div>
 <div class="item-handler">
   <span class="quantity-handler down" data-id=${id}>-</span>
   <span class="item-quantity">${quantity}</span>
   <span class="quantity-handler up" data-id=${id}>+</span>
 </div>
</div>`;
};

const renderCart = cartList => {
    if (!cartList.length) {
        productsCart.innerHTML = `<p class="empty-msg">Empty</p>`;
        return;
    }
    productsCart.innerHTML = cartList.map(renderCartProduct).join('');
};


const showTotal = cartlist => {
    total.innerHTML = `${cartlist
        .reduce((acc,cur) => acc + Number(cur.bid)* cur.quantity,0)
        .toFixed(2)} pesos`;
};



// boton compra 
const disableBuyBtn = () => {
    if(!cart.length) {
        buyBtn.classList.add('disabled');
    } else {
        buyBtn.classList.remove('disabled');
    }
    };

const handleQuantity = e => {
    if (e.target.classList.contains('down')) {
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);

        if( existingCartItem.quantity === 1) {
            if(window.confirm('Do you wish to remove the product from the cart? ')) {
                cart = cart.filter(prod => prod.id !== existingCartItem.id);
                saveLocalStorage(cart);
                renderCart(cart);
                showTotal(cart);
                disableBuyBtn();
                return;
            }
        }
        cart = cart.map(item => {
            return item.id === existingCartItem.id
            ? { ...item, quantity: Number(item.quantity) - 1}
            : item;
        });
    } else if (e.target.classList.contains('up')) {
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);


        cart = cart.map(item => {
            return item.id === existingCartItem.id
              ? { ...item, quantity: Number(item.quantity) + 1 }
              : item;
          });
    }
    saveLocalStorage(cart);
    renderCart(cart);
    showTotal(cart);
    disableBuyBtn();
};


const addProduct = e => {
    if (!e.target.classList.contains('btn-add')) return;
    const product = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        bid: e.target.dataset.bid,
        user: e.target.dataset.user,
        Img: e.target.dataset.Img,
    };

    const existingCartItem = cart.find(item => item.id === product.id);
    if (existingCartItem) {
        cart = cart.map(item => {
            return item.id === product.id 
            ? { ...item, quantity: Number(item.quantity) + 1 }
            :item;
        });
    } else {
        cart = [...cart, {...product,quantity:1}];
    }
    saveLocalStorage(cart);
    renderCart(cart);
    showTotal(cart);
    disableBuyBtn();
};

const completeBuy = () => {
    if (!cart.length) return;
    if (window.confirm('Are you sure to complete the purchase?')) {
        localStorage.removeItem('cart');
        window.location.reload();

    }
};






// funcion carrito

const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
        return;
    
};

const closeOnScroll = () => {
    if (
        !cartMenu.classList.contains('open-cart')
    );
};

const init = () => {
    document.addEventListener('DOMContentLoaded', renderProducts 
    ('all', 0));
    categories.addEventListener('click' , filterProducts);
    document.addEventListener('DOMContentLoaded', renderCart(cart));
    document.addEventListener('DOMContentLoaded', showTotal(cart));
    products.addEventListener('click', addProduct)
    productsCart.addEventListener('click', handleQuantity);
    buyBtn.addEventListener('click', completeBuy);
    cartBtn.addEventListener('click', toggleCart);

    
    disableBuyBtn();
    window.addEventListener('scroll', closeOnScroll);

};

init();