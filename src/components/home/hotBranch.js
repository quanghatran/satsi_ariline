import hotBranch1 from "../../images/phi cong.jpg";
import hotBranch2 from "../../images/tiep vien hang khong.jpg";
import hotBranch3 from "../../images/an-ninh-hang-khong.png";
import hotBranch4 from "../../images/van-hanh-trang-thiet-bi-mat-dat.png";
import hotBranch5 from "../../images/van-tai-hang-hoa.png";
import hotBranch6 from "../../images/phuc-vu-mat-dat.png";

import { Button, Card, Col, Modal, Row } from "antd";
import React, { useState } from "react";
const listJobs = [
	{
		id: 1,
		name: "Tiếp viên hàng không",
		image: hotBranch2,
		detail:
			"Là người phục vụ hành khách và những thành viên trên phi hành đoàn trên máy bay dân dụng...",
		content:
			"<p><strong>Thời gian đ&agrave;o tạo: </strong>6-12 th&aacute;ng</p><p><strong>Thu nhập của tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</strong></p><p>Thu nhập của một tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng bao gồm nhiều khoản:</p><p>- Lương cứng</p><p>- Lương giờ bay</p><p>- Thu nhập kh&aacute;c</p><p>- C&aacute;c kỳ thưởng (th&ocirc;ng thường 1 năm tiếp vi&ecirc;n sẽ nhận 15-18 th&aacute;ng lương t&ugrave;y theo t&igrave;nh h&igrave;nh thu nhập của h&atilde;ng bay)</p><p>Vậy n&ecirc;n Tổng thu nhập cho tiếp vi&ecirc;n mới khoảng 20tr</p><p>Tiếp vi&ecirc;n trưởng: khoảng 35tr chưa t&iacute;nh 1 số nguồn thu nhập kh&aacute;c</p><p><strong>M&ocirc; tả c&ocirc;ng việc</strong></p><p>- L&agrave; người phục vụ h&agrave;nh kh&aacute;ch v&agrave; những th&agrave;nh vi&ecirc;n tr&ecirc;n phi h&agrave;nh đo&agrave;n tr&ecirc;n m&aacute;y bay d&acirc;n dụng;</p><p>- Thực hiện c&aacute;c biện ph&aacute;p nghiệp vụ đảm bảo c&oacute; một chuyến bay an to&agrave;n v&agrave; thoải m&aacute;i.</p><p>- So&aacute;t v&eacute;, xếp chỗ, kiểm tra h&agrave;nh l&yacute;, hướng dẫn lối đi cho h&agrave;nh kh&aacute;ch trước v&agrave; trong chuyến bay;</p><p>- Đảm bảo an to&agrave;n cho kh&aacute;ch trong suốt chuyến bay th&ocirc;ng qua việc hướng dẫn, l&agrave;m mẫu c&aacute;c thao t&aacute;c cấp cứu v&agrave; c&aacute;c biện ph&aacute;p an to&agrave;n cho kh&aacute;ch sử dụng kiến thức sơ cứu để gi&uacute;p đỡ những kh&aacute;ch h&agrave;ng yếu mệt;</p><p>- Chăm s&oacute;c h&agrave;nh kh&aacute;ch, phục vụ c&aacute;c y&ecirc;u cầu của h&agrave;nh kh&aacute;ch.</p><p><strong>Cơ hội việc l&agrave;m sau khi tham gia kh&oacute;a học của SATSi</strong></p><p>- C&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng tại Việt Nam: Vietnam Airlines, Pacific Airlines, Vietjet Air, Bamboo Airway</p><p>- C&ocirc;ng ty dịch vụ bay (C&ocirc;ng ty bay dịch vụ VASCO v&agrave; C&ocirc;ng ty bay dịch vụ dầu kh&iacute; SFC)</p><p>- C&aacute;c H&atilde;ng H&agrave;ng kh&ocirc;ng tr&ecirc;n thế giới</p><p><strong>Đ&atilde;i ngộ d&agrave;nh cho tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</strong></p><p>- Bay kh&ocirc;ng qu&aacute; 100h hoặc 28 ng&agrave;y trong 1 th&aacute;ng hoặc 1000h trong 10 th&aacute;ng ư</p><p>- Được hưởng mọi chế độ theo ch&iacute;nh s&aacute;ch chung của ng&agrave;nh h&agrave;ng kh&ocirc;ng</p><p>- Ưu đ&atilde;i gi&aacute; v&eacute; cho người th&acirc;n, được tặng v&eacute; miễn ph&iacute; theo th&acirc;m ni&ecirc;n</p><p>- Ở tại kh&aacute;ch 4* trở l&ecirc;n khi bay đường bay Nước ngo&agrave;i V&agrave; rất nhiều đ&atilde;i ngộ kh&aacute;c theo từng h&atilde;ng bay.</p><p><strong>C&aacute;c cấp bậc d&agrave;nh cho tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</strong></p><p>- Học việc</p><p>- Ch&iacute;nh thức</p><p>- Cao cấp (l&agrave;m việc tại khoang Business) (sau 500h bay ch&iacute;nh thức đc thi n&acirc;ng bậc)</p><p>- Tiếp vi&ecirc;n trưởng bậc 1 (sau 700h bay ch&iacute;nh thức đc thi n&acirc;ng bậc)</p><p>- Tiếp vi&ecirc;n trưởng bậc 2 (sau 1200h bay ch&iacute;nh thức đc thi n&acirc;ng bậc)</p><p><strong>Y&ecirc;u cầu của nghề tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</strong></p><p>- Y&ecirc;u cầu với tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng l&agrave; sức khỏe tốt, kh&eacute;o l&eacute;o, khả năng giao tiếp tốt, cởi mở, b&igrave;nh tĩnh, c&oacute; khả năng l&agrave;m việc dưới &aacute;p lực cao, biết điều phối thời gian v.v&hellip;&nbsp;</p><p>- Tuổi t&aacute;c, chiều cao v&agrave; c&acirc;n nặng được giới hạn trong từng vị tr&iacute; c&ocirc;ng việc theo quy định của từng h&atilde;ng h&agrave;ng kh&ocirc;ng.</p><p><strong>Ti&ecirc;u ch&iacute; tuyển dụng chung</strong></p><p>- Nam: 18 &ndash; 28 tuổi</p><p>- Nữ: 18 &ndash; 26 tuổi</p><p>- Nam : 1m68 &ndash; 1m85 , 60kg trở l&ecirc;n tương đương với chiều cao.</p><p>- Nữ : 1m58 &ndash; 1m75 , 45kg trở l&ecirc;n tương đương với chiều cao.</p><p>- Ngoại h&igrave;nh kh&ocirc;ng c&oacute; h&igrave;nh xăm lớn, dễ nhận biết.</p><p>- Học vấn: tốt nghiệp THPT trở l&ecirc;n, c&oacute; bằng cao đẳng - đại học l&agrave; một lợi thế.</p><p>- Ngoại ngữ: TOEIC 550 khi nộp hồ sơ (chưa c&oacute; sẽ được đ&agrave;o tạo tại SATSi).</p><p>- Sức khỏe: kh&ocirc;ng mắc c&aacute;c bệnh truyền nhiễm (Vi&ecirc;m gan B, C &hellip;)</p><p><strong>Quy tr&igrave;nh tuyển dụng</strong></p><p>- V&ograve;ng 1: Nhận hồ sơ</p><p>- V&ograve;ng 2: Catwalk &ndash; Ngoại h&igrave;nh &ndash; Phản xạ</p><p>- V&ograve;ng 3: Phỏng vấn tiếng Anh</p><p>- V&ograve;ng 4: V&ograve;ng Teamwork</p><p>- V&ograve;ng 5: V&ograve;ng phỏng vấn hội đồng</p><p><strong>Chương tr&igrave;nh đ&agrave;o tạo d&agrave;nh cho tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</strong></p><p>Sau khi đăng k&yacute; kh&oacute;a đ&agrave;o tạo, một tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng tương lai sẽ được học về:</p><p>- Kh&iacute; tượng h&agrave;ng kh&ocirc;ng</p><p>- Quy chế về nghiệp vụ tiếp vi&ecirc;n h&agrave;ng kh&ocirc;ng</p><p>- Trang điểm v&agrave; trang phục</p><p>- Quy tr&igrave;nh phục vụ chuyến bay</p><p>- Kỹ năng phục vụ h&agrave;nh kh&aacute;ch</p><p>- An ninh h&agrave;ng kh&ocirc;ng</p><p>- Xử l&yacute; những trường hợp khẩn cấp</p><p>- C&aacute;c kỹ năng mềm</p><p><strong>Th&ocirc;ng tin li&ecirc;n hệ</strong></p><p>- Viện đ&agrave;o tạo khởi nghiệp v&agrave; ứng dụng khoa học c&ocirc;ng nghệ cao - SATSi</p><p>- Địa chỉ: 01- BT9 khu Đ&ocirc; thị Văn Kh&ecirc;, H&agrave; Đ&ocirc;ng, H&agrave; Nội, Việt Nam</p><p>- Điện thoại: 024 223 71777</p><p>- Hotline: 0962 917 755 &ndash; 0978 586 755</p><p>- Email: satsi.edu@gmail.com</p><p>- Website: <a href='http://www.satsi.edu.vn/' >www.satsi.edu.vn</a></p> ",
	},
	{
		id: 2,
		name: "Nhân viên phục vụ mặt đất",
		image: hotBranch6,
		detail:
			"Nhận và xử lý các thông tin liên quan đến chuyến bay: danh sách hành khách, các thông tin đặc...",
		content:
			"<p><strong>Thu nhập trung b&igrave;nh:</strong> l&ecirc;n đến 40 triệu đồng</p><p><strong>Thời gian đ&agrave;o tạo:</strong> 3-12 th&aacute;ng</p><p><strong>Địa điểm l&agrave;m việc:</strong> Tất cả c&aacute;c cảng h&agrave;ng kh&ocirc;ng tr&ecirc;n to&agrave;n quốc</p><p><strong>M&ocirc; tả c&ocirc;ng việc</strong></p><ol><li>Phục vụ chuyến bay đi</li></ol><p>- Nhận v&agrave; xử l&yacute; c&aacute;c th&ocirc;ng tin li&ecirc;n quan đến chuyến bay: danh s&aacute;ch h&agrave;nh kh&aacute;ch, c&aacute;c th&ocirc;ng tin đặc biệt về h&agrave;nh kh&aacute;ch.</p><p>- Chuẩn bị đồ d&ugrave;ng v&agrave; c&aacute;c phương tiện l&agrave;m việc cần thiết cho c&ocirc;ng việc.</p><p>- Thực hiện quy tr&igrave;nh l&agrave;m thủ tục tại quầy.</p><p>- Kiểm tra c&aacute;c loại giấy tờ du lịch của h&agrave;nh kh&aacute;ch.</p><p>- Xếp chỗ ngồi, xuất thẻ l&ecirc;n m&aacute;y bay cho h&agrave;nh kh&aacute;ch.</p><p>- Nhận h&agrave;nh l&yacute; k&yacute; gửi.</p><p>- Hướng dẫn h&agrave;nh kh&aacute;ch c&aacute;c thủ tục tiếp theo.</p><p>- Phục vụ h&agrave;nh kh&aacute;ch đặc biệt, h&agrave;nh kh&aacute;ch cần sự gi&uacute;p đỡ nếu c&oacute; y&ecirc;u cầu.</p><p>- Hướng dẫn h&agrave;nh kh&aacute;ch ra m&aacute;y bay.</p><p>- Kiểm so&aacute;t số lượng h&agrave;nh kh&aacute;ch l&ecirc;n m&aacute;y bay.</p><p>- Gi&uacute;p đỡ h&agrave;nh kh&aacute;ch đặc biệt l&ecirc;n m&aacute;y bay.</p><p>- Ho&agrave;n tất chuyến bay v&agrave; gửi c&aacute;c loại điện văn đến c&aacute;c s&acirc;n bay li&ecirc;n quan.</p><ol><li>Phục vụ chuyến bay đến v&agrave; chuyến bay chuyển tiếp</li></ol><p>Chuyến bay đến:</p><p>- Nhận v&agrave; xử l&yacute; c&aacute;c th&ocirc;ng tin về h&agrave;nh kh&aacute;ch v&agrave; h&agrave;nh l&yacute; của chuyến bay đến.</p><p>- Chuẩn bị đồ d&ugrave;ng v&agrave; c&aacute;c phương tiện l&agrave;m việc cần thiết cho c&ocirc;ng việc.</p><p>- Thực hiện quy tr&igrave;nh đ&oacute;n v&agrave; hướng dẫn h&agrave;nh kh&aacute;ch từ m&aacute;y bay v&agrave;o nh&agrave; ga.</p><p>- Phục vụ h&agrave;nh kh&aacute;ch đặc biệt, h&agrave;nh kh&aacute;ch cần sự gi&uacute;p đỡ nếu c&oacute; y&ecirc;u cầu.</p><p>- Giao trả h&agrave;nh l&yacute; cho h&agrave;nh kh&aacute;ch.</p><p>Chuyến bay chuyển tiếp:</p><p>- Nhận v&agrave; xử l&yacute; c&aacute;c th&ocirc;ng tin về h&agrave;nh kh&aacute;ch v&agrave; h&agrave;nh l&yacute; chuyến bay chuyển tiếp.</p><p>- Chuẩn bị đồ d&ugrave;ng v&agrave; c&aacute;c phương tiện l&agrave;m việc cần thiết cho c&ocirc;ng việc.</p><p>- Thực hiện quy tr&igrave;nh đ&oacute;n v&agrave; hướng dẫn h&agrave;nh kh&aacute;ch từ m&aacute;y bay v&agrave;o nh&agrave; ga.</p><p>- L&agrave;m thủ tục chuyển tiếp v&agrave; hướng dẫn h&agrave;nh kh&aacute;ch chuyển qua nh&agrave; ga quốc nội hoặc quốc tế để tiếp tục h&agrave;nh tr&igrave;nh.</p><p>- Phục vụ h&agrave;nh kh&aacute;ch đặc biệt, h&agrave;nh kh&aacute;ch cần sự gi&uacute;p đỡ nếu c&oacute; y&ecirc;u cầu.</p><ol><li>Phục vụ t&igrave;m kiếm v&agrave; xử l&yacute; c&aacute;c t&igrave;nh huống h&agrave;nh l&yacute; bất thường</li></ol><p>- Nhận v&agrave; xử l&yacute; c&aacute;c th&ocirc;ng tin v&agrave; điện văn li&ecirc;n quan về h&agrave;nh l&yacute; bất thường của h&agrave;nh kh&aacute;ch.</p><p>- Tiếp nhận c&aacute;c trường hợp h&agrave;nh l&yacute; bất thường như thất lạc, hư hao, r&aacute;ch vỡ&hellip;</p><p>- Thực hiện quy tr&igrave;nh t&igrave;m kiếm v&agrave; xử l&yacute; c&aacute;c trường hợp h&agrave;nh l&yacute; bất thường bằng hệ thống T&igrave;m kiếm h&agrave;nh l&yacute; thất lạc to&agrave;n cầu (World tracer)</p><p>- Giao trả h&agrave;nh l&yacute; tại s&acirc;n bay hoặc đưa về địa chỉ của h&agrave;nh kh&aacute;ch.</p><p><strong>Đ&atilde;i ngộ:</strong></p><p>- Được hưởng mọi chế độ theo ch&iacute;nh s&aacute;ch chung của ng&agrave;nh h&agrave;ng kh&ocirc;ng</p><p>- Được ưu đ&atilde;i gi&aacute; v&eacute; cho người th&acirc;n, được ưu đ&atilde;i v&eacute; miễn ph&iacute; theo th&acirc;m ni&ecirc;n</p><p><strong>Ti&ecirc;u ch&iacute; tuyển dụng</strong></p><p>- Tuổi đời: Nữ từ 18 - 26 tuổi; Nam từ 18 - 28 tuổi.</p><p>- Chiều cao: Nữ 1m58 &ndash; 1m75, nam 1m68 - 1m85.</p><p>- C&acirc;n nặng: Ph&ugrave; hợp với chiều cao theo ti&ecirc;u chuẩn BMI.</p><p>- Ngoại h&igrave;nh c&acirc;n đối, kỹ năng giao tiếp tốt, tự tin, ph&ugrave; hợp với nghề dịch vụ</p><p>- Tr&igrave;nh độ: Tốt nghiệp THPT trở l&ecirc;n.</p><p>- Ngoại ngữ: Đầu v&agrave;o Toeic 300, đầu ra Toeic 450 (Chưa c&oacute; sẽ được đ&agrave;o tạo).</p><p>- C&aacute;c y&ecirc;u cầu sức khỏe: Đạt ti&ecirc;u chuẩn sức khỏe quy định của Cục H&agrave;ng kh&ocirc;ng Việt Nam.</p><p><strong>Th&ocirc;ng tin li&ecirc;n hệ</strong></p><p>- Viện đ&agrave;o tạo khởi nghiệp v&agrave; ứng dụng khoa học c&ocirc;ng nghệ cao - SATSi</p><p>- Địa chỉ: 01- BT9 khu Đ&ocirc; thị Văn Kh&ecirc;, H&agrave; Đ&ocirc;ng, H&agrave; Nội, Việt Nam</p><p>- Điện thoại: 024 223 71777</p><p>- Hotline: 0962 917 755 &ndash; 0978 586 755</p><p>- Email: satsi.edu@gmail.com</p><p>- Website: <a href='http://www.satsi.edu.vn/' >www.satsi.edu.vn</a></p>",
	},
	{
		id: 3,
		name: "Nhân viên phục vụ hàng hóa",
		image: hotBranch5,
		detail:
			"Phục vụ chất xếp hàng hóa, hành lý tại khu vực băng chuyền nhà ga cho các chuyến bay đi/đến...",
		content:
			"<p><strong>Thời gian đ&agrave;o tạo: </strong>1-6 th&aacute;ng</p><p><strong>Thu nhập của nh&acirc;n vi&ecirc;n phục vụ h&agrave;ng h&oacute;a</strong></p><p>Lương cứng: 8 &ndash; 12 triệu/th&aacute;ng</p><p>- Thưởng th&aacute;ng, qu&yacute;, năm</p><p>- Trợ cấp ăn ca</p><p>- C&aacute;c khoản thu nhập kh&aacute;c</p><p>Do đ&oacute;, tổng thu nhập trung b&igrave;nh của nh&acirc;n vi&ecirc;n phục vụ h&agrave;ng h&oacute;a c&oacute; thể l&ecirc;n tới 15 - 25 triệu/th&aacute;ng</p><p>Lưu &yacute;: 1 nh&acirc;n vi&ecirc;n c&oacute; thể đảm nhiệm 2,3 vị tr&iacute; c&ugrave;ng l&uacute;c để tăng thu nhập</p><p><strong>M&ocirc; tả c&ocirc;ng việc</strong></p><p>- Chất xếp, dỡ h&agrave;nh l&yacute; h&agrave;ng h&oacute;a theo hướng dẫn của nh&acirc;n vi&ecirc;n gi&aacute;m s&aacute;t s&acirc;n đỗ;</p><p>- Phục vụ chất xếp h&agrave;ng h&oacute;a, h&agrave;nh l&yacute; tại khu vực băng chuyền nh&agrave; ga cho c&aacute;c chuyến bay đi/đến tại s&acirc;n bay;</p><p>- Phục vụ chất xếp h&agrave;ng h&oacute;a, h&agrave;nh l&yacute; l&ecirc;n xuống m&aacute;y bay cho c&aacute;c chuyến bay đi/đến tại s&acirc;n bay;</p><p>- Ph&acirc;n loại h&agrave;ng h&oacute;a, h&agrave;nh l&yacute; chuyển tiếp cho c&aacute;c chuyến bay tại s&acirc;n bay;</p><p>- B&aacute;o c&aacute;o kịp thời c&aacute;c bất thường (r&ograve; rỉ, r&aacute;ch vỡ&hellip;) của h&agrave;nh l&yacute;, h&agrave;ng h&oacute;a đến nh&acirc;n vi&ecirc;n gi&aacute;m s&aacute;t s&acirc;n đỗ;</p><p>- Kiểm tra t&igrave;nh trạng hầm h&agrave;ng, b&aacute;o c&aacute;o c&aacute;c bất thường (vết l&otilde;m, thủng tr&ecirc;n hầm h&agrave;ng m&aacute;y bay) đến nh&acirc;n vi&ecirc;n gi&aacute;m s&aacute;t s&acirc;n đỗ;</p><p>- Đấu nối c&aacute;c m&acirc;m h&agrave;ng (dolly), băng truyền (Trolly) phục vụ việc chất xếp h&agrave;nh l&yacute;, h&agrave;ng h&oacute;a;</p><p>- Chằng lưới c&aacute;c dolly h&agrave;nh l&yacute;, h&agrave;ng h&oacute;a đến;</p><p>- Chuẩn bị nylon, che chắn h&agrave;nh l&yacute; h&agrave;ng h&oacute;a (khi cần do điều kiện thời tiết).</p><p>- Tam gia thu dọn r&aacute;c tr&ecirc;n s&acirc;n đỗ;</p><p>- Thực hiện c&aacute;c việc li&ecirc;n quan theo y&ecirc;u cầu của quản l&yacute; trực tiếp</p><p>C&oacute; nhiều vị tr&iacute; nhỏ trong ng&agrave;nh phục vụ h&agrave;ng h&oacute;a như:</p><p>- Nh&acirc;n vi&ecirc;n tiếp nhận h&agrave;ng h&oacute;a</p><p>- Nh&acirc;n vi&ecirc;n kiểm tra h&agrave;ng h&oacute;a</p><p>- Nh&acirc;n vi&ecirc;n xuất h&agrave;ng</p><p>- Nh&acirc;n vi&ecirc;n xếp dỡ</p><p>- Nh&acirc;n vi&ecirc;n t&agrave;i liệu h&agrave;ng h&oacute;a</p><p>- Nh&acirc;n vi&ecirc;n quản l&yacute; kho h&agrave;ng</p><p>- Nh&acirc;n vi&ecirc;n chăm s&oacute;c kh&aacute;ch h&agrave;ng, quản l&yacute; thiết bị</p><p>- Nh&acirc;n vi&ecirc;n l&agrave;m việc ngo&agrave;i s&acirc;n đỗ v&agrave; nhiều vị tr&iacute; kh&aacute;c.</p><p><strong>Đ&atilde;i ngộ:</strong></p><p>- Được hưởng mọi chế độ theo ch&iacute;nh s&aacute;ch chung của ng&agrave;nh h&agrave;ng kh&ocirc;ng</p><p>- Được ưu đ&atilde;i gi&aacute; v&eacute; cho người th&acirc;n, được ưu đ&atilde;i v&eacute; miễn ph&iacute; theo th&acirc;m ni&ecirc;n</p><p><strong>Ti&ecirc;u ch&iacute; tuyển dụng</strong></p><p>- Quốc tịch: L&agrave; c&ocirc;ng d&acirc;n Việt Nam, sinh sống tại Việt Nam; c&oacute; đầy đủ quyền c&ocirc;ng d&acirc;n, l&yacute; lịch gia đ&igrave;nh r&otilde; r&agrave;ng, nh&acirc;n th&acirc;n trong sạch, kh&ocirc;ng tiền &aacute;n, tiền sự.</p><p>- Giới t&iacute;nh: Nam</p><p>- Tuổi đời từ 18 - 35 (t&iacute;nh theo năm, t&ugrave;y h&atilde;ng);</p><p>- Ngoại h&igrave;nh kh&ocirc;ng c&oacute; h&igrave;nh xăm lớn, dễ nhận biết.</p><p>- Tr&igrave;nh độ: Tốt nghiệp Phổ th&ocirc;ng trung học trở l&ecirc;n (12/12),</p><p>- Ưu ti&ecirc;n lựa chọn:&nbsp;</p><p>&nbsp;+ Bộ đội, c&ocirc;ng an xuất ngũ; th&acirc;n nh&acirc;n của c&aacute;n bộ c&ocirc;ng nh&acirc;n vi&ecirc;n c&aacute;c đơn vị thuộc Tổng c&ocirc;ng ty H&agrave;ng kh&ocirc;ng Việt Nam. (t&ugrave;y h&atilde;ng tuyển dụng);</p><p>&nbsp;+ C&oacute; khả năng giao tiếp ngoại ngữ tiếng anh (nếu c&oacute;).</p><p>+ Tiếng anh TOEIC 300 điểm trở l&ecirc;n.</p><p>- C&aacute;c y&ecirc;u cầu sức khỏe</p><p>+ Nam: Chiều cao 1,65m trở l&ecirc;n - Nặng 55kg trở l&ecirc;n;</p><p>+ BMI (Body Mass Index) = W (c&acirc;n nặng) / H2 (b&igrave;nh phương chiều cao);</p><p>+ C&oacute; sức khỏe tốt để l&agrave;m việc trong m&ocirc;i trường nắng n&oacute;ng, tiếng ồn tại s&acirc;n đỗ;</p><p>+ Đ&aacute;p ứng c&aacute;c điều kiện, ti&ecirc;u chuẩn theo quy định của Th&ocirc;ng tư số 30/2012/TT-BGTVT ng&agrave;y 01/08/2012 của Bộ GTVT quy định; kh&ocirc;ng c&oacute; khuyết tật về h&igrave;nh thể, kh&ocirc;ng sử dụng ma t&uacute;y v&agrave; c&aacute;c chất g&acirc;y nghiện;</p><p><strong>H&igrave;nh thức tuyển chọn</strong></p><p>Th&iacute; sinh đến đăng k&yacute; đủ điều kiện dự tuyển sẽ tham gia thi tuyển ngay sau khi nộp hồ sơ.</p><p><strong>Địa điểm đ&agrave;o tạo</strong></p><p>Tại c&aacute;c cảng h&agrave;ng kh&ocirc;ng, đơn vị đ&agrave;o tạo, huấn luyện.</p><p><strong>C&aacute;c kh&oacute;a học tham gia (sau khi tr&uacute;ng tuyển)</strong></p><p>- Ho&agrave;n th&agrave;nh chương tr&igrave;nh huấn luyện chức danh nh&acirc;n vi&ecirc;n chất xếp s&acirc;n đỗ/ băng chuyền h&agrave;nh l&yacute; trong nh&agrave; ga;</p><p>- Kh&oacute;a học hướng dẫn về chuy&ecirc;n m&ocirc;n nghiệp vụ chất xếp, k&eacute;o đẩy trang thiết bị mặt đất;</p><p>- Nhận biết H&agrave;ng nguy hiểm/An ninh h&agrave;ng kh&ocirc;ng/ An to&agrave;n s&acirc;n đỗ;</p><p>- Văn h&oacute;a doanh nghiệp v&agrave; c&aacute;c m&ocirc;n nhập ng&agrave;nh.</p><p><em>Lưu &yacute;: Quy định của c&aacute;c h&atilde;ng kh&aacute;c nhau.</em></p><p><strong>Th&ocirc;ng tin li&ecirc;n hệ</strong></p><p>- Viện đ&agrave;o tạo khởi nghiệp v&agrave; ứng dụng khoa học c&ocirc;ng nghệ cao - SATSi</p><p>- Địa chỉ: 01- BT9 khu Đ&ocirc; thị Văn Kh&ecirc;, H&agrave; Đ&ocirc;ng, H&agrave; Nội, Việt Nam</p><p>- Điện thoại: 024 223 71777</p><p>- Hotline: 0962 917 755 &ndash; 0978 586 755</p><p>- Email: satsi.edu@gmail.com</p><p>- Website: <a href='http://www.satsi.edu.vn/' >www.satsi.edu.vn</a></p>",
	},

	{
		id: 4,
		name: "Kiểm soát không lưu",
		image: hotBranch4,
		detail:
			"Vận hành thiết bị chuyên dùng như xe thang hành khách, xe chở khách cần sự trợ giúp đặc biệt...",
		content:
			"<p><strong>Th&ocirc;ng tin chung</strong></p><p>Tại s&acirc;n bay c&oacute; 38 loại xe đặc chủng, phổ biến nhất c&oacute;: xe thang, xe n&acirc;ng h&agrave;ng h&oacute;a, xe k&eacute;o h&agrave;ng h&oacute;a, xe cấp nước, xe k&eacute;o m&aacute;y bay, xe bơm xăng, xe vệ sinh, xe khởi động kh&iacute;,&hellip; Nh&acirc;n vi&ecirc;n l&aacute;i xe, vận h&agrave;nh trang thiết bị mặt đất sẽ l&agrave;m việc theo ca kh&ocirc;ng qu&aacute; 42h/tuần.</p><p><strong>M&ocirc; tả c&ocirc;ng việc (09 vị tr&iacute;)</strong></p><ol><li>L&aacute;i vận h&agrave;ng TTB phục vụ h&agrave;nh kh&aacute;ch</li></ol><ul><li>Vận h&agrave;nh thiết bị chuy&ecirc;n d&ugrave;ng như xe thang h&agrave;nh kh&aacute;ch, xe chở kh&aacute;ch cần sự trợ gi&uacute;p đặc biệt để hỗ trợ kh&aacute;ch l&ecirc;n/xuống m&aacute;y bay.</li></ul><ol><li>L&aacute;i vận h&agrave;ng TTB phục vụ h&agrave;ng h&oacute;a - h&agrave;nh l&yacute;</li></ol><ul><li>Vận h&agrave;nh thiết bị chuy&ecirc;n d&ugrave;ng như xe đầu k&eacute;o, thiết bị n&acirc;ng/hạ th&ugrave;ng container, xe băng chuyền, xe trung chuyển để để đưa h&agrave;ng h&oacute;a, h&agrave;nh l&yacute; từ khoang h&agrave;ng m&aacute;y bay xuống đất v&agrave; chuyển v&agrave;o nh&agrave; ga hoặc kho h&agrave;ng v&agrave; ngược lại từ nh&agrave; ga hoặc kho h&agrave;ng đến v&agrave; l&ecirc;n khoang h&agrave;ng của m&aacute;y bay.</li></ul><ol><li>L&aacute;i vận h&agrave;ng TTB phục M&aacute;y bay</li></ol><ul><li>Vận h&agrave;nh thiết bị chuy&ecirc;n d&ugrave;ng để phục vụ m&aacute;y bay như thiết bị cấp kh&iacute; lạnh cho khoang h&agrave;nh kh&aacute;ch, thiết bị cấp điện cho m&aacute;y bay, thiết bị khởi động động cơ m&aacute;y bay, xe cấp nước, xe vệ sinh m&aacute;y bay, xe k&eacute;o đẩy m&aacute;y bay.</li></ul><ol><li>L&aacute;i xe đưa đ&oacute;n nh&acirc;n vi&ecirc;n kỹ thuật phục vụ bảo dưỡng Ngoại trường.</li><li>L&aacute;i xe phục vụ giao nhận phụ t&ugrave;ng vật tư, kh&iacute; t&agrave;i m&aacute;y bay.</li><li>L&aacute;i xe phục vụ techservice, k&eacute;o xe xả dầu.</li><li>L&aacute;i Xe chở Suất Ăn.</li></ol><ul><li>L&aacute;i xe chở suất ăn trong khu vực s&acirc;n đỗ m&aacute;y bay. Đảm bảo tu&acirc;n thủ c&aacute;c quy tr&igrave;nh, quy định về an to&agrave;n an ninh;</li><li>Theo d&otilde;i, vệ sinh v&agrave; kiểm tra phương tiện vận chuyển v&agrave; b&aacute;o c&aacute;o định kỳ; Hỗ trợ nh&acirc;n vi&ecirc;n giao nhận trong qu&aacute; tr&igrave;nh giao nhận suất ăn.</li></ul><ol><li>L&aacute;i xe cứu hỏa.</li><li>L&aacute;i xe văn ph&ograve;ng.</li></ol><p>Lưu &yacute;:&nbsp;</p><p>- Được tiếp x&uacute;c v&agrave; được đ&agrave;o tạo để vận h&agrave;nh c&aacute;c thiết bị chuy&ecirc;n d&ugrave;ng của ng&agrave;nh h&agrave;ng kh&ocirc;ng để phục vụ cho c&aacute;c loại m&aacute;y bay hiện đại của h&atilde;ng h&agrave;ng kh&ocirc;ng quốc gia Việt nam v&agrave; c&aacute;c h&atilde;ng h&agrave;ng kh&ocirc;ng lớn tr&ecirc;n thế giới.</p><p>- 1 người c&oacute; thể l&aacute;i nhiều loại xe kh&aacute;c nhau nhưng cần phải c&oacute; chứng chỉ đặc định tương đương. 1 người c&oacute; thể sở hữu 2, 3 chứng chỉ, l&aacute;i nhiều loại xe kh&aacute;c nhau để gia tăng thu nhập.</p><p><strong>Thu nhập v&agrave; đ&atilde;i ngộ</strong></p><p>Cấp bậc chia l&agrave;m 4 cấp theo độ ch&iacute;nh x&aacute;c:</p><p>- Cấp 4 l&agrave; cao nhất: d&agrave;nh cho c&aacute;c xe y&ecirc;u cầu ch&iacute;nh x&aacute;c cao nhất: xe k&eacute;o m&aacute;y bay, xe thang, xe n&acirc;ng h&agrave;ng, xe cung cấp suất ăn &hellip;</p><p>- Cấp 1 tương đương với c&aacute;c loại xe th&ocirc;ng thường.</p><p>- Trong v&ograve;ng 3 năm từ mức 1 c&oacute; thể l&ecirc;n mức 4 th&ocirc;ng qua c&aacute;c kỳ x&eacute;t tuyển</p><p>Đ&atilde;i ngộ:</p><p>- Được hưởng mọi chế độ theo ch&iacute;nh s&aacute;ch chung của ng&agrave;nh h&agrave;ng kh&ocirc;ng</p><p>- Được ưu đ&atilde;i gi&aacute; v&eacute; cho người th&acirc;n, được ưu đ&atilde;i v&eacute; miễn ph&iacute; theo th&acirc;m ni&ecirc;n</p><p>- Khi đ&atilde; được v&agrave;o l&agrave;m: mọi chi ph&iacute; học lại, cấp bằng lại sau 2 năm sẽ được c&ocirc;ng ty đ&agrave;i thọ</p><p>- C&oacute; cơ hội đi c&ocirc;ng t&aacute;c nước ngo&agrave;i theo c&aacute;c đo&agrave;n ngoại giao</p><p>Mức lương tương ứng theo từng cấp bậc</p><p>- Mức 1(nh&acirc;n vi&ecirc;n mới): khoảng 7 &ndash; 8 triệu</p><p>- Mức 2: khoảng 8 &ndash; 9 triệu</p><p>- Mức 3: khoảng 9 &ndash; 10 triệu</p><p>- Mức 4: khoảng 11 &ndash; 12 triệu</p><p>Ngo&agrave;i ra c&ograve;n lương thưởng theo chất lượng lao động, thưởng năm, thưởng qu&yacute; theo doanh thu của c&ocirc;ng ty. B&igrave;nh qu&acirc;n thưởng 15 th&aacute;ng lương/năm. C&aacute;c mức thưởng ng&agrave;y lễ theo quy định</p><p>Như vậy: Mức thu nhập trung b&igrave;nh:</p><p>- Mức 1: 12 &ndash; 14 triệu</p><p>- Mức 2: 14 &ndash; 16 triệu</p><p>- Mức 3: 16 &ndash; 18 triệu</p><p>- Mức 4: 18 &ndash; 20 triệu</p><p><strong>Ti&ecirc;u ch&iacute; tuyển dụng</strong></p><p>- Quốc tịch: L&agrave; c&ocirc;ng d&acirc;n Việt Nam, sinh sống tại Việt Nam; c&oacute; đầy đủ quyền c&ocirc;ng d&acirc;n, l&yacute; lịch gia đ&igrave;nh r&otilde; r&agrave;ng, nh&acirc;n th&acirc;n trong sạch, kh&ocirc;ng tiền &aacute;n, tiền sự;</p><p>- Giới t&iacute;nh: Nam</p><p>+ Tuổi đời từ 20 đến 40 (t&iacute;nh theo năm);&nbsp; &nbsp; Tr&igrave;nh độ:</p><p>+ Tốt nghiệp Phổ th&ocirc;ng trung học trở l&ecirc;n (12/12), c&oacute; bằng l&aacute;i xe &ocirc; t&ocirc; hạng C trở l&ecirc;n (c&ograve;n hạn tối thiểu 6 th&aacute;ng), c&oacute; &iacute;t nhất 01 năm kinh nghiệm;</p><p>- Ngoại ngữ: Ưu ti&ecirc;n tiếng anh tr&igrave;nh độ B hoặc tương đương trở l&ecirc;n, TOEIC 300 điểm hoặc TOEFL tối thiểu 350 điểm hoặc IELTS tối thiểu 3.0 điểm;</p><p>- C&aacute;c y&ecirc;u cầu sức khỏe;</p><p>+ Nam: Chiều cao 1,62m trở l&ecirc;n &ndash; Nặng 55kg trở l&ecirc;n;</p><p>* BMI (Body Mass Index) = W (c&acirc;n nặng) / H2 (b&igrave;nh phương chiều cao);</p><p>+ Đ&aacute;p ứng c&aacute;c điều kiện, ti&ecirc;u chuẩn theo quy định của Th&ocirc;ng tư số 30/2012/TT- BGTVT ng&agrave;y 01/08/2012 của Bộ GTVT quy định; kh&ocirc;ng c&oacute; khuyết tật về h&igrave;nh thể, kh&ocirc;ng sử dụng ma t&uacute;y v&agrave; c&aacute;c chất g&acirc;y nghiện;</p><p>- C&oacute; t&iacute;nh tu&acirc;n thủ, chấp h&agrave;nh kỷ luật rất cao v&igrave; li&ecirc;n quan t&agrave;i sản đắt tiền</p><p>- Kh&ocirc;ng c&oacute; h&igrave;nh xăm lộ</p><p><strong>H&igrave;nh thức tuyển chọn&nbsp;</strong></p><p>Thi tuyển 3 v&ograve;ng:</p><p>- V&ograve;ng 1: Nộp hồ sơ sơ tuyển</p><p>- V&ograve;ng 2: Thẩm định tay nghề, luật lệ giao th&ocirc;ng</p><p>- V&ograve;ng 3: Thi thực h&agrave;nh</p><p><strong>Th&ocirc;ng tin li&ecirc;n hệ</strong></p><p>- Viện đ&agrave;o tạo khởi nghiệp v&agrave; ứng dụng khoa học c&ocirc;ng nghệ cao - SATSi</p><p>- Địa chỉ: 01- BT9 khu Đ&ocirc; thị Văn Kh&ecirc;, H&agrave; Đ&ocirc;ng, H&agrave; Nội, Việt Nam</p><p>- Điện thoại: 024 223 71777</p><p>- Hotline: 0962 917 755 &ndash; 0978 586 755</p><p>- Email: satsi.edu@gmail.com</p><p>- Website: <a href='http://www.satsi.edu.vn/' >www.satsi.edu.vn</a></p>",
	},
	{
		id: 5,
		name: "An ninh hàng không",
		image: hotBranch3,
		detail:
			"Là người khai thác các thiết bị an ninh để xác định đúng hành khách, nhân viên, người tham quan...",
		content:
			"<p><strong>Thu nhập trung b&igrave;nh:</strong> 25 - 45 triệu/th&aacute;ng.</p><p><strong>Thời gian đ&agrave;o tạo: </strong>6-12 th&aacute;ng</p><p><strong>Địa điểm l&agrave;m việc:</strong> Tất cả c&aacute;c cảng h&agrave;ng kh&ocirc;ng tr&ecirc;n to&agrave;n quốc</p><p><strong>Nh&acirc;n vi&ecirc;n an ninh soi chiếu</strong></p><ol><li>M&ocirc; tả c&ocirc;ng việc</li></ol><p>L&agrave; người khai th&aacute;c c&aacute;c thiết bị an ninh để x&aacute;c định đ&uacute;ng h&agrave;nh kh&aacute;ch, nh&acirc;n vi&ecirc;n, người tham quan (gọi chung l&agrave; h&agrave;nh kh&aacute;ch) v&agrave; ph&aacute;t hiện, loại bỏ vũ kh&iacute;, chất ch&aacute;y nổ (gọi chung l&agrave; vũ kh&iacute;), vật phẩm nguy hiểm bị cấm v&agrave;o khu vực hạn chế h&agrave;ng kh&ocirc;ng hoặc l&ecirc;n t&agrave;u bay.</p><p>Vị tr&iacute; điểm kiểm tra soi chiếu an ninh h&agrave;ng kh&ocirc;ng được thiết lập tại c&aacute;c cảng h&agrave;ng kh&ocirc;ng gồm c&aacute;c vị tr&iacute; cụ thể sau: nh&agrave; ga h&agrave;nh kh&aacute;ch, nh&agrave; ga h&agrave;ng h&oacute;a, khu chế biến suất ăn, khu bảo dưỡng t&agrave;u bay hoặc điểm kiểm tra soi chiếu tăng cường&hellip;</p><ol><li>M&ocirc;i trường l&agrave;m việc</li></ol><p>Tại c&aacute;c cửa kiểm so&aacute;t, khu vực b&ecirc;n trong s&acirc;n bay</p><ol><li>Nhiệm vụ</li></ol><ul><li>Vận h&agrave;nh khai th&aacute;c M&aacute;y X-quang;</li><li>Vận h&agrave;nh khai th&aacute;c M&aacute;y ph&aacute;t hiện chất nổ cố định; cầm tay</li><li>Vận h&agrave;nh khai th&aacute;c M&aacute;y phát hi&ecirc;̣n kim loại cố định; cầm tay</li><li>Vận h&agrave;nh khai th&aacute;c m&aacute;y bộ đ&agrave;m;</li><li>Kiểm tra soi chiếu đối với h&agrave;nh kh&aacute;ch, nh&acirc;n vi&ecirc;n, người tham quan;</li><li>Kiểm tra soi chiếu đối với h&agrave;nh l&yacute; x&aacute;ch tay, đồ vật;</li><li>Kiểm tra soi chiếu đối với h&agrave;nh l&yacute; k&yacute; gửi, h&agrave;ng h&oacute;a, bưu phẩm, bưu kiện, thư t&iacute;n;</li><li>Kiểm tra giấy tờ t&ugrave;y th&acirc;n của nh&acirc;n vi&ecirc;n, người tham quan, h&agrave;nh kh&aacute;ch v&agrave; thẻ l&ecirc;n t&agrave;u bay của h&agrave;nh kh&aacute;ch;</li><li>Xử l&yacute; h&agrave;nh kh&aacute;ch g&acirc;y rối tại điểm kiểm tra soi chiếu;</li><li>Đối ph&oacute; với t&igrave;nh huống khẩn nguy tại điểm kiểm tra soi chiếu;</li></ul><ol><li>Ti&ecirc;u ch&iacute; tuyển dụng</li></ol><ul><li>Độ tuổi: Kh&ocirc;ng qu&aacute; 28 tuổi</li><li>Tr&igrave;nh độ: Tốt nghiệp Phổ th&ocirc;ng trung học trở l&ecirc;n</li><li>Tr&igrave;nh độ tiếng Anh giao tiếp tốt, TOEIC đạt tối thiểu 450 điểm Tr&igrave;nh độ tin học: Sử dụng th&agrave;nh thạo tin học văn ph&ograve;ng</li><li>Chiều cao: Nam từ 1m70 trở l&ecirc;n, Nữ từ 1m60 trở l&ecirc;n</li><li>Thị lực kh&ocirc;ng k&iacute;nh tối thiểu 5/10 mỗi b&ecirc;n; kh&ocirc;ng mắc bệnh m&ugrave; m&agrave;u, loạn m&agrave;u</li></ul><p>Đ&aacute;p ứng c&aacute;c điều kiện, ti&ecirc;u chuẩn theo quy định của Th&ocirc;ng tư số 30/2012/TT-BGTVT ng&agrave;y 01/08/2012 của Bộ GTVT quy định chi tiết Chương tr&igrave;nh an ninh h&agrave;ng kh&ocirc;ng d&acirc;n dụng Việt Nam v&agrave; kiểm so&aacute;t chất lượng an ninh h&agrave;ng kh&ocirc;ng d&acirc;n dụng.</p><p>Ưu ti&ecirc;n: C&oacute; hiểu biết về ph&aacute;p luật, tốt nghiệp chuy&ecirc;n ng&agrave;nh Luật, kinh tế, quốc tế. Tốt nghiệp c&aacute;c kh&oacute;a nghiệp vụ H&agrave;ng kh&ocirc;ng, An ninh H&agrave;ng kh&ocirc;ng.</p><p><strong>Nh&acirc;n vi&ecirc;n an ninh kiểm so&aacute;t</strong></p><ol><li>M&ocirc; tả c&ocirc;ng việc</li></ol><ul><li>L&agrave; người chịu tr&aacute;ch nhiệm kiểm tra, gi&aacute;m s&aacute;t an ninh h&agrave;ng kh&ocirc;ng tại c&aacute;c khu vực hạn chế của cảng h&agrave;ng kh&ocirc;ng, s&acirc;n bay;&nbsp;</li><li>Duy tr&igrave; vật tư tại khu vực c&ocirc;ng cộng tại cảng h&agrave;ng kh&ocirc;ng, s&acirc;n bay;&nbsp;</li><li>Tuần tra, canh g&aacute;c bảo vệ v&agrave;nh đai cảng h&agrave;ng kh&ocirc;ng, s&acirc;n bay, khu vực hạn chế tại cảng h&agrave;ng kh&ocirc;ng, s&acirc;n bay, t&agrave;u bay đỗ tại cảng h&agrave;ng kh&ocirc;ng, s&acirc;n bay;&nbsp;</li><li>Bảo đảm an ninh tr&ecirc;n chuyến bay.</li></ul><ol><li>M&ocirc;i trường l&agrave;m việc</li></ol><p>Tại sảnh v&agrave; khu vực b&ecirc;n ngo&agrave;i s&acirc;n bay</p><ol><li>Ti&ecirc;u ch&iacute; tuyển dụng</li></ol><ul><li>Độ tuổi: Kh&ocirc;ng qu&aacute; 28 tuổi</li><li>Tr&igrave;nh độ chuy&ecirc;n m&ocirc;n: Tốt nghiệp Phổ th&ocirc;ng trung học trở l&ecirc;n</li><li>Chỉ tuyển nam giới, tr&igrave;nh độ tiếng Anh: TOEIC đạt tối thiểu 300/400 điểm v&agrave; tương đương trở l&ecirc;n( t&ugrave;y theo kỳ tuyển dụng)</li><li>Tr&igrave;nh độ tin học: Sử dụng th&agrave;nh thạo tin học văn ph&ograve;ng</li><li>Chiều cao: Nam từ 1m70 trở l&ecirc;n, Nữ từ 1m60 trở l&ecirc;n</li><li>Sức khỏe: Loại 1, 2; 18.0&lt;=BMI&lt;=27;</li><li>C&acirc;n nặng: Ph&ugrave; hợp với chiều cao theo ti&ecirc;u chuẩn BMI;</li><li>Thị lực kh&ocirc;ng k&iacute;nh tối thiểu 5/10 mỗi b&ecirc;n; kh&ocirc;ng mắc bệnh m&ugrave; m&agrave;u, loạn m&agrave;u</li><li>Kh&ocirc;ng n&oacute;i ngọng, n&oacute;i lắp;</li><li>Đ&aacute;p ứng c&aacute;c điều kiện, ti&ecirc;u chuẩn theo quy định của Th&ocirc;ng tư số 30/2012/TT-BGTVT ng&agrave;y 01/08/2012 của Bộ GTVT quy định chi tiết Chương tr&igrave;nh an ninh h&agrave;ng kh&ocirc;ng d&acirc;n dụng Việt Nam v&agrave; kiểm so&aacute;t chất lượng an ninh h&agrave;ng kh&ocirc;ng d&acirc;n dụng.</li><li>Ưu ti&ecirc;n: C&ocirc;ng an, bộ đội xuất ngũ.</li><li>Ưu ti&ecirc;n: C&ocirc;ng an, bộ đội xuất ngũ. Tốt nghiệp c&aacute;c kh&oacute;a nghiệp vụ H&agrave;ng kh&ocirc;ng, an ninh H&agrave;ng kh&ocirc;ng.</li></ul><p><strong>Nh&acirc;n vi&ecirc;n an ninh cơ động</strong></p><ol><li>M&ocirc; tả c&ocirc;ng việc&nbsp;</li></ol><p>L&agrave; người trực tiếp thực hiện c&aacute;c biện ph&aacute;p kiểm so&aacute;t an ninh h&agrave;ng kh&ocirc;ng, ph&ograve;ng ngừa, đối ph&oacute; với c&aacute;c h&agrave;nh vi, sự cố bất thường xảy ra; những h&agrave;nh vi, h&agrave;nh động can thiệp bất hợp ph&aacute;p (gọi chung l&agrave; h&agrave;nh kh&aacute;ch) v&agrave; xử l&yacute; vụ việc vi phạm an ninh h&agrave;ng kh&ocirc;ng;</p><ol><li>M&ocirc;i trường l&agrave;m việc&nbsp;</li></ol><p>Tại sảnh v&agrave; khu vực b&ecirc;n ngo&agrave;i s&acirc;n bay</p><ol><li>Ti&ecirc;u ch&iacute; dự tuyển</li></ol><ul><li>Độ tuổi: Kh&ocirc;ng qu&aacute; 28 tuổi</li><li>Tr&igrave;nh độ chuy&ecirc;n m&ocirc;n: Tốt nghiệp Phổ th&ocirc;ng trung học trở l&ecirc;n</li><li>Tr&igrave;nh độ tiếng Anh: TOEIC đạt tối thiểu 300/400 điểm v&agrave; tương đương trở l&ecirc;n(t&ugrave;y kỳ tuyển dụng v&agrave; s&acirc;n bay)</li><li>Chiều cao: Nam từ 1m70 trở l&ecirc;n (t&ugrave;y đợt tuyển dụng), Nữ từ 1m60 trở l&ecirc;n</li><li>Sức khỏe: Loại 1, 2; 18.0&lt;=BMI&lt;=27</li><li>C&acirc;n nặng: ph&ugrave; hợp với chiều cao</li><li>Ưu ti&ecirc;n: C&ocirc;ng an, bộ đội xuất ngũ. Tốt nghiệp c&aacute;c kh&oacute;a nghiệp vụ H&agrave;ng kh&ocirc;ng, an ninh H&agrave;ng kh&ocirc;ng.</li></ul><p><strong>Đ&atilde;i ngộ:</strong></p><ul><li>Được hưởng mọi chế độ theo ch&iacute;nh s&aacute;ch chung của ng&agrave;nh h&agrave;ng kh&ocirc;ng</li><li>Được ưu đ&atilde;i gi&aacute; v&eacute; cho người th&acirc;n, được ưu đ&atilde;i v&eacute; miễn ph&iacute; theo th&acirc;m ni&ecirc;n</li></ul><p><strong>H&igrave;nh thức tuyển chọn</strong></p><p>V&ograve;ng 1: Sơ tuyển hồ sơ;</p><p>V&ograve;ng 2: Kiểm tra năng lực: Kiểm tra Tiếng Anh; Kiểm tra khả năng, tố chất nghề v&agrave; Phỏng vấn;</p><p>V&ograve;ng 3: Kiểm tra sức khỏe.</p><p><strong>Chương tr&igrave;nh đ&agrave;o tạo</strong></p><ul><li>C&aacute;c m&ocirc;n học chung</li><li>C&aacute;c m&ocirc;n học ph&aacute;p luật: ph&aacute;p luật đại cương, ph&aacute;p luật an ninh h&agrave;ng kh&ocirc;ng</li><li>C&aacute;c m&ocirc;n học nghiệp vụ cơ bản: bảo vệ hiện trường, h&agrave;ng h&oacute;a nguy hiểm, thiết bị an ninh h&agrave;ng kh&ocirc;ng, c&aacute;c loại khẩn nguy v&agrave; ph&ograve;ng tr&aacute;nh ch&aacute;y nổ, kỹ năng mềm,...</li><li>C&aacute;c m&ocirc;n học nghiệp vụ chuy&ecirc;n ng&agrave;nh</li></ul><p><strong>Th&ocirc;ng tin li&ecirc;n hệ</strong></p><p>- Viện đ&agrave;o tạo khởi nghiệp v&agrave; ứng dụng khoa học c&ocirc;ng nghệ cao - SATSi</p><p>- Địa chỉ: 01- BT9 khu Đ&ocirc; thị Văn Kh&ecirc;, H&agrave; Đ&ocirc;ng, H&agrave; Nội, Việt Nam</p><p>- Điện thoại: 024 223 71777</p><p>- Hotline: 0962 917 755 &ndash; 0978 586 755</p><p>- Email: satsi.edu@gmail.com</p><p>- Website: <a href='http://www.satsi.edu.vn/' >www.satsi.edu.vn</a></p> ",
	},
	{
		id: 6,
		name: "Phi công",
		image: hotBranch1,
		detail:
			"Lái máy bay vận chuyển hành khách, hàng hóa,... Chuẩn bị, kiểm tra kế hoạch và các vấn đề liên...",
		content: "",
	},
];

