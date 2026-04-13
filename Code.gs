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

function doGet(e) {
  try {
    var cache = CacheService.getScriptCache();
    var cached = cache.get("migration_stats");
    if (cached != null) {
      return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var data = sheet.getDataRange().getValues();
    
    var headers = data[0];
    var colorIndex = headers.indexOf("移民の色");
    if (colorIndex === -1) colorIndex = 6;

    var stats = {
      total: 0,
      Gold: 0,
      Purple: 0,
      Blue: 0,
      White: 0
    };
    
    if (data.length > 1) {
      stats.total = data.length - 1;
      for (var i = 1; i < data.length; i++) {
        var color = data[i][colorIndex];
        if (stats.hasOwnProperty(color)) {
          stats[color]++;
        }
      }
    }
    
    var result = JSON.stringify(stats);
    cache.put("migration_stats", result, 120);
    
    return ContentService.createTextOutput(result)
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Japanese Headers:
    // タイムスタンプ, 言語, ゲーム内名前, 現在のサーバー, 現在の同盟, 英雄総戦力 (M), 移民の色, 移民スコア, 基地レベル, 備考
    var headers = ["タイムスタンプ", "言語", "ゲーム内名前", "現在のサーバー", "現在の同盟", "英雄総戦力 (M)", "移民の色", "移民スコア", "基地レベル", "備考"];
    
    // Header check (if sheet is empty)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    sheet.appendRow([
      data.timestamp,
      data.language,
      data.nickname,
      data.server,
      data.currentAlliance,
      data.heroPower,
      data.migrationColor, // This value is still "Gold", "Purple", etc. from the form
      data.migrationPoints,
      data.hqLevel,
      data.remarks
    ]);
    
    var result = { status: 'success' };
    // Clear cache to force refresh on next gauge update
    CacheService.getScriptCache().remove("migration_stats");

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    var result = { status: 'error', message: error.toString() };
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


