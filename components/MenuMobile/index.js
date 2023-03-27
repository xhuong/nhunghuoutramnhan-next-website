import Link from "next/link";
import Button from "../Button";
import { Row, Col } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp, IoSearch } from "react-icons/io5";
import { closeMenu } from "@/redux/slices/menuMobileSlice";
import binhNhungSvg from "@/public/images/mobile/products/binh_nhung_huou.png";
import nhungHuouTuoiSvg from "@/public/images/mobile/products/nhung_huou_tuoi.png";
import styles from "@/styles/MenuMobile.module.scss";
import styles2 from "@/styles/Header.module.scss";
import Image from "next/image";

function MenuMobile() {
  const dispatch = useDispatch();
  const isActiveMenu = useSelector((state) => state.menuMobile.isActive);

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
          <li
            className={`${styles.menu_mobile_item} ${styles.menu_mobile_item_active} py-6 px-8 relative active max-line-one before:content-[''] before:hidden before:h-full before:w-1 before:absolute before:left-0 before:top-0`}
          >
            <span className={`${styles.menu_mobile_item} py-2 inline-block max-line-one`}>Nhung hươu</span>
          </li>
          <li className="styles.menu_mobile_item py-6 px-8">
            <span className={`${styles.menu_mobile_item} py-2 inline-block max-line-one`}>Nhung hươu</span>
          </li>
          <li className="styles.menu_mobile_item py-6 px-8">
            <span className={`${styles.menu_mobile_item} py-2 inline-block max-line-one`}>Nhung hươu</span>
          </li>
          <li className="styles.menu_mobile_item py-6 px-8">
            <span className={`${styles.menu_mobile_item} py-2 inline-block max-line-one`}>Nhung hươu</span>
          </li>
          <li className="styles.menu_mobile_item py-6 px-8">
            <span className={`${styles.menu_mobile_item} py-2 inline-block max-line-one`}>Nhung hươu</span>
          </li>
        </ul>
      </div>

      <div className={`${styles.menu_mobile_right} p-2`}>
        <form action="" className={`${styles.menu_mobile_searchbox} flex`}>
          <input type="text" placeholder="Tìm kiếm sản phẩm..." className={styles2.header_searchbox_input} />
          <Button size="sm-btn" type="primary" className="hidden-xs">
            <IoSearch />
          </Button>
        </form>

        <h2 className="text-sm-custom font-bold text-center py-2">Nhung Hươu</h2>
        <Row gutter={[16, 16]} justify="center" className="h-full overflow-y-scroll">
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={binhNhungSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={nhungHuouTuoiSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={nhungHuouTuoiSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={nhungHuouTuoiSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={nhungHuouTuoiSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
          <Col xs={24} sm={8}>
            <Link className="block" href="/">
              <Image src={nhungHuouTuoiSvg} alt="" className="mx-auto mb-3" />
              <p className="text-center text-xs-custom">Nhung hươu</p>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MenuMobile;
