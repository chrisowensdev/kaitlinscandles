// 9oz Popular

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635894149286',
                node: document.getElementById(
                    'product-component-1598119771299'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* 16 oz */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635894313126',
                node: document.getElementById(
                    'product-component-1598120993929'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* 4oz */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635892609190',
                node: document.getElementById(
                    'product-component-1598121718734'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* Waxmelts #1 */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635892478118',
                node: document.getElementById(
                    'product-component-1598122499088'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* waxmelts #2 */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635892543654',
                node: document.getElementById(
                    'product-component-1598122639370'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* Wax Melt #3 */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5637916000422',
                node: document.getElementById(
                    'product-component-1598230430203'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* Coasters #1 */
(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635892773030',
                node: document.getElementById(
                    'product-component-1598122915265'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* Coaster #2 */

(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635893330086',
                node: document.getElementById(
                    'product-component-1598123012508'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();

/* Coaster #3 */
(function () {
    var scriptURL =
        'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName('head')[0] ||
            document.getElementsByTagName('body')[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kaitlins-candles.myshopify.com',
            storefrontAccessToken: '3405009d11c0434db676f75184b94059',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '5635894116518',
                node: document.getElementById(
                    'product-component-1598123085070'
                ),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    product: {
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                },
                            },
                            title: {
                                'font-family': 'Montserrat, sans-serif',
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        buttonDestination: 'modal',
                        contents: {
                            options: false,
                        },
                        text: {
                            button: 'View product',
                        },
                        googleFonts: ['Montserrat'],
                    },
                    productSet: {
                        styles: {
                            products: {
                                '@media (min-width: 601px)': {
                                    'margin-left': '-20px',
                                },
                            },
                        },
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true,
                        },
                        styles: {
                            product: {
                                '@media (min-width: 601px)': {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                            },
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                                'padding-left': '25px',
                                'padding-right': '25px',
                            },
                            quantityInput: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                            },
                        },
                        text: {
                            button: 'Add to cart',
                        },
                    },
                    cart: {
                        styles: {
                            button: {
                                'font-size': '14px',
                                'padding-top': '15px',
                                'padding-bottom': '15px',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                'background-color': '#b35f86',
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                                'border-radius': '0px',
                            },
                        },
                        text: {
                            total: 'Subtotal',
                            button: 'Checkout',
                        },
                        contents: {
                            note: true,
                        },
                        popup: false,
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                'background-color': '#b35f86',
                                ':hover': {
                                    'background-color': '#a15679',
                                },
                                ':focus': {
                                    'background-color': '#a15679',
                                },
                            },
                            count: {
                                'font-size': '14px',
                            },
                        },
                    },
                },
            });
        });
    }
})();
