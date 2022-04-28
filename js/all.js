$(document).ready(function () {
    $(".header .menushow a i").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("show-menu");
    });
    $(".qa h1").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).parent().siblings().find("h1").removeClass("active");
        $(this).parent().siblings().find("p").slideUp();
        $(this).parent().find("p").slideToggle();
    });
    const App = {
        data() {
            return {
                category: ['全部', '文學', '小說', '料理', '藝術', '旅遊', '漫畫'],
                products: [
                    {
                        name: '哈利波特(1)神秘魔法石',
                        type: '小說',
                        pic: './images/harry1.jpg',
                        price: 420,
                    },
                    {
                        name: '哈利波特(2)消失的密室',
                        type: '小說',
                        pic: './images/harry2.jpg',
                        price: 480,
                    },
                    {
                        name: '寄生慈善',
                        type: '文學',
                        pic: './images/keyman.jpg',
                        price: 450,
                    },
                    {
                        name: '臺灣的世界遺產潛力點',
                        type: '旅遊',
                        pic: './images/taiwan.jpg',
                        price: 380,
                    },
                    {
                        name: '無所不能101道蛋料理',
                        type: '料理',
                        pic: './images/egg.jpg',
                        price: 399,
                    },
                    {
                        name: '義式咖啡的萃取科學',
                        type: '料理',
                        pic: './images/coffee.jpg',
                        price: 480,
                    },
                    {
                        name: '像藝術家一樣活用色彩',
                        type: '藝術',
                        pic: './images/color.jpg',
                        price: 550,
                    },
                    {
                        name: '六個說謊的大學生',
                        type: '小說',
                        pic: './images/student.jpg',
                        price: 430,
                    },
                    {
                        name: '國王排名(9)',
                        type: '漫畫',
                        pic: './images/king9.jpg',
                        price: 220,
                    },
                    {
                        name: '義大利經典繪旅行',
                        type: '旅遊',
                        pic: './images/ita.jpg',
                        price: 500,
                    },
                    {
                        name: '國王排名(12)',
                        type: '漫畫',
                        pic: './images/king12.jpg',
                        price: 220,
                    },
                    {
                        name: '母親牌便當',
                        type: '文學',
                        pic: './images/mother.jpg',
                        price: 280,
                    },
                    {
                        name: '食憶的家傳菜譜',
                        type: '料理',
                        pic: './images/eat.jpg',
                        price: 450,
                    },
                    {
                        name: '花蝴蝶回憶錄',
                        type: '藝術',
                        pic: './images/butter.jpg',
                        price: 650,
                    },
                ],
                carts: [],
                num: 0,
                sum: 0,
                cartOpen: false,
            }
        },
        methods: {
            openCart(e) {
                e.preventDefault();
                this.cartOpen = !this.cartOpen
            },
            addToCart(product) {
                this.carts.push(product)
                this.calculate()
            },
            calculate() {
                let total = 0
                let number = 0
                this.carts.forEach(item => {
                    total += item.price
                    number += 1
                });
                this.sum = total
                this.num = number
            },
        },

    };
    Vue.createApp(App).mount('#wrap');
});