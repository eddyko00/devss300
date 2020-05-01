
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
        if (custObjStr === null) {
            window.location.href = "index.html";
        }
        var custObj = JSON.parse(custObjStr);
        var servObjListStr = iisWebObj.servObjListStr;
        var servObjList = JSON.parse(servObjListStr);
        var serv = iisWebObj.serv;
        var featIDObjListStr = iisWebObj.featIDObjListStr;
        var featIDObjList = JSON.parse(featIDObjListStr);
        var featObjId = iisWebObj.featObjId;
        var featObj = featIDObjList[0];
        for (i = 0; i < featIDObjList.length; i += 2) {
            featObj = featIDObjList[i];
            if (featObjId = featObj.id) {
                break;
            }
        }

        $("#accheader").html("Real time Testing");
        var prodDataStr = featObj.data;
        var prodData = JSON.parse(prodDataStr);
        var cmdList = prodData.cmd;
        var htmlName = "";
        $("#myid").html(" "); //clear the field
        if (typeof cmdList !== 'undefined') {
            for (j = 0; j < cmdList.length; j += 2) {
                var cmdDesc = cmdList[j];
                var cmdOper = cmdList[j + 1];
                var objId = i + 10;
                var htmlName = 'Test Operation:' + cmdDesc ;

                $("#myid").append('<li id="' + objId + ' value ="' + cmdOper + '"><a href="#">' + htmlName + '</a></li>');
            }
        }

        $("ul[id*=myid] li").click(function () {
//            alert($(this).html()); // gets innerHTML of clicked li
//            alert($(this).text()); // gets text contents of clicked li
            var accId = $(this).attr('id');
            console.log(accId);
            if (accId === 0) {
//                alert(accId);
                return;
            }

            var featObj = featIDObjList[accId - 10];
            var prodDataStr = featObj.data;
            var prodData = JSON.parse(prodDataStr);
            var cmdList = prodData.cmd;
            var htmlName = "";
            $("#detailid").html(" ");
            if (typeof cmdList !== 'undefined') {
                for (j = 0; j < cmdList.length; j += 2) {
                    var cmdDesc = cmdList[j];
                    var cmdOper = cmdList[j + 1];
                    var htmlName = '<button id="cmd' + j + '" value="' + accId + '" ><a href="#">Test Operation:' + cmdDesc + '</a></button>';
//                    var htmlName = '<li id="' + j + '" value="' + accId + '" oper="' + cmdOper + '" ><a href="#">Test Operation:' + cmdDesc + '</a></li>';
///                    var htmlName = '<button id="' + j + '" value="' + accId + '" oper="' + cmdOper + '" ><a href="#">Test Operation:' + cmdDesc + '</a></button>';

                    $("#detailid").append(htmlName);
                }
            }


            htmlName = "<br>Raw Data:";
            var featObjStr = JSON.stringify(featObj, null, '\t');
            var result = featObjStr.split('^').join('"');
            result = result.split('\\').join('');
            htmlName += result;
            $("#detailid").append('<li ></li>' + htmlName);
            window.location.href = "#page-detail";
        });
        $("#rtbtn").click(function () {
            var iisWebObj = {'custObjStr': custObjStr, 'servObjListStr': servObjListStr};
            window.localStorage.setItem(iisWebSession, JSON.stringify(iisWebObj));
            window.location.href = "splunkanalyize.html";
            return;
        });
    }
};
app.initialize();



