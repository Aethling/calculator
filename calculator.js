$(document).ready(function(){

	var num1 = '';
	var num2 = '';
	var lastNum;
	var op = '';
function start(lastNum) {
	$("button").on("click", function(){
		var text = $(this).text();
		evaluateInput(text, lastNum);
	});
}
	function evaluateInput(text, lastNum) {
		if (text == 'C') {
			$(".well").empty()
			num1 = '';
			num2 = '';
			lastNum = '';
		} else if (text == '+' || text == '-' || text == '*' || text == '/') {
			// $(".well").empty()
			op = text;
			num2 = num1;
			num1 = '';
		} else if (text == "=") {
			if (num2) {
				compute(num1, num2, op);
			} else {
				compute(num1, lastNum, op);
			}
		} else {
			num1 += text;
			$(".well").text(num1);
		};
	};
	function compute(num1, num2, op) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		var solution;
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
		updateAndReset(solution)
	}
	function updateAndReset(solution){
		$(".well").text(solution);
		lastNum = solution;
		num1 = "";
		num2 = "";
		start(lastNum);
	}
start();
}) //end document.ready