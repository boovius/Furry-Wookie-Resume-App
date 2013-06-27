$(document).ready(function(){

/*	$.ajax('/api/resumes',{
		complete : function (response){	
			resumes = response;
		}
	}); */


	$.ajax('/api/resumes',{
		complete : function (response){	
				clog(response);
				var resume = response.responseJSON[0];
				clog(resume);
			/* NAME */
			$('#name').attr('data-id', resume.id).html(resume.name_first + ' ' + resume.name_last);
			clog($('#name').data('id'));
			
			/* CONTACT INFO */
			$('#phoneNumber').html(resume.contact_info.phone);
			$('#street').html(resume.contact_info.street_address.street);
			$('#city').html(resume.contact_info.street_address.city);
			$('#state').html(resume.contact_info.street_address.state);
			$('#zip').html(resume.contact_info.street_address.zip_code);


			/* LINKS */
			$('#personal_website').attr("href", resume.website);
			$('#personal_website').attr("href", resume.twitter);
			$('#personal_website').attr("href", resume.linked_in);



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


							
		} /* end anoynomous complete function */
	}); /* end AJAX request */
}); /* end Document Ready */


