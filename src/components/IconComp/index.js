import React from "react";
import { ReactSVG } from "react-svg";
import level1 from "../../assets/img/svg/level1.svg";
import level2 from "../../assets/img/svg/level2.svg";
import level3 from "../../assets/img/svg/level3.svg";
import level4 from "../../assets/img/svg/level4.svg";
import file from "../../assets/img/svg/file.svg";
import compare from "../../assets/img/svg/compare.svg";
import list from "../../assets/img/svg/list.svg";
import task from "../../assets/img/svg/task.svg";
import text from "../../assets/img/svg/text.svg";
import trueFalse from "../../assets/img/svg/true&false.svg";

import sigma from "../../assets/img/svg/sigma.svg";

function IconComp({iconCode}) {
    
  switch (iconCode) {
    case "level1":
      return <ReactSVG src={level1} size={14} color={"black"} />;
    case "level2":
      return <ReactSVG src={level2} size={14} color={"black"} />;
    case "level3":
      return <ReactSVG src={level3} size={14} color={"black"} />;
    case "level4":
      return <ReactSVG src={level4} size={14} color={"black"} />;
    case "file":
      return <ReactSVG src={file} size={14} color={"black"} />;
    case "compare":
      return <ReactSVG src={compare} size={14} color={"black"} />;
    case "list":
      return <ReactSVG src={list} size={14} color={"black"} />;
    case "task":
      return <ReactSVG src={task} size={14} color={"black"} />;
    case "text":
      return <ReactSVG src={text} size={14} color={"black"} />;
    case "trueFalse":
      return <ReactSVG src={trueFalse} size={14} color={"black"} />;
    case "sigma":
      return <ReactSVG src={sigma} size={14} color={"black"} />;
      
    default:
      return <Minimize  size={14} color={"black"} />;
  }
}




export const Minimize = ({ size = 16, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 512 512"
		fill={color}
	//stroke={color}

	>
	<path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"/>
	</svg>
)


export default IconComp;
