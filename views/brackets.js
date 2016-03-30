//brackets.js
var exports = module.exports;
var express = require('express');
var router = express.Router();


$('#addBracket').click(function(){
	console.log('AddBracket button clicked');
	$.ajax({url: 'test1', success:function(res){
		console.log('server response is', res);
	}});
});
