
/*
Angular Js
*/

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/needs", {
        templateUrl : "needs.html"
    })
    .when("/gallery", {
        templateUrl : "gallery.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });

});



	



