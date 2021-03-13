import { Group } from "@kissmybutton/motorcortex";
import yellowTransitionLeft from "./incidents/yellowTransitionLeft";
import slicedImgWrapperOpacity from "./incidents/slicedImgWrapperOpacity";
import strokeTextWrapper from "./incidents/strokeTextWrapper";
import strokeTextCenter from "./incidents/strokeTextCenter";
import yellowTransitionWidth from "./incidents/yellowTransitionWidth";
import strokeText from "./incidents/strokeText";
import bgDistortionOp from "./incidents/bgDistortionOp";
import circlesWrapper2 from "./incidents/circlesWrapper2";
import circlesWrapper2Position from "./incidents/circlesWrapper2Position";
import circles2 from "./incidents/circles2";
import bgScaleUp from "./incidents/bgScaleUp";
import bgScaleDown from "./incidents/bgScaleDown";
import yellowUnderLineLeftIn from "./incidents/yellowUnderLineLeftIn";
import rngBoxDownIn from "./incidents/rngBoxDownIn";
import yellowUnderLineWidth from "./incidents/yellowUnderLineWidth";

function scene(attrs) {
  const group = new Group();
  group.addIncident(yellowTransitionLeft, 0); // 2400
  group.addIncident(strokeText(attrs), 500); // 2900
  group.addIncident(bgDistortionOp, 520); // 2920
  group.addIncident(slicedImgWrapperOpacity, 600); // 3000
  group.addIncident(strokeTextWrapper, 600); // 3000
  group.addIncident(strokeTextCenter(attrs), 600); // 3000
  group.addIncident(yellowTransitionWidth, 600); // 3000
  group.addIncident(circlesWrapper2, 600); // 3000
  group.addIncident(circlesWrapper2Position, 600); // 3000
  group.addIncident(circles2(attrs), 1160); // 3560
  group.addIncident(bgScaleUp, 1240); // 3640
  group.addIncident(bgScaleDown, 1440); // 3840
  group.addIncident(yellowUnderLineLeftIn, 1800); // 4200
  group.addIncident(rngBoxDownIn, 1900); // 4300
  group.addIncident(yellowUnderLineWidth, 2800); // 5200

  return group;
}

export default scene;
