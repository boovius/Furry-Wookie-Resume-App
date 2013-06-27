$(document).ready(function(){

/*	$.ajax('/api/resumes',{
		complete : function (response){	
			resumes = response;
		}
	}); */


	$.ajax('/api/resumes/51c2085576eebd4918000001',{
		complete : function (response){	
				console.log(response);
				resume = response.responseJSON;
			/* NAME */
			$('#name').html(resume.name_first + ' ' + resume.name_last);
			
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
			for (i=0; i<response.responseJSON.experience.length; i++)
			{
				var job = response.responseJSON.experience[i];
				/* appending html - */
				$('#workExp').append("<div class='workInfo resInfo'>"+
										"<table border=1>"+
											"<tr><td>Employer</td><td id='organization" + i + "'class='hover'></td></tr>"+
											"<tr><td>Location</td><td id='location" + i +"'></td></tr>"+
											"<tr><td>Position</td><td id='role" + i +"'></td></tr>"+
											"<tr><td>Project</td><td id='project" + i +"'></td></tr>"+
											"<tr><td>Start Date</td><td id='start_date" + i +"'></td></tr>"+
											"<tr><td>End Date</td><td id='end_date" + i +"'></td></tr>"+
											"<tr><td>Responsiblities</td><td id='responsibilities" + i +"'></td></tr>"+
											"</table></div>");





				$('#organization' + i).html(job.organization);
				$('#location' + i).html(job.location);
				$('#role' + i).html(job.role);
				$('#project' + i).html(job.project);
				$('#start_date' + i).html(job.start_month_year);	
				$('#end_date' + i).html(job.end_month_year);	
				

				var resps = '';
				for (k=0; k<job.responsibilities.length; k++){
					resps += job.responsibilities[k];
					if (! (k === job.responsibilities.length-1))
						resps += ', ';
				}
				$('#responsibilities' + i).html(resps);		

			} /* END EXPERIENCE */

			/* Education */
			for (i=0; i<response.responseJSON.schools.length; i++){
				
				var school = response.responseJSON.schools[i];

				$('#education').append("<div class='educationInfo resInfo'>"+
							"<table border='1'>"+
								"<tr><td>SCHOOL</td><td id='school" + i + "'></td></tr>"+
								"<tr><td>MAJOR</td><td id='major" + i +"'></td></tr>"+
								"<tr><td>MINOR</td><td id='minor" + i +"'></td></tr>"+
								"<tr><td>DEGREE</td><td id='degree" + i +"'></td></tr>"+
								"<tr><td>START</td><td id='start" + i +"'></td></tr>"+
								"<tr><td>END</td><td id='end" + i +"'></td></tr>"+
								"<tr><td>GPA</td><td id='gpa" + i +"'></td></tr>"+
								"</table></div>"); /* end education append html */


				$('#school' + i).html(school.name);
				$('#major' + i).html(school.major);
				$('#minor' + i).html(school.minor);
				$('#degree' + i).html(school.degree);
				$('#start' + i).html(school.start_month_year);	
				$('#end' + i).html(school.end_month_year);	
				$('#gpa' + i).html(school.gpa);	
				
			} /* end Education */			


			/* Skills */

			for (i=0; i<response.responseJSON.skill.length; i++){
				
				var skill = response.responseJSON.skill[i];

				$('#skills').append("<div class='skillInfo resInfo '>"+
							"<table border='1'>"+
								"<tr><td>CATEGORY</td><td id='skill_category" + i + "'></td></tr>"+
								"<tr><td>SKILL TITLE</td><td id='skill_experience" + i +"'></td></tr>"+
								"<tr><td>EXPERIENCE</td><td id='skill_title" + i +"'></td></tr></table></div>"); /* end education append html */
								


				$('#skill_category' + i).html(skill.category);
				$('#skill_title' + i).html(skill.title);
				$('#skill_experience' + i).html(skill.experience);

				
			}  /* end skills */


			/* Accomplishments */

			for (i=0; i<response.responseJSON.accomplishments.length; i++){
				
				var accomplishment = response.responseJSON.accomplishments[i];

				$('#accomplishments').append("<div class='skillInfo resInfo '>"+
							"<table border='1'>"+
								"<tr><td>ACCOMPLISHMENT</td><td id='accomplishment" + i + "'></td></tr>"+
								"<tr><td>DESCRIPTION</td><td id='accomp_descrip" + i +"'></td></tr>"+
								"<tr><td>DATE</td><td id='date_accomp" + i +"'></td></tr></table></div>"); /* end education append html */
								


				$('#accomplishment' + i).html(skill.category);
				$('#accomp_descrip' + i).html(skill.title);
				$('#date_accomp' + i).html(skill.experience);

				
			}  /* end skills */

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





