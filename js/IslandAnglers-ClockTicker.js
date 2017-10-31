

$('#clock').fitText(2.0);
	  
	function update() 
	{
	  var dt = new Date();
	  var h =  dt.getHours();
	  var _time = (h > 12) ? (' pm') : (' am');
	    
	  $('#clock').html(moment().format('MMMM D, YYYY h:mm.ss') + _time);
	}

	setInterval(update, 1000);