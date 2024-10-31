import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function timeStamptUnixToDate(unix: number) {
  const date = new Date(unix * 1000);
  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return formattedDate;
}
