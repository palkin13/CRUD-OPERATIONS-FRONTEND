var CrudSummaryManager = {
    GetCrud: function () {
        var objCrud = " ";
        var serviceUrl = "https://localhost:44302/api/CrudOperation/ReadRecord";

        AjaxManager.GETAPI(serviceUrl, onSuccess, onFailed);

        function onSuccess(jsonData) {
            console.log(jsonData.readRecordData);
            objCrud = jsonData.readRecordData;
        }

        function onFailed(error) {
            alert(error.statusText);

        }
        return objCrud;


    },

    GetCrudById: function (id) {
        var objCrud = " ";
        var serviceUrl = "https://localhost:44302/api/CrudOperation/GetRecord/" +id;

        AjaxManager.GETAPI(serviceUrl, onSuccess, onFailed);

        function onSuccess(jsonData) {
            console.log(jsonData.getRecordData);
            objCrud = jsonData.getRecordData;
        }

        function onFailed(error) {
            alert(error.statusText);

        }
        return objCrud;


    }
};

var CrudSummaryHelper = {
    InitCrudSummary: function () {
        CrudSummaryHelper.LoadCrud();
    },
    LoadCrud: function () {
        $("#Table tbody tr").remove();
        var crudList = CrudSummaryManager.GetCrud();
        $.each(crudList, function (i, crud) {
            var rows =
                "<tr>" +
                "<td>" + crud.id + "</td>" +
                "<td>" + crud.userName + "</td>" +
                "<td>" + crud.age + "</td>" +
                "<td><button class='btn btn-info' onClick='CrudSummaryHelper.FillCrudInfo(" + crud.id + ")'>View</button></td>"
                "</tr>"
            $('#Table tbody').append(rows);


        });
    },

    FillCrudInfo: function (id) {
        var crudInfo = CrudSummaryManager.GetCrudById(id);

        $("#btnSave").text("Update");
        $("#divDetail").show();
        $("#divSummary").hide();

        $("#hdnCrudId").val(crudInfo[0].id);
        $("#txtUserName").val(crudInfo[0].userName);
        $("#txtAge").val(crudInfo[0].age);
    }
}