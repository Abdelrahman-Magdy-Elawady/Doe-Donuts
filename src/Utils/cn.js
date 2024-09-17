import { twMerge } from "tailwind-merge";
import classnames from "classnames";

export function cn(...className) {
  return twMerge(classnames(className));
}
