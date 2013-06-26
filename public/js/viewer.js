function hover_tag_add() {
	
	console.log('mouse hovered');	
	$(this).hover(function(){
		$('.hover').toggleClass('click_add');
	});
	$('.click_add').click(function(){
		console.log('clicked and hovered');
		$('#tagBox').append("<div class='tags'>" + $('#organization0').html() + "</div>");
	});
}

$(document).ready(function(){



	/*toggleClass('click_add')*/


/*	$('#workExp').click(function(){
		/*console.log('clicked!');*/


		/*$('#tagBox').append(
			$(this).find(
				$('.click_add'))

		var work_experiences = $('.workInfo');

		work_experiences.each(function(index, item){
			for (i=0; i<work_experiences.length; i++){
				

				$('#employer').click(function(){

				}	
			}
		});

	});*/


}); /* end doc ready */