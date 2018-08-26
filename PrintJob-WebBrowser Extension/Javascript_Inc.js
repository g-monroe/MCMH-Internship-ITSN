var js_IsMobileDevice = 
{
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (js_IsMobileDevice.Android() || js_IsMobileDevice.BlackBerry()
        || js_IsMobileDevice.iOS() || js_IsMobileDevice.Opera()
        || js_IsMobileDevice.Windows());
  }
};

function LaunchColorboxPopup(target, content) 
{
    var popupProperites = target.getAttribute("data-popup");
    var results = popupProperites.match(/w([0-9]{2})h([0-9]{2})/);
    var width = (results[1] || "40") + "%";
    var height = (results[2] || "40") + "%";
    
    $.colorbox({
        width: width,
        height: height,
        inline: true,
        href: content
    });
}

function getAssetIssueList() 
{
	if (document.form.inp_InvItemID.value.length == 0) {
		document.form.inp_InvItem.focus();
		alert("No Asset selected");

		return false;
	} else {
		var popupUrl = "Pop_AssetIssueList.asp?id=" + document.form.inp_InvItemID.value;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (900) + ',height=' + (460) + ',left=50,top=20');

		IT_popups.open({
			url: popupUrl,
			height: 460,
			width: 900
		});

		return true;
	}
}
    
function getCallerIssueList()
{
	if (document.form.inp_SubmitterID.value.length == 0)
	{
		document.form.SubmitterName.focus();
		alert("No Caller selected");

		return false;
	}
	else
	{
		var popupUrl = "Pop_CallerIssueList.asp?id=" + document.form.inp_SubmitterID.value;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (900) + ',height=' + (460) + ',left=50,top=20');

		IT_popups.open({
			url: popupUrl,
			height: 460,
			width: 900
		});

		return true;
	}
}

function getLocationIssueList()
{
	if (document.form.inp_LocationID.value.length == 0)
	{
		document.form.LocationName.focus();
		alert("No value selected");
		return false;
	}
	else
	{
		var popupUrl = "Pop_LocationIssueList.asp?id=" + document.form.inp_LocationID.value;
		IT_popups.open({
			url: popupUrl,
			height: 460,
			width: 900
		});
		return true;
	}
}

function getIssueList()
{
	var ok = true;

	if (document.form.inp_SpecFunc1.value.length == 0) {
		ok = false;
	}

	if (eval(document.form.inp_SpecFuncID)) {
		if (document.form.inp_SpecFuncID.value == "0" || document.form.inp_SpecFuncID.value == "") {
			ok = false;
		}
	}

	if (ok) {
		var popupUrl = "SpecialFunction1_IssueList.asp?id=" + document.form.inp_SpecFuncID.value;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (800) + ',height=' + (460) + ',left=50,top=20');

		IT_popups.open({
			url: popupUrl,
			height: 460,
			width: 800
		});
	} else {
		alert("No record selected");
		document.form.inp_SpecFunc1.focus();
		return false;
	}

	return true;
} 	
   
function getOrgIssueList()
{
	if ((document.form.inp_OrgID.value.length == 0) || ((document.form.inp_OrgID.value.length > 0) && (document.form.inp_Org.value.length == 0)))
	{
		document.form.inp_Org.focus();
		alert("No Organization selected");

		return false;
	}
	else
	{
		var popupUrl = "Pop_OrgIssueList.asp?id=" + document.form.inp_OrgID.value;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (900) + ',height=' + (460) + ',left=50,top=20');

		IT_popups.open({
			url: popupUrl,
			height: 460,
			width: 900
		});

		return true;
	}
} 

