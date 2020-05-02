
var app = {

// Application Constructor
    initialize: function () {

        $(document).ready(function () {

        });

        var iisWebSession = "iisWebSession";
        iisurl = iisurl.replace("abc", "");
        iisurl = iisurl.replace("abc", "");


        var iisWebObjStr = window.localStorage.getItem(iisWebSession);
        var iisWebObj = JSON.parse(iisWebObjStr);
        console.log(iisWebObj);

        var custObjStr = iisWebObj.custObjStr;
        if (typeof custObjStr === null) {
            window.location.href = "index.html";
        }
        var custObj = JSON.parse(custObjStr);
        var servObjListStr = iisWebObj.servObjListStr;
        var servObjList = JSON.parse(servObjListStr);
        var resultMonObjListStr = iisWebObj.resultMonObjListStr;
        var resultMonObjList = JSON.parse(resultMonObjListStr);
        if (resultMonObjList !== null) {
            $("#myid").html(" "); //clear the field
            for (i = 0; i < resultMonObjList.length; i++) {
                var monObj = resultMonObjList[i];

                var objId = i + 10;
                var htmlSt = '<div class="ui-grid-b">';
                htmlSt += '<div class="ui-block-a" style="width:10%" >' + monObj.uid + '</div>';
                var statusSt = 'started';
                if (monObj.status === 5) {
                    statusSt = 'completed';
                }
                htmlSt += '<div class="ui-block-b" style="width:15%" >' + statusSt + '</div>';
                htmlSt += '<div class="ui-block-b">' + monObj.ret + '</div>';
                htmlSt += '</div>';
                var htmlName = '<li id="' + objId + '"><a href="#">' + htmlSt;
                htmlName += '</a></li>';
                $("#myid").append(htmlName);
            }
        } else {
            $("#myid").html("No report running ");
        }



        $("ul[id*=myid] li").click(function () {
//            alert($(this).html()); // gets innerHTML of clicked li
//            alert($(this).text()); // gets text contents of clicked li
            var objId = $(this).attr('id');
            console.log(objId);
            if (objId === 0) {
//                alert(accId);
                return;
            }
            var monObj = resultMonObjList[objId - 10];
            $("#detailid").html('');
            var prodDataStr = monObj.data;
            if (typeof prodDataStr !== 'undefined') {
                var prodData = JSON.parse(prodDataStr);

                var repList = prodData.reportList;
                for (j = 0; j < repList.length; j++) {
                    var report = repList[j];
                    $("#detailid").append('<li>' + report + '</li>');
                }

            }
            window.location.href = "#page-detail";

        });

        $("#stopbtn").click(function () {
            var monCmd = 'stop';
            var iisWebObj = {'custObjStr': custObjStr, 'servObjListStr': servObjListStr, 'resultMonObjListStr': resultMonObjListStr, 'monCmd': monCmd};
            window.localStorage.setItem(iisWebSession, JSON.stringify(iisWebObj));
            window.location.href = "monmonitor_2.html";
            return;
        });

        $("#startbtn").click(function () {
            var monCmd = 'start';
            var iisWebObj = {'custObjStr': custObjStr, 'servObjListStr': servObjListStr, 'monCmd': monCmd};
            window.localStorage.setItem(iisWebSession, JSON.stringify(iisWebObj));
            window.location.href = "monmonitor_2.html";
            return;
        });


    }
};
app.initialize();



