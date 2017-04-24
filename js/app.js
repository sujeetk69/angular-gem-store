(function () {
    var app = angular.module('store', []);

    var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 11050,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "img/gem-02.gif",
      "img/gem-05.gif",
      "img/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@thomas.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@hater.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 2290,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "img/gem-01.gif",
      "img/gem-03.gif",
      "img/gem-04.gif",
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@sausage.com",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@alyssaNicoll.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 110000,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "img/gem-06.gif",
      "img/gem-07.gif",
      "img/gem-10.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@zdn.me",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@gmail.com",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@flatland.com",
      createdOn: 1397490980837
    }]
  }];

    app.controller("storeController", function () {
        this.products = gems;
    });

    app.controller("TabController", function () {
        this.tab = 1;

        this.setTab = function (thisTab) {
            this.tab = thisTab;
        };

        this.isSet = function (currentTab) {
            return (this.tab === currentTab);
        };
    });

    app.controller("GalleryController", function () {
        this.current = 0;

        this.setCurrent = function (val) {
            if (val)
                this.current = val;
            else
                this.current = 0;
        };
    });

    app.controller("ReviewController", function ($scope) {
        this.review = {};

        this.addReview = function () {
            console.log("Entering addReview()-----------------------");            
            console.log("Number of review before submission: " + $scope.product.reviews.length);
            
            this.review.createdOn = Date.now();
            $scope.product.reviews.push(this.review);
            
            console.log("Submitted review: " + this.review);
            console.log("Number of review after submission: " + $scope.product.reviews.length);
            
            this.review = {};
            
            //Set the form to pristine state (fresh) so that validation styling dissappear
            $scope.reviewForm.$setPristine();
            
            console.log("Cleaned up review form");
            console.log("Leaving addReview()-----------------------");
        };
    });
    
    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });
    
    app.directive('productSpecs', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-specs.html'
        };
    });

})();
