$(document).ready(function() {
	// jQuery Cycle
	$('#myslides')
	.before('<div id="nav">')
	.cycle({
		fx: 'fade', // choose your transition type
		speedIn:  600, 
		speedOut: 600,
		timeout: 8000, // specifies how many milliseconds will elapse between the start of each transition
		pause: 0, // so that pauses when user hovers over a slide
		pager:  '#nav', // instructs the plugin to create navigation elements, one for each slide, and add them to the container identified by the value of the pager option
		cleartypeNoBg: true  // clear background for ie
	}); // every child element of the container becomes a slide 	
	// end jQuery Cycle	
		
	ddsmoothmenu.init({
		mainmenuid: "smoothmenu1", //menu DIV id
		orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
		classname: 'ddsmoothmenu', //class added to menu's outer DIV
		//customtheme: ["#1c5a80", "#18374a"],
		contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
	});
	
	// FANCYBOX
	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a.inline").fancybox({
		'hideOnContentClick': true
	});
	
	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});//end FancyBox
	
	
	// JAC
	// options
	/*var o = {
	enableMouse: false,
	childSizeFixed:false
	};
	
	// Setup galleries
	$(".additional").jac(o);
	//end JAC*/
	

	// jQuery Carousel
	$("div.additional").carousel({
			direction: "horizontal",
			pagination: false,
			dispItems: 6,
			loop: false,
			autoSlide: false, 
			autoSlideInterval: null,
			delayAutoSlide: null,
			effect: null,
			animSpeed: null
	});
	$("div.additional2").carousel({
			direction: "horizontal",
			pagination: false,
			dispItems: 5,
			loop: false,
			autoSlide: false, 
			autoSlideInterval: null,
			delayAutoSlide: null,
			effect: null,
			animSpeed: null
	});//end jQuery Carousel
	
	
	//tabs    **tabs MUST come AFTER the Carousel above or WILL NOT work properly due to hiding**
	var tabContainers = $('div.tabs > div');
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide().filter(this.hash).show();
        
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        
        return false;
    }).filter(':first').click();
	
	var tabContainers2 = $('div.tabs2 > div');
    $('div.tabs2 ul.tabNavigation2 a').click(function () {
        tabContainers2.hide().filter(this.hash).show();
        
        $('div.tabs2 ul.tabNavigation2 a').removeClass('selected');
        $(this).addClass('selected');
        
        return false;
    }).filter(':first').click();
	
});
