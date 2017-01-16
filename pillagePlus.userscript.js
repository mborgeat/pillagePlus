// ==UserScript==
// @name         Pillage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lodis
// @require				http://code.jquery.com/jquery-2.1.1.min.js
// @match				http://game.asylamba.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

//tableau des url de pillage sans le token

var urlPillage = ['http://game.asylamba.com/s13/action/a-loot/commanderid-283/placeid-3551/'];
//ajout du bouton de pillage auto + ajout du formulaire pour le token

$('#nav .box.right').append('<a href="" class="pillage-script square" title="Lancer pillage"><img src="http://game.asylamba.com/s10/public/media/map/action/loot.png" alt="" /></a>');

$('.pillage-script').click(function(){
    event.preventDefault();
    var data = $('#nav .box a.square:last-child').attr('href');
var arr = data.split('/');
        $.each(urlPillage, function(){
            window.open(this+arr[7], '_blank');
        });
});



