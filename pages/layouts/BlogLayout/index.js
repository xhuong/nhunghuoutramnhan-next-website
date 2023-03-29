import Section from "@/pages/layouts/Section";
import Image from "next/image";

export default function BlogLayout({ id, title, dateUpload, imageUrl, author, commentCount, description, ...props }) {
  return (
    <Section>
      <h1 className="text-center font-bold text-6xl mb-4">{title}</h1>
      <p className="text-center text-sm font-medium text-gray-500 mb-16">
        Tác giả: {author} - Ngày đăng: {dateUpload}
      </p>
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl mb-16">
        <Image src={imageUrl} alt={title} />
      </div>

      <p className="font-medium text-lg text-justify leading-9">{description}</p>
    </Section>
  );
}
