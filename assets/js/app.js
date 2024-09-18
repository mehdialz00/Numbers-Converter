/**
 * javascript comment
 * @Author: Mehdi
 * @Date: 2024-09-18 18:56:37
 * @Desc: a Function to convert greek number to decimal number
 */
function greekToDecimal(greek) {
	const greekMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let decimal = 0;
	let prevValue = 0;

	for (let i = greek.length - 1; i >= 0; i--) {
		const currentValue = greekMap[greek[i]];

		if (currentValue >= prevValue) {
			decimal += currentValue;
		} else {
			decimal -= currentValue;
		}

		prevValue = currentValue;
	}

	return decimal;
}
/**
 * javascript comment
 * @Author: Mehdi
 * @Date: 2024-09-18 18:56:37
 * @Desc: a Function to Convert decimal numbers to Roman numbers
 */
function decimalTogreek(decimal) {
	const decimalMap = [
		{ value: 1000, symbol: "M" },
		{ value: 900, symbol: "CM" },
		{ value: 500, symbol: "D" },
		{ value: 400, symbol: "CD" },
		{ value: 100, symbol: "C" },
		{ value: 90, symbol: "XC" },
		{ value: 50, symbol: "L" },
		{ value: 40, symbol: "XL" },
		{ value: 10, symbol: "X" },
		{ value: 9, symbol: "IX" },
		{ value: 5, symbol: "V" },
		{ value: 4, symbol: "IV" },
		{ value: 1, symbol: "I" },
	];

	let greek = "";
	for (const item of decimalMap) {
		while (decimal >= item.value) {
			greek += item.symbol;
			decimal -= item.value;
		}
	}
	return greek;
}

// check and converter function
document.getElementById("converterForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.getElementById("inputNumber").value.trim();
	const resultElement = document.getElementById("result");

	// check the input number or greek
	if (/^\d+$/.test(input)) {
		// if input number
		const decimal = parseInt(input, 10);
		const greek = decimalTogreek(decimal);
		resultElement.innerText = `Greek equivalent : ${greek}`;
	} else {
		// if input greek
		const greek = input.toUpperCase();
		const decimal = greekToDecimal(greek);
		resultElement.innerText = `Numerical equivalent: ${decimal}`;
	}
});
