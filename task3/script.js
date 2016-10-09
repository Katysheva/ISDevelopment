
$(document).ready(function() {

	$.getJSON('file.json', function(object) {
		$('#title').text(object.title);
		$('#description').text(object.description);
        showFreelansers(object.freelansers);


    });
});
function showFreelansers(freelansers){
	for (freelanser of freelansers)
	{
		var string = '';
		string+='<p>' + freelanser.name + ' is ' + freelanser.function + ' and he/she is ' + freelanser.age + ' years old. Now he/she is' + freelanser.status + '.</p>';
		$('#freelansersList').append(string);
	}
};