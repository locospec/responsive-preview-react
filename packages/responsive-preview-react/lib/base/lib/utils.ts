import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  prefix: "rpr-",
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
