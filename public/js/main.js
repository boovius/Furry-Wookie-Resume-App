console.log('hello from main.js');
/* fill contact info */
function fillContactInfoFields(resume){
	console.log('fill contact info executed');
	/* Name*/
	$('#name').attr('data-id', resume.id).html(resume.name_first + ' ' + resume.name_last);
	$('#res-id').html(resume.id); /*$('#name').data('id')*/

	/* Contact Info */
	$('#phoneNumber').html(resume.contact_info.phone);
	$('#street').html(resume.contact_info.street_address.street);
	$('#city').html(resume.contact_info.street_address.city);
	$('#state').html(resume.contact_info.street_address.state);
	$('#zip').html(resume.contact_info.street_address.zip_code);
	$('#account_details').html('');
}
/* end fill contact info */



/* fill personal links */

function fillPersonalLinksFields(resume){
	$('#personal_website').attr("href", resume.website);
	$('#twitter').attr("href", resume.twitter);
	$('#linkedin').attr("href", resume.linked_in);
}

/* fill Resume View Table Functions */

/* EXPERIENCE  */
function fillExperienceTable(resume){
	for (i=0; i<resume.experience.length; i++)
	{
		var job = resume.experience[i];
		/* appending html - */
		$('#workExp').append("<div class='workInfo resInfo'>"+
								"<table border=1>"+
									"<tr><td class='context'>EMPLOYER</td><td id='organization" + i + "'class='hover'></td></tr>"+
									"<tr><td class='context'>LOCATION</td><td id='location" + i +"'class='hover'></td></tr>"+
									"<tr><td class='context'>POSITION</td><td id='role" + i +"'class='hover'></td></tr>"+
									"<tr><td class='context'>PROJECT</td><td id='project" + i +"'class='hover'></td></tr>"+
									"<tr><td class='context'>START DATE</td><td id='start_date" + i +"'class='hover'></td></tr>"+
									"<tr><td class='context'>END DATE</td><td id='end_date" + i +"'class='hover'></td></tr>"+
									"<tr><td class='context'>RESPONSIBILITIES</td><td id='responsibilities" + i +"'class='hover'></td></tr>"+
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

	} 
}
/* END EXPERIENCE */


/* Education */
function fillEducationTable(resume){
	for (i=0; i<resume.schools.length; i++){
		
		var school = resume.schools[i];

		$('#education').append("<div class='educationInfo resInfo'>"+
					"<table border='1'>"+
						"<tr><td class='context'>SCHOOL</td><td id='school" + i + "' class='hover'></td></tr>"+
						"<tr><td class='context'>MAJOR</td><td id='major" + i +   "' class='hover'></td></tr>"+
						"<tr><td class='context'>MINOR</td><td id='minor" + i +   "' class='hover'></td></tr>"+
						"<tr><td class='context'>DEGREE</td><td id='degree" + i + "' class='hover'></td></tr>"+
						"<tr><td class='context'>START</td><td id='start" + i +   "' class='hover'></td></tr>"+
						"<tr><td class='context'>END</td><td id='end" + i +       "' class='hover'></td></tr>"+
						"<tr><td class='context'>GPA</td><td id='gpa" + i +       "' class='hover'></td></tr>"+
						"</table></div>"); /* end education append html */


		$('#school' + i).html(school.name);
		$('#major' + i).html(school.major);
		$('#minor' + i).html(school.minor);
		$('#degree' + i).html(school.degree);
		$('#start' + i).html(school.start_month_year);	
		$('#end' + i).html(school.end_month_year);	
		$('#gpa' + i).html(school.gpa);	
		
	} 	
}
/* end Education */


/* Skills */
function fillSkillsTable(resume){
	

	for (i=0; i<resume.skill.length; i++){
		
		var skill = resume.skill[i];

		$('#skills').append("<div class='skillInfo resInfo '>"+
					"<table border='1'>"+
						"<tr><td class='context'>CATEGORY</td><td id='skill_category" + i + "'     class='hover'></td></tr>"+
						"<tr><td class='context'>SKILL TITLE</td><td id='skill_experience" + i +"' class='hover'></td></tr>"+
						"<tr><td class='context'>EXPERIENCE</td><td id='skill_title" + i +"'       class='hover'></td></tr></table></div>"); /* end education append html */
						


		$('#skill_category' + i).html(skill.category);
		$('#skill_title' + i).html(skill.title);
		$('#skill_experience' + i).html(skill.experience);

		
	}  
}
/* end skills */

/* Accomplishments */
function fillAccomplishmentsTable(resume){

	

	for (i=0; i<resume.accomplishments.length; i++){
		
		var accomplishment = resume.accomplishments[i];

		$('#accomplishments').append("<div class='skillInfo resInfo '>"+
					"<table border='1'>"+
						"<tr><td class='context'>ACCOMPLISHMENT</td><td id='accomplishment" + i + "'class='hover'></td></tr>"+
						"<tr><td class='context'>DESCRIPTION</td><td id='accomp_descrip" + i +"'    class='hover'></td></tr>"+
						"<tr><td class='context'>DATE</td><td id='date_accomp" + i +"'              class='hover'></td></tr></table></div>"); /* end education append html */
						


		$('#accomplishment' + i).html(accomplishment.title);
		$('#accomp_descrip' + i).html(accomplishment.description);
		$('#date_accomp' + i).html(accomplishment.month_year);

		
	}  /* end accomplishments */
}
