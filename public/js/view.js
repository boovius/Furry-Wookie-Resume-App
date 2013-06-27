$(document).ready(function(){

/*	$.ajax('/api/resumes',{
		complete : function (response){	

				clog(response);
				var resume = response.responseJSON[0];
				clog(resume);*/

			var resume = getNewResume();
			console.log('hello from view.js');
			console.log(resume);

			/* NAME AND CONTACT INFO */
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

			
			$('.hover').mouseenter(function(){
				$('.hover').addClass('click_add');
			});

			$('.hover').mouseleave(function(){
				$('.hover').removeClass('click_add');
			});

			$('.click_add').click(function(){
				console.log('clicked and hovered');
				/*var value = this.id;
				console.log(value);
				var context = $(this).first().html();
				console.log(context);
				$('#tagBox').append("<div class='tag'>" + context + " | " + $('#'+value).html() + "</div>");*/
			});


}); /* end Document Ready */


