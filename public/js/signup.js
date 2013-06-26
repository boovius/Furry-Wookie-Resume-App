$(document).ready(function(){

	$('.employer_block_add').click(function(){
		var html = $('.employer_block').first().clone();
		html.css( {display: 'none'});
		$(this).before(html);
		html.fadeIn(1000);
		html.slideDown(1400);
		html.find('input').val('');
		return false;
	});

	
	$('.education_block_add').click(function(){
		var html = $('.education_block').first().clone();
		html.css( {display: 'none'});
		$(this).before(html);
		html.fadeIn(1000);
		html.slideDown(1400);
		html.find('input').val('');
		return false;
	});

	$('.skill_block_add').click(function(){
		var html = $('.skill_block').first().clone();
		html.css( {display: 'none'});
		$(this).before(html);
		html.fadeIn(1000);
		html.slideDown(1400);
		html.find('input').val('');
		return false;
	});

	$('.accomplishment_block_add').click(function(){
		var html = $('.accomplishment_block').first().clone();
		html.css( {display: 'none'});
		$(this).before(html);
		html.fadeIn(1000);
		html.slideDown(1400);
		html.find('input').val('');
		return false;
	});



	$('#user-data-entry').submit(function(){
		var userData = {};
		userData['first_name'] = $('#first_name').val();
		userData['last_name'] = $('#last_name').val();
		userData['email'] = $('#email').val();
		userData['phone'] = $('#phone').val();
		userData['street'] = $('#street').val();
		userData['city'] = $('#city').val();
		userData['state'] = $('#state').val();
		userData['zipcode'] = $('#zipcode').val();
		userData['schools'] = [];
		userData['employers'] = [];
		userData['skills'] = [];
		userData['accomplishments'] = [];

		var employer_blocks = $('.employer_block');
		employer_blocks.each(function(index, employer){
			userData.employers.push({
				'employer' : $(employer).find('input.employer').val(),
				'location' : $(employer).find('input.location').val(),
				'position' : $(employer).find('input.position').val(),
				'project' : $(employer).find('input.project').val(),
				'start' : $(employer).find('input.start').val(),
				'end' : $(employer).find('input.end').val(),
				'responsibilities' : $(employer).find('input.responsibilities').val()
			});
		});
		console.log(userData.employers);


		var education_blocks = $('.education_block');
		education_blocks.each(function(index, this_school){
			userData.schools.push({
				'school' : $(this_school).find('input.school').val(),
				'degree' : $(this_school).find('input.degree').val(),
				'major'  : $(this_school).find('input.major').val(),
				'minor'  : $(this_school).find('input.minor').val(),
				'start'  : $(this_school).find('input.start_date_ed').val(),
				'end'    : $(this_school).find('input.end_date_ed').val(),
				'gpa'    : $(this_school).find('input.gpa').val()
			});
		});

		var skills_blocks = $('.skill_block');
		education_blocks.each(function(index, skill){
			userData.skills.push({
				'skill' : $(skill).find('input.skill').val(),
				'category' : $(skill).find('input.category').val(),
				'yrs_skill_exp'  : $(skill).find('input.yrs_skill_exp').val()
			});
		});
	
		console.log(userData);


		return false;
	}); /*end submit */
	

});/* end ready */