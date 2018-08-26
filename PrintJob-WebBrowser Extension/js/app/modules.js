/* ------------------------------------------------------------
DATAFROMASP.js
-------------------------------------------------------------*/
var IT_dataFromAsp = (function ()
{
    var localCache = {};

    function retrieveFromCache(cacheKey, valueGenerator)
    {
        
        if (localCache === null || false === ("loaded" in localCache))
        {
            localCache = {};
            localCache = $("meta[name='globalData']").data() || {};
            localCache["loaded"] = true;
        }
        if (false === (cacheKey in localCache))
        {
            localCache[cacheKey] = valueGenerator();
        }
        return localCache[cacheKey];
    }

    var surveysPrefix = "";
    if (window.location.href.indexOf("/Survey/") > -1)
    {
        surveysPrefix = "../";
    }
    var getSessionId = function ()
    {
        return retrieveFromCache("sessionId",
            function()
            {
                var sessionID = null;

                var maxRetryAttempts = 1;

                var retryCounter = 0;

                while ((retryCounter <= maxRetryAttempts) && ($.isNumeric(sessionID) === false))
                {
                    $.ajax(
                        {
                            type: "GET",
                            url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                            data: "Method=GetSessionID",
                            async: false,
                            success: function(data)
                            {
                                sessionID = data;
                            },
                            error: function(data)
                            {
                                alert("Failed: Could not retrieve valid SessionID.");

                                sessionID = null;
                            }
                        });

                    retryCounter++;
                }

                return sessionID;
            });
    };

    var getCurrentUserLogin = function ()
    {
        return retrieveFromCache("userLogin", function() {
            var message = null;
            $.ajax({
                type: "GET",
                url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                data: "Method=GetCurrentUserLogin",
                async: false,
                success: function (msg) {
                    message = msg;
                },
                error: function (msg) {
                    alert("Failed: Could not retrieve the current user login.");
                }
            });
            return message;
        });
    };

    var getUserDateFormat = function ()
    {
        return retrieveFromCache("userDateFormat",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetDateFormat",
                    async: false,
                    success: function(msg)
                    {
                        message = msg;
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve Date Format.");
                    }
                });
                return message;
            });
    };

    var isRichTextEnabled = function ()
    {
        return retrieveFromCache("isRichTextEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetRichText",
                    async: false,
                    success: function(msg)
                    {
                        if (msg.toLowerCase() == "false")
                        {
                            msg = false;
                        }
                        else
                        {
                            msg = true;
                        }
                        message = msg;
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve rich text setting.");
                    }
                });
                return message;
            });
    };
	
    var isHTMLEmailEnabled = function ()
    {
        return retrieveFromCache("isHtmlEmailEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetHTMLEmail",
                    async: false,
                    success: function(msg)
                    {
                        if (msg.toLowerCase() == "false")
                        {
                            msg = false;
                        }
                        else
                        {
                            msg = true;
                        }
                        message = msg;
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve HTML Email setting.");
                    }
                });
                return message;
            });
    };	

    var getCSRFSetting = function ()
    {
        return retrieveFromCache("csrfSetting",
            function()
            {
                var csrfSetting = false;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetCSRFSetting",
                    async: false,
                    success: function(msg)
                    {
                        csrfSetting = msg;
                    },
                    error: function()
                    {
                        alert("Failed: Could not retrieve CSRF setting.");
                    }
                });

                return csrfSetting;
            });
    };

    var getApplicationUrl = function ()
    {
        return retrieveFromCache("applicationUrl",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetApplicationUrl",
                    async: false,
                    success: function(msg)
                    {
                        message = msg;
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve the Application URL.");
                    }
                });
                return message;
            });
    };

    var isIemEnabled = function ()
    {
        return retrieveFromCache("isIemEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsIemEnabled",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve the setting for whether IEM is enabled.");
                    }
                });
                return message;
            });
    };

    var isCanAdministratePermissionEnabled = function ()
    {
        return retrieveFromCache("isCanAdministratePermissionEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsCanAdministratePermissionEnabled",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve whether the user has the CanAdministrate permission.");
                    }
                });
                return message;
            });
    };

    var isCanDeleteIssuesPermissionEnabled = function ()
    {
        return retrieveFromCache("isCanDeleteIssuesPermissionEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsCanDeleteIssuesPermissionEnabled",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve whether the user has the CanDeleteIssues permission.");
                    }
                });
                return message;
            });
    };

    var isCanMaintainPermissionEnabled = function ()
    {
        return retrieveFromCache("isCanMaintainPermissionEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsCanMaintainPermissionEnabled",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve whether the user has the CanMaintain permission.");
                    }
                });
                return message;
            });
    };

    var isSystemAdministrator = function ()
    {
        return retrieveFromCache("isSystemAdministrator",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsSystemAdministrator",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve whether the user is a system administrator.");
                    }
                });
                return message;
            });
    };

    var isIssueLockdownEnabled = function ()
    {
        return retrieveFromCache("isIssueLockdownEnabled",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=IsIssueLockdownEnabled",
                    async: false,
                    success: function(msg)
                    {
                        message = msg === 'true';
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve the setting for Issue Lockdown.");
                    }
                });
                return message;
            });
    };

    var getSystemDeleteSetting = function ()
    {
        return retrieveFromCache("systemDeleteSetting",
            function()
            {
                var message = null;
                $.ajax({
                    type: "GET",
                    url: surveysPrefix + "Ajax_PassDataFromASPtoJS.asp",
                    data: "Method=GetSystemDeleteSetting",
                    async: false,
                    success: function(msg)
                    {
                        message = msg;
                    },
                    error: function(msg)
                    {
                        alert("Failed: Could not retrieve the System Delete setting.");
                    }
                });
                return message;
            });
    };
    //Return the module value
    return {
        GetSessionID: getSessionId,
        GetCurrentUserLogin: getCurrentUserLogin,
        GetDateFormat: getUserDateFormat,
        GetCSRFSetting: getCSRFSetting,
        IsRichTextEnabled: isRichTextEnabled,
		IsHTMLEmailEnabled: isHTMLEmailEnabled,
        GetApplicationUrl: getApplicationUrl,
        IsIemEnabled: isIemEnabled,
        IsCanAdministratePermissionEnabled: isCanAdministratePermissionEnabled,
        IsSystemAdministrator: isSystemAdministrator,
        IsIssueLockdownEnabled: isIssueLockdownEnabled,
        GetSystemDeleteSetting: getSystemDeleteSetting,
        IsCanDeleteIssuesPermissionEnabled: isCanDeleteIssuesPermissionEnabled,
        IsCanMaintainPermissionEnabled: isCanMaintainPermissionEnabled
    }
})();
/* ------------------------------------------------------------
STRINGS.js
-------------------------------------------------------------*/
var IT_strings = (function ()
{
    // Add 'trim' method to string prototype
    if (typeof String.prototype.trim !== 'function')
    {
        String.prototype.trim = function ()
        {
            return this.replace(/^\s+|\s+$/g, '');
        }
    }

    // Add 'startsWith' method to string prototype
    if (typeof String.prototype.startsWith !== 'function')
    {
        String.prototype.startsWith = function (input)
        {
            return this.slice(0, input.length) == input;
        }
    }

    //Return the module value
    return {
        convertHtmlEntitiesToCharacters: function (inputString)
        {
            var convertedString;

            try
            {
                convertedString = inputString.toString();
            } catch (e)
            {
                throw "Unable to convert input to string.";
            }

            convertedString = convertedString.replace(/%26/gi, "&");
            convertedString = convertedString.replace(/''/gi, "'");
            convertedString = convertedString.replace(/&quot;/gi, '"');
            convertedString = convertedString.replace(/&amp;/gi, "&");
            convertedString = convertedString.replace(/&gt;/gi, ">");
            convertedString = convertedString.replace(/&lt;/gi, "<");
            //temp  = temp.replace("&#229;", "å");
            convertedString = convertedString.replace(/&#229;/gi, String.fromCharCode(229));
            //temp  = temp.replace("&#197;", "Å");
            convertedString = convertedString.replace(/&#197;/gi, String.fromCharCode(197));
            //temp  = temp.replace("&#248;", "ø");
            convertedString = convertedString.replace(/&#248;/gi, String.fromCharCode(248));
            //temp  = temp.replace("&#216;", "Ø");
            convertedString = convertedString.replace(/&#216;/gi, String.fromCharCode(216));
            //temp  = temp.replace("&#230;", "æ");
            convertedString = convertedString.replace(/&#230;/gi, String.fromCharCode(230));
            //temp  = temp.replace("&#198;", "Æ");
            convertedString = convertedString.replace(/&#198;/gi, String.fromCharCode(198));
            //temp  = temp.replace("&#233;", "é");
            convertedString = convertedString.replace(/&#233;/gi, String.fromCharCode(233));
            //temp  = temp.replace("&#201;", "É"); 
            convertedString = convertedString.replace(/&#201;/gi, String.fromCharCode(201));
            // temp  = temp.replace("&#8216;", """");
            // temp  = temp.replace("&#8217;", """");
            convertedString = convertedString.replace(/&#8211;/gi, "-");
            //temp  = temp.replace("&#252;", "ü"); 
            convertedString = convertedString.replace(/&#252;/gi, String.fromCharCode(252));
            //temp  = temp.replace("&#246;", "ö");
            convertedString = convertedString.replace(/&#246;/gi, String.fromCharCode(246));

            return convertedString;
        },

        leftTrim: function (inputString)
        {
            var trimmedString;

            try
            {
                trimmedString = inputString.toString();
            } catch (e)
            {
                throw "Unable to convert input to string.";
            }

            // While the left-most character is a space, chop off the left-most character
            while (trimmedString.substring(0, 1) === ' ')
            {
                trimmedString = trimmedString.substring(1, trimmedString.length);
            }

            return trimmedString;
        },

        trimAll: function (inputString)
        {
            console.log("DEPRECATED! Consider removing the function trimAll(), and use the String.prototype.trim() method. --Dan");

            try
            {
                var trimmedString = inputString.toString();
            } catch (e)
            {
                throw "Unable to convert input to string.";
            }

            while (trimmedString.substring(0, 1) == ' ')
            {
                trimmedString = trimmedString.substring(1, trimmedString.length);
            }

            while (trimmedString.substring(trimmedString.length - 1, trimmedString.length) == ' ')
            {
                trimmedString = trimmedString.substring(0, trimmedString.length - 1);
            }

            return trimmedString;
        },
        Base64DecodeString: function(encodedString){
            return atob(encodedString);
        }
    }
})();
/* ------------------------------------------------------------
HELPERS.js
-------------------------------------------------------------*/
var IT_helpers = (function ()
{
    return {
        resolveUndefinedValue: function (inputValue, defaultValue)
        {
            // Make sure the defaultValue is not undefined!
            if (typeof defaultValue === "undefined")
            {
                throw "defaultValue cannot be undefined!";
            }

            // If the input was undefined, set it to the provided default value; otherwise, return back the input
            if (typeof inputValue === "undefined")
            {
                return defaultValue;
            } else
            {
                return inputValue;
            }
        },
        ResetTinyMceEditorIfRichTextIsEnabled: function(tinyMceEditorId)
        {
            if (IT_dataFromAsp.IsRichTextEnabled())
            {
                var editor = (tinymce != null) ? tinymce.get(tinyMceEditorId) : null;
                if (editor != null)
                {
                    editor.init();
                }
            }
        }
    }
})();
/* ------------------------------------------------------------
DATES.js
-------------------------------------------------------------*/
var IT_dates = (function ()
{

    /**
     * @class dates
     */
    return {
        /**
         * Contains a reference list of three-letter month abbreviations, with each first letter being capitalized.
         * 
         * @property monthAbbreviations
         * @type Array
         */
        monthAbbreviations: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        monthNumbers: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],

        units: {
            MILLISECOND: 1, // base unit
            SECOND: 1000, // 1000 milliseconds
            MINUTE: 60000, // 60 seconds
            HOUR: 3600000, // 60 minutes
            DAY: 86400000, // 24 hours
            WEEK: 604800000, // 7 days
            YEAR: 31536000000 // 365 days
        },

        usages: {
            DISPLAY: 0, // Formatted string is for display only.
            STORAGE: 1, // Formatted string is for strorage and will be converted back to date later.
            DATE_ENTRY: 2 // Formatted string is for a date entry field.  Must use 4-digit year.
        },

        /**
         * Determines if the input abbreviation is a valid 3-letter month abbreviation
         * 
         * TESTABLE
         * 
         * @param {String} abbreviation
         * @returns {Boolean} Whether or not the abbreviation was valid.
         */
        isValidMonthAbbreviation: function (abbreviation)
        {
            var foundInArray = false,
                lowerCaseMonthAbbreviations,
                positionInArray;

            abbreviation = abbreviation.toLowerCase();

            // Get the monthAbbreviations array in lowercase in preparation of the comparison
            lowerCaseMonthAbbreviations = this.getLowercaseMonthAbbreviations();

            // Find out if the supplied abbreviation was found in the array of month abbreviations.
            positionInArray = lowerCaseMonthAbbreviations.indexOf(abbreviation);

            if (positionInArray !== false)
            {
                foundInArray = true;
            }

            return foundInArray;
        },

        getLowercaseMonthAbbreviations: function ()
        {
            var indexOfAbbreviation,
                lowerCaseMonthAbbreviation,
                lowerCaseMonthAbbreviations = [];

            for (indexOfAbbreviation = 0; indexOfAbbreviation < this.monthAbbreviations.length; indexOfAbbreviation++)
            {
                lowerCaseMonthAbbreviation = this.monthAbbreviations[indexOfAbbreviation].toLowerCase();
                lowerCaseMonthAbbreviations.push(lowerCaseMonthAbbreviation);
            }

            return lowerCaseMonthAbbreviations;
        },

        dateAdd: function (interval, number, startDate)
        {
            var newDate,
                valueOfStartDate = startDate.valueOf();

            newDate = new Date(valueOfStartDate + (number * interval));

            return newDate;
        },

        /**
         * Converts a date object to a formatted string.
         * 
         * @method getFormattedStringFromDate
         * @param {Date} date The date to be converted to a string.
         * @param {Boolean} shouldIncludeTime Whether or not the returned string should include the time.
         * @returns {String} A formatted string of the passed in date.
         */
        getFormattedStringFromDate: function (date, shouldIncludeTime, usage)
        {
            var dateComponents = [],
                dateString = "",
                userDateFormat = IT_dataFromAsp.GetDateFormat();

            // Make sure parameters have been passed in or have default values
            if (typeof date === "undefined")
            {
                throw "Required parameter was undefined: {Date} date";
            }

            shouldIncludeTime = IT_helpers.resolveUndefinedValue(shouldIncludeTime, false);
            //expectedDateFormat = IT_helpers.resolveUndefinedValue(expectedDateFormat, userDateFormat);

            switch (userDateFormat)
            {
                case "dd-mmm-yy":
                    dateComponents = [
                      this.getTwoDigitDay(date),
                      this.getThreeLetterMonth(date, false),
                      usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "dd/mmm/yy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getThreeLetterMonth(date, false),
                        usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                case "dd-mmm-yyyy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getThreeLetterMonth(date, false),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "dd/mmm/yyyy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getThreeLetterMonth(date, false),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                case "dd-mm-yy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getTwoDigitMonth(date),
                        usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "dd/mm/yy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getTwoDigitMonth(date),
                        usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                case "dd-mm-yyyy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getTwoDigitMonth(date),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "dd/mm/yyyy":
                    dateComponents = [
                        this.getTwoDigitDay(date),
                        this.getTwoDigitMonth(date),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                case "mm-dd-yy":
                    dateComponents = [
                        this.getTwoDigitMonth(date),
                        this.getTwoDigitDay(date),
                        usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "mm/dd/yy":
                    dateComponents = [
                        this.getTwoDigitMonth(date),
                        this.getTwoDigitDay(date),
                        usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                case "mm-dd-yyyy":
                    dateComponents = [
                        this.getTwoDigitMonth(date),
                        this.getTwoDigitDay(date),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
                    break;

                case "mm/dd/yyyy":
                    dateComponents = [
                        this.getTwoDigitMonth(date),
                        this.getTwoDigitDay(date),
                        this.getFourDigitYear(date)
                    ];
                    dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
                    break;

                default:
                    throw "Unrecognized date format received.";
            }

            if (shouldIncludeTime)
            {
                dateString = dateString + " " + this.getFormattedTime(date, true);
            }

            return dateString;
        },

    getFormattedStringFromDateTasks: function (date, shouldIncludeTime, usage, userDateFormat) {
      var dateComponents = [],
          dateString = ""

      // Make sure parameters have been passed in or have default values
      if (typeof date === "undefined") {
        throw "Required parameter was undefined: {Date} date";
      }

      shouldIncludeTime = IT_helpers.resolveUndefinedValue(shouldIncludeTime, false);
      //expectedDateFormat = IT_helpers.resolveUndefinedValue(expectedDateFormat, userDateFormat);

      switch (userDateFormat) {
        case "dd-mmm-yy":
          dateComponents = [
            this.getTwoDigitDay(date),
            this.getThreeLetterMonth(date, false),
            usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "dd/mmm/yy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getThreeLetterMonth(date, false),
              usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        case "dd-mmm-yyyy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getThreeLetterMonth(date, false),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "dd/mmm/yyyy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getThreeLetterMonth(date, false),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        case "dd-mm-yy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getTwoDigitMonth(date),
              usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "dd/mm/yy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getTwoDigitMonth(date),
              usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        case "dd-mm-yyyy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getTwoDigitMonth(date),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "dd/mm/yyyy":
          dateComponents = [
              this.getTwoDigitDay(date),
              this.getTwoDigitMonth(date),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        case "mm-dd-yy":
          dateComponents = [
              this.getTwoDigitMonth(date),
              this.getTwoDigitDay(date),
              usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "mm/dd/yy":
          dateComponents = [
              this.getTwoDigitMonth(date),
              this.getTwoDigitDay(date),
              usage.toLowerCase() == "dateentry" ? this.getFourDigitYear(date) : this.getTwoDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        case "mm-dd-yyyy":
          dateComponents = [
              this.getTwoDigitMonth(date),
              this.getTwoDigitDay(date),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "-");
          break;

        case "mm/dd/yyyy":
          dateComponents = [
              this.getTwoDigitMonth(date),
              this.getTwoDigitDay(date),
              this.getFourDigitYear(date)
          ];
          dateString = this.assembleArrayElementsWithSeparator(dateComponents, "/");
          break;

        default:
          throw "Unrecognized date format received.";
      }

      if (shouldIncludeTime) {
        dateString = dateString + " " + this.getFormattedTime(date, true);
      }

      return dateString;
    },		
		
        assembleArrayElementsWithSeparator: function (array, separator)
        {
            var assembledString = "";

            for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++)
            {
                assembledString += array[arrayIndex] + separator;
            }

            return assembledString.substring(0, assembledString.length - 1); //remove last character in string, it'll always be a '-'
        },

        getFormattedTime: function (date, shouldIncludeAmPm, shouldBe24Hour)
        {
            var hour = date.getHours(),
                minutes = date.getMinutes(),
                timeString;

            shouldIncludeAmPm = IT_helpers.resolveUndefinedValue(shouldIncludeAmPm, true);
            shouldBe24Hour = IT_helpers.resolveUndefinedValue(shouldBe24Hour, false);

            if (shouldIncludeAmPm || shouldBe24Hour === false)
            {
                // We know that 24 hour time isn't an option
                hour = this.convertHourTo12Hour(hour);
            }

            hour = this.getTwoDigitStringFromNumber(hour);
            minutes = this.getTwoDigitStringFromNumber(minutes);

            timeString = hour + ":" + minutes;

            if (shouldIncludeAmPm)
            {
                timeString = timeString + this.getAmOrPm(date);
            }

            return timeString;
        },

        convertHourTo12Hour: function (hour)
        {
            if (hour === 0)
            {
                hour = 12;
            } else if (hour >= 13)
            {
                hour = hour - 12;
            }

            return hour;
        },

        getAmOrPm: function (date)
        {
            var hours = date.getHours();

            if (hours <= 11)
            {
                return "AM";
            } else
            {
                return "PM";
            }
        },

        getTwoDigitStringFromNumber: function (number)
        {
            var twoDigitString;

            if (number < 10)
            {
                twoDigitString = "0" + number;
            } else
            {
                twoDigitString = number.toString();
            }

            if (twoDigitString.length > 2)
            {
                twoDigitString = twoDigitString.substr(twoDigitString.length - 2, 2);
            }

            return twoDigitString;
        },

        getTwoDigitDay: function (date)
        {
            var day = date.getDate(),
                dayString = day.toString();

            if (day < 10)
            {
                dayString = "0" + dayString;
            }

            return dayString;
        },

        getTwoDigitMonth: function (date)
        {
            var month = date.getMonth(),
                monthString;

            // Adjust month number away from being zero-based
            month = month + 1;

            monthString = month.toString();

            if (month < 10)
            {
                monthString = "0" + monthString;
            }

            return monthString;
        },

        getThreeLetterMonth: function (date, shouldBeAllCaps)
        {
            var month = date.getMonth();
            var threeLetterMonth;

            // Default to returning month in ALL-CAPS (e.g. "JAN")
            shouldBeAllCaps = IT_helpers.resolveUndefinedValue(shouldBeAllCaps, true);

            threeLetterMonth = this.monthAbbreviations[month];

            if (shouldBeAllCaps)
            {
                threeLetterMonth = threeLetterMonth.toUpperCase();
            }

            return threeLetterMonth;
        },

        getTwoDigitYear: function (date)
        {
            var year = date.getFullYear(),
                yearString = year.toString();

            yearString = yearString.substr(2, 2);

            return yearString;
        },

        getFourDigitYear: function (date)
        {
            var year = date.getFullYear();

            return year.toString();
        },

        isValidDate: function (inputDate)
        {
            // user_DateFormat is defined in LoginCheck_Inc.asp which must be #include'd (either directly or
            // through #include'ing Page_Inc.asp and calling Page_HtmlStart(...) or Page_HtmlStartIssues(...))
            // prior to including this .js file.
            var date = this.getDatePartsFromSpec(inputDate);
            var day = date.dayPart;
            var month = date.monthPart;
            var year = date.yearPart;

            if (day == "" || isNaN(day))
            {
                return false;
            }
            if (year == "" || isNaN(year))
            {
                return false;
            }

            month = month.toUpperCase();

            if (day < 1 || day > 31)
            {
                return false;
            }
            if ((month == "APR" || month == "JUN" || month == "SEP" || month == "NOV") && day == 31)
            {
                return false;
            }
            if (month == "FEB")
            { // check for february 29th
                var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
                if (day > 29 || (day == 29 && !isleap))
                {
                    return false;
                }
            }
            return true;
        },

        getDatePartsFromSpec: function (date)
        {
            var dateObj = new Object();
            var dayPart, monthPart, yearPart;
            var userDateFormat = IT_dataFromAsp.GetDateFormat();

            dateObj.dayPart = "";
            dateObj.monthPart = "";
            dateObj.yearPart = "";

            dayPart = "";
            monthPart = "";
            yearPart = "";

            if (userDateFormat === 'dd-mmm-yy')
            {
                // Entered year must be 4 digits
                if (date.length === 10)
                {
                    dayPart = date.substr(0, 1);      // [d]-mmm-yy
                    monthPart = date.substr(2, 3);    // d-[mmm]-yy
                    yearPart = date.substr(6, 4);     // d-mmm-[yy]
                } else if (date.length === 11)
                {
                    dayPart = date.substr(0, 2);      // [dd]-mmm-yy
                    monthPart = date.substr(3, 3);    // dd-[mmm]-yy
                    yearPart = date.substr(7, 4);     // dd-mmm-[yy]
                }
            } else if (userDateFormat === 'dd/mm/yyyy')
            {
                if (date.length === 8)
                {
                    dayPart = date.substr(0, 1);      // [d]/m/yyyy
                    monthPart = date.substr(2, 1);    // d/[m]/yyyy
                    yearPart = date.substr(4, 4);     // d/m/[yyyy]
                } else if ((date.length === 9) && (date.substr(1, 1) === '/'))
                {
                    dayPart = date.substr(0, 1);      // [d]/mm/yyyy
                    monthPart = date.substr(2, 2);    // d/[mm]/yyyy
                    yearPart = date.substr(5, 4);     // d/mm/[yyyy]
                } else if ((date.length === 9) && (date.substr(2, 1) === '/'))
                {
                    dayPart = date.substr(0, 2);      // [dd]/m/yyyy
                    monthPart = date.substr(3, 1);    // dd/[m]/yyyy
                    yearPart = date.substr(5, 4);     // dd/m/[yyyy]
                } else if (date.length === 10)
                {
                    dayPart = date.substr(0, 2);      // [dd]/mm/yyyy
                    monthPart = date.substr(3, 2);    // dd/[mm]/yyyy
                    yearPart = date.substr(6, 4);     // dd/mm/[yyyy]
                }
            } else if (userDateFormat === 'dd/mm/yy')
            {
                // Entered year must be 4 digits
                if (date.length === 8)
                {
                    dayPart = date.substr(0, 1);      // [d]/m/yy
                    monthPart = date.substr(2, 1);    // d/[m]/yy
                    yearPart = date.substr(4, 4);     // d/m/[yy]
                } else if ((date.length === 9) && (date.substr(1, 1) === '/'))
                {
                    dayPart = date.substr(0, 1);      // [d]/mm/yy
                    monthPart = date.substr(2, 2);    // d/[mm]/yy
                    yearPart = date.substr(5, 4);     // d/mm/[yy]
                } else if ((date.length === 9) && (date.substr(2, 1) === '/'))
                {
                    dayPart = date.substr(0, 2);      // [dd]/m/yy
                    monthPart = date.substr(3, 1);    // dd/[m]/yy
                    yearPart = date.substr(5, 4);     // dd/m/[yy]
                } else if (date.length === 10)
                {
                    dayPart = date.substr(0, 2);      // [dd]/mm/yy
                    monthPart = date.substr(3, 2);    // dd/[mm]/yy
                    yearPart = date.substr(6, 4);     // dd/mm/[yy]
                }
            } else if (userDateFormat === 'mm/dd/yyyy')
            {
                if (date.length === 8)
                {
                    monthPart = date.substr(0, 1);    // [m]/d/yyyy
                    dayPart = date.substr(2, 1);      // m/[d]/yyyy
                    yearPart = date.substr(4, 4);     // m/d/[yyyy]
                } else if ((date.length === 9) && (date.substr(1, 1) === '/'))
                {
                    monthPart = date.substr(0, 1);    // [m]/dd/yyyy
                    dayPart = date.substr(2, 2);      // m/[dd]/yyyy
                    yearPart = date.substr(5, 4);     // m/dd/[yyyy]
                } else if ((date.length === 9) && (date.substr(2, 1) === '/'))
                {
                    monthPart = date.substr(0, 2);    // [mm]/d/yyyy
                    dayPart = date.substr(3, 1);      // mm/[d]/yyyy
                    yearPart = date.substr(5, 4);     // mm/d/[yyyy]
                } else if (date.length === 10)
                {
                    monthPart = date.substr(0, 2);    // [mm]/dd/yyyy
                    dayPart = date.substr(3, 2);      // mm/[dd]/yyyy
                    yearPart = date.substr(6, 4);     // mm/dd/[yyyy]
                }
            } else if (userDateFormat == 'mm/dd/yy')
            {
                // Entered year must be 4 digits
                if (date.length == 8)
                {
                    monthPart = date.substr(0, 1);    // [m]/d/yy
                    dayPart = date.substr(2, 1);      // m/[d]/yy
                    yearPart = date.substr(4, 4);     // m/d/[yy]
                } else if ((date.length === 9) && (date.substr(1, 1) === '/'))
                {
                    monthPart = date.substr(0, 1);    // [m]/dd/yy
                    dayPart = date.substr(2, 2);      // m/[dd]/yy
                    yearPart = date.substr(5, 4);     // m/dd/[yy]
                } else if ((date.length === 9) && (date.substr(2, 1) === '/'))
                {
                    monthPart = date.substr(0, 2);    // [mm]/d/yy
                    dayPart = date.substr(3, 1);      // mm/[d]/yy
                    yearPart = date.substr(5, 4);     // mm/d/[yy]
                } else if (date.length === 10)
                {
                    monthPart = date.substr(0, 2);    // [mm]/dd/yy
                    dayPart = date.substr(3, 2);      // mm/[dd]/yy
                    yearPart = date.substr(6, 4);     // mm/dd/[yy]
                }
            } else
            { // userDateFormat === 'dd-mmm-yyyy'
                if (date.length === 10)
                {
                    dayPart = date.substr(0, 1);      // [d]-mmm-yyyy
                    monthPart = date.substr(2, 3);    // d-[mmm]-yyyy
                    yearPart = date.substr(6, 4);     // d-mmm-[yyyy]
                } else if (date.length === 11)
                {
                    dayPart = date.substr(0, 2);      // [dd]-mmm-yyyy
                    monthPart = date.substr(3, 3);    // dd-[mmm]-yyyy
                    yearPart = date.substr(7, 4);     // dd-mmm-[yyyy]
                }
            }

            if (dayPart > "")
            {
                if (!isNaN(parseInt(dayPart, 10)))
                {
                    if (parseInt(dayPart, 10) < 1 || parseInt(dayPart, 10) > 31)
                    {
                        dayPart = "";
                        monthPart = "";
                        yearPart = "";
                    }
                } else
                {
                    dayPart = "";
                    monthPart = "";
                    yearPart = "";
                }
            }

            if (dayPart > "")
            {
                var monthAbbreviations = this.monthAbbreviations;

                if (monthPart > "")
                {
                    if (!isNaN(parseInt(monthPart, 10)))
                    {
                        if (parseInt(monthPart, 10) > 0 && parseInt(monthPart, 10) < 13)
                        {
                            monthPart = monthAbbreviations[parseInt(monthPart, 10) - 1];
                        }
                    }
                }

                var validMonth = false;

                for (var index = 0; index < 12; index++)
                {
                    if (monthAbbreviations[index].toUpperCase() === monthPart.toUpperCase())
                    {
                        monthPart = monthAbbreviations[index];
                        validMonth = true;
                        break;
                    }
                }

                if (!validMonth)
                {
                    dayPart = "";
                    monthPart = "";
                    yearPart = "";
                }
            }

            if (dayPart > "")
            {
                if (isNaN(parseInt(yearPart, 10)))
                {
                    dayPart = "";
                    monthPart = "";
                    yearPart = "";
                }
            }

            if (dayPart > "")
            {
                dateObj.dayPart = dayPart;
                dateObj.monthPart = monthPart;
                dateObj.yearPart = yearPart;
            }

            return dateObj;
        },

        isValidMonthNumber: function (monthNumber)
        {
            var month = "00" + monthNumber;
            var monthNumbers = this.monthNumbers;
            var result = false;

            month = month.substr(month.length - 2, 2);

            for (var i = 0; i < 12; i++)
            {
                if (monthNumbers[i] === month)
                {
                    result = true;
                    break;
                }
            }

            return result;
        }
    }
})();
/* ------------------------------------------------------------
SECURITY.js
-------------------------------------------------------------*/
var IT_security = (function ()
{
    // Obtain dependencies of this module

    var removeTokenFromUrl = function (inputUrl)
    {
        var qsFinal, qsArray, qsStart, pageUrl;
        var i, queryString;

        qsStart = inputUrl.indexOf('?');
        if (qsStart != -1)
        {
            pageUrl = inputUrl.substring(0, qsStart);
            queryString = inputUrl.substring(qsStart + 1, inputUrl.length);
            qsFinal = pageUrl;

            qsArray = queryString.split('&');
            if (qsArray.length > 0) //indicates querystring exists
            {
                for (i = 0; i < qsArray.length; i++)
                {
                    if (qsArray[i].indexOf('CSRF_Token=') == -1)
                    {
                        if (qsFinal.indexOf('?') == -1)
                        {
                            qsFinal = qsFinal + '?' + qsArray[i];
                        }
                        else
                        {
                            qsFinal = qsFinal + '&' + qsArray[i];
                        }
                    }
                }
                return qsFinal;
            }
            else  //indicates no querystring values
            {
                return inputUrl;
            }
        } else
        {
            return inputUrl;
        }
    }
    var encryptString = function (inputString)
    {
        var trimmedInput = $.trim(inputString);

        if (trimmedInput.length === 0)
        {
            return "3424234234sr1";
        } else
        {
            var encVal, tmp, ch, pos, code;
            encVal = reverseString(trimmedInput);
            tmp = '';
            for (pos = 0; pos <= encVal.length - 1; pos++)
            {
                ch = encVal.substring(pos, (pos + 1));
                code = ch.charCodeAt(0);
                if (code.toString().length == 2)
                {
                    code = "7" + code.toString();
                } else if (code.toString().length == 2)
                {
                    code = "58" + code.toString();
                }
                code = Number(code);
                code = code + 87;
                code = reverseString(code);
                tmp = tmp + code.toString();
            }
            return reverseString(tmp);
        }
    }
    var reverseString = function (stringInput)
    {
        var strValFinal, arrString;

        if (typeof (stringInput) == "number")
        {
            strValFinal = stringInput + '';
        } else
        {
            strValFinal = stringInput;
        }

        arrString = strValFinal.split('').reverse();
        arrString = arrString.join('');

        return arrString;
    }

    var _createToken_AutoGen = function (url)
    {

        if (IT_dataFromAsp.GetCSRFSetting() === false)
        {
            return url;
        }

        var x, encryptedValue, value;
        var randOne, randTwo;
        var ascChar;
        var arrValue = [];
        var sessionId;

        url = removeTokenFromUrl(url);

        encryptedValue = "";

        randOne = Math.floor((Math.random() * 5) + 1);
        randTwo = Math.floor((Math.random() * 5) + 1);
        
        sessionId = IT_dataFromAsp.GetSessionID();

        if (sessionId.length === 0)
        {
            value = 'JS-IT-Fail';
        } else
        {
            value = 'JS-IT-' + sessionId;
        }

        for (x = 0; x <= value.length - 1; x++)
        {
            arrValue[x] = value.substring(x, x + 1);
            ascChar = arrValue[x].charCodeAt(0);

            if (x % 2 === 0)
            {
                arrValue[x] = String.fromCharCode(ascChar + randOne);
            } else
            {
                arrValue[x] = String.fromCharCode(ascChar + randTwo);
            }
        }

        for (x = 0; x <= value.length - 1; x++)
        {
            encryptedValue += arrValue[x];
        }

        encryptedValue = encryptString(encryptedValue);
        encryptedValue = randTwo.toString() + encryptedValue + randOne.toString();
        if (url.indexOf(".asp") !== -1)
        {
            if (url.slice(-4).toLowerCase() === ".asp")
            {
                return url + "?CSRF_Token=" + encryptedValue;
            } else
            {
                return url + "&CSRF_Token=" + encryptedValue;
            }
        }

        return url;
    };

    var createToken_AutoGenerate_Anchor = function (url)
    {
        var x, encryptedValue, value;
        var randOne, randTwo;
        var ascChar;
        var arrValue = [];
        var sessionId;

        url = removeTokenFromUrl(url);

        encryptedValue = "";

        randOne = Math.floor((Math.random() * 5) + 1);
        randTwo = Math.floor((Math.random() * 5) + 1);

        sessionId = IT_dataFromAsp.GetSessionID();

        if (sessionId.length === 0)
        {
            value = 'JS-IT-Fail';
        } else
        {
            value = 'JS-IT-' + sessionId;
        }

        for (x = 0; x <= value.length - 1; x++)
        {
            arrValue[x] = value.substring(x, x + 1);
            ascChar = arrValue[x].charCodeAt(0);

            if (x % 2 === 0)
            {
                arrValue[x] = String.fromCharCode(ascChar + randOne);
            } else
            {
                arrValue[x] = String.fromCharCode(ascChar + randTwo);
            }
        }

        for (x = 0; x <= value.length - 1; x++)
        {
            encryptedValue += arrValue[x];
        }

        encryptedValue = encryptString(encryptedValue);
        encryptedValue = randTwo.toString() + encryptedValue + randOne.toString();
        if (url.indexOf(".asp") !== -1)
        {
            if (url.slice(-4).toLowerCase() === ".asp")
            {
                return url + "?CSRF_Token=" + encryptedValue;
            } else
            {
                return url + "&CSRF_Token=" + encryptedValue;
            }
        }
        return url;
    };
    //Return the module value
    return {
        encryptValue: function (value)
        {
            return "a{" + btoa(value) + "}x";
        },

        createToken_AutoGen: _createToken_AutoGen,

        // Used to be called: sec_CreateToken_AutoGen_Anchor(URL, ID)
        createToken_AutoGen_Anchor: function (url)
        {

            if (IT_dataFromAsp.GetCSRFSetting() === false) { return url; }

            var x, encryptedValue, value;
            var randOne, randTwo;
            var ascChar;
            var arrValue = [];
            var sessionId;

            url = removeTokenFromUrl(url);

            encryptedValue = "";

            randOne = Math.floor((Math.random() * 5) + 1);
            randTwo = Math.floor((Math.random() * 5) + 1);

            sessionId = IT_dataFromAsp.GetSessionID();

            if (sessionId.length === 0)
            {
                value = 'JS-IT-Fail';
            } else
            {
                value = 'JS-IT-' + sessionId;
            }

            for (x = 0; x <= value.length - 1; x++)
            {
                arrValue[x] = value.substring(x, x + 1);
                ascChar = arrValue[x].charCodeAt(0);

                if (x % 2 === 0)
                {
                    arrValue[x] = String.fromCharCode(ascChar + randOne);
                } else
                {
                    arrValue[x] = String.fromCharCode(ascChar + randTwo);
                }
            }

            for (x = 0; x <= value.length - 1; x++)
            {
                encryptedValue += arrValue[x];
            }

            encryptedValue = encryptString(encryptedValue);
            encryptedValue = randTwo.toString() + encryptedValue + randOne.toString();
            if (url.indexOf(".asp") !== -1)
            {
                if (url.slice(-4).toLowerCase() === ".asp")
                {
                    return url + "?CSRF_Token=" + encryptedValue;
                } else
                {
                    return url + "&CSRF_Token=" + encryptedValue;
                }
            }
            return url;
        },

        createToken_AutoGen_Form: function ()
        {

            if (IT_dataFromAsp.GetCSRFSetting() === false) { return url; }

            var x, encryptedValue, value;
            var randOne, randTwo;
            var ascChar;
            var arrValue = [];
            var sessionId;

            encryptedValue = "";

            randOne = Math.floor((Math.random() * 5) + 1);
            randTwo = Math.floor((Math.random() * 5) + 1);

            sessionId = IT_dataFromAsp.GetSessionID();

            if (sessionId.length === 0)
            {
                value = 'JS-IT-Fail';
            } else
            {
                value = 'JS-IT-' + sessionId;
            }

            for (x = 0; x <= value.length - 1; x++)
            {
                arrValue[x] = value.substring(x, x + 1);
                ascChar = arrValue[x].charCodeAt(0);

                if (x % 2 === 0)
                {
                    arrValue[x] = String.fromCharCode(ascChar + randOne);
                } else
                {
                    arrValue[x] = String.fromCharCode(ascChar + randTwo);
                }
            }

            for (x = 0; x <= value.length - 1; x++)
            {
                encryptedValue += arrValue[x];
            }
            encryptedValue = encryptString(encryptedValue);
            encryptedValue = randTwo.toString() + encryptedValue + randOne.toString();
            return encryptedValue;

        },

        createToken_AutoGen_RTE: function (page, url)
        {

            if (IT_dataFromAsp.GetCSRFSetting() === false) { return url; }

            var x, encryptedValue, value;
            var randOne, randTwo;
            var ascChar;
            var arrValue = [];

            encryptedValue = "";

            randOne = Math.floor((Math.random() * 5) + 1);
            randTwo = Math.floor((Math.random() * 5) + 1);
            value = 'RTE-' + page;

            for (x = 0; x <= value.length - 1; x++)
            {
                arrValue[x] = value.substring(x, x + 1);
                ascChar = arrValue[x].charCodeAt(0);

                if (x % 2 === 0)
                {
                    arrValue[x] = String.fromCharCode(ascChar + randOne);
                } else
                {
                    arrValue[x] = String.fromCharCode(ascChar + randTwo);
                }
            }

            for (x = 0; x <= value.length - 1; x++)
            {
                encryptedValue += arrValue[x];
            }

            encryptedValue = encryptString(encryptedValue);
            encryptedValue = randTwo.toString() + encryptedValue + randOne.toString();
            if (url.indexOf(".asp") !== -1)
            {
                if (url.slice(-4).toLowerCase() === ".asp")
                {
                    return url + "?CSRF_Token=" + encryptedValue;
                } else
                {
                    return url + "&CSRF_Token=" + encryptedValue;
                }
            }
            return url;
        },

        createToken_WindowLocation: function (url)
        {
            window.location = _createToken_AutoGen(url);
        },

        createToken_OpenerLocation: function (url)
        {
            opener.location.href = _createToken_AutoGen(url);
        },

        createToken_LocationHREF: function (url)
        {
            location.href = _createToken_AutoGen(url);
        },

        createToken_WindowLocation_Anchor: function (url, id)
        {
            window.location = createToken_AutoGenerate_Anchor(url);
        },

        createToken_OpenerLocation_Anchor: function (url)
        {
            opener.location.href = createToken_AutoGenerate_Anchor(url);
        },

        createToken_LocationHREF_Anchor: function (url, id)
        {
            location.href = createToken_AutoGenerate_Anchor(url);
        },

        decryptString: function (stringInput)
        {
            var trimmedInput = $.trim(stringInput);
            if (trimmedInput.length === 0 || trimmedInput === "3424234234sr1" || trimmedInput === "202195")
            {
                return '';
            } else
            {
                var decVal, tmp, ch, pos, code;
                decVal = reverseString(trimmedInput);
                tmp = '';
                for (pos = 0; pos < decVal.length; pos + 3)
                {
                    code = decVal.substring(pos, (pos + 3));
                    code = reverseString(code);
                    code = Number(code);
                    code = code - 87;
                    code = code + '';
                    if (code.substring(0, 1) == '7')
                    {
                        code = code.substring(1, 3);
                    } else if (code.substring(0, 2) == '58')
                    {
                        code = code.substring(2, 3);
                    }
                    ch = String.fromCharCode(code);
                    tmp = tmp.toString() + ch.toString();
                }
                return tmp;
            }
        }
    };
})();
/* ------------------------------------------------------------
POPUPS.js
-------------------------------------------------------------*/
var IT_popups = (function ()
{

    return {
        open: function (options)
        {
            var url, windowSpecifications = "", newWindow;

            // Make sure an options object was passed in
            if (typeof options === "undefined")
            {
                throw "Missing parameter: {object} options";
            }

            // Make sure a URL was passed in
            if (typeof options.url === "undefined")
            {
                throw "The required URL option was not included in this function call.";
            } else
            {
                url = options.url;
            }

            // Establish default option values
            // -- Part of the window.open() specification
            var channelmode = IT_helpers.resolveUndefinedValue(options.channelmode, 0);
            var directories = IT_helpers.resolveUndefinedValue(options.directories, 1);
            var fullscreen = IT_helpers.resolveUndefinedValue(options.fullscreen, 0);
            var height = IT_helpers.resolveUndefinedValue(options.height, 200);
            var left = IT_helpers.resolveUndefinedValue(options.left, 50);
            var location = IT_helpers.resolveUndefinedValue(options.location, 0);
            var menubar = IT_helpers.resolveUndefinedValue(options.menubar, 0);
            var resizable = IT_helpers.resolveUndefinedValue(options.resizable, 1);
            var scrollbars = IT_helpers.resolveUndefinedValue(options.scrollbars, 1);
            var status = IT_helpers.resolveUndefinedValue(options.status, 0);
            var titlebar = IT_helpers.resolveUndefinedValue(options.titlebar, 1);
            var toolbar = IT_helpers.resolveUndefinedValue(options.toolbar, 0);
            var top = IT_helpers.resolveUndefinedValue(options.top, 20);
            var width = IT_helpers.resolveUndefinedValue(options.width, 200);
            var windowName = IT_helpers.resolveUndefinedValue(options.windowName, "");
            // -- IssueTrak security (URL-processing) options
            var shouldProcessUrlWithFunction = IT_helpers.resolveUndefinedValue(options.shouldProcessUrlWithFunction, true);
            var urlProcessingFunction = IT_helpers.resolveUndefinedValue(options.urlProcessingFunction, function (unprocessedUrl)
            {
                return IT_security.createToken_AutoGen(unprocessedUrl);
            });

            // Secure the URL if requested
            if (shouldProcessUrlWithFunction)
            {
                url = urlProcessingFunction(url);
            }

            // Assemble specifications for window
            windowSpecifications += "channelmode=" + channelmode;
            windowSpecifications += ", directories=" + directories;
            windowSpecifications += ", fullscreen=" + fullscreen;
            windowSpecifications += ", height=" + height;
            windowSpecifications += ", left=" + left;
            windowSpecifications += ", location=" + location;
            windowSpecifications += ", menubar=" + menubar;
            windowSpecifications += ", resizable=" + resizable;
            windowSpecifications += ", scrollbars=" + scrollbars;
            windowSpecifications += ", status=" + status;
            windowSpecifications += ", titlebar=" + titlebar;
            windowSpecifications += ", toolbar=" + toolbar;
            windowSpecifications += ", top=" + top;
            windowSpecifications += ", width=" + width;

            // Call the window API
            newWindow = window.open(url, windowName, windowSpecifications);

            return newWindow;
        }
    }
})();
/* ------------------------------------------------------------
Attachments.js
-------------------------------------------------------------*/
var IT_attachments = (function ()
{

    return {
        addEventHandler: function (obj, evt, handler)
        {
            if (obj.addEventListener)
            {
                // W3C method
                obj.addEventListener(evt, handler, false);
            } else if (obj.attachEvent)
            {
                // IE method.
                obj.attachEvent('on' + evt, handler);
            } else
            {
                // Old school method.
                obj['on' + evt] = handler;
            }
        },

        blockAttachment: function (id)
        {
            var formData = new FormData();
            formData.append("id", id);
            $.ajax({
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Iem/BlockIemAttachment',
                datatype: "json",
                contentType: false,
                processData: false,
                data: formData,
                success: function (response)
                {
                    alert(response);
                },
                error: function (response)
                {
                    alert(response);
                }
            });
        },

        cancel: function (e)
        {
            if (e.preventDefault) { e.preventDefault(); }
            return false;
        },

        createDragAndDropActions: function (userId, issueNbr)
        {
            var dataAttributeNameForDragDropStyles = "dragdropstyles";

            if (window.FileReader)
            {
                IT_attachments.addEventHandler(window, 'load', function ()
                {
                    $("[data-" + dataAttributeNameForDragDropStyles + "]").each(function (index, element)
                    {
                        var dragDropTarget = $(element);

                        dragDropTarget
                            .on("dragleave", function()
                            {
                                dragDropTarget.css(dragDropTarget.data(dataAttributeNameForDragDropStyles).originalStyle);
                            })
                            .on("dragover", function()
                            {
                                dragDropTarget.css(dragDropTarget.data(dataAttributeNameForDragDropStyles).dragCueStyle);
                            })
                            .on("dragenter dragover dragleave", function (event)
                            {
                                IT_attachments.cancel(event.originalEvent);
                            })
                            .on("drop dragDrop", function(event)
                            {
                                dragDropTarget.css(dragDropTarget.data(dataAttributeNameForDragDropStyles).originalStyle);

                                return IT_attachments.handleDrop(event.originalEvent, userId, issueNbr);
                            });
                    });
                    
                    IT_attachments.setBadgeAndAttachmentContent(userId, issueNbr);
                });
            } else
            {
                //Your browser does not support the HTML5 FileReader.
                $(document).ready(function ()
                {
                    $('#AttachmentDropZone').css('display', 'none');
                    $('#ManualAttachment').css('display', 'block');
                    $('#BackLink').remove();
                });
            }
        },

        deleteAttachmentClick: function (attachmentType, attachmentId, entityNbr)
        {
            if (confirm("Are you sure you want to delete this Attachment?"))
            {
                if (attachmentType == "issue" && IT_dataFromAsp.IsIssueLockdownEnabled())
                {
                    ld_getUserPassword(IT_attachments.deleteAttachmentAction(attachmentType, attachmentId, entityNbr));
                } else
                {
                    IT_attachments.deleteAttachmentAction(attachmentType, attachmentId, entityNbr);
                }
            }
        },

        deleteAttachmentAction: function (attachmentType, attachmentId, entityNbr)
        {
            var allowDeleteAttachmentOrBlock = false;
            if (attachmentType == "issue" && IT_dataFromAsp.IsIssueLockdownEnabled())
            {
                if (isLockdownPasswordValid)
                {

                    allowDeleteAttachmentOrBlock = true;
                    ld_ValidPasswordEntered();
                }
                else
                {
                    // Entered password is not valid.  Do not allow the action.          
                    ld_InvalidPasswordEntered(false);
                }
            }
            else
            {
                // We're deleting an attachment on something other than an Issue,
                // or Issue Lockdown isn't activated.  Allow the Delete Attachment.
                allowDeleteAttachmentOrBlock = true;
            }

            if (allowDeleteAttachmentOrBlock)
            {
                var PostPageArray = IT_attachments.getPostPageByType(attachmentType)
                if (attachmentType == "issue")
                {
                    $.get(IT_security.createToken_AutoGen(PostPageArray['page'] + '.asp'),
						{ AttachmentID: attachmentId, IssueNbr: entityNbr, DoRedirect: false },
						function (resp)
						{
						    if (resp.indexOf("Success") > -1)
						    {
						        IT_attachments.setBadgeAndAttachmentContent(IT_dataFromAsp.GetCurrentUserLogin(), entityNbr);
						    }
						});
                } else
                {
                    document.location.href = IT_security.createToken_AutoGen(PostPageArray['page'] + '.asp?AttachmentID=' + attachmentId + '&' + PostPageArray['id'] + '=' + entityNbr);
                }
            }
        },

        formatSize: function (size)
        {
            var UOM = " Bytes";
            if (size >= 1024) { UOM = " KB"; }
            if (size >= 1048576) { UOM = " MB"; }
            if (size >= 1073741824) { UOM = " GB"; }
            if (size >= 1099511627776) { UOM = " TB"; }
            switch (UOM)
            {
                case " KB":
                    size = (size / 1024).toFixed(1);
                    break;
                case " MB":
                    size = (size / 1048576).toFixed(1);
                    break;
                case " GB":
                    size = (size / 1073741824).toFixed(1);
                    break;
                case " TB":
                    size = (size / 1099511627776).toFixed(1);
                    break;
            }


            return " (" + size + UOM + ")";
        },

        getPostPageByType: function (attachmentType)
        {
            var PostPageArray = new Object();

            switch (attachmentType)
            {
                case "kb":
                    PostPageArray['page'] = "Kb_AttachmentsDelete_Process";
                    PostPageArray['id'] = "ArticleNbr";
                    break;
                case "quickpick":
                    PostPageArray['page'] = "Admin_QuickPick_AttachmentsDelete_Process";
                    PostPageArray['id'] = "QuickPickID";
                    break;
                case "recurring":
                    PostPageArray['page'] = "RecurringIssues_AttachmentsDelete_Process";
                    PostPageArray['id'] = "RecurringID";
                    break;
                case "issue":
                    PostPageArray['page'] = "Issue_AttachmentsDelete_Process";
                    PostPageArray['id'] = "IssueNbr";
                    break;
                case "user":
                    PostPageArray['page'] = "Admin_UserAttachmentsDelete_Process";
                    PostPageArray['id'] = "UserID";
                    break;
                case "org":
                    PostPageArray['page'] = "Admin_OrganizationAttachmentsDelete_Process";
                    PostPageArray['id'] = "OrganizationID";
                    break;
                case "proj":
                    PostPageArray['page'] = "Admin_ProjectAttachmentsDelete_Process";
                    PostPageArray['id'] = "ProjectID";
                    break;
                case "asset":
                    PostPageArray['page'] = "Inv_ItemAttachmentsDelete_Process";
                    PostPageArray['id'] = "ItemID";
                    break;
                case "sw":
                    PostPageArray['page'] = "Inv_SwAttachmentsDelete_Process";
                    PostPageArray['id'] = "InvSWID";
                    break;
                case "swpop":
                    PostPageArray['page'] = "Inv_PopSWAttachmentsDelete_Process";
                    PostPageArray['id'] = "SWID";
                    break;
                case "warranty":
                    PostPageArray['page'] = "Warr_AttachmentsDelete_Process";
                    PostPageArray['id'] = "ClaimID";
                    break;
                default:
                    PostPageArray['page'] = "";
                    PostPageArray['id'] = "";
                    break;
            }

            return PostPageArray;
        },

        handleDrop: function (e, userId, issueNbr)
        {
            e = e || window.event; // get window.event if e argument missing (in IE)   
            if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

            var dt = e.dataTransfer;
            var files = dt.files;
            for (var i = 0; i < files.length; i++)
            {
                var file = files[i];
                var reader = new FileReader();
                IT_attachments.addEventHandler(reader, 'loadend', function (e, file)
                {
                    IT_attachments.uploadSingleFile(file, userId, issueNbr);
                }.bindToEventHandler(file));
                reader.readAsDataURL(file);
            }

            return false;
        },

        getAttachmentList: function (issueNbr, onSuccess)
        {
            var formData = new FormData();
            formData.append("IssueNbr", issueNbr);
            $.ajax({
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Attachment/GetList',
                datatype: "json",
                contentType: false,
                processData: false,
                data: formData,
                success: function (responseMessage)
                {
                    //attachmentList = JSON.parse(resp);
                    onSuccess(responseMessage);
                },
                error: function (jqXhr)
                {
                    alert(jqXhr.responseText);
                }
            });
        },

        setBadgeAndAttachmentContent: function (userId, issueNbr)
        {
            IT_attachments.getAttachmentList(issueNbr,
                function (attachments)
                {
                    if (attachments.length > 0)
                    {
                        $('#badgeCount').show().html(attachments.length);
                        $('#AttachmentBadge').show();
                    }
                    else
                    {
                        $('#badgeCount').hide();
                        $('#AttachmentBadge').hide();
                    }

                    var attachmentHTML = '';
                    var systemDeleteSetting = IT_dataFromAsp.GetSystemDeleteSetting();
                    var isCanAdministrate = IT_dataFromAsp.IsCanAdministratePermissionEnabled();
                    var isCanDeleteIssues = IT_dataFromAsp.IsCanDeleteIssuesPermissionEnabled();
                    var isCanMaintain = IT_dataFromAsp.IsCanMaintainPermissionEnabled();
                    var canBlock = IT_dataFromAsp.IsIemEnabled() && isCanAdministrate;
                    var isSystemUserorPermittedUser = (systemDeleteSetting == "PermittedUsers" ||
                        (systemDeleteSetting == "SysAdminOnly" && IT_dataFromAsp.IsSystemAdministrator()));

                    for (var x = 0; x < attachments.length; x++)
                    {
                        var size = IT_attachments.formatSize(attachments[x]["FileSize"]);
                        var isCreatedBy = userId.toLowerCase() == attachments[x]["CreatedBy"].toLowerCase();
                        var canDelete = (isCanAdministrate || isCreatedBy || isCanDeleteIssues || isCanMaintain) &&
                            isSystemUserorPermittedUser;
                        var strDelete = '';
                        var strBlock = '';

                        if (canDelete)
                        {
                            strDelete =
                                '&nbsp;<a title=\'Delete Attachment\' href="javascript:void(0)"; onClick="IT_attachments.deleteAttachmentClick(\'issue\', \'' +
                                attachments[x]["AttachmentID"] +
                                '\', ' +
                                issueNbr +
                                ');"><small><i>delete</i></small></a>';
                        }

                        if (canBlock)
                        {
                            strBlock =
                                '&nbsp;<a title=\'Block in IEM\' href="javascript:void(0)"; onClick="IT_attachments.blockAttachment(\'' +
                                attachments[x]["AttachmentID"] +
                                '\');"><small><i>block</i></small></a>';
                        }

                        var filename = attachments[x]["OrigFileName"];

                        var filenameExtension = filename.substring(filename.lastIndexOf(".")).toLowerCase();

                        var isImageFile = filenameExtension === ".png" ||
                            filenameExtension === ".jpg" ||
                            filenameExtension === ".jpeg" ||
                            filenameExtension === ".tiff" ||
                            filenameExtension === ".gif";

                        var fileHref = "Attach_Iframe.asp?id=" +
                            attachments[x]["AttachmentID"] +
                            "&issuenbr=" +
                            issueNbr +
                            "&type=issue";

                        if (isImageFile)
                        {
                            attachmentHTML +=
                                "<a href='javascript:void(0);' onclick='IT_attachments.showImageAttachment(" +
                                attachments[x]["AttachmentID"] +
                                ", \"" +
                                userId +
                                "\");' title='View Image'>" +
                                attachments[x]["OrigFileName"] +
                                size +
                                "</a>" +
                                "<a href='" +
                                IT_security.createToken_AutoGen(fileHref) +
                                "' target='AttachIframe' id='a_10517' title='Download' style='width: 16px;'><span class='glyphicon glyphicon-download glyphicon-as-link' style='width: 16px;'>&nbsp;</span></a>" +
                                strDelete +
                                strBlock +
                                "<br>";
                        }
                        else
                        {
                            attachmentHTML +=
                                "<span style='font: 12px Verdana, Arial, sans-serif;'>" +
                                attachments[x]["OrigFileName"] +
                                size +
                                "</span>" +
                                "<a href='" +
                                IT_security.createToken_AutoGen(fileHref) +
                                "' target='AttachIframe' id='a_10517' title='Download' style='width: 16px;'><span class='glyphicon glyphicon-download glyphicon-as-link' style='width: 16px;'>&nbsp;</span></a>" +
                                strDelete +
                                strBlock +
                                "<br>";
                        }
                    }
                    $('#AttachmentList').html(attachmentHTML);
                });
        },

        showBlockedImageAttachment: function (attachmentId, userId)
        {
            attachmentDialog.SetContent('<iframe id="imagePreview" src="' + IT_dataFromAsp.GetApplicationUrl() + 'core/Iem/ViewAttachment?id=' + attachmentId + '&userID=' + userId + '" frameborder="0" style="width:99%;min-height:690px;margin:0 auto;"></iframe>');
            attachmentDialog.SetHeight(700);
            attachmentDialog.SetWidth(800);
            attachmentDialog.Open();
        },

        showImageAttachment: function (attachmentId, userId)
        {
            attachmentDialog.SetContent('<iframe id="imagePreview" src="' + IT_dataFromAsp.GetApplicationUrl() + 'core/Attachment/Preview?id=' + attachmentId + '&userID=' + userId + '" frameborder="0" style="width:99%;min-height:690px;margin:0 auto;"></iframe>');
            attachmentDialog.SetHeight(700);
            attachmentDialog.SetWidth(800);
            attachmentDialog.Open();
        },

        unblockAttachment: function (id)
        {
            var formData = new FormData();
            formData.append("id", id);
            $.ajax({
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Iem/UnblockIemAttachment',
                datatype: "json",
                contentType: false,
                processData: false,
                data: formData,
                success: function (resp)
                {
                    //alert(resp);
                    location.reload();
                },
                error: function (resp)
                {
                    alert(resp.responseText);
                }
            });
        },

        uploadFiles: function (userId, issueNbr)
        {
            var attachmentManualForm = $('#AttachmentManualForm');

            var postData = attachmentManualForm.serializeArray();
            var formURL = attachmentManualForm.attr("action");

            $.ajax(
			{
			    url: formURL,
			    type: "POST",
			    data: postData,
			    success: function (msg)
			    {
			        IT_attachments.setBadgeAndAttachmentContent(userId, issueNbr);
			    },
			    error: function (msg)
			    {
			        alert(msg);
			    }
			});
        },

        uploadSingleBlockedFile: function (file)
        {
            var formData = new FormData();
            formData.append("fileToUpload", file);
            $.ajax({
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Iem/Upload',
                datatype: "json",
                contentType: false,
                processData: false,
                data: formData,
                success: function (resp)
                {
                    var jsonObj = JSON.parse(resp);
                    if (jsonObj.IsStatusSuccess)
                    {
                        $('#confirmation_div').show();
                        $('#tdConfirmationMessage').html(jsonObj.StatusMessage)
                        $('#tdLoadingMessage').html('Refreshing Screen...')
                        location.reload();
                    } else
                    {
                        $('#loading_div').hide();
                        $('#confirmation_div').show();
                        $('#tdConfirmationMessage').html(jsonObj.StatusMessage)
                    }
                },
                error: function (resp)
                {
                    $('#loading_div').hide();
                    $('#confirmation_div').show();
                    $('#tdConfirmationMessage').html(jsonObj.StatusMessage)
                }
            });
        },

        uploadSingleFile: function (file, userId, issueNbr)
        {
            var formData = new FormData();
            formData.append("fileToUpload", file);
            formData.append("IssueNbr", issueNbr);
            formData.append("UserLogin", userId);
            $.ajax(
            {
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Attachment/Upload',
                datatype: "json",
                contentType: false,
                processData: false,
                data: formData,
                success: function (resp)
                {
                    var attachmentUploadMessage = $('#attachmentUploadMessage');

                    attachmentUploadMessage.empty();

                    if (resp.startsWith("Error:") === false)
                    {
                        IT_attachments.setBadgeAndAttachmentContent(userId, issueNbr);
                    }
                    else
                    {
                        attachmentUploadMessage.html('<span class="error" style="color:red;">' + resp + '</span>');
                    }
                },
                error: function (resp)
                {
                    alert(resp);
                }
            });
        }

    }
})();

/* ------------------------------------------------------------
IncomingEmail.js
-------------------------------------------------------------*/
var IT_incomingEmail = (function () {

    return {
        testMailboxConnection: function (
            mailboxId,
            protocol,
            mailServer, 
            useSsl, 
            sslPort, 
            accountId, 
            password, 
            exchangeVersion, 
            exchangeUseAutoDiscovery,
            exchangeDomain,
            exchangeServerUrl) {

            var formData = new FormData();
            formData.append("mailboxId", mailboxId);
            formData.append("protocol", protocol);
            formData.append("mailServer", mailServer);
            formData.append("useSsl", useSsl);
            formData.append("sslPort", sslPort);
            formData.append("accountId", accountId);
            formData.append("password", password);
            formData.append("exchangeVersion", exchangeVersion);
            formData.append("exchangeUseAutoDiscovery", exchangeUseAutoDiscovery);
            formData.append("exchangeDomain", exchangeDomain);
            formData.append("exchangeServerUrl", exchangeServerUrl);

            $.ajax({
                type: "POST",
                url: IT_dataFromAsp.GetApplicationUrl() + 'core/Iem/TestMailboxConnection',
                datatype: "json",
                async: true,
                contentType: false,
                processData: false,
                data: formData,
                success: function (response)
                {
                    if (response.IsSuccessfulResult === true)
                    {
                        $("#TestConnectionResponseStatus").text("Connection Successful").css("color", "green");
                        $("#TestConnectionResponseMessage").empty();
                    }
                    else
                    {
                        $("#TestConnectionResponseStatus").text("Connection Failed").css("color", "red");
                        $("#TestConnectionResponseMessage").text(response.Message).css("color", "red");
                    }
                    
                },
                error: function (response) {
                    $("#TestConnectionResponseStatus").text("Error Encountered").css("color", "red");
                    $("#TestConnectionResponseMessage").text(response.Message).css("color", "red");
                }
            });
        }
    }
})();
Function.prototype.bindToEventHandler = function bindToEventHandler()
{
    var handler = this;
    var boundParameters = Array.prototype.slice.call(arguments);
    //create closure
    return function (e)
    {
        e = e || window.event; // get window.event if e argument missing (in IE)   
        boundParameters.unshift(e);
        handler.apply(this, boundParameters);
    }
};
