// Google Apps Script - FlameOn Inventory email receiver
const TO = "zohaibhassan.atd@gmail.com";

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const att = [Utilities.newBlob("\ufeff" + d.csv, "text/csv", d.base + ".csv")];
  if (d.pdf) att.push(Utilities.newBlob(Utilities.base64Decode(d.pdf), "application/pdf", d.base + ".pdf"));
  const i = d.info;
  MailApp.sendEmail({
    to: TO,
    subject: "PCA End Count - " + i.br + " - " + i.date,
    htmlBody: "<b>Branch:</b> " + i.br + "<br><b>Manager:</b> " + i.mgr +
      "<br><b>Date:</b> " + i.date + "<br><b>Start:</b> " + i.start +
      "<br><b>End:</b> " + i.end + "<br><b>Total Filling Time:</b> " + i.dur,
    attachments: att
  });
  return ContentService.createTextOutput("ok");
}
