  $(document).ready(function(){
                  $("#button").click(function(){
        /*var selected = $("#Select").val();
                      alert(selected);*/
 var text = '{"deals":[' +
'{"dealId":"1","dealName":"MSC2007-TOP25","familyName":"Queens Crossing","familyId":"1","BRSCusip": "3128Q43H0","NoteId":"1"},' +
'{"dealId":"1","dealName":"MSC2007-TOP25","familyName":"Imperial Chase","familyId":"2","BRSCusip": "3128Q43H0","NoteId":"2"},' +
'{"dealId":"1","dealName":"MSC2007-TOP25","familyName":"Courtyard_Portland","familyId":"3","BRSCusip": "3128Q43H0","NoteId":"3"},'+
 '{"dealId":"1","dealName":"MSC2007-TOP25","familyName":"Fairplain Plaza","familyId":"4","BRSCusip": "3128Q43H0","NoteId":"4"}]}';

var obj = JSON.parse(text);
        var tr;
        for (var i = 0; i < obj.deals.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + obj.deals[i].dealId + "</td>");
            tr.append("<td>" + obj.deals[i].dealName + "</td>");
            tr.append("<td>" + obj.deals[i].familyName + "</td>");
            tr.append("<td>" + obj.deals[i].familyId + "</td>");
            tr.append("<td>" + obj.deals[i].BRSCusip + "</td>");
            tr.append("<td>" + obj.deals[i].NoteId + "</td>");
            $("#table").append(tr);
        }
            var popup = window.open("", "", "width=500,height=400,resizeable,scrollbars"),
            table = document.getElementById("table");
            popup.document.write(table.outerHTML);
            popup.document.close();
            if (window.focus) 
                popup.focus();
    });
});
    
