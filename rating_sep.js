  jQuery(document).ready(function () {
    	 $("#input-21f").rating({
            starCaptions: function(val) {
                
                    return val;
                
            },
            starCaptionClasses: function(val) {
                
                    return 'label label-success';
                
            },
            hoverOnClear: false
        });
        $('#rating-input').rating({
              min: 0,
              max: 5,
              step: 0.0001,
              size: 'lg',
              showClear: false
           });
    });