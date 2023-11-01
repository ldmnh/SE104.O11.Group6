USE DATABASE_IE104;

INSERT INTO Admin (admin_id, admin_nickname, admin_pass)
VALUES ('adm000000001', 'admin1', 'password1'),
       ('adm000000002', 'admin2', 'password2'),
       ('adm000000003', 'admin3', 'password3');

INSERT INTO AuthUser (au_user_id, au_user_first_name, au_user_last_name, au_user_email, au_user_pass, au_user_avt_url)
VALUES ('usr000000001', 'John', 'Doe',      'john.doe@example.com',     'password1', 'user_1.jpg'),
       ('usr000000002', 'Jane', 'Smith',    'jane.smith@example.com',   'password2', 'user_2.jpg'),
       ('usr000000003', 'Mike', 'Johnson',  'mike.johnson@example.com', 'password3', 'user_3.jpg');

INSERT INTO BankCard (bank_id, bank_name, bank_brach, bank_num, bank_name_pers, au_user_id)
VALUES ('bnk000000001', 'Bank A', 'Branch A', '1111222233334444', 'John Doe',   'usr000000001'),
       ('bnk000000002', 'Bank B', 'Branch B', '5555222233334444', 'John Doe_',  'usr000000001'),
       ('bnk000000003', 'Bank B', 'Branch B', '5555666677778888', 'Jane Smith', 'usr000000002');

