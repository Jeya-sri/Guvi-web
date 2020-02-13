
START TRANSACTION;




CREATE TABLE `Userdb`.`User` ( 
  `id` INT(10) NOT NULL ,
  `name` VARCHAR(30) NOT NULL ,
  `email` VARCHAR(50) NOT NULL , 
  `password` VARCHAR(30) NOT NULL ,
  `phone` VARCHAR(10) NOT NULL ,
  `gender` VARCHAR(8) NOT NULL ,
  `dob` VARCHAR(30) NOT NULL ,
  `age` VARCHAR(2) NOT NULL ,
  `college` VARCHAR(60) NOT NULL ,
  `dept` VARCHAR(30) NOT NULL ,
  `ai` VARCHAR(40) NOT NULL ,
  PRIMARY KEY (`id`),
  UNIQUE `email` (`email`)
  ) ENGINE = InnoDB;

ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

