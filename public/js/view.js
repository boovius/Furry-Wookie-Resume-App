$(document).ready(function(){

			

			console.log('hello from view.js');
			getNewResume(function(resume) {
				console.log(resume);
				fillViewPage(resume);
			});

		

			

		$('#nextResButton').click(function(){
			console.log('next button pushed');
			var id=$('#name').data('id');	
			console.log('id before remove is ' + id);
			$('#name').removeData();
			$.ajax('/api/resumes', {
				complete : function (response){	
					console.log('id after remove is ' + id);
					var totalResumes = response.responseJSON.length;
					for (i = 0; i < totalResumes; i++){
						if (response.responseJSON[i].id === id){
							if (i === response.responseJSON.length-1)
								var resume = response.responseJSON[0];
							else 
								var resume = response.responseJSON[i+1];
							fillViewPage(resume);
						}/* end if */
					}/* for loop */
				} /* end annoymous complete function */
			}); /* end ajax get request */
			return false;
		});

		$('#prevResButton').click(function(){
			console.log('prev button pushed');
			var id=$('#name').data('id');	
			console.log('id before remove is ' + id);
			$('#name').removeData();
			$.ajax('/api/resumes', {
				complete : function (response){	
					console.log('id after remove is ' + id);
					var totalResumes = response.responseJSON.length;
					console.log(totalResumes);
					for (i = 0; i < totalResumes; i++){
						if (response.responseJSON[i].id === id){
							if (i === 0)
								var resume = response.responseJSON[totalResumes-1];
							else	
								var resume = response.responseJSON[i-1];
							fillViewPage(resume);
						}/* end if */
					}/* for loop */
				} /* end annoymous complete function */
			}); /* end ajax get request */
			return false;
		});
			
		$('.hover').mouseenter(function(){
			$('.hover').addClass('click_add');
		});

		$('.hover').mouseleave(function(){
			$('.hover').removeClass('click_add');
		});

		console.log($('.click_add'));
		$('body').on('click', '.hover', function(){
			if (!$('.hover').hasClass('click_add')){
				$('.hover').addClass('click_add');
				var value = this.id;
				console.log(value);
				var context = $(this).first().html();
				console.log(context);
				$('#tagBox').append("<div class='tag'>" + context + " | " + $('#'+value).html() + "</div>");	
			}
			
		});


}); /* end Document Ready */

function fillViewPage(resume){
	fillContactInfoFields(resume);
	/* LINKS */
	fillPersonalLinksFields(resume);
	/* EXPERIENCE  */
	fillExperienceTable(resume);
	/* Education */
	fillEducationTable(resume);
	/* Skills */
	fillSkillsTable(resume);
	/* Accomplishments */
	fillAccomplishmentsTable(resume);
}
