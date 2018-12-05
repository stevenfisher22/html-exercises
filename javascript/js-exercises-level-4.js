function lvl4exercise1() {
	// Return the boolean value "true"
	var truth = true;
	return truth;
}

function lvl4exercise2() {
	// Return the boolean value "false"
	var notTruth = false;
	return notTruth;
}

function lvl4exercise3(bool) {
	// Return the opposite of the input boolean value
	var lie1 = !bool;
	return lie1;
}

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
	var and1 = bool1 && bool2;
	return and1;
}

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
	var or1 = bool1 || bool2;
	return or1;
}

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	var equals1 = bool1 == bool2;
	return equals1;
}

console.log(lvl4exercise6(true, false))