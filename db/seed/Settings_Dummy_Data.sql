INSERT INTO settings
(email, nickname, marketing, wallet)
VALUES (
    'chandlerhaueter@gmail.com',
    'chandler_best_nickname',
    'marketing_yes_please',
    true
)
RETURNING *;
