INSERT INTO kitties
(users_id, handle, platform, entity_img, list_anchor, association_1, association_2, association_3, association_4, association_5, association_6, association_7, association_8, association_9, association_10)
VALUES ($1, $2, $3, $4, $5, $6, $8, $9, $10, $11, $12, $13, $14, $15)
RETURNING *;

INSERT INTO handles2 
(users_id, handle, platform, entity_img, list_anchor, association_1, association_2, association_3, association_4, association_5, association_6, association_7, association_8, association_9, association_10)
VALUES (2, 'VitalikButerin', 'reddit', 'https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_normal.jpg', 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19)
RETURNING *;