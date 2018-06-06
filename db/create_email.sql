INSERT INTO settings
(email, nickname, marketing, wallet)
VALUES ($1, $2, $3, $4)
RETURNING *;