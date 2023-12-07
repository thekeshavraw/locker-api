
DELIMITER $ $ CREATE PROCEDURE GetAllUsers() BEGIN
SELECT
     *
FROM
     users;

END $ $ DELIMITER;



DROP procedure IF EXISTS ValidateAndInsertUser;
DELIMITER $$
CREATE PROCEDURE ValidateAndInsertUser(IN pfirstname varchar(51), IN plastname varchar(51), IN pemail varchar(51), IN pmobile varchar(21), IN pavatar longtext,IN ppassword varchar(251),IN psource varchar(51), OUT userId int)
BEGIN
	IF EXISTS(SELECT * FROM users WHERE email = pemail)
	THEN
		SET userId = -1;
	ELSE 
		INSERT INTO users(firstname, lastname, email, phone, avatar, password, source) values (pfirstname, plastname , pemail, pmobile, pavatar, ppassword, psource);
		SET userId = LAST_INSERT_ID();
    	END IF;
	SELECT userId AS id;
END$$
DELIMITER ;


CALL ValidateAndInsertUser('Abhishek', 'Kumar' , 'abhishek.yashyap@gmail.com', '9529745533', '' , @id);


-- // for user login verification 

DROP procedure IF EXISTS ValidateAndGetUser;
DELIMITER $$
CREATE PROCEDURE ValidateAndGetUser(IN pemail varchar(51), IN ppassword varchar(251) ,IN psource varchar(51) , OUT userId int)
BEGIN
	SET userId = NULL;
	SELECT id INTO userId FROM users WHERE email = pemail AND password = ppassword;
	IF(userId IS NULL)
	THEN
	SET userId = -1;
	ELSE
	SET userId = userId;
	END IF;
	SELECT userId AS id;
END$$	
DELIMITER ;


CALL ValidateAndGetUser('abhishek.yashyap@gmail.com', 'abhishek', @id);


DROP PROCEDURE IF EXISTS GetAllCategories;
DELIMITER $$ 
CREATE PROCEDURE GetAllCategories() 
BEGIN
	SELECT * FROM cateogry;
END $$ 
DELIMITER ;


DROP PROCEDURE IF EXISTS ItemDetails;
DELIMITER $$ 
CREATE PROCEDURE ItemDetails() 
BEGIN
	SELECT * FROM itemdetails;
END $$ 
DELIMITER ;


DROP PROCEDURE IF EXISTS Items;
DELIMITER $$ 
CREATE PROCEDURE Items() 
BEGIN
	SELECT * FROM items;
END $$ 
DELIMITER ;



DROP procedure IF EXISTS InsertItem;
DELIMITER $$
CREATE PROCEDURE InsertItem(IN pcateogryId int(30), IN ptitle varchar(100), IN pdescription varchar(100), IN pstatus tinyint(4), OUT itemId int)
	BEGIN
		INSERT INTO items(categoryId, title, description, status) values (pcateogryId, ptitle , pdescription, pstatus);
		SET itemId = LAST_INSERT_ID();
	SELECT itemId AS id;
END$$
DELIMITER ;


DROP procedure IF EXISTS InsertItemDetails;
DELIMITER $$
CREATE PROCEDURE InsertItemDetails(IN pitemId int(20), IN pname varchar(100), IN paccountNo varchar(100), IN pifscCode varchar(100), IN puser varchar(100) , IN psecret varchar(100), IN pdescription varchar(100),IN pstatus tinyint(4), OUT itemDetailsId int)
	BEGIN
		INSERT INTO itemdetails( itemId , name , accountNo , ifscCode , user , secret,description , status) values (pitemId, pname , paccountNo, pifscCode,puser,psecret,pdescription,pstatus);
		SET itemDetailsId = LAST_INSERT_ID();
	SELECT itemDetailsId AS id;
END$$
DELIMITER ;


DROP procedure IF EXISTS InsertCategory;
DELIMITER $$
CREATE PROCEDURE InsertCategory(IN pname varchar(100), IN pstatus tinyint(4), OUT categoryID int)
	BEGIN
		INSERT INTO cateogry( name , status) values (pname,pstatus); 
		SET categoryID = LAST_INSERT_ID();
	SELECT categoryID AS id;
END$$
DELIMITER ;
