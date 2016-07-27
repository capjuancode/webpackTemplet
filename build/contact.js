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
	console.log('contact_page');


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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThiY2Q0ZWZhYjY0NDIwY2Y1MjM/OTllYSIsIndlYnBhY2s6Ly8vLi9jb250YWN0X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlMS5qcz83ODFlIiwid2VicGFjazovLy8uL21vZHVsZTIuanM/Y2Q5ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsZUFBYzs7QUFFZDtBQUNBLElBQUc7QUFDSCxFQUFDIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE4YmNkNGVmYWI2NDQyMGNmNTIzXG4gKiovIiwiXHJcbnJlcXVpcmUoJy4vbW9kdWxlMS5qcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZTIuanMnKTtcclxuY29uc29sZS5sb2coJ2NvbnRhY3RfcGFnZScpO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGFjdF9wYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXHJcblxyXG4kLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG8gPSB7fTtcclxuICAgIHZhciBhID0gdGhpcy5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChvW3RoaXMubmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIW9bdGhpcy5uYW1lXS5wdXNoKSB7XHJcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG87XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tb2R1bGUxLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsIlxyXG5cclxuXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICQoXCJGb3JtXCIpLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgIHZhciBwb3N0RGF0YSA9ICQoJ2Zvcm0nKS5zZXJpYWxpemVPYmplY3QoKTtcclxuICAgICAgICAgIHZhciBmb3JtVVJMID0gJCh0aGlzKS5hdHRyKFwiYWN0aW9uXCIpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKVxyXG5cclxuICAgICAgICAgIC8vICQuYWpheCh7XHJcbiAgICAgICAgICAvLyAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAvLyAgICAgdXJsOiBmb3JtVVJMLFxyXG4gICAgICAgICAgLy8gICAgIGRhdGE6IHBvc3REYXRhLFxyXG4gICAgICAgICAgLy8gICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24obXNnKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgIHZhciBTZXNzaW9uUmVjb3JkcyA9IEpTT04ucGFyc2UobXNnLmQpO1xyXG4gICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAvLyAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gICAgICAgICBhbGVydChcIkFuIGVycm9yIGhhcyBvY2N1cnJlZCBkdXJpbmcgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuXCIpO1xyXG4gICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufSk7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tb2R1bGUyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=