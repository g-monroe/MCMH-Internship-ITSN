var ITDialog = function (options) {
  if (typeof (options) == "undefined") {
    options = {};
  }
  var _defaultWidth = $(window).width() - Math.floor($(window).width() / 5) * 2;//60% of window
  var _defaultHeight = $(window).height() - Math.floor($(window).height() / 5) * 2;//60% of window
  
  var GetNextAvailableDialogID = function () {
    for (var x = 0; x < 25; x++) {
      if ($('#ITDialog' + x).length == 0) {
        return 'ITDialog' + x;
      }
    }
  }
  this.DialogID = GetNextAvailableDialogID();
  this.Width = typeof (options.Width) != "undefined" ? options.Width : _defaultWidth;
  this.Height = typeof (options.Height) != "undefined" ? options.Height : _defaultHeight;
  this.VarName = typeof (options.VarName) != "undefined" ? options.VarName : '';
  this.FitContents = typeof (options.FitContents) != "undefined" ? options.FitContents : false;
  this.IsImageDisplay = typeof (options.IsImageDisplay) != "undefined" ? options.IsImageDisplay : false;
  this.OnOpenFunc = typeof (options.OnOpen) != "undefined" ? options.OnOpen : null;
	
	var tableSize;
	var divSize;
    var spanOrDiv;
	
	if(this.FitContents){
		tableSize = '';
	} else {
		tableSize = 'width: ' + this.Width + 'px; height: ' + this.Height + 'px; ';
	}
	if(this.FitContents){
		divSize = 'max-height: 500px; ';
	} else {
		divSize = 'width: ' + this.Width + 'px; height: ' + (this.Height - 40) + 'px; ';
	}
    if (this.IsImageDisplay) {
        spanOrDiv = "span";
    } else {
        spanOrDiv = "div";
    }
	
  if (this.VarName.length < 1) {
    alert('You must include the variable name given to the dialog object [VarName] in the options parameter array when instantiating a dialog.');
  }
  if ($('#' + this.DialogID).length < 1) {//only render 1 time if it's not existing on page already
    var dialogHTML = '<table class="ITDialog" id="' + this.DialogID + '" style="' + tableSize + 'position: fixed; z-index: 10001;display: none;" cellspacing="0" cellpadding="0">' +
                        '<tr class="DialogHeader">' +
                          '<td align="left" class="dialogTL" style="width: 12px; height: 20px;"></td>' +
                          '<td><span id="' + this.DialogID + '_Title">' + this.Title + '</span><span style="float:right;"><img title="Close" style="margin-top: 1px; cursor: pointer;" src="Graphics/x_icon.png" onclick="' + this.VarName + '.Close();return false;"></span></td>' +
                          '<td align="right" class="dialogTR" style="width: 12px; height: 20px;"></td>' +
                        '</tr>' +
                        '<tr>' +
                          '<td colspan="3" class="DialogContent"><' + spanOrDiv + ' class="Scrollable" id="' + this.DialogID + '_Content" style="' + divSize + '"></' + spanOrDiv + '></td>' +
                        '</tr>' +
                        '<tr class="DialogFooter">' +
                          '<td align="left" class="dialogBL" style="width: 12px; height: 20px;"></td>' +
                          '<td></td>' +
                          '<td align="right" class="dialogBR" style="width: 12px; height: 20px;"></td>' +
                        '</tr>' +
                      '</table>';
    $('body').append(dialogHTML);
  }
}
ITDialog.prototype = {
  DialogID: '',
  Width: 0,
  Height: 0,
  OnOpenFunc: null,
  Title: '&nbsp;',
  VarName: '',
  Open: function () {
    if (this.OnOpenFunc) {
      this.OnOpenFunc();
    }
    if ($('.ITDialogOverlay').length < 1) {//only add if not existing already
      $("<div />")
          .addClass("ITDialogOverlay")
          .css({ zIndex: 10000 })
          .appendTo("body");
    }
    this.CenterDialog();
    $('#' + this.DialogID).show();
  },
  Close: function () {
    $("body > div.ITDialogOverlay").remove();
    $('#' + this.DialogID).hide();
  },
  SetWidth: function(width){
    $('#' + this.DialogID).css({ width: width + 'px' });
    $('#' + this.DialogID + '_Content').css({ width: width + 'px' });
  },
  SetHeight: function(height){
    $('#' + this.DialogID).css({ height: height + 'px' });
    $('#' + this.DialogID + '_Content').css({ height: height - 40 + 'px' });
  },
  SetTitle: function(title){
    $('#' + this.DialogID + '_Title').html(title);
  },
  SetOnOpenFunc: function(strFunc){
    this.OnOpenFunc = strFunc;
  },
  SetContent: function(content){
    $('#' + this.DialogID + '_Content').html(content);
  },
  CenterDialog: function()
  {
    var $window = $(window);
    var height = $('#' + this.DialogID).height();
    var width = $('#' + this.DialogID).width();
    var top = ($window.height() / 2 - height / 2) ;
    var left = $window.width() / 2 - width / 2;
    if (top < 0)
    {
      top = 0;
    }
    if (left < 0)
    {
      left = 0;
    }
    $('#' + this.DialogID).css({ top: top.toString() + 'px', left: left.toString() + 'px' });
  }
}


var Issuetrak = Issuetrak || {};

Issuetrak.DialogInteractor = function()
{
    this.initialize();
};

Issuetrak.DialogInteractor.prototype.initialize = function()
{
    $(document).ready(function()
    {
        $(document).on("click", ".triggerCloseWindow", function()
        {
            window.close();
        });
    });
}

var dialogInteractor = new Issuetrak.DialogInteractor();