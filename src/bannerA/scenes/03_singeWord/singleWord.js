import { Group } from "@kissmybutton/motorcortex";
import bg2OutBg from "./incidents/bg2OutBg";
import bg2InBg from "./incidents/bgInBg";
import linesInOut from "./incidents/linesInOut";
import circlesWrapper from "./incidents/circlesWrapper";
import circlesA from "./incidents/circlesA";
import centerTextWrapper from "./incidents/centerTextWrapper";
import centerTextAfter from "./incidents/centerTextAfter";
import centerTextBefore from "./incidents/centerTextBefore";
import slecedImgWrapper from "./incidents/slecedImgWrapper";
import slicedImg from "./incidents/slicedImg";
import slicedImgTransformUp from "./incidents/slicedImgTransformUp";
import circlesWrapperOp from "./incidents/circlesWrapperOp";
import slicedImgWrapperClipPath from "./incidents/slicedImgWrapperClipPath";
import slicedImgTransformDown from "./incidents/slicedImgTransformDown";

function scene(attrs) {
  const group = new Group();
  group.addIncident(bg2OutBg, 0); // 1800
  group.addIncident(bg2InBg, 0); // 1800
  group.addIncident(linesInOut(attrs), 100); // 1900
  group.addIncident(circlesA(attrs), 100); // 1900
  group.addIncident(circlesWrapper, 200); // 2000
  group.addIncident(centerTextWrapper, 200); // 2000
  group.addIncident(centerTextAfter, 370); // 2170
  group.addIncident(centerTextBefore, 370); // 2170
  group.addIncident(slecedImgWrapper, 700); // 2500
  group.addIncident(slicedImg, 700); // 2500
  group.addIncident(slicedImgTransformUp, 750); // 2550
  group.addIncident(circlesWrapperOp, 860); // 2660
  group.addIncident(slicedImgWrapperClipPath, 900); // 2700
  group.addIncident(slicedImgTransformDown, 1050); // 2850

  return group;
}

export default scene;
