//multiple of 12 loopylighthouse
//multiple of 3 loopy
//multiple of 4 lighthouse

for (let x = 100; x <= 200; x ++){
	if (x % 12 === 0){
		console.log("LoopyLighthouse");
	} else if (x % 3 === 0){
		console.log("Loopy");
	} else if (x % 4 === 0){
		console.log("Lighthouse");
	} else (console.log(x));
}