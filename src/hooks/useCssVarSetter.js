import { useEffect } from "react";
//-----------------------------------
export default function useCssVarSetter(colorPalette) {
  useEffect(() => {
    Object.entries(colorPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [colorPalette]);
}
