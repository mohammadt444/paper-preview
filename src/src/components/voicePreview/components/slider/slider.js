import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";

const CustomSlider = withStyles({
  root: {
    color: "rgba(255,255,255,44)",
    height: 12.4,
    padding: 0,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -2,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 6.4,
    borderRadius: 1,
    margin: 3,
    color: "white",
    // padding: 3
  },
  rail: {
    height: 12.4,
    borderRadius: 3,
  },
})(Slider);

export default CustomSlider;
