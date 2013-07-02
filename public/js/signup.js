$(document).ready(function(){

	gpaSlider();

/* USER ADD BLOCKS TO FORM */

	$('.employer_block_add').click(function(){
		var html = $('.employer_block').first().clone();
		html.css( {display: 'none'});
		$(this).before(html);
		html.fadeIn(1000);
		html.slideDown(1400);
		html.find('input').val('');
		gpaSlider();
		return false;
	});

	$('.add_responsibility').click(function(){
		var html = $('.responsiblity_block').first().clone();
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
		html.find('span').html('0');
		gpaSlider();
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


/* SUBMITTING DATA */

	$('#user-data-entry').submit(function(){
		var userData = {};
		userData['first_name'] = $('#first_name').val();
		userData['last_name'] = $('#last_name').val();
		userData['contact_info'] = {};
		userData['contact_info']['email'] = $('#email').val();
		userData['contact_info']['phone'] = $('#phone').val();
		userData['contact_info']['street_address'] = {};
		userData['contact_info']['street_address']['street'] = $('#street').val();
		userData['contact_info']['street_address']['city'] = $('#city').val();
		userData['contact_info']['street_address']['state'] = $('#state').val();
		userData['contact_info']['street_address']['zip_code'] = $('#zipcode').val();
		userData['schools'] = [];
		userData['experience'] = [];
		userData['skill'] = [];
		userData['accomplishments'] = [];

		/*reading input from employer blocks*/
		var employer_blocks = $('.employer_block');
		employer_blocks.each(function(index, employer){
			
			/*start date formatting */
			var startDate = $(employer).find('input.start_date_ex').val();
			var formattedStart = startDate.slice(5,7)+startDate.slice(2,4);			

			/*end date formatting*/
			var endDate = $(employer).find('input.end_date_ex').val();
			var formattedEnd = endDate.slice(5,7)+endDate.slice(2,4);

			/*parsing through responsiblities array*/
			resps = [];
			$(employer).find('input.responsibilities').each(function(index1, resp){
				resps.push($(resp).val());
			});

			userData.employers.push({
				'employer' : $(employer).find('input.employer').val(),
				'location' : $(employer).find('input.location').val(),
				'position' : $(employer).find('input.position').val(),
				'project' : $(employer).find('input.project').val(),
				'start' : formattedStart,
				'end' : formattedEnd,
				'responsibilities' : resps
			});
		});
		console.log(userData.employers);

		/*reading input from education blocks*/
		var education_blocks = $('.education_block');
		education_blocks.each(function(index, this_school){

			var startDate      = $(this_school).find('input.start_date_ed').val();
			var formattedStart = startDate.slice(5,7)+startDate.slice(2,4);			

			var endDate      = $(this_school).find('input.end_date_ed').val();
			var formattedEnd = endDate.slice(5,7)+endDate.slice(2,4);

			userData.schools.push({
				'school' : $(this_school).find('input.school').val(),
				'degree' : $(this_school).find('input.degree').val(),
				'major'  : $(this_school).find('input.major').val(),
				'minor'  : $(this_school).find('input.minor').val(),
				'start'  : formattedStart,
				'end'    : formattedEnd,
				'gpa'    : $(this_school).find('input.gpa').val()
			});
		});

		/*reading input from skills blocks*/
		var skills_blocks = $('.skill_block');
		skills_blocks.each(function(index, skill){
			userData.skills.push({
				'skill' 		 : $(skill).find('input.skill').val(),
				'category' 		 : $(skill).find('input.category').val(),
				'yrs_skill_exp'  : $(skill).find('input.yrs_skill_exp').val()
			});
		});


		/*reading input from accomplishments blocks*/
		var accomplishments_blocks = $('.accomplishment_block');
		accomplishments_blocks.each(function(index, accomplishment){

			var date = '';
			var formattedDate = date.slice(5,7) + date.slice(2,4);	

			userData.accomplishments.push({
				'accomplishment' : $(accomplishment).find('input.accomplishment').val(),
				'accomp_descrip' : $(accomplishment).find('input.accomp_descrip').val(),
				'date_accomp'  : $(accomplishment).find('input.date_accomp').val()
			});
		});
	
/* Logging out Submitted User Data Input */
		console.log(userData);

/* Submitting to Server Submitted User Data Input */
		var type = 'POST';
		var path = 'api/resumes'
		var JSON_data = JSON.stringify( { 'resume' : userData});

		$.ajax({
			type : type,
			url  : 'api/resumes',
			data : JSON_data
		}).done(function(){
			alert('Post Submitted');
		});


		return false;
	}); /*end submit */
	

});/* end ready */


/*  !!!  - - -  FUNCTIONS  - - -  !!! */



/* GPA SLIDER */
function gpaSlider() {
	$('.gpa').off('change').on('change', function(){
		console.log('slider change function executed');
		$(this).siblings('span').html(this.value);
	});
}

