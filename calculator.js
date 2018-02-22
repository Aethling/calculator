$(document).ready(function(){
	var num1 = '';
	var num2 = '';
	var op = ''
	$("button").on("click", function(){
		var text = $(this).text();
		if (text == 'C') {
			$(".well").empty()
			num1 = '';
			num2 = '';
		} else if (text == '+' || text == '-' || text == '*' || text == '/') {
			// $(".well").empty()
			op = text;
			num2 = num1;
			num1 = '';
		} else if (text == "=") {
			 compute(num1, num2, op);
		} else {
			num1 += text;
			$(".well").text(num1);
		};
	});
	function compute(num1, num2, op) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		var solution = '';
		switch(op) {
			case "+":
			solution = num1 + num2;
				break
			case "-":
			solution = num2 - num1;
				break
			case "*":
			solution = num1 * num2;
				break
			case "/":
			solution = num2 / num1; 
		}
		console.log(solution);
		$(".well").text(solution);
	}
}) //end document.ready