const fs = require('fs');
const https = require('https');

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/res?date=202202&json';

https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        fs.writeFileSync('data.json', data);
        console.log('Дані завантажено у data.json');
    });

}).on('error', (err) => {
    console.error('Помилка:', err);
});
