const VERSION = 'v2-sans-prix';

const SHEET_NAME = 'Commandes';

const HEADERS = [
  'horodatage',
  'commande_id',
  'nom',
  'pupitre',
  'produit_slug',
  'produit_nom',
  'quantite',
];

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const order = JSON.parse(e.postData.contents);
    const lines = Array.isArray(order.lines) ? order.lines : [];

    if (lines.length === 0) {
      return ContentService.createTextOutput('no lines');
    }

    const timestamp = new Date();
    const rows = lines.map(function (line) {
      return [
        timestamp,
        String(order.id || ''),
        String(order.customer || ''),
        String(order.section || ''),
        String(line.slug || ''),
        String(line.name || ''),
        Number(line.quantity) || 0,
      ];
    });

    const sheet = getSheet();
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);

    return ContentService.createTextOutput('ok');
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput('error');
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'Les Zurbamateurs — endpoint de commandes. POST only. ' + VERSION + ' — ' + HEADERS.join(','),
  );
}
