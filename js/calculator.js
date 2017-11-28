// add your code here to make the calculator work
var nombre1;
var nombre2;


$('.btn').click(function(){
	
	if ($(this).html() === 'c') {
		$('#result').html('');
	}else if ($(this).html() === '=') {
		if ($('#result').html().indexOf('+') !== -1) {
			console.log($('#result').html().indexOf('+'));
			nombre1 = $('#result').html().substr(0, $('#result').html().indexOf('+'));
			nombre2 = $('#result').html().substr($('#result').html().indexOf('+')+1, $('#result').html().length);
			console.log(nombre1);
			console.log(nombre2);
			parseInt(nombre1);
			parseInt(nombre2);
			nombre1 += nombre2;
			console.log(nombre1);
		}
		if ($('#result').html().indexOf('-') !== -1) {

		}
		if ($('#result').html().indexOf('/') !== -1) {

		}
		if ($('#result').html().indexOf('*') !== -1) {

		}
	} else {
		$('#result').append($(this).html());
	}
});

// function addition(){


	/*$('#result').append($(this).html() + $(this).html());*/
// }







