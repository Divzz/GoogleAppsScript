function IMPORTJSON(url) {
  //var url="https://test.com"
  var response = UrlFetchApp.fetch(url)
  //Logger.log(response)
  var json = JSON.parse(response.getContentText());

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  if(typeof(json) === "object"){

    //Fill Header
    var header = [];
    for(var obj in json[0]){
        header.push(obj)
    }
    sheet.appendRow(header);

    //Fill Contents 
    var contents = [];
    for(i in json){
      tempObj = json[i];
      contents = [];
      for(var obj in tempObj){
        contents.push(tempObj[obj]);
      }
      sheet.appendRow(contents);
    }
  }
}