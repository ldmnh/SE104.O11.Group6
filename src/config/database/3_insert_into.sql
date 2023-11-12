-- Active: 1698914213463@@127.0.0.1@3306@database_se104
USE DATABASE_SE104;

INSERT INTO Admin (admin_nickname, admin_pass)
VALUES
    ('admin1', 'password1'),
    ('admin2', 'password2'),
    ('admin3', 'password3');

INSERT INTO AuthUser (au_user_first_name, au_user_last_name, au_user_email, au_user_pass, au_user_avt_url)
VALUES
    ('John', 'Doe',      'john.doe@example.com',     'password1', 'user_1.jpg'),
    ('Jane', 'Smith',    'jane.smith@example.com',   'password2', 'user_2.jpg'),
    ('Mike', 'Johnson',  'mike.johnson@example.com', 'password3', 'user_3.jpg');

INSERT INTO BankCard (bank_name, bank_branch, bank_num, bank_name_pers, au_user_id)
VALUES
    ('Bank A', 'Branch A', '1111222233334444', 'John Doe',   1),
    ('Bank B', 'Branch B', '5555222233334444', 'John Doe_',  1),
    ('Bank B', 'Branch B', '5555666677778888', 'Jane Smith', 2);

INSERT INTO DebitCard (debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
VALUES
    ('1111222233334444', '2023-12-31 23:59:59', '123', 'John Doe',       '123 Main Street',  '12345', 1),
    ('9999111111112222', '2025-03-31 23:59:59', '789', 'Mike Johnson',   '789 Oak Street',   '54321', 3),
    ('9999888811112222', '2025-03-31 23:59:59', '789', 'Mike Johnson',   '789 Oak Street',   '54321', 3);

INSERT INTO Province (prov_name, prov_url)
VALUES
    ('Hồ Chí Minh',          'Ho+Chi+Minh+City'),
    ('Hà Nội',               'Hanoi'),
    ('Đà Nẵng',              'Da+Nang'),
    ('Hải Phòng',            'Haiphong'),
    ('Cần Thơ',              'Can+Tho'),
    ('Bà Rịu - Vũng Tàu',    'Ba+Ria+-+Vung+Tau');

INSERT INTO City (city_name, prov_id)
VALUES
    ('Thành phố Hồ Chí Minh',    1),
    ('Thành phố Đà Nẵng',        3),
    ('Thành phố Hải Phòng',      4),
    ('Thành phố Cần Thơ',        5),
    ('Thành phố Vũng Tàu',       6);

INSERT INTO Accommodation (acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id, acco_location_link)
VALUES
    ('hotel',        4,  'acc001.jpg', 'Khách sạn Mộng mơ',  'Luxury Accommodation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '123 Main Street',  1,     1,  'https://maps.app.goo.gl/kZiXnCysM2YhsziDA'),
    ('resort',       5,  'acc002.jpg', 'Resort Lò vi Sóng',  'Experience Paradise',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road',   NULL,  2,  'https://maps.app.goo.gl/fXrs4eMmpP117TY38'),
    ('resort',       5,  'acc003.jpg', 'Resort Bình Yên',    'Experience Paradise',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road',   5,     6,  'https://maps.app.goo.gl/oNLhb8VppARxbcUt9'),
    ('guest_house',  2,  'acc004.jpg', 'Guest House C',      NULL,                   'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '789 Mountain View',NULL,  3,  'https://maps.app.goo.gl/uVpVjbCYiLKLyd517');

INSERT INTO Feature (fea_name)
VALUES 
    ('Miễn phí hủy'),
    ('Không cần thanh toán trước'),
    ('Giáp biển');

INSERT INTO AccoFea (fea_id, acco_id)
VALUES 
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 4),
    (3, 1),
    (3, 2),
    (3, 3),
    (3, 4);

INSERT INTO AccoImg (acco_id, acco_img_url)
VALUES 
    (1, 'accomodation_1.jpg'),
    (1, 'accomodation_2.jpg'),
    (1, 'accomodation_3.jpg'),
    (1, 'accomodation_4.jpg'),
    (1, 'accomodation_5.jpg'),
    (2, 'accomodation_1.jpg'),
    (2, 'accomodation_2.jpg'),
    (2, 'accomodation_3.jpg'),
    (2, 'accomodation_5.jpg'),
    (3, 'accomodation_2.jpg'),
    (3, 'accomodation_3.jpg'),
    (3, 'accomodation_4.jpg'),
    (3, 'accomodation_5.jpg');

INSERT INTO RoomType (room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_count_rating, acco_id)
VALUES 
    ('Standard', 'Single', 1, 0, 1, 0, 10,   'room_1.jpg', 25.5, 1000000, NULL, NULL, 0,           1),
    ('Deluxe',   'Double', 2, 1, 0, 1,  5,   'room_2.jpg', 35.0, 2000000, 0.1, '2023-01-31', 0,    1),
    ('Suite',    'Family', 2, 2, 1, 2,  3,   'room_1.jpg', 45.2, 3000000, NULL, NULL, 0,           2),
    ('Standard', 'Single', 1, 0, 1, 0,  8,   'room_6.jpg', 30.0, 1200000, 0.05, '2023-02-28', 0,   3),
    ('Superior', 'Double', 2, 1, 0, 1,  6,   'room_3.jpg', 28.5, 1800000, NULL, NULL, 0,           4),
    ('Suite',    'Family', 2, 2, 1, 2,  4,   'room_7.jpg', 50.0, 3500000, 0.15, '2023-03-31', 0,   3),
    ('Standard', 'Single', 1, 0, 1, 0, 12,   'room_4.jpg', 32.0, 1500000, NULL, NULL, 0,           2),
    ('Deluxe',   'Double', 2, 1, 0, 1,  7,   'room_1.jpg', 38.0, 2200000, 0.2, '2023-04-30', 0,    1),
    ('Suite',    'Family', 2, 2, 1, 2,  5,   'room_3.jpg', 48.7, 3200000, NULL, NULL, 0,           2),
    ('Standard', 'Single', 1, 0, 1, 0,  9,   'room_2.jpg', 29.8, 1100000, 0.1, '2023-05-31', 0,    4);

INSERT INTO Extension (exte_name)
VALUES 
    ('Buffet sáng'),   
    ('Wifi'),
    ('Thuốc lá'),
    ('Thú cưng');

INSERT INTO RoomExte (room_id, exte_id)
VALUES 
    (1, 1),
    (1, 2),
    (2, 1),
    (3, 3),
    (4, 2),
    (5, 1),
    (5, 2),
    (6, 3),
    (7, 1),
    (8, 2),
    (9, 2),
    (10, 2),
    (10, 3),
    (10, 4);

INSERT INTO RoomTypeImg (room_id, room_type_image_url)
VALUES 
    (1, 'room_1.jpg'),
    (1, 'room_2.jpg'),
    (1, 'room_3.jpg'),
    (1, 'room_4.jpg'),
    (2, 'room_1.jpg'),
    (2, 'room_2.jpg'),
    (2, 'room_3.jpg'),
    (2, 'room_4.jpg'),
    (3, 'room_1.jpg'),
    (3, 'room_2.jpg'),
    (3, 'room_3.jpg'),
    (3, 'room_4.jpg'),
    (4, 'room_1.jpg'),
    (4, 'room_2.jpg'),
    (4, 'room_3.jpg'),
    (4, 'room_4.jpg'),
    (5, 'room_1.jpg'),
    (5, 'room_2.jpg'),
    (5, 'room_3.jpg'),
    (5, 'room_4.jpg'),
    (6, 'room_1.jpg'),
    (6, 'room_2.jpg'),
    (6, 'room_3.jpg'),
    (6, 'room_4.jpg'),
    (7, 'room_1.jpg'),
    (7, 'room_2.jpg'),
    (7, 'room_3.jpg'),
    (7, 'room_4.jpg'),
    (8, 'room_1.jpg'),
    (8, 'room_2.jpg'),
    (8, 'room_3.jpg'),
    (8, 'room_4.jpg'),
    (9, 'room_1.jpg'),
    (9, 'room_2.jpg'),
    (9, 'room_3.jpg'),
    (9, 'room_4.jpg'),
    (10, 'room_1.jpg'),
    (10, 'room_2.jpg'),
    (10, 'room_3.jpg'),
    (10, 'room_4.jpg');

INSERT INTO PayingMethod (pay_name)
VALUES 
    ('cash'),
    ('bankcard'),
    ('debitcard');

INSERT INTO ReasonCancel (rea_description)
VALUES
    ('Tôi đã tìm được lựa chọn chỗ nghỉ thay thế'),
    ('Chỗ nghỉ yêu cầu hủy'),
    ('Số lượng hoặc nhu cầu của tôi thay đổi'),
    ('Đổi ngày hoặc điểm đến'),
    ('Lý do cá nhân/chuyến đi bị hủy'),
    ('Không phải lý do trên');

INSERT INTO Booking (acco_id, au_user_id, book_datetime, book_start_datetime, book_end_datetime, book_num_adult, book_num_child, pay_id, book_cost_before, book_total_cost, book_first_name, book_last_name, book_email, book_phone, book_note, cancel_cost, book_status, book_is_paid, rea_id)
VALUES
    (1, 1, '2023-10-27 10:00:00', '2023-11-01 14:00:00', '2023-11-05 11:00:00', 2, 0, 1, 2250000, 0, 'John',       'Doe',      'john@example.com',     '1234567890', NULL, 0, 1, 1, NULL),
    (1, 2, '2023-10-28 11:30:00', '2023-11-02 12:00:00', '2023-11-03 10:00:00', 2, 0, 2, 2250000, 0, 'Jane',       'Smith',    'jane@example.com',     '9876543210', NULL, 0, 1, 1, NULL),
    (1, 3, '2023-10-29 09:15:00', '2023-11-04 15:00:00', '2023-11-06 12:00:00', 2, 0, 3, 2250000, 0, 'Michael',    'Johnson',  'michael@example.com',  '5555555555', NULL, 0, 1, 1, NULL),
    (1, 1, '2023-10-30 14:45:00', '2023-11-07 13:00:00', '2023-11-08 09:00:00', 2, 0, 1, 2250000, 0, 'Emily',      'Brown',    'emily@example.com',    '1111111111', NULL, 0, 1, 1, NULL),
    (1, 2, '2023-10-31 16:30:00', '2023-11-09 10:00:00', '2023-11-11 17:00:00', 2, 0, 2, 2250000, 0, 'David',      'Wilson',   'david@example.com',    '9999999999', NULL, 0, 1, 1, NULL),
    (1, 3, '2023-11-01 12:00:00', '2023-11-12 14:30:00', '2023-11-15 11:00:00', 2, 0, 1, 2250000, 0, 'Sarah',      'Jackson',  'sarah@example.com',    '7777777777', NULL, 0, 1, 1, NULL),
    (1, 1, '2023-11-02 10:30:00', '2023-11-16 09:00:00', '2023-11-18 12:00:00', 2, 0, 2, 2250000, 0, 'Robert',     'Anderson', 'robert@example.com',   '2222222222', NULL, 0, 1, 1, NULL),
    (1, 2, '2023-11-03 15:15:00', '2023-11-19 11:30:00', '2023-11-21 10:00:00', 2, 0, 3, 2250000, 0, 'Olivia',     'Thomas',   'olivia@example.com',   '8888888888', NULL, 0, 1, 1, NULL),
    (1, 3, '2023-11-04 11:45:00', '2023-11-22 14:00:00', '2023-11-24 09:30:00', 2, 0, 1, 2250000, 0, 'Daniel',     'Martinez', 'daniel@example.com',   '4444444444', NULL, 0, 1, 1, NULL),
    (1, 1, '2023-11-05 09:00:00', '2023-11-25 10:30:00', '2023-11-27 12:00:00', 2, 0, 2, 2250000, 0, 'Sophia',     'Garcia',   'sophia@example.com',   '6666666666', NULL, 0, 1, 1, NULL);

INSERT INTO BookingDetail (book_id, room_id, book_final_cost, book_num_room)
VALUES
    ( 1,   1, 1500000, 2),
    ( 1,   2, 1800000, 1),
    ( 2,   3, 2000000, 1),
    ( 3,   4, 1200000, 1),
    ( 4,   5, 1600000, 2),
    ( 5,   6, 1800000, 1),
    ( 6,   7, 2500000, 1),
    ( 7,   8, 1900000, 1),
    ( 8,   9, 1700000, 2),
    ( 9,  10, 1400000, 1),
    (10,  10, 1400000, 1);

INSERT INTO Rating (au_user_id, room_id, rating_datetime, rating_context, rating_point)
VALUES
    (1, 1, '2023-10-27 14:30:00', 'The room was clean and comfortable.',                9.5),
    (1, 1, '2023-10-28 14:30:00', 'The room was clean and comfortable.',                9.5),
    (1, 1, '2023-10-29 14:30:00', 'The room was clean and comfortable.',                9),
    (1, 1, '2023-10-30 14:30:00', 'The room was clean and comfortable.',                9),
    (1, 1, '2023-10-31 14:30:00', 'The room was clean and comfortable.',                9),
    (2, 2, '2023-10-28 11:00:00', 'Great service and amenities.',                       9),
    (2, 2, '2023-10-29 11:00:00', 'Great service and amenities.',                       9),
    (2, 2, '2023-10-30 11:00:00', 'Great service and amenities.',                       8.5),
    (2, 2, '2023-10-31 11:00:00', 'Great service and amenities.',                       8.5),
    (3, 3, '2023-10-29 09:45:00', 'The room had a nice view.',                          9),
    (1, 4, '2023-10-30 16:15:00', 'The staff was friendly and helpful.',                8.5),
    (2, 5, '2023-10-31 13:30:00', 'The room was spacious and well-maintained.',         9);

INSERT INTO Notification (noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url)
VALUES
    ('Type 1', 'CẬP NHẬT MẬT KHẨU', 'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.', '2023-10-27 10:30:00', 'Content of Notification 1', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS Vũng Tàu, đặt phòng ngay!!!', '2023-10-28 14:45:00', 'Content of Notification 2', NULL),
    ('Type 1', 'CẬP NHẬT MẬT KHẨU', 'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.', '2023-10-29 09:15:00', 'Content of Notification 3', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS Vũng Tàu, đặt phòng ngay!!!', '2023-10-30 12:00:00', 'Content of Notification 4', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS', NULL,                          '2023-10-31 16:30:00', 'Content of Notification 5', NULL);

INSERT INTO UserNoti (au_user_id, noti_id, usernoti_is_read)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 3, 1),
    (3, 4, 0),
    (3, 5, 0);