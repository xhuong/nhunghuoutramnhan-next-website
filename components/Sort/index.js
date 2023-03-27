function Sort() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 mb-4 hidden-xs hidden-sm rounded">
      <p>Lọc theo: </p>
      <select name="" id="" className="capitalize py-2 px-4 rounded">
        <option value="">mới nhất</option>
        <option value="">bán chạy</option>
        <option value="">tên a-z</option>
        <option value="">tên z-a</option>
        <option value="">giá giảm dần</option>
        <option value="">giá tăng dần</option>
      </select>
    </div>
  );
}

export default Sort;
