INSERT INTO transactions
(transaction_type, sire_id, matron_id, child_id, seller_id, buyer_id, initial_timestamp, final_timestamp, initial_price, final_price)
VALUES (
    'birth',
    '697782',
    '749531',
    '1000000',
    '0x4541e1ea15fab6920b6f0da0c31da0fea74e3535',
    '0x9E9994E61ecbae77B61645Acea845C498412a58F',
    'start', // find the web3js
    'end', // find the web3js
    '5',
    '3'
)
RETURNING *;
