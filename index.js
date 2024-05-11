$.get( "https://dajunctic.github.io/assets/data/blog.csv", function(CSVdata) {
					var data = $.csv.toObjects(CSVdata);

					console.log(data);
					
					for (let i = 0; i < data.length; i ++) {
						var title = data[i].title;
						var date = data[i].date;
						var url = data[i].url;

						$(".card-content .card").append(
							$("<div>").addClass("card")
							//.append(
							//	$("<div>").addClass("card-image").append(
							//		$("<img>").attr({"src": "https://dajunctic.github.io/assets/images/HackMD.jpg"}),
							//		$("<div>").addClass("card-info").append(
							//			$("<h3>").text(title),
							//			$("<p>").text(url),
							//		)
							//	)
							//)
						);
					}
				});