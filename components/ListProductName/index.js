import Link from "next/link";
import styles from "@/styles/ListProductName.module.scss";

function ListProductName() {
  return (
    <ul className={`${styles.product_name_list} flex pb-2 mb-4`}>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link
          className={`${styles.product_name_link} ${styles.product_name_link_active} px-2 py-1 capitalize `}
          href="/"
        >
          Nhung Hươu
        </Link>
      </li>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link className={`${styles.product_name_link} px-2 py-1 capitalize`} href="/">
          Nhung Hươu
        </Link>
      </li>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link className={`${styles.product_name_link} px-2 py-1 capitalize`} href="/">
          Nhung Hươu
        </Link>
      </li>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link className={`${styles.product_name_link} px-2 py-1 capitalize`} href="/">
          Nhung Hươu
        </Link>
      </li>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link className={`${styles.product_name_link} px-2 py-1 capitalize`} href="/">
          Nhung Hươu
        </Link>
      </li>
      <li className={`${styles.product_name_item} cursor-pointe mr-3`}>
        <Link className={`${styles.product_name_link} px-2 py-1 capitalize`} href="/">
          Nhung Hươu
        </Link>
      </li>
    </ul>
  );
}

export default ListProductName;
