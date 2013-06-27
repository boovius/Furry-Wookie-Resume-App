
function getNewResume(){
	$.ajax('/api/resumes',{
		complete : function (response){	

			console.log(response);
			var resume = response.responseJSON[0];
			console.log(resume);
			return resume;
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

