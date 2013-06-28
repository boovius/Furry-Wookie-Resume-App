
function getNewResume(callback){
	$.ajax('/api/resumes',{
		complete : function(response) {
			callback(response.responseJSON[0]);
		} /* end annoymous function */
	}); /*end ajax request*/ 	
}

function getSpecificResume(id){
	$.ajax('/api/resumes' + id,{
		complete : function (response){	

			clog(response);
			var resume = response.responseJSON;
			clog(resume);
		}
	});

	return resume;
}

