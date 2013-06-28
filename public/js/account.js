$(document).ready(function(){

	$('#delete-control').click(function(){
		console.log('hello from account.js');
		var id=$('#name').data('id');
		console.log(id);

		$.ajax({
			url : 'api/resumes/' + id,
			type: 'DELETE'
		});

		$('#name').html('');
		/*$('#res-id').html('');*/
		$('#phoneNumber').html('');
		$('#street').html('');
		$('#city').html('');
		$('#state').html('');
		$('#zip').html('');
		$('#account_details').html('ACCOUNT DELETED');
		
	});

	$('#new-control').click(function(){
		getNewResume(function(resume){	
			$('#account_details').html('');
			fillContactInfoFields(resume);
		});
	});

});