# SE104.O11.Group6

## Danh sách thành viên
* GVHD: ThS. Võ Tấn Khoa
* Nhóm sinh viên thực hiện: Nhóm 6
|STT | Họ tên | MSSV|
|:---:|:-------------:|:-----:|
|1. 	| Lê Đức Mạnh		| 21521116 
|2. 	| Bùi Yến Giàu	|	21520796
|3. 	| Lê Trung Hiếu	|	21520850
|4.	  | Lâm Thị Hồng Cẩm | 21520009
|5. 	| Lý Phi Lân		|	21520319
|6. 	| Trịnh Hoài Nam	| 21521167
|7. 	| Bùi Xuân Nhi	|	21522422
|8. 	| Đặng Quỳnh Như	|	21520081
|9. 	| Nguyễn Thị Hồng Nhung | 21522436
|10.  | Phan Nguyễn Hải Yến | 21521698

## Giới thiệu
Mục tiêu chung của đề tài "Xây dựng website đặt phòng khách sạn"  là tạo ra một trang web hiệu quả và hấp dẫn để khách hàng có thể dễ dàng tìm kiếm, chọn và đặt phòng khách sạn.

## Tính năng
|Mã chức năng	|	Tên chức năng	|	Tác nhân	|
|:---:|:-------------:|:-----:|
||UC1 - Unauthenticated User Module (Mô-đun Khách vãng lai)	||
|UC1.01 	|	Đăng ký	|	AT1	|
|UC1.02	|	Đăng nhập	|	AT1	|
|UC1.03	|	Quên mật khẩu	|	AT1	|
|UC1.04	|	Đặt lại mật khẩu	|	AT1	|
|UC1.05	|	Tìm kiếm chỗ ở	|	AT1, AT2	|
|UC1.06	|	Xem chi tiết chỗ ở	|	AT1, AT2	|
|UC1.07	|	Xem chi tiết phòng	|	AT1, AT2, AT3	|
|UC1.08	|	Lọc nội dung	|	AT1, AT2, AT3	|
|UC1.09	|	Xem đánh giá	|	AT1, AT2, AT3	|
||UC2 - Authenticated User Module (Mô-đun Khách hàng					||
|UC2.01	|	Đổi mật khẩu	|	AT2	|
|UC2.02	|	Xem thông tin cá nhân	|	AT2	|
|UC2.03	|	Sửa thông tin cá nhân	|	AT2	|
|UC2.04	|	Liên kết thẻ/tài khoản ngân hàng	|	AT2	|
|UC2.05	|	Xem danh sách thẻ/tài khoản thanh toán liên kết	|	AT2	|
|UC2.06	|	Hủy liên kết thẻ/tài khoản ngân hàng	|	AT2	|
|UC2.07	|	Điền thông tin đặt phòng	|	AT2	|
|UC2.08	|	Xem lịch sử đặt phòng	|	AT2	|
|UC2.09	|	Hủy phòng	|	AT2	|
|UC2.10	|	Thanh toán trực tiếp	|	AT2	|
|UC2.11	|	Thanh toán trực tuyến	|	AT2	|
|UC2.12	|	Đánh giá	|	AT2	|
|UC2.13	|	Xem thông báo	|	AT2, AT3	|
|UC2.14	|	Đăng xuất	|	AT2, AT3	|
|UC2.15	|	Xem chi tiết đặt phòng	|	AT2	|
||UC3 - Admin Module(Mô-đun Quản trị viên)					||
|UC3.01	|	Thêm phòng	|	AT3	|
|UC3.02	|	Sửa thông tin phòng	|	AT3	|
|UC3.03	|	Xóa phòng	|	AT3	|
|UC3.04	|	Sửa quyền khách hàng	|	AT3	|
|UC3.05	|	Xóa đánh giá	|	AT3	|
|UC3.06	|	Thêm thông báo	|	AT3	|
|UC3.07	|	Tạo báo cáo thống kê	|	AT3	|
|UC3.08	|	Xem danh sách phòng	|	AT3	|

## Công nghệ sử dụng
* [Node.js] - Xử lý API, Back-end
* [Express] - Framework nằm trên chức năng máy chủ web của NodeJS
* [Bootstrap] - 
* [JQuery] - 
* [Xampp, phpMyAdmin] - 
* [MySQL] -

## Cài đặt
Yêu cầu : [Node.js](https://nodejs.org/) v19+ để có thể chạy chương trình.

#### Bước 1: Mở Xampp, truy cập vào phpMyAdmin
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/1b60556b-657c-482c-8928-163192962c65)
<space><space>
#### Bước 2: Tạo cơ sở dữ liệu mới trong phpMyAdmin
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/d12cbbb4-2cd3-48e5-a6f8-a78d0f707b0c)
<space><space>
#### Bước 3: Nhập dữ liệu cho cơ sở dữ liệu, có 2 cách:
  * Cách 1: Import dữ liệu từ file:
  - Tải file: 
  - Chọn tab Import trên thanh điều hướng 
  - Chọn Choose File --> Chọn file mới tải về ở trên
  ![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/06b08e7b-69cd-4725-967c-e29a4c4cb6a0)
  * Cách 2: Sử dụng tab SQL trên thanh điều hướng
  - Truy cập thư mục src/config/database. Tại đây sẽ có 5 file SQL
  - Chọn tab SQL trên thanh điều hướng
  - Copy Paste lần lượt file sql theo thứ tự
    + 1_table.sql
    + 2_trigger.sql
    + 3_insert_into.sql
    + 4_procedure.sql
    + 5_view.sql
  ![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/3a32726c-035e-4a70-87d2-3fec578fdab5)
  
  Thực hiện một trong hai cách trên bạn sẽ có đầy đủ cơ sở dữ liệu của trang web.
#### Bước 4: Thực hiện clone repository này với lệnh
```
https://github.com/namtuthien/SE104.O11.Group6.git
```
#### Bước 5: Mở dự án mới clone về và thực hiện các câu lệnh sau
```
npm install
```
```
npm start
```
Nếu ở màn hình terminal cho ra kết quả sau đây, tức các bạn đã thành công
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/3b6feed5-2199-479d-8b54-9531ce608204)

#### Bước 6: Mở website. Có 2 cách:
* Cách 1: Ctrl + Click vào đường link http://127.0.0.1:3000 trên terminal
* Cách 2: Mở trình duyệt bất kỳ và nhập đường dẫn sau [Homepage](http://127.0.0.1:3000)

#### Đên đây các bạn đã có thể vào trang web của nhóm. Chúc các bạn thành công
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/6ce058c3-d232-4362-9fb7-0dcd71e02286)







