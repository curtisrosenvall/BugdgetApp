CREATE TABLE money_user (
user_id SERIAL PRIMARY KEY,
username varchar(100),
password varchar(300)
);

CREATE TABLE transaction (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES money_user(user_id),
amount NUMERIC,
description VARCHAR(200)
);

