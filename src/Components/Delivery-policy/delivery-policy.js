import React from "react";
import Header from '../Header/header';
import Navbarmenu from '../Nav/nav';
import Footer from '../Footer/footer';
import './delivery-policy.css';

function Delivery() {
    return (
      <div className="delivery-home">
        <Header/>
        <Navbarmenu/>
          <div className="delivery-item">
          <h2><b>I. Chính sách giao hàng tại khu vực Quy Nhơn: </b></h2>
          <h2><b>1. Giao hàng và thu tiền (COD): </b></h2>
          <h2>Đơn hàng trên <b>300.000đ:</b> miễn phí giao hàng.</h2>
          <h2>Đơn hàng dưới <b>300.000đ:</b> phụ thu <b>10.000đ</b> giao hàng.</h2>
          <h2><b>** Thời gian giao hàng: </b></h2>
          <h2>– Đặt hàng trước <b>11h30</b> bạn sẽ nhận hàng trước <b>18h</b> hàng ngày.</h2>
          <h2>– Đặt hàng sau <b>11h30</b> đơn hàng chuyển sang giao trước <b>18h</b> ngày hôm sau.</h2>
          <h2>– Quý khách được hỗ trợ giao hàng lại lần 2 nếu lần giao đầu tiên không thành công. Hoặc nhờ người thân, bạn bè nhận hộ nếu có việc đột xuất không có ở địa chỉ nhận hàng.</h2>
          <h2><b>2. Khách hàng thanh toán trước (chuyển khoản) vào tài khoản của BLUE CHIC Computer: </b></h2>
          <h2>– Khách hàng không tiện giao dịch tiền mặt khi nhận hàng có thể thanh toán qua tài khoản, phí chuyển khoản do khách hàng thanh toán.</h2>
          <br/>
          <h2><b>II. Chính sách giao hàng tại các khu vực khác: </b></h2>
          <h2><b>1. Giao hàng và thu tiền (COD): </b></h2>
          <h2>Đơn hàng trên <b>300.000đ:</b> miễn phí giao hàng.</h2>
          <h2>Đơn hàng dưới <b>300.000đ:</b> phụ thu <b>10.000đ</b> giao hàng.</h2>
          <h2><b>** Thời gian giao hàng: </b></h2>
          <h2>– Nhận hàng sau  <b>1-2</b>  ngày làm việc đối với các <b>khu vực trung tâm, thành phố, thị xã các tỉnh.</b></h2>
          <h2>– Nhận hàng sau  <b>3-4</b>  ngày làm việc đối với các <b>khu vực huyện, xã, thôn…</b></h2>
          <h2>– Quý khách được hỗ trợ giao hàng lại lần 2 nếu lần giao đầu tiên không thành công. Hoặc nhờ người thân, bạn bè nhận hộ nếu có việc đột xuất không có ở địa chỉ nhận hàng.</h2>
          <h2><b>2. Khách hàng thanh toán trước (chuyển khoản) vào tài khoản của BLUE CHIC Computer: </b></h2>
          <h2>– Khách hàng không tiện giao dịch tiền mặt khi nhận hàng có thể thanh toán qua tài khoản, phí chuyển khoản do khách hàng thanh toán.</h2>
          <br/>
          <h2><b>III. Quý khách lưu ý: </b></h2>
          <h2>– Chính sách giao hàng áp dụng từ thứ 2 đến thứ 7 trừ Chủ Nhật và ngày lễ.</h2>
          <h2>– Chính sách trên chỉ áp dụng cho khu vực Nội thành TP Quy Nhơn, khu vực ngoại thành, thời gian toàn trình sẽ cộng thêm 1 ngày.</h2>
          <h2>– Các mốc thời gian trên đây là thời gian dự kiến, trong một số trường hợp đặc biệt do yếu tố khách quan, đơn hàng của quý khách có thể được giao chậm hơn tối đa 1 ngày so với thời gian dự kiến.</h2>
          <h2>Mọi thắc mắc về đơn hàng và chính sách giao hàng xin vui lòng liên hệ Hotline: <b>(028) 7301 3878</b> hoặc <b>0909 305 350</b> để được giải đáp cụ thể.</h2>
          </div>
          <Footer/>
    </div>
  );
}
export default Delivery;