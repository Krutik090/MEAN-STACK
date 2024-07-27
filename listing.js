///<reference path="angular.js" />

angular.module('myModule', []).controller('myController', function ($scope) {

    $scope.productDetails = [
        {
            productId: 'P0001',
            productName: 'Iphone',
            image: 'https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_avail__en-in-removebg-preview.png',
            productCategory: 'iphone',
            productDescription: 'Description of iphone',
            manufactureDate: new Date(2024, 1, 1),
            price: 150000.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0002',
            productName: 'Samsung',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-thumb-539573274',
            productCategory: 'android',
            productDescription: 'Description of Samsung',
            manufactureDate: new Date(2023, 5, 8),
            price: 55550.00,
            quantity: 1,
            showDetails: false
        },
        {
            productId: 'P0003',
            productName: 'Oneplus',
            image: 'oneplus.jpg',
            productCategory: 'android',
            productDescription: 'Description of oneplus',
            manufactureDate: new Date(2023, 5, 8),
            price: 37000.00,
            quantity: 1,
            showDetails: false
        },
        
        
    ];

    $scope.currentPage = 0;
    $scope.pageSize = 3;

    $scope.numberOfPages = function () {
        return Math.ceil($scope.productDetails.length / $scope.pageSize);
    };

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
    $scope.sortOption = '';
}); 