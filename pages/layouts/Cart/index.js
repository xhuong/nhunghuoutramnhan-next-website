import { Row, Col, InputNumber } from "antd";
import Image from "next/image";
import ButtonSecondary from "@/components/ButtonSecondary";
import Section from "@/pages/layouts/Section";
import styles from "@/styles/Cart.module.scss";
import { formatPrice, totalPrice } from "@/utils";
import { useDispatch } from "react-redux";
import { removeProductsFromCart, updateProductCount } from "@/redux/slices/cartSlice";

function CartLayout({ data }) {
  const dispatch = useDispatch();

  const handleUpdateProductCount = (id, value) => {
    dispatch(
      updateProductCount({
        id,
        count: value,
      })
    );
  };

  return (
    <Section>
      <p className="mb-8">
        Giỏ hàng:
        <span className="ml-2">0{data.length} sản phẩm</span>
      </p>
      <Row gutter={16}>
        <Col xl={18} lg={18} md={24} sm={24} xs={24}>
          {data.map((cartItem) => (
            <Row gutter={8} className={`${styles.cart_item} border-gray-200`} key={cartItem.name}>
              <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <Image src={cartItem.imageUrl} alt="" />
              </Col>
              <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                <div className="flex justify-between">
                  <div className={styles.cart_item_info}>
                    <h3 className="max-line-two mr-2 capitalize">{cartItem.name}</h3>
                    <p className="font-bold">Chất lượng</p>
                    <p className="hidden-md hidden-lg hidden-xl hidden-xxl text-red-500 font-semibold">
                      {formatPrice(cartItem.newPrice)}đ
                    </p>
                  </div>
                  <div className={`${styles.cart_item_price} hidden-sm hidden-xs`}>
                    <span className="font-bold">{formatPrice(cartItem.newPrice)}đ</span>
                  </div>
                  <div className={`${styles.cart_item_quantity} flex flex-col items-center`}>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={cartItem.count}
                      size="large"
                      onChange={(value) => {
                        handleUpdateProductCount(cartItem.id, value);
                      }}
                    />
                    <span
                      className="py-4 w-full text-center hover:underline hover:text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeProductsFromCart(cartItem.id));
                      }}
                    >
                      Xoá
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Col>

        {/* cart action  */}
        <Col xl={6} lg={6} md={24} sm={24} xs={24}>
          <div className="flex justify-between pb-4 border-bttom-gray">
            Tạm tính: <b>{formatPrice(totalPrice(data))} VNĐ</b>
          </div>
          <div className="flex justify-between items-end pt-4">
            Thành tiền:{" "}
            <span className="font-bold text-md-custom text-red-600">{formatPrice(totalPrice(data))} VNĐ</span>
          </div>
          <p className="text-red-500 mt-4">*Trong trường hợp bạn có Mã giảm giá, vui lòng nhập ở bước thanh toán.</p>
          <div className="mt-4">
            <ButtonSecondary className="uppercase" type="secondary" size="full-btn">
              Thanh toán ngay
            </ButtonSecondary>
            <ButtonSecondary className="uppercase mt-4" type="primary" size="full-btn">
              Tiếp tục mua hàng
            </ButtonSecondary>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

export default CartLayout;
