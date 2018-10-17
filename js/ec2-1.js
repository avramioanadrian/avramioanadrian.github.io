document.getElementById("id_buisness_version").innerHTML ="Business version: 2018.10.12.6";

function read_data()
{
	var _a = document.getElementById("id_a").value;
	var _b = document.getElementById("id_b").value;
	var _c = document.getElementById("id_c").value;
	
	var coef = {a:_a, b:_b, c:_c}
	return coef;
}


function compute_delta(coef){
	return coef.b * coef.b - 4 * coef.a * coef.c;
	
}



function solve2(coef)
{
		
	
	var delta = compute_delta(coef);
	
	var x1_re, x1_im, x2_re, x2_im;
	
	if(delta >= 0){
		x1_re = (-coef.b - Math.sqrt(delta)) / (2 * coef.a);
		x1_im=0;
		x2_re=(-coef.b + Math.sqrt(delta)) / (2 * coef.a);
		x2_im=0;
		
	}
	else{
		x1_re = -coef.b / (2 * coef.a);
		x1_im = - Math.sqrt(-delta) / (2 * coef.a);
		x2_re = -coef.b / (2 * coef.a);
		x2_im = Math.sqrt(-delta) / (2 * coef.a);
		
	}
	
	var x1 = {re:x1_re, im:x1_im};
	var x2 = {re:x2_re, im:x2_im};
	var solution = {x1:x1, x2:x2};
	return solution
	
}


function print_solutions(solution)
{
	document.getElementById("id_x1").innerHTML = solution.x1.re + " + " + solution.x1.im + "i";
	document.getElementById("id_x2").innerHTML = solution.x2.re + " + " + solution.x2.im + "i";
	
}



function solve()
{
var coef = read_data();
var solution = solve2(coef);
print_solutions(solution);
	
}