const allJobs = [
	{
		key: 1,
		nameJob: "Phi công",
	},
	{
		key: 2,
		nameJob: "Tiếp viên hàng không",
	},
	{
		key: 3,
		nameJob: "Kiểm soát không lưu",
	},
	{
		key: 4,
		nameJob: "An ninh hàng không",
	},
	{
		key: 5,
		nameJob: "Điều độ - Điều phối - Khai thác chuyến bay",
	},
	{
		key: 6,
		nameJob: "Cân bằng trọng tải - Hướng dẫn chất xếp",
	},
	{
		key: 7,
		nameJob: "Kỹ sư, thợ bảo dưỡng máy bay",
	},
	{
		key: 8,
		nameJob: "Kỹ sư kỹ thuật dụng cụ thiết bị",
	},
	{
		key: 9,
		nameJob: "Bảo dưỡng dụng cụ thiết bị",
	},
	{
		key: 10,
		nameJob: "Cơ khí",
	},
	{
		key: 11,
		nameJob: "Kỹ thuật Bảo dưỡng nội thất",
	},
	{
		key: 12,
		nameJob: "Thủ tục viên - Thủ tục hành khách",
	},
	{
		key: 13,
		nameJob: "Lái vận hành Trang thiết bị mặt đất (lái xe mặt đất - 09 vị trí)",
	},
	{
		key: 14,
		nameJob: "Bốc xếp, Vận chuyển hàng hóa",
	},
	{
		key: 15,
		nameJob: "Vệ sinh máy bay",
	},
	{
		key: 16,
		nameJob: "Thông báo tin tức hàng không",
	},
	{
		key: 17,
		nameJob: "Quản lý luồng không lưu",
	},
	{
		key: 18,
		nameJob: "Đánh tín hiệu tàu bay lăn",
	},
	{
		key: 19,
		nameJob: "Khí tượng",
	},
	{
		key: 20,
		nameJob: "Chính sách an ninh hàng không",
	},
	{
		key: 21,
		nameJob: "Phòng cháy chữa cháy",
	},
	{
		key: 22,
		nameJob: "Thuê chuyến",
	},
	{
		key: 23,
		nameJob: "Giám sát, Đánh giá & thanh tra chất lượng dịch vụ mặt đất",
	},
	{
		key: 24,
		nameJob: "Quản trị dữ liệu nhân sự",
	},
	{
		key: 25,
		nameJob: "Pháp chế",
	},
	{
		key: 26,
		nameJob: "Chính sách nhân sự",
	},
	{
		key: 27,
		nameJob: "Kiểm soát nội bộ",
	},
	{
		key: 28,
		nameJob: "Marketing",
	},
	{
		key: 29,
		nameJob: "Giám sát cung ứng sân bay",
	},
	{
		key: 30,
		nameJob: "Dịch vụ khách hàng",
	},
	{
		key: 31,
		nameJob: "Phát triển sales: Nội địa/Quốc tế",
	},
	{
		key: 32,
		nameJob: "Quản lý tiếp viên",
	},
	{
		key: 33,
		nameJob: "Truyền thông",
	},
	{
		key: 34,
		nameJob: "Quan hệ lao động",
	},
	{
		key: 35,
		nameJob: "Trợ giúp online",
	},
	{
		key: 36,
		nameJob: "Thương mại khối cơ quan",
	},
	{
		key: 37,
		nameJob: "Kinh tế làm việc tại khối cơ quan",
	},
	{
		key: 38,
		nameJob: "Chăm sóc khách hàng (Tổng đài viên )",
	},
	{
		key: 39,
		nameJob: "Công nghệ thông tin (Phần mềm và phần cứng)",
	},
	{
		key: 40,
		nameJob: "Văn thư lưu trữ",
	},
	{
		key: 41,
		nameJob: "Bán vé máy bay, tư vấn du lịch",
	},
	{
		key: 42,
		nameJob:
			"Vị trí sản xuất (nguyên liệu, công thức chế biến, thực đơn suất ăn…)",
	},
	{
		key: 43,
		nameJob: "Phòng sản xuất (Suất ăn)",
	},
	{
		key: 44,
		nameJob: "Điều độ (Suất ăn)",
	},
	{
		key: 45,
		nameJob: "Giám sát tổ sơ chế/Bộ phận Chia & Lắp khay",
	},
	{
		key: 46,
		nameJob: "Giao, nhận suất ăn trên máy bay",
	},
	{
		key: 47,
		nameJob: "Sát nhà ăn & Tòa nhà nhân viên",
	},
	{
		key: 48,
		nameJob: "Đầu bếp (Sous Chef)",
	},
	{
		key: 49,
		nameJob: "Vận hành băng chuyền rửa dụng cụ",
	},
	{
		key: 50,
		nameJob: "Đảm bảo chất lượng (VSMT - ATTP)",
	},
	{
		key: 51,
		nameJob: "Giám sát - Trực ban trưởng",
	},
	{
		key: 52,
		nameJob: "Phòng bán và tiếp thị",
	},
	{
		key: 53,
		nameJob: "Nhà xưởng, Phòng kỹ thuật",
	},
	{
		key: 54,
		nameJob: "Kế toán (Acc - Accountant)",
	},
	{
		key: 55,
		nameJob: "Giám sát (Hoạt động tài chính kế toán)",
	},
	{
		key: 56,
		nameJob: "Điện lạnh",
	},
	{
		key: 57,
		nameJob: "Kho vận",
	},
	{
		key: 58,
		nameJob: "Phòng khách",
	},
	{
		key: 59,
		nameJob: "Bán hàng",
	},
	{
		key: 60,
		nameJob: "Phòng điều hành nhà ga",
	},
	{
		key: 61,
		nameJob: "Phòng chờ hạng thương gia (Hạng sang)",
	},
	{
		key: 62,
		nameJob: "Phòng C",
	},
	{
		key: 63,
		nameJob: "Vận hành băng tải",
	},
	{
		key: 64,
		nameJob: "Kỹ thuật tin học",
	},
	{
		key: 65,
		nameJob: "Đào tạo lập kế hoạch (Training Planing Officer)",
	},
];

