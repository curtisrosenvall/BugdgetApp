INSERT INTO transaction(user_id, amount, description) 
VALUES ($1, $2, $3)
RETURNING id, user_id, amount, description;