import { HtmlHTMLAttributes } from "react";

interface LogoProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

export function Logo({...props}: LogoProps) {
  return (
    <h1 {...props } className="text-purple-800 text-lg font-bold cursor-pointer">Sinnples</h1>
  )
}
