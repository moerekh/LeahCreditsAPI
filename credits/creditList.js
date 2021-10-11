const https = require('https');

const get_credits = (url) => {
    let my_data; 
    
    return new Promise(resolve => {
        https
            .get(url, res => {
                let data = [];

                res.on('data', chunk => {
                    data.push(chunk);
                });

                res.on('end', () => {
                    my_data = JSON.parse(Buffer.concat(data).toString()); 
                    resolve(my_data);
                });
            })
            .on('error', err => {
                console.log(`Error:  ${err.message}`);
            })
            .end();
    });
}

exports.get_credits = get_credits;