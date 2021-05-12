import React from "react";
import bank1 from "../../public/image/vietcombank.PNG";
import bank2 from "../../public/image/techcombank.PNG";
import bank3 from "../../public/image/eximbank.PNG";
import "./pay.css";

function Pay() {
  return (
    <div className="pay-home">
      <div className="pay-item">
        <h5>
          <b>Lưu ý: Nội dung chuyển khoản quý khách vui lòng chỉ ghi: </b> Mã
          đơn hàng nếu có hoặc SDT + tên
          <b>dugfofu</b>
        </h5>
      </div>
      <table border="1">
        <tr>
          <td className="td-bank">
            <img className="img-bank" src={bank1} alt="Vietcombank" />
          </td>
          <td className="tblbl-bank">
            <div className="lbl-bank">
              <h4>
                <b>THÔNG TIN GIAO DỊCH BLUE CHIC Computer:</b>
              </h4>
              <h3>
                <b>Số tài khoản: </b> 0441000755201
              </h3>
              <h3>
                <b>Ngân hàng: </b> NGÂN HÀNG TMCP NGOẠI THƯƠNG VIỆT NAM – Chi
                Nhánh Lê Duẩn, Quy Nhơn
              </h3>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td-bank">
            <img className="img-bank" src={bank2} alt="Techcombank" />
          </td>
          <td className="tblbl-bank">
            <div className="lbl-bank">
              <h4>
                <b>THÔNG TIN GIAO DỊCH BLUE CHIC Computer:</b>
              </h4>
              <h3>
                <b>Số tài khoản: </b> 19135510812021
              </h3>
              <h3>
                <b>Ngân hàng: </b> NGÂN HÀNG TMCP KỸ THƯƠNG VIỆT NAM – Chi Nhánh
                Lê Duẩn, Quy Nhơn
              </h3>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td-bank">
            <img className="img-bank" src={bank3} alt="Techcombank" />
          </td>
          <td className="tblbl-bank">
            <div className="lbl-bank">
              <h4>
                <b>THÔNG TIN GIAO DỊCH BLUE CHIC Computer:</b>
              </h4>
              <h3>
                <b>Số tài khoản: </b> 101514851026665
              </h3>
              <h3>
                <b>Ngân hàng: </b> NGÂN HÀNG TMCP XUẤT NHẬP KHẨU VIỆT NAM – Chi
                Nhánh Lê Duẩn, Quy Nhơn
              </h3>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Pay;
