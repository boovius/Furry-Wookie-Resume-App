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
		userData['email'] = $('#email').val();
		userData['password'] = $('#password').val();

		userData['first_name'] = $('#first_name').val();
		userData['last_name'] = $('#last_name').val();
		userData['phone'] = $('#phone').val();
		
		userData['street'] = $('#street').val();
		userData['city'] = $('#city').val();
		userData['state'] = $('#state').val();
		userData['zip_code'] = $('#zipcode').val();
		userData['twitter'] = $('#twitter').val();
		userData['linkedin'] = $('#linkedin').val();
		userData['website'] = $('#personal_site').val();

		userData['employers'] = [];
		userData['schools'] = [];
		userData['skills'] = [];
		userData['accomplishments'] = [];

		/*reading input from employer blocks*/
		var employer_blocks = $('.employer_block');
		employer_blocks.each(function(index, this_employer){
			
			/*start date formatting */
			var startDate = $(this_employer).find('input.start_date_ex').val();
			var formattedStart = startDate.slice(5,7)+startDate.slice(2,4);			

			/*end date formatting*/
			var endDate = $(this_employer).find('input.end_date_ex').val();
			var formattedEnd = endDate.slice(5,7)+endDate.slice(2,4);

			/*parsing through responsiblities array*/
			resps = [];
			$(this_employer).find('input.responsibilities').each(function(index1, resp){
				resps.push($(resp).val());
			});

			userData.employers.push({
				'organization' 	   : $(this_employer).find('input.organization').val(),
				'job_location' 	   : $(this_employer).find('input.location').val(),
				'project' 		   : $(this_employer).find('input.project').val(),
				'role' 		       : $(this_employer).find('input.position').val(),
				'start_month_year' : formattedStart,
				'end_month_year'   : formattedEnd,
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
				'school_name' 		: $(this_school).find('input.school').val(),
				'degree'      		: $(this_school).find('input.degree').val(),
				'major'  	  		: $(this_school).find('input.major').val(),
				'minor'  	  		: $(this_school).find('input.minor').val(),
				'start_month_year'  : formattedStart,
				'end_month_year'    : formattedEnd,
				'gpa'         		: $(this_school).find('input.gpa').val()
			});
		});

		/*reading input from skills blocks*/
		var skills_blocks = $('.skill_block');
		skills_blocks.each(function(index, this_skill){
			userData.skills.push({
				'skill_title' 		 : $(this_skill).find('input.skill').val(),
				'skill_category'     : $(this_skill).find('input.category').val(),
				'yrs_skill_exp'      : $(this_skill).find('input.yrs_skill_exp').val()
			});
		});


		/*reading input from accomplishments blocks*/
		var accomplishments_blocks = $('.accomplishment_block');
		accomplishments_blocks.each(function(index, this_accomplishment){

			var date = '';
			var formattedDate = date.slice(5,7) + date.slice(2,4);	

			userData.accomplishments.push({
				'accomplishment_name' : $(this_accomplishment).find('input.accomplishment').val(),
				'accomp_descrip' 	  : $(this_accomplishment).find('input.accomp_descrip').val(),
				'accomp_date'    	  : formattedDate
			});
		});
	
/* Logging out Submitted User Data Input */
		console.log(userData);

/* Submitting to Server Submitted User Data Input */
		var JSON_data = JSON.stringify( { 'resume' : userData});

		$.ajax({
			type : 'POST',
			url  : '/',
			success: function(data){
				var x = (JSON.parse(data).message);
				alert('Post for id#: ' + x + ' - Submitted!');
			},
			data : JSON_data
		}); 


		return false;
	}); /* end submit click */
	

});/* end ready */


/*  !!!  - - -  FUNCTIONS  - - -  !!! */



/* GPA SLIDER */
function gpaSlider() {
	$('.gpa').off('change').on('change', function(){
		console.log('slider change function executed');
		$(this).siblings('span').html(this.value);
	});
}

