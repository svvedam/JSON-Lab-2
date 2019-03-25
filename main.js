var container=document.getElementById("result");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
ourRequest.onload= function(){
    var htmlString ="";
    var ourData = JSON.parse(ourRequest.responseText);
    htmlString+="<p>"+ " Movie information "+"</p>"+"<ul>";
    for(i=0;i<ourData.data.length;i++){
        htmlString+="<li>" + ourData.data[i][10]+ "</li>"+ "<li>" + ourData.data[i][9]+ "</li>"+"<li>" + ourData.data[i][12]+ "</li>"+"<br>";
    }
    htmlString+="</ul>"+"</p>";
    container.insertAdjacentHTML('beforeend', htmlString);
    console.log(ourData);
};
ourRequest.send();
