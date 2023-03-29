export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-DE").format(price);
};

export const getCategoryNameByNameCredentical = (array, nameCredentical) => {
  const result = array.filter((category) => category.name === nameCredentical)[0];
  return result.categoryName;
};

export const getNameCredenticalByCategoryName = (array, categoryName) => {
  const result = array.filter((category) => category.categoryName === categoryName)[0];
  return result.name;
};

export const searchProductsByName = (array, keyword) => {
  const result = array.filter((product) => product.name.includes(keyword));
  return result;
};

export const getCountProductsFromCarts = (array) => {
  let count = 0;
  array.map((element) => {
    count += element.count;
  });
  return count;
};

export const totalPrice = (carts) => {
  if (carts.length > 0) {
    let totalPrice = 0;
    carts.map((cartItem) => {
      return (totalPrice += cartItem.count * cartItem.newPrice);
    });

    return totalPrice;
  }
};

export const handleSearchProducts = (searchKey, products, onCompleted) => {
  const s = searchKey.toLowerCase();
  const result = products.filter((product) => product.name.toLowerCase().match(s));

  onCompleted(result);
};
