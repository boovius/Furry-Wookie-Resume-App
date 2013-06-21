$(document).ready(function(){

	$.ajax('/api/resumes',{
		complete : function (response){	
			resumes = response.responseJSON;	
		}
	});


	$.ajax('/api/resumes/51c2085576eebd4918000001',{
		complete : function (response){	
			console.log(response.responseJSON);		

			/* Name */
			$('#name').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);

			

			/* Experience */
			for (i=0; i<response.responseJSON.experience.length; i++)
			{
				var job = response.responseJSON.experience[i];
				/* appending html - */
				$('#workExp').append("<div class='workInfo'>"+
										"<table border='1'>"+
											"<tr><td>Employer</td><td id='organization" + i + "'></td></tr>"+
											"<tr><td>Location</td><td id='location" + i +"'></td></tr>"+
											"<tr><td>Position</td><td id='role" + i +"'></td></tr>"+
											"<tr><td>Project</td><td id='project" + i +"'></td></tr>"+
											"<tr><td>Start Date</td><td id='start_date" + i +"'></td></tr>"+
											"<tr><td>End Date</td><td id='end_date" + i +"'></td></tr>"+
											"<tr><td>Responsiblities</td><td id='responsibilities" + i +"'></td></tr>"+
											"<tr><td>Achievements</td><td></td></tr></table></div>");





				$('#organization' + i).html(job.organization);
				$('#location' + i).html(job.location);
				$('#role' + i).html(job.role);
				$('#project' + i).html(job.project);
				$('#start_date' + i).html(job.start_month_year);	
				$('#end_date' + i).html(job.end_month_year);	
				

				var resps = '';
				for (k=0; k<job.responsibilities.length; k++){
					resps += job.responsibilities[k];
					resps += ', ';
				}
				$('#responsibilities' + i).html(resps);		

			} /* END EXPERIENCE */

			/* Education */
			for (i=0; i<response.responseJSON.experience.length; i++){
				
				var school = response.responseJSON.schools[i];

				$('#education').append("<div class='workInfo'>"+
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

			for (i=0; i<response.responseJSON.experience.length; i++){
				
				var skill = response.responseJSON.skill[i];

				$('#skills').append("<div class='workInfo'>"+
							"<table border='1'>"+
								"<tr><td>CATEGORY</td><td id='skill_category" + i + "'></td></tr>"+
								"<tr><td>SKILL TITLE</td><td id='skill_experience" + i +"'></td></tr>"+
								"<tr><td>EXPERIENCE</td><td id='skill_title" + i +"'></td></tr></table></div>"); /* end education append html */
								


				$('#skill_category' + i).html(skill.category);
				$('#skill_title' + i).html(skill.title);
				$('#skill_experience' + i).html(skill.experience);

				
			}


							
		} /* end anoynomous complete function */
	}); /* end AJAX request */
}); /* end Document Ready */





