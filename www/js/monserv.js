
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
        var serv = iisWebObj.serv;
        var featObjListStr = iisWebObj.featObjListStr;
        var featObjList = JSON.parse(featObjListStr);

        $("#accheader").html("Mon (" + serv + ") Feature");

        $("#myid").html(" "); //clear the field
        for (i = 0; i < featObjList.length; i += 2) {
            var featName = featObjList[i];
            var featCnt = featObjList[i + 1];
            if (featName === "") {
                continue;
            }
            var objId = i + 10;
            var htmlName = '<div class="ui-grid-a">';
            htmlName += '<div class="ui-block-a" style="width:5%">' + featCnt + '</div>';
            htmlName += '<div class="ui-block-b">' + featName + '</div>';
            htmlName += '</div>';
            $("#myid").append('<li id="' + objId + '"><a href="#">' + htmlName + '</a></li>');
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
            var feat = featObjList[accId - 10];
            var iisWebObj = {'custObjStr': custObjStr, 'servObjListStr': servObjListStr, 'serv': serv, 'feat': feat};
            window.localStorage.setItem(iisWebSession, JSON.stringify(iisWebObj));
            window.location.href = "monservfeat_1.html";
        });



    }
};
app.initialize();



