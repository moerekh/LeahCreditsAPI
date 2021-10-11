const https = require('https');

class MyJob {
    constructor(my_title, artist, project_title, producer, director, year){
        this.my_title = my_title,
        this.artist = artist,
        this.project_title = project_title,
        this.producer = producer,
        this.director = director,
        this.year = year
    }
}

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
    
        // method: 'GET',
        // mode: 'cors',
        // headers: new https.headers({
        //     "Content-Type": "application/json"
        // }) 
    // .then((data) => {
    //     my_data = data.values.map((d) => new MyJob(d[0], d[1], d[2], d[3], d[4], d[5]))
    //     .filter(j => {
    //         if (Number(j.year) > 0) {
    //             return true;
    //         }
    //         return false;
    //     })
    //     .sort((j1, j2) => {
    //         // requested job title order
    //         const titles = [
    //             "EXECUTIVE PRODUCER",
    //             "PRODUCER",
    //             "DIRECTOR'S REP",
    //             "PRODUCTION SUPERVISOR",
    //             "PRODUCTION MANAGER",
    //             "PRODUCTION COORDINATOR",
    //             "ASSISTANT TO PRODUCER",
    //             "ASSISTANT TO DIRECTOR",
    //             "CONTENT MANAGER"
    //         ]
    //         .map((t) => t.toLowerCase());

    //         return titles.indexOf(j1.my_title.toLowerCase()) - titles.indexOf(j2.my_title.toLowerCase()) || j2.year - j1.year
    //     })
    // });

    // return my_data;
}

exports.get_credits = get_credits;