import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import MenuMobile from "@/components/MenuMobile";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Header.module.scss";
import { GiEarthAmerica } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "@/redux/slices/menuMobileSlice";
import { getCountProductsFromCarts } from "@/utils";

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cart);

  const handleSubmitSearchForm = (value) => {
    console.log("submitting...", value);
  };

  return (
    <header className="header">
      {/* header with branch  */}
      <div className={`${styles.header_branch} hidden-xs hidden-sm hidden-md`}>
        <GiEarthAmerica />
        <p className={styles.header_branch_title}>Công Ty TNHH Nhung Hươu Trầm Nhân - Thương Hiệu Uy Tín</p>
      </div>
      <div className="container">
        {/* header with search  */}
        <div className={styles.header_main}>
          {/* iconbar  */}
          <div
            className={`${styles.header_iconbar} hidden-lg hidden-xl hidden-xxl`}
            onClick={() => dispatch(openMenu())}
          >
            <GrMenu />
          </div>
          {/* logo  */}
          <div
            className={`${styles.header_logo_wrapper} cursor-pointer`}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image src={require("@/public/images/logo.png")} alt="" />
          </div>

          {/* searchbox  */}
          {/* <div className="hidden-xs hidden-sm hidden-md">
            <form action="" className="header_searchbox">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." className="header_searchbox_input" />
              <Button size="sm-btn" type="primary" htmlType="submit">
                <IoSearch />
              </Button>
            </form>
          </div> */}

          <div className="hidden-xs hidden-sm hidden-md">
            <SearchForm onSubmit={handleSubmitSearchForm} />
          </div>

          {/* hotline  */}
          <div className={`${styles.header_hotline} hidden-xs hidden-sm hidden-md`}>
            <div className={styles.header_hotline_icon}>
              <BsTelephoneInbound />
            </div>
            <div className={`${styles.header_hotline_content} text-lg`}>
              <span className="capitalize">hotline:</span>
              <span>0375.524.580</span>
            </div>
          </div>
          {/* header cart */}
          <div
            className={styles.header_cart}
            onClick={() => {
              router.push("/cart");
            }}
          >
            <div className={`${styles.header_cart_icon} cursor-pointer`}>
              <HiShoppingCart />
              <span className={styles.header_cart_icon_count}>{getCountProductsFromCarts(carts)}</span>
            </div>
            <span className={`${styles.header_cart_title} hidden-xs hidden-sm hidden-md text-lg cursor-pointer`}>
              Giỏ hàng
            </span>
          </div>
        </div>
        {/* searchbox mobile  */}
        <div className={`${styles.header_searchbox_mobile} hidden-md hidden-lg hidden-xl hidden-xxl`}>
          <form action="" className={styles.header_searchbox_mobile_form}>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className={styles.header_searchbox_mobile_input} />
            <Button size="sm-btn" type="primary">
              <IoSearch />
            </Button>
          </form>
        </div>
      </div>

      <div className={`${styles.header_navbar} hidden-xs hidden-sm hidden-md`}>
        <div className="container">
          <ul className={styles.header_navbar_list}>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/introduce">
                Giới thiệu
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/cao-nhung-huou">
                Cao Nhung Hươu
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/cao-huou">
                Cao hươu
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/cao-ban-long">
                Cao ban long
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/nhung-huou">
                Nhung hươu
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/ruou">
                Rượu
              </Link>
            </li>
            <li className={styles.header_navbar_item}>
              <Link className={styles.header_navbar_item_link} href="/categories/mat-ong">
                Mật ong
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* menu_mobile  */}
      <MenuMobile />
    </header>
  );
}

export default Header;
