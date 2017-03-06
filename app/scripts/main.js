// JavaScript Document
$(document).ready(function() {
	"use strict";
    $('#fullpage').fullpage({
        anchors:['p1', 'p2', 'p3', 'p4', 'p5'],
		sectionsColor: ['#e8e8f4', '#71D0A2', '#4BA3C3', '#947DD4', '#4760C2'],
		//Scrolling
		scrollHorizontally: true,
    });
});

// JS CODE TO CHANGE BUTTONS ON HOVER
// IMAGE 01
	var c01 = document.getElementById("01");
	var c02 = document.getElementById("02");
	var c03 = document.getElementById("03");
	var c04 = document.getElementById("04");
	var c05 = document.getElementById("05");
	var c06 = document.getElementById("06");
	var c07 = document.getElementById("07");
	var c08 = document.getElementById("08");
	var c09 = document.getElementById("09");
	var c10 = document.getElementById("10");
	var c11 = document.getElementById("11");
	var c12 = document.getElementById("12");
	var c13 = document.getElementById("13");

	c01.addEventListener("mouseover", f1a, false);
	c01.addEventListener("mouseout", f1b, false);
	c02.addEventListener("mouseover", f2a, false);
	c02.addEventListener("mouseout", f2b, false);
	c03.addEventListener("mouseover", f3a, false);
	c03.addEventListener("mouseout", f3b, false);
	c04.addEventListener("mouseover", f4a, false);
	c04.addEventListener("mouseout", f4b, false);
	c05.addEventListener("mouseover", f5a, false);
	c05.addEventListener("mouseout", f5b, false);
	c06.addEventListener("mouseover", f6a, false);
	c06.addEventListener("mouseout", f6b, false);
	c07.addEventListener("mouseover", f7a, false);
	c07.addEventListener("mouseout", f7b, false);
	c08.addEventListener("mouseover", f8a, false);
	c08.addEventListener("mouseout", f8b, false);
	c09.addEventListener("mouseover", f9a, false);
	c09.addEventListener("mouseout", f9b, false);
	c10.addEventListener("mouseover", f10a, false);
	c10.addEventListener("mouseout", f10b, false);
	c11.addEventListener("mouseover", f11a, false);
	c11.addEventListener("mouseout", f11b, false);
	c12.addEventListener("mouseover", f12a, false);
	c12.addEventListener("mouseout", f12b, false);
	c13.addEventListener("mouseover", f13a, false);
	c13.addEventListener("mouseout", f13b, false);

//Image O1
	function f1a(){
		"use strict";
		var c01 = document.getElementById("works");
		c01.setAttribute("style", "background:url(images/work/01.jpg);background-size:cover;");
	}

	function f1b(){
		"use strict";
		var c01 = document.getElementById("works");
		c01.setAttribute("style", "background-color:#947dd4;");
	}
//Image O2
	function f2a(){
		"use strict";
		var c02 = document.getElementById("works");
		c02.setAttribute("style", "background:url(images/work/02.jpg);background-size:cover;");
	}

	function f2b(){
		"use strict";
		var c02 = document.getElementById("works");
		c02.setAttribute("style", "background-color:#947dd4;");
	}
//Image O3
	function f3a(){
		"use strict";
		var c03 = document.getElementById("works");
		c03.setAttribute("style", "background:url(images/work/03.jpg);background-size:cover;");
	}

	function f3b(){
		"use strict";
		var c03 = document.getElementById("works");
		c03.setAttribute("style", "background-color:#947dd4;");
	}
//Image O4
	function f4a(){
		"use strict";
		var c04 = document.getElementById("works");
		c04.setAttribute("style", "background:url(images/work/04.jpg);background-size:cover;");
	}

	function f4b(){
		"use strict";
		var c04 = document.getElementById("works");
		c04.setAttribute("style", "background-color:#947dd4;");
	}
//Image O5
	function f5a(){
		"use strict";
		var c05 = document.getElementById("works");
		c05.setAttribute("style", "background:url(images/work/05.jpg);background-size:cover;");
	}

	function f5b(){
		"use strict";
		var c05 = document.getElementById("works");
		c05.setAttribute("style", "background-color:#947dd4;");
	}
//Image O6
	function f6a(){
		"use strict";
		var c06 = document.getElementById("works");
		c06.setAttribute("style", "background:url(images/work/06.jpg);background-size:cover;");
	}

	function f6b(){
		"use strict";
		var c06 = document.getElementById("works");
		c06.setAttribute("style", "background-color:#947dd4;");
	}
//Image O7
	function f7a(){
		"use strict";
		var c07 = document.getElementById("works");
		c07.setAttribute("style", "background:url(images/work/07.jpg);background-size:cover;");
	}

	function f7b(){
		"use strict";
		var c07 = document.getElementById("works");
		c07.setAttribute("style", "background-color:#947dd4;");
	}
//Image O8
	function f8a(){
		"use strict";
		var c08 = document.getElementById("works");
		c08.setAttribute("style", "background:url(images/work/08.jpg);background-size:cover;");
	}

	function f8b(){
		"use strict";
		var c08 = document.getElementById("works");
		c08.setAttribute("style", "background-color:#947dd4;");
	}
//Image O9
	function f9a(){
		"use strict";
		var c09 = document.getElementById("works");
		c09.setAttribute("style", "background:url(images/work/09.jpg);background-size:cover;");
	}

	function f9b(){
		"use strict";
		var c09 = document.getElementById("works");
		c09.setAttribute("style", "background-color:#947dd4;");
	}
//Image 1O
	function f10a(){
		"use strict";
		var c10 = document.getElementById("works");
		c10.setAttribute("style", "background:url(images/work/10.png);background-size:cover;");
	}

	function f10b(){
		"use strict";
		var c10 = document.getElementById("works");
		c10.setAttribute("style", "background-color:#947dd4;");
	}
//Image 11
	function f11a(){
		"use strict";
		var c11 = document.getElementById("works");
		c11.setAttribute("style", "background:url(images/work/11.jpg);background-size:cover;");
	}

	function f11b(){
		"use strict";
		var c11 = document.getElementById("works");
		c11.setAttribute("style", "background-color:#947dd4;");
	}
//Image 12
	function f12a(){
		"use strict";
		var c12 = document.getElementById("works");
		c12.setAttribute("style", "background:url(images/work/12.jpg);background-size:cover;");
	}

	function f12b(){
		"use strict";
		var c12 = document.getElementById("works");
		c12.setAttribute("style", "background-color:#947dd4;");
	}
//Image 13
	function f13a(){
		"use strict";
		var c13 = document.getElementById("works");
		c13.setAttribute("style", "background:url(images/work/13.jpg);background-size:cover;");
	}

	function f13b(){
		"use strict";
		var c13 = document.getElementById("works");
		c13.setAttribute("style", "background-color:#947dd4;");
	}
