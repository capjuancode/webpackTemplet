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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThiY2Q0ZWZhYjY0NDIwY2Y1MjM/OTllYSoiLCJ3ZWJwYWNrOi8vLy4vaG9tZV9wYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZTEuanM/NzgxZSoiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlMi5qcz9jZDlkKiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsZUFBYzs7QUFFZDtBQUNBLElBQUc7QUFDSCxFQUFDIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE4YmNkNGVmYWI2NDQyMGNmNTIzXG4gKiovIiwiXG5yZXF1aXJlKCcuL21vZHVsZTEuanMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlMi5qcycpO1xuY29uc29sZS5sb2coJ2hvbWVfcGFnZScpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2hvbWVfcGFnZS5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIlxyXG5cclxuJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBvID0ge307XHJcbiAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCAnJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvO1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlMS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJcclxuXHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKFwiRm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICB2YXIgcG9zdERhdGEgPSAkKCdmb3JtJykuc2VyaWFsaXplT2JqZWN0KCk7XHJcbiAgICAgICAgICB2YXIgZm9ybVVSTCA9ICQodGhpcykuYXR0cihcImFjdGlvblwiKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuXHJcbiAgICAgICAgICAvLyAkLmFqYXgoe1xyXG4gICAgICAgICAgLy8gICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgLy8gICAgIHVybDogZm9ybVVSTCxcclxuICAgICAgICAgIC8vICAgICBkYXRhOiBwb3N0RGF0YSxcclxuICAgICAgICAgIC8vICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAvLyAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZykge1xyXG4gICAgICAgICAgLy8gICAgICAgICB2YXIgU2Vzc2lvblJlY29yZHMgPSBKU09OLnBhcnNlKG1zZy5kKTtcclxuICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgLy8gICAgIGVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQgZHVyaW5nIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbW9kdWxlMi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9