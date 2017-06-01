"use strict";

var app = angular.module("highwayApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: "./partials/homepage.html"
	}).
	when('/hwy1', {
		templateUrl: "./partials/highway1.html",
		controller: 'highwayCtrl'
	}).
	when('/hwy2', {
		templateUrl: './partials/highway2.html',
		controller: 'highway2Ctrl'
	}).
	otherwise('/');
});