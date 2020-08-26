const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE todo (
                id SERIAL PRIMARY KEY,
                text VARCHAR(256) NOT NULL
            );            
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });