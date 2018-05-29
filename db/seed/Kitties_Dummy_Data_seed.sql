INSERT INTO kitties
(kitty_number, owner_id, sale_status, breed_status, bio, img_url, likes, generation, cooldown, fur, highlight_colour, pattern, accent_colour, base_colour, eye_shape, eye_colour, sire, matron)
VALUES (
    '1',
    '1',
    false,
    false,
    'Sup. My name is Kitty #1. My entire life has been dedicated towards a single pursuit: for an Olympic swimming pool of warm milk. I really don''t understand why everyone thinks I got my knees done, but it''s not true. I''m all natural. I''m not a photographer, but I can picture me and you together.',
    'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/777226.svg',
    0,
    '0',
    'Swift',
    'ragdoll',
    'springcrocus',
    'amur',
    'kittencream',
    'aquamarine',
    'thicccbrowz',
    'sapphire',
    '697782',
    '749531'
)
RETURNING *;
