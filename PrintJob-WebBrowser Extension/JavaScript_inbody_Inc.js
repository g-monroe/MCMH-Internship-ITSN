//============================================================================
// 
//  Javascript Library Functions for IssueTrak (inside the body section)
//             Some of these functions depend on variables pre-defined. 
//             Use this before you call the initializeTooltip:
//             var IE4, NS4, Gecko, timerID, style, CaptionStyleBegin, CaptionStyleEnd; 
//
//============================================================================

//====================================
  function initializeTooltip()
//====================================
  {
    NS4 = (document.layers) ? 1 : 0;
    IE4 = (document.all) ? 1 : 0;
    Gecko = (NS4==0 && IE4==0) ? 1 : 0;

    style = ((NS4 && document.test) || IE4 || Gecko) ? 1 : 0;

    timerID = null;

    var padding = 2; // < 4 recommended
    var bgcolor = "#EEEEEE";

    var borWid = 1; // for no border, assign null
    var borCol = "#1A3E93";
    var borSty = "solid";

    CaptionStyleBegin = "<div style='text-align:center; line-height:30px; vertical-align:middle; background: #46699A; color: #ffffff; font: 14px Verdana, Arial, sans-serif; font-weight: bold;' id='div_101' >";
    CaptionStyleEnd = "</div>";
    var str = "<style type='text/css'>";
    str += ".tooltip {";
    str += "position: absolute;";
    str += "visibility: hidden;";
    str += "font: 12px Verdana, Arial, sans-serif;";
    str += "left: 0; top: 0;";
    str += "z-index: 9999;";
    if (IE4) { 
		str += "filter: progid:DXImageTransform.Microsoft.Shadow(color=gray,direction=135);";
	}
    if (borWid > 0) { // if a border is specified
      str += "border-width: " + borWid + ";";
      str += "border-color: " + borCol + ";";
      str += "border-style: " + borSty + ";";
    }
    if (NS4) {
      if (borWid > 0 && padding <= 3) {
        str += "padding: 0;";
        str += "layer-background-color: " + bgcolor + ";";
      } else if (borWid > 0 && padding > 3) {
        str += "padding: " + (padding - 3) + ";";
        str += "background-color: " + bgcolor + ";";
      } else if (borWid == 0) {
        str += "padding: " + padding + ";";
        str += "layer-background-color: " + bgcolor + ";";
      }
    } else {
      str += "padding: " + padding + ";";
      str += "background-color: " + bgcolor + ";";
    }
    str += "}";
    str += "</style>";

    if (style) {
      document.write(str);
      if (NS4) window.onload = init;
    }
  return true;
  }

function init() {
  setTimeout("window.onresize = redo", 1000);
}

function redo() {
  window.location.reload();
}

function makeEl(id, width, code) {
  if (!style) return;
  var str = "<style type='text/css'>";
  str += "#" + id + " {";
  str += "width: " + width + "px;";
  str += "}";
  str += "</style>";
  str += "<div class='tooltip' style='width:" + width + "px' id='" + id + "'>" + code + "</div>";
  document.write(str);
}

function displayEl(left, top) {
  document.onmouseup = null;
  document.onmousemove = null;
  if (document.releaseEvents) {
    document.releaseEvents(Event.MOUSEMOVE);
    document.releaseEvents(Event.MOUSEUP);
  }

  var whichEl
  if (Gecko) 
    {
    whichEl = document.getElementById(active).style;
    }
  else
    {
    whichEl = (NS4) ? document[active] : document.all[active].style;
    }
  whichEl.left = left + "px";
  whichEl.top = top + "px";
  whichEl.visibility = (NS4) ? "show" : "visible";
}

function clearEl() {
  if (typeof(active) == "undefined" || !active) return;
  if (!style) return;
  var whichEl
  if (Gecko) 
    {
    whichEl = document.getElementById(active).style;
    }
  else
    {
    whichEl = (NS4) ? document[active] : document.all[active].style;
    }
  whichEl.visibility = (NS4) ? "hide" : "hidden";
  active = null;
  if (timerID) clearTimeout(timerID);

  var selectElems = document.getElementsByTagName("SELECT");
  for(var selIndex = 0; selIndex < selectElems.length; selIndex++) {
    var selectElem = selectElems[selIndex];
    selectElem.style.display = '';
    var textElem = document.getElementById(selectElem.name + "_ht");
    if(textElem) {
      textElem.style.display = 'none';
    }
  }
  
  document.onmouseup = null;
  document.onmousemove = null;
  if (document.releaseEvents) {
    document.releaseEvents(Event.MOUSEMOVE);
    document.releaseEvents(Event.MOUSEUP);
  }
}

function activateEl(id, e) {
  if (!style) return;
  active = id;
  document.addEventListener('mousemove', checkEl(e), false);
}

function checkEl(e) {
  if (timerID) clearTimeout(timerID);
  var left;
  var top;
  var whichEl
  if (Gecko) 
    {
    whichEl = document.getElementById(active);
    }
  else
    {
    whichEl = (NS4) ? document[active] : document.all[active];
    }

  var tipWidth = parseInt(whichEl.style.width.replace(/px/gi, ""), 10);
  if(isNaN(tipWidth)) {
    tipWidth = 300;
  }
  var tipHeight = whichEl.offsetHeight;

  var widthString, width, windowoffset;
  widthString = whichEl.style.width;
  width = widthString.slice(0,widthString.search("px"));
  windowoffset = Math.round(width/1.5) + 50;
  if (NS4) {
    if (e.pageX + 300 > document.body.clientWidth) {
      left = e.pageX - windowoffset;
      if (e.pageY + 160 > document.body.clientHeight) {
        top = e.pageY - 100;
      }
      else {
        top = e.pageY + 20;
      }
    }
    else {
      left = e.pageX;
      if (e.pageY + 160 > document.body.clientHeight) {
        top = e.pageY - 100;
      }
      else {
        top = e.pageY + 20;
      }
    }
    if (active == "searchhelp") {
      left = e.pageX - windowoffset;
      top = e.pageY - 45;
    }
  }
  else if (IE4) {
    if (event.clientX + tipWidth > document.body.clientWidth) {
      left =  document.body.clientWidth - tipWidth + document.documentElement.scrollLeft;
    } else {
      left =  event.clientX + document.documentElement.scrollLeft;
    }
    if (event.clientY + 20 + tipHeight > document.body.clientHeight) {
      top = event.clientY - 2 - tipHeight + document.documentElement.scrollTop;
    } else {
      top = event.clientY + 20 + document.documentElement.scrollTop;
    }
    if (active == "searchhelp") {
      left =  event.clientX + document.body.scrollLeft - windowoffset;
      top = event.clientY + document.body.scrollTop - 45;
    }
  }
  else if (Gecko) {
    if (e.clientX + tipWidth > window.innerWidth - 25 /* 25 = ~width of vertical scroll bar*/) {
      left =  window.innerWidth - 25 - tipWidth + window.pageXOffset;
    } else {
      left =  e.clientX + window.pageXOffset;
    }
    if (e.clientY + 20 + tipHeight > window.innerHeight - 22 /* 22 = ~height of horizontal scroll bar*/) {
      top = e.clientY - 2 - tipHeight + window.pageYOffset;
    } else {
      top = e.clientY + 20 + window.pageYOffset;
    }
    if (active == "searchhelp") {
      left =  e.clientX + document.body.scrollLeft - windowoffset;
      top = e.clientY + document.body.scrollTop - 45;
    }
  }
  if (top < 0) {top = 5; left = left + 5;}
  timerID = setTimeout("displayEl(" + left + ", " + top + ")", 300);
}
