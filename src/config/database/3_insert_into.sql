-- Active: 1698914213463@@127.0.0.1@3306@database_se104
USE DATABASE_SE104;

INSERT INTO Admin (admin_nickname, admin_pass)
VALUES
    ('admin1', 'password1'),
    ('admin2', 'password2'),
    ('admin3', 'password3');

INSERT INTO AuthUser (au_user_first_name, au_user_last_name, au_user_email, au_user_pass, au_user_avt_url)
VALUES
    ('Hiếu', 'Lê',  'lehieudn123@example.com',  'password1', 'user_1.jpg'),
    ('Giàu', 'Bùi', 'giaubuibt123@example.com', 'password2', 'user_2.jpg'),
    ('Lân',  'Lý',  'lanlyst123@example.com',   'password3', 'user_3.jpg');

INSERT INTO BankCard (bank_name, bank_branch, bank_num, bank_name_pers, au_user_id)
VALUES
    ('Vietcombank', 'Đông Sài Gòn', '1111222233334444', 'LE HIEU',  1),
    ('BIDV',        'Bình Dương',   '5555222233334444', 'LE HIEU',  1),
    ('MB',          'Hồ Chí Minh',  '5555666677778888', 'BUI GIAU', 2);

INSERT INTO DebitCard (debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
VALUES
    ('1111222233334444', '2023-12-31 23:59:59', '123', 'LE HIEU',  'Đường Tô Vĩnh Diện', '12345', 1),
    ('9999111111112222', '2025-03-31 23:59:59', '789', 'LY LAN',   'Đường Hàn Thuyên',   '54321', 3),
    ('9999888811112222', '2025-03-31 23:59:59', '789', 'LY LAN',   'Đường Hàn Thuyên',   '54321', 3);

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
    ('hotel',   4,  'acc001.jpg', 'Khách sạn Quê Hương',    'Quê Hương là thiên đường',                 'Khách sạn 2 sao.',                             '1 Đường Nguyễn Trung Trực',    1,      1,  'https://maps.app.goo.gl/rXUtByLicucWQDej6'),
    ('resort',  5,  'acc002.jpg', 'Sunrise Hotel Bạc Liêu', 'Phục vụ từ tận tâm Sunrise',               'Khách sạn kết hợp khu trung tâm thương mại.',  '22 Đường Trần Huỳnh',          2,      2,  'https://maps.app.goo.gl/VkrYrsnGhRYBdPfg6'),
    ('hotel',   5,  'acc003.jpg', 'LARA HOTEL LONG XUYEN',  'Đem đến sự chất lượng tuyệt đối cho bạn.', 'Khách sạn bình dị có nhà hàng.',               '46-48 Đường Hùng Vương',       5,      5,  'https://maps.app.goo.gl/uoso2HmZ4hM9uEpS9'),
    ('resort',  2,  'acc004.jpg', 'Homestay Coco Island',    NULL,                                      'Khách sạn hướng ra sông, có nhà hang.',        '97 Tân Thạch',                 NULL,   3,  'https://maps.app.goo.gl/vDk8xKxDsums4XTo6');

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
    ('Tiêu chuẩn',  'Phòng Đôi',     1, 0, 1, 0, 10,    'room_1.jpg', 25.5, 100.0, NULL, NULL,          0, 1),
    ('Sang trọng',  'Phòng Đôi',     2, 1, 0, 1,  5,    'room_2.jpg', 35.0, 200.0, 0.1,  '2023-01-31',  0, 1),
    ('Cao cấp',     'Phòng Gia đình',2, 2, 1, 2,  3,    'room_1.jpg', 45.2, 300.0, NULL, NULL,          0, 2),
    ('Tiêu chuẩn',  'Phòng Đơn',     1, 0, 1, 0,  8,    'room_6.jpg', 30.0, 120.0, 0.05, '2023-02-28',  0, 3),
    ('Thượng hạng', 'Phòng Đôi',     2, 1, 0, 1,  6,    'room_3.jpg', 28.5, 180.0, NULL, NULL,          0, 4),
    ('Cao cấp',     'Phòng Gia đình',2, 2, 1, 2,  4,    'room_7.jpg', 50.0, 350.0, 0.15, '2023-03-31',  0, 3),
    ('Tiêu chuẩn',  'Phòng Đơn',     1, 0, 1, 0, 12,    'room_4.jpg', 32.0, 150.0, NULL, NULL,          0, 2),
    ('Sang trọng',  'Phòng Đôi',     2, 1, 0, 1,  7,    'room_1.jpg', 38.0, 220.0, 0.2,  '2023-04-30',  0, 1),
    ('Cao cấp',     'Phòng Gia đình',2, 2, 1, 2,  5,    'room_3.jpg', 48.7, 320.0, NULL, NULL,          0, 2),
    ('Tiêu chuẩn',  'Phòng Đơn',     1, 0, 1, 0,  9,    'room_2.jpg', 29.8, 110.0, 0.1,  '2023-05-31',  0, 4);

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

INSERT INTO Booking (acco_id, au_user_id, book_datetime, book_start_datetime, book_end_datetime, book_num_adult, book_num_child, pay_id, book_total_cost, book_first_name, book_last_name, book_email, book_phone, book_note, cancel_cost, book_status, book_is_paid, rea_id)
VALUES
    ('2023-10-27 10:00:00', '2023-11-01 14:00:00', '2023-11-05 11:00:00', 1, 0, 'Hiếu',    'Lê',     'lehieudn123@example.com',     1, '1234567890', NULL, 0, 1, 1, NULL, 3, 0),
    ('2023-10-28 11:30:00', '2023-11-02 12:00:00', '2023-11-03 10:00:00', 2, 0, 'Cẩm',     'Lâm',    'lamcamtv123@example.com',     2, '9876543210', NULL, 0, 1, 1, NULL, 2, 1),
    ('2023-10-29 09:15:00', '2023-11-04 15:00:00', '2023-11-06 12:00:00', 3, 0, 'Mạnh',    'Lê',     'lemanhtn123@example.com',     3, '5555555555', NULL, 0, 1, 1, NULL, 1, 0),
    ('2023-10-30 14:45:00', '2023-11-07 13:00:00', '2023-11-08 09:00:00', 1, 0, 'Nhung',   'Nguyễn', 'nguyennhung123@example.com',  1, '1111111111', NULL, 0, 1, 1, NULL, 2, 1),
    ('2023-10-31 16:30:00', '2023-11-09 10:00:00', '2023-11-11 17:00:00', 2, 0, 'Như',     'Đặng',   'dangnhubd123@example.com',    2, '9999999999', NULL, 0, 1, 1, NULL, 1, 0),
    ('2023-11-01 12:00:00', '2023-11-12 14:30:00', '2023-11-15 11:00:00', 1, 0, 'Giàu',    'Bùi',    'buigiaubt123@example.com',    3, '7777777777', NULL, 0, 1, 1, NULL, 2, 1),
    ('2023-11-02 10:30:00', '2023-11-16 09:00:00', '2023-11-18 12:00:00', 2, 0, 'Nhi',     'Bùi',    'buinhitn123@example.com',     1, '2222222222', NULL, 0, 1, 1, NULL, 1, 0),
    ('2023-11-03 15:15:00', '2023-11-19 11:30:00', '2023-11-21 10:00:00', 3, 0, 'Lân',     'Lý',     'lylanst123@example.com',      2, '8888888888', NULL, 0, 1, 1, NULL, 2, 1),
    ('2023-11-04 11:45:00', '2023-11-22 14:00:00', '2023-11-24 09:30:00', 1, 0, 'Yến',     'Phan',   'phanyenct123@example.com',    3, '4444444444', NULL, 0, 1, 1, NULL, 1, 0),
    ('2023-11-05 09:00:00', '2023-11-25 10:30:00', '2023-11-27 12:00:00', 2, 0, 'Nam',     'Trịnh',  'trinhnamtn123@example.com',   1, '6666666666', NULL, 0, 1, 1, NULL, 1, 0);

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
    (1, 1, '2023-10-27 14:30:00', 'Phòng sạch sẽ, thơm.',                                         4.5),
    (2, 2, '2023-10-28 11:00:00', 'Dịch vụ phòng tốt, lễ tân lịch sự.',                           5.0),
    (3, 3, '2023-10-29 09:45:00', 'Phòng có view tuyệt đẹpppppp.',                                4.0),
    (1, 4, '2023-10-30 16:15:00', 'Tuyệt vời!!!!',                                                4.8),
    (2, 5, '2023-10-31 13:30:00', 'sạch, đẹp, có tiện ích đầy đủ.',                               4.7),
    (3, 1, '2023-11-11 16:30:00', 'Đồ ăn khách sạn dở nhưng dịch vụ tốt.',                        3.0),
    (3, 2, '2023-10-28 13:00:00', '10đ tuyệt vời.',                                               5.0),
    (4, 3, '2023-10-29 10:45:00', 'Phòng tiện nghi, rất đáng tiền.',                              4.5),
    (5, 4, '2023-10-30 14:15:00', 'Thích ở đây sự riêng tư',                                      4.8),
    (4, 5, '2023-10-31 19:30:00', 'Phòng đẹp nhưng phục vụ có thái độ.',                          2.0),
    (2, 3, '2023-11-05 09:00:00', 'Không gian thoải mái, nhân viên thân thiện.',                  4.2),
    (1, 4, '2023-11-15 20:45:00', 'Giá cả hợp lý, phòng sạch sẽ.',                                3.8),
    (5, 2, '2023-11-20 12:30:00', 'Dịch vụ chăm sóc khách hàng xuất sắc.',                        4.7),
    (3, 1, '2023-11-25 18:15:00', 'Khách sạn nằm gần trung tâm thành phố, thuận tiện di chuyển.', 4.5),
    (2, 5, '2023-11-30 22:00:00', 'Phòng ốc rộng rãi, view tuyệt vời.',                           4.9),
    (1, 2, '2023-11-05 14:30:00', 'Không gian phòng ấm cúng, nhân viên nhiệt tình.',              4.3),
    (4, 3, '2023-11-10 11:15:00', 'Bữa sáng ngon miệng, đa dạng lựa chọn.',                       4.8),
    (5, 4, '2023-11-15 16:45:00', 'Dịch vụ phòng hỗ trợ nhanh chóng.',                            4.5),
    (2, 5, '2023-11-20 21:00:00', 'Phòng đẹp, view hồ hút mắt.',                                  4.7),
    (3, 1, '2023-11-25 17:30:00', 'Không gian yên tĩnh, thích hợp cho công việc.',                4.6),
    (5, 2, '2023-10-02 10:00:00', 'Dịch vụ phòng sạch sẽ, thái độ phục vụ tốt.',                  4.4),
    (1, 3, '2023-10-07 08:45:00', 'Nhân viên lễ tân nhiệt tình, nhanh nhẹn.',                     4.2),
    (4, 4, '2023-11-12 13:15:00', 'Phòng tắm tiện nghi, đầy đủ vật dụng.',                        4.7),
    (2, 5, '2023-10-17 19:30:00', 'Dịch vụ đáng giá tiền.',                                       4.5),
    (3, 1, '2023-11-22 15:00:00', 'Thức ăn phong phú, hấp dẫn.',                                  4.8),
    (4, 2, '2023-10-27 12:45:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.',                      4.6),
    (5, 3, '2023-10-05 09:30:00', 'Không gian quán bar thoải mái, đồ uống ngon.',                 4.7),
    (1, 4, '2023-09-10 14:00:00', 'Đội ngũ nhân viên phục vụ chu đáo.',                           4.5),
    (2, 5, '2023-09-15 18:45:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.',                     4.6),
    (3, 1, '2023-09-20 16:15:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.',                        4.3),
    (4, 2, '2023-09-25 11:30:00', 'Đồ ăn ngon, chất lượng.',                                      4.8),
    (5, 3, '2023-09-05 20:00:00', 'Phòng được trang bị đầy đủ tiện nghi.',                        4.7),
    (1, 4, '2023-09-10 14:45:00', 'Khách sạn nằm gần các điểm tham quan.',                        4.5),
    (2, 5, '2023-09-15 19:30:00', 'Dịch vụ đáng khen ngợi, nhân viên thân thiện.',                4.6),
    (3, 1, '2023-09-20 17:00:00', 'Phòng ốc rộng rãi, thoải mái.',                                4.4),
    (4, 2, '2023-10-25 12:15:00', 'Bữa tối ngon miệng, phục vụ nhanh chóng.',                     4.8),
    (5, 3, '2023-11-02 09:30:00', 'Không gian lễ tân sang trọng.',                                4.7),
    (1, 4, '2023-09-07 14:00:00', 'Dịch vụ đáng giá tiền, phòng sạch sẽ.',                        4.5),
    (2, 5, '2023-11-12 18:45:00', 'Nhân viên nhanh nhẹn, phục vụ chu đáo.',                       4.6),
    (3, 1, '2023-10-17 16:15:00', 'Phòng ốc thoải mái, đầy đủ tiện nghi.',                        4.3),
    (4, 2, '2023-09-22 11:30:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.',                      4.7),
    (5, 3, '2023-11-25 20:00:00', 'Không gian quán bar thoải mái, đồ uống ngon.',                 4.6),
    (1, 4, '2023-10-05 14:45:00', 'Đội ngũ nhân viên phục vụ chu đáo.',                           4.5),
    (2, 5, '2023-10-10 19:30:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.',                     4.6),
    (3, 1, '2023-11-15 17:00:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.',                        4.3),
    (4, 2, '2023-10-20 16:15:00', 'Đồ ăn ngon, chất lượng.',                                      4.8),
    (5, 3, '2023-09-25 12:30:00', 'Phòng được trang bị đầy đủ tiện nghi.',                        4.7),
    (1, 4, '2023-10-02 09:30:00', 'Khách sạn nằm gần các điểm tham quan.',                        4.5);


INSERT INTO Notification (noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url)
VALUES
    ('Type 1', 'CẬP NHẬT MẬT KHẨU',     'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.',     '2023-10-27 10:30:00', 'Content of Notification 1', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS Vũng Tàu, đặt phòng ngay!!!', '2023-10-28 14:45:00', 'Content of Notification 2', NULL),
    ('Type 1', 'CẬP NHẬT MẬT KHẨU',     'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.',     '2023-10-29 09:15:00', 'Content of Notification 3', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS Vũng Tàu, đặt phòng ngay!!!', '2023-10-30 12:00:00', 'Content of Notification 4', NULL),
    ('Type 2', 'HÈ THẢ GA CÙNG 2WAYS',  NULL,                                                                                               '2023-10-31 16:30:00', 'Content of Notification 5', NULL);

INSERT INTO UserNoti (au_user_id, noti_id, usernoti_is_read)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 3, 1),
    (3, 4, 0),
    (3, 5, 0);