# SE104.O11.Group6
* GVHD: ThS. Võ Tấn Khoa
* Nhóm sinh viên thực hiện: Nhóm 6

## Danh sách thành viên
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
Hiện nay, với sự phát triển không ngừng của ngành du lịch, nhu cầu đặt phòng trực tuyến ngày càng tăng cao. Một website đặt phòng chuyên nghiệp sẽ giúp khách hàng dễ dàng tìm kiếm thông tin, so sánh giá cả, đặt phòng và thanh toán trực tuyến. Ngoài ra, còn có thể giúp cho các địa điểm quảng bá rộng rãi về thương hiệu của họ, từ đó thu hút ngày càng nhiều du khách không chỉ ở khu vực lân cận mà ở khắp mọi nơi trên thế giới. 

Do đó, dựa trên những nhu cầu hiện nay và mong muốn của nhóm, “Xây dựng website đặt phòng trực tuyến”  là đề tài mà nhóm đã lựa chọn để thực hiện cho môn học.

## Tính năng
|ID	|Tên tác nhân |	Mô tả tác nhân|
|:---:|:-------------:|:-----:|
|AT1	|Unauthenticated User (Khách vãng lai)|	Người dùng chưa có tài khoản trên hệ thống, hoặc đã có tài khoản nhưng chưa thực hiện đăng nhập, hệ thống chưa xác thực được người dùng là ai, chưa thực hiện được một số chức năng quan trọng.|
|AT2	|Authenticated User (Khách hàng)|	Người dùng đã đăng nhập vào hệ thống, hệ thống đã xác thực được người dùng, có thể thực hiện được các chức năng trên hệ thống.|
|AT3	|Admin (Quản trị viên)|	Người quản trị website và có quyền cao nhất trong hệ thống, có trách nhiệm điều hành và quản lý các hoạt động diễn ra trên website.|

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
* [Bootstrap] - Framework mã nguồn mở được sử dụng để tạo các giao diện người dùng
* [JQuery] - Thư viện JavaScript mã nguồn mở được sử dụng để đơn giản hóa việc thao tác với các phần tử HTML và DOM
* [Xampp] - Cung cấp các môi trường phát triển cục bộ cho các ứng dụng web
* [MySQL] - Hệ quản trị cơ sở dữ liệu quan hệ sử dụng để lưu trữ dữ liệu cho trang web.

## Cài đặt
Yêu cầu : 
* [Node.js](https://nodejs.org/) v19+ để có thể chạy chương trình.
* [Xampp](https://www.apachefriends.org/download.html) để thực hiện thao tác liên quan đến CSDL.

#### Bước 1: Mở Xampp, truy cập vào phpMyAdmin
* Bật Apache và MySQL
* Sau khi MySQL chạy, hãy nhấn chọn Admin của MySQL
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/1b60556b-657c-482c-8928-163192962c65)

#### Bước 2: Tạo cơ sở dữ liệu mới trong phpMyAdmin
Tạo database mới có tên là
```
database_se104
```
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/d12cbbb4-2cd3-48e5-a6f8-a78d0f707b0c)
Bạn có thể tạo database theo cách trong hình hoặc mở tab SQL tại thanh điều hướng và sử dụng lệnh 
```
CREATE DATABASE database_se104;
```

#### Bước 3: Nhập dữ liệu cho cơ sở dữ liệu, có 2 cách:
  * Cách 1: Import dữ liệu từ file:
   - Tải file tại: src/config/database/database_se104.sql
   - Chọn tab Import trên thanh điều hướng 
   - Chọn Choose File --> Chọn file mới tải về ở trên
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/06b08e7b-69cd-4725-967c-e29a4c4cb6a0)
   - Sau đó, vuốt xuống dưới để nhấn nút 'Import'
  * Cách 2: Sử dụng tab SQL trên thanh điều hướng
   - Truy cập thư mục src/config/database. Tại đây sẽ có 5 file SQL
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/3a32726c-035e-4a70-87d2-3fec578fdab5)
   - Chọn tab SQL trên thanh điều hướng
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/b3504663-049f-4c3e-a484-8b048c87688d)
   - Copy Paste lần lượt file sql theo thứ tự và nhấn nút 'Go'
     + 1_table.sql
     + 2_trigger.sql
     + 3_insert_into.sql
     + 4_procedure.sql
     + 5_view.sql
Sau khi thực hiện một trong hai cách trên bạn sẽ có đầy đủ cơ sở dữ liệu của trang web. Kết quả như trong hình:
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/6b147d8b-9ff7-4edf-88fe-52aec70bef5e)

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
* Cách 2: Mở trình duyệt bất kỳ và nhập đường dẫn sau ``` http://127.0.0.1:3000 ```

#### Đên đây các bạn đã có thể vào trang web của nhóm. 
* Bạn có thể đăng ký tài khoản khách hàng mới để thực hiện các thao tác trong trang web hoặc đăng nhập bằng tài khoản sau:
 + Email: ```lehieudn123@example.com```
 + Mật khẩu: ```password1```
* Bạn có thể đăng nhập tài khoản admin thông qua đường dẫn ``` http://127.0.0.1:3000/admin/login ```
 + Tên đăng nhập: ```admin1```
 + Mật khẩu: ```password1```
![image](https://github.com/namtuthien/SE104.O11.Group6/assets/145759907/6ce058c3-d232-4362-9fb7-0dcd71e02286)

## Chúc các bạn thành công!!!