function getSubstatusHistory(issueNbr)
{
	var popupUrl = "Pop_SubstatusHistoryList.asp?IssueNbr=" + issueNbr;

	//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (400) + ',left=50,top=20');

	IT_popups.open({
		url: popupUrl,
		height: 400,
		width: 550
	});
} 
   
	function handleBoolean(field, txtfield)
    {     
        if (field.checked == true) {
            txtfield.value = "True";
        } else {
            txtfield.value = "False";
        }
	}
    
    function isFloatValue(field) // NO DOM DEPENDENCIES, CANDIDATE FOR MODULE
    {
        var strDollars;

        strDollars = field.value.replace(/,/g, ""); // get rid of commas
        strDollars = strDollars.replace( /\$/g, "" ); // get rid of dollar signs ($) 
        strDollars = parseFloat(strDollars); // turn this into a Float

        if (isNaN(strDollars)) {
            // If this doesn't turn out to be a float, return false
            return false;
        } else {
            field.value=strDollars; // hm, this is editing the field, doesn't seem right
            return true;
        }
    }
    
	function js_setDisplayName(strDisplayNameFormat) {
	    var strFirstName;
	    strFirstName = document.form.inp_FirstName.value.substr(0, 1);

	    switch (strDisplayNameFormat) {
	    case "Last, First":
	        document.form.inp_FullName.value = document.form.inp_LastName.value + ", " + document.form.inp_FirstName.value;
	        break;
	    case "First Last":
	        document.form.inp_FullName.value = document.form.inp_FirstName.value + " " + document.form.inp_LastName.value;
	        break;
	    case "Last, First Initial.":
	        document.form.inp_FullName.value = document.form.inp_LastName.value + ", " + strFirstName.toUpperCase() + ".";
	        break;
	    case "First Initial. Last":
	        document.form.inp_FullName.value = strFirstName.toUpperCase() + ". " + document.form.inp_LastName.value;
	        break;
	    default:
	        document.form.inp_FullName.value = document.form.inp_LastName.value + ", " + document.form.inp_FirstName.value;
	    }
	}
    
	function loadHomePageOptions() {
	    if (!document.form || !document.form.inp_HomePage) {
	        return;
	    }
	    var selIndex = document.form.inp_HomePage.selectedIndex;
	    var selectedOption = (selIndex > -1 ? document.form.inp_HomePage.options[selIndex].value : null);
	    var selected = false;
	    var currHomePage = document.form.inp_currHomePage.value;
	    if (selectedOption == "") {
	        selectedOption = currHomePage;
	    }
	    // Clear home page list
	    document.form.inp_HomePage.options.length = 0;

	    // Loop through all the "menu" check boxes and refill home page list
	    var j = 0;
	    var menuOptions = document.getElementsByName("menuOptions");
	    for (var i = 1; i <= menuOptions.length; i++) {
	        var checkboxName = "document.form.inp_Check_" + i + ".checked";
	        if (eval(checkboxName)) {
	            var optionValue = menuOptions[i - 1].value;
	            document.form.inp_HomePage.options[j] = new Option(optionValue, optionValue);
	            if (optionValue == selectedOption) {
	                document.form.inp_HomePage.options[j].selected = true;
	                selected = true;
	            }
	            // set default selection and add options that are 
	            // dependant on My Issues
	            if (optionValue.substr(0, 2) == "My") {
	                if (!(selected)) {
	                    document.form.inp_HomePage.options[j].selected = true;
	                }
	                j++;
	                document.form.inp_HomePage.options[j] = new Option("Assigned To Me", "Assigned To Me");
	                optionValue = "Assigned To Me";
	                if (optionValue == selectedOption) {
	                    document.form.inp_HomePage.options[j].selected = true;
	                    selected = true;
	                }
	                j++;
	                document.form.inp_HomePage.options[j] = new Option("Next Actioned To Me", "Next Actioned To Me");
	                optionValue = "Next Actioned To Me";
	                if (optionValue == selectedOption) {
	                    document.form.inp_HomePage.options[j].selected = true;
	                    selected = true;
	                }
	                j++;
	                document.form.inp_HomePage.options[j] = new Option("Submitted By Me", "Submitted By Me");
	                optionValue = "Submitted By Me";
	                if (optionValue == selectedOption) {
	                    document.form.inp_HomePage.options[j].selected = true;
	                    selected = true;
	                }
	                j++;
	                document.form.inp_HomePage.options[j] = new Option("Summary of All", "Summary of All");
	                optionValue = "Summary of All";
	                if (optionValue == selectedOption) {
	                    document.form.inp_HomePage.options[j].selected = true;
	                    selected = true;
	                }
	            }
	            j++;
	        }
	    }
	    // if no menu options were selected, we'll add My Issues back to the list
	    if (document.form.inp_HomePage.options.length == 0) {
	        document.form.inp_HomePage.options[j] = new Option("My Issues", "My Issues");
	        j++;
	        document.getElementById("CanViewMyIssues").checked == true;
	    }
	}
    
	function onAddNewUser(callerVal)
	{
	    var popupUrl;

	    if (eval(callerVal).value.length > 0) {
	        popupUrl = 'Pop_UserAdd.asp?callerVal=' + escape(eval(callerVal).value);
	    } else {
	        popupUrl = 'Pop_UserAdd.asp';
	    }

	    if (window.opener) {
	        if (window.opener.document.form.inp_Org) {
	            if (popupUrl.indexOf("?") > 0) {
	                popupUrl = popupUrl + "&OrgName=" + escape(window.opener.document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + window.opener.document.form.inp_OrgID.value;
	            } else {
	                popupUrl = popupUrl + "?OrgName=" + escape(window.opener.document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + window.opener.document.form.inp_OrgID.value;
	            }
	        }
	    } else {
	        if (document.form.inp_Org) {
	            if (popupUrl.indexOf("?") > 0) {
	                popupUrl = popupUrl + "&OrgName=" + escape(document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
	            } else {
	                popupUrl = popupUrl + "?OrgName=" + escape(document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
	            }
	        }
	    }

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (345) + ',height=' + (460) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 525
	    });
	} 
   
	function onAddNewADUser(callerVal)
	{
	    var popupUrl;

	    if (callerVal.value !== undefined) {
	        popupUrl = 'AD_PopUserAdd.asp?callerVal=' + escape(eval(callerVal).value);
	    } else {
	        popupUrl = 'AD_PopUserAdd.asp';
	    }

	    if (window.opener) {
	        if (window.opener.document.form.inp_Org) {
	            if (popupUrl.indexOf("?") > 0) {
	                popupUrl = popupUrl + "&OrgName=" + escape(window.opener.document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + window.opener.document.form.inp_OrgID.value;
	            } else {
	                popupUrl = popupUrl + "?OrgName=" + escape(window.opener.document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + window.opener.document.form.inp_OrgID.value;
	            }
	        }
	    } else {
	        if (document.form.inp_Org) {
	            if (popupUrl.indexOf("?") > 0) {
	                popupUrl = popupUrl + "&OrgName=" + escape(document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
	            } else {
	                popupUrl = popupUrl + "?OrgName=" + escape(document.form.inp_Org.value);
	                popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
	            }
	        }
	    }

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (500) + ',height=' + (700) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 700,
            width: 520
	    });
	} 
    
	function onAssetDetailSelect(id)
    {
        if (id == "" || id == "0") {
            alert("You must select an Asset first.");
        } else {
            var popupUrl = 'Inv_PopItemShow.asp?ItemId='+ id;

            //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=700,height=600,left=50,top=20');

            IT_popups.open({
                url: popupUrl,
                height: 600,
                width: 700
            });
        }
    }	
   
	function onFindCaller()
	{
		var popupUrl;
		var strorg;
		var submitterId;
		strorg = document.form.inp_OrgID.value;
		if (document.form.inp_Org)
		{
			if (document.form.inp_Org.value == "")
			{
				strorg = "";
			}
		}
		if(document.form.SubmitterID) {
		  submitterId = document.form.SubmitterID.value;
		} else if(document.form.inp_SubmitterID) {
		  submitterId = document.form.inp_SubmitterID.value;
	  } else {
		  submitterId = '';
	  }
		
		popupUrl = "Pop_UserSearch.asp?OrgID=" + strorg + "&DisplayName=" + escape(document.form.SubmitterName.value) + "&SearchID=" + submitterId /*document.form.SubmitterID.value*/;
		popupUrl = popupUrl + "&Mode=4";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (800) + ',height=' + (500) + ',left=5000,top=5000');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
	        width: 800,
	        left: 5000,
            top: 5000
	    });
	}
    
	function onFindCallerAS()
    {
        var popupUrl;
        var strorg;
        var submitterId;
        strorg = document.form.inp_OrgID.value;
        if (document.form.inp_Org) {
            if (document.form.inp_Org.value == "") {
                strorg = "";
            }
        }
        if (document.form.SubmitterID) {
            submitterId = document.form.SubmitterID.value;
        } else if (document.form.inp_SubmitterID) {
            submitterId = document.form.inp_SubmitterID.value;
        } else {
            submitterId = '';
        }

        popupUrl = "Pop_UserSearch.asp?OrgID=" + strorg + "&DisplayName=" + escape(document.form.SubmitterName.value) + "&SearchID=" + submitterId /*document.form.SubmitterID.value*/;
        popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (800) + ',height=' + (500) + ',left=5000,top=5000');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 800,
            left: 5000,
            top: 5000
        });
    }
    
    function onFindCalAssignAS()
    {
        var popupUrl;
        var strorg;

        strorg = document.form.inp_OrgID.value;

        if (document.form.inp_Org) {
            if (document.form.inp_Org.value == "") {
                strorg = "";
            }
        }

        if (document.form.inp_AssignedTo) {
            if (document.form.inp_AssignedTo.value == "-Unassigned-") {
                document.form.inp_AssignedTo.value = "";
            }
        }

        if (document.form.AssignedToName.value == "-Unassigned-") {
            document.form.AssignedToName.value = "";
        }
        
        popupUrl = "Pop_UserSearch.asp?fieldname=Calendar&OrgID=" + strorg + "&DisplayName=" + escape(document.form.AssignedToName.value) /*document.form.SubmitterID.value*/;
        popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (800) + ',height=' + (500) + ',left=5000,top=5000');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 800,
            left: 5000,
            top: 5000
        });
    }
    
	function onFindDepartment() {
	    var popupUrl;
	    popupUrl = "Pop_DepartmentSearch.asp?Dept=" + escape(document.form.inp_Dept.value);
	    popupUrl = popupUrl + "&DeptID=" + document.form.inp_DeptID.value;
	    popupUrl = popupUrl + "&Mode=4";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (500) + ',height=' + (450) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 450,
	        width: 500
	    });
	}
    
	function onFindRespDept()
	{
	    var popupUrl;
	    popupUrl = "Pop_DepartmentSearch.asp?Dept=" + escape(document.form.inp_RespDept.value);
	    popupUrl = popupUrl + "&DeptID=" + document.form.inp_RespDeptID.value;
	    popupUrl = popupUrl + "&Mode=4";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (500) + ',height=' + (450) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 450,
	        width: 500
	    });
	}
    
	function onFindDepartmentAS() {
	    var popupUrl;
	    popupUrl = "Pop_DepartmentSearch.asp?Dept=" + escape(document.form.inp_Dept.value);
	    popupUrl = popupUrl + "&DeptID=" + document.form.inp_DeptID.value;
	    popupUrl = popupUrl + "&Mode=4&FromAS=Skip";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (500) + ',height=' + (450) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 450,
	        width: 500
	    });
	}
   
	function onFindRespDeptAS() {
	    var popupUrl;
	    popupUrl = "Pop_DepartmentSearch.asp?Dept=" + escape(document.form.inp_RespDept.value);
	    popupUrl = popupUrl + "&DeptID=" + document.form.inp_RespDeptID.value;
	    popupUrl = popupUrl + "&Mode=4&FromAS=Skip";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (500) + ',height=' + (450) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 450,
	        width: 500
	    });
	}
    
	function onFindInvItem()
	{
		var popupUrl;
		popupUrl = "Inv_PopItemSearch.asp?InvItem=" + escape(document.form.inp_InvItem.value);
		popupUrl += "&SelectedOrg=" + document.form.inp_OrgID.value;
		popupUrl += "&InvItemID=" + document.form.inp_InvItemID.value;
		popupUrl += "&Mode=4";

		if (document.form.inp_SubmitterID) {
		    popupUrl += "&SelectedUser=" + document.form.inp_SubmitterID.value;
		}

		if (document.form.hid_InvItemSearchFrom) {
		  popupUrl += "&From=" + document.form.hid_InvItemSearchFrom.value;
		}

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 850
	    });
	}
   
	function onFindInvItemAS()
    {
        var popupUrl;
        var strSubmitterId;

        if (document.form.inp_SubmitterID) {
            strSubmitterId = document.form.inp_SubmitterID.value;
        } else {
            strSubmitterId = "";
        }

        popupUrl = "Inv_PopItemSearch.asp?InvItem=" + escape(document.form.inp_InvItem.value);
        popupUrl += "&SelectedOrg=" + document.form.inp_OrgID.value;
        popupUrl += "&InvItemID=" + document.form.inp_InvItemID.value;
        popupUrl += "&Mode=4&SelectedUser=" + strSubmitterId;
        popupUrl += "&FromAS=Skip";

        if (document.form.hid_InvItemSearchFrom) {
            popupUrl += "&From=" + document.form.hid_InvItemSearchFrom.value;
        }

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 550,
            width: 850
        });
    }
    
	function onFindIssueSearchUsers(field, idField)
	{
		var popupUrl;
		if (field.value == "" || field.value == "-Unassigned-")
		{
			field.value = "";
		}
		popupUrl = "Pop_IssueSearchUsers.asp?DisplayName=" + escape(field.value) + "&FieldName=" + field.name;
		if(idField) {
		  popupUrl = popupUrl + "&UserID=" + idField.value;
		}
		popupUrl = popupUrl + "&Mode=4";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
	        width: 700,
	        left: 5000,
            top: 5000
	    });
	}
    
	function onFindIssueSearchUsersAS(field, idField) {
	    var popupUrl;

	    if (field.value == "" || field.value == "-Unassigned-") {
	        field.value = "";
	    }

	    popupUrl = "Pop_IssueSearchUsers.asp?DisplayName=" + escape(field.value) + "&FieldName=" + field.name;

	    if (idField) {
	        popupUrl = popupUrl + "&UserID=" + idField.value;
	    }

	    popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
	        width: 700,
	        left: 5000,
	        top: 5000
	    });
	}
    
    function onFindIssueSearchUsersEverAS(field, idField, checkedfield)
    {
        var popupUrl;

        if (field.value == "" || field.value == "-Unassigned-") {
            field.value = "";
        }

        popupUrl = "Pop_IssueSearchUsers.asp?DisplayName=" + escape(field.value) + "&FieldName=" + field.name;

        if (idField) {
            popupUrl = popupUrl + "&UserID=" + idField.value;
        }

        if (checkedfield) {
            popupUrl = popupUrl + "&checked=" + checkedfield.checked;
        }

        popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 700,
            left: 5000,
            top: 5000
        });
    }	
    
    function onFindLocation(fieldname)
	{
	    var popupUrl;

		popupUrl = "Pop_LocationSearch.asp?LocationName=" + escape(document.form.inp_LocationName.value);
		popupUrl = popupUrl + "&LocationID=" + escape(document.form.inp_LocationID.value);
		popupUrl = popupUrl + "&SelectedOrg=" + eval(fieldname).value;
		popupUrl = popupUrl + "&Mode=4";

		if (document.form.inp_SubmitterID) {
			popupUrl = popupUrl + "&LocUserID=" + document.form.inp_SubmitterID.value;
		}

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
            width: 550
	    });
	}
    
    function onFindLocationAS(fieldname)
    {
        var popupUrl;

        popupUrl = "Pop_LocationSearch.asp?LocationName=" + escape(document.form.inp_LocationName.value);
        popupUrl = popupUrl + "&LocationID=" + escape(document.form.inp_LocationID.value);
        popupUrl = popupUrl + "&SelectedOrg=" + eval(fieldname).value;
        popupUrl = popupUrl + "&Mode=4&FromAS=Skip";

        if (document.form.inp_SubmitterID) {
            popupUrl = popupUrl + "&LocUserID=" + document.form.inp_SubmitterID.value;
        }

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 550
        });
    }
    
    function onFindOrganization()
	{
	    var popupUrl;

		popupUrl = "Pop_OrganizationSearch.asp?Org=" + escape(document.form.inp_Org.value);
		popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
		popupUrl = popupUrl + "&Mode=4";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 850
	    });
	}
    
    function onFindOrganizationAS()
    {
        var popupUrl;

        popupUrl = "Pop_OrganizationSearch.asp?Org=" + escape(document.form.inp_Org.value);
        popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
        popupUrl = popupUrl + "&Mode=4&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 550,
            width: 850
        });
    }
        
    function onFindOrganizationSearch()
	{
	    var popupUrl;

		popupUrl = "Pop_OrganizationSearch.asp?Org=" + escape(document.form.inp_Org.value);
		popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
		popupUrl = popupUrl + "&Mode=4&fromPage=Search";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 850
	    });
	} 
    
    function onFindOrganizationSearchAS()
    {
        var popupUrl;

        popupUrl = "Pop_OrganizationSearch.asp?Org=" + escape(document.form.inp_Org.value);
        popupUrl = popupUrl + "&OrgID=" + document.form.inp_OrgID.value;
        popupUrl = popupUrl + "&Mode=4&fromPage=Search&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 550,
            width: 850
        });
    } 
    
    function onPrioritySelect()
	{
		var priorityField = document.form.inp_Priority;
		var fieldVal = priorityField.options[priorityField.selectedIndex].text;

		for (var i = 0; i < arrPrioritiesSize  ; i++)        {   
            if (arrPriorities[i][0] == fieldVal && arrPriorities[i][1] != "") 
            {
				var agree=confirm(arrPriorities[i][1]);
				if (!(agree))
				{ priorityField.value = defaultPriority; }
                break;
            }
		}

        // This is troubling. These undefined arrays are actually defined on IssueFieldMore_Inc.asp, which is included in the file that calls this function (IssueField_Inc.asp).
	} 
    
    function popBillingLineItem(issueNbr, hr, min, sd, shr, smin, amPm, ed, ehr, emin, eAmPm)
	{
	    var startAmPm;
	    var startDay;
	    var startHour;
	    var startMinute;
	    var stopAmPm;
	    var stopDay;
	    var stopHour;
	    var stopMinute;
	    var popupUrl;
	    var richTextNote;
	    var orgId;

	    if (document.form.inp_startAMPM) {
	        startAmPm = amPm.options[amPm.selectedIndex].text;
	        startDay = escape(sd.value);
	        startHour = escape(shr.value);
	        startMinute = escape(smin.value);
	    } else {
	        startAmPm = "";
	        startDay = "";
	        startHour = "";
	        startMinute = "";
	    }
	    
	    if (document.form.inp_stopAMPM) {
	        stopAmPm = eAmPm.options[eAmPm.selectedIndex].text;
	        stopDay = escape(ed.value);
	        stopHour = escape(ehr.value);
	        stopMinute = escape(emin.value);
	    } else {
	        stopAmPm = "";
	        stopDay = "";
	        stopHour = "";
	        stopMinute = "";
	    }
	    
	    if (document.form.hid_out_content) {
	        richTextNote = document.form.hid_out_content.value;
	    } else {
	        richTextNote = "";
	    }
	    
	    if (document.form.inp_OrgID) {
	        orgId = document.form.inp_OrgID.value;
	    } else {
	        orgId = 0;
	    }

	    popupUrl = "Pop_bill_LineItemAddEdit.asp?IssueNbr=" + issueNbr;
		popupUrl = popupUrl + "&inp_hours=" + escape(hr.value);
		popupUrl = popupUrl + "&inp_minutes=" + escape(min.value);
		popupUrl = popupUrl + "&inp_StartDate=" + startDay;
		popupUrl = popupUrl + "&inp_starthours=" + startHour;
		popupUrl = popupUrl + "&inp_startminutes=" + startMinute;
		popupUrl = popupUrl + "&inp_startAMPM=" + escape(startAmPm);
		popupUrl = popupUrl + "&inp_StopDate=" + stopDay;
		popupUrl = popupUrl + "&inp_stophours=" + stopHour;
		popupUrl = popupUrl + "&inp_stopminutes=" + stopMinute;
		popupUrl = popupUrl + "&inp_stopAMPM=" + escape(stopAmPm);
		popupUrl = popupUrl + "&inp_OrgID=" + orgId;
		popupUrl = popupUrl + "&RichTextNote=" + escape(richTextNote);

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (800) + ',height=' + (500) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
            width: 800
	    });
	} 
 
    function onFindProject()
	{
	    var popupUrl;

		popupUrl = "Pop_ProjectSearch.asp?ProjectName=" + escape(document.form.inp_ProjectName.value);
		popupUrl = popupUrl + "&ProjectID=" + document.form.inp_ProjectID.value;
		popupUrl = popupUrl + "&Mode=4";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
            width: 550
	    });
	}
    
    function onFindProjectAS()
    {
        var popupUrl;

        popupUrl = "Pop_ProjectSearch.asp?ProjectName=" + escape(document.form.inp_ProjectName.value);
        popupUrl = popupUrl + "&ProjectID=" + document.form.inp_ProjectID.value;
        popupUrl = popupUrl + "&Mode=4&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 550
        });
    }
    
    function onFindSpecFunction()
    {
	    var popupUrl;

	    popupUrl = "Pop_SpecFunction_Select.asp?SpecFunc1=" + escape(document.form.inp_SpecFunc1.value);

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (850) + ',height=' + (550) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 850
	    });
	}
    
    function onFindUserAssign(field, idField)
	{
	    var popupUrl;

		if (field.value == "" || field.value == "*Unassigned*") {        
			field.value = "";
		}

		popupUrl = "Pop_UserAssignSearch.asp?DisplayName=" + escape(field.value) + "&FieldName=" + field.name;

		if (idField) {
		  popupUrl = popupUrl + "&UserID=" + idField.value;
		}

		popupUrl = popupUrl + "&Mode=4";

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
	        width: 700,
	        left: 5000,
	        top: 5000
	    });
	}
    
    function onFindUserAssignAS(field, idField)
    {
        var popupUrl;

        if (field.value == "" || field.value == "*Unassigned*") {
            field.value = "";
        }

        popupUrl = "Pop_UserAssignSearch.asp?DisplayName=" + escape(field.value) + "&FieldName=" + field.name;

        if (idField) {
            popupUrl = popupUrl + "&UserID=" + idField.value;
        }

        popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 700,
            left: 5000,
            top: 5000
        });
    }
    
    function onFindTaskUserAssignAS(field, idField) {
        var fieldName = field.name;
        var popupUrl;

        if (fieldName == "AssignedToName") {
            fieldName = "TaskAssignToName";
        }

        if (field.value == "" || field.value == "-Unassigned-") {
            field.value = "";
        }

        popupUrl = "Pop_UserAssignSearch.asp?DisplayName=" + escape(field.value) + "&FieldName=" + escape(fieldName);

        if (idField) {
            popupUrl = popupUrl + "&UserID=" + escape(idField.value);
        }

        popupUrl = popupUrl + "&Mode=5&FromAS=Skip";

        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=5000,top=5000');

        IT_popups.open({
            url: popupUrl,
            height: 500,
            width: 700,
            left: 5000,
            top: 5000
        });
    }
    
    function onFindGeneric(idFieldName, fieldName, fieldLabel, parentIdField, parentField, sprocSessionSuffix)
	{
	    var popupUrl;

		popupUrl = "Pop_GenericSearch.asp?Mode=4";
		popupUrl += "&ID=" + escape(parentIdField.value);
		popupUrl += "&Name=" + escape(parentField.value);
		popupUrl += "&IdFieldName=" + idFieldName;
		popupUrl += "&FieldName=" + fieldName;
		popupUrl += "&FieldLabel=" + escape(fieldLabel);
		popupUrl += "&ParentIdFieldName=" + parentIdField.name;
		popupUrl += "&ParentFieldName=" + parentField.name;
		popupUrl += "&Suffix=" + sprocSessionSuffix;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
            width: 550
	    });
	}
    
	function onFindGenericAS(idFieldName, fieldName, fieldLabel, parentIdField, parentField, sprocSessionSuffix) {
	    var popupUrl;

	    popupUrl = "Pop_GenericSearch.asp?Mode=4";
	    popupUrl += "&ID=" + escape(parentIdField.value);
	    popupUrl += "&Name=" + escape(parentField.value);
	    popupUrl += "&IdFieldName=" + idFieldName;
	    popupUrl += "&FieldName=" + fieldName;
	    popupUrl += "&FieldLabel=" + escape(fieldLabel);
	    popupUrl += "&ParentIdFieldName=" + parentIdField.name;
	    popupUrl += "&ParentFieldName=" + parentField.name;
	    popupUrl += "&Suffix=" + sprocSessionSuffix;
	    popupUrl += "&FromAS=Skip";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (550) + ',height=' + (500) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 500,
	        width: 550
	    });
	}
    
	function onInvItemShow(itemid)
	{
	    var popupUrl = "Inv_PopItemShow.asp?ItemId=" + itemid;

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=475,height=600,left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 600,
            width: 475
	    });
	} 
    
	function onOrganizationShow(id)
	{
	    //window.open(IT_security.createToken_AutoGen('Pop_OrganizationShow.asp?id=' + id), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=475,height=600,left=50,top=20');

	    IT_popups.open({
	        url: "Pop_OrganizationShow.asp?id=" + id,
	        height: 600,
            width: 475
	    });
	}
    
	function onPopChange(field, idfield)
	{
	    if (field) {
	        if (eval(field).value == "") {
	            eval(idfield).value = "";
	        }
	    }
	}
    
    function onShowContractIssues(contractId)
    {
        var popupUrl = "Pop_OrgContractIssues.asp?ID=" + contractId;
        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=1,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (350) + ',left=250,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 350,
            width: 700,
            left: 250,
            top: 20
        });
    }
    
    function onShowServiceLevel(serviceLevelId)
    {
        var popupUrl = "Pop_slServiceLevelView.asp?SLID=" + serviceLevelId;
        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=550,height=300,left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 300,
            width: 550
        });
    }
    
    function onShowSeverityDesc()
    {
        var popupUrl = "Pop_slSeveritiesDefinitions.asp";
        //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=550,height=300,left=50,top=20');

        IT_popups.open({
            url: popupUrl,
            height: 300,
            width: 550
        });
    }
    
	function onViewAssign(to, phone, on, by, byphone, autoassign, mode)
	{
		var popupUrl;
		popupUrl = "Pop_Assignment.asp?AssignedTo=" + to;
		popupUrl = popupUrl + "&AssignedPhone=" + encodeURIComponent(phone);
		popupUrl = popupUrl + "&AssignedOn=" + on;
		popupUrl = popupUrl + "&AssignedBy=" + by;
		popupUrl = popupUrl + "&ByPhone=" + encodeURIComponent(byphone);
		popupUrl = popupUrl + "&AutoAssign=" + autoassign; 
		popupUrl = popupUrl + "&mode=" + mode;

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (600) + ',height=' + (160) + ',left=200,top=250');

	    IT_popups.open({
	        url: popupUrl,
	        height: 160,
	        width: 600,
	        left: 200,
            top: 250
	    });
	} 
    
	function showDetails()
	{
	    var ok = true;

		if (document.form.inp_SpecFunc1.value.length == 0) {
		    ok = false;
		}

		if (eval(document.form.inp_SpecFuncID)) {
		    if (document.form.inp_SpecFuncID.value == "0" || document.form.inp_SpecFuncID.value == "") {
		        ok = false;
		    }
		}

	    if (ok) {
	        var popupUrl = "Pop_SpecFunc1_DetailsOnly.asp?id=" + document.form.inp_SpecFuncID.value;

		    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (500) + ',left=50,top=20');

	        IT_popups.open({
	            url: popupUrl,
	            height: 500,
                width: 700
	        });

	        return true;
	    } else {
		    alert("No record selected");

		    return false;
		}
	}  
    
	function showLocDetails()
	{
	    var popupUrl;

		if (document.form.inp_LocationName.value == "")
		{ 
			alert("No value Selected");
			return false;
		}
	    popupUrl = "Pop_LocationShow.asp?id=" + escape(document.form.inp_LocationID.value);

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=475,height=600,left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 600,
            width: 475
	    });

	    return true;
	}
    
	function showOrgDetails()
	{
	    var popupUrl;

		if (document.form.inp_Org.value == "") { 
			alert("No Organization Selected");
			return false;
		}

		popupUrl = "Pop_OrganizationShow.asp?mode=name&Org=" + escape(document.form.inp_Org.value);

		//window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=550,height=600,left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 600,
            width: 550
	    });

	    return true;
	}
    
	function showSMSHints()
	{
	    var popupUrl = "Pop_SMSHelp.asp";

	    //window.open(IT_security.createToken_AutoGen(popupUrl), '', 'toolbar=0,scrollbars=1,menubar=0,location=0,resizable=1,directories=0,status=0,width=' + (700) + ',height=' + (550) + ',left=50,top=20');

	    IT_popups.open({
	        url: popupUrl,
	        height: 550,
            width: 700
	    });
	}		
    
	function toggleField() {
	    if (document.getElementById('CanBeAssignedTo').checked) {
	        document.getElementById('CanRequestNextIssue').disabled = false;
	    } else {
	        document.getElementById('CanRequestNextIssue').checked = false;
	        document.getElementById('CanRequestNextIssue').disabled = true;
	    }

	    if (document.getElementById('CanCloseIssues').checked) {
	        document.getElementById('CanCloseOwnIssuesOnly').disabled = false;
	    } else {
	        document.getElementById('CanCloseOwnIssuesOnly').checked = false;
	        document.getElementById('CanCloseOwnIssuesOnly').disabled = true;
	    }

	}

	function lockButtons() {
	    // Lock the "Submit" buttons
	    document.form.btnSubmitTop.disabled = true;
	    document.form.btnSubmitBottom.disabled = true;
	    // Try to lock the "Submit and Close" buttons (...this will cause an exception if these buttons aren't present)
	    try {
	        document.form.btnSubmitAndCloseTop.disabled = true;
	        document.form.btnSubmitAndCloseBottom.disabled = true;
	    } catch (e) {
	        // Log the exception if desired, otherwise fail silently.
	    }

	    // Try to lock the "Submit and Copy" buttons (...this will cause an exception if these buttons aren't present)
	    try {
	        document.form.btnSubmitAndCopyTop.disabled = true;
	        document.form.btnSubmitAndCopyBottom.disabled = true;
	        //alert("disabled *andCopy");
	    } catch (e) {
	        // Log the exception if desired, otherwise fail silently.
	    }
	}

	function unlockButtons() {
	    // Unlock the "Submit" buttons
	    document.form.btnSubmitTop.disabled = false;
	    document.form.btnSubmitBottom.disabled = false;

	    // Try to unlock the "Submit and Close" buttons (...this will cause an exception if these buttons aren't present)
	    try {
	        document.form.btnSubmitAndCloseTop.disabled = false;
	        document.form.btnSubmitAndCloseBottom.disabled = false;
	    } catch (e) {
	        // Log the exception if desired, otherwise fail silently.
	        //console.log(e.message);
	    }

	    // Try to unlock the "Submit and Copy" buttons (...this will cause an exception if these buttons aren't present)
	    try {
	        document.form.btnSubmitAndCopyTop.disabled = false;
	        document.form.btnSubmitAndCopyBottom.disabled = false;
	    } catch (e) {
	        // Log the exception if desired, otherwise fail silently.
	        //console.log(e.message);
	    }
	}

	function DoesFieldContainIllegalInputCharacters(element, elementLabel)
	{
	    if (element.val().length !== 0) {
	        var illegalCharacterPattern = /[^\w\s_\!\*\-\.\(\)\@]/gi;
	        var illegalCharacterResult = illegalCharacterPattern.test(element.val());

	        if (illegalCharacterResult) {
	            alert(elementLabel + " contains illegal characters.");
	            element.focus();
	            return true;
	        }
	    }

	    return false;
	}