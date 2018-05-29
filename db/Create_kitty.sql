INSERT INTO kitties
(kitty_number, owner_id, sale_status, breed_status, bio, img_url, likes, generation, cooldown, fur, highlight_colour, pattern, accent_colour, base_colour, eye_shape, eye_colour, sire, matron)
VALUES ($1, $2, $3, $4, $5, $6, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
RETURNING *;