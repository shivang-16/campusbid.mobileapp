import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";
import React from "react";

interface SvgComponentProps extends SvgProps {}

const LeadllyLogo = (props: SvgComponentProps) => {
  return (
    <Svg viewBox="0 0 1353 362" fill="none" {...props}>
      <Path
        d="M0.770508 41.3392C0.770508 18.5796 19.2208 0.129395 41.9804 0.129395C146.101 0.129395 230.507 84.5359 230.507 188.656V341.331H105.077C47.4703 341.331 0.770508 294.632 0.770508 237.025V41.3392Z"
        fill="url(#paint0_linear_888_372)"
      />
      <Path
        d="M378.028 215.68C378.028 204.063 368.611 194.646 356.994 194.646C303.848 194.646 260.765 237.729 260.765 290.875V341.331H327.867C355.57 341.331 378.028 318.873 378.028 291.169V215.68Z"
        fill="url(#paint1_linear_888_372)"
      />
      <Path
        d="M447.246 336.286C442.692 336.286 439 332.594 439 328.039V210.247C439 205.692 442.692 202 447.247 202H481.397C485.889 202 489.531 205.642 489.531 210.135V296.826H526.982C531.536 296.826 535.228 300.518 535.228 305.073V328.039C535.228 332.594 531.536 336.286 526.982 336.286H447.246Z"
        fill="url(#paint2_linear_888_372)"
      />
      <Path
        d="M998.094 328.039C998.094 332.594 994.402 336.286 989.847 336.286H960.286C955.732 336.286 952.039 332.594 952.039 328.039V209.676C952.039 205.437 955.476 202 959.715 202L989.959 202C994.452 202 998.094 205.642 998.094 210.135V328.039Z"
        fill="url(#paint3_linear_888_372)"
      />
      <Path
        d="M1203.59 243.657C1199.88 243.657 1196.69 242.319 1194.02 239.643C1191.34 236.967 1190 233.777 1190 230.072C1190 226.366 1191.34 223.202 1194.02 220.577C1196.69 217.953 1199.88 216.64 1203.59 216.64C1207.29 216.64 1210.46 217.953 1213.08 220.577C1215.71 223.202 1217.02 226.366 1217.02 230.072C1217.02 233.777 1215.71 236.967 1213.08 239.643C1210.46 242.319 1207.29 243.657 1203.59 243.657ZM1221.33 245.766C1223.7 244.875 1226.48 246.513 1226.48 249.05V328.039C1226.48 332.594 1222.79 336.286 1218.24 336.286H1188.51C1183.96 336.286 1180.26 332.594 1180.26 328.039V249.004C1180.26 246.477 1183.03 244.836 1185.4 245.705C1190.8 247.685 1196.1 248.763 1203.59 248.763C1210.47 248.763 1216.16 247.705 1221.33 245.766Z"
        fill="url(#paint4_linear_888_372)"
      />
      <Path
        d="M1140.17 336.286C1134.29 336.286 1129.22 334.162 1124.97 329.915C1120.73 325.668 1118.6 320.604 1118.6 314.723C1118.6 308.842 1120.73 303.818 1124.97 299.653C1129.22 295.487 1134.29 293.404 1140.17 293.404C1146.05 293.404 1151.07 295.487 1155.24 299.653C1159.4 303.818 1161.48 308.842 1161.48 314.723C1161.48 320.604 1159.4 325.668 1155.24 329.915C1151.07 334.162 1146.05 336.286 1140.17 336.286Z"
        fill="url(#paint5_linear_888_372)"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M660.613 267.741V255.572C660.613 254.365 661.269 253.25 662.341 252.696C675.398 245.95 690.105 242.576 706.464 242.576C728.17 242.576 745.767 260.173 745.767 281.88V328.039C745.767 332.594 742.075 336.286 737.52 336.286H709.608C707.786 336.286 706.309 334.809 706.309 332.987V332.584C706.309 331.235 704.766 330.442 703.621 331.156C697.303 335.09 690.455 337.058 683.075 337.058C675.973 337.058 670.056 334.768 665.321 330.188C660.587 325.556 658.22 319.741 658.22 312.743C658.22 304.766 661.153 298.282 667.019 293.291C672.886 288.248 680.553 285.726 690.022 285.726C694.851 285.726 699.583 286.27 704.218 287.358C705.276 287.606 706.316 286.812 706.16 285.736C705.683 282.431 704.06 279.777 701.292 277.775C697.999 275.357 693.393 274.147 687.475 274.147C682.821 274.147 678.11 274.846 673.34 276.244C667.349 278 660.613 273.983 660.613 267.741ZM701.361 304.63V314.988V315.651C701.361 316.358 700.912 316.99 700.236 317.195C697.878 317.908 695.719 318.276 693.761 318.299L693.7 318.299C693.655 318.3 693.61 318.3 693.565 318.3C690.683 318.3 688.368 317.554 686.618 316.061C684.868 314.569 683.994 312.613 683.994 310.195C683.994 310.065 683.996 309.936 684.001 309.809C683.996 309.681 683.994 309.553 683.994 309.423C683.994 307.004 684.868 305.049 686.618 303.557C688.368 302.064 690.683 301.318 693.565 301.318C693.63 301.318 693.695 301.318 693.761 301.319C693.794 301.319 693.826 301.318 693.859 301.318C693.89 301.318 693.92 301.318 693.951 301.318C694.862 301.318 695.728 301.4 696.549 301.563C697.718 301.747 698.947 302.034 700.236 302.423C700.912 302.628 701.361 303.26 701.361 303.967V304.63Z"
        fill="url(#paint6_linear_888_372)"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M861.483 202C865.976 202 869.618 205.642 869.618 210.135V328.039C869.618 332.594 865.926 336.286 861.371 336.286H828.035C826.061 336.286 824.46 334.685 824.46 332.711C824.46 331.306 822.737 330.811 821.794 331.853C819.686 334.184 816.193 336.485 809.871 336.173C809.6 336.163 810.139 336.187 809.871 336.173C794.761 335.429 782.858 330.99 774.162 322.855C764.59 313.901 759.804 302.631 759.804 289.045C759.804 275.82 764.152 264.782 772.849 255.93C781.598 247.028 792.481 242.576 805.501 242.576C810.452 242.576 814.831 243.099 818.64 244.144C820.962 244.781 823.486 243.145 823.486 240.736V210.247C823.486 205.692 827.178 202 831.733 202L861.483 202ZM819.603 297.83V298.496C819.603 299.407 818.865 300.145 817.954 300.145H816.887L811.577 300.146H811.575C810.06 300.146 808.685 299.821 807.45 299.172C806.625 298.798 804.658 297.533 803.379 295.46L803.372 295.449C802.305 293.715 801.772 291.472 801.772 288.721C801.772 288.657 801.772 288.592 801.773 288.528C801.772 288.486 801.772 288.444 801.772 288.402L801.772 288.335C801.772 285.584 802.305 283.342 803.372 281.608C803.768 280.817 804.367 280.103 805.059 279.488C805.794 278.834 806.635 278.291 807.45 277.884L807.474 277.872C808.097 277.563 808.704 277.334 809.236 277.197C809.975 277.006 810.754 276.911 811.575 276.911H811.579L811.633 276.911L811.685 276.911C811.685 276.911 814.912 276.912 815.784 276.911L815.821 276.911H816.887H817.954C818.865 276.911 819.603 277.65 819.603 278.561V279.227V297.83Z"
        fill="url(#paint7_linear_888_372)"
      />
      <Path
        d="M925.576 336.286H896.015C891.46 336.286 887.768 332.594 887.768 328.039V209.676C887.768 205.437 891.205 202 895.444 202H925.688C930.18 202 933.822 205.642 933.822 210.135V328.039C933.822 332.594 930.13 336.286 925.576 336.286Z"
        fill="url(#paint8_linear_888_372)"
      />
      <Path
        d="M1290.29 246.647V250.932C1290.29 252.414 1292.13 253.174 1293.25 252.203C1300.64 245.785 1309.25 242.576 1319.08 242.576C1329.94 242.576 1338.25 245.613 1344.02 251.685C1349.83 257.706 1352.74 266.66 1352.74 278.547V328.039C1352.74 332.594 1349.05 336.286 1344.49 336.286H1307.66V282.098C1307.66 274.379 1304.73 270.519 1298.86 270.519C1296.5 270.519 1294.13 271.214 1291.74 272.603C1290.81 273.145 1290.29 274.173 1290.29 275.252V336.286H1252.48C1247.93 336.286 1244.24 332.594 1244.24 328.039V246.647C1244.24 244.825 1245.71 243.348 1247.54 243.348H1286.99C1288.81 243.348 1290.29 244.825 1290.29 246.647Z"
        fill="url(#paint9_linear_888_372)"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M643.417 318.651C633.198 331.118 618.807 337.351 600.245 337.351C584.342 337.351 571.555 332.945 561.882 324.132C552.208 315.27 547.372 303.621 547.372 289.188C547.372 275.463 551.803 264.27 560.666 255.61C569.58 246.95 581.127 242.62 595.307 242.62C602.549 242.62 609.26 243.835 615.438 246.266C621.617 248.697 626.96 252.268 631.467 256.978C635.975 261.688 639.292 267.157 641.419 273.386C643.284 278.849 644.332 285.364 644.561 292.931C644.616 294.723 643.156 296.177 641.363 296.177H599.005C597.875 296.177 597.093 297.304 597.584 298.321C599.343 301.969 601.927 304.901 605.335 307.116C609.386 309.749 614.02 311.066 619.237 311.066C624.272 311.066 628.832 310.308 632.918 308.793C637.716 307.013 644.61 310.105 644.61 315.223C644.61 316.469 644.207 317.687 643.417 318.651ZM598.087 282.113H597.431C596.535 282.113 595.808 281.386 595.808 280.49V278.39C595.808 277.519 595.808 274.212 595.808 274.212C595.808 271.842 596.804 269.487 598.417 267.814C600.24 265.636 603.151 264.564 607.051 264.564C607.115 264.564 607.178 264.565 607.241 264.565L607.314 264.565C607.353 264.565 607.392 264.564 607.431 264.564C611.33 264.564 614.431 265.969 616.254 268.147C616.176 268.039 616.336 268.25 616.254 268.147C617.867 269.821 618.674 271.842 618.674 274.212C618.674 274.212 618.674 277.519 618.674 278.39V280.49C618.674 281.386 617.947 282.113 617.051 282.113H616.395H598.087Z"
        fill="url(#paint10_linear_888_372)"
      />
      <Path
        d="M1077.4 355.311C1075.89 358.884 1072.39 361.207 1068.51 361.207H1030.04C1026.85 361.207 1024.7 357.954 1025.94 355.018L1041.48 318.292C1042.04 316.969 1042.03 315.474 1041.45 314.161L1012.58 249.084C1011.28 246.14 1013.43 242.825 1016.66 242.825H1054.11C1055.88 242.825 1057.48 243.871 1058.19 245.49L1066.77 265.045C1067.29 266.239 1068.99 266.226 1069.49 265.024L1077.68 245.553C1078.37 243.9 1079.99 242.825 1081.78 242.825H1118.17C1121.36 242.825 1123.52 246.075 1122.28 249.011L1077.4 355.311Z"
        fill="url(#paint11_linear_888_372)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_888_372"
          x1="37.4756"
          y1="0.129396"
          x2="41.8459"
          y2="385.233"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_888_372"
          x1="319.397"
          y1="194.646"
          x2="319.397"
          y2="341.331"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#6204ED" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear_888_372"
          x1="896.24"
          y1="202"
          x2="896.24"
          y2="360.846"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#6298D5" />
          <Stop offset="1" stop-color="#5900D9" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default LeadllyLogo;
