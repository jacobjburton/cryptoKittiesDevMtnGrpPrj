DELETE FROM settings
WHERE id = $1
returning *;