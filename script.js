const makeChange = (c) => {
  // your name here
	const obj = {
		1:["q", 0.25],
		2:["d", 0.10],
		3:["n", 0.05],
		4:["p", 0.01]
	}
	let res = {
		"q":0,
		"d":0,
		"n":0,
		"p":0,
	};

	let num = Number(c)/100;
	for(let i=1;i<=4;i++){
		while(num>=obj[i][1]){
			
			num -= obj[i][1];
			res[obj[i][0]] +=1;

			num = Math.round(num*100)/100;
		}
	}
	return res;
	
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
