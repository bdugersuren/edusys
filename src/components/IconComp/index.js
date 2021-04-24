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

function IconComp({iconCode, size, color, stroke}) {
    
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
      return <ListIcon size={size} color={color} />;
    case "task":
      return <ReactSVG src={task} size={14} color={"black"} />;
    case "text":
      return <ReactSVG src={text} size={14} color={"black"} />;
    case "trueFalse":
      return <ReactSVG src={trueFalse} size={14} color={"black"} />;
    case "sigma":
      return <ReactSVG src={sigma} size={14} color={"black"} />;
    case "openQuiz":
      return <OpenQuizIcon size={size} color={color} stroke={stroke} />;  
    default:
      return <Minimize  size={10} color={"red"} />;
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

export const ListIcon = ({ size = 16, color = '#000000' }) => (
<svg 
    version="1.1" id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
	  viewBox="0 0 512 512" 
    fill={color}
    width={size}
		height={size}
>
  <g>
	<path  d="M424,0H88C65.944,0,48,17.944,48,40v432c0,22.056,17.944,40,40,40h336c22.056,0,40-17.944,40-40V40
		C464,17.944,446.056,0,424,0z M448,472c0,13.233-10.766,24-24,24H88c-13.234,0-24-10.767-24-24V40c0-13.233,10.766-24,24-24h336
		c13.234,0,24,10.767,24,24V472z"/>
	<path d="M208,104h144c4.418,0,8-3.582,8-8s-3.582-8-8-8H208c-4.418,0-8,3.582-8,8S203.582,104,208,104z"/>
	<path d="M408,120H208c-4.418,0-8,3.582-8,8s3.582,8,8,8h200c4.418,0,8-3.582,8-8S412.418,120,408,120z"/>
	<path d="M208,168h176c4.418,0,8-3.582,8-8s-3.582-8-8-8H208c-4.418,0-8,3.582-8,8S203.582,168,208,168z"/>
	<path  d="M168,344h-64c-4.418,0-8,3.582-8,8v64c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-64C176,347.582,172.418,344,168,344z
		 M160,408h-48v-48h48V408z"/>
	<path d="M208,360h144c4.418,0,8-3.582,8-8s-3.582-8-8-8H208c-4.418,0-8,3.582-8,8S203.582,360,208,360z"/>
	<path d="M408,376H208c-4.418,0-8,3.582-8,8s3.582,8,8,8h200c4.418,0,8-3.582,8-8S412.418,376,408,376z"/>
	<path d="M384,408H208c-4.418,0-8,3.582-8,8s3.582,8,8,8h176c4.418,0,8-3.582,8-8S388.418,408,384,408z"/>
	<path  d="M168,216h-64c-4.418,0-8,3.582-8,8v64c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8v-64C176,219.582,172.418,216,168,216z
		 M160,280h-48v-48h48V280z"/>
	<path d="M208,232h144c4.418,0,8-3.582,8-8s-3.582-8-8-8H208c-4.418,0-8,3.582-8,8S203.582,232,208,232z"/>
	<path d="M408,248H208c-4.418,0-8,3.582-8,8s3.582,8,8,8h200c4.418,0,8-3.582,8-8S412.418,248,408,248z"/>
	<path d="M208,296h176c4.418,0,8-3.582,8-8s-3.582-8-8-8H208c-4.418,0-8,3.582-8,8S203.582,296,208,296z"/>
	<path  d="M178.343,74.343L164.686,88H128c-4.418,0-8,3.582-8,8s3.582,8,8,8h20.686L128,124.686l-26.343-26.343
		c-3.124-3.123-8.189-3.123-11.313,0c-3.125,3.125-3.125,8.189,0,11.314L96,115.314V160c0,4.418,3.582,8,8,8h64c4.418,0,8-3.582,8-8
		v-24.002c0-4.418-3.582-8-8-8s-8,3.582-8,8V152h-48v-20.686l10.343,10.343c1.562,1.562,3.609,2.343,5.657,2.343
		s4.095-0.781,5.657-2.343l56-56c3.125-3.125,3.125-8.189,0-11.314C186.533,71.22,181.467,71.22,178.343,74.343z"/>
    </g>
</svg>
)

export const OpenQuizIcon = ({ size, color}) => (
	<svg
    version="1.1" id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    fill={color}
    width={size}
		height={size}
	  stroke={color}

	>
	<g>
  <path  d="M72,496H368a111.991,111.991,0,0,0,48-213.179V120a8,8,0,0,0-2.343-5.657l-96-96A8,8,0,0,0,312,16H72A40.045,40.045,0,0,0,32,56V456A40.045,40.045,0,0,0,72,496ZM464,384a96,96,0,1,1-96-96A96.108,96.108,0,0,1,464,384ZM320,43.313,388.687,112H344a24.027,24.027,0,0,1-24-24ZM48,56A24.028,24.028,0,0,1,72,32H304V88a40.045,40.045,0,0,0,40,40h56V276.666A111.983,111.983,0,0,0,310.369,480H72a24.028,24.028,0,0,1-24-24Z"/>
<path  d="M160,168a8,8,0,0,0,8,8H360a8,8,0,0,0,0-16H168A8,8,0,0,0,160,168Z"/>
<path d="M88,224H248a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M280,256H216a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
<path d="M88,320H232a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M88,176h48a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M360,208H280a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z"/>
<path d="M88,272h96a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M216,400H184a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/>
<path d="M88,416h64a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M88,368h48a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M88,128h96a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
<path d="M216,352H168a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/>
<path  d="M325.657,402.343a8,8,0,0,0-11.314,11.314l32,32A8,8,0,0,0,352,448q.394,0,.789-.039a8,8,0,0,0,5.868-3.523l64-96a8,8,0,0,0-13.312-8.876l-58.587,87.881Z"/>
  </g>
	</svg>
)


export default IconComp;
