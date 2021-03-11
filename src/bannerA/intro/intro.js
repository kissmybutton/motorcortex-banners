import { Group } from "@kissmybutton/motorcortex";
import dotedHalfOneOn from "./dotedHalfOneOn";
import box from "./box";
import leftImageLeft from "./leftImageLeft";
import leftImageTop from "./leftImageTop";
import rightImageLeft from "./rightImageLeft";
import rightImageLeftWrapper from "./rightImageLeftWrapper";
import rightImageTop from "./rightImageTop";

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
