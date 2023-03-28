import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Cart from "@/pages/layouts/Cart";
import CartEmpty from "@/pages/layouts/CartEmpty";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import AppActions from "@/components/AppActions";
import AppActionsMobile from "@/components/AppActionsMobile";
import { useSelector } from "react-redux";

function CartPage() {
  const carts = useSelector((state) => state.cart.cart);

  return (
    <React.Fragment>
      <Header />
      <div className="pt-4">
        <div className="container">
          <Breadcrumb
            items={[
              { title: "Trang chủ", link: "/" },
              { title: "Giỏ hàng của bạn", link: "/cart" },
            ]}
          />
        </div>
      </div>

      {carts?.length > 0 ? <Cart data={carts} /> : <CartEmpty />}
      <AppActions />

      <AppActionsMobile />

      <Footer />
    </React.Fragment>
  );
}
export default CartPage;
