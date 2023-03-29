import Link from "next/link";
import styles from "@/styles/ListProductName.module.scss";
import { globalData } from "@/data";
import { useEffect, useState } from "react";

function ListProductName() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (globalData.products.length > 0) {
      const result = globalData.products.slice(0, 6);
      setProducts(result);
    }
  }, []);

  return (
    <ul className={`${styles.product_name_list} flex pb-2 mb-4`}>
      {products.map((product, index) => (
        <li className={`${styles.product_name_item} cursor-pointe mr-3 shadow-2xl`} key={index}>
          <Link className={`${styles.product_name_link}  px-2 py-1 capitalize `} href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListProductName;
