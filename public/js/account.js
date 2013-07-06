$(document).ready(function(){

		
	$('#delete-control').click(function(){
		console.log('hello from account.js');

		var id=$('#name').data('id');
		console.log(id);

		$.ajax({
			url : '/' + id,
			type: 'DELETE'
		}).done(function(){
				$('#name').html('');
				$('#name').removeData();
				$('#res-id').html('');
				$('#phone').html('');
				$('#street').html('');
				$('#city').html('');
				$('#state').html('');
				$('#zip').html('');
				$('#account_details').html('ACCOUNT DELETED');

			var id=$('#name').data('id');
			console.log('my id is : ' + id);
		});

		
	});

	$('#new-control').click(function(){
		getNewResume(function(resume){	
			$('#account_details').html('');
			fillContactInfoFields(resume);
		});
	});

});