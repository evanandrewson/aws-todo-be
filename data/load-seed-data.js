const client = require('../lib/client');

const fakeData = ['clean', 'cook', 'code']

client.connect()
    .then(() => {
        return Promise.all(
            fakeData.map(item => {
                return client.query(`
                    INSERT INTO todo (text)
                    VALUES ($1)
                    RETURNING *;
                `,
                [item])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });