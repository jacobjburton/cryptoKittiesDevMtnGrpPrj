CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    transaction_type TEXT, // 'sell', 'breed private', 'breed public', 'buy', 'birth';
    sire_id TEXT, // kitties.kitty_number
    matron_id TEXT, // kitties.kitty_number
    child_id TEXT, // kitties.kitty_number
    seller_id TEXT, // users.wallet_address
    buyer_id TEXT, // users.wallet_address
    initial_timestamp TEXT, // onclick generated
    final_timestamp TEXT, // (onclick - duration)
    initial_price INT, // ETH
    final_price INT // ETH
)