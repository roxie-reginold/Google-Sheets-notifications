function sendNotification() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = ss.getActiveCell().getA1Notation();
  var row = sheet.getActiveRange().getRow();
  console.log(row);
  var cellvalue = ss.getActiveCell().getValue().toString();
  var recipients = ["renia002@gmail.com", "roxie.reginold1@gmail.com", "roxie.reginold@ryerson.ca", "renia.reginold@ryerson.ca"];
  var message = '';
  if(cell.indexOf('A') != -1){ 
    console.log(cell.indexOf('A'));
    message = sheet.getRange('A'+ sheet.getActiveCell().getRowIndex()).getValue();
    var subject = 'Update to '+sheet.getName() + ': ' + message;
    var body = sheet.getName() + ' has been updated. Visit ' + ss.getUrl() + ' to view the changes on row: «' + row + '». For message: « ' + message + ' »';
    
    for (let i = 0; i < recipients.length; i++){
        MailApp.sendEmail(recipients[i], subject, body);
    }

  }
  
};
