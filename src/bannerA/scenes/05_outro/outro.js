import { Group } from "@kissmybutton/motorcortex";
import blackBoxLeftTop from "./incidents/blackBoxLeftTop";
import blackBoxRightTop from "./incidents/blackBoxRightTop";
import blackBoxRotate from "./incidents/blackBoxRotate";

const outro = new Group();
outro.addIncident(blackBoxRightTop, 0);
outro.addIncident(blackBoxRotate, 0);
outro.addIncident(blackBoxLeftTop, 0);

export default outro;
