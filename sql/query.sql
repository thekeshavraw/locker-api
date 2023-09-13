
DELIMITER $ $ CREATE PROCEDURE GetAllUsers() BEGIN
SELECT
     *
FROM
     users;

END $ $ DELIMITER;



DROP procedure IF EXISTS ValidateAndInsertUser();
DELIMITER $$
CREATE PROCEDURE ValidateAndInsertUser(IN pfirstname varchar(51), IN plastname varchar(51), IN pemail Varchar(51), IN pmobile Varchar(21), IN pavatar longtext, OUT userId int)
BEGIN
	IF EXISTS(SELECT * FROM users WHERE email = pemail)
	THEN
		SET userId = -1;
	ELSE 
		INSERT INTO users(firstname, lastname, email, phone, avatar) values (Pfirstname, plastname , pemail, pmobile, pavatar);
		SET userId = LAST_INSERT_ID();
    END IF;
	SELECT userId AS id;
END$$

DELIMITER ;

CALL ValidateAndInsertUser('Abhishek', 'Kumar' , 'abhishek.yashyap@gmail.com', '9529745533', '' , @id);