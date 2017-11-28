// add your code here to make the calculator work
var nombre1;
var nombre2;
var reset = false;

$('.btn').click(function(){
	if (reset == true){
		$('#result').html('');
		reset = false;
	}
	if ($(this).html() === 'c') {
		$('#result').html('');
	}else if ($(this).html() === '=') {
		if ($('#result').html().indexOf('+') !== -1) {
			console.log($('#result').html().indexOf('+'));
			nombre1 = $('#result').html().substr(0, $('#result').html().indexOf('+'));
			nombre2 = $('#result').html().substr($('#result').html().indexOf('+')+1, $('#result').html().length);
			var resultat = parseInt(nombre1) + parseInt(nombre2);
			$('#result').html(resultat);
			reset = true;
		}
		if ($('#result').html().indexOf('-') !== -1) {
			nombre1 = $('#result').html().substr(0, $('#result').html().indexOf('-'));
			nombre2 = $('#result').html().substr($('#result').html().indexOf('-')+1, $('#result').html().length);
			var resultat = parseInt(nombre1) - parseInt(nombre2);
			$('#result').html(resultat);
		}
		if ($('#result').html().indexOf('/') !== -1) {
			nombre1 = $('#result').html().substr(0, $('#result').html().indexOf('/'));
			nombre2 = $('#result').html().substr($('#result').html().indexOf('/')+1, $('#result').html().length);
			var resultat = parseInt(nombre1) / parseInt(nombre2);
			$('#result').html(resultat);
		}
		if ($('#result').html().indexOf('*') !== -1) {
			nombre1 = $('#result').html().substr(0, $('#result').html().indexOf('*'));
			nombre2 = $('#result').html().substr($('#result').html().indexOf('*')+1, $('#result').html().length);
			var resultat = parseInt(nombre1) * parseInt(nombre2);
			$('#result').html(resultat);
		}
	} else {
		$('#result').append($(this).html());
	}
});

// function addition(){


	/*$('#result').append($(this).html() + $(this).html());*/
// }







