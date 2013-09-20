// Generated by CoffeeScript 1.6.3
(function() {
  this.appInit = function() {
    var endEv, isTouch, startEv,
      _this = this;
    $('body').height($(window).height());
    $('div').each(function(index, el) {
      return $(el).css("line-height", $(el).height() + "px");
    });
    new FastClick(document.getElementById('app_body'));
    console.log("Fast click init");
    isTouch = true;
    if (isTouch) {
      startEv = 'touchstart';
      endEv = "touchend";
    } else {
      startEv = 'mousedown';
      endEv = 'mouseup';
    }
    $('.button').bind(startEv, function() {
      return buttonPress($(this));
    });
    $('.button').bind(endEv, function() {
      return buttonRelease($(this));
    });
    $('#left_button').click(function() {
      return alert("left");
    });
    $('#right_button').click(function() {
      return alert("right");
    });
    return PhoneGapFunctions.longVibrate();
  };

  this.number = "";

  this.buttonPress = function(el) {
    $('#buttons .button').removeClass("highlight");
    el.addClass("highlight");
    return PhoneGapFunctions.touchVibrate();
  };

  this.buttonRelease = function(el) {
    return el.removeClass("highlight");
  };

}).call(this);