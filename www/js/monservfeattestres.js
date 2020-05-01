
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
        var cmd = iisWebObj.cmd;
        var resultListStr = iisWebObj.resultListStr;
        var resultList = JSON.parse(resultListStr);

        var featObj = featIDObjList[0];
        for (i = 0; i < featIDObjList.length; i += 2) {
            featObj = featIDObjList[i];
            if (featObjId = featObj.id) {
                break;
            }
        }

        $("#accheader").html("Testing output");

        var htmlName = "";
        $("#myid").html(" "); //clear the field
        if (typeof resultList !== 'undefined') {
            for (j = 0; j < resultList.length; j ++) {
                $("#myid").append('<li >' + resultList[j] + '</li>');
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
            var cmd = cmdList[accId - 10 + 1];
            cmd = cmd.toLowerCase();

            var iisWebObj = {'custObjStr': custObjStr, 'servObjListStr': servObjListStr, 'serv': serv
                , 'featIDObjListStr': featIDObjListStr, 'featObjId': featObjId, 'cmd': cmd};

            window.localStorage.setItem(iisWebSession, JSON.stringify(iisWebObj));
            window.location.href = "monServFeat_1.html";
        }
        );

    }
};
app.initialize();



