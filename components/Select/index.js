import styles from "@/styles/Select.module.scss";

function Select({ children }) {
  return (
    <div className={styles.custom_select}>
      <select>{children}</select>
    </div>
  );
}

export default Select;
