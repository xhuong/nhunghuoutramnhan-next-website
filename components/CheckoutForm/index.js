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
        <Row gutter={8}>
          <Col xl={8}>
            <Select>
              <option value="" selected>
                Chọn tỉnh / thành
              </option>
            </Select>
          </Col>
          <Col xl={8}>
            <Select>
              <option value="" selected>
                Chọn quận / huyện
              </option>
            </Select>
          </Col>
          <Col xl={8}>
            <Select>
              <option value="" selected>
                Chọn phường / xã
              </option>
            </Select>
          </Col>
        </Row>
      </div>
    </form>
  );
}

export default CheckoutForm;
