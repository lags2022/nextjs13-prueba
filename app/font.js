//esto nos permite usar las fuentes de google
import { Space_Grotesk } from "@next/font/google";

export const font = Space_Grotesk({
  weight: ["400", "700"],
  preload: false,
  subsets: ["latin"],
  variable: "--font-grotesk",
});
