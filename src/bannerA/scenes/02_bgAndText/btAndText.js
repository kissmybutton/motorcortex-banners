import { Group } from "@kissmybutton/motorcortex";
import textA from "./incidents/textA";
import dotedHalfOneOff from "./incidents/dotedHalfOneOff";
import dotedOneOn from "./incidents/dotedOneOn";
import bg2In from "./incidents/bg2In";
import bg2InBg from "./incidents/bg2InBg";
import dotedOneOff from "./incidents/dotedOneOff";

function scene(attrs) {
  const group = new Group();
  group.addIncident(textA(attrs), 0); // 500
  group.addIncident(dotedHalfOneOff, 100); // 600
  group.addIncident(dotedOneOn, 100); // 600
  group.addIncident(bg2In, 200); // 700
  group.addIncident(bg2InBg, 200); // 700
  group.addIncident(dotedOneOff, 500); // 1000

  return group;
}

export default scene;
