$(document).ready(function() {
	$( "#tabs" ).tabs();

	$.getJSON( "timeline.json", function( data ) {
		 for(var i=0; i<data.timeline.length; i++) {
			$('#timeline').prepend('<h3>'+ data.timeline[i].author + ": "+data.timeline[i].title +'</h3>'+'<div><p><img style="height:50px; width:50px;" src="'+data.timeline[i].avatar+'"></img>'+data.timeline[i].content+'</p><br></div>');
		} ;
	});
		$.getJSON( "myline.json", function( data ) {
		 for(var i=0; i<data.myline.length; i++) {
			$('#myline').prepend('<h3>'+ data.myline[i].author + ": "+data.myline[i].title +'</h3>'+'<div><p><img style="height:50px; width:50px;" src="'+data.myline[i].avatar+'"></img>'+data.myline[i].content+'</p><br></div>');
		} ;
	});
		$.getJSON( "update.json", function( data ) {
			if(data.update[0] != null){
					$('#update').removeClass( "hidden" ).addClass("visible");				
			}
			$("#eq").click(function() {
				for(var i=0; i<data.update.length; i++) {
					$('#timeline').prepend('<h3>'+ data.update[i].author + ": "+data.update[i].title +'</h3>'+'<div><p><img style="height:50px; width:50px;" src="'+data.update[i].avatar+'"></img>'+data.update[i].content+'</p><br></div>');
				
				} ;
				$('#update').removeClass( "visible" ).addClass("hidden");
			});
		});
});


