import { Group } from "@kissmybutton/motorcortex";
import blackBoxLeftTop from "./blackBoxLeftTop";
import blackBoxRightTop from "./blackBoxRightTop";
import blackBoxRotate from "./blackBoxRotate";

const outro = new Group();
outro.addIncident(blackBoxRightTop, 0);
outro.addIncident(blackBoxRotate, 0);
outro.addIncident(blackBoxLeftTop, 0);

export default outro;
