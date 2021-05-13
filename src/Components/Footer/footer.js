import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <h4 className="title">GIỚI THIỆU</h4>
            <h3>Trang chủ</h3>
            <h3>Về Blue Chic Computer</h3>
            <h3>Điều khoản giao dịch</h3>
            <h3>Bảo mật thông tin</h3>
            <h3>Tuyển dụng</h3>   
          </MDBCol>
          <MDBCol md="2">
            <h4 className="title">CHÍNH SÁCH CÔNG TY</h4>
            <h3>Chính sách giao nhận</h3>
            <h3>Chính sách nhận trả hàng</h3>
            <h3>Phương thức thanh toán</h3>
            <h3>Chế độ bảo hành</h3>
          </MDBCol>

          <MDBCol md="4">
            <h4 className="title">HỖ TRỢ KHÁCH HÀNG</h4>
            <h3>Bảo hành: (028)73013879</h3>
            <h3>Hotline bảo hành tại Quy Nhơn: 0703305503</h3>
            <h3>Gửi yêu cầu bảo hành</h3>
            <h3>Gửi yêu cầu đổi hàng</h3>
            <h3>Phòng kinh doanh: sales@bluechiccomputer.com</h3>  
            <h3>Phòng hỗ trợ khách hàng: support@bluechiccomputer.com</h3>   
          </MDBCol>

          <MDBCol md="4">
            <h4 className="title">THÔNG TIN LIÊN HỆ BLUE CHIC COMPUTER</h4>
            <h3> <i class="fas fa-map-marker-alt"></i>  332 Hoàng Văn Thụ, Tp Quy Nhơn, Bình Định</h3>
            <h3><i class="fas fa-phone"></i>  (028)73013878 - 0909305053</h3>
            <h3><i class="fas fa-door-open"></i> 9h đến 20h từ thứ 2 đến thứ 7, Chủ nhật từ 10h đến 19h</h3>
            <h3><i class="fas fa-globe-asia"></i> www.bluechiccomputer.com</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>
        
        <div className="footer-copyright text-center py-1">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:  BLUECHICComputer.com 
          </MDBContainer>
        </div>
      </div>
      
    </MDBFooter>
  );
}

export default Footer;