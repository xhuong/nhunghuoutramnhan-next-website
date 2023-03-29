import React from "react";
import { BsCartPlus, BsFillCartPlusFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { AiFillEye } from "react-icons/ai";
import Button from "@/components/Button";
import { formatPrice } from "@/utils";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "@/redux/slices/cartSlice";
import { priority } from "@/next-sitemap.config";

function Product({ id, name, imageUrl, oldPrice, newPrice, star, categoryId, discount, ...props }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddProductToCart = () => {
    if (newPrice && oldPrice) {
      let product = {
        id,
        name,
        imageUrl,
        oldPrice,
        newPrice,
        star,
        categoryId,
        discount,
        count: 1,
      };
      dispatch(addProductsToCart(product));
    }
  };
  return (
    <div
      className={`${styles.product} border-gray`}
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      <span className={styles.product_discount}>{discount}</span>
      <div className={styles.product_image_wrapper}>
        <Image src={imageUrl} alt="" priority={id === 1 ? true : false} />
        <div className={`${styles.product_button_wrapper} hidden-xs hidden-sm hidden-md`}>
          <Button
            type="secondary"
            size="full-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleAddProductToCart();
            }}
          >
            <BsFillCartPlusFill /> Thêm vào giỏ
          </Button>

          <Button type="secondary" size="full-btn">
            <AiFillEye />
          </Button>
        </div>
      </div>
      <h3 className={styles.product_title}>{name}</h3>
      <div className={styles.product_footer}>
        <div className={styles.product_price}>
          {newPrice && oldPrice && (
            <React.Fragment>
              <span className={styles.product_price_new}>{formatPrice(newPrice)}đ</span>
              <span className={styles.product_price_old}>{formatPrice(oldPrice)}đ</span>
            </React.Fragment>
          )}
          {!newPrice && !oldPrice && (
            <React.Fragment>
              <span className={`${styles.product_price_new} py-3`}>Giá liên hệ</span>
            </React.Fragment>
          )}
        </div>
        {newPrice && oldPrice && (
          <span
            className={styles.product_add_to_cart}
            onClick={(e) => {
              e.stopPropagation();
              handleAddProductToCart();
            }}
          >
            <BsCartPlus />
          </span>
        )}
      </div>
    </div>
  );
}

export default Product;
