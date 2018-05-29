CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    wallet_address TEXT,
    img TEXT,
    nickname TEXT,
    email TEXT,
    marketing_updates TEXT,
    disconnect_metamask BOOLEAN
)

