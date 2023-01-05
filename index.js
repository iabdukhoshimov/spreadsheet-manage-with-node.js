const { google } = require('googleapis');

;
(async function() {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client })

    const spreadsheetId = "1fJ5htPSqVeVGTbVw8u57mbGLw-aZ9QYghnneGxbh53o";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });


    // selecting rows
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Лист1",
    });


    // adding rows
    const data = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Лист1!A:C",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                ['2', 'Madiyor', 'Abdukhoshimov']
            ],
        },
    });

})()