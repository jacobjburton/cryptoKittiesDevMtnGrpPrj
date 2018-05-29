INSERT INTO transactions
(wallet_address, img, nickname, email, marketing_updates, disconnect_metamask)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;
