import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import 'status-indicator/styles.css';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
