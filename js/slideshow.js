
$(document).ready(function() {
	function findNumSlides($o) {
		return $o.find(".more-container .more-active").length +
			   $o.find(".more-container .more-inactive").length;
	}
	function findElementIndex($o) {
		return $o.prevAll(".more-inactive").length +
			   $o.prevAll(".more-active").length;
	}
	function makeAllMoreInactive($o) {
		$o.find(".more-container *").each(function(i) {
			if ($(this).attr('class') == 'more-active') {
				$(this).attr('class', 'more-inactive');
			}
		});
	}
	function slideshowClick($clickedOne) {
		$container = $clickedOne.parents(".description-text");
		numSlides = findNumSlides($container);
		numElement = findElementIndex($clickedOne);
		
		$container.parents(".description").find(".description-text").each(function(i) {
			$each = $(this);
			makeAllMoreInactive($each);
			$($each.find(".more-container *")[numElement]).attr('class','more-active');
		});

		$images = $container.parents(".slideshow-container").find(".slideshow img");
		$images.hide();
		$($images[numElement]).show();

		$descriptions = $container.parents(".description");
		$descriptions = $descriptions.find(".description-text");
		$descriptions.removeClass('active');
		$($descriptions[numElement]).addClass('active');
	}
	$(".more-active").click(function() {
		slideshowClick($(this));
	});
	$(".more-inactive").click(function() {
		slideshowClick($(this));
	});
});

