const { Router } = require('express');


const client = require('../client');
client.connect();

// eslint-disable-next-line new-cap
module.exports = Router()
  .get('/', (req, res, next) => {
    return client.query(`
                SELECT * from todos
            `,
            )
                .catch(err => {
                    res.status(500).json({
                        error: err.message || err
                    });
                });
  })
  .post('/', (req, res, next) => {
    return client.query(`
                INSERT INTO todos (text)
                                VALUES ($1)
                                RETURNING *;
                            `,
            [req.body]
            )
                .catch(err => {
                    res.status(500).json({
                        error: err.message || err
                    });
                });
  })
  .delete('/', (req, res, next) => {
    return client.query(`
                DELETE FROM todos WHERE (todo_id)
                                VALUES ($1)
                                RETURNING *;
                            `,
            [req.body]
            )
                .catch(err => {
                    res.status(500).json({
                        error: err.message || err
                    });
                });
});