function myFunction() {

	var x, text, results = [];
	var resultsElement = document.getElementById("possibilities");
	x = document.getElementById("score").value;

	if (isNaN(x)) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x < 0) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x == 1) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x == 2) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x == 4) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x % 1 !== 0) {
		resultsElement.innerHTML = "This is not a possible score in Rugby Union.";
	} else if (x > 199) {
		resultsElement.innerHTML = "Are you sure? No team has ever scored that highly in a Rugby Union test match.";
	} else if (x == 0) {
		resultsElement.innerHTML = "There were no tries, conversions or penalties.";
	} else {

		var ct, t, p, ctRemainder, tRemainder;
		ct = Math.floor(x / 7);
		do {
			ctRemainder = x - 7 * ct;
			t = Math.floor(ctRemainder / 5);
			do {
				tRemainder = ctRemainder - 5 * t;
				p = Math.floor(tRemainder / 3);
				if (tRemainder % 3 == 0) {
					results.push({ tries: (ct + t), conversions: ct, penalties: p});
				}
				t--;
			} while (t > -1);
			ct--;
		} while (ct > -1);

		var orderedResults = orderResults(results);
		printResults(orderedResults, resultsElement);

	}
}

function orderResults(results) {

	return results.sort(function(item1, item2) {
		if (item1.tries > item2.tries) {
			return -1;
		} else if (item1.tries < item2.tries) {
			return 1;
		} else {
			return 0;
		}
	});

}

function printResults(results, resultsElement) {

	resultsElement.innerHTML = "";
	for (var result of results) {
		console.log(result);
		resultsElement.innerHTML += "Tries: " + result.tries + " Conversions: "
		+ result.conversions + " Penalties: " + result.penalties + "<br/>";
	}
}
/*
print below in the html in rugby union a total score of 'score' can be made up of '#combinations'scoring combinations. These are:
print below all combinations from the array in the order of magnitude of ct+t
*/
