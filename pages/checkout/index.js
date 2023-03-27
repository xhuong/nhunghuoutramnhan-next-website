import React from "react";
import CheckoutLayout from "@/pages/layouts/CheckoutLayout";
import AppActions from "@/components/AppActions";
import AppActionsMobile from "@/components/AppActionsMobile";

function CheckoutPage() {
  return (
    <React.Fragment>
      <CheckoutLayout />

      <AppActions />

      <AppActionsMobile />
    </React.Fragment>
  );
}
export default CheckoutPage;
