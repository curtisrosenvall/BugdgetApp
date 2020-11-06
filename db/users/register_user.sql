INSERT INTO money_user
(username, password)
VALUES
($1, $2)

-- RETURNING user_id, username;