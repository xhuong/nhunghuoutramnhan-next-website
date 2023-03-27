import Link from "next/link";
import { FaDashcube } from "react-icons/fa";
import { globalData } from "@/data";
import styles from "@/styles/CategorySidebar.module.scss";
import Image from "next/image";

function CategorySidebar({ name }) {
  return (
    <div className={styles.category}>
      <p className={styles.category_heading}>
        <FaDashcube />
        Danh mục sản phẩm
      </p>
      <ul className={styles.category_list}>
        <li className={styles.category_item}>
          <Link className={styles.category_item_link} href="/introduce">
            <div className={styles.category_item_image_wrappper}>
              <Image src={require("@/public/images/categories/home.png")} alt="" />
            </div>
            Giới thiệu
          </Link>
        </li>
        {globalData.categories.map((category) => (
          <li
            className={`${styles.category_item} ${category.name === name ? styles.category_item_active : ""}`}
            key={category.categoryName}
          >
            <Link className={styles.category_item_link} href={`/categories/${category.name}`}>
              <div className={styles.category_item_image_wrappper}>
                <Image src={category.imageUrl} alt="" />
              </div>
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;
