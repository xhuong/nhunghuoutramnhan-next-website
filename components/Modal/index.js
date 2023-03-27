import { Col, InputNumber, Row } from "antd";
import { IoIosNotifications } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import ButtonSecondary from "@/components/ButtonSecondary";
import { closeModal } from "@/redux/slices/modalSlice";
import Image from "next/image";
import styles from "@/styles/Modal.module.scss";

function Modal() {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.modal} fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center`}>
      <div className={`${styles.modal_content} relative`}>
        <div className={`${styles.modal_notification}  bg-red-700 flex items-center px-4 py-4`}>
          <IoIosNotifications className="text-white mr-1" />
          <p className="text-white text-xs-custom">
            Bạn đã thêm <span className="text-yellow-300">Bình Cá Ngựa 1 Lít</span> vào giỏ hàng
          </p>
        </div>
        <p className={`${styles.modal_heading} px-4 py-4`}>Giỏ hàng của bạn có 1 sản phẩm</p>
        <Row className="px-4 py-4">
          <Col xl={8}>
            <p>Sản phẩm</p>
          </Col>
          <Col xl={4}>
            <p>Đơn giá</p>
          </Col>
          <Col xl={4}>
            <p>Số lượng</p>
          </Col>
          <Col xl={4}>
            <p>Thành tiền</p>
          </Col>
          <Col xl={4}>
            <p>Lựa chọn</p>
          </Col>
        </Row>
        <ul className={styles.modal_list_product}>
          <li className={styles.modal_item_product}>
            <Row className="px-4">
              <Col xl={8}>
                <div className="flex">
                  <div className="mr-2 mt-2" style={{ maxWidth: "80px" }}>
                    <Image src={require("@/public/images/products/product01.png")} alt="" />
                  </div>
                  <h4 className="self-start max-line-three">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim qui ipsa.
                  </h4>
                </div>
              </Col>

              <Col xl={4}>1,250,000₫</Col>

              <Col xl={4}>
                <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
              </Col>

              <Col xl={4}>
                <span>1,450,000₫</span>
              </Col>

              <Col xl={4}>
                <ButtonSecondary>
                  <RiDeleteBin5Line />
                </ButtonSecondary>
              </Col>
            </Row>
          </li>
          <li className={styles.modal_item_product}>
            <Row className="px-4">
              <Col xl={8}>
                <div className="flex">
                  <div className="mr-2 mt-2" style={{ maxWidth: "80px" }}>
                    <Image src={require("@/public/images/products/product01.png")} alt="" />
                  </div>
                  <h4 className="self-start max-line-three">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim qui ipsa.
                  </h4>
                </div>
              </Col>

              <Col xl={4}>1,250,000₫</Col>

              <Col xl={4}>
                <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
              </Col>

              <Col xl={4}>
                <span>1,450,000₫</span>
              </Col>

              <Col xl={4}>
                <ButtonSecondary>
                  <RiDeleteBin5Line />
                </ButtonSecondary>
              </Col>
            </Row>
          </li>
          <li className={styles.modal_item_product}>
            <Row className="px-4">
              <Col xl={8}>
                <div className="flex">
                  <div className="mr-2 mt-2" style={{ maxWidth: "80px" }}>
                    <Image src={require("@/public/images/products/product01.png")} alt="" />
                  </div>
                  <h4 className="self-start max-line-three">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim qui ipsa.
                  </h4>
                </div>
              </Col>

              <Col xl={4}>1,250,000₫</Col>

              <Col xl={4}>
                <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
              </Col>

              <Col xl={4}>
                <span>1,450,000₫</span>
              </Col>

              <Col xl={4}>
                <ButtonSecondary>
                  <RiDeleteBin5Line />
                </ButtonSecondary>
              </Col>
            </Row>
          </li>
          <li className={styles.modal_item_product}>
            <Row className="px-4">
              <Col xl={8}>
                <div className="flex">
                  <div className="mr-2 mt-2" style={{ maxWidth: "80px" }}>
                    <Image src={require("@/public/images/products/product01.png")} alt="" />
                  </div>
                  <h4 className="self-start max-line-three">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
                    atque voluptas.
                  </h4>
                </div>
              </Col>

              <Col xl={4}>1,250,000₫</Col>

              <Col xl={4}>
                <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
              </Col>

              <Col xl={4}>
                <span>1,450,000₫</span>
              </Col>

              <Col xl={4}>
                <ButtonSecondary>
                  <RiDeleteBin5Line />
                </ButtonSecondary>
              </Col>
            </Row>
          </li>
          <li className={styles.modal_item_product}>
            <Row className="px-4">
              <Col xl={8}>
                <div className="flex">
                  <div className="mr-2 mt-2" style={{ maxWidth: "80px" }}>
                    <Image src={require("@/public/images/products/product01.png")} alt="" />
                  </div>
                  <h4 className="self-start max-line-three">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim qui ipsa.
                  </h4>
                </div>
              </Col>

              <Col xl={4}>1,250,000₫</Col>

              <Col xl={4}>
                <InputNumber className="flex-1" min={1} max={10} defaultValue={1} size="large" />
              </Col>

              <Col xl={4}>
                <span>1,450,000₫</span>
              </Col>

              <Col xl={4}>
                <ButtonSecondary>
                  <RiDeleteBin5Line />
                </ButtonSecondary>
              </Col>
            </Row>
          </li>
        </ul>

        <Row>
          <Col xl={24}>
            <p className="text-right px-4 py-2 font-bold">
              Thành tiền: <span className="text-red-700 font-bold">1,250,000₫</span>
            </p>
          </Col>
        </Row>

        <div className={styles.modal_action}>
          <Row gutter={6} className="px-4 py-4">
            <Col xl={12}>
              <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
                Xem giỏ hàng
              </ButtonSecondary>
            </Col>
            <Col xl={12}>
              <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
                Thanh toán
              </ButtonSecondary>
            </Col>
          </Row>
        </div>

        <span
          className={`${styles.modal_remove_icon} absolute text-white cursor-pointer`}
          onClick={() => dispatch(closeModal())}
        >
          <TiDelete />
        </span>
      </div>
    </div>
  );
}

export default Modal;
