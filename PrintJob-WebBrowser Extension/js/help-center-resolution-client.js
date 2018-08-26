// NOTE: This script assumes JQuery is available in scope.

$(document)
    .ready(function()
        {
            // Configuration
            var resolutionHost = "hcrs.issuetrak.com";

            var currentPage = $("#topBar_HelpLink_span").attr("data-currentPage");

            var requestUrl = "//" + resolutionHost + "/resolved-url?aspfile=" + currentPage;

            function setNewHelpIconHref(newHref) {
                $("#topBar_HelpLink").attr("href", newHref);
            }

            $.get(
                    requestUrl
                )
                .done(function (data) {
                    setNewHelpIconHref(data);
                });
        }
    );
