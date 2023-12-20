-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 20, 2023 lúc 01:46 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `database_se104`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accofea`
--

CREATE TABLE `accofea` (
  `fea_id` int(11) NOT NULL,
  `acco_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accofea`
--

INSERT INTO `accofea` (`fea_id`, `acco_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 4),
(4, 1),
(4, 3),
(4, 4),
(5, 2),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(6, 3),
(6, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accoimg`
--

CREATE TABLE `accoimg` (
  `acco_id` int(11) NOT NULL,
  `acco_img_url` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accoimg`
--

INSERT INTO `accoimg` (`acco_id`, `acco_img_url`) VALUES
(1, 'accommodation_1.jpg'),
(1, 'accommodation_2.jpg'),
(1, 'accommodation_3.jpg'),
(1, 'accommodation_4.jpg'),
(2, 'accommodation_5.jpg'),
(2, 'accommodation_6.jpg'),
(2, 'accommodation_7.jpg'),
(2, 'accommodation_8.jpg'),
(3, 'accommodation_1.jpg'),
(3, 'accommodation_10.jpg'),
(3, 'accommodation_2.jpg'),
(3, 'accommodation_9.jpg'),
(4, 'accommodation_3.jpg'),
(4, 'accommodation_5.jpg'),
(4, 'accommodation_7.jpg'),
(4, 'accommodation_9.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accommodation`
--

CREATE TABLE `accommodation` (
  `acco_id` int(11) NOT NULL,
  `acco_type` varchar(50) NOT NULL,
  `acco_star` int(11) NOT NULL,
  `acco_tiny_img_url` varchar(50) DEFAULT NULL,
  `acco_name` varchar(100) NOT NULL,
  `acco_logan` varchar(50) DEFAULT NULL,
  `acco_detail` text DEFAULT NULL,
  `acco_exac_location` varchar(50) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `prov_id` int(11) NOT NULL,
  `acco_location_link` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accommodation`
--

INSERT INTO `accommodation` (`acco_id`, `acco_type`, `acco_star`, `acco_tiny_img_url`, `acco_name`, `acco_logan`, `acco_detail`, `acco_exac_location`, `city_id`, `prov_id`, `acco_location_link`) VALUES
(1, 'Hotel', 4, 'accommodation_1.jpg', 'Khách sạn Quê Hương', 'Quê Hương là thiên đường', 'Khách sạn hướng ra sông, có nhà hàng. Có thể nhìn toàn bộ thành phố từ trên cao. Phục vụ 24/24, có dịch vụ giải trí đa dạng ở khách sạn.', '1 Đường Nguyễn Trung Trực', 1, 1, 'https://maps.app.goo.gl/rXUtByLicucWQDej6'),
(2, 'Resort', 5, 'accommodation_2.jpg', 'Sunrise Hotel Bạc Liêu', 'Phục vụ từ tận tâm Sunrise', 'Khách sạn kết hợp khu trung tâm thương mại. Nhiều tiện ích được tích hợp vào nội thất trong Hotel. Phục vụ 24/7.', '22 Đường Trần Huỳnh', NULL, 2, 'https://maps.app.goo.gl/VkrYrsnGhRYBdPfg6'),
(3, 'Hotel', 5, 'accommodation_3.jpg', 'LARA HOTEL LONG XUYEN', 'Đem đến sự chất lượng tuyệt đối cho bạn.', 'Khách sạn bình dị có nhà hàng. Tận hưởng cảm giác gần gũi với thiên nhiên, yên bình. Nhiều hình thức giải trí vui nhộn.', '46-48 Đường Hùng Vương', 5, 6, 'https://maps.app.goo.gl/uoso2HmZ4hM9uEpS9'),
(4, 'Resort', 2, 'accommodation_4.jpg', 'Homestay Coco Island', NULL, 'Khách sạn 2 sao. Có các hình thức dịch vụ đa dạng, thường trực 24/24. Có buffer sáng miễn phí.', '97 Tân Thạch', 2, 3, 'https://maps.app.goo.gl/vDk8xKxDsums4XTo6');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_nickname` varchar(50) NOT NULL,
  `admin_pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_nickname`, `admin_pass`) VALUES
(1, 'admin1', '$2a$08$ymCOpCABEqsCRZzyj9NIFuH.0ulU1O6FbcMVRl9VSL4EM.vdje7wK'),
(2, 'admin2', '$2a$08$dTn4g4gmAvRlxGDxtjPga.qNYldTY/WOl44Ikm7r3pbc7xFzSaZoG'),
(3, 'admin3', '$2a$08$qSLYLuukotwr31gKGxMooeHa73odnhL8bgFPbviqpSvRBUzYbpMk.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authuser`
--

CREATE TABLE `authuser` (
  `au_user_id` int(11) NOT NULL,
  `au_user_first_name` varchar(50) NOT NULL,
  `au_user_last_name` varchar(50) NOT NULL,
  `au_user_email` varchar(50) NOT NULL,
  `au_user_pass` varchar(100) NOT NULL,
  `au_user_avt_url` varchar(50) DEFAULT NULL,
  `au_user_sex` varchar(6) DEFAULT NULL,
  `au_user_birthday` date DEFAULT NULL,
  `bank_default_id` int(11) DEFAULT NULL,
  `debit_default_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `authuser`
--

INSERT INTO `authuser` (`au_user_id`, `au_user_first_name`, `au_user_last_name`, `au_user_email`, `au_user_pass`, `au_user_avt_url`, `au_user_sex`, `au_user_birthday`, `bank_default_id`, `debit_default_id`) VALUES
(1, 'Hiếu', 'Lê', 'lehieudn123@example.com', '$2a$08$ymCOpCABEqsCRZzyj9NIFuH.0ulU1O6FbcMVRl9VSL4EM.vdje7wK', 'user_1.jpg', NULL, NULL, NULL, NULL),
(2, 'Giàu', 'Bùi', 'giaubuibt123@example.com', '$2a$08$dTn4g4gmAvRlxGDxtjPga.qNYldTY/WOl44Ikm7r3pbc7xFzSaZoG', 'user_2.jpg', NULL, NULL, NULL, NULL),
(3, 'Lân', 'Lý', 'lanlyst123@example.com', '$2a$08$qSLYLuukotwr31gKGxMooeHa73odnhL8bgFPbviqpSvRBUzYbpMk.', 'user_3.jpg', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bankcard`
--

CREATE TABLE `bankcard` (
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(50) NOT NULL,
  `bank_branch` varchar(50) NOT NULL,
  `bank_num` varchar(16) NOT NULL,
  `bank_name_pers` varchar(50) NOT NULL,
  `au_user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bankcard`
--

INSERT INTO `bankcard` (`bank_id`, `bank_name`, `bank_branch`, `bank_num`, `bank_name_pers`, `au_user_id`) VALUES
(1, 'Vietcombank', 'Đông Sài Gòn', '1111222233334444', 'LE HIEU', 1),
(2, 'BIDV', 'Bình Dương', '5555222233334444', 'LE HIEU', 1),
(3, 'MB', 'Hồ Chí Minh', '5555666677778888', 'BUI GIAU', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booking`
--

CREATE TABLE `booking` (
  `book_id` int(11) NOT NULL,
  `acco_id` int(11) NOT NULL,
  `au_user_id` int(11) NOT NULL,
  `book_datetime` datetime NOT NULL,
  `book_start_datetime` datetime NOT NULL,
  `book_end_datetime` datetime NOT NULL,
  `book_num_adult` int(11) NOT NULL,
  `book_num_child` int(11) NOT NULL,
  `book_cost_before` float NOT NULL DEFAULT 0,
  `book_cost_after` float NOT NULL DEFAULT 0,
  `book_first_name` varchar(50) NOT NULL,
  `book_last_name` varchar(50) NOT NULL,
  `book_email` varchar(50) NOT NULL,
  `book_phone` char(10) NOT NULL,
  `pay_id` int(11) NOT NULL,
  `book_note` text DEFAULT NULL,
  `cancel_cost` float NOT NULL,
  `book_status` int(11) NOT NULL,
  `book_is_paid` int(11) NOT NULL,
  `rea_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `booking`
--

INSERT INTO `booking` (`book_id`, `acco_id`, `au_user_id`, `book_datetime`, `book_start_datetime`, `book_end_datetime`, `book_num_adult`, `book_num_child`, `book_cost_before`, `book_cost_after`, `book_first_name`, `book_last_name`, `book_email`, `book_phone`, `pay_id`, `book_note`, `cancel_cost`, `book_status`, `book_is_paid`, `rea_id`) VALUES
(1, 1, 3, '2023-10-27 10:00:00', '2023-11-01 14:00:00', '2023-11-05 11:00:00', 1, 0, 31200000, 19200000, 'Hiếu', 'Lê', 'lehieudn123@example.com', '1234567890', 1, NULL, 0, 1, 1, NULL),
(2, 2, 2, '2023-10-28 11:30:00', '2023-11-02 12:00:00', '2023-11-03 10:00:00', 2, 0, 2000000, 2000000, 'Cẩm', 'Lâm', 'lamcamtv123@example.com', '9876543210', 2, NULL, 0, 1, 1, NULL),
(3, 3, 1, '2023-10-29 09:15:00', '2023-11-04 15:00:00', '2023-11-06 12:00:00', 3, 0, 4400000, 2400000, 'Mạnh', 'Lê', 'lemanhtn123@example.com', '5555555555', 3, NULL, 0, 1, 1, NULL),
(4, 4, 2, '2023-10-30 14:45:00', '2023-11-07 13:00:00', '2023-11-08 09:00:00', 1, 0, 5200000, 3200000, 'Nhung', 'Nguyễn', 'nguyennhung123@example.com', '1111111111', 1, NULL, 0, 1, 1, NULL),
(5, 3, 1, '2023-10-31 16:30:00', '2023-11-09 10:00:00', '2023-11-11 17:00:00', 2, 0, 5600000, 3600000, 'Như', 'Đặng', 'dangnhubd123@example.com', '9999999999', 2, NULL, 0, 1, 1, NULL),
(6, 2, 2, '2023-11-01 12:00:00', '2023-11-12 14:30:00', '2023-11-15 11:00:00', 1, 0, 7500000, 7500000, 'Giàu', 'Bùi', 'buigiaubt123@example.com', '7777777777', 3, NULL, 0, 1, 1, NULL),
(7, 1, 1, '2023-11-02 10:30:00', '2023-11-16 09:00:00', '2023-11-18 12:00:00', 2, 0, 5800000, 3800000, 'Nhi', 'Bùi', 'buinhitn123@example.com', '2222222222', 1, NULL, 0, 1, 1, NULL),
(8, 2, 2, '2023-11-03 15:15:00', '2023-11-19 11:30:00', '2023-11-21 10:00:00', 3, 0, 10800000, 6800000, 'Lân', 'Lý', 'lylanst123@example.com', '8888888888', 2, NULL, 0, 1, 1, NULL),
(9, 4, 1, '2023-11-04 11:45:00', '2023-11-22 14:00:00', '2023-11-24 09:30:00', 1, 0, 4800000, 2800000, 'Yến', 'Phan', 'phanyenct123@example.com', '4444444444', 3, NULL, 0, 1, 1, NULL),
(10, 4, 1, '2023-09-05 09:00:00', '2023-10-25 10:30:00', '2023-10-27 12:00:00', 2, 0, 4800000, 2800000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL),
(11, 3, 2, '2023-09-30 16:30:00', '2023-10-09 10:45:00', '2023-10-11 17:00:00', 2, 0, 10000000, 6000000, 'Như', 'Đặng', 'dangnhubd123@example.com', '9999999999', 2, NULL, 0, 1, 1, NULL),
(12, 2, 1, '2023-09-01 14:45:00', '2023-10-12 14:30:00', '2023-10-15 11:00:00', 1, 0, 8400000, 5400000, 'Giàu', 'Bùi', 'buigiaubt123@example.com', '7777777777', 3, NULL, 0, 1, 1, NULL),
(13, 1, 3, '2023-09-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 4000000, 4000000, 'Nhi', 'Bùi', 'buinhitn123@example.com', '2222222222', 1, NULL, 0, 1, 1, NULL),
(14, 2, 1, '2023-09-03 15:15:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 4400000, 2400000, 'Lân', 'Lý', 'lylanst123@example.com', '8888888888', 2, NULL, 0, 1, 1, NULL),
(15, 4, 2, '2023-09-04 11:45:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 10400000, 6400000, 'Yến', 'Phan', 'phanyenct123@example.com', '4444444444', 3, NULL, 0, 1, 1, NULL),
(16, 4, 3, '2023-08-05 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 5600000, 3600000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL),
(17, 2, 3, '2023-08-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 5000000, 5000000, 'Nhi', 'Bùi', 'buinhitn123@example.com', '2222222222', 1, NULL, 0, 1, 1, NULL),
(18, 3, 1, '2023-08-18 15:30:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 5800000, 3800000, 'Lân', 'Lý', 'lylanst123@example.com', '8888888888', 2, NULL, 0, 1, 1, NULL),
(19, 1, 2, '2023-08-23 11:30:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 10800000, 6800000, 'Yến', 'Phan', 'phanyenct123@example.com', '4444444444', 3, NULL, 0, 1, 1, NULL),
(20, 4, 3, '2023-08-19 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 4800000, 2800000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL),
(21, 4, 1, '2023-09-05 09:00:00', '2023-10-25 10:30:00', '2023-10-27 12:00:00', 2, 0, 4800000, 2800000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL),
(22, 3, 2, '2023-09-30 16:30:00', '2023-10-09 10:45:00', '2023-10-11 17:00:00', 2, 0, 5800000, 3800000, 'Như', 'Đặng', 'dangnhubd123@example.com', '9999999999', 2, NULL, 0, 1, 1, NULL),
(23, 2, 1, '2023-09-01 14:45:00', '2023-10-12 14:30:00', '2023-10-15 11:00:00', 1, 0, 16200000, 10200000, 'Giàu', 'Bùi', 'buigiaubt123@example.com', '7777777777', 3, NULL, 0, 1, 1, NULL),
(24, 1, 3, '2023-09-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 4800000, 2800000, 'Nhi', 'Bùi', 'buinhitn123@example.com', '2222222222', 1, NULL, 0, 1, 1, NULL),
(25, 2, 1, '2023-09-03 15:15:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 4800000, 2800000, 'Lân', 'Lý', 'lylanst123@example.com', '8888888888', 2, NULL, 0, 1, 1, NULL),
(26, 4, 2, '2023-09-04 11:45:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 5600000, 3600000, 'Yến', 'Phan', 'phanyenct123@example.com', '4444444444', 3, NULL, 0, 1, 1, NULL),
(27, 4, 3, '2023-08-05 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 5000000, 5000000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL),
(28, 2, 3, '2023-08-02 10:30:00', '2023-10-16 09:15:00', '2023-10-18 12:00:00', 2, 0, 5800000, 3800000, 'Nhi', 'Bùi', 'buinhitn123@example.com', '2222222222', 1, NULL, 0, 1, 1, NULL),
(29, 3, 1, '2023-08-18 15:30:00', '2023-09-19 11:30:00', '2023-09-21 10:00:00', 3, 0, 10800000, 6800000, 'Lân', 'Lý', 'lylanst123@example.com', '8888888888', 2, NULL, 0, 1, 1, NULL),
(30, 1, 2, '2023-08-23 11:30:00', '2023-09-22 14:30:00', '2023-09-24 09:30:00', 1, 0, 4800000, 2800000, 'Yến', 'Phan', 'phanyenct123@example.com', '4444444444', 3, NULL, 0, 1, 1, NULL),
(31, 4, 3, '2023-08-19 09:45:00', '2023-09-25 10:30:00', '2023-09-27 12:00:00', 2, 0, 4800000, 2800000, 'Nam', 'Trịnh', 'trinhnamtn123@example.com', '6666666666', 1, NULL, 0, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookingdetail`
--

CREATE TABLE `bookingdetail` (
  `book_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `book_room_cost_before` float NOT NULL,
  `book_room_cost_after` float NOT NULL,
  `book_num_room` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bookingdetail`
--

INSERT INTO `bookingdetail` (`book_id`, `room_id`, `book_room_cost_before`, `book_room_cost_after`, `book_num_room`) VALUES
(1, 1, 2500000, 1500000, 2),
(1, 2, 2800000, 1800000, 1),
(2, 3, 2000000, 2000000, 1),
(3, 4, 2200000, 1200000, 1),
(4, 5, 2600000, 1600000, 2),
(5, 6, 2800000, 1800000, 1),
(6, 7, 2500000, 2500000, 1),
(7, 8, 2900000, 1900000, 1),
(8, 9, 2700000, 1700000, 2),
(9, 10, 2400000, 1400000, 1),
(10, 10, 2400000, 1400000, 1),
(11, 1, 2500000, 1500000, 2),
(12, 2, 2800000, 1800000, 1),
(13, 3, 2000000, 2000000, 1),
(14, 4, 2200000, 1200000, 1),
(15, 5, 2600000, 1600000, 2),
(16, 6, 2800000, 1800000, 1),
(17, 7, 2500000, 2500000, 1),
(18, 8, 2900000, 1900000, 1),
(19, 9, 2700000, 1700000, 2),
(20, 10, 2400000, 1400000, 1),
(21, 1, 2400000, 1400000, 1),
(22, 2, 2900000, 1900000, 1),
(23, 3, 2700000, 1700000, 2),
(24, 4, 2400000, 1400000, 1),
(25, 5, 2400000, 1400000, 1),
(26, 6, 2800000, 1800000, 1),
(27, 7, 2500000, 2500000, 1),
(28, 8, 2900000, 1900000, 1),
(29, 9, 2700000, 1700000, 2),
(30, 10, 2400000, 1400000, 1),
(31, 1, 2400000, 1400000, 1);

--
-- Bẫy `bookingdetail`
--
DELIMITER $$
CREATE TRIGGER `trg_UpdateBookingTotalCost_Insert` AFTER INSERT ON `bookingdetail` FOR EACH ROW BEGIN
    -- Calculate the total cost from BookingDetails
    SET @book_id_int = NEW.book_id;
    -- Declare and set the variable @book_days
    SET @book_days := (
        SELECT DATEDIFF(book_end_datetime, book_start_datetime)
        FROM Booking
        WHERE book_id = @book_id_int
    );
    -- Calculate the total cost and update the book_total_cost column in the Booking table
    UPDATE Booking
    SET book_cost_after = (
        SELECT SUM(bd.book_room_cost_after * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ) * @book_days,  book_cost_before = (
        SELECT SUM(bd.book_room_cost_before * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ) * @book_days
    WHERE book_id = @book_id_int;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_UpdateBookingTotalCost_Update` AFTER UPDATE ON `bookingdetail` FOR EACH ROW BEGIN
    -- Calculate the total cost from BookingDetails
    SET @book_id_int = NEW.book_id;
    -- Calculate the total cost and update the book_total_cost column in the Booking table
    UPDATE Booking
    SET book_cost_after = (
        SELECT SUM(bd.book_room_cost_after * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ),  book_cost_before = (
        SELECT SUM(bd.book_room_cost_before * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    )
    WHERE book_id = @book_id_int;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `city_url` varchar(50) DEFAULT NULL,
  `prov_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `city_url`, `prov_id`) VALUES
(1, 'Thành phố Sóc Trăng', NULL, 1),
(2, 'Thành phố Bến Tre', NULL, 3),
(3, 'Thành phố Trà Vinh', NULL, 4),
(4, 'Thành phố Vĩnh Long', NULL, 5),
(5, 'Thành phố Long Xuyên', NULL, 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `debitcard`
--

CREATE TABLE `debitcard` (
  `debit_id` int(11) NOT NULL,
  `debit_num` varchar(16) NOT NULL,
  `debit_end_date` datetime NOT NULL,
  `debit_CCV` varchar(10) NOT NULL,
  `debit_name` varchar(50) NOT NULL,
  `debit_address` varchar(50) NOT NULL,
  `debit_postal` varchar(10) NOT NULL,
  `au_user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `debitcard`
--

INSERT INTO `debitcard` (`debit_id`, `debit_num`, `debit_end_date`, `debit_CCV`, `debit_name`, `debit_address`, `debit_postal`, `au_user_id`) VALUES
(1, '1111222233334444', '2023-12-31 23:59:59', '123', 'VISA', 'Đường Tô Vĩnh Diện', '12345', 1),
(2, '9999111111112222', '2025-03-31 23:59:59', '789', 'MASTER CARD', 'Đường Hàn Thuyên', '54321', 3),
(3, '9999888811112222', '2025-03-31 23:59:59', '910', 'VISA', 'Đường Hàn Thuyên', '54321', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `extension`
--

CREATE TABLE `extension` (
  `exte_id` int(11) NOT NULL,
  `exte_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `extension`
--

INSERT INTO `extension` (`exte_id`, `exte_name`) VALUES
(9, 'Bồn tắm lớn'),
(1, 'Buffet sáng'),
(8, 'Ghế sofa'),
(3, 'Không thuốc lá'),
(4, 'Thú cưng'),
(5, 'Tủ lạnh'),
(10, 'TV màn hình phẳng'),
(6, 'Vòi hoa sen'),
(2, 'Wifi'),
(7, 'Điều hòa không khí');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feature`
--

CREATE TABLE `feature` (
  `fea_id` int(11) NOT NULL,
  `fea_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `feature`
--

INSERT INTO `feature` (`fea_id`, `fea_name`) VALUES
(4, 'An ninh đảm bảo'),
(3, 'Chỗ đậu xe miễn phí'),
(1, 'Giáp biển'),
(6, 'Hồ bơi'),
(2, 'Sân vườn'),
(5, 'Thang máy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `notification`
--

CREATE TABLE `notification` (
  `noti_id` int(11) NOT NULL,
  `noti_type` varchar(50) NOT NULL,
  `noti_title` varchar(50) NOT NULL,
  `noti_subtitle` text DEFAULT NULL,
  `noti_datetime` datetime DEFAULT NULL,
  `noti_content` text NOT NULL,
  `noti_dest_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `notification`
--

INSERT INTO `notification` (`noti_id`, `noti_type`, `noti_title`, `noti_subtitle`, `noti_datetime`, `noti_content`, `noti_dest_url`) VALUES
(1, 'Type 1', 'CẬP NHẬT MẬT KHẨU', 'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.', '2023-10-27 10:30:00', 'Bạn vừa cập nhật mật khẩu của mình thành công. Điều này là một bước quan trọng để bảo vệ thông tin cá nhân của bạn và đảm bảo an toàn khi sử dụng dịch vụ của chúng tôi. Để đảm bảo rằng hành động này là do bạn thực hiện, hãy kiểm tra lịch sử đăng nhập và thông báo bảo mật được gửi đến bạn.', NULL),
(2, 'Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!', '2023-10-28 14:45:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
(3, 'Type 1', 'CẬP NHẬT MẬT KHẨU', 'Bạn vừa cập nhật mật khẩu thành công. Hãy đảm bảo rằng hành động này được thực hiện bởi bạn.', '2023-10-29 09:15:00', 'Bạn vừa cập nhật mật khẩu của mình thành công. Điều này là một bước quan trọng để bảo vệ thông tin cá nhân của bạn và đảm bảo an toàn khi sử dụng dịch vụ của chúng tôi. Để đảm bảo rằng hành động này là do bạn thực hiện, hãy kiểm tra lịch sử đăng nhập và thông báo bảo mật được gửi đến bạn.', NULL),
(4, 'Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!', '2023-10-30 12:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
(5, 'Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!', '2023-10-30 12:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL),
(6, 'Type 2', 'HÈ THẢ GA CÙNG 2WAYS', 'Tận hưởng mùa hè sôi động của bạn với những ưu đãi lớn nhất từ 2WAYS, đặt phòng ngay!!!', '2023-10-31 16:30:00', 'Mùa hè đã chính thức bắt đầu và 2WAYS không ngừng mang đến cho bạn những trải nghiệm không giới hạn và ưu đãi hấp dẫn nhất để tận hưởng mùa hè độc đáo này. Đặt phòng ngay hôm nay và bạn sẽ được trải nghiệm không gian thoải mái, dịch vụ chuyên nghiệp và những ưu đãi đặc biệt chỉ có tại 2WAYS.', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payingmethod`
--

CREATE TABLE `payingmethod` (
  `pay_id` int(11) NOT NULL,
  `pay_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `payingmethod`
--

INSERT INTO `payingmethod` (`pay_id`, `pay_name`) VALUES
(2, 'bankcard'),
(1, 'cash'),
(3, 'debitcard');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `province`
--

CREATE TABLE `province` (
  `prov_id` int(11) NOT NULL,
  `prov_name` varchar(100) NOT NULL,
  `prov_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `province`
--

INSERT INTO `province` (`prov_id`, `prov_name`, `prov_url`) VALUES
(1, 'Sóc Trăng', 'Soc+Trang'),
(2, 'Bạc Liêu', 'Bac+Lieu'),
(3, 'Bến Tre', 'Ben+Tre'),
(4, 'Trà Vinh', 'Tra+Vinh'),
(5, 'Vĩnh Long', 'Vinh+Long'),
(6, 'An Giang', 'An+Giang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rating`
--

CREATE TABLE `rating` (
  `au_user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `rating_datetime` datetime NOT NULL,
  `rating_context` text DEFAULT NULL,
  `rating_point` decimal(10,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `rating`
--

INSERT INTO `rating` (`au_user_id`, `room_id`, `rating_datetime`, `rating_context`, `rating_point`) VALUES
(1, 1, '2023-10-27 14:30:00', 'Phòng sạch sẽ, thơm.', 9.5),
(1, 2, '2023-09-22 11:30:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.', 9.7),
(1, 2, '2023-09-25 11:30:00', 'Đồ ăn ngon, chất lượng.', 9.8),
(1, 2, '2023-10-20 16:15:00', 'Đồ ăn ngon, chất lượng.', 9.8),
(1, 2, '2023-10-25 12:15:00', 'Bữa tối ngon miệng, phục vụ nhanh chóng.', 9.8),
(1, 2, '2023-10-27 12:45:00', 'Bể bơi sạch sẽ, thích hợp cho gia đình.', 9.6),
(1, 2, '2023-11-05 14:30:00', 'Không gian phòng ấm cúng, nhân viên nhiệt tình.', 9.3),
(1, 3, '2023-10-07 08:45:00', 'Nhân viên lễ tân nhiệt tình, nhanh nhẹn.', 9.2),
(1, 3, '2023-10-29 10:45:00', 'Phòng tiện nghi, rất đáng tiền.', 9.5),
(1, 3, '2023-11-10 11:15:00', 'Bữa sáng ngon miệng, đa dạng lựa chọn.', 9.8),
(1, 4, '2023-09-20 14:00:00', 'Đội ngũ nhân viên phục vụ chu đáo.', 9.5),
(1, 4, '2023-09-24 14:00:00', 'Dịch vụ đáng giá tiền, phòng sạch sẽ.', 9.5),
(1, 4, '2023-09-26 14:45:00', 'Khách sạn nằm gần các điểm tham quan.', 9.5),
(1, 4, '2023-10-02 09:30:00', 'Khách sạn nằm gần các điểm tham quan.', 9.5),
(1, 4, '2023-10-05 14:45:00', 'Đội ngũ nhân viên phục vụ chu đáo.', 9.5),
(1, 4, '2023-10-30 16:15:00', 'Tuyệt vời!!!!', 9.8),
(1, 4, '2023-11-12 13:15:00', 'Phòng tắm tiện nghi, đầy đủ vật dụng.', 9.7),
(1, 4, '2023-11-15 20:45:00', 'Giá cả hợp lý, phòng sạch sẽ.', 8.8),
(1, 5, '2023-10-31 19:30:00', 'Phòng đẹp nhưng phục vụ có thái độ.', 7.0),
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
(2, 2, '2023-10-02 10:00:00', 'Dịch vụ phòng sạch sẽ, thái độ phục vụ tốt.', 9.4),
(2, 2, '2023-10-28 11:00:00', 'Dịch vụ phòng tốt, lễ tân lịch sự.', 10.0),
(2, 2, '2023-11-20 12:30:00', 'Dịch vụ chăm sóc khách hàng xuất sắc.', 9.7),
(2, 3, '2023-09-23 20:00:00', 'Phòng được trang bị đầy đủ tiện nghi.', 9.7),
(2, 3, '2023-09-25 12:30:00', 'Phòng được trang bị đầy đủ tiện nghi.', 9.7),
(2, 3, '2023-10-05 09:30:00', 'Không gian quán bar thoải mái, đồ uống ngon.', 9.7),
(2, 3, '2023-11-02 09:30:00', 'Không gian lễ tân sang trọng.', 9.7),
(2, 3, '2023-11-05 09:00:00', 'Không gian thoải mái, nhân viên thân thiện.', 9.2),
(2, 3, '2023-11-25 20:00:00', 'Không gian quán bar thoải mái, đồ uống ngon.', 9.6),
(2, 4, '2023-10-30 14:15:00', 'Thích ở đây sự riêng tư', 9.8),
(2, 4, '2023-11-15 16:45:00', 'Dịch vụ phòng hỗ trợ nhanh chóng.', 9.5),
(2, 5, '2023-09-21 18:45:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.', 9.6),
(2, 5, '2023-09-23 19:30:00', 'Dịch vụ đáng khen ngợi, nhân viên thân thiện.', 9.6),
(2, 5, '2023-10-10 19:30:00', 'Phòng ốc sạch sẽ, trang thiết bị đầy đủ.', 9.6),
(2, 5, '2023-10-17 19:30:00', 'Dịch vụ đáng giá tiền.', 9.5),
(2, 5, '2023-10-31 13:30:00', 'sạch, đẹp, có tiện ích đầy đủ.', 9.7),
(2, 5, '2023-11-12 18:45:00', 'Nhân viên nhanh nhẹn, phục vụ chu đáo.', 9.6),
(2, 5, '2023-11-20 21:00:00', 'Phòng đẹp, view hồ hút mắt.', 9.7),
(2, 5, '2023-11-30 22:00:00', 'Phòng ốc rộng rãi, view tuyệt vời.', 9.9),
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
(3, 1, '2023-09-20 16:15:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.', 9.3),
(3, 1, '2023-09-29 17:00:00', 'Phòng ốc rộng rãi, thoải mái.', 9.4),
(3, 1, '2023-10-17 16:15:00', 'Phòng ốc thoải mái, đầy đủ tiện nghi.', 9.3),
(3, 1, '2023-11-11 16:30:00', 'Đồ ăn khách sạn dở nhưng dịch vụ tốt.', 8.0),
(3, 1, '2023-11-15 17:00:00', 'Dịch vụ phòng tận tâm, đáng giá tiền.', 9.3),
(3, 1, '2023-11-22 15:00:00', 'Thức ăn phong phú, hấp dẫn.', 9.8),
(3, 1, '2023-11-25 17:30:00', 'Không gian yên tĩnh, thích hợp cho công việc.', 9.6),
(3, 1, '2023-11-25 18:15:00', 'Khách sạn nằm gần trung tâm thành phố, thuận tiện di chuyển.', 9.5),
(3, 2, '2023-10-28 13:00:00', '10đ tuyệt vời.', 10.0),
(3, 3, '2023-10-29 09:45:00', 'Phòng có view tuyệt đẹpppppp.', 9.0),
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

--
-- Bẫy `rating`
--
DELIMITER $$
CREATE TRIGGER `trg_RoomAvgRating_Insert` AFTER INSERT ON `rating` FOR EACH ROW BEGIN
    DECLARE total_points FLOAT;
    DECLARE total_ratings INT;
    -- Calculate total rating points and quantity for the specific room_id
    SELECT SUM(rating_point), COUNT(*) 
    INTO total_points, total_ratings
    FROM Rating
    WHERE room_id = NEW.room_id;
    -- Update avg_rating in RoomType table
    UPDATE RoomType
    SET room_avg_rating = IF(total_ratings > 0, total_points / total_ratings, 0)
    WHERE room_id = NEW.room_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_RoomCountRating_Insert` AFTER INSERT ON `rating` FOR EACH ROW BEGIN
    DECLARE room_id_int INT;
    DECLARE count_ratings INT;
    SELECT NEW.room_id, COUNT(*)
    INTO room_id_int, count_ratings
    FROM Rating
    WHERE room_id = NEW.room_id
    GROUP BY room_id;
    UPDATE RoomType
    SET room_count_rating = count_ratings
    WHERE room_id = room_id_int;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reasoncancel`
--

CREATE TABLE `reasoncancel` (
  `rea_id` int(11) NOT NULL,
  `rea_description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `reasoncancel`
--

INSERT INTO `reasoncancel` (`rea_id`, `rea_description`) VALUES
(2, 'Chỗ nghỉ yêu cầu hủy'),
(6, 'Không phải lý do trên'),
(5, 'Lý do cá nhân/chuyến đi bị hủy'),
(3, 'Số lượng hoặc nhu cầu của tôi thay đổi'),
(1, 'Tôi đã tìm được lựa chọn chỗ nghỉ thay thế'),
(4, 'Đổi ngày hoặc điểm đến');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roomexte`
--

CREATE TABLE `roomexte` (
  `room_id` int(11) NOT NULL,
  `exte_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roomexte`
--

INSERT INTO `roomexte` (`room_id`, `exte_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roomtype`
--

CREATE TABLE `roomtype` (
  `room_id` int(11) NOT NULL,
  `room_name` varchar(100) NOT NULL,
  `room_class` varchar(50) NOT NULL,
  `room_type` varchar(10) NOT NULL,
  `room_max_adult` int(11) NOT NULL,
  `room_max_child` int(11) NOT NULL,
  `room_single_bed` int(11) NOT NULL,
  `room_double_bed` int(11) NOT NULL,
  `room_total` int(11) NOT NULL,
  `room_details_img_url` varchar(50) DEFAULT NULL,
  `room_area` decimal(10,2) DEFAULT NULL,
  `room_cost` decimal(10,2) NOT NULL,
  `room_discount` decimal(10,2) DEFAULT NULL,
  `room_date_end_discount` date DEFAULT NULL,
  `room_avg_rating` float DEFAULT 0,
  `room_count_rating` int(11) DEFAULT 0,
  `acco_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roomtype`
--

INSERT INTO `roomtype` (`room_id`, `room_name`, `room_class`, `room_type`, `room_max_adult`, `room_max_child`, `room_single_bed`, `room_double_bed`, `room_total`, `room_details_img_url`, `room_area`, `room_cost`, `room_discount`, `room_date_end_discount`, `room_avg_rating`, `room_count_rating`, `acco_id`) VALUES
(1, 'Phòng đôi Tiêu chuẩn tầm nhìn ra biển', 'Tiêu chuẩn', 'Phòng đôi', 1, 0, 1, 0, 10, 'room_1.jpg', 25.50, 1000000.00, NULL, NULL, 9.3, 9, 1),
(2, 'Phòng đôi Sang trọng đầy đủ tiện nghi', 'Sang trọng', 'Phòng đôi', 2, 1, 0, 1, 5, 'room_2.jpg', 35.00, 2000000.00, 0.10, '2023-01-31', 9.71, 10, 1),
(3, 'Phòng đôi Cao cấp nhìn thành phố', 'Cao cấp', 'Phòng đôi', 2, 1, 0, 1, 7, 'room_3.jpg', 38.00, 2200000.00, 0.20, '2023-04-30', 9.51, 10, 1),
(4, 'Phòng gia đình Cao cấp có không gian chung', 'Cao cấp', 'Phòng gia ', 2, 2, 1, 2, 3, 'room_4.jpg', 45.20, 3000000.00, NULL, NULL, 9.51, 10, 2),
(5, 'Phòng đơn Tiêu chuẩn không gian yên tĩnh', 'Tiêu chuẩn', 'Phòng đơn', 1, 0, 1, 0, 12, 'room_5.jpg', 32.00, 1500000.00, NULL, NULL, 9.35556, 9, 2),
(6, 'Phòng gia đình Cao cấp có buffet sáng', 'Cao cấp', 'Phòng gia ', 2, 2, 1, 2, 5, 'room_6.jpg', 48.70, 3200000.00, NULL, NULL, 9.3, 9, 2),
(7, 'Phòng gia đình Cao cấp nhìn ra biển', 'Cao cấp', 'Phòng gia ', 2, 2, 1, 2, 4, 'room_7.jpg', 50.00, 3500000.00, 0.15, '2023-03-31', 9.71, 10, 3),
(8, 'Phòng đơn Tiêu chuẩn có không gian làm việc', 'Tiêu chuẩn', 'Phòng đơn', 1, 0, 1, 0, 8, 'room_8.jpg', 30.00, 1200000.00, 0.05, '2023-02-28', 9.51, 10, 3),
(9, 'Phòng đôi Thượng hạng có bồn tắm', 'Thượng hạng', 'Phòng đôi', 2, 1, 0, 1, 6, 'room_9.jpg', 28.50, 1800000.00, NULL, NULL, 9.51111, 9, 4),
(10, 'Phòng đơn Tiêu chuẩn phục vụ 24/24', 'Tiêu chuẩn', 'Phòng đơn', 1, 0, 1, 0, 9, 'room_10.jpg', 29.80, 1100000.00, 0.10, '2023-05-31', 9.37, 10, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roomtypeimg`
--

CREATE TABLE `roomtypeimg` (
  `room_id` int(11) NOT NULL,
  `room_type_image_url` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roomtypeimg`
--

INSERT INTO `roomtypeimg` (`room_id`, `room_type_image_url`) VALUES
(1, 'room_1.jpg'),
(1, 'room_2.jpg'),
(1, 'room_3.jpg'),
(1, 'room_4.jpg'),
(1, 'room_5.jpg'),
(1, 'room_6.jpg'),
(2, 'room_10.jpg'),
(2, 'room_11.jpg'),
(2, 'room_12.jpg'),
(2, 'room_7.jpg'),
(2, 'room_8.jpg'),
(2, 'room_9.jpg'),
(3, 'room_13.jpg'),
(3, 'room_14.jpg'),
(3, 'room_15.jpg'),
(3, 'room_16.jpg'),
(3, 'room_17.jpg'),
(3, 'room_18.jpg'),
(4, 'room_19.jpg'),
(4, 'room_20.jpg'),
(4, 'room_21.jpg'),
(4, 'room_22.jpg'),
(4, 'room_23.jpg'),
(5, 'room_24.jpg'),
(5, 'room_25.jpg'),
(5, 'room_26.jpg'),
(5, 'room_27.jpg'),
(5, 'room_28.jpg'),
(5, 'room_29.jpg'),
(6, 'room_10.jpg'),
(6, 'room_2.jpg'),
(6, 'room_30.jpg'),
(6, 'room_4.jpg'),
(6, 'room_6.jpg'),
(6, 'room_8.jpg'),
(7, 'room_12.jpg'),
(7, 'room_14.jpg'),
(7, 'room_16.jpg'),
(7, 'room_18.jpg'),
(7, 'room_20.jpg'),
(7, 'room_22.jpg'),
(8, 'room_1.jpg'),
(8, 'room_24.jpg'),
(8, 'room_26.jpg'),
(8, 'room_28.jpg'),
(8, 'room_3.jpg'),
(8, 'room_30.jpg'),
(9, 'room_11.jpg'),
(9, 'room_13.jpg'),
(9, 'room_15.jpg'),
(9, 'room_5.jpg'),
(9, 'room_7.jpg'),
(9, 'room_9.jpg'),
(10, 'room_17.jpg'),
(10, 'room_19.jpg'),
(10, 'room_21.jpg'),
(10, 'room_23.jpg'),
(10, 'room_25.jpg'),
(10, 'room_27.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `usernoti`
--

CREATE TABLE `usernoti` (
  `au_user_id` int(11) NOT NULL,
  `noti_id` int(11) NOT NULL,
  `usernoti_is_read` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `usernoti`
--

INSERT INTO `usernoti` (`au_user_id`, `noti_id`, `usernoti_is_read`) VALUES
(1, 1, 1),
(1, 2, 0),
(2, 3, 1),
(3, 4, 0),
(3, 5, 0);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_acco`
-- (See below for the actual view)
--
CREATE TABLE `view_acco` (
`acco_id` int(11)
,`acco_type` varchar(50)
,`acco_star` int(11)
,`acco_tiny_img_url` varchar(50)
,`acco_name` varchar(100)
,`acco_logan` varchar(50)
,`acco_detail` text
,`acco_exac_location` varchar(50)
,`city_id` int(11)
,`prov_id` int(11)
,`acco_location_link` varchar(100)
,`city_name` varchar(50)
,`prov_name` varchar(100)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_authuser`
-- (See below for the actual view)
--
CREATE TABLE `view_authuser` (
`au_user_id` int(11)
,`au_user_first_name` varchar(50)
,`au_user_last_name` varchar(50)
,`au_user_email` varchar(50)
,`au_user_avt_url` varchar(50)
,`au_user_sex` varchar(6)
,`au_user_birthday` varchar(10)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_bankcard`
-- (See below for the actual view)
--
CREATE TABLE `view_bankcard` (
`bank_name` varchar(50)
,`bank_num` varchar(16)
,`au_user_id` int(11)
,`bank_id` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_booking_admin`
-- (See below for the actual view)
--
CREATE TABLE `view_booking_admin` (
`book_id` int(11)
,`au_user_id` int(11)
,`au_user_full_name` varchar(101)
,`acco_id` int(11)
,`acco_name` varchar(100)
,`book_datetime` datetime
,`book_start_datetime` datetime
,`book_end_datetime` datetime
,`book_num_adult` int(11)
,`book_num_child` int(11)
,`book_cost_before` float
,`book_cost_after` float
,`book_customer_name` varchar(101)
,`book_email` varchar(50)
,`book_phone` char(10)
,`pay_id` int(11)
,`book_note` text
,`cancel_cost` float
,`book_status` int(11)
,`book_is_paid` int(11)
,`rea_id` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_booking_detail`
-- (See below for the actual view)
--
CREATE TABLE `view_booking_detail` (
`au_user_id` int(11)
,`book_id` int(11)
,`room_id` int(11)
,`room_name` varchar(100)
,`room_class` varchar(50)
,`room_type` varchar(10)
,`room_max_adult` int(11)
,`room_max_child` int(11)
,`room_single_bed` int(11)
,`room_double_bed` int(11)
,`room_total` int(11)
,`room_details_img_url` varchar(50)
,`room_area` decimal(10,2)
,`room_cost` decimal(10,2)
,`room_discount` decimal(10,2)
,`room_date_end_discount` date
,`room_avg_rating` float
,`room_count_rating` int(11)
,`acco_id` int(11)
,`book_num_room` int(11)
,`book_room_cost_before` float
,`book_room_cost_after` float
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_booking_history`
-- (See below for the actual view)
--
CREATE TABLE `view_booking_history` (
`acco_id` int(11)
,`acco_type` varchar(50)
,`acco_star` int(11)
,`acco_tiny_img_url` varchar(50)
,`acco_name` varchar(100)
,`acco_logan` varchar(50)
,`acco_detail` text
,`acco_exac_location` varchar(50)
,`city_id` int(11)
,`prov_id` int(11)
,`acco_location_link` varchar(100)
,`city_name` varchar(50)
,`prov_name` varchar(100)
,`book_id` int(11)
,`book_datetime` datetime
,`book_start_datetime` datetime
,`book_end_datetime` datetime
,`book_cost_before` float
,`book_cost_after` float
,`book_customer_name` varchar(101)
,`book_status` int(11)
,`book_is_paid` int(11)
,`au_user_id` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_chart_dashboard`
-- (See below for the actual view)
--
CREATE TABLE `view_chart_dashboard` (
`month` int(2)
,`count_book` bigint(21)
,`count_rating` bigint(21)
,`avg_rating` decimal(14,5)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_debitcard`
-- (See below for the actual view)
--
CREATE TABLE `view_debitcard` (
`debit_name` varchar(50)
,`debit_num` varchar(16)
,`au_user_id` int(11)
,`debit_id` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_name_fea`
-- (See below for the actual view)
--
CREATE TABLE `view_name_fea` (
`acco_id` int(11)
,`fea_id` int(11)
,`fea_name` varchar(50)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_notification`
-- (See below for the actual view)
--
CREATE TABLE `view_notification` (
`noti_id` int(11)
,`noti_type` varchar(50)
,`noti_title` varchar(50)
,`noti_subtitle` text
,`noti_datetime` datetime
,`noti_content` text
,`noti_dest_url` varchar(50)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_rating`
-- (See below for the actual view)
--
CREATE TABLE `view_rating` (
`room_id` int(11)
,`rating_datetime` datetime
,`rating_context` text
,`rating_point` decimal(10,1)
,`au_user_id` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_rating_admin`
-- (See below for the actual view)
--
CREATE TABLE `view_rating_admin` (
`au_user_id` int(11)
,`au_user_full_name` varchar(101)
,`room_id` int(11)
,`rating_datetime` datetime
,`rating_context` text
,`rating_point` decimal(10,1)
,`room_class` varchar(50)
,`room_type` varchar(10)
,`acco_id` int(11)
,`acco_name` varchar(100)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_room_exte`
-- (See below for the actual view)
--
CREATE TABLE `view_room_exte` (
`acco_id` int(11)
,`room_id` int(11)
,`exte_id` int(11)
,`exte_name` varchar(50)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `view_room_rating`
-- (See below for the actual view)
--
CREATE TABLE `view_room_rating` (
`au_user_id` int(11)
,`room_id` int(11)
,`rating_datetime` datetime
,`rating_context` text
,`rating_point` decimal(10,1)
,`acco_id` int(11)
,`au_user_full_name` varchar(101)
,`au_user_avt_url` varchar(50)
);

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_acco`
--
DROP TABLE IF EXISTS `view_acco`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_acco`  AS SELECT `accommodation`.`acco_id` AS `acco_id`, `accommodation`.`acco_type` AS `acco_type`, `accommodation`.`acco_star` AS `acco_star`, `accommodation`.`acco_tiny_img_url` AS `acco_tiny_img_url`, `accommodation`.`acco_name` AS `acco_name`, `accommodation`.`acco_logan` AS `acco_logan`, `accommodation`.`acco_detail` AS `acco_detail`, `accommodation`.`acco_exac_location` AS `acco_exac_location`, `accommodation`.`city_id` AS `city_id`, `accommodation`.`prov_id` AS `prov_id`, `accommodation`.`acco_location_link` AS `acco_location_link`, `city`.`city_name` AS `city_name`, `province`.`prov_name` AS `prov_name` FROM ((`accommodation` left join `city` on(`accommodation`.`city_id` = `city`.`city_id`)) left join `province` on(`province`.`prov_id` = `accommodation`.`prov_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_authuser`
--
DROP TABLE IF EXISTS `view_authuser`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_authuser`  AS SELECT `authuser`.`au_user_id` AS `au_user_id`, `authuser`.`au_user_first_name` AS `au_user_first_name`, `authuser`.`au_user_last_name` AS `au_user_last_name`, `authuser`.`au_user_email` AS `au_user_email`, `authuser`.`au_user_avt_url` AS `au_user_avt_url`, `authuser`.`au_user_sex` AS `au_user_sex`, concat(lpad(year(`authuser`.`au_user_birthday`),4,'0'),'-',lpad(month(`authuser`.`au_user_birthday`),2,'0'),'-',lpad(dayofmonth(`authuser`.`au_user_birthday`),2,'0')) AS `au_user_birthday` FROM `authuser` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_bankcard`
--
DROP TABLE IF EXISTS `view_bankcard`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_bankcard`  AS SELECT `bankcard`.`bank_name` AS `bank_name`, `bankcard`.`bank_num` AS `bank_num`, `bankcard`.`au_user_id` AS `au_user_id`, `bankcard`.`bank_id` AS `bank_id` FROM `bankcard` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_booking_admin`
--
DROP TABLE IF EXISTS `view_booking_admin`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_booking_admin`  AS SELECT `booking`.`book_id` AS `book_id`, `booking`.`au_user_id` AS `au_user_id`, concat(`authuser`.`au_user_last_name`,' ',`authuser`.`au_user_first_name`) AS `au_user_full_name`, `booking`.`acco_id` AS `acco_id`, `accommodation`.`acco_name` AS `acco_name`, `booking`.`book_datetime` AS `book_datetime`, `booking`.`book_start_datetime` AS `book_start_datetime`, `booking`.`book_end_datetime` AS `book_end_datetime`, `booking`.`book_num_adult` AS `book_num_adult`, `booking`.`book_num_child` AS `book_num_child`, `booking`.`book_cost_before` AS `book_cost_before`, `booking`.`book_cost_after` AS `book_cost_after`, concat(`booking`.`book_first_name`,' ',`booking`.`book_last_name`) AS `book_customer_name`, `booking`.`book_email` AS `book_email`, `booking`.`book_phone` AS `book_phone`, `booking`.`pay_id` AS `pay_id`, `booking`.`book_note` AS `book_note`, `booking`.`cancel_cost` AS `cancel_cost`, `booking`.`book_status` AS `book_status`, `booking`.`book_is_paid` AS `book_is_paid`, `booking`.`rea_id` AS `rea_id` FROM ((`booking` join `authuser` on(`booking`.`au_user_id` = `authuser`.`au_user_id`)) join `accommodation` on(`booking`.`acco_id` = `accommodation`.`acco_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_booking_detail`
--
DROP TABLE IF EXISTS `view_booking_detail`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_booking_detail`  AS SELECT `booking`.`au_user_id` AS `au_user_id`, `bookingdetail`.`book_id` AS `book_id`, `roomtype`.`room_id` AS `room_id`, `roomtype`.`room_name` AS `room_name`, `roomtype`.`room_class` AS `room_class`, `roomtype`.`room_type` AS `room_type`, `roomtype`.`room_max_adult` AS `room_max_adult`, `roomtype`.`room_max_child` AS `room_max_child`, `roomtype`.`room_single_bed` AS `room_single_bed`, `roomtype`.`room_double_bed` AS `room_double_bed`, `roomtype`.`room_total` AS `room_total`, `roomtype`.`room_details_img_url` AS `room_details_img_url`, `roomtype`.`room_area` AS `room_area`, `roomtype`.`room_cost` AS `room_cost`, `roomtype`.`room_discount` AS `room_discount`, `roomtype`.`room_date_end_discount` AS `room_date_end_discount`, `roomtype`.`room_avg_rating` AS `room_avg_rating`, `roomtype`.`room_count_rating` AS `room_count_rating`, `roomtype`.`acco_id` AS `acco_id`, `bookingdetail`.`book_num_room` AS `book_num_room`, `bookingdetail`.`book_room_cost_before` AS `book_room_cost_before`, `bookingdetail`.`book_room_cost_after` AS `book_room_cost_after` FROM ((`bookingdetail` join `roomtype`) join `booking`) WHERE `roomtype`.`room_id` = `bookingdetail`.`room_id` AND `bookingdetail`.`book_id` = `booking`.`book_id` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_booking_history`
--
DROP TABLE IF EXISTS `view_booking_history`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_booking_history`  AS SELECT `view_acco`.`acco_id` AS `acco_id`, `view_acco`.`acco_type` AS `acco_type`, `view_acco`.`acco_star` AS `acco_star`, `view_acco`.`acco_tiny_img_url` AS `acco_tiny_img_url`, `view_acco`.`acco_name` AS `acco_name`, `view_acco`.`acco_logan` AS `acco_logan`, `view_acco`.`acco_detail` AS `acco_detail`, `view_acco`.`acco_exac_location` AS `acco_exac_location`, `view_acco`.`city_id` AS `city_id`, `view_acco`.`prov_id` AS `prov_id`, `view_acco`.`acco_location_link` AS `acco_location_link`, `view_acco`.`city_name` AS `city_name`, `view_acco`.`prov_name` AS `prov_name`, `booking`.`book_id` AS `book_id`, `booking`.`book_datetime` AS `book_datetime`, `booking`.`book_start_datetime` AS `book_start_datetime`, `booking`.`book_end_datetime` AS `book_end_datetime`, `booking`.`book_cost_before` AS `book_cost_before`, `booking`.`book_cost_after` AS `book_cost_after`, concat(`booking`.`book_last_name`,' ',`booking`.`book_first_name`) AS `book_customer_name`, `booking`.`book_status` AS `book_status`, `booking`.`book_is_paid` AS `book_is_paid`, `booking`.`au_user_id` AS `au_user_id` FROM (`view_acco` join `booking` on(`view_acco`.`acco_id` = `booking`.`acco_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_chart_dashboard`
--
DROP TABLE IF EXISTS `view_chart_dashboard`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_chart_dashboard`  AS SELECT month(`booking`.`book_datetime`) AS `month`, count(0) AS `count_book`, `a`.`count_rating` AS `count_rating`, `a`.`avg_rating` AS `avg_rating` FROM ((select month(`rating`.`rating_datetime`) AS `month_rating`,count(0) AS `count_rating`,avg(`rating`.`rating_point`) AS `avg_rating` from `rating` group by month(`rating`.`rating_datetime`)) `a` left join `booking` on(`a`.`month_rating` = month(`booking`.`book_datetime`))) GROUP BY month(`booking`.`book_datetime`)union all select month(`booking`.`book_datetime`) AS `month`,count(0) AS `count_book`,`a`.`count_rating` AS `count_rating`,`a`.`avg_rating` AS `avg_rating` from (`booking` left join (select month(`rating`.`rating_datetime`) AS `month_rating`,count(0) AS `count_rating`,avg(`rating`.`rating_point`) AS `avg_rating` from `rating` group by month(`rating`.`rating_datetime`)) `a` on(`a`.`month_rating` = month(`booking`.`book_datetime`))) where `a`.`month_rating` is null group by month(`booking`.`book_datetime`)  ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_debitcard`
--
DROP TABLE IF EXISTS `view_debitcard`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_debitcard`  AS SELECT `debitcard`.`debit_name` AS `debit_name`, `debitcard`.`debit_num` AS `debit_num`, `debitcard`.`au_user_id` AS `au_user_id`, `debitcard`.`debit_id` AS `debit_id` FROM `debitcard` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_name_fea`
--
DROP TABLE IF EXISTS `view_name_fea`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_name_fea`  AS SELECT `accommodation`.`acco_id` AS `acco_id`, `feature`.`fea_id` AS `fea_id`, `feature`.`fea_name` AS `fea_name` FROM ((`accommodation` join `accofea` on(`accommodation`.`acco_id` = `accofea`.`acco_id`)) join `feature` on(`accofea`.`fea_id` = `feature`.`fea_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_notification`
--
DROP TABLE IF EXISTS `view_notification`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_notification`  AS SELECT `notification`.`noti_id` AS `noti_id`, `notification`.`noti_type` AS `noti_type`, `notification`.`noti_title` AS `noti_title`, `notification`.`noti_subtitle` AS `noti_subtitle`, `notification`.`noti_datetime` AS `noti_datetime`, `notification`.`noti_content` AS `noti_content`, `notification`.`noti_dest_url` AS `noti_dest_url` FROM `notification` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_rating`
--
DROP TABLE IF EXISTS `view_rating`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_rating`  AS SELECT `rating`.`room_id` AS `room_id`, `rating`.`rating_datetime` AS `rating_datetime`, `rating`.`rating_context` AS `rating_context`, `rating`.`rating_point` AS `rating_point`, `rating`.`au_user_id` AS `au_user_id` FROM `rating` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_rating_admin`
--
DROP TABLE IF EXISTS `view_rating_admin`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_rating_admin`  AS SELECT `rating`.`au_user_id` AS `au_user_id`, concat(`authuser`.`au_user_last_name`,' ',`authuser`.`au_user_first_name`) AS `au_user_full_name`, `rating`.`room_id` AS `room_id`, `rating`.`rating_datetime` AS `rating_datetime`, `rating`.`rating_context` AS `rating_context`, `rating`.`rating_point` AS `rating_point`, `roomtype`.`room_class` AS `room_class`, `roomtype`.`room_type` AS `room_type`, `accommodation`.`acco_id` AS `acco_id`, `accommodation`.`acco_name` AS `acco_name` FROM (((`rating` join `authuser` on(`rating`.`au_user_id` = `authuser`.`au_user_id`)) join `roomtype` on(`rating`.`room_id` = `roomtype`.`room_id`)) join `accommodation` on(`roomtype`.`acco_id` = `accommodation`.`acco_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_room_exte`
--
DROP TABLE IF EXISTS `view_room_exte`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_room_exte`  AS SELECT `roomtype`.`acco_id` AS `acco_id`, `roomtype`.`room_id` AS `room_id`, `extension`.`exte_id` AS `exte_id`, `extension`.`exte_name` AS `exte_name` FROM ((`roomtype` join `roomexte` on(`roomtype`.`room_id` = `roomexte`.`room_id`)) join `extension` on(`roomexte`.`exte_id` = `extension`.`exte_id`)) ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `view_room_rating`
--
DROP TABLE IF EXISTS `view_room_rating`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_room_rating`  AS SELECT `rating`.`au_user_id` AS `au_user_id`, `rating`.`room_id` AS `room_id`, `rating`.`rating_datetime` AS `rating_datetime`, `rating`.`rating_context` AS `rating_context`, `rating`.`rating_point` AS `rating_point`, `roomtype`.`acco_id` AS `acco_id`, concat(`authuser`.`au_user_first_name`,' ',`authuser`.`au_user_last_name`) AS `au_user_full_name`, `authuser`.`au_user_avt_url` AS `au_user_avt_url` FROM ((`roomtype` join `rating` on(`roomtype`.`room_id` = `rating`.`room_id`)) join `authuser` on(`rating`.`au_user_id` = `authuser`.`au_user_id`)) ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accofea`
--
ALTER TABLE `accofea`
  ADD PRIMARY KEY (`fea_id`,`acco_id`),
  ADD KEY `acco_id` (`acco_id`);

--
-- Chỉ mục cho bảng `accoimg`
--
ALTER TABLE `accoimg`
  ADD PRIMARY KEY (`acco_id`,`acco_img_url`);

--
-- Chỉ mục cho bảng `accommodation`
--
ALTER TABLE `accommodation`
  ADD PRIMARY KEY (`acco_id`),
  ADD UNIQUE KEY `acco_id` (`acco_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `prov_id` (`prov_id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`),
  ADD UNIQUE KEY `admin_nickname` (`admin_nickname`);

--
-- Chỉ mục cho bảng `authuser`
--
ALTER TABLE `authuser`
  ADD PRIMARY KEY (`au_user_id`),
  ADD UNIQUE KEY `au_user_id` (`au_user_id`),
  ADD UNIQUE KEY `au_user_email` (`au_user_email`),
  ADD KEY `FK_bank_id` (`bank_default_id`),
  ADD KEY `FK_debit_id` (`debit_default_id`);

--
-- Chỉ mục cho bảng `bankcard`
--
ALTER TABLE `bankcard`
  ADD PRIMARY KEY (`bank_id`),
  ADD UNIQUE KEY `bank_id` (`bank_id`),
  ADD KEY `au_user_id` (`au_user_id`);

--
-- Chỉ mục cho bảng `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`book_id`),
  ADD UNIQUE KEY `book_id` (`book_id`),
  ADD KEY `pay_id` (`pay_id`),
  ADD KEY `rea_id` (`rea_id`),
  ADD KEY `au_user_id` (`au_user_id`),
  ADD KEY `acco_id` (`acco_id`);

--
-- Chỉ mục cho bảng `bookingdetail`
--
ALTER TABLE `bookingdetail`
  ADD PRIMARY KEY (`book_id`,`room_id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Chỉ mục cho bảng `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD UNIQUE KEY `city_id` (`city_id`),
  ADD UNIQUE KEY `city_name` (`city_name`),
  ADD KEY `prov_id` (`prov_id`);

--
-- Chỉ mục cho bảng `debitcard`
--
ALTER TABLE `debitcard`
  ADD PRIMARY KEY (`debit_id`),
  ADD UNIQUE KEY `debit_id` (`debit_id`),
  ADD KEY `au_user_id` (`au_user_id`);

--
-- Chỉ mục cho bảng `extension`
--
ALTER TABLE `extension`
  ADD PRIMARY KEY (`exte_id`),
  ADD UNIQUE KEY `exte_id` (`exte_id`),
  ADD UNIQUE KEY `exte_name` (`exte_name`);

--
-- Chỉ mục cho bảng `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`fea_id`),
  ADD UNIQUE KEY `fea_id` (`fea_id`),
  ADD UNIQUE KEY `fea_name` (`fea_name`);

--
-- Chỉ mục cho bảng `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`noti_id`),
  ADD UNIQUE KEY `noti_id` (`noti_id`);

--
-- Chỉ mục cho bảng `payingmethod`
--
ALTER TABLE `payingmethod`
  ADD PRIMARY KEY (`pay_id`),
  ADD UNIQUE KEY `pay_id` (`pay_id`),
  ADD UNIQUE KEY `pay_name` (`pay_name`);

--
-- Chỉ mục cho bảng `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`prov_id`),
  ADD UNIQUE KEY `prov_id` (`prov_id`),
  ADD UNIQUE KEY `prov_name` (`prov_name`);

--
-- Chỉ mục cho bảng `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`au_user_id`,`room_id`,`rating_datetime`),
  ADD KEY `room_id` (`room_id`);

--
-- Chỉ mục cho bảng `reasoncancel`
--
ALTER TABLE `reasoncancel`
  ADD PRIMARY KEY (`rea_id`),
  ADD UNIQUE KEY `rea_id` (`rea_id`),
  ADD UNIQUE KEY `rea_description` (`rea_description`);

--
-- Chỉ mục cho bảng `roomexte`
--
ALTER TABLE `roomexte`
  ADD PRIMARY KEY (`room_id`,`exte_id`),
  ADD KEY `exte_id` (`exte_id`);

--
-- Chỉ mục cho bảng `roomtype`
--
ALTER TABLE `roomtype`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `room_id` (`room_id`),
  ADD KEY `acco_id` (`acco_id`);

--
-- Chỉ mục cho bảng `roomtypeimg`
--
ALTER TABLE `roomtypeimg`
  ADD PRIMARY KEY (`room_id`,`room_type_image_url`);

--
-- Chỉ mục cho bảng `usernoti`
--
ALTER TABLE `usernoti`
  ADD PRIMARY KEY (`au_user_id`,`noti_id`),
  ADD KEY `noti_id` (`noti_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accommodation`
--
ALTER TABLE `accommodation`
  MODIFY `acco_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `authuser`
--
ALTER TABLE `authuser`
  MODIFY `au_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `bankcard`
--
ALTER TABLE `bankcard`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `booking`
--
ALTER TABLE `booking`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `debitcard`
--
ALTER TABLE `debitcard`
  MODIFY `debit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `extension`
--
ALTER TABLE `extension`
  MODIFY `exte_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `feature`
--
ALTER TABLE `feature`
  MODIFY `fea_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `notification`
--
ALTER TABLE `notification`
  MODIFY `noti_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `payingmethod`
--
ALTER TABLE `payingmethod`
  MODIFY `pay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `province`
--
ALTER TABLE `province`
  MODIFY `prov_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `reasoncancel`
--
ALTER TABLE `reasoncancel`
  MODIFY `rea_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `roomtype`
--
ALTER TABLE `roomtype`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accofea`
--
ALTER TABLE `accofea`
  ADD CONSTRAINT `accofea_ibfk_1` FOREIGN KEY (`fea_id`) REFERENCES `feature` (`fea_id`),
  ADD CONSTRAINT `accofea_ibfk_2` FOREIGN KEY (`acco_id`) REFERENCES `accommodation` (`acco_id`);

--
-- Các ràng buộc cho bảng `accoimg`
--
ALTER TABLE `accoimg`
  ADD CONSTRAINT `accoimg_ibfk_1` FOREIGN KEY (`acco_id`) REFERENCES `accommodation` (`acco_id`);

--
-- Các ràng buộc cho bảng `accommodation`
--
ALTER TABLE `accommodation`
  ADD CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`),
  ADD CONSTRAINT `accommodation_ibfk_2` FOREIGN KEY (`prov_id`) REFERENCES `province` (`prov_id`);

--
-- Các ràng buộc cho bảng `authuser`
--
ALTER TABLE `authuser`
  ADD CONSTRAINT `FK_bank_id` FOREIGN KEY (`bank_default_id`) REFERENCES `bankcard` (`bank_id`),
  ADD CONSTRAINT `FK_debit_id` FOREIGN KEY (`debit_default_id`) REFERENCES `debitcard` (`debit_id`);

--
-- Các ràng buộc cho bảng `bankcard`
--
ALTER TABLE `bankcard`
  ADD CONSTRAINT `bankcard_ibfk_1` FOREIGN KEY (`au_user_id`) REFERENCES `authuser` (`au_user_id`);

--
-- Các ràng buộc cho bảng `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`pay_id`) REFERENCES `payingmethod` (`pay_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`rea_id`) REFERENCES `reasoncancel` (`rea_id`),
  ADD CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`au_user_id`) REFERENCES `authuser` (`au_user_id`),
  ADD CONSTRAINT `booking_ibfk_4` FOREIGN KEY (`acco_id`) REFERENCES `accommodation` (`acco_id`);

--
-- Các ràng buộc cho bảng `bookingdetail`
--
ALTER TABLE `bookingdetail`
  ADD CONSTRAINT `bookingdetail_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `booking` (`book_id`),
  ADD CONSTRAINT `bookingdetail_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `roomtype` (`room_id`);

--
-- Các ràng buộc cho bảng `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`prov_id`) REFERENCES `province` (`prov_id`);

--
-- Các ràng buộc cho bảng `debitcard`
--
ALTER TABLE `debitcard`
  ADD CONSTRAINT `debitcard_ibfk_1` FOREIGN KEY (`au_user_id`) REFERENCES `authuser` (`au_user_id`);

--
-- Các ràng buộc cho bảng `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`au_user_id`) REFERENCES `authuser` (`au_user_id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `roomtype` (`room_id`);

--
-- Các ràng buộc cho bảng `roomexte`
--
ALTER TABLE `roomexte`
  ADD CONSTRAINT `roomexte_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `roomtype` (`room_id`),
  ADD CONSTRAINT `roomexte_ibfk_2` FOREIGN KEY (`exte_id`) REFERENCES `extension` (`exte_id`);

--
-- Các ràng buộc cho bảng `roomtype`
--
ALTER TABLE `roomtype`
  ADD CONSTRAINT `roomtype_ibfk_1` FOREIGN KEY (`acco_id`) REFERENCES `accommodation` (`acco_id`);

--
-- Các ràng buộc cho bảng `roomtypeimg`
--
ALTER TABLE `roomtypeimg`
  ADD CONSTRAINT `roomtypeimg_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `roomtype` (`room_id`);

--
-- Các ràng buộc cho bảng `usernoti`
--
ALTER TABLE `usernoti`
  ADD CONSTRAINT `usernoti_ibfk_1` FOREIGN KEY (`au_user_id`) REFERENCES `authuser` (`au_user_id`),
  ADD CONSTRAINT `usernoti_ibfk_2` FOREIGN KEY (`noti_id`) REFERENCES `notification` (`noti_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
