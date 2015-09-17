function letterCapitialize (word) {
	var wordsplit = word.split(' ');
	console.log(wordsplit);
	for (i = 0; i < wordsplit.length; i++){
		var capWord = wordsplit[i].charAt(0).toUpperCase() + wordsplit[i].slice(1);
		wordsplit[i] = capWord;
	}
	return wordsplit.join(' ');
}
console.log(letterCapitialize("time to work hard"));


//===============================================
console.log('');
//===============================================

function wordCount(string) {
	var wordsplit = string.split(' ');
	console.log(wordsplit);
	var count = wordsplit.length;
	return count;
}
console.log(wordCount('where is the water, i am thirsty?'));

//===============================================
console.log('');
//===============================================

function primeTime (){
	
}