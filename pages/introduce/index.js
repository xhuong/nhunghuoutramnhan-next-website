import Head from "next/head";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/pages/layouts/Footer";
import Header from "@/pages/layouts/Header";
import Section from "@/pages/layouts/Section";
import AppActions from "@/components/AppActions";
import AppActionsMobile from "@/components/AppActionsMobile";

function Introduce() {
  return (
    <>
      <Head>
        <title>Giới thiệu - Nhung Hươu Trầm Nhân</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="doG5cGduKFWPNFuUuPMJJQz1fQcvQjNZYjwBRmjDRPs" />
        <meta
          name="description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nhung Hươu Trầm Nhân" />
        <meta property="og:url" content="https://nhunghuoutramnhan.com/" />
        <meta property="og:site_name" content="Nhung hươu trầm nhân" />
        <meta
          property="og:description"
          content="Nhunghuoutramnhan.com là công ty chuyên cung cấp các sản phẩm chất lượng về nhung hươu và mật ong rừng. Sản phẩm luôn đảm bảo chất lượng cao nhất khi đến tay khách hàng."
        />
        <meta name="keywords" content="Nhung hươu, mua nhung hươu ở Hà Nội, mua nhung hươu ở TP HCM" />
        <link rel="icon" href="/home.png" />
      </Head>

      <React.Fragment>
        <Header />
        <div className="pt-4">
          <div className="container">
            <Breadcrumb items={[{ title: "Trang chủ" }, { title: "Giới thiệu công ty TNHH Nhung Hươu Trầm Nhân" }]} />
          </div>
        </div>
        <Section>
          <div className="mb-4">
            <h2 className="mb-4 text-lg">Giới thiệu công ty TNHH Nhung Hươu Trầm Nhân</h2>
            <p className="text-center bg-red-600 text-white uppercase py-2 mb-4">Thông tin chung</p>
            <ul className="py-2 px-4 border border-dashed border-red-800">
              <li className="text-lg pb-2">
                <span className="font-bold mr-1">Công ty TNHH Nhung Hươu Trầm Nhân</span>
              </li>
              <li className="text-lg pb-2">
                <span className="font-bold mr-1">Email:</span>
                tramnhanhti123@gmail.com
              </li>
              <li className="text-lg pb-2">
                <span className="font-bold mr-1">Hotline:</span>
                0375.524.580
              </li>
              <li className="text-lg pb-2">
                <span className="font-bold mr-1">Website:</span>
                nhunghuoutramnhan.com
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-center bg-red-600 text-white uppercase py-2 mb-4">Giá trị cốt lõi</p>
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Chất lượng tốt - Uy tín hàng đầu:</p>
              <p className="text-lg">
                Với nhiều năm kinh nghiệm cùng với đội ngũ nhân viên chuyên nghiệp, chúng tôi tự hào đem đến cho Quý
                khách hàng những dòng sản phẩm chất lượng với giá thành hợp lý nhất.
              </p>
              <p className="text-lg">
                Phương châm hoạt động "Uy tín - Chất lượng - Tận tình - Giá cả hợp lý", để cùng sở hữu những sản phẩm
                tốt bồi bổ sức khỏe cũng như điều trị bệnh. <b>Nhung Hươu Trầm Nhân</b> luôn đặt chữ “TÍN” lên vị trí
                hàng đầu, lấy chữ TÍN làm vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự của chính mình.
              </p>
              <p className="text-lg">
                Chúng tôi luôn cố gắng nỗ lực hết mình để đảm bảo đúng và cao hơn cam kết của Công ty với khách hàng,
                đối tác, đặc biệt là các cam kết về chất lượng sản phẩm.
              </p>
              <p className="text-lg">
                Chúng tôi luôn tâm niệm rằng sự yêu mến và sự tin tưởng từ phía Quý khách hàng chính là thành công lớn
                nhất của <b>Nhung Hươu Trầm Nhân</b>, tạo động lực to lớn để công ty chúng tôi ngày càng hoàn thiện và
                nâng cao chất lượng sản phẩm, dịch vụ tốt hơn nữa dành cho bạn.
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg mb-2">Khách hàng là trọng tâm:</p>
              <p className="text-lg mb-2">
                Công Ty TNHH <b>Nhung Hươu Trầm Nhân</b> không ngừng cải thiện chất lượng dịch vụ từ những điều nhỏ
                nhất, nhằm nâng cao trải nghiệm khách hàng, đem lại sự hài lòng nhất cho Quý khách.
              </p>
              <ul className="ml-6" style={{ listStyle: "initial" }}>
                <li className="text-lg mb-2">Tư vấn sản phẩm nguyên tuần (8h-20h).</li>
                <li className="text-lg mb-2">Hỗ trợ đổi trả cho các đơn hàng theo cam kết ban đầu.</li>
                <li className="text-lg mb-2">Giao hàng tận nơi.</li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-center bg-red-600 text-white uppercase py-2 mb-4">Cam kết từ công ty của chúng tôi</p>
            <div className="">
              <p className="text-lg mb-2">
                Khi mua hàng tại <b>Nhung Hươu Trầm Nhân</b> khách hàng luôn được đảm bảo về quyền lợi và cam kết cao
                nhất, bởi:
              </p>
              <ul className="ml-6" style={{ listStyle: "initial" }}>
                <li className="text-lg mb-2">
                  Các sản phẩm được trung bày và vận chuyển đến tay Khách hàng luôn đảm bảo chất lượng và được nhiều
                  người tin dùng.
                </li>
                <li className="text-lg mb-2">
                  Cam kết hoàn tiền 100 % khi khách hàng phát hiện hàng giả, hàng kém chất lượng tại shop.
                </li>
                <li className="text-lg mb-2">
                  Cam kết chỉ bán hàng chính hãng, không bán hàng giả, hàng kém chất lượng.
                </li>
                <li className="text-lg mb-2">Cam kết bán đúng giá niêm yết và cạnh tranh nhất trên thị trường.</li>
                <li className="text-lg mb-2">
                  Đội ngũ tư vấn viên có trình độ cao, nhiệt tình, thân thiện, thấu hiểu khách hàng.
                </li>
                <li className="text-lg mb-2">
                  Giao hàng nhanh trên toàn quốc, khi nhận được sản phẩm khách hàng mới phải thanh toán với người giao
                  hàng.
                </li>
                <li className="text-lg mb-2">
                  Nhung Hươu Trầm Nhân luôn có chính sách giá tốt nhất khi khách hàng đặt mua với số lượng lớn
                </li>
                <li className="text-lg mb-2">
                  Sử dụng phương thức mua hàng trực tuyến nhanh, mọi lúc mọi nơi, nhận những chương trình ưu đãi, khuyến
                  mại hấp dẫn chỉ có tại cửa hàng
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Footer />

        <AppActions />

        <AppActionsMobile />
      </React.Fragment>
    </>
  );
}

export default Introduce;
