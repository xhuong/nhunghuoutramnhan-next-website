import Image from "next/image";
import Link from "next/link";
import cartSvg from "@/public/images/icons/cart.svg";
import messengerSvg from "@/public/images/icons/messenger.svg";
import zaloSvg from "@/public/images/icons/zalo.svg";
import styles from "@/styles/AppActions.module.scss";

function AppActions() {
  return (
    <div className={`${styles.app_action_list} hidden-xs hidden-sm`}>
      <Link className={styles.app_action_item} href="/cart">
        <div className={styles.app_action_item_wrapper}>
          <Image src={cartSvg} alt="" />
        </div>
        Xem giỏ hàng
      </Link>
      <Link className={styles.app_action_item} target="_blank" href="https://zalo.me/0816111308">
        <div className={styles.app_action_item_wrapper}>
          <Image src={zaloSvg} alt="" />
        </div>
        Zalo
      </Link>
      <Link className={styles.app_action_item} target="_blank" href="/">
        <div className={styles.app_action_item_wrapper}>
          <Image src={messengerSvg} alt="" />
        </div>
        Messenger
      </Link>
      <Link className={styles.app_action_item} href="/">
        <div className={styles.app_action_item_wrapper}>
          <Image src={require("@/public/images/icons/phone.png")} alt="" />
        </div>
        Hotline
      </Link>
    </div>
  );
}

export default AppActions;
