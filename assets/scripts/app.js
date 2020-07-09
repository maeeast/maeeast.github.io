const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "WordPress",
				weight: 13
			}, {
				text: "Squarespace",
				weight: 14
			}, {
				text: "HTML",
				weight: 8
			}, {
				text: "Javascript",
				weight: 9
			}, {
				text: "Angular",
				weight: 3
			}, {
				text: "Bootstrap",
				weight: 7
			}, {
				text: "Web Design",
				weight: 10
			}, {
				text: "React",
				weight: 9
			}, {
				text: "CSS",
				weight: 15
			}, {
				text: "UI/UX",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {
			delay: 120,
			colors:["#08306b","#08519c","#2171b5","#4292c6","#6baed6","#9ecae1"],
			fontSize: {
				from: 0.1,
				to: 0.03
			  }
		
		});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Frontend Web Developer.", "solve problems.", "am a JavaScript Success Coach.", "love everything about code!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 50,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#6B859E", "border-radius": "35px"});
				$(".typed-cursor").css({"display": "none"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
