/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(1);
	__webpack_require__(2);
	
	__webpack_require__(3)
	console.log('home_page');


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	
	$.fn.serializeObject = function() {
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	
	
	
	$( document ).ready(function() {
	
	  $("Form").submit(function(event) {
	
	          var postData = $('form').serializeObject();
	          var formURL = $(this).attr("action");
	
	          console.log(postData)
	
	          // $.ajax({
	          //     type: "post",
	          //     url: formURL,
	          //     data: postData,
	          //     contentType: "application/json; charset=utf-8",
	          //     dataType: "json",
	          //     success: function(msg) {
	          //         var SessionRecords = JSON.parse(msg.d);
	          //     },
	          //     error: function() {
	          //         alert("An error has occurred during processing your request.");
	          //     }
	          // });
	
	      event.preventDefault();
	  });
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <title></title>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css\" />\r\n</head>\r\n\r\n<body class=\"row\">\r\n    <!-- <header class=\"col l12\">\r\n        <div class=\"col l3\" id=\"logo\">\r\n\r\n        </div>\r\n        <div class=\"col l9\" id=\"menu\">\r\n          <div class=\"navbar\">\r\n            <a href=\"index.html\">Home</a>\r\n            <a href=\"about.html\">About</a>\r\n            <a href=\"contact.html\">Contact</a>\r\n          </div>\r\n        </div>\r\n    </header> -->\r\n<h1>hello world</h1>\r\n    <!-- <form class=\"col l12\" action=\"index.html\" method=\"post\">\r\n        <div class=\"container col l4 offset-l4 form-gray\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col l12\">\r\n                    <input id=\"first_name\" name=\"first_name\"  type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">First Name</label>\r\n                </div>\r\n                <div class=\"input-field col l12\">\r\n                    <input id=\"last_name\" name=\"last_name\" type=\"text\" class=\"validate\">\r\n                    <label for=\"last_name\">Last Name</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col l12 \">\r\n                    <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\">\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col l12\">\r\n                    <input id=\"email\" name=\"email\" type=\"email\" class=\"validate\">\r\n                    <label for=\"email\">Email</label>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn waves-effect waves-light rigth\" type=\"submit\" name=\"action\">Submit\r\n                <i class=\"material-icons right\"></i>\r\n            </button>\r\n        </div>\r\n    </form> -->\r\n\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js\"></script>\r\n    <!-- <script src=\"/assets/js/shared.js\" charset=\"utf-8\"></script> -->\r\n    <script src=\"../build/about.js\" charset=\"utf-8\"></script>\r\n</body>\r\n\r\n</html>\r\n";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGIwOTdhNDc0NGE1N2NmNThkMTI/OGJjZCoiLCJ3ZWJwYWNrOi8vLy4vaG9tZV9wYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZTEuanM/NzgxZSoiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlMi5qcz9jZDlkKiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvamxvcGV6L0Rlc2t0b3Avd2VicGFja3Rlc3QvcHVibGljL2Fib3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGVBQWM7O0FBRWQ7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7Ozs7OztBQzVCRCxtakYiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNGIwOTdhNDc0NGE1N2NmNThkMTJcbiAqKi8iLCJcbnJlcXVpcmUoJy4vbW9kdWxlMS5qcycpO1xucmVxdWlyZSgnLi9tb2R1bGUyLmpzJyk7XG5cbnJlcXVpcmUoJy4uLy4uL3B1YmxpYy9hYm91dC5odG1sJylcbmNvbnNvbGUubG9nKCdob21lX3BhZ2UnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ob21lX3BhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJcclxuXHJcbiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbyA9IHt9O1xyXG4gICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbztcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZTEuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgJChcIkZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgdmFyIHBvc3REYXRhID0gJCgnZm9ybScpLnNlcmlhbGl6ZU9iamVjdCgpO1xyXG4gICAgICAgICAgdmFyIGZvcm1VUkwgPSAkKHRoaXMpLmF0dHIoXCJhY3Rpb25cIik7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcblxyXG4gICAgICAgICAgLy8gJC5hamF4KHtcclxuICAgICAgICAgIC8vICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgIC8vICAgICB1cmw6IGZvcm1VUkwsXHJcbiAgICAgICAgICAvLyAgICAgZGF0YTogcG9zdERhdGEsXHJcbiAgICAgICAgICAvLyAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgLy8gICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgdmFyIFNlc3Npb25SZWNvcmRzID0gSlNPTi5wYXJzZShtc2cuZCk7XHJcbiAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgIC8vICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkIGR1cmluZyBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59KTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZTIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sPlxcclxcblxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCI+XFxyXFxuICAgIDx0aXRsZT48L3RpdGxlPlxcclxcbiAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTcuNi9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1xcXCIgLz5cXHJcXG48L2hlYWQ+XFxyXFxuXFxyXFxuPGJvZHkgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDwhLS0gPGhlYWRlciBjbGFzcz1cXFwiY29sIGwxMlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgbDNcXFwiIGlkPVxcXCJsb2dvXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sIGw5XFxcIiBpZD1cXFwibWVudVxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+SG9tZTwvYT5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJhYm91dC5odG1sXFxcIj5BYm91dDwvYT5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJjb250YWN0Lmh0bWxcXFwiPkNvbnRhY3Q8L2E+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvaGVhZGVyPiAtLT5cXHJcXG48aDE+aGVsbG8gd29ybGQ8L2gxPlxcclxcbiAgICA8IS0tIDxmb3JtIGNsYXNzPVxcXCJjb2wgbDEyXFxcIiBhY3Rpb249XFxcImluZGV4Lmh0bWxcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sIGw0IG9mZnNldC1sNCBmb3JtLWdyYXlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkIGNvbCBsMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdF9uYW1lXFxcIiBuYW1lPVxcXCJmaXJzdF9uYW1lXFxcIiAgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInZhbGlkYXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0X25hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZmllbGQgY29sIGwxMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3RfbmFtZVxcXCIgbmFtZT1cXFwibGFzdF9uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwidmFsaWRhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdF9uYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBjb2wgbDEyIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJ2YWxpZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1maWVsZCBjb2wgbDEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcInZhbGlkYXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgcmlndGhcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgbmFtZT1cXFwiYWN0aW9uXFxcIj5TdWJtaXRcXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zIHJpZ2h0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb3JtPiAtLT5cXHJcXG5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8yLjEuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTcuNi9qcy9tYXRlcmlhbGl6ZS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcbiAgICA8IS0tIDxzY3JpcHQgc3JjPVxcXCIvYXNzZXRzL2pzL3NoYXJlZC5qc1xcXCIgY2hhcnNldD1cXFwidXRmLThcXFwiPjwvc2NyaXB0PiAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcIi4uL2J1aWxkL2Fib3V0LmpzXFxcIiBjaGFyc2V0PVxcXCJ1dGYtOFxcXCI+PC9zY3JpcHQ+XFxyXFxuPC9ib2R5PlxcclxcblxcclxcbjwvaHRtbD5cXHJcXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1VzZXJzL2psb3Blei9EZXNrdG9wL3dlYnBhY2t0ZXN0L3B1YmxpYy9hYm91dC5odG1sXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==