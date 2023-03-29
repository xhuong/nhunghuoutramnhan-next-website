import Link from "next/link";
import Button from "../Button";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp, IoSearch } from "react-icons/io5";
import { closeMenu } from "@/redux/slices/menuMobileSlice";
import styles from "@/styles/MenuMobile.module.scss";
import styles2 from "@/styles/Header.module.scss";
import Image from "next/image";
import { globalData } from "@/data";
import { handleSearchProducts } from "@/utils";

function MenuMobile() {
  const dispatch = useDispatch();
  const isActiveMenu = useSelector((state) => state.menuMobile.isActive);

  const [activeIdCategory, setActiveIdCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [listProducts, setListProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getListProductsByIdCategory = (id) => {
    const result = globalData.products.filter((product) => product.categoryId === id);
    setListProducts(result);
  };

  const handleChangeCategory = (id) => {
    if (id !== activeIdCategory) {
      setActiveIdCategory(id);
    }
  };

  useEffect(() => {
    if (activeIdCategory) {
      getListProductsByIdCategory(activeIdCategory);

      const data = globalData.categories[activeIdCategory - 1];
      setTitle(data.categoryName);
    }
  }, [activeIdCategory]);

  const onCompleted = (products) => {
    setListProducts(products);
  };

  useEffect(() => {
    if (isActiveMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }
  }, [isActiveMenu]);

  return (
    <div
      className={`${styles.menu_mobile} ${
        isActiveMenu ? styles.menu_mobile_active : ""
      } fixed top-0 left-0 bottom-0 right-0 flex bg-white z-10 hidden-lg hidden-xl hidden-xxl`}
    >
      <div className={styles.menu_mobile_left}>
        <span className="gap-x-2 py-6 flex items-center justify-center" onClick={() => dispatch(closeMenu())}>
          <span className="text-md-custom text-red-700">
            <IoCloseCircleSharp />
          </span>
          Đóng
        </span>
        <ul className={styles.menu_mobile_list}>
          {globalData.categories.map((category, index) => (
            <li
              key={index}
              className={`${styles.menu_mobile_item} ${
                index === activeIdCategory - 1 && styles.menu_mobile_item_active
              } py-4 pl-3 relative before:content-[''] before:hidden before:h-full before:w-0.5 before:absolute before:left-0 before:top-0`}
              onClick={() => {
                handleChangeCategory(category.id);
              }}
            >
              <span className={`${styles.menu_mobile_item} uppercase font-semibold text-xs`}>
                {category.categoryName}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.menu_mobile_right} p-2`}>
        <form
          action=""
          className={`${styles.menu_mobile_searchbox} flex`}
          onSubmit={(e) => {
            e.preventDefault();
            if (searchKey) {
              handleSearchProducts(searchKey, globalData.products, onCompleted);
            }
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            className={styles2.header_searchbox_input}
          />
          <Button size="sm-btn" type="primary" className="hidden-xs">
            <IoSearch />
          </Button>
        </form>

        <h2 className="text-md shadow-md font-bold text-center py-2">{title}</h2>
        <Row gutter={[8, 8]} className="overflow-y-scroll" style={{ maxHeight: "calc(100% - 86px)" }}>
          {listProducts.map((product) => (
            <Col xs={12} sm={8} md={8} className="">
              <Link
                className="block"
                href={`/products/${product.id}`}
                onClick={() => {
                  dispatch(closeMenu());
                }}
              >
                <Image src={product.imageUrl} alt="" className="mx-auto mb-3 rounded-xl" />
                <p className="text-center text-xs">{product.name}</p>
              </Link>
            </Col>
          ))}
        </Row>

        {listProducts.length <= 0 && (
          <p className="bg-red-200 text-red-700 px-2 py-2 text-center text-sm rounded">Không tìm thấy sản phẩm!</p>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
