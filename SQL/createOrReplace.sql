-- SQL - Create if does not exist and Replace Into

-- If the table doesn't exist this statement will be ignored
-- Otherwise it will be executed
CREATE TABLE IF NOT EXISTS User (
    id_user INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
);

-- If there is a entry with id 1, it will be updated
-- Otherwise it will be created
REPLACE INTO User VALUES (1, "Fabio Felipe", 30);

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/108094070873961/?type=3&theater
* Instagram: https://www.instagram.com/p/B_IL8D4A-Br/
* Twitter: https://twitter.com/arch_code/status/1251553478742335488/photo/1
*/