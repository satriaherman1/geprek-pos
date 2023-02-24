import { Box, useMediaQuery } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import "./styles.css";

export default function Switch() {
  const smallDevice = useMediaQuery(`(min-width : 768px)`);
  return (
    <Box display={smallDevice ? "flex" : "none"} className="custom-control custom-switch ">
      <input type="checkbox" className="custom-control-input" id="dark-mode-switch" />
      <label className="custom-control-label" htmlFor="dark-mode-switch">
        <span className="icon-wrapper">
          <SunIcon display="block" boxSize="14px" width="14px" height="14px" className="dark-switcher-icon" />
        </span>
      </label>
    </Box>
  );
}
