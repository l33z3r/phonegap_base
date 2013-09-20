@appInit = ->
  $('body').height($(window).height())
  $('div').each (index, el) ->
    $(el).css("line-height", $(el).height() + "px")

  new FastClick document.getElementById('app_body')
  console.log("Fast click init")

  isTouch = true

  if isTouch
    startEv = 'touchstart'
    endEv = "touchend"
  else
    startEv = 'mousedown'
    endEv = 'mouseup'

  $('.button').bind(startEv, ->
    buttonPress $(this)
  )

  $('.button').bind(endEv, ->
    buttonRelease $(this)
  )

  $('#left_button').click =>
    alert("left")

  $('#right_button').click =>
    alert("right")

  PhoneGapFunctions.longVibrate()

@number = ""

@buttonPress = (el) ->
  #this is to fix a bug with a highlighted button when the release event never fires on it
  $('#buttons .button').removeClass("highlight");
  el.addClass "highlight"
  PhoneGapFunctions.touchVibrate()

@buttonRelease = (el) ->
  el.removeClass "highlight"