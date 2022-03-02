import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [ windowWidth, setWindowWidth ] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  // Breakpoints
  const breakpoints = {
    xxs: 321,
    xs: 576,
    sm: 768,
    md: 992,
    l: 1080,
    lg: 1200,
  };
  
  // Respond Below
  const respondBelow = size => windowWidth && windowWidth < breakpoints[size];
  
  // Respond Above
  const respondAbove = size => windowWidth && windowWidth >= breakpoints[size];
  
  return {
    respondBelow,
    respondAbove
  }
}

export default useBreakpoint;