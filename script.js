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

	let num = c/100;
	for(let i=1;i<=4;i++){
		while(num>=obj[i][1]){
			if(obj[i][1]==0.25){
				num-=obj[i][1];
				res.q +=1;
			}else if(obj[i][1]==0.10){
				num-=obj[i][1];
				res.d +=1;
			}else if(obj[i][1]==0.05){
				num-=obj[i][1];
				res.n +=1;
			}else{
				num-=obj[i][1];
				res.p +=1;
			}
		}
	}
	
	return res;
	
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
