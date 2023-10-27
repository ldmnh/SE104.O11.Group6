USE DATABASE_IE104
GO

INSERT INTO Admin (admin_id, admin_nickname, admin_pass)
VALUES ('adm001', 'admin1', 'password1'),
       ('adm002', 'admin2', 'password2'),
       ('adm003', 'admin3', 'password3');
GO

INSERT INTO AuthUser (au_user_id, au_user_first_name, au_user_last_name, au_user_email, au_user_pass)
VALUES ('usr001', 'John', 'Doe', 'john.doe@example.com', 'password1'),
       ('usr002', 'Jane', 'Smith', 'jane.smith@example.com', 'password2'),
       ('usr003', 'Mike', 'Johnson', 'mike.johnson@example.com', 'password3');
GO

INSERT INTO BankCard (bank_id, bank_name, bank_brach, bank_num, bank_name_pers, au_user_id)
VALUES ('bnk001', 'Bank A', 'Branch A', '1111222233334444', 'John Doe', 'usr001'),
       ('bnk002', 'Bank B', 'Branch B', '5555222233334444', 'John Doe_', 'usr001'),
       ('bnk003', 'Bank B', 'Branch B', '5555666677778888', 'Jane Smith', 'user002'),
GO

INSERT INTO DebitCard (debit_id, debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
VALUES ('deb001', '1111222233334444', '2023-12-31 23:59:59', '123', 'John Doe', '123 Main Street', '12345', 'user001'),
       ('deb004', '9999111111112222', '2025-03-31 23:59:59', '789', 'Mike Johnson', '789 Oak Street', '54321', 'user003');
       ('deb005', '9999888811112222', '2025-03-31 23:59:59', '789', 'Mike Johnson', '789 Oak Street', '54321', 'user003');
GO

INSERT INTO Province (prov_id, prov_name, prov_url)
VALUES ('pro001', 'Hồ Chí Minh', 'Ho+Chi+Minh+City'),
       ('pro002', 'Hà Nội', 'Hanoi'),
       ('pro003', 'Đà Nẵng', 'Da+Nang'),
       ('pro004', 'Hải Phòng', 'Haiphong'),
       ('pro005', 'Cần Thơ', 'Can+Tho');
       ('pro006', 'Bà Rịu - Vũng Tàu', 'Ba+Ria+-+Vung+Tau');
GO

INSERT INTO City (city_id, city_name, prov_id)
VALUES ('cty001', 'Thành phố Hồ Chí Minh', 'prov001'),
       ('cty003', 'Thành phố Đà Nẵng', 'prov003'),
       ('cty004', 'Thành phố Hải Phòng', 'prov004'),
       ('cty005', 'Thành phố Cần Thơ', 'prov005');
       ('cty006', 'Thành phố Vũng Tàu', 'prov006');
GO

INSERT INTO Accommodation (acco_id, acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id)
VALUES ('acc001', 'hotel', 4, 'hotel001.jpg', 'Khách sạn Mộng mơ', 'Luxury Accommodation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '123 Main Street', 'city001', 'prov001'),
       ('acc002', 'resort', 5, 'resort001.jpg', 'Resort Lò vi Sóng', 'Experience Paradise', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road', NULL, 'prov002'),
       ('acc003', 'resort', 5, 'resort002.jpg', 'Resort Bình Yên', 'Experience Paradise', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road', 'city006', 'prov006'),
       ('acc004', 'guest_house', 2, 'guesthouse001.jpg', 'Guest House C', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '789 Mountain View', NULL, 'prov003');
GO

INSERT INTO Feature (fea_id, fea_name)
VALUES 
    ('fea001', 'Miễn phí hủy'),
    ('fea002', 'Không cần thanh toán trước'),
    ('fea003', 'Giáp biển');
GO

INSERT INTO AccoFea (fea_id, acco_id)
VALUES 
    ('fea001', 'acc001'),
    ('fea001', 'acc002'),
    ('fea002', 'acc001'),
    ('fea002', 'acc004'),
    ('fea003', 'acc001');
    ('fea003', 'acc002'),
    ('fea003', 'acc003'),
    ('fea003', 'acc004');
GO

INSERT INTO AccoImg (acco_id, acco_img_url)
VALUES 
    ('acco001', 'acc_img_1.jpg'),
    ('acco001', 'acc_img_2.jpg'),
    ('acco001', 'acc_img_3.jpg'),
    ('acco001', 'acc_img_4.jpg'),
    ('acco001', 'acc_img_5.jpg'),
    ('acco002', 'acc_img_6.jpg'),
    ('acco002', 'acc_img_7.jpg'),
    ('acco002', 'acc_img_8.jpg'),
    ('acco003', 'acc_img_9.jpg'),
    ('acco003', 'acc_img_10.jpg');

INSERT INTO RoomType (room_id, room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_sum_rating, acco_id)
VALUES 
    ('roo001', 'Standard', 'Single', 1, 0, 1, 0, 10, 'room01.jpg', 25.5, 100.0, NULL, NULL, 0, 'acc001'),
    ('roo002', 'Deluxe', 'Double', 2, 1, 0, 1, 5, 'room02.jpg', 35.0, 200.0, 0.1, '2023-01-31', 0, 'acc001'),
    ('roo003', 'Suite', 'Family', 2, 2, 1, 2, 3, 'room03.jpg', 45.2, 300.0, NULL, NULL, 0, 'acc002'),
    ('roo004', 'Standard', 'Single', 1, 0, 1, 0, 8, 'room04.jpg', 30.0, 120.0, 0.05, '2023-02-28', 0, 'acc003'),
    ('roo005', 'Superior', 'Double', 2, 1, 0, 1, 6, 'room05.jpg', 28.5, 180.0, NULL, NULL, 0, 'acc004'),
    ('roo006', 'Suite', 'Family', 2, 2, 1, 2, 4, 'room06.jpg', 50.0, 350.0, 0.15, '2023-03-31', 0, 'acc003'),
    ('roo007', 'Standard', 'Single', 1, 0, 1, 0, 12, 'room07.jpg', 32.0, 150.0, NULL, NULL, 0, 'acc002'),
    ('roo008', 'Deluxe', 'Double', 2, 1, 0, 1, 7, 'room08.jpg', 38.0, 220.0, 0.2, '2023-04-30', 0, 'acc001'),
    ('roo009', 'Suite', 'Family', 2, 2, 1, 2, 5, 'room09.jpg', 48.7, 320.0, NULL, NULL, 0, 'acc002'),
    ('roo010', 'Standard', 'Single', 1, 0, 1, 0, 9, 'room10.jpg', 29.8, 110.0, 0.1, '2023-05-31', 0, 'acc004');
GO

INSERT INTO Extension (exte_id, exte_name)
VALUES ('ext001', 'Buffet sáng'),
       ('ext002', 'Wifi'),
       ('ext003', 'Thuốc lá'),
       ('ext004', 'Thú cưng'),
GO

INSERT INTO RoomExte (room_id, exte_id)
VALUES 
    ('roo001', 'ext001'),
    ('roo001', 'ext002'),
    ('roo002', 'ext001'),
    ('roo003', 'ext003'),
    ('roo004', 'ext002'),
    ('roo005', 'ext001'),
    ('roo005', 'ext002'),
    ('roo006', 'ext003'),
    ('roo007', 'ext001'),
    ('roo007', 'ext002');
GO

