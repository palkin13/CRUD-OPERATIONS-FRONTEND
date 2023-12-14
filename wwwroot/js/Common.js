var AjaxManager = {
    GETAPI: function (serviceUrl, successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            url: serviceUrl,
            async: false,
            cache: false,
            dataType: "json",
            success: successCallback,
            error: errorCallback
        });
    },

    POSTAPI: function (serviceUrl, jsonParams, successCallback, errorCallback) {
        jQuery.ajax({
            url: serviceUrl,
            type: "POST",
            data: jsonParams,
            contentType: "application/json",
            success: successCallback,
            error: errorCallback
        });
    },

    PUTAPI: function (serviceUrl, jsonParams, successCallback, errorCallback) {
        jQuery.ajax({
            url: serviceUrl,
            type: "PUT",
            data: jsonParams,
            contentType: "application/json",
            success: successCallback,
            error: errorCallback
        });
    },

    DELETEAPI: function (serviceUrl, successCallback, errorCallback) {
        jQuery.ajax({
            url: serviceUrl,
            type: "DELETE",
            contentType: "application/json",
            success: successCallback,
            error: errorCallback
        });
    }

}