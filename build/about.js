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
	console.log('about_pagte');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThiY2Q0ZWZhYjY0NDIwY2Y1MjMiLCJ3ZWJwYWNrOi8vLy4vYWJvdXRfcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUxLmpzIiwid2VicGFjazovLy8uL21vZHVsZTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGVBQWM7O0FBRWQ7QUFDQSxJQUFHO0FBQ0gsRUFBQyIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYThiY2Q0ZWZhYjY0NDIwY2Y1MjNcbiAqKi8iLCJcclxucmVxdWlyZSgnLi9tb2R1bGUxLmpzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlMi5qcycpO1xyXG5jb25zb2xlLmxvZygnYWJvdXRfcGFndGUnKTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fib3V0X3BhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcclxuXHJcbiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbyA9IHt9O1xyXG4gICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbztcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZTEuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgJChcIkZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgdmFyIHBvc3REYXRhID0gJCgnZm9ybScpLnNlcmlhbGl6ZU9iamVjdCgpO1xyXG4gICAgICAgICAgdmFyIGZvcm1VUkwgPSAkKHRoaXMpLmF0dHIoXCJhY3Rpb25cIik7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcblxyXG4gICAgICAgICAgLy8gJC5hamF4KHtcclxuICAgICAgICAgIC8vICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgIC8vICAgICB1cmw6IGZvcm1VUkwsXHJcbiAgICAgICAgICAvLyAgICAgZGF0YTogcG9zdERhdGEsXHJcbiAgICAgICAgICAvLyAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgLy8gICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICAgIC8vICAgICAgICAgdmFyIFNlc3Npb25SZWNvcmRzID0gSlNPTi5wYXJzZShtc2cuZCk7XHJcbiAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgIC8vICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkIGR1cmluZyBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59KTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21vZHVsZTIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==