function evenAmountOfZeros(){
	loadingStatus();
	$.get('machineLoader.php',{name: 'evenAmountOfZeros.txt'}, function(data) {
			loadData(data);
		});
}

function oneTapePalindrome(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'oneTapePalindrome.txt'}, function(data) {
			loadData(data);
		});
}

function dividableByThree(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'dividableByThree.txt'}, function(data) {
			loadData(data);
		});
}

function twoTapesPalindrome(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'twoTapesPalindrome.txt'}, function(data) {
			loadData(data);
		});
}

function logarithmOfLength(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'logarithmOfLength.txt'}, function(data) {
			loadData(data);
		});
}

function sum(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'sum.txt'}, function(data) {
			loadData(data);
		});
}

function multiplication(){
		loadingStatus();
		$.get('machineLoader.php',{name: 'multiplication.txt'}, function(data) {
			loadData(data);
		});
}

function loadingStatus(){
	document.getElementById('machine_code').value = 'Loading, please wait...';
}

function loadData(data){
	var lines = data.split(/\r\n|\r|\n|\n\r/);
	document.getElementById('in_title').value = lines[0];
	document.getElementById('i_state').value = lines[1];
	document.getElementById('f_states').value = lines[2];
	document.getElementById('machine_code').value = lines.slice(3).join('\n');
}