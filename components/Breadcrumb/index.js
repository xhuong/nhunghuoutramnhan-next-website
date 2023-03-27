import { Breadcrumb as BreadcrumbAnt } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import Link from "next/link";
import styled from "styled-components";

const BreadcrumbCustom = styled(BreadcrumbAnt)`
  .ant-breadcrumb {
    color: #000000;
  }
`;

function Breadcrumb({ items, ...props }) {
  return (
    <BreadcrumbCustom>
      {items.map((item) => (
        <BreadcrumbItem className="text-lg" key={item.title}>
          <Link href={`${item.link}`}>{item.title}</Link>
        </BreadcrumbItem>
      ))}
    </BreadcrumbCustom>
  );
}

export default Breadcrumb;
