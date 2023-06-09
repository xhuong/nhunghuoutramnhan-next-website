import { Row, Col } from "antd";
import Select from "@/components/Select";
import styles from "@/styles/CheckoutForm.module.scss";

function CheckoutForm() {
  return (
    <form className={styles.checkout_form}>
      <div className={styles.form_group}>
        <input type="text" placeholder="Họ và tên" />
      </div>
      <div className={styles.form_group}>
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div className={styles.form_group}>
        <input type="text" placeholder="Địa chỉ" />
      </div>
      <div className={styles.form_group}>
        <Row gutter={[8, 8]}>
          <Col xl={8} lg={8} md={8} sm={12} xs={24}>
            <Select>
              <option value="" selected>
                Chọn Tỉnh / Thành
              </option>
            </Select>
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={24}>
            <Select>
              <option value="" selected>
                Chọn Quận / Huyện
              </option>
            </Select>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <Select>
              <option value="" selected>
                Chọn Phường / Xã
              </option>
            </Select>
          </Col>
        </Row>
      </div>
    </form>
  );
}

export default CheckoutForm;