const { Meta } = Card;

const AppHotBranch = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [isModalVisible1, setIsModalVisible1] = useState(false);

	const [titleModal, setTitleModal] = useState("");
	const [contentModal, setContentModal] = useState("");

	const handleClick = (id, name, content) => {
		if (content) {
			setTitleModal(name);
			setContentModal(content);
			setIsModalVisible1(true);
		}
	};

	const handleCancel1 = () => {
		setIsModalVisible1(false);
	};

	const handleOk1 = () => {
		setIsModalVisible1(false);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	return (
		<div id='selections' className='block hotBranchBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h1 style={{ color: "#fff" }}>Các Ngành Học Hot</h1>
				</div>
				<div className='listJob'>
					<Row gutter={[24, 24]}>
						{listJobs.map((job, index) => (
							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 8 }}
								gutter={[24, 24]}
								key={index}
							>
								<Card
									hoverable
									style={{ width: "100%" }}
									cover={
										<img
											style={{
												height: "200px",
												objectFit: "cover",
												position: "center",
											}}
											alt='hot_branch'
											src={job.image}
										/>
									}
								>
									<Meta
										style={{ height: "100px", overflow: "hidden" }}
										title={job.name}
										description={job.detail}
									/>
									<Button
										onClick={() => handleClick(job.id, job.name, job.content)}
										size='small'
										type='link'
									>
										Xem chi tiết
									</Button>
								</Card>
							</Col>
						))}
					</Row>
					<Modal
						className='modalOverlay'
						title={titleModal}
						visible={isModalVisible1}
						onOk={handleOk1}
						onCancel={handleCancel1}
					>
						<div dangerouslySetInnerHTML={{ __html: contentModal }}></div>
					</Modal>
				</div>

				<div className='centerObject'>
					<Button
						type='primary'
						size='large'
						onClick={showModal}
						style={{
							backgroundColor: "#721b00",
							border: "1px solid #721b00",
							marginTop: "30px",
						}}
					>
						XEM{" "}
						<i
							className='fas fa-long-arrow-alt-down upDownArrow'
							style={{ margin: "0 7px" }}
						></i>{" "}
						THÊM
					</Button>
				</div>
				<Modal
					className='modalOverlay'
					title='DANH SÁCH CÁC NGÀNH HỌC'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<Row gutter={[16, 16]}>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.map((job) => {
									if (job.key % 3 === 1) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.map((job) => {
									if (job.key % 3 === 2) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.map((job) => {
									if (job.key % 3 === 0) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
					</Row>
				</Modal>
			</div>
		</div>
	);
};

export default AppHotBranch;