INSERT INTO DebitCard (debit_id, debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
VALUES ('deb000000001', '1111222233334444', '2023-12-31 23:59:59', '123', 'John Doe',       '123 Main Street',  '12345', 'usr000000001'),
       ('deb000000002', '9999111111112222', '2025-03-31 23:59:59', '789', 'Mike Johnson',   '789 Oak Street',   '54321', 'usr000000003'),
       ('deb000000003', '9999888811112222', '2025-03-31 23:59:59', '789', 'Mike Johnson',   '789 Oak Street',   '54321', 'usr000000003');

INSERT INTO Province (prov_id, prov_name, prov_url)
VALUES ('pro000000001', 'Hồ Chí Minh',          'Ho+Chi+Minh+City'),
       ('pro000000002', 'Hà Nội',               'Hanoi'),
       ('pro000000003', 'Đà Nẵng',              'Da+Nang'),
       ('pro000000004', 'Hải Phòng',            'Haiphong'),
       ('pro000000005', 'Cần Thơ',              'Can+Tho'),
       ('pro000000006', 'Bà Rịu - Vũng Tàu',    'Ba+Ria+-+Vung+Tau');

INSERT INTO City (city_id, city_name, prov_id)
VALUES ('cty000000001', 'Thành phố Hồ Chí Minh',    'pro000000001'),
       ('cty000000003', 'Thành phố Đà Nẵng',        'pro000000003'),
       ('cty000000004', 'Thành phố Hải Phòng',      'pro000000004'),
       ('cty000000005', 'Thành phố Cần Thơ',        'pro000000005'),
       ('cty000000006', 'Thành phố Vũng Tàu',       'pro000000006');

INSERT INTO Accommodation (acco_id, acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id)
VALUES ('acc000000001', 'hotel',        4,  'acc001.jpg', 'Khách sạn Mộng mơ',  'Luxury Accommodation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '123 Main Street',  'cty000000001',     'pro000000001'),
       ('acc000000002', 'resort',       5,  'acc002.jpg', 'Resort Lò vi Sóng',  'Experience Paradise',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road',   NULL,               'pro000000002'),
       ('acc000000003', 'resort',       5,  'acc003.jpg', 'Resort Bình Yên',    'Experience Paradise',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '456 Beach Road',   'cty000000006',     'pro000000006'),
       ('acc000000004', 'guest_house',  2,  'acc004.jpg', 'Guest House C',      NULL,                   'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '789 Mountain View',NULL,               'pro000000003');

INSERT INTO Feature (fea_id, fea_name)
VALUES 
    ('fea000000001', 'Miễn phí hủy'),
    ('fea000000002', 'Không cần thanh toán trước'),
    ('fea000000003', 'Giáp biển');

INSERT INTO AccoFea (fea_id, acco_id)
VALUES 
    ('fea000000001', 'acc000000001'),
    ('fea000000001', 'acc000000002'),
    ('fea000000002', 'acc000000001'),
    ('fea000000002', 'acc000000004'),
    ('fea000000003', 'acc000000001'),
    ('fea000000003', 'acc000000002'),
    ('fea000000003', 'acc000000003'),
    ('fea000000003', 'acc000000004');

INSERT INTO AccoImg (acco_id, acco_img_url)
VALUES 
    ('acc000000001', 'accomodation_1.jpg'),
    ('acc000000001', 'accomodation_2.jpg'),
    ('acc000000001', 'accomodation_3.jpg'),
    ('acc000000001', 'accomodation_4.jpg'),
    ('acc000000001', 'accomodation_5.jpg'),
    ('acc000000002', 'accomodation_1.jpg'),
    ('acc000000002', 'accomodation_2.jpg'),
    ('acc000000002', 'accomodation_3.jpg'),
    ('acc000000002', 'accomodation_5.jpg'),
    ('acc000000003', 'accomodation_2.jpg'),
    ('acc000000003', 'accomodation_3.jpg'),
    ('acc000000003', 'accomodation_4.jpg'),
    ('acc000000003', 'accomodation_5.jpg');

INSERT INTO RoomType (room_id, room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_sum_rating, acco_id)
VALUES 
    ('roo000000001',  'Standard', 'Single', 1, 0, 1, 0, 10,   'room_1.jpg', 25.5, 100.0, NULL, NULL, 0,           'acc000000001'),
    ('roo000000002',  'Deluxe',   'Double', 2, 1, 0, 1, 5,    'room_2.jpg', 35.0, 200.0, 0.1, '2023-01-31', 0,    'acc000000001'),
    ('roo000000003',  'Suite',    'Family', 2, 2, 1, 2, 3,    'room_1.jpg', 45.2, 300.0, NULL, NULL, 0,           'acc000000002'),
    ('roo000000004',  'Standard', 'Single', 1, 0, 1, 0, 8,    'room_6.jpg', 30.0, 120.0, 0.05, '2023-02-28', 0,   'acc000000003'),
    ('roo000000005',  'Superior', 'Double', 2, 1, 0, 1, 6,    'room_3.jpg', 28.5, 180.0, NULL, NULL, 0,           'acc000000004'),
    ('roo000000006',  'Suite',    'Family', 2, 2, 1, 2, 4,    'room_7.jpg', 50.0, 350.0, 0.15, '2023-03-31', 0,   'acc000000003'),
    ('roo000000007',  'Standard', 'Single', 1, 0, 1, 0, 12,   'room_4.jpg', 32.0, 150.0, NULL, NULL, 0,           'acc000000002'),
    ('roo000000008',  'Deluxe',   'Double', 2, 1, 0, 1, 7,    'room_1.jpg', 38.0, 220.0, 0.2, '2023-04-30', 0,    'acc000000001'),
    ('roo000000009',  'Suite',    'Family', 2, 2, 1, 2, 5,    'room_3.jpg', 48.7, 320.0, NULL, NULL, 0,           'acc000000002'),
    ('roo000000010',  'Standard', 'Single', 1, 0, 1, 0, 9,    'room_2.jpg', 29.8, 110.0, 0.1, '2023-05-31', 0,    'acc000000004');

INSERT INTO Extension (exte_id, exte_name)
VALUES 
    ('ext000000001', 'Buffet sáng'),   
    ('ext000000002', 'Wifi'),
    ('ext000000003', 'Thuốc lá'),
    ('ext000000004', 'Thú cưng');

INSERT INTO RoomExte (room_id, exte_id)
VALUES 
    ('roo000000001', 'ext000000001'),
    ('roo000000001', 'ext000000002'),
    ('roo000000002', 'ext000000001'),
    ('roo000000003', 'ext000000003'),
    ('roo000000004', 'ext000000002'),
    ('roo000000005', 'ext000000001'),
    ('roo000000005', 'ext000000002'),
    ('roo000000006', 'ext000000003'),
    ('roo000000007', 'ext000000001'),
    ('roo000000008', 'ext000000002'),
    ('roo000000009', 'ext000000002'),
    ('roo000000010', 'ext000000002'),
    ('roo000000010', 'ext000000003'),
    ('roo000000010', 'ext000000004');

INSERT INTO RoomTypeImg (room_id, room_type_image_url)
VALUES ('roo000000001', 'room_1.jpg'),
       ('roo000000001', 'room_2.jpg'),
       ('roo000000001', 'room_3.jpg'),
       ('roo000000001', 'room_4.jpg'),
       ('roo000000002', 'room_1.jpg'),
       ('roo000000002', 'room_2.jpg'),
       ('roo000000002', 'room_3.jpg'),
       ('roo000000002', 'room_4.jpg'),
       ('roo000000003', 'room_1.jpg'),
       ('roo000000003', 'room_2.jpg'),
       ('roo000000003', 'room_3.jpg'),
       ('roo000000003', 'room_4.jpg'),
       ('roo000000004', 'room_1.jpg'),
       ('roo000000004', 'room_2.jpg'),
       ('roo000000004', 'room_3.jpg'),
       ('roo000000004', 'room_4.jpg'),
       ('roo000000005', 'room_1.jpg'),
       ('roo000000005', 'room_2.jpg'),
       ('roo000000005', 'room_3.jpg'),
       ('roo000000005', 'room_4.jpg'),
       ('roo000000006', 'room_1.jpg'),
       ('roo000000006', 'room_2.jpg'),
       ('roo000000006', 'room_3.jpg'),
       ('roo000000006', 'room_4.jpg'),
       ('roo000000007', 'room_1.jpg'),
       ('roo000000007', 'room_2.jpg'),
       ('roo000000007', 'room_3.jpg'),
       ('roo000000007', 'room_4.jpg'),
       ('roo000000008', 'room_1.jpg'),
       ('roo000000008', 'room_2.jpg'),
       ('roo000000008', 'room_3.jpg'),
       ('roo000000008', 'room_4.jpg'),
       ('roo000000009', 'room_1.jpg'),
       ('roo000000009', 'room_2.jpg'),
       ('roo000000009', 'room_3.jpg'),
       ('roo000000009', 'room_4.jpg'),
       ('roo000000010', 'room_1.jpg'),
       ('roo000000010', 'room_2.jpg'),
       ('roo000000010', 'room_3.jpg'),
       ('roo000000010', 'room_4.jpg');

INSERT INTO PayingMethod (pay_id, pay_name)
VALUES ('pay000000001', 'Tiền mặt'),
       ('pay000000002', 'Thẻ ngân hàng'),
       ('pay000000003', 'Thẻ ghi nợ');

INSERT INTO ReasonCancel (rea_id, rea_description)
VALUES ('rea000000001', 'Tôi đã tìm được lựa chọn chỗ nghỉ thay thế'),
       ('rea000000002', 'Chỗ nghỉ yêu cầu hủy'),
       ('rea000000003', 'Số lượng hoặc nhu cầu của tôi thay đổi'),
       ('rea000000004', 'Đổi ngày hoặc điểm đến'),
       ('rea000000005', 'Lý do cá nhân/chuyến đi bị hủy'),
       ('rea000000006', 'Không phải lý do trên');

INSERT INTO Booking (book_id, book_datetime, book_start_datetime, book_end_datetime, pay_id, book_total_cost, book_first_name, book_last_name, book_email, au_user_id, book_phone, book_note, cancel_cost, book_status, book_is_payed, rea_id)
VALUES
    ('boo000000001', '2023-10-27 10:00:00', '2023-11-01 14:00:00', '2023-11-05 11:00:00', 'pay000000001', 0, 'John',       'Doe',      'john@example.com',     'usr000000001', '1234567890', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000002', '2023-10-28 11:30:00', '2023-11-02 12:00:00', '2023-11-03 10:00:00', 'pay000000002', 0, 'Jane',       'Smith',    'jane@example.com',     'usr000000002', '9876543210', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000003', '2023-10-29 09:15:00', '2023-11-04 15:00:00', '2023-11-06 12:00:00', 'pay000000003', 0, 'Michael',    'Johnson',  'michael@example.com',  'usr000000003', '5555555555', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000004', '2023-10-30 14:45:00', '2023-11-07 13:00:00', '2023-11-08 09:00:00', 'pay000000001', 0, 'Emily',      'Brown',    'emily@example.com',    'usr000000001', '1111111111', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000005', '2023-10-31 16:30:00', '2023-11-09 10:00:00', '2023-11-11 17:00:00', 'pay000000002', 0, 'David',      'Wilson',   'david@example.com',    'usr000000002', '9999999999', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000006', '2023-11-01 12:00:00', '2023-11-12 14:30:00', '2023-11-15 11:00:00', 'pay000000001', 0, 'Sarah',      'Jackson',  'sarah@example.com',    'usr000000003', '7777777777', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000007', '2023-11-02 10:30:00', '2023-11-16 09:00:00', '2023-11-18 12:00:00', 'pay000000002', 0, 'Robert',     'Anderson', 'robert@example.com',   'usr000000001', '2222222222', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000008', '2023-11-03 15:15:00', '2023-11-19 11:30:00', '2023-11-21 10:00:00', 'pay000000003', 0, 'Olivia',     'Thomas',   'olivia@example.com',   'usr000000002', '8888888888', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000009', '2023-11-04 11:45:00', '2023-11-22 14:00:00', '2023-11-24 09:30:00', 'pay000000001', 0, 'Daniel',     'Martinez', 'daniel@example.com',   'usr000000003', '4444444444', NULL, 0, 'Đã sử dụng', 1, NULL),
    ('boo000000010', '2023-11-05 09:00:00', '2023-11-25 10:30:00', '2023-11-27 12:00:00', 'pay000000002', 0, 'Sophia',     'Garcia',   'sophia@example.com',   'usr000000001', '6666666666', NULL, 0, 'Đã sử dụng', 1, NULL);

INSERT INTO BookingDetail (book_id, room_id, book_final_cost, book_num_room, book_num_adult, book_num_child)
VALUES
    ('boo000000001', 'roo000000001', 150.00, 2, 2, 0),
    ('boo000000001', 'roo000000002', 180.00, 1, 1, 0),
    ('boo000000002', 'roo000000003', 200.00, 1, 2, 1),
    ('boo000000003', 'roo000000004', 120.00, 1, 1, 0),
    ('boo000000004', 'roo000000005', 160.00, 2, 2, 1),
    ('boo000000005', 'roo000000006', 180.00, 1, 1, 0),
    ('boo000000006', 'roo000000007', 250.00, 1, 2, 1),
    ('boo000000007', 'roo000000008', 190.00, 1, 1, 0),
    ('boo000000008', 'roo000000009', 170.00, 2, 2, 1),
    ('boo000000009', 'roo000000010', 140.00, 1, 1, 0),
    ('boo000000010', 'roo000000010', 140.00, 1, 1, 0);

INSERT INTO Rating (au_user_id, room_id, rating_datetime, rating_context, rating_point)
VALUES
    ('usr000000001', 'roo000000001', '2023-10-27 14:30:00', 'The room was clean and comfortable.', 4.5),
    ('usr000000002', 'roo000000002', '2023-10-28 11:00:00', 'Great service and amenities.', 5.0),
    ('usr000000003', 'roo000000003', '2023-10-29 09:45:00', 'The room had a nice view.', 4.0),
    ('usr000000001', 'roo000000004', '2023-10-30 16:15:00', 'The staff was friendly and helpful.', 4.8),
    ('usr000000002', 'roo000000005', '2023-10-31 13:30:00', 'The room was spacious and well-maintained.', 4.7);

INSERT INTO Notification (noti_id, noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url)
VALUES
    ('not000000001', 'Type 1', 'Notification 1', 'Subtitle for Notification 1', '2023-10-27 10:30:00', 'Content of Notification 1', NULL),
    ('not000000002', 'Type 2', 'Notification 2', 'Subtitle for Notification 2', '2023-10-28 14:45:00', 'Content of Notification 2', NULL),
    ('not000000003', 'Type 1', 'Notification 3', 'Subtitle for Notification 3', '2023-10-29 09:15:00', 'Content of Notification 3', NULL),
    ('not000000004', 'Type 3', 'Notification 4', 'Subtitle for Notification 4', '2023-10-30 12:00:00', 'Content of Notification 4', NULL),
    ('not000000005', 'Type 2', 'Notification 5', NULL, '2023-10-31 16:30:00', 'Content of Notification 5', NULL);

INSERT INTO UserNoti (au_user_id, noti_id, usernoti_is_read)
VALUES
    ('usr000000001', 'not000000001', 1),
    ('usr000000001', 'not000000002', 0),
    ('usr000000002', 'not000000003', 1),
    ('usr000000003', 'not000000004', 0),
    ('usr000000003', 'not000000005', 0);