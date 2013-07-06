$(document).ready(function(){
	console.log('hello from view.js');
	
	getNewResume(function(resume) {
		console.log(resume);	
		fillViewPage(resume);
	});

		
/* PREV/NEXT CONTROLS */
			
			/* Next Resume */

		$('#nextResButton').click(function(){
			var id=$('#name').data('id');	
			$('#name').removeData();
			$.ajax('/', {
				complete : function (response){	
					var totalResumes = response.responseJSON.length;
					for (i = 0; i < totalResumes; i++){
						if (response.responseJSON[i].id === id){
							if (i === response.responseJSON.length-1)
								var resume = response.responseJSON[0];
							else 
								var resume = response.responseJSON[i+1];
							resetResViewBoxes();
							fillViewPage(resume);
							break;
						}/* end if */
					}/* for loop */
				} /* end annoymous complete function */
			}); /* end ajax get request */
			return false;
		});

			/* Prev Resume */
		$('#prevResButton').click(function(){
			var id=$('#name').data('id');	
			$('#name').removeData();
			$.ajax('/', {
				complete : function (response){	
					var totalResumes = response.responseJSON.length;
					for (i = 0; i < totalResumes; i++){
						if (response.responseJSON[i].id === id){
							if (i === 0){
								var resume = response.responseJSON[totalResumes-1];								
							}
							else{
								var resume = response.responseJSON[i-1];
							}	
								
							fillViewPage(resume);
							break;
						}/* end if */
					}/* for loop */
				} /* end annoymous complete function */
			}); /* end ajax get request */
			return false;
		});
			

/* TAGGING */
		$('body').on('click', '.hover', function(){

			if (!$(this).hasClass('click_add')){
				$(this).addClass('click_add');
				var value = this.id;
				console.log(value);
				var context = $(this).parent().first().find('.context').html();
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
