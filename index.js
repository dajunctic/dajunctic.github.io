		function getPageList(totalPage, page, maxLength) {
				function range(start, end){
					return Array.from(Array(end - from + 1), (_, i) => i + start);
				}
				
				var sideWidth = maxLength < 9 ? 1 : 2;
				var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
				var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
				
				if (totalPage <= maxLength) {
					return range(1, totalPages);
				}
				
				if (page <= maxLength - sideWidth - 1 - rightWidth) {
					return range(1, maxLength - sideWidth - 1).concat(0, range(totalPage - sideWidth + 1, totalPage));
					
				}
				
				if (page >= totalPage - sideWidth - 1 - rightWidth) {
					return range(1, sideWidth).concat(0, range(totalPage - sideWidth - 1 - rightWidth - leftWidth, totalPage));
				}
				
				return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPage - sideWidth + 1, totalPage));
			}
			
			$(function(){
				var numberOfItems = $(".card-content .card").length;
				var limitPerPage = 4; // Card per Page
				var totalPages = Math.ceil(numberOfItems / limitPerPage);
				
				var paginationSize = 7; // page element visible in the pagination
				
				var currentPage;
				
				function showPage(whichPage){
					if (whichPage < 1 || whichPage > totalPages) return false;
					
					currentPage = whichPage;
					
					$(".card-content card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
					
					$(".pagination li").slice(1, -1).remove();
					
					getPageList(totalPages, currentPage, paginationSize).forEach(item => {
						$("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
						.toggleClass("active", item===currentPage).append($("<a>").addClass("page-link")
						.attr({href: "#"}).text(item || "...")).insertBefore(".next-page");
					});
					
					$(".previous-page").toggleClass("disable", currentPage === 1);
					$(".next-page").toggleClass("disable", currentPage === totalPages);
					return true;
				}
				
				$(".pagination").append(
					$("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link")
					.attr({href:""}).text("Prev")),
					$("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link")
					.attr({href:""}).text("Next")),
				);
				
				$(".card-content").show();
				showPage(1);
				
				$("document").on("click", ".pagination li.current-page:not(.active)", function(){
					return showPage(+$(this).text);
				});
			});