INSERT INTO transactions
(wallet_address, img, nickname, email, marketing_updates, disconnect_metamask)
VALUES (
    '0x4541e1ea15fab6920b6f0da0c31da0fea74e3535',
    'https://www.cryptokitties.co/profile/profile-18.png',
    'the_dread_pirate_roberts',
    'chandlerhaueter@gmail.com',
    true,
    false
)
RETURNING *;