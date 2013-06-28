$(document).ready(function(){


			console.log('hello from view.js');
			getNewResume(function(resume) {
				console.log(resume);
				fillContactInfoFields(resume);
				/* LINKS */
				fillPersonalLinksFields(resume);
				/* EXPERIENCE  */
				fillExperienceTable(resume);
				/* Education */
				fillEducationTable(resume);
				/* Skills */
				fillSkillsTable(resume);
				fillAccomplishmentsTable(resume);
			});
			/* NAME AND CONTACT INFO */

			/* Accomplishments */


			
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


