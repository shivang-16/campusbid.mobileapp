import React from "react";
import { Path, Svg } from "react-native-svg";

const ChatIcon = ({ ...props }) => {
  return (
    <Svg
      viewBox="0 0 19 18"
      width={20}
      height={19}
      fill="none"
      strokeWidth={2}
      {...props}>
      <Path
        d="M9.5 17C14.1944 17 18 13.4183 18 9C18 4.58172 14.1944 1 9.5 1C4.80558 1 1 4.58172 1 9C1 10.3223 1.34088 11.5697 1.94444 12.6686L1 17L5.60209 16.1111C6.76965 16.6792 8.09501 17 9.5 17Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChatIcon;
