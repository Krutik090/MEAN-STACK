///<reference path="angular.js" />

angular.module('myModule', []).controller('myController', function ($scope) {

    $scope.productDetails = [
        {
            productId: 'P0001',
            productName: 'Sandwich',
            image: 'sandwich.jpeg',
            productCategory: 'Food',
            productDescription: 'Description of Sandwich',
            manufactureDate: new Date(2024, 1, 1),
            price: 150.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0002',
            productName: 'Pizza',
            image: 'pizza.jpeg',
            productCategory: 'Fast Food',
            productDescription: 'Description of Pizza',
            manufactureDate: new Date(2023, 5, 8),
            price: 550.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0003',
            productName: 'Puff',
            image: 'puff.jpeg',
            productCategory: 'Puff',
            productDescription: 'Description of Puff',
            manufactureDate: new Date(2024, 1, 1),
            price: 15.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0004',
            productName: 'Burger',
            image: 'burger.jpeg',
            productCategory: 'Fast Food',
            productDescription: 'Description of Burger',
            manufactureDate: new Date(2024, 1, 1),
            price: 150.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0005',
            productName: 'Vadapav',
            image: 'vadapav.jpg',
            productCategory: 'Food',
            productDescription: 'Description of Vadapav',
            manufactureDate: new Date(2024, 1, 1),
            price: 150.00,
            quantity: 1,
            showDetails: false
        },
    ];


    $scope.funcViewDetails = function (product) {
        product.showDetails = !product.showDetails;
    }
    $scope.cart = [];
    $scope.grandTotal = 0;
    $scope.temp = 0;
    $scope.addToCart = function (product) {
        $scope.temp1 = true;
        let cartItem = $scope.cart.find(item => item.productId == product.productId);
        $scope.totalPrice = product.quantity * product.price;
        $scope.grandTotal = $scope.grandTotal + $scope.totalPrice;
        console.log(cartItem);
        // console.log(item.productId);
        console.log(product.productId);
        if (cartItem) {
            cartItem.quantity += product.quantity;
            cartItem.totalPrice = cartItem.price * cartItem.quantity;
        } else {

            $scope.cart.push({
                productId: product.productId,
                productName: product.productName,
                quantity: product.quantity,
                price: product.price,
                totalPrice: $scope.totalPrice,
                grandTotal: $scope.grandTotal
            });

        };
    }


});