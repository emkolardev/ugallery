(function() {
	'use strict';
	
	var uPhoto = Object.create(HTMLDivElement.prototype);
	
	Object.defineProperty(uPhoto, 'image', {
		get: function() {
			return String(this.dataset.image);
		},
		set: function(val) {
			this.dataset.image = val;
		}
	});
	
	uPhoto.createdCallback = function() {
		// add shadow dom!
		var shadow = this.createShadowRoot();
		shadow.innerHTML = '<content></content><div class="score-display" style="background: blue; color: white; padding: 5px;">0</div>';
	}
})();

/*
var sweetBtnProto = Object.create(HTMLButtonElement.prototype);

	Object.defineProperty(sweetBtnProto, 'score', {
		get: function() {
			return Number(this.dataset.score);
		},
		set: function(val) {
			if (!isNaN(val)) {
				this.dataset.score = val;
			}
		}
	});

	// executed on created
	sweetBtnProto.createdCallback = function() {
		this.score = 0;


		// add shadow dom!
		var shadow = this.createShadowRoot();
		shadow.innerHTML = '<content></content><div class="score-display" style="background: blue; color: white; padding: 5px;">0</div>';


		//click handler
		this.addEventListener('click', function() {
			this.score = this.score + 1;
			console.log(this.score);
			var scoreDisplay = shadow.querySelector('.score-display');
			scoreDisplay.innerHTML = this.score;
		});
	};

	document.registerElement('sweet-button', {
		prototype: sweetBtnProto,
		extends: 'button'
	});
*/