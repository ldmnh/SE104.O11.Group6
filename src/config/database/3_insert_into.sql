-- Active: 1698914213463@@127.0.0.1@3306@database_se104
USE DATABASE_SE104;

INSERT INTO Admin (admin_nickname, admin_pass)
VALUES
    ('admin1', '$2a$08$ymCOpCABEqsCRZzyj9NIFuH.0ulU1O6FbcMVRl9VSL4EM.vdje7wK'),
    ('admin2', '$2a$08$dTn4g4gmAvRlxGDxtjPga.qNYldTY/WOl44Ikm7r3pbc7xFzSaZoG'),
    ('admin3', '$2a$08$qSLYLuukotwr31gKGxMooeHa73odnhL8bgFPbviqpSvRBUzYbpMk.');

INSERT INTO AuthUser (au_user_first_name, au_user_last_name, au_user_email, au_user_pass, au_user_avt_url)
VALUES
    ('Hiếu', 'Lê',  'lehieudn123@example.com',  '$2a$08$ymCOpCABEqsCRZzyj9NIFuH.0ulU1O6FbcMVRl9VSL4EM.vdje7wK', 'user_1.jpg'),
    ('Giàu', 'Bùi', 'giaubuibt123@example.com', '$2a$08$dTn4g4gmAvRlxGDxtjPga.qNYldTY/WOl44Ikm7r3pbc7xFzSaZoG', 'user_2.jpg'),
    ('Lân',  'Lý',  'lanlyst123@example.com',   '$2a$08$qSLYLuukotwr31gKGxMooeHa73odnhL8bgFPbviqpSvRBUzYbpMk.', 'user_3.jpg');

INSERT INTO BankCard (bank_name, bank_branch, bank_num, bank_name_pers, au_user_id)
VALUES
    ('Vietcombank', 'Đông Sài Gòn', '1111222233334444', 'LE HIEU',  1),
    ('BIDV',        'Bình Dương',   '5555222233334444', 'LE HIEU',  1),
    ('MB',          'Hồ Chí Minh',  '5555666677778888', 'BUI GIAU', 2);

INSERT INTO DebitCard (debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
VALUES
    ('1111222233334444', '2023-12-31 23:59:59', '123', 'VISA',          'Đường Tô Vĩnh Diện', '12345', 1),
    ('9999111111112222', '2025-03-31 23:59:59', '789', 'MASTER CARD',   'Đường Hàn Thuyên',   '54321', 3),
    ('9999888811112222', '2025-03-31 23:59:59', '910', 'VISA',          'Đường Hàn Thuyên',   '54321', 3);

INSERT INTO Province (prov_name, prov_url)
VALUES
    ('Sóc Trăng',   'Soc+Trang'),
    ('Bạc Liêu',    'Bac+Lieu'),
    ('Bến Tre',     'Ben+Tre'),
    ('Trà Vinh',    'Tra+Vinh'),
    ('Vĩnh Long',   'Vinh+Long'),
    ('An Giang',    'An+Giang');

INSERT INTO City (city_name, prov_id)
VALUES
    ('Thành phố Sóc Trăng',   1),
    ('Thành phố Bến Tre',     3),
    ('Thành phố Trà Vinh',    4),
    ('Thành phố Vĩnh Long',   5),
    ('Thành phố Long Xuyên',  6);

INSERT INTO Accommodation (acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id, acco_location_link)
VALUES
    ('Hotel', 4, 'accommodation_1.jpg', 'Khách sạn Quê Hương', 'Quê Hương là thiên đường', 'Khách sạn hướng ra sông, có nhà hàng. Có thể nhìn toàn bộ thành phố từ trên cao. Phục vụ 24/24, có dịch vụ giải trí đa dạng ở khách sạn.', '1 Đường Nguyễn Trung Trực', 1, 1, 'https://maps.app.goo.gl/rXUtByLicucWQDej6'),
    ('Resort', 5, 'accommodation_2.jpg', 'Sunrise Hotel Bạc Liêu', 'Phục vụ từ tận tâm Sunrise', 'Khách sạn kết hợp khu trung tâm thương mại. Nhiều tiện ích được tích hợp vào nội thất trong Hotel. Phục vụ 24/7.', '22 Đường Trần Huỳnh', NULL, 2, 'https://maps.app.goo.gl/VkrYrsnGhRYBdPfg6'),
    ('Hotel', 5, 'accommodation_3.jpg', 'LARA HOTEL LONG XUYEN', 'Đem đến sự chất lượng tuyệt đối cho bạn.', 'Khách sạn bình dị có nhà hàng. Tận hưởng cảm giác gần gũi với thiên nhiên, yên bình. Nhiều hình thức giải trí vui nhộn.', '46-48 Đường Hùng Vương', 5, 6, 'https://maps.app.goo.gl/uoso2HmZ4hM9uEpS9'),
    ('Resort', 2, 'accommodation_4.jpg', 'Homestay Coco Island', NULL, 'Khách sạn 2 sao. Có các hình thức dịch vụ đa dạng, thường trực 24/24. Có buffer sáng miễn phí.', '97 Tân Thạch', 2, 3, 'https://maps.app.goo.gl/vDk8xKxDsums4XTo6');


INSERT INTO Feature (fea_name)
VALUES 
    ('Giáp biển'),
    ('Sân vườn'),
    ('Chỗ đậu xe miễn phí'),
    ('An ninh đảm bảo'),
    ('Thang máy'),
    ('Hồ bơi');

INSERT INTO Extension (exte_name)
VALUES 
    ('Buffet sáng'),   
    ('Wifi'),
    ('Không thuốc lá'),
    ('Thú cưng'),
    ('Tủ lạnh'),
    ('Vòi hoa sen'),
    ('Điều hòa không khí'),
    ('Ghế sofa'),
    ('Bồn tắm lớn'),
    ('TV màn hình phẳng');


INSERT INTO AccoFea (fea_id, acco_id)
VALUES 
    (1, 1), (2, 1), (3, 1), (4, 1), (6, 1),
    (1, 2), (2, 2), (3, 2), (5, 2), (6, 2),
    (1, 3), (2, 3), (4, 3), (5, 3), (6, 3),
    (1, 4), (3, 4), (4, 4), (5, 4), (6, 4);

INSERT INTO AccoImg (acco_id, acco_img_url)
VALUES 
    (1, 'accommodation_1.jpg'), (1, 'accommodation_2.jpg'), (1, 'accommodation_3.jpg'),
    (1, 'accommodation_4.jpg'), (2, 'accommodation_5.jpg'), (2, 'accommodation_6.jpg'),
    (2, 'accommodation_7.jpg'), (2, 'accommodation_8.jpg'), (3, 'accommodation_9.jpg'),
    (3, 'accommodation_10.jpg'),(3, 'accommodation_1.jpg'), (3, 'accommodation_2.jpg'),
    (4, 'accommodation_3.jpg'), (4, 'accommodation_5.jpg'), (4, 'accommodation_7.jpg'),
    (4, 'accommodation_9.jpg');

INSERT INTO RoomType (room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_count_rating, acco_id, room_name)
VALUES 
    ('Tiêu chuẩn',  'Phòng đôi',     1, 0, 1, 0, 10,    'room_1.jpg',  25.5, 1000000, NULL, NULL,          0, 1, 'Phòng đôi Tiêu chuẩn tầm nhìn ra biển'),
    ('Sang trọng',  'Phòng đôi',     2, 1, 0, 1,  5,    'room_2.jpg',  35.0, 2000000, 0.1,  '2023-01-31',  0, 1, 'Phòng đôi Sang trọng đầy đủ tiện nghi'),
    ('Cao cấp',     'Phòng đôi',     2, 1, 0, 1,  7,    'room_3.jpg',  38.0, 2200000, 0.2,  '2023-04-30',  0, 1, 'Phòng đôi Cao cấp nhìn thành phố'),
    ('Cao cấp',     'Phòng gia đình',2, 2, 1, 2,  3,    'room_4.jpg',  45.2, 3000000, NULL, NULL,          0, 2, 'Phòng gia đình Cao cấp có không gian chung'),
    ('Tiêu chuẩn',  'Phòng đơn',     1, 0, 1, 0, 12,    'room_5.jpg',  32.0, 1500000, NULL, NULL,          0, 2, 'Phòng đơn Tiêu chuẩn không gian yên tĩnh'),
    ('Cao cấp',     'Phòng gia đình',2, 2, 1, 2,  5,    'room_6.jpg',  48.7, 3200000, NULL, NULL,          0, 2, 'Phòng gia đình Cao cấp có buffet sáng'),
    ('Cao cấp',     'Phòng gia đình',2, 2, 1, 2,  4,    'room_7.jpg',  50.0, 3500000, 0.15, '2023-03-31',  0, 3, 'Phòng gia đình Cao cấp nhìn ra biển'),
    ('Tiêu chuẩn',  'Phòng đơn',     1, 0, 1, 0,  8,    'room_8.jpg',  30.0, 1200000, 0.05, '2023-02-28',  0, 3, 'Phòng đơn Tiêu chuẩn có không gian làm việc'),
    ('Thượng hạng', 'Phòng đôi',     2, 1, 0, 1,  6,    'room_9.jpg',  28.5, 1800000, NULL, NULL,          0, 4, 'Phòng đôi Thượng hạng có bồn tắm'),
    ('Tiêu chuẩn',  'Phòng đơn',     1, 0, 1, 0,  9,    'room_10.jpg', 29.8, 1100000, 0.1,  '2023-05-31',  0, 4, 'Phòng đơn Tiêu chuẩn phục vụ 24/24');



INSERT INTO RoomExte (room_id, exte_id)
VALUES 
(1, 1), 	(2, 1), 	(3, 1), 	(4, 1), 	(5, 1), 	(6, 1), 	(7, 1), 	(8, 1), 	(9, 1), 	(10, 1),
(1, 2), 	(2, 2), 	(3, 2), 	(4, 2), 	(5, 2), 	(6, 2), 	(7, 2), 	(8, 2), 	(9, 2), 	(10, 2),
(1, 3), 	(2, 3), 	(3, 3), 	(4, 3), 	(5, 3), 	(6, 3), 	(7, 3), 	(8, 3), 	(9, 3), 	(10, 3),
(1, 4), 	(2, 4), 	(3, 4), 	(4, 4), 	(5, 4), 	(6, 4), 	(7, 4), 	(8, 4), 	(9, 4), 	(10, 4),
(1, 5), 	(2, 5), 	(3, 5), 	(4, 5), 	(5, 5), 	(6, 5), 	(7, 5), 	(8, 5), 	(9, 5), 	(10, 5),
(1, 6), 	(2, 6), 	(3, 6), 	(4, 6), 	(5, 6), 	(6, 6), 	(7, 6), 	(8, 6), 	(9, 6), 	(10, 6),
(1, 7), 	(2, 7), 	(3, 7), 	(4, 7), 	(5, 7), 	(6, 7), 	(7, 7), 	(8, 7), 	(9, 7), 	(10, 7),
(1, 8), 	(2, 8), 	(3, 8), 	(4, 8), 	(5, 8), 	(6, 8), 	(7, 8), 	(8, 8), 	(9, 8), 	(10, 8),
(1, 9), 	(2, 9), 	(3, 9), 	(4, 9), 	(5, 9), 	(6, 9), 	(7, 9), 	(8, 9), 	(9, 9), 	(10, 9),
(1, 10),	(2, 10),	(3, 10),	(4, 10),	(5, 10),	(6, 10),	(7, 10),	(8, 10),	(9, 10),	(10, 10);



INSERT INTO RoomTypeImg (room_id, room_type_image_url)
VALUES 
    (1,  'room_1.jpg'),     (1,  'room_2.jpg'),     (1,  'room_3.jpg'),     (1,  'room_4.jpg'),     (1,  'room_5.jpg'),     (1,  'room_6.jpg'),
    (2,  'room_7.jpg'),     (2,  'room_8.jpg'),     (2,  'room_9.jpg'),     (2,  'room_10.jpg'),    (2,  'room_11.jpg'),    (2,  'room_12.jpg'),
    (3,  'room_13.jpg'),    (3,  'room_14.jpg'),    (3,  'room_15.jpg'),    (3,  'room_16.jpg'),    (3,  'room_17.jpg'),    (3,  'room_18.jpg'),
    (4,  'room_19.jpg'),    (4,  'room_20.jpg'),    (4,  'room_21.jpg'),    (4,  'room_22.jpg'),    (4,  'room_23.jpg'),    (5,  'room_24.jpg'),
    (5,  'room_25.jpg'),    (5,  'room_26.jpg'),    (5,  'room_27.jpg'),    (5,  'room_28.jpg'),    (5,  'room_29.jpg'),    (6,  'room_30.jpg'),
    (6,  'room_2.jpg'),     (6,  'room_4.jpg'),     (6,  'room_6.jpg'),     (6,  'room_8.jpg'),     (6,  'room_10.jpg'),    (7,  'room_12.jpg'),
    (7,  'room_14.jpg'),    (7,  'room_16.jpg'),    (7,  'room_18.jpg'),    (7,  'room_20.jpg'),    (7,  'room_22.jpg'),    (8,  'room_24.jpg'),
    (8,  'room_26.jpg'),    (8,  'room_28.jpg'),    (8,  'room_30.jpg'),    (8,  'room_1.jpg'),     (8,  'room_3.jpg'),     (9,  'room_5.jpg'),
    (9,  'room_7.jpg'),     (9,  'room_9.jpg'),     (9,  'room_11.jpg'),    (9,  'room_13.jpg'),    (9,  'room_15.jpg'),    (10, 'room_17.jpg'),
    (10, 'room_19.jpg'),    (10, 'room_21.jpg'),    (10, 'room_23.jpg'),    (10,  'room_25.jpg'),   (10,  'room_27.jpg');

-- INSERT INTO PayingMethod (pay_name)
-- VALUES 
--     ('cash'),
--     ('bankcard'),
--     ('debitcard');

INSERT INTO ReasonCancel (rea_description)
VALUES
    ('Tôi đã tìm được lựa chọn chỗ nghỉ thay thế'),
    ('Chỗ nghỉ yêu cầu hủy'),
    ('Số lượng hoặc nhu cầu của tôi thay đổi'),
    ('Đổi ngày hoặc điểm đến'),
    ('Lý do cá nhân/chuyến đi bị hủy'),
    ('Không phải lý do trên');

INSERT INTO PayingMethod (pay_name)
VALUES 
    ('cash'),
    ('bankcard'),
    ('debitcard');

INSERT INTO Booking (acco_id, au_user_id, book_datetime, book_start_datetime, book_end_datetime, book_num_adult, book_num_child, book_first_name, book_last_name, book_email, pay_id, book_phone, book_note, cancel_cost, book_status, book_is_paid, rea_id)
VALUES
    (1, 3, '2023-10-27 10:00:00', '2023-11-01 14:00:00', '2023-11-05 11:00:00', 1, 0, 'Hiếu',    'Lê',     'lehieudn123@example.com',     1, '1234567890', NULL, 0, 1, 1, NULL),
    (2, 2, '2023-10-28 11:30:00', '2023-11-02 12:00:00', '2023-11-03 10:00:00', 2, 0, 'Cẩm',     'Lâm',    'lamcamtv123@example.com',     2, '9876543210', NULL, 0, 1, 1, NULL),
    (3, 1, '2023-10-29 09:15:00', '2023-11-04 15:00:00', '2023-11-06 12:00:00', 3, 0, 'Mạnh',    'Lê',     'lemanhtn123@example.com',     3, '5555555555', NULL, 0, 1, 1, NULL),
    (4, 2, '2023-10-30 14:45:00', '2023-11-07 13:00:00', '2023-11-08 09:00:00', 1, 0, 'Nhung',   'Nguyễn', 'nguyennhung123@example.com',  1, '1111111111', NULL, 0, 1, 1, NULL),
    (3, 1, '2023-10-31 16:30:00', '2023-11-09 10:00:00', '2023-11-11 17:00:00', 2, 0, 'Như',     'Đặng',   'dangnhubd123@example.com',    2, '9999999999', NULL, 0, 1, 1, NULL),
    (2, 2, '2023-11-01 12:00:00', '2023-11-12 14:30:00', '2023-11-15 11:00:00', 1, 0, 'Giàu',    'Bùi',    'buigiaubt123@example.com',    3, '7777777777', NULL, 0, 1, 1, NULL),
    (1, 1, '2023-11-02 10:30:00', '2023-11-16 09:00:00', '2023-11-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL),
    (2, 2, '2023-11-03 15:15:00', '2023-11-19 11:30:00', '2023-11-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL),
    (4, 1, '2023-11-04 11:45:00', '2023-11-22 14:00:00', '2023-11-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL),
    (4, 1, '2023-09-05 09:00:00', '2023-10-25 10:30:00', '2023-10-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL),
    (3, 2, '2023-09-30 16:30:00', '2023-10-09 10:45:00', '2023-10-11 17:00:00', 2, 0, 'Như',     'Đặng',   'dangnhubd123@example.com',    2, '9999999999', NULL, 0, 1, 1, NULL),
    (2, 1, '2023-09-01 14:45:00', '2023-10-12 14:30:00', '2023-10-15 11:00:00', 1, 0, 'Giàu',    'Bùi',    'buigiaubt123@example.com',    3, '7777777777', NULL, 0, 1, 1, NULL),
    (1, 3, '2023-09-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL),
    (2, 1, '2023-09-03 15:15:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL),
    (4, 2, '2023-09-04 11:45:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL),
    (4, 3, '2023-08-05 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL),
    (2, 3, '2023-08-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL),
    (3, 1, '2023-08-18 15:30:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL),
    (1, 2, '2023-08-23 11:30:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL),
    (4, 3, '2023-08-19 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL),
    (4, 1, '2023-09-05 09:00:00', '2023-10-25 10:30:00', '2023-10-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL),
    (3, 2, '2023-09-30 16:30:00', '2023-10-09 10:45:00', '2023-10-11 17:00:00', 2, 0, 'Như',     'Đặng',   'dangnhubd123@example.com',    2, '9999999999', NULL, 0, 1, 1, NULL),
    (2, 1, '2023-09-01 14:45:00', '2023-10-12 14:30:00', '2023-10-15 11:00:00', 1, 0, 'Giàu',    'Bùi',    'buigiaubt123@example.com',    3, '7777777777', NULL, 0, 1, 1, NULL),
    (1, 3, '2023-09-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL),
    (2, 1, '2023-09-03 15:15:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL),
    (4, 2, '2023-09-04 11:45:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL),
    (4, 3, '2023-08-05 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL),
    (2, 3, '2023-08-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL),
    (3, 1, '2023-08-18 15:30:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL),
    (1, 2, '2023-08-23 11:30:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL),
    (4, 3, '2023-08-19 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL);

INSERT INTO BookingDetail (book_id, room_id, book_room_cost_before, book_room_cost_after, book_num_room)
VALUES
    (  1,  1, 2500000, 1500000, 2),
    (  1,  2, 2800000, 1800000, 1),
    (  2,  3, 2000000, 2000000, 1),
    (  3,  4, 2200000, 1200000, 1),
    (  4,  5, 2600000, 1600000, 2),
    (  5,  6, 2800000, 1800000, 1),
    (  6,  7, 2500000, 2500000, 1),
    (  7,  8, 2900000, 1900000, 1),
    (  8,  9, 2700000, 1700000, 2),
    (  9, 10, 2400000, 1400000, 1),
    ( 10, 10, 2400000, 1400000, 1),
    ( 11,  1, 2500000, 1500000, 2),
    ( 12,  2, 2800000, 1800000, 1),
    ( 13,  3, 2000000, 2000000, 1),
    ( 14,  4, 2200000, 1200000, 1),
    ( 15,  5, 2600000, 1600000, 2),
    ( 16,  6, 2800000, 1800000, 1),
    ( 17,  7, 2500000, 2500000, 1),
    ( 18,  8, 2900000, 1900000, 1),
    ( 19,  9, 2700000, 1700000, 2),
    ( 20, 10, 2400000, 1400000, 1),
    ( 21,  1, 2400000, 1400000, 1),
    ( 22,  2, 2900000, 1900000, 1),
    ( 23,  3, 2700000, 1700000, 2),
    ( 24,  4, 2400000, 1400000, 1),
    ( 25,  5, 2400000, 1400000, 1),
    ( 26,  6, 2800000, 1800000, 1),
    ( 27,  7, 2500000, 2500000, 1),
    ( 28,  8, 2900000, 1900000, 1),
    ( 29,  9, 2700000, 1700000, 2),
    ( 30, 10, 2400000, 1400000, 1),
    ( 31,  1, 2400000, 1400000, 1);

INSERT INTO Rating (au_user_id, room_id, rating_datetime, rating_context, rating_point)
VALUES
    (1, 1, '2023-10-27 14:30:00', 'Phòng sạch sẽ, thơm.',                                         9.5),
    (2, 2, '2023-10-28 11:00:00', 'Dịch vụ phòng tốt, lễ tân lịch sự.',                           10.0),
    (3, 3, '2023-10-29 09:45:00', 'Phòng có view tuyệt đẹpppppp.',                                9.0),
    (1, 4, '2023-10-30 16:15:00', 'Tuyệt vời!!!!',                                                9.8),
    (2, 5, '2023-10-31 13:30:00', 'sạch, đẹp, có tiện ích đầy đủ.',                               9.7),
    (3, 1, '2023-11-11 16:30:00', 'Đồ ăn khách sạn dở nhưng dịch vụ tốt.',                        8.0),
    (3, 2, '2023-10-28 13:00:00', '10đ tuyệt vời.',                                               10.0),
    (1, 3, '2023-10-29 10:45:00', 'Phòng tiện nghi, rất đáng tiền.',                              9.5),
    (2, 4, '2023-10-30 14:15:00', 'Thích ở đây sự riêng tư',                                      9.8),
    (1, 5, '2023-10-31 19:30:00', 'Phòng đẹp nhưng phục vụ có thái độ.',                          7.0),
    (2, 3, '2023-11-05 09:00:00', 'Không gian thoải mái, nhân viên thân thiện.',                  9.2),
    (1, 4, '2023-11-15 20:45:00', 'Giá cả hợp lý, phòng sạch sẽ.',                                8.8),
    (2, 2, '2023-11-20 12:30:00', 'Dịch vụ chăm sóc khách hàng xuất sắc.',                        9.7),
    (3, 1, '2023-11-25 18:15:00', 'Khách sạn nằm gần trung tâm thành phố, thuận tiện di chuyển.', 9.5),
    (2, 5, '2023-11-30 22:00:00', 'Phòng ốc rộng rãi, view tuyệt vời.',                           9.9),
    (1, 2, '2023-11-05 14:30:00', 'Không gian phòng ấm cúng, nhân viên nhiệt tình.',              9.3),
    (1, 3, '2023-11-10 11:15:00', 'Bữa sáng ngon miệng, đa dạng lựa chọn.',                       9.8),
    (2, 4, '2023-11-15 16:45:00', 'Dịch vụ phòng hỗ trợ nhanh chóng.',                            9.5),
    (2, 5, '2023-11-20 21:00:00', 'Phòng đẹp, view hồ hút mắt.',                                  9.7),
    (3, 1, '2023-11-25 17:30:00', 'Không gian yên tĩnh, thích hợp cho công việc.',                9.6),
    (2, 2, '2023-10-02 10:00:00', 'Dịch vụ phòng sạch sẽ, thái độ phục vụ tốt.',                  9.4),
    (1, 3, '2023-10-07 08:45:00', 'Nhân viên lễ tân nhiệt tình, nhanh nhẹn.',                     9.2),
    (1, 4, '2023-11-12 13:15:00', 'Phòng tắm tiện nghi, đầy đủ vật dụng.',                        9.7),
    (2, 5, '2023-10-17 19:30:00', 'Dịch vụ đáng giá tiền.',                                       9.5),
    (3, 1, '2023-11-22 15:00:00', 'Thức ăn phong phú, hấp dẫn.',                                  9.8),
    (1, 2, '2023-10-27 12:45:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.',                      9.6),
    (2, 3, '2023-10-05 09:30:00', 'Không gian quán bar thoải mái, đồ uống ngon.',                 9.7),
    (1, 4, '2023-09-20 14:00:00', 'Đội ngũ nhân viên phục vụ chu đáo.',                           9.5),
    (2, 5, '2023-09-21 18:45:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.',                     9.6),
    (3, 1, '2023-09-20 16:15:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.',                        9.3),
    (1, 2, '2023-09-25 11:30:00', 'Đồ ăn ngon, chất lượng.',                                      9.8),
    (2, 3, '2023-09-23 20:00:00', 'Phòng được trang bị đầy đủ tiện nghi.',                        9.7),
    (1, 4, '2023-09-26 14:45:00', 'Khách sạn nằm gần các điểm tham quan.',                        9.5),
    (2, 5, '2023-09-23 19:30:00', 'Dịch vụ đáng khen ngợi, nhân viên thân thiện.',                9.6),
    (3, 1, '2023-09-29 17:00:00', 'Phòng ốc rộng rãi, thoải mái.',                                9.4),
    (1, 2, '2023-10-25 12:15:00', 'Bữa tối ngon miệng, phục vụ nhanh chóng.',                     9.8),
    (2, 3, '2023-11-02 09:30:00', 'Không gian lễ tân sang trọng.',                                9.7),
    (1, 4, '2023-09-24 14:00:00', 'Dịch vụ đáng giá tiền, phòng sạch sẽ.',                        9.5),
    (2, 5, '2023-11-12 18:45:00', 'Nhân viên nhanh nhẹn, phục vụ chu đáo.',                       9.6),
    (3, 1, '2023-10-17 16:15:00', 'Phòng ốc thoải mái, đầy đủ tiện nghi.',                        9.3),
    (1, 2, '2023-09-22 11:30:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.',                      9.7),
    (2, 3, '2023-11-25 20:00:00', 'Không gian quán bar thoải mái, đồ uống ngon.',                 9.6),
    (1, 4, '2023-10-05 14:45:00', 'Đội ngũ nhân viên phục vụ chu đáo.',                           9.5),
    (2, 5, '2023-10-10 19:30:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.',                     9.6),
    (3, 1, '2023-11-15 17:00:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.',                        9.3),
    (1, 2, '2023-10-20 16:15:00', 'Đồ ăn ngon, chất lượng.',                                      9.8),
    (2, 3, '2023-09-25 12:30:00', 'Phòng được trang bị đầy đủ tiện nghi.',                        9.7),
    (1, 4, '2023-10-02 09:30:00', 'Khách sạn nằm gần các điểm tham quan.',                        9.5),
    (1, 6, '2023-10-27 14:30:00', 'Phòng sạch sẽ, thơm.', 9.5),
    (1, 7, '2023-09-22 11:30:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.', 9.7),
    (1, 7, '2023-09-25 11:30:00', 'Đồ ăn ngon, chất lượng.', 9.8),
    (1, 7, '2023-10-20 16:15:00', 'Đồ ăn ngon, chất lượng.', 9.8),
    (1, 7, '2023-10-25 12:15:00', 'Bữa tối ngon miệng, phục vụ nhanh chóng.', 9.8),
    (1, 7, '2023-10-27 12:45:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.', 9.6),
    (1, 7, '2023-11-05 14:30:00', 'Không gian phòng ấm cúng, nhân viên nhiệt tình.', 9.3),
    (1, 8, '2023-10-07 08:45:00', 'Nhân viên lễ tân nhiệt tình, nhanh nhẹn.', 9.2),
    (1, 8, '2023-10-29 10:45:00', 'Phòng tiện nghi, rất đáng tiền.', 9.5),
    (1, 8, '2023-11-10 11:15:00', 'Bữa sáng ngon miệng, đa dạng lựa chọn.', 9.8),
    (1, 9, '2023-09-20 14:00:00', 'Đội ngũ nhân viên phục vụ chu đáo.', 9.5),
    (1, 9, '2023-09-24 14:00:00', 'Dịch vụ đáng giá tiền, phòng sạch sẽ.', 9.5),
    (1, 9, '2023-09-26 14:45:00', 'Khách sạn nằm gần các điểm tham quan.', 9.5),
    (1, 9, '2023-10-05 14:45:00', 'Đội ngũ nhân viên phục vụ chu đáo.', 9.5),
    (1, 9, '2023-10-30 16:15:00', 'Tuyệt vời!!!!', 9.8),
    (1, 9, '2023-11-12 13:15:00', 'Phòng tắm tiện nghi, đầy đủ vật dụng.', 9.7),
    (1, 9, '2023-11-15 20:45:00', 'Giá cả hợp lý, phòng sạch sẽ.', 8.8),
    (1, 10, '2023-10-02 09:30:00', 'Khách sạn nằm gần các điểm tham quan.', 9.5),
    (1, 10, '2023-10-31 19:30:00', 'Phòng đẹp nhưng phục vụ có thái độ.', 7.0),
    (2, 7, '2023-10-02 10:00:00', 'Dịch vụ phòng sạch sẽ, thái độ phục vụ tốt.', 9.4),
    (2, 7, '2023-10-28 11:00:00', 'Dịch vụ phòng tốt, lễ tân lịch sự.', 10.0),
    (2, 7, '2023-11-20 12:30:00', 'Dịch vụ chăm sóc khách hàng xuất sắc.', 9.7),
    (2, 8, '2023-09-23 20:00:00', 'Phòng được trang bị đầy đủ tiện nghi.', 9.7),
    (2, 8, '2023-09-25 12:30:00', 'Phòng được trang bị đầy đủ tiện nghi.', 9.7),
    (2, 8, '2023-10-05 09:30:00', 'Không gian quán bar thoải mái, đồ uống ngon.', 9.7),
    (2, 8, '2023-11-02 09:30:00', 'Không gian lễ tân sang trọng.', 9.7),
    (2, 8, '2023-11-05 09:00:00', 'Không gian thoải mái, nhân viên thân thiện.', 9.2),
    (2, 8, '2023-11-25 20:00:00', 'Không gian quán bar thoải mái, đồ uống ngon.', 9.6),
    (2, 9, '2023-10-30 14:15:00', 'Thích ở đây sự riêng tư', 9.8),
    (2, 9, '2023-11-15 16:45:00', 'Dịch vụ phòng hỗ trợ nhanh chóng.', 9.5),
    (2, 10, '2023-09-21 18:45:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.', 9.6),
    (2, 10, '2023-09-23 19:30:00', 'Dịch vụ đáng khen ngợi, nhân viên thân thiện.', 9.6),
    (2, 10, '2023-10-10 19:30:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.', 9.6),
    (2, 10, '2023-10-17 19:30:00', 'Dịch vụ đáng giá tiền.', 9.5),
    (2, 10, '2023-10-31 13:30:00', 'sạch, đẹp, có tiện ích đầy đủ.', 9.7),
    (2, 10, '2023-11-12 18:45:00', 'Nhân viên nhanh nhẹn, phục vụ chu đáo.', 9.6),
    (2, 10, '2023-11-20 21:00:00', 'Phòng đẹp, view hồ hút mắt.', 9.7),
    (2, 10, '2023-11-30 22:00:00', 'Phòng ốc rộng rãi, view tuyệt vời.', 9.9),
    (3, 6, '2023-09-20 16:15:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.', 9.3),
    (3, 6, '2023-09-29 17:00:00', 'Phòng ốc rộng rãi, thoải mái.', 9.4),
    (3, 6, '2023-10-17 16:15:00', 'Phòng ốc thoải mái, đầy đủ tiện nghi.', 9.3),
    (3, 6, '2023-11-11 16:30:00', 'Đồ ăn khách sạn dở nhưng dịch vụ tốt.', 8.0),
    (3, 6, '2023-11-15 17:00:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.', 9.3),
    (3, 6, '2023-11-22 15:00:00', 'Thức ăn phong phú, hấp dẫn.', 9.8),
    (3, 6, '2023-11-25 17:30:00', 'Không gian yên tĩnh, thích hợp cho công việc.', 9.6),
    (3, 6, '2023-11-25 18:15:00', 'Khách sạn nằm gần trung tâm thành phố, thuận tiện di chuyển.', 9.5),
    (3, 7, '2023-10-28 13:00:00', '10đ tuyệt vời.', 10.0),
    (3, 8, '2023-10-29 09:45:00', 'Phòng có view tuyệt đẹpppppp.', 9.0);


INSERT INTO Notification (noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url)
VALUES
    ('Type 1', 'CẬP NHẬT MẬT KHẨU',     'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.',     '2023-10-27 10:30:00', 'Bạn vừa cập nhật mật khẩu của mình thành công. Điều này là một bước quan trọng để bảo vệ thông tin cá nhân của bạn và đảm bảo an toàn khi sử dụng dịch vụ của chúng tôi. Để đảm bảo rằng hành động này là do bạn thực hiện, hãy kiểm tra lịch sử đăng nhập và thông báo bảo mật được gửi đến bạn.',    NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!',          '2023-10-28 14:45:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
    ('Type 1', 'CẬP NHẬT MẬT KHẨU',     'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.',     '2023-10-29 09:15:00', 'Bạn vừa cập nhật mật khẩu của mình thành công. Điều này là một bước quan trọng để bảo vệ thông tin cá nhân của bạn và đảm bảo an toàn khi sử dụng dịch vụ của chúng tôi. Để đảm bảo rằng hành động này là do bạn thực hiện, hãy kiểm tra lịch sử đăng nhập và thông báo bảo mật được gửi đến bạn.',    NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!',          '2023-10-30 12:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!',          '2023-10-30 12:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!',          '2023-10-31 16:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL);

INSERT INTO UserNoti (au_user_id, noti_id, usernoti_is_read)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 3, 1),
    (3, 4, 0),
    (3, 5, 0);