-- Active: 1698914213463@@127.0.0.1@3306@database_se104
DROP DATABASE IF EXISTS DATABASE_SE104;

CREATE DATABASE DATABASE_SE104;

USE DATABASE_SE104;

CREATE TABLE Admin
(
    admin_id			int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    admin_nickname		varchar(50)		NOT NULL    UNIQUE,
    admin_pass			varchar(100)	NOT NULL,
    PRIMARY KEY (admin_id)
);

CREATE TABLE AuthUser
(
    au_user_id          int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    au_user_first_name  varchar(50)	NOT NULL,
    au_user_last_name   varchar(50)	NOT NULL,
    au_user_email       varchar(50)		NOT NULL	UNIQUE,
    au_user_pass        varchar(100)	NOT NULL,
    au_user_avt_url     varchar(50),
    au_user_sex         varchar(6),
    au_user_birthday    date,
    bank_default_id     int,
    debit_default_id    int,
    PRIMARY KEY (au_user_id)
);

CREATE TABLE BankCard
(
    bank_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    bank_name			varchar(50)	NOT NULL,
    bank_branch			varchar(50)	NOT NULL,
    bank_num			varchar(16)		NOT NULL,
    bank_name_pers		varchar(50)	NOT NULL,
    au_user_id			int             ,
    PRIMARY KEY (bank_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id)
);

CREATE TABLE DebitCard
(
    debit_id			int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    debit_num			varchar(16)		NOT NULL,
    debit_end_date		datetime		NOT NULL,
    debit_CCV			varchar(10)		NOT NULL,
    debit_name			varchar(50)	NOT NULL,
    debit_address		varchar(50)	NOT NULL,
    debit_postal		varchar(10)		NOT NULL,
    au_user_id			int            ,
    PRIMARY KEY (debit_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id)
);

ALTER TABLE AuthUser
ADD CONSTRAINT FK_bank_id
FOREIGN KEY (bank_default_id)
REFERENCES BankCard(bank_id);

ALTER TABLE AuthUser
ADD CONSTRAINT FK_debit_id
FOREIGN KEY (debit_default_id)
REFERENCES DebitCard(debit_id);

CREATE TABLE Province
(
    prov_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    prov_name			varchar(100)	NOT NULL    UNIQUE,
    prov_url			varchar(50),
    PRIMARY KEY (prov_id)
);

CREATE TABLE City
(
    city_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    city_name			varchar(50)	NOT NULL    UNIQUE,
    city_url			varchar(50),
    prov_id				int		NOT NULL,
    PRIMARY KEY (city_id),
    FOREIGN KEY (prov_id) REFERENCES Province(prov_id)
);

CREATE TABLE Accommodation
(
    acco_id             int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    acco_type           varchar(50)	NOT NULL,
    acco_star           int				NOT NULL,
    acco_tiny_img_url   varchar(50)    ,
    acco_name           varchar(100)	NOT NULL,
    acco_logan          varchar(50)   ,
    acco_detail         text           ,
    acco_exac_location  varchar(50)   ,
    city_id             int            ,
    prov_id             int		        NOT NULL,
    acco_location_link  varchar(100),
    PRIMARY KEY (acco_id),
    FOREIGN KEY (city_id) REFERENCES City(city_id),
    FOREIGN KEY (prov_id) REFERENCES Province(prov_id)
);

CREATE TABLE Feature
(
    fea_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    fea_name			varchar(50)	NOT NULL    UNIQUE,
    PRIMARY KEY (fea_id)
);

