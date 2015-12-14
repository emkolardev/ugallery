/*=======================================================
IIFE (immediately invoked function expression)
=======================================================*/

(function() {
	'use strict';

	var body = document.getElementsByTagName('body')[0];
	var mc = new Hammer(body);
	var colors = ["rgb(42,142,200)", "rgb(38,163,106)", "rgb(20,20,20)", "rgb(100,100,100)", "rgb(208,46,82)", "rgb(151,22,12)", "rgb(202,49,63)", "rgb(145,55,160)", "rgb(244,120,78)", "rgb(251,197,0)"];
	
	mc.on('swipe', function() {
		var rnd = Math.floor((Math.random() * 10) + 1);
		body.style.backgroundColor = colors[rnd-1];
	});

})();