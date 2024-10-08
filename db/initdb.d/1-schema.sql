-- 데이터베이스 스키마 생성
CREATE DATABASE IF NOT EXISTS sparkle_note;

-- 생성한 데이터베이스 사용
USE sparkle_note;

-- User 테이블 생성
CREATE TABLE IF NOT EXISTS `User` (  -- 테이블 이름에 대소문자 일관성 유지
                                      user_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                      username VARCHAR(255),
                                      name VARCHAR(255),
                                      email VARCHAR(255) NOT NULL,
                                      role VARCHAR(50) NOT NULL, -- EnumType.STRING으로 저장되는 role
                                      socialType VARCHAR(50) NOT NULL, -- EnumType.STRING으로 저장되는 socialType
                                      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Roll 테이블 생성
CREATE TABLE IF NOT EXISTS `Roll` (  -- 대소문자 일관성 유지
                                      roll_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                      roll_name VARCHAR(255) NOT NULL,
                                      class_code INT NOT NULL,
                                      url VARCHAR(255) NOT NULL,
                                      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                      user_id BIGINT NOT NULL,
                                      CONSTRAINT FK_user_roll FOREIGN KEY (user_id) REFERENCES `User`(user_id) ON DELETE CASCADE
);

-- Paper 테이블 생성
CREATE TABLE IF NOT EXISTS `Paper` (  -- 대소문자 일관성 유지
                                       paper_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                       content VARCHAR(255),
                                       sticker VARCHAR(255),
                                       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                       roll_id BIGINT NOT NULL,
                                       student_id BIGINT NOT NULL,
                                       CONSTRAINT FK_roll_paper FOREIGN KEY (roll_id) REFERENCES `Roll`(roll_id) ON DELETE CASCADE,
                                       CONSTRAINT FK_user_paper FOREIGN KEY (student_id) REFERENCES `User`(user_id) ON DELETE CASCADE
);

-- Sticker 테이블 생성
CREATE TABLE IF NOT EXISTS `Sticker` (  -- 대소문자 일관성 유지
                                         sticker_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                         sticker_name VARCHAR(255),
                                         paper_id BIGINT NOT NULL,
                                         CONSTRAINT FK_paper_sticker FOREIGN KEY (paper_id) REFERENCES `Paper`(paper_id) ON DELETE CASCADE
);