CREATE TABLE AccoFea
(
    fea_id				int	    NOT NULL,
    acco_id				int	    NOT NULL,
    PRIMARY KEY (fea_id, acco_id),
	FOREIGN KEY (fea_id) REFERENCES Feature(fea_id),
    FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

CREATE TABLE AccoImg
(
    acco_id				int NOT NULL,
    acco_img_url		varchar(50)	NOT NULL,
    PRIMARY KEY (acco_id, acco_img_url),
	FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

CREATE TABLE RoomType
(
    room_id             int		     AUTO_INCREMENT  NOT NULL    UNIQUE,
    room_name           varchar(100) NOT NULL,
    room_class          varchar(50)  NOT NULL,
    room_type           varchar(10)  NOT NULL,
    room_max_adult      int          NOT NULL,
    room_max_child      int          NOT NULL,
    room_single_bed     int          NOT NULL,
    room_double_bed     int          NOT NULL,
    room_total          int          NOT NULL,
    room_details_img_url	varchar(50),
    room_area           decimal(10, 2),
    room_cost           decimal(10, 2)  NOT NULL,
    room_discount       decimal(10, 2),
    room_date_end_discount	date,
    room_avg_rating     float       DEFAULT 0,
    room_count_rating   int          DEFAULT 0,
    acco_id             int          NOT NULL,
    PRIMARY KEY (room_id),
    FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

CREATE TABLE Extension
(
    exte_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    exte_name			varchar(50)    NOT NULL   UNIQUE,
    PRIMARY KEY (exte_id)
);

CREATE TABLE RoomExte
(
    room_id				int	    NOT NULL,
    exte_id				int	    NOT NULL,
    PRIMARY KEY (room_id, exte_id),
    FOREIGN KEY (room_id) REFERENCES  RoomType(room_id),
    FOREIGN KEY (exte_id) REFERENCES Extension(exte_id)
);

CREATE TABLE RoomTypeImg
(
    room_id				int	    NOT NULL,
    room_type_image_url varchar(50)     NOT NULL,
    PRIMARY KEY (room_id, room_type_image_url),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);

CREATE TABLE PayingMethod
(
    pay_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    pay_name			varchar(50)	NOT NULL    UNIQUE,
    PRIMARY KEY (pay_id)
);

CREATE TABLE ReasonCancel
(
    rea_id				int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    rea_description		varchar(50)	NOT NULL    UNIQUE,
    PRIMARY KEY (rea_id)
);

CREATE TABLE Booking
(
    book_id             int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    acco_id             int             NOT NULL,
    au_user_id          int             NOT NULL,
    book_datetime       datetime        NOT NULL,
    book_start_datetime datetime        NOT NULL,
    book_end_datetime   datetime        NOT NULL,
    book_num_adult      int             NOT NULL,
    book_num_child      int             NOT NULL,
    book_cost_before    float           NOT NULL    DEFAULT 0,
    book_cost_after     float           NOT NULL    DEFAULT 0,
    book_first_name     varchar(50)     NOT NULL,
    book_last_name      varchar(50)     NOT NULL,
    book_email          varchar(50)     NOT NULL,
    book_phone          char(10)        NOT NULL,
    pay_id              int             NOT NULL,
    book_note           text,
    cancel_cost         float           NOT NULL,
    book_status         int             NOT NULL, -- 1: Cancel, 0: Pending, 1: Success
    book_is_paid        int             NOT NULL, -- 0: unpayed, 1: payed
    rea_id              int,
    PRIMARY KEY (book_id),
    FOREIGN KEY (pay_id) REFERENCES PayingMethod(pay_id),
    FOREIGN KEY (rea_id) REFERENCES ReasonCancel(rea_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id),
    FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

-- 1: Cancel, 0: Pending, 1: Success
-- 0: unpayed, 1: payed

CREATE TABLE BookingDetail
(
    book_id				    int	    NOT NULL,
    room_id				    int	    NOT NULL,
    book_room_cost_before	float	NOT NULL,
    book_room_cost_after	float	NOT NULL,
    book_num_room		    int		NOT NULL,
    PRIMARY KEY (book_id, room_id),
    FOREIGN KEY (book_id) REFERENCES Booking(book_id),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);

ALTER TABLE `DATABASE_SE104`.`bookingdetail` ADD INDEX `book_id` (`book_id`);

CREATE TABLE Rating
(
    au_user_id			int             NOT NULL,
    room_id				int             NOT NULL,
    rating_datetime		datetime        NOT NULL,
    rating_context		text           ,
    rating_point		decimal(10, 1)  NOT NULL,
    PRIMARY KEY (au_user_id, room_id, rating_datetime),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);

CREATE TABLE Notification
(
    noti_id	    		int		        AUTO_INCREMENT  NOT NULL    UNIQUE,
    noti_type			varchar(50)	NOT NULL,
    noti_title			varchar(50)	NOT NULL,
    noti_subtitle		text,
    noti_datetime		datetime,
    noti_content		text		    NOT NULL,
    noti_dest_url		varchar(50),
    PRIMARY KEY (noti_id)
);

CREATE TABLE UserNoti
(
    au_user_id			int	NOT NULL,
    noti_id				int	NOT NULL,
    usernoti_is_read	int	NOT NULL    DEFAULT 0,
    PRIMARY KEY (au_user_id, noti_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id),
    FOREIGN KEY (noti_id) REFERENCES Notification(noti_id)
);