$(document).ready(function(){

	$('#delete-control').click(function(){
		console.log('hello account');
		var id=$('#name').data('id');
		console.log(id);

		$.ajax({
			url : 'api/resumes/' + id,
			type: 'DELETE'
		});

		$('#res-heading').html('<div>ACCOUNT DELETED</div>');
		
	});

	$('#new-control').click(function(){
		getNewResume();
		window.location = window.location;

	});

});