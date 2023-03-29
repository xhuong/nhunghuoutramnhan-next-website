import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import ButtonSecondary from "../ButtonSecondary";

export default function BlogCard({ id, title, description, imageUrl, author, dateUpload, ...props }) {
  return (
    <div className="">
      <div className="max-w-full max-h-64 rounded-2xl overflow-hidden relative">
        <Image src={imageUrl} alt={description} />
        <div className="absolute left-0 bottom-0 w-full bg-slate-200/40 py-2">
          <div className="pl-4">
            <p className="capitalize font-semibold">Phạm Mạnh Dũng</p>
            <p className="text-gray-700">28/03/2023</p>
          </div>
        </div>
      </div>

      {/* <h2 className="">{title}</h2>
      <p className="">{description}</p> */}
      <h2 className="font-bold mt-4 text-lg max-line-two">Tác Dụng Nhung Hươu Có Thật Sự Tốt Đối Với Sức Khỏe</h2>
      <p className="max-line-three mt-2 tracking-wide text-gray-500">
        Nhung hươu hay lộc nhung chính là sừng non của con hươu đực. Vào mỗi cuối mùa hè hàng năm, sừng hươu rụng đi và
        mùa xuân năm sau chỗ đó sẽ mọc lên sừng mới. Sừng hươu mới mọc sẽ rất mềm, mặt ngoài phủ đầy lông, sờ vào êm như
        nhung nên người ta gọi là nhung hươu. Vậy tác dụng nhung hươu như thế nào?
      </p>
      <Link className="underline mt-2 font-semibold flex items-center gap-x-1 hidden-xs hidden-sm" href={`/blog/${id}`}>
        Đọc tin <BsArrowUpRight />
      </Link>
      <ButtonSecondary
        type="secondary"
        size="full-btn"
        className="hidden-md hidden-lg hidden-xl hidden-xxl rounded-md mt-2"
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
      >
        Đọc tin
      </ButtonSecondary>
    </div>
  );
}
