import { Checkbox } from "antd";
import { useState } from "react";
import styles from "@/styles/PriceRange.module.scss";

function PriceRange() {
  const priceOptions = [
    { label: "Giá dưới 200.000đ", value: [0, 200] },
    { label: "200.000đ - 500.000đ", value: [200, 500] },
    { label: "500.000đ - 1.000.000đ", value: [500, 1000] },
    { label: "1.000.000đ - 2.000.000đ", value: [1000, 2000] },
    { label: "Giá trên 2.000.000đ", value: [2000] },
  ];

  const [isSelected, setIsSelected] = useState(null);

  const onChange = (e) => {
    if (e.target.checked) {
      !isSelected && setIsSelected(e.target.value);
    } else {
      setIsSelected(null);
    }
  };

  return (
    <div className={styles.price_range}>
      <h3 className={styles.price_range_heading}>Giá</h3>
      <ul className={styles.price_range_list}>
        {priceOptions.map((item) => (
          <li className={styles.price_range_item} key={item.label}>
            <Checkbox
              disabled={isSelected ? JSON.stringify(isSelected) !== JSON.stringify(item.value) : false}
              name={item.label}
              key={item.label}
              onChange={onChange}
              value={item.value}
            >
              {item.label}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceRange;
