INSERT INTO transactions
(transaction_type, sire_id, matron_id, child_id, seller_id, buyer_id, initial_timestamp, final_timestamp, initial_price, final_price)
VALUES ($1, $2, $3, $4, $5, $6, $8, $9, $10)
RETURNING *;
