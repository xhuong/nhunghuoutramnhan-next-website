import Link from "next/link";
import { FaDashcube } from "react-icons/fa";
import styles from "@/styles/ProductLabel.module.scss";

function ProductLabel({ title = "Tin tức", ...props }) {
  return (
    <div className={styles.product_label_header}>
      <span className={styles.product_label_icon}>
        <FaDashcube />
      </span>
      <div className={styles.product_label_heading_wrapper}>
        <h2 className={styles.product_label_heading}>{title}</h2>
        <ul className={`${styles.product_label_list} hidden-sm hidden-xs`}>
          <li className={styles.product_label_item}>
            <Link className={styles.product_label_link} href="/">
              Xem thêm
            </Link>
          </li>
          <li className={styles.product_label_item}>
            <Link className={styles.product_label_link} href="/">
              Xem thêm
            </Link>
          </li>
          <li className={styles.product_label_item}>
            <Link className={styles.product_label_link} href="/">
              Xem thêm
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductLabel;
