import { Group } from "@kissmybutton/motorcortex";
import dotedHalfOneOn from "./incidents/dotedHalfOneOn";
import box from "./incidents/box";
import leftImageLeft from "./incidents/leftImageLeft";
import leftImageTop from "./incidents/leftImageTop";
import rightImageLeft from "./incidents/rightImageLeft";
import rightImageLeftWrapper from "./incidents/rightImageLeftWrapper";
import rightImageTop from "./incidents/rightImageTop";

function intro(attrs) {
  const introGroup = new Group();
  introGroup.addIncident(box(attrs), 0);
  introGroup.addIncident(rightImageTop(attrs), 0);
  introGroup.addIncident(leftImageTop(attrs), 350);
  introGroup.addIncident(leftImageLeft(attrs), 350);
  introGroup.addIncident(rightImageLeft(attrs), 350);
  introGroup.addIncident(rightImageLeftWrapper(attrs), 350);
  introGroup.addIncident(dotedHalfOneOn, 450);
  return introGroup;
}

export default intro;
