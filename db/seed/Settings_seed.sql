CREATE TABLE IF NOT EXISTS settings (
    id SERIAL PRIMARY KEY,
    email TEXT,
    nickname TEXT,
    marketing BOOLEAN,
    wallet BOOLEAN
)