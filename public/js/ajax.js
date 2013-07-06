
function getNewResume(callback){
	$.ajax('/',{
		complete : function(response) {
			callback(response.responseJSON[0]);
		} /* end annoymous function */
	}); /*end ajax request*/ 	
}

function getSpecificResume(id, callback){
	$.ajax('/' + id,{
		complete : function (response){	
			callback(response.responseJSON);
		}
	});
}


//function getNextResume(id, callback){
//	$.ajax('/api/resumes', {
//		complete : function (response){	
//			for (i = 0; i < response.responseJSON.length; i++{
//				if (response.responseJSON[i].id === id){
//					callback(response.responseJSON[i+1]);
//				}/* end if */
//			}/* end for loop */
//		} /* end annoymous complete function */
//	}); /* end ajax get request */
//} /* end getNextResume*/ 



