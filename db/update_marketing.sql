UPDATE settings
SET marketing = $2
WHERE id = $1
returning *;