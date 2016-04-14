(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("hello there")

var main = document.querySelector('#main')
var imageArray = [{ name: 'harry', image: 'http://i.imgur.com/sVLVL5z.jpg'}, { name: 'polly', image: 'http://i.imgur.com/skyvLsc.png' }, { name: 'roger', image: 'http://i.imgur.com/49gsA5P.jpg' }]

imageArray.map(function(imageObject){
  var imageDiv = document.createElement('div')
  imageDiv.id = imageObject.name
  imageDiv.style.backgroundImage = 'url(' + imageObject.image + ')'
  main.appendChild(imageDiv)
})

},{}]},{},[1]);
