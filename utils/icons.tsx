import { ILanguageIcon } from "../types"
import { SiJavascript, SiReact, SiCss3, SiTailwindcss, SiHtml5, SiSass, SiTypescript } from "react-icons/si"
import { VscJson } from "react-icons/vsc"
import { HiDatabase } from "react-icons/hi"



const icons: ILanguageIcon[] = [
  { name: "javascript", icon: <SiJavascript /> },
  { name: "react", icon: <SiReact /> },
  { name: "css", icon: <SiCss3 /> },
  { name: "stylesheet", icon: <SiCss3 /> },
  { name: "tailwind", icon: <SiTailwindcss /> },
  { name: "html", icon: <SiHtml5 /> },
  { name: "scss", icon: <SiSass /> },
  { name: "sass", icon: <SiSass /> },
  { name: "json", icon: <VscJson /> },
  { name: "typescript", icon: <SiTypescript /> },
  { name: "sql", icon: <HiDatabase />}
]

export default icons