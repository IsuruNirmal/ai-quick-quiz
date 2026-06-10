const SHEET_NAME = "Responses";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = JSON.parse(e.parameter.payload || "{}");
    const sheet = getResponseSheet_();
    const responses = Array.isArray(payload.responses) ? payload.responses : [];
    const row = [
      new Date(),
      sanitize_(payload.name),
      Number(payload.score) || 0,
      Number(payload.totalQuestions) || 5,
      Number(payload.durationSeconds) || 0
    ];

    for (let i = 0; i < 5; i += 1) {
      const response = responses[i] || {};
      row.push(
        sanitize_(response.question),
        sanitize_(response.selectedAnswer),
        sanitize_(response.correctAnswer),
        response.isCorrect === true ? "Yes" : "No"
      );
    }

    sheet.appendRow(row);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function getResponseSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    const headers = ["Timestamp", "Participant Name", "Score", "Total Questions", "Duration (seconds)"];
    for (let i = 1; i <= 5; i += 1) {
      headers.push(`Question ${i}`, `Selected Answer ${i}`, `Correct Answer ${i}`, `Correct ${i}`);
    }
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground("#7557f6")
      .setFontColor("#ffffff")
      .setFontWeight("bold");
    sheet.autoResizeColumns(1, headers.length);
  }

  return sheet;
}

function sanitize_(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}
