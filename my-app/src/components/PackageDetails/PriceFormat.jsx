import React from "react";

function PriceFormat({ price }) {
  // Định dạng giá thành chuỗi tiền tệ
  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return <span>{formattedPrice}</span>;
}
export default PriceFormat;
