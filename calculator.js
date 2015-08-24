var calculator = function() {
	var equationControl,
	currentNumberControl,
	operator = "",
	operatorSet = false,
	equalsPressed = false,
	lastNumber = null, 

	init = function(eqControl, currNumber) {
		equationControl = eqControl;
		currentNumberControl = currNumber;
	},

	add = function(x, y) {
		return x + y;
	},

	subtract = function(x, y) {
		return x- y;
	},

	multiply = function(x, y) {
		return x * y;
	},

	divide = function(x, y) {
		if(y === 0){
			altert('Cannot divide by Zero');
			return 0;
		} else {
				return x /y;
		}
	},

	setVal = function(val) {
		currentNumberControl.innerHTML = val;
	},

	setEquation = function(val){
		equationControl.innerHTML = val;
	},

	clearNumbers = function() {
		lastNumber = null;
		equalsPressed = operatorSet = false;
		setVal('0');
		setEquation('');
		operator = "";
	},

	setOperator = function (newOperator) {
		if(newOperator == '=') {
			equalsPressed = true;
			calculate();
			setEquation('');
			return;
		}
		operator = newOperator;
		operatorSet = true;
		equationControl.append
	},

	numberClick = function(e) {
		var button = (e.target) ? e.target : e.srcElement;
		if(operatorSet == true || currentNumberControl.innerHTML == '0') {
			lastNumber = parseFloat(currentNumberControl.innerHTML);
			setVal('');
			operatorSet = false;
		}
		setVal(currentNumberControl.innerHTML + button.innerHTML);
	},

	calculate = function() {
		if(!operator || lastNumber == null) return;
		var currNumber = parseFloat(currentNumberControl.innerHTML),
		newVal = 0;

		switch (operator) {
			case '+':
			newVal = add(lastNumber, currNumber);
			break;
			case '-':
			newVal = subtract(lastNumber, currNumber);
			break;
			case '*':
			newVal = multiply(lastNumber, currNumber);
			break;
			case '/':
			newVal = divide(lastNumber, currNumber);
			break;
		}

		setVal(newVal);
		lastNumber = newVal;
		operator = "";
	}

	return {
		init: init,
		numberClick: numberClick,
		setOperator: setOperator,
		clearNumbers: clearNumbers
	};
}();
