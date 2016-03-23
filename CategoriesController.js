/**
 * Created by Sourabh on 3/23/2016.
 */
(function() {

    angular.module('KmartApp').controller('CategoryCtrl', CategoryController);

    function CategoryController($routeParams) {
        var hctrl = this;
        hctrl.params = $routeParams;
        hctrl.categories = {
            "category": [{
                "imageURL": "images/cat1.png"
            }, {
                "imageURL": "images/cat1.png"
            }, {
                "imageURL": "images/cat1.png"
            }, {
                "imageURL": "images/cat1.png"
            }, {
                "imageURL": "images/cat1.png"
            }, {
                "imageURL": "images/cat1.png"
            }]
        };
        console.log('Category controller');
    }
})();