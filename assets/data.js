const productsData = [
    {
        id: 1,
        name: 'Candelabra',
        bid: 1200,
        user: 'Candelabra Cactus',
        category: 'cactus',
        Img: '/assets/images/products/cactus1.jpg',

    },
    {
        id: 2,
        name: 'Luxury',
        bid: 1200,
        user: 'Mimicry plant',
        category: 'cactus',
        Img: '/assets/images/products/cactus2.jpg',

    },
    {
        id: 3,
        name: 'Woody',
        bid: 1500,
        user: 'Cereus',
        category: 'cactus',
        Img: '/assets/images/products/cactus3.jpg',
    },
    {
        id: 4,
        name: 'Hairboss',
        bid: 1300,
        user: 'Neocardenacias',
        category: 'cactus',
        Img: '/assets/images/products/cactus4.jpg',
    },
    {
        id: 5,
        name: 'Hairbaby',
        bid: 600,
        user: 'Neocardenacias',
        category: 'cactus',
        Img: '/assets/images/products/cactus5.jpg',
    },
    {
        id: 6,
        name: 'Britney',
        bid: 3000,
        user: 'Mammillaria',
        category: 'cactus',
        Img: '/assets/images/products/cactus6.jpg',
    },
    {
        id: 7,
        name: 'Begonia',
        bid: 700,
        user: 'Euphorbia',
        category: 'outdoor',
        Img: '/assets/images/products/exterior1.jpg',
    },
    {
        id: 8,
        name: 'Hidratya',
        bid: 700,
        user: 'Aloe vera',
        category: 'outdoor',
        Img: '/assets/images/products/exterior2.jpg',  

    },
    {
        id: 9,
        name: 'Greensleves',
        bid: 900,
        user: 'Ficus',
        category: 'outdoor',
        Img: '/assets/images/products/exterior3.jpg',
    },
    {
        id: 10,
        name: 'Layla',
        bid: 900,
        user: 'Viola',
        category: 'outdoor',
        Img: '/assets/images/products/exterior4.jpg',
    },
    {
        id: 11,
        name: 'Zhu',
        bid: 1300,
        user: 'Portulacaria',
        category: 'outdoor',
        Img: '/assets/images/products/exterior5.jpg',
    },
    {
        id: 12,
        name: 'Simps',
        bid: 700,
        user: 'Zamioculcas',
        category: 'outdoor',
        Img: '/assets/images/products/exterior6.jpg',
    },
    {
        id: 13,
        name: 'Artita',
        bid: 1500,
        user: 'Ficus',
        category: 'indoor',
        Img: '/assets/images/products/interior1.jpg',
    },
    {
        id: 14,
        name: 'Cbrah',
        bid: 800,
        user: 'Calathea',
        category: 'indoor',
        Img: '/assets/images/products/interior2.jpg',
    },
    {
        id: 15,
        name: 'Lucky',
        bid: 800,
        user: 'Myrtus',
        category: 'indoor',
        Img: '/assets/images/products/interior3.jpg',
    },
    {
        id: 16,
        name: 'Daily',
        bid: 700,
        user: 'Euphorbia',
        category: 'indoor',
        Img: '/assets/images/products/interior4.jpg',
    },
    {
        id: 17,
        name: 'Fury',
        bid: 900,
        user: 'Tradescantia',
        category: 'indoor',
        Img: '/assets/images/products/interior5.jpg',
    },
    {
        id: 18,
        name: 'Thin',
        bid: 700,
        user: 'Aloe Vera',
        category: 'indoor',
        Img: '/assets/images/products/interior6.jpg',
    },
    {
        id: 19,
        name: 'Sauce',
        bid: 300,
        user: 'Tomato',
        category: 'seeds',
        Img: '/assets/images/products/semilla1.jpg',
    },
    {
        id: 20,
        name: 'Green bean',
        bid: 300,
        user: 'Beans',
        category: 'seeds',
        Img: '/assets/images/products/semilla2.jpg',
    },
    {
        id: 21,
        name: 'Cherry',
        bid: 250,
        user: 'Tomato cherrys',
        category: 'seeds',
        Img: '/assets/images/products/semilla3.jpg',
    },
    {
        id: 22,
        name: 'Lemon yellow',
        bid: 300,
        user: 'Lemon',
        category: 'seeds',
        Img: '/assets/images/products/semilla4.jpg',
    },
    {
        id: 23,
        name: 'Green grappe',
        bid: 300,
        user: 'Grappe',
        category: 'seeds',
        Img: '/assets/images/products/semilla5.jpg',
    },
    {
        id: 24,
        name: 'Strawberry fields',
        bid: 400,
        user: 'Strawberrys',
        category: 'seeds',
        Img: '/assets/images/products/semilla6.jpg',
    },
];

function splitProducts(size) {

    let chunk = [];

    for(let i = 0; i < productsData.length; i += size)
    chunk.push(productsData.slice(i, i + size));
     return chunk;

};


const allProducts = {
    productList: splitProducts(23),
    next: 1,
    limit: splitProducts(6).length,
};







































































