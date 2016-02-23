$(document).ready(function() {

  var files;
	$("input[type=file]").on("change", function(event) {
		files = event.target.files;
	});
	$("form").on("submit", function(event) {
    event.stopPropagation();
		event.preventDefault();

    var file = files[0];
		var data = new FormData();
		data.append("inputFile", file);

		$.ajax({
			    url: window.location.origin + '/fileanalyze/',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					error: function(jqXHR, textStatus, errorThrown) {
						$("#results").html("There was an error: " + textStatus);
					},
					success: function(data) {
            $("#results").html("<p>"+data.filename + " is " + data.fileSize + " bytes</p>");
            $("#jsonResult").html("<code>{filename: "+data.filename+", fileSize: "+data.fileSize+", encoding: "+data.encoding+", mimetype: "+data.mimetype+"}</code>");
					}
		});
	});
});
