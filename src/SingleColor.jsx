import React, { useState } from "react";
import { useEffect } from "react";
import rgbToHex from "./utils";

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const dcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      
      setAlert(false)
    }, 1000);
    return () => clearTimeout(timeOut)
  }, [alert])
  return (
    <article onClick={
      ()=> {setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${dcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
