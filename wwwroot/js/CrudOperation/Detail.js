var CrudDetailManager = {
    SaveCrud: function () {
        var crudObj = CrudDetailHelper.CreateCrudObj();
        var objCrud = JSON.stringify(crudObj);
       

        if (parseInt(crudObj.Id) == 0) {
            var serviceUrl = "https://localhost:44302/api/CrudOperation/CreateRecord";
            AjaxManager.POSTAPI(serviceUrl, objCrud, onSuccess, onFailed)
        }
        else {
            var serviceUrl = "https://localhost:44302/api/CrudOperation/UpdateRecordById/" + crudObj.Id;
            AjaxManager.PUTAPI(serviceUrl, objCrud, onSuccess, onFailed)
        }

        function onFailed(error) {
            alert(error.statusText);
        }
        function onSuccess(jsonData)
        {
            console.log(jsonData);
            if (jsonData.Id !== 0)
            {
                $("#divDetail").hide();
                $("#divSummary").show();
                CrudSummaryHelper.LoadCrud();
                alert("Saved Successfully");
            }
            else
            {
                alert(jsonData);
            }
           
        }
      

       
    },
    DeleteCrud: function () {
        var crudObj = CrudDetailHelper.CreateCrudObj();

        if (parseInt(crudObj.Id) > 0) {
            var serviceUrl = "https://localhost:44302/api/CrudOperation/DeleteRecord/" + crudObj.Id;
            AjaxManager.DELETEAPI(serviceUrl , onSuccess, onFailed)
        }
       
        function onFailed(error) {
            alert(error.statusText);
        }
        function onSuccess(jsonData) {
            console.log(jsonData);
            if (jsonData.Id !== 0) {
                $("#divDetail").hide();
                $("#divSummary").show();
                CrudSummaryHelper.LoadCrud();
                alert("Deleted Successfully");
            }
            else {
                alert(jsonData);
            }

        }



    }
};


var CrudDetailHelper = {
    InitCrudDetail: function() {
        $("#btnAdd").click(function () {
            $("#btnSave").text("Save");
            $("#divDetail").show();
            $("#divSummary").hide();
            CrudDetailHelper.ClearForms();
        });
        $("#btnSave").click(function () {
            CrudDetailManager.SaveCrud();
        });
        $("#btnClose").click(function () {
            $("#divDetail").hide();
            $("#divSummary").show();
        });
        $("#btnClear").click(function () {
            CrudDetailHelper.ClearForms();
        });
        $("#btnDelete").click(function () {
            CrudDetailManager.DeleteCrud();
        });
    },
    CreateCrudObj: function () {
        var obj = new Object();
        obj.Id = $("#hdnCrudId").val();
        obj.UserName = $("#txtUserName").val();
        obj.Age = $("#txtAge").val();
        return obj;
    },

    ClearForms() {
        $("#hdnCrudId").val("0");
        $("#txtUserName").val("");
        $("#txtAge").val("");
    }
}

    