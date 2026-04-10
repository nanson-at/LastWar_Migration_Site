/**
 * GOOGLE APPS SCRIPT FOR LAST WAR MIGRATION FORM
 * 
 * 1. Open a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete existing code and paste this script.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select type 'Web App'.
 * 6. Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'.
 * 7. Copy the Web App URL and paste it into script.js.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Header check (if sheet is empty)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Language", "Game Nickname", "Current Server", "Current Alliance", "Hero Power", "Migration Color", "Migration Points", "HQ Level", "Remarks"]);
    }
    
    sheet.appendRow([
      data.timestamp,
      data.language,
      data.nickname,
      data.server,
      data.currentAlliance,
      data.heroPower,
      data.migrationColor,
      data.migrationPoints,
      data.hqLevel,
      data.remarks
    ]);
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
