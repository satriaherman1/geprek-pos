import { Box, BoxProps, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Switch() {
  const smallDevice = useMediaQuery(`(min-width : 768px)`);
  // const [activeClass, setActiveClass] = useState<>("");
  const [active, setActive] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const activeLabelProps: any = {
    background: active ? "blue.300" : "#eaeaea",
  };

  useEffect(() => {
    if (colorMode == "dark") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [colorMode]);

  return (
    <Box display={smallDevice ? "flex" : "none"} className={`custom-control custom-switch dark-switch`}>
      <Box as="input" onChange={toggleColorMode} type="checkbox" className="custom-control-input" id="dark-mode-switch" />
      <Box {...activeLabelProps} as="label" className="custom-control-label" htmlFor="dark-mode-switch">
        <Box as="span" className="icon-wrapper" left={active ? "50%" : "10%"}>
          {!active ? (
            <SunIcon display="block" transition="0.3s" boxSize="14px" width="14px" height="14px" className="dark-switcher-icon" />
          ) : (
            <MoonIcon display="block" transition="0.3s" boxSize="14px" width="14px" height="14px" className="dark-switcher-icon" />
          )}
        </Box>
      </Box>
    </Box>
  );
}
