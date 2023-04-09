import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/NewsCard.module.scss";
import { SlClock } from "react-icons/sl";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useRouter } from "next/router";

function NewsCard({ id, title, dayUpload, author, comments, imageUrl, description }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };
  return (
    <div className={styles.news_card}>
      <div className={styles.news_card_image_wrapper}>
        <Image src={imageUrl} alt="" />
      </div>
      <div className={styles.news_card_content}>
        <h3 className={styles.news_card_heading}>{title}</h3>
        <div className={styles.news_card_info}>
          <p className={styles.news_card_time}>
            <SlClock />
            <span>{dayUpload}</span>
          </p>
          <p className={styles.news_card_comment}>
            <VscCommentDiscussion />
            <span>{comments} Bình luận</span>
          </p>
        </div>
        <Link className={`${styles.news_card_description} max-line-two`} href="/">
          {description}
        </Link>

        <Button
          className="mx-auto hidden-xs hidden-sm rounded"
          textTransform="uppercase"
          type="primary"
          size="full-btn"
          onClick={() => {
            handleClick(id);
          }}
        >
          Đọc tin
        </Button>
        <Button
          className="mx-auto  hidden-md hidden-lg hidden-xl hidden-xxl"
          textTransform="uppercase"
          type="secondary"
          size="full-btn"
          onClick={() => {
            handleClick(id);
          }}
        >
          Đọc tin
        </Button>
      </div>
    </div>
  );
}

export default NewsCard;
