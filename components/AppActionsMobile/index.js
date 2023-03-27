import { Row, Col } from "antd";
import Link from "next/link";
import homeSvg from "@/public/images/icons/home.png";
import messengerSvg from "@/public/images/icons/messenger_mobile.svg";
import zaloSvg from "@/public/images/icons/zalo.svg";
import mapSvg from "@/public/images/icons/map.png";
import phoneSvg from "@/public/images/icons/phone_mobile.png";
import styles from "@/styles/AppActionsMobile.module.scss";
import Image from "next/image";

function AppActionsMobile() {
  const colStyles = {
    flexBasis: "20%",
    width: "20%",
  };
  return (
    <Row
      className={`${styles.app_action_mobile_list} items-center justify-between fixed left-0 right-0 bottom-0 bg-white hidden-md hidden-lg hidden-xl hidden-xxl z-20`}
    >
      <Col sm={4} style={{ ...colStyles }}>
        <Link className={`${styles.app_action_mobile_item} pt-3 flex flex-col text-center`} target="_blank" href="/">
          <div className={`${styles.app_action_mobile_item_wrapper}  mx-auto`}>
            <Image src={homeSvg} alt="" />
          </div>
          Trang chủ
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link className={`${styles.app_action_mobile_item} pt-3 flex flex-col text-center`} target="_blank" href="/">
          <div className={`${styles.app_action_mobile_item_wrapper} mx-auto`}>
            <Image src={mapSvg} alt="" />
          </div>
          Tìm đường
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link
          className={`${styles.app_action_mobile_item} pt-3 flex flex-col text-center`}
          target="_blank"
          href="https://zalo.me/0375524580"
        >
          <div className={`${styles.app_action_mobile_item_wrapper} mx-auto`}>
            <Image src={phoneSvg} alt="" />
          </div>
          Gọi điện
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link
          className={`${styles.app_action_mobile_item} pt-3 flex flex-col text-center`}
          target="_blank"
          href="https://zalo.me/0375524580"
        >
          <div className={`${styles.app_action_mobile_item_wrapper} mx-auto`}>
            <Image src={zaloSvg} alt="" />
          </div>
          Zalo
        </Link>
      </Col>
      <Col sm={4} style={{ ...colStyles }}>
        <Link
          className={`${styles.app_action_mobile_item} pt-3 flex flex-col text-center`}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100038798735065"
        >
          <div className={`${styles.app_action_mobile_item_wrapper} mx-auto`}>
            <Image src={messengerSvg} alt="" />
          </div>
          Facebook
        </Link>
      </Col>
    </Row>
  );
}
export default AppActionsMobile;
