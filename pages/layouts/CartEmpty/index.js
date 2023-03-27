import ButtonSecondary from "@/components/ButtonSecondary";
import Section from "@/pages/layouts/Section";
import { Alert } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

function CartEmpty() {
  const router = useRouter();
  return (
    <Section>
      <Alert className="text-base" message="Bạn chưa thêm sản phẩm nào vào giỏ hàng !" type="info" showIcon />
      <div className="max-w-fit mx-auto pt-5">
        <div className="w-64 md:w-60 sm:w-56">
          <Image src={require("@/public/images/empty-cart02.png")} alt="" />
        </div>
        <ButtonSecondary
          className="uppercase"
          type="secondary"
          size="full-btn"
          onClick={() => {
            router.push("/categories/nhung-huou");
          }}
        >
          Tiếp tục mua sắm
        </ButtonSecondary>
      </div>
    </Section>
  );
}

export default CartEmpty;
