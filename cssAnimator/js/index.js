  function runAnimation(selected) {
  	$('#object').removeClass().addClass(selected + ' animate').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  		$(this).removeClass();
  	});
  };

  function updateInstruct() {
  	var selected = $('#animationName').val();
  	$("#apply").html("&ltdiv id=&#34object&#34 class=&#34animate " + selected);
  	if ($('#reverse').is(":checked")) {
  		$("#apply").append(" reverse");
  	}
  	if ($('#loop').is(":checked")) {
  		$("#apply").append(" infinite");
  	}
  	$("#apply").append('">');
  }

  $("#loop").change(function() {
  	updateInstruct();
  });

  $("#reverse").change(function() {
  	updateInstruct();
  });

  $("#animationName").change(function() {
  	updateInstruct();
  });

  $(document).ready(function() {

  	$('#runAnimation').click(function(e) {
  		e.preventDefault();
  		var selected = $('#animationName').val();
  		if ($('#reverse').is(":checked")) {
  			selected = selected + " reverse";
  		}
  		if ($('#loop').is(":checked")) {
  			selected = selected + " infinite";
  		}
  		runAnimation(selected);
  	});
  });