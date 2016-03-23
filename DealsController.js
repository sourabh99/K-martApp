/**
 * Created by Sourabh on 3/23/2016.
 */
(function() {

    angular.module('KmartApp').controller('DealsCtrl', DealsController);

    function DealsController($routeParams) {
        var dlsctrl = this;
        dlsctrl.params = $routeParams;
        dlsctrl.deals = {
            "category": [{
                "Price": 4.95,
                "tagline": "Mens pants useful for gym.",
                "Description": "Mens pants useful for gym. The Champion Open Bottom Jersey Pant is Jersey at its best - the ultimate in comfort and durability",
                "imageURL": "images/p2.jpg"
            }, {
                "Price": 7.99,
                "tagline": "Womens pants useful for gym.",
                "Description": "Womens pants useful for gym. The Champion Open Bottom Jersey Pant is Jersey at its best - the ultimate in comfort and durability",
                "imageURL": "images/p2.jpg"
            }, {
                "Price": 10.95,
                "tagline": "Kids outfits.",
                "Description": "Kids outfits. Plaid bomber jacket, graphic t-shirt and stretch denim jeans",
                "imageURL": "images/deal2.jpg"
            }, {
                "Price": 14.95,
                "tagline": "Leather Jacket for men.",
                "Description": "Leather Jacket for men. This flight jacket made to the same unyielding standards as the authentic A-2 military version. Soft lamb touch supple nappa is sewn with a dual entry pockets, plus ribbed cuffs and hem to snug in warmth. Imprinted WWII U.S flag lining.",
                "imageURL": "images/deal3.jpg"
            }, {
                "Price": 40.99,
                "tagline": "Unisex snow jacket.",
                "Description": "Unisex snow jacket. Our heavy insulated parka is sure to keep you warm and provides",
                "imageURL": "images/deal2.jpg"
            }, {
                "Price": 8.49,
                "tagline": "Sports shorts for men and women.",
                "Description": "Sports shorts for men and women. These shorts have the classic cotton style, perfect for relaxing or used for sportswear",
                "imageURL": "images/sport.jpg"
            }]
        };
        console.log('Deals controller');
    }
})();