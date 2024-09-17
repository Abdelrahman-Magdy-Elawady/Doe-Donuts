import DropDown from "./DropDown";
import HamBurgerIcon from "./HamBurgerIcon";
import Details from "./Details";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cn } from "../Utils/cn";
import { useState } from "react";
import { useOnResize, useClickOutside } from "../hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  const navBarColor = useSelector((state) => state.navBarColor);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { isLg } = useOnResize();
  const ref = useClickOutside(() => setShowSideMenu(false));

  const links = [
    {
      path: "",
      label: "corporate + custom",
    },
    {
      path: "",
      label: "contact",
    },
    {
      path: "",
      label: "loyality program",
    },
  ].map((tab, i) => <div key={i}>{tab.label}</div>);

  const dropDownLinks = [
    {
      path: "/55",
      label: "about us",
    },
    {
      path: "",
      label: "how it works",
    },
    {
      path: "",
      label: "our donuts",
    },
    {
      path: "",
      label: "our locations",
    },
  ].map((nestedLink, index) => (
    <Link key={index} to={nestedLink.path} className="item-list">
      {nestedLink.label}
    </Link>
  ));

  //-----------------------Animation--------------------------
  useGSAP(
    () => {
      //----------------
      if (showSideMenu) {
        gsap.from(".menu", {
          xPercent: 100,
          opacity: 0,
          duration: 0.75,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [showSideMenu], scope: ref }
  );

  //----------------------------------------------------------
  return (
    <div
      className={cn(
        "fixed inset-x-0 h-[--md-nav-hight] flex justify-between items-center px-4 overscroll-contain",
        navBarColor
      )}
    >
      <Link to="/" className=" order-2 lg:order-1">
        <svg
          width="129"
          height="55"
          viewBox="0 0 129 55"
          className={cn("fill-current", navBarColor)}
        >
          <path d="M29.4009 13.7371C29.5742 13.6562 29.6493 13.5522 29.736 13.4597C30.9782 12.1309 32.2839 10.8656 33.6647 9.68119C35.658 7.96525 37.7784 6.42841 40.1125 5.20934C41.2565 4.61425 42.4351 4.1116 43.66 3.71872C44.9022 3.32585 46.1674 3.06008 47.4674 2.96186C48.2069 2.90986 48.9465 2.89253 49.686 2.92719C50.2464 2.9503 50.8011 3.0023 51.3499 3.08319C51.9104 3.16985 52.4708 3.29696 53.0197 3.45295C54.5681 3.9036 56.0009 4.59114 57.2893 5.56177C59.1901 6.98883 60.5941 8.80877 61.5589 10.9754C62.1714 12.3447 62.5758 13.7775 62.8127 15.2566C62.9629 16.181 63.0553 17.1054 63.0842 18.0414C63.1015 18.6364 63.1362 19.2373 63.1131 19.8324C63.0727 20.8955 63.0149 21.9586 62.8878 23.0159C62.5296 25.9798 61.8016 28.8512 60.7674 31.6418C59.6119 34.7617 58.0982 37.6967 56.2378 40.4468C54.5161 42.9947 52.5286 45.3231 50.2349 47.3742C48.3976 49.0208 46.4043 50.4363 44.2031 51.5571C42.4005 52.4758 40.5112 53.146 38.5237 53.5157C37.6166 53.6891 36.7038 53.7873 35.7794 53.793C35.2594 53.7988 34.7394 53.8046 34.2194 53.7873C32.6017 53.7353 31.0186 53.4868 29.4933 52.9264C27.7774 52.2967 26.3041 51.3202 25.1139 49.9221C24.0797 48.703 23.398 47.3048 23.0109 45.7564C22.7682 44.7685 22.6585 43.7689 22.6527 42.7521C22.6527 41.8161 22.6873 40.8859 22.8549 39.9615C23.3229 37.3789 24.3397 35.0563 26.1366 33.1035C26.8992 32.2773 27.7716 31.584 28.7885 31.0871C29.8053 30.5845 30.88 30.3245 32.0124 30.3187C32.6883 30.3187 33.3585 30.3245 34.023 30.4805C35.5309 30.8329 36.698 31.6418 37.4317 33.0284C37.7899 33.7044 37.9691 34.4324 37.9806 35.195C37.9864 35.4954 37.9806 35.7901 37.9806 36.0905C37.9748 36.9745 37.7437 37.8065 37.4202 38.6211C37.3451 38.8176 37.2237 38.9042 37.01 38.8984C36.5824 38.8811 36.1549 38.9042 35.7273 38.9562C34.5718 39.0949 33.503 39.4589 32.5843 40.1984C31.6657 40.9379 31.1226 41.897 30.9262 43.0641C30.7933 43.8672 31.0186 44.5778 31.4173 45.2538C31.8217 45.9355 32.4515 46.3342 33.191 46.5711C33.8554 46.7791 34.5198 46.7617 35.19 46.6C36.0971 46.3862 36.9291 45.9991 37.7206 45.5195C39.0148 44.728 40.1472 43.7401 41.1872 42.6423C43.1458 40.5739 44.7404 38.2456 46.1039 35.7497C47.3114 33.5311 48.2994 31.22 49.0562 28.8108C49.6224 27.0024 50.0615 25.1651 50.3158 23.2816C50.4082 22.5999 50.4717 21.9181 50.5353 21.2306C50.5989 20.5546 50.6104 19.8786 50.5815 19.2084C50.5064 17.764 50.3042 16.3427 49.7264 15.0023C49.4838 14.4361 49.1833 13.9104 48.7905 13.4366C48.0452 12.5295 47.0803 11.9749 45.9479 11.7091C45.5839 11.6225 45.2141 11.5589 44.8328 11.5531C44.1106 11.5358 43.4115 11.6687 42.724 11.8651C41.5916 12.1887 40.5459 12.7086 39.5521 13.3326C38.3157 14.1068 37.1833 15.0139 36.1087 16.0019C33.9999 17.9431 32.1568 20.1213 30.4293 22.4034C28.1009 25.4829 26.021 28.7299 24.126 32.0924C23.1842 33.7679 22.2945 35.4723 21.4856 37.2114C21.0292 38.1878 20.6594 39.1989 20.3359 40.2273C19.8217 41.845 19.3306 43.4743 18.9261 45.1209C18.6719 46.1782 18.4466 47.247 18.2906 48.3217C18.1462 49.3096 18.0248 50.3034 18.0017 51.3029C17.9902 51.7305 17.9555 52.158 17.9439 52.5855C17.9382 52.7473 17.8746 52.8513 17.7648 52.9553C17.3546 53.3424 16.8982 53.6602 16.4071 53.9317C15.3671 54.4979 14.2636 54.8677 13.085 54.9543C12.0508 55.0352 11.0108 55.0352 9.99399 54.729C8.95402 54.417 8.02961 53.9202 7.22652 53.1922C5.67813 51.794 4.73061 50.0607 4.34351 48.0155C4.15285 47.0044 4.12396 45.9818 4.18174 44.9533C4.23374 44.0289 4.3724 43.1218 4.58039 42.2263C4.88083 40.9321 5.31992 39.69 5.83413 38.4651C6.66032 36.5007 7.6714 34.623 8.75758 32.7915C10.0691 30.5787 11.5019 28.4468 12.9463 26.3206C14.3214 24.3043 15.7196 22.3052 17.0484 20.2542C17.8457 19.0235 18.6141 17.7756 19.3017 16.4756C19.8274 15.4761 20.3012 14.4535 20.619 13.3615C20.7345 12.9629 20.8327 12.5584 20.8732 12.1424C21.0003 10.9176 20.5901 9.92385 19.579 9.20165C19.0532 8.82611 18.4581 8.62389 17.8226 8.49678C17.1524 8.3639 16.5053 8.45634 15.864 8.62967C13.8303 9.17854 12.2704 10.3803 11.1206 12.1309C10.4389 13.1766 10.0171 14.3264 9.82644 15.5628C9.76866 15.921 9.734 16.285 9.71666 16.6432C9.69933 17.0187 9.75133 17.3943 9.79755 17.764C9.83222 18.0587 9.89577 18.3533 9.94199 18.648C9.95932 18.7636 9.95354 18.8791 9.95932 18.9947C9.9651 19.1044 9.92466 19.1911 9.85533 19.2778C9.10424 20.1906 8.15094 20.7453 6.96653 20.8666C5.98434 20.9706 5.01949 20.9128 4.09507 20.543C2.0787 19.7342 0.784518 18.2725 0.189427 16.1925C0.0623203 15.7419 -0.00701074 15.2797 0.00454443 14.8117C0.0160996 14.4477 0.0218772 14.0837 0.00454443 13.7197C-0.0301211 12.9571 0.137429 12.2233 0.37431 11.5069C0.801851 10.1954 1.50094 9.02832 2.37913 7.97102C3.88708 6.14531 5.73591 4.7298 7.81584 3.6205C9.35845 2.80008 10.982 2.18766 12.6806 1.77745C13.4894 1.58101 14.3041 1.44235 15.1303 1.34991C16.176 1.23436 17.2333 1.22858 18.279 1.28636C20.0816 1.39035 21.8149 1.79479 23.4558 2.57476C24.8308 3.22763 26.0557 4.08849 27.0899 5.20934C28.0489 6.25508 28.696 7.46837 29.0542 8.83188C29.2853 9.69852 29.4124 10.5825 29.4067 11.4838C29.4009 12.1482 29.4009 12.8069 29.4009 13.4713C29.4009 13.5579 29.4009 13.6215 29.4009 13.7371Z"></path>
          <path d="M90.7588 34.5018C91.065 34.444 91.3019 34.3343 91.5388 34.2303C92.4805 33.8316 93.3356 33.3059 94.052 32.5663C94.1849 32.4277 94.312 32.2774 94.4391 32.1272C94.5778 31.9655 94.6471 31.7863 94.6933 31.5726C95.2364 29.0478 96.1782 26.6905 97.5648 24.5066C98.8127 22.548 100.344 20.8494 102.222 19.4743C103.81 18.3072 105.561 17.481 107.485 17.0477C108.323 16.8628 109.166 16.7415 110.033 16.7473C110.449 16.7531 110.865 16.7357 111.281 16.7531C113.216 16.8282 114.984 17.3828 116.492 18.625C117.798 19.6996 118.647 21.0632 118.994 22.7329C119.092 23.2182 119.156 23.7035 119.138 24.2004C119.132 24.4084 119.138 24.6164 119.138 24.8244C119.144 26.0492 118.821 27.1816 118.214 28.2389C117.665 29.198 116.92 29.9895 116.07 30.6828C115.215 31.3877 114.268 31.9539 113.268 32.4334C111.743 33.1672 110.143 33.6872 108.502 34.0916C107.681 34.2938 106.855 34.4498 106.029 34.5943C105.428 34.6983 104.821 34.756 104.221 34.8311C104.093 34.8485 103.961 34.86 103.833 34.8774C103.683 34.8947 103.666 34.9294 103.689 35.0796C103.805 35.7267 104.013 36.3333 104.371 36.888C104.81 37.5755 105.445 38.0088 106.196 38.2746C107.057 38.575 107.936 38.6386 108.843 38.5288C111.183 38.2515 113.297 37.3675 115.302 36.1831C116.613 35.4089 117.827 34.496 118.901 33.4098C119.543 32.7628 120.115 32.0579 120.577 31.2664C120.617 31.197 120.658 31.1335 120.704 31.0699C120.762 30.989 120.837 30.9486 120.935 30.9544C121.01 30.9544 121.091 30.9544 121.166 30.9544C122.258 30.9544 123.35 30.9544 124.436 30.9544C124.459 30.9544 124.488 30.9544 124.511 30.9544C124.91 30.937 124.939 31.0295 124.933 31.4166C124.933 31.5379 124.881 31.6419 124.841 31.7517C124.402 32.809 123.882 33.8258 123.298 34.808C122.322 36.4662 121.195 38.0204 119.924 39.4705C118.295 41.3194 116.486 42.9718 114.406 44.3064C113.066 45.1672 111.651 45.8663 110.131 46.3459C109.091 46.6752 108.022 46.889 106.93 46.9641C106.416 47.0045 105.89 46.9814 105.37 46.9814C103.966 46.9814 102.609 46.7272 101.303 46.2303C98.5643 45.1846 96.5133 43.3646 95.2306 40.7185C94.8724 39.979 94.624 39.199 94.4622 38.3959C94.4391 38.2804 94.4275 38.1648 94.3524 38.0666C94.2369 38.0666 94.1676 38.159 94.0924 38.2226C92.6365 39.3377 91.0419 40.187 89.2855 40.7243C88.6788 40.9092 88.0549 41.042 87.4309 41.146C87.246 41.1749 87.1305 41.2558 87.0207 41.3945C86.3736 42.1976 85.6629 42.9313 84.8772 43.59C82.9821 45.1846 80.8213 46.2303 78.3832 46.6983C77.453 46.8774 76.5113 46.9872 75.5637 46.9756C75.3673 46.9756 75.1766 46.9756 74.9802 46.9756C71.6061 46.9467 68.8155 45.6352 66.5969 43.1104C65.2565 41.5851 64.4072 39.8114 63.9277 37.8528C63.7428 37.0959 63.6388 36.3275 63.5695 35.5476C63.4944 34.7156 63.4944 33.8836 63.5348 33.0574C63.5984 31.6304 63.8526 30.2264 64.2743 28.8571C64.9676 26.6096 66.0596 24.5701 67.5444 22.7502C69.2431 20.6703 71.2883 19.0121 73.7438 17.897C74.9917 17.3308 76.2917 16.938 77.6494 16.7415C78.7183 16.5855 79.7929 16.5509 80.8676 16.5971C81.9769 16.6433 83.0573 16.834 84.1146 17.1633C85.3163 17.5388 86.4256 18.0993 87.402 18.8966C88.5864 19.8672 89.4588 21.0516 89.9095 22.5249C90.1001 23.1489 90.1984 23.7844 90.2446 24.4373C90.2446 24.4604 90.2446 24.4893 90.2446 24.5124C90.2561 24.7319 90.2677 24.7435 90.4988 24.7493C90.7819 24.755 91.0708 24.7493 91.3539 24.7493C91.4983 24.7493 91.637 24.7435 91.7814 24.7493C92.0761 24.7608 92.1223 24.8012 92.1281 25.0901C92.1338 25.2172 92.1281 25.3501 92.1281 25.4772C92.1223 25.9452 92.1281 26.4132 92.0992 26.8812C92.0703 27.3723 92.0414 27.8634 91.9836 28.3545C91.9374 28.7762 91.8854 29.2038 91.8334 29.6255C91.7121 30.5673 91.533 31.4917 91.3192 32.4161C91.1748 33.0343 91.0072 33.6467 90.8166 34.2534C90.7877 34.3227 90.7819 34.3863 90.7588 34.5018ZM78.0481 38.4826C78.0365 38.4248 78.0308 38.3728 78.0192 38.3208C77.8632 37.5639 77.8632 36.7955 78.0134 36.0387C78.2734 34.7676 78.8801 33.6872 79.8738 32.8379C80.0414 32.6934 80.2262 32.5721 80.4169 32.4623C80.7058 32.3006 80.96 32.341 81.1911 32.5721C81.4742 32.861 81.7804 33.1152 82.1097 33.3521C82.4159 33.5716 82.7337 33.7738 83.0688 33.9472C83.1844 34.0049 83.2364 33.9992 83.2884 33.8894C83.375 33.7045 83.4617 33.5138 83.5426 33.3232C83.9701 32.3121 84.2128 31.2548 84.3688 30.1744C84.3977 29.9837 84.3688 29.9433 84.1897 29.8913C84.1146 29.8682 84.0394 29.8624 83.9643 29.8451C83.1208 29.6313 82.4102 29.198 81.8671 28.5105C81.2662 27.7478 81.0755 26.8696 81.1218 25.9163C81.1275 25.8008 81.1795 25.7199 81.2778 25.6679C81.4684 25.5581 81.6533 25.4368 81.7977 25.2635C82.0924 24.9226 82.26 24.5239 82.3755 24.0906C82.4506 23.8017 82.4275 23.5244 82.3466 23.2529C82.1733 22.6693 81.7977 22.2938 81.2027 22.1436C80.9889 22.0916 80.7693 22.0685 80.5498 22.0973C79.9085 22.184 79.3249 22.4209 78.7703 22.7387C77.9268 23.224 77.2046 23.8595 76.5864 24.599C74.4775 27.1238 73.2527 30.0126 73.0389 33.3116C73.0332 33.4272 73.0274 33.5485 73.0389 33.6641C73.0794 34.0396 73.1083 34.4151 73.166 34.7849C73.2874 35.5476 73.5242 36.2698 73.9402 36.9284C74.6971 38.1359 75.8006 38.6963 77.2161 38.6443C77.4934 38.6328 77.7823 38.6155 78.0481 38.4826ZM104.758 29.354C104.856 29.4175 104.943 29.3829 105.029 29.3655C106.196 29.1055 107.34 28.782 108.456 28.3545C109.328 28.0194 110.171 27.6207 110.957 27.1065C111.437 26.7945 111.887 26.4479 112.275 26.0203C112.65 25.6043 112.974 25.1479 113.106 24.5933C113.141 24.4488 113.153 24.3102 113.13 24.1715C112.974 23.3511 112.24 22.8022 111.402 22.8658C110.767 22.9178 110.189 23.1373 109.64 23.432C108.866 23.8422 108.196 24.391 107.589 25.0208C106.428 26.2341 105.538 27.6265 104.839 29.146C104.804 29.2095 104.781 29.2847 104.758 29.354Z"></path>
          <path d="M96.2366 12.7723C96.225 12.8763 96.225 12.9399 96.2135 13.0034C96.1961 13.1017 96.1037 13.1652 96.0113 13.1363C95.7513 13.0554 95.4855 12.9919 95.2891 12.7781C95.1157 12.5875 94.9193 12.4141 94.746 12.2235C94.6015 12.0675 94.4398 11.9519 94.2664 11.8306C94.018 11.6515 93.758 11.6573 93.4864 11.7439C93.0878 11.871 92.7238 12.0675 92.3945 12.3217C92.1518 12.5123 91.8803 12.6683 91.5972 12.8012C91.3776 12.9052 91.1754 12.8937 90.9616 12.7897C90.6728 12.6394 90.407 12.4603 90.1528 12.2524C90.0026 12.131 89.8408 12.0212 89.6848 11.9057C89.3786 11.6919 89.0608 11.6919 88.7315 11.8479C88.3271 12.0386 87.9631 12.2812 87.6164 12.5586C87.3564 12.7723 87.0618 12.8879 86.7325 12.9168C86.64 12.9226 86.5533 12.9226 86.4609 12.8937C86.12 12.7897 85.8023 12.6568 85.5712 12.3737C85.4325 12.2061 85.2707 12.0501 85.1147 11.8941C85.0165 11.7901 84.8952 11.7093 84.7681 11.6457C84.381 11.4493 84.0054 11.5302 83.653 11.7324C83.4277 11.8595 83.2255 12.027 83.029 12.1946C82.7055 12.4719 82.3357 12.6395 81.9371 12.7666C81.7811 12.8186 81.6309 12.7954 81.4806 12.7261C81.2784 12.6337 81.0935 12.5123 80.9375 12.3506C80.6371 12.0444 80.2789 11.8075 79.8918 11.611C79.5451 11.4377 79.1927 11.4377 78.8518 11.6284C78.6323 11.7497 78.4474 11.9115 78.2683 12.079C78.2047 12.1426 78.1412 12.2061 78.0719 12.2639C78.0025 12.3217 77.9101 12.2755 77.8985 12.1888C77.8754 12.0444 77.9101 11.8999 77.9505 11.767C78.0314 11.507 78.0661 11.2297 78.1701 10.9813C78.303 10.6577 78.3145 10.2937 78.5283 10.0049C78.563 9.95865 78.5629 9.88354 78.5803 9.81999C78.5976 9.75643 78.6034 9.6871 78.6323 9.63511C78.9443 9.04001 79.2505 8.43915 79.6665 7.90761C80.0305 7.4454 80.4638 7.05252 80.9029 6.6712C81.1282 6.47477 81.3882 6.33033 81.6424 6.16278C82.249 5.76412 82.9077 5.45791 83.5606 5.1517C83.7339 5.07081 83.9361 5.0477 84.0921 4.9206C84.1383 4.88593 84.2134 4.89171 84.277 4.88015C84.3521 4.8686 84.4445 4.88015 84.5023 4.83971C84.7045 4.69527 84.9414 4.69527 85.1725 4.66638C85.2245 4.6606 85.2765 4.64905 85.3227 4.63749C86.1431 4.41217 86.9867 4.36595 87.8302 4.41217C88.3675 4.44106 88.9164 4.52194 89.4248 4.74149C89.5057 4.77616 89.5981 4.78771 89.6906 4.81082C89.8177 4.83971 89.9448 4.86282 90.0488 4.94948C90.0777 4.97259 90.1123 4.98993 90.147 5.00726C90.8865 5.31347 91.2159 5.48102 91.8341 5.86812C92.4638 6.26677 93.0358 6.72898 93.55 7.26052C93.6944 7.41073 93.8331 7.56673 93.9544 7.73428C94.4571 8.42759 94.954 9.12668 95.3411 9.88932C95.4797 10.1609 95.6126 10.4382 95.7166 10.7328C95.8206 11.0159 95.8899 11.2991 95.9766 11.5822C96.1037 11.9866 96.1615 12.4026 96.2366 12.7723Z"></path>
          <path d="M72.5656 8.04614C72.5656 7.7977 72.5598 7.55504 72.5656 7.30661C72.5713 7.02351 72.606 6.7404 72.7042 6.46886C72.7851 6.24931 72.814 6.01821 72.866 5.7871C72.8891 5.67155 72.8256 5.58489 72.6984 5.57333C72.502 5.55022 72.3113 5.55022 72.138 5.67155C72.086 5.70622 72.0225 5.74088 71.9647 5.75244C71.4274 5.88532 70.9652 6.15687 70.5376 6.50352C70.2141 6.76929 69.9079 7.04084 69.6363 7.35861C69.5208 7.49727 69.3879 7.62437 69.2608 7.75148C69.0759 7.93636 68.8506 8.06925 68.6079 8.16747C68.4346 8.24258 68.2844 8.19636 68.1399 8.07503C67.8279 7.80926 67.8164 7.43371 67.9608 7.08128C68.0128 6.96573 68.0937 6.86173 68.111 6.72885C68.1284 6.59019 68.2555 6.52086 68.3248 6.41108C68.7755 5.69466 69.3879 5.14579 70.087 4.67781C70.3354 4.51026 70.5781 4.34271 70.8554 4.22715C70.9363 4.19249 71.0114 4.14049 71.0865 4.08271C71.2021 4.00183 71.2021 3.89205 71.0749 3.84583C70.8727 3.77073 70.6936 3.61473 70.4625 3.5974C70.451 3.5974 70.4336 3.5974 70.4221 3.59162C70.0754 3.37785 69.671 3.25074 69.3937 2.91564C69.307 2.80587 69.255 2.70187 69.2666 2.56321C69.2723 2.47077 69.2723 2.38411 69.2723 2.29166C69.2839 1.9739 69.4341 1.78901 69.7461 1.73124C70.139 1.65613 70.5203 1.74279 70.8958 1.85834C71.254 1.96812 71.5892 2.14145 71.9589 2.22233C72.0225 2.23389 72.0802 2.27433 72.1322 2.30322C72.1785 2.32633 72.2131 2.37255 72.2651 2.3841C72.8198 2.5401 73.2993 2.84631 73.802 3.10053C73.8597 3.12941 73.9233 3.15252 73.9811 3.18141C74.114 3.24497 74.2237 3.22763 74.3335 3.12941C74.5068 2.97342 74.6917 2.82898 74.8708 2.67876C75.2348 2.37833 75.645 2.15878 76.0783 1.98545C76.2228 1.92768 76.3788 1.89301 76.5348 1.88723C76.737 1.87568 76.9219 1.91612 77.0605 2.07789C77.2107 2.25122 77.2974 2.43033 77.2454 2.67876C77.2107 2.86364 77.1472 3.02542 77.0374 3.16986C76.8583 3.41251 76.6388 3.61473 76.3788 3.77073C76.1997 3.8805 76.0379 4.00761 75.8646 4.11738C75.6681 4.24449 75.6739 4.41781 75.7375 4.59692C75.7606 4.6547 75.7952 4.71247 75.8299 4.76447C75.8761 4.83958 75.9223 4.92046 75.9859 4.9898C76.4019 5.46934 76.737 6.01243 77.1819 6.47464C77.3147 6.6133 77.4187 6.78085 77.5401 6.93106C77.6961 7.13328 77.7654 7.35283 77.7712 7.61282C77.7712 7.8497 77.6845 8.03458 77.5458 8.21369C77.3494 8.47368 77.1472 8.55457 76.8468 8.45057C76.7601 8.42168 76.6792 8.37546 76.6041 8.32924C76.3788 8.19635 76.1939 8.01147 76.0321 7.80926C75.6855 7.37594 75.3388 6.93684 74.9921 6.50352C74.8766 6.36486 74.7553 6.2262 74.6282 6.09909C74.5588 6.02976 74.4317 6.06443 74.4144 6.16264C74.3855 6.33019 74.3104 6.48041 74.2353 6.63063C74.1544 6.79818 74.1602 6.98884 74.1486 7.16795C74.1255 7.58393 74.0966 7.99414 74.1313 8.41013C74.1486 8.60656 74.1775 8.79722 74.2295 8.98211C74.2642 9.10344 74.2988 9.23632 74.2988 9.36343C74.3046 9.55986 74.3277 9.75053 74.4375 9.92385C74.4722 9.97585 74.4895 10.0452 74.4895 10.1087C74.5011 10.3167 74.5646 10.5132 74.6513 10.7038C74.7495 10.9118 74.7148 11.166 74.8477 11.3682C74.917 11.79 75.0961 12.1887 75.0961 12.622C75.0961 12.6855 75.1077 12.7491 75.1077 12.8184C75.1135 13.2402 74.761 13.3731 74.4837 13.3268C74.2642 13.2922 74.0677 13.1997 73.9175 13.0149C73.75 12.8126 73.594 12.6047 73.4842 12.3678C73.334 12.0558 73.1722 11.738 73.0855 11.4087C73.0047 11.0967 72.8429 10.8078 72.8313 10.4727C72.6522 10.0625 72.6811 9.60609 72.5482 9.18432C72.502 9.03988 72.5193 8.87811 72.5136 8.72212C72.5078 8.49101 72.5136 8.25413 72.5136 8.02303C72.5482 8.04614 72.554 8.04614 72.5656 8.04614Z"></path>
          <path d="M106.526 8.51394C106.573 8.80282 106.37 9.05704 106.209 9.31703C106.145 9.42102 106.024 9.46147 105.908 9.47302C105.654 9.50769 105.417 9.46147 105.203 9.31703C104.99 9.17259 104.787 9.00504 104.614 8.81438C104.273 8.44461 103.846 8.20195 103.407 7.97663C103.227 7.88419 103.014 7.8553 102.811 7.8033C102.719 7.78019 102.621 7.83219 102.592 7.91885C102.569 7.99396 102.557 8.06907 102.546 8.14418C102.499 8.46772 102.447 8.78549 102.361 9.09748C102.297 9.30547 102.286 9.5308 102.251 9.75035C102.239 9.82546 102.251 9.9179 102.216 9.97567C102.072 10.2068 102.037 10.461 102.02 10.721C102.02 10.7441 102.02 10.7788 102.003 10.7961C101.8 11.033 101.8 11.3507 101.673 11.6165C101.54 11.8823 101.448 12.1654 101.321 12.4311C101.078 12.9454 100.812 13.448 100.46 13.8987C100.304 14.0951 100.136 14.2684 99.9458 14.4302C99.7898 14.5631 99.6049 14.6266 99.42 14.6671C99.0849 14.7422 98.796 14.4995 98.8018 14.1586C98.8076 13.864 98.848 13.5809 99.004 13.3036C99.2062 12.928 99.3969 12.5467 99.6049 12.1769C99.6395 12.1076 99.6684 12.0383 99.6973 11.9632C99.7204 11.9054 99.7204 11.8303 99.7609 11.7783C100.079 11.3507 100.165 10.8308 100.339 10.3512C100.443 10.0623 100.495 9.75035 100.599 9.45569C100.628 9.3748 100.622 9.27658 100.628 9.18414C100.645 8.98771 100.668 8.80282 100.76 8.61794C100.853 8.42728 100.882 8.22506 100.87 8.01129C100.859 7.87263 100.749 7.8033 100.622 7.87263C100.321 8.05174 99.9978 8.18462 99.68 8.32906C99.2929 8.50239 98.8942 8.65838 98.4667 8.69305C98.2356 8.71038 98.0334 8.64105 97.8312 8.54861C97.7907 8.53128 97.756 8.47928 97.7329 8.43306C97.5943 8.14418 97.6463 7.79752 97.8774 7.5722C98.2876 7.16777 98.744 6.82689 99.2582 6.5669C99.3276 6.53223 99.3969 6.49757 99.4604 6.45135C99.5471 6.38779 99.6395 6.34735 99.7493 6.35891C99.9515 6.37624 100.131 6.33002 100.304 6.21447C100.379 6.16825 100.472 6.15091 100.558 6.12202C100.668 6.08158 100.72 5.99492 100.737 5.88514C100.755 5.75226 100.76 5.6136 100.703 5.50382C100.593 5.29583 100.547 5.06473 100.466 4.84518C100.316 4.45808 100.119 4.09987 99.9226 3.73588C99.6973 3.32567 99.732 3.12924 100.05 2.80569C100.362 2.48215 100.772 2.45904 101.136 2.73058C101.327 2.87502 101.483 3.04257 101.604 3.24479C101.766 3.52211 101.91 3.81099 102.055 4.09987C102.193 4.37719 102.245 4.68918 102.401 4.95495C102.511 5.14561 102.615 5.20917 102.806 5.11095C103.152 4.93184 103.522 4.81051 103.88 4.6603C104.117 4.56208 104.371 4.51008 104.608 4.4003C104.741 4.34253 104.914 4.37719 105.07 4.37719C105.174 4.37719 105.278 4.37719 105.382 4.38297C105.608 4.4003 105.798 4.57941 105.827 4.79896C105.914 5.38249 105.648 5.82159 105.099 6.01803C104.955 6.07003 104.805 6.12202 104.66 6.17402C104.614 6.19136 104.568 6.22024 104.527 6.24913C104.458 6.29535 104.464 6.41668 104.539 6.44557C105.059 6.64201 105.469 6.99444 105.908 7.30643C106.197 7.51442 106.37 7.78597 106.515 8.09218C106.532 8.23084 106.515 8.34639 106.526 8.51394Z"></path>
          <path d="M123.501 21.4272C123.229 21.4272 122.958 21.4272 122.686 21.4272C122.49 21.4272 122.299 21.3752 122.132 21.2655C121.976 21.1672 121.872 21.0286 121.9 20.8495C121.935 20.6126 121.86 20.445 121.658 20.3237C121.496 20.2255 121.496 20.0753 121.531 19.9135C121.588 19.6188 121.588 19.6131 121.3 19.5033C121.115 19.434 120.988 19.3184 120.947 19.122C120.924 19.0006 120.855 18.9429 120.733 18.9371C120.658 18.9313 120.566 18.9371 120.508 18.8967C120.3 18.7753 120.104 18.7233 119.855 18.758C119.653 18.7811 119.497 18.6193 119.376 18.4633C119.185 18.2265 119.069 17.9491 119.064 17.6429C119.052 17.2154 119.046 16.7878 119.075 16.3603C119.093 16.0772 119.15 15.7883 119.243 15.5225C119.428 14.9968 119.624 14.471 120.034 14.0666C120.063 14.0377 120.086 14.0088 120.109 13.9799C120.739 13.1133 121.635 12.628 122.611 12.2755C123.033 12.1253 123.501 12.1253 123.952 12.0791C124.795 12.1773 125.615 12.3391 126.338 12.8302C126.401 12.8764 126.471 12.9169 126.523 12.9689C126.973 13.4022 127.435 13.8124 127.811 14.315C128.302 14.9737 128.539 15.7132 128.562 16.5278C128.579 17.2154 128.504 17.8971 128.342 18.5673C128.267 18.8793 128.117 19.1451 127.926 19.3935C127.297 20.2197 126.494 20.809 125.5 21.1326C125.015 21.2886 124.523 21.4041 124.015 21.4041C123.848 21.4041 123.68 21.4041 123.507 21.4041C123.501 21.4099 123.501 21.4215 123.501 21.4272ZM127.695 16.8918C127.695 16.7243 127.695 16.5567 127.695 16.3834C127.695 16.1985 127.666 16.0194 127.586 15.8519C127.349 15.3319 127.077 14.8292 126.702 14.3959C126.465 14.1186 126.228 13.8413 125.916 13.6506C125.604 13.4599 125.286 13.2866 124.951 13.1422C124.87 13.1075 124.783 13.0671 124.697 13.0497C124.235 12.9573 123.772 12.9457 123.304 12.9746C123.189 12.9804 123.073 13.0151 122.969 13.0613C122.611 13.2115 122.264 13.3906 121.924 13.5755C121.438 13.847 121.034 14.1995 120.687 14.627C120.416 14.9621 120.202 15.3261 120.144 15.771C120.109 16.0541 120.052 16.3372 119.982 16.6087C119.93 16.8167 119.913 17.0189 119.93 17.2269C119.965 17.6776 120.005 17.6371 120.369 17.614C120.41 17.614 120.445 17.614 120.485 17.614C120.687 17.6083 120.872 17.6429 121.022 17.7931C121.097 17.8682 121.196 17.9029 121.3 17.9202C121.577 17.9722 121.773 18.1282 121.889 18.3767C121.947 18.498 122.033 18.5789 122.149 18.654C122.438 18.8331 122.553 19.1162 122.576 19.4397C122.582 19.5033 122.582 19.5726 122.576 19.6362C122.565 19.7864 122.6 19.9193 122.692 20.0348C122.779 20.1504 122.86 20.2659 122.877 20.4162C122.888 20.5317 122.958 20.5722 123.062 20.5664C123.512 20.5375 123.969 20.5144 124.419 20.4682C124.818 20.4219 125.182 20.2428 125.558 20.1099C126.008 19.9539 126.39 19.6824 126.736 19.3704C127.083 19.0642 127.331 18.6944 127.499 18.2611C127.678 17.822 127.724 17.3656 127.695 16.8918Z"></path>
          <path d="M108.53 5.7062C108.49 5.32488 108.941 5.06489 109.229 5.2151C109.541 5.37688 109.83 5.56754 110.033 5.86797C110.293 6.25507 110.269 6.21462 110.68 6.01241C110.934 5.8853 111.188 5.75242 111.454 5.67153C111.691 5.59642 111.951 5.61376 112.182 5.68309C112.384 5.74664 112.534 5.91419 112.569 6.13374C112.604 6.34173 112.505 6.51506 112.338 6.63639C112.17 6.75194 112.008 6.89638 111.783 6.8906C111.361 7.06393 110.951 7.25459 110.732 7.69369C110.616 7.92479 110.449 8.08656 110.194 8.16745C109.917 8.25411 109.721 8.20789 109.559 7.95946C109.449 7.79768 109.362 7.62436 109.351 7.42214C109.322 7.00615 109.154 6.65372 108.865 6.34751C108.802 6.28396 108.75 6.20885 108.692 6.13952C108.571 6.01819 108.536 5.85641 108.53 5.7062Z"></path>
          <path d="M62.9976 2.36659C63.5292 2.3897 64.0491 2.44169 64.4882 2.75946C64.6558 2.88079 64.7944 2.8519 64.9447 2.73057C65.0949 2.60924 65.2624 2.51103 65.43 2.41281C65.7362 2.23948 66.0655 2.20481 66.4064 2.21637C66.4931 2.22215 66.5855 2.25103 66.6664 2.2857C66.9321 2.40125 67.0304 2.7248 66.8628 2.96745C66.7299 3.15234 66.5624 3.291 66.3197 3.29678C65.8344 3.30833 65.534 3.5741 65.3491 4.00164C65.3029 4.10564 65.2393 4.20386 65.1873 4.30785C65.0775 4.5274 64.8695 4.60251 64.6558 4.66606C64.5229 4.70651 64.2918 4.57362 64.2109 4.41185C64.1878 4.36563 64.1705 4.31363 64.1589 4.26741C64.0318 3.77054 63.5407 3.46433 63.1363 3.45277C62.9052 3.44699 62.6741 3.44122 62.443 3.38344C62.3101 3.34878 62.2003 3.291 62.1252 3.18123C61.9692 2.97323 62.0039 2.7248 62.2061 2.56302C62.3274 2.4648 62.4719 2.39547 62.6278 2.38392C62.755 2.38392 62.8821 2.37814 62.9976 2.36659Z"></path>
          <path d="M93.7751 5.60809C93.7636 5.42321 93.8271 5.28455 93.9427 5.14589C94.4107 4.58546 94.9249 4.08281 95.5258 3.66682C95.6644 3.56861 95.8031 3.48194 95.9533 3.39528C96.2075 3.24506 96.4733 3.26239 96.739 3.36061C96.8142 3.3895 96.8662 3.4415 96.9124 3.51083C97.1781 3.91526 97.1204 4.26769 96.6986 4.52769C96.3693 4.7299 96.0688 4.97834 95.7511 5.20366C95.4969 5.38855 95.3178 5.64854 95.1155 5.87964C94.9942 6.01252 94.8787 6.15696 94.7458 6.27252C94.5609 6.44007 94.3818 6.44007 94.1854 6.29563C94.1102 6.24363 94.0467 6.18007 93.9774 6.1223C93.8271 5.97786 93.7347 5.81031 93.7751 5.60809Z"></path>
          <path d="M91.9202 1.49423C91.9202 1.50001 91.926 1.60978 91.874 1.67334C91.7296 1.87555 91.6776 2.11821 91.5389 2.3262C91.406 2.52842 91.3251 2.7653 91.2327 2.99063C91.1518 3.18129 91.0825 3.37773 91.0247 3.57416C90.9323 3.90349 90.6549 3.97859 90.3834 4.07681C90.3718 4.08259 90.3545 4.08259 90.3429 4.07681C90.135 3.98437 89.8981 3.95548 89.7536 3.73593C89.6265 3.53372 89.5745 3.34884 89.7016 3.12351C89.8287 2.89819 89.8807 2.64397 89.979 2.40709C90.1176 2.08932 90.2505 1.77156 90.4065 1.45957C90.4932 1.28624 90.5683 1.10713 90.6896 0.956917C90.7647 0.870254 90.8514 0.789367 90.9438 0.720036C91.0767 0.610262 91.2443 0.604484 91.3829 0.679593C91.5678 0.772034 91.7296 0.904919 91.8451 1.08402C91.926 1.17647 91.9376 1.29202 91.9202 1.49423Z"></path>
          <path d="M84.9579 2.43616C84.9174 2.12995 84.9001 1.81796 84.8365 1.51174C84.773 1.20553 84.7672 0.893543 84.7672 0.581554C84.7614 0.240676 84.9752 0.0269054 85.3161 0.00379506C85.4085 -0.00198252 85.4952 -0.00198261 85.5876 0.00957256C85.7956 0.0326829 85.9516 0.130902 86.0383 0.333117C86.1192 0.523778 86.1943 0.714438 86.1885 0.928209C86.1827 1.0842 86.1885 1.2402 86.1943 1.39619C86.2 1.60419 86.1885 1.81796 86.2694 2.00862C86.3849 2.2975 86.3676 2.59215 86.3676 2.88681C86.3676 3.1468 86.2116 3.29124 86.0036 3.38946C85.7841 3.48768 85.5414 3.48768 85.3219 3.3779C85.1023 3.26813 84.981 3.06591 84.9521 2.82326C84.9348 2.69615 84.9521 2.56327 84.9521 2.43616C84.9521 2.44194 84.9521 2.43616 84.9579 2.43616Z"></path>
          <path d="M80.6423 5.19186C80.3476 5.22653 80.157 5.06475 80.001 4.78165C79.7525 4.31367 79.4752 3.85724 79.1401 3.44125C78.9206 3.16971 78.9321 2.86349 79.0419 2.55728C79.0939 2.40706 79.2326 2.30885 79.3712 2.24529C79.6254 2.12974 80.0068 2.20485 80.1916 2.4244C80.3823 2.64972 80.5614 2.89238 80.729 3.13504C80.9716 3.48747 81.1969 3.85146 81.3472 4.25589C81.532 4.74121 81.1969 5.21497 80.6423 5.19186Z"></path>
          <path d="M123.789 18.4284C123.737 18.4284 123.685 18.4284 123.633 18.4284C122.887 18.4284 122.431 17.9257 122.275 17.3075C122.182 16.9378 122.177 16.5565 122.281 16.1925C122.425 15.6667 122.766 15.3201 123.292 15.1583C123.661 15.0427 124.037 15.0601 124.401 15.1641C124.511 15.1929 124.621 15.2507 124.713 15.3143C124.921 15.4529 125.094 15.6263 125.262 15.8054C125.505 16.0711 125.562 16.4005 125.597 16.7356C125.684 17.5618 125.135 18.1048 124.615 18.2897C124.482 18.336 124.343 18.388 124.205 18.4168C124.066 18.4457 123.921 18.4399 123.777 18.4515C123.789 18.4399 123.789 18.4342 123.789 18.4284ZM123.945 17.4866C123.973 17.4809 124.089 17.4809 124.205 17.4578C124.586 17.3827 124.788 17.0649 124.719 16.6836C124.644 16.2445 124.262 15.9729 123.881 15.9383C123.604 15.9151 123.298 16.0307 123.188 16.3774C123.113 16.62 123.107 16.8627 123.142 17.1053C123.165 17.2729 123.263 17.3827 123.43 17.4289C123.575 17.4693 123.713 17.4924 123.945 17.4866Z"></path>
        </svg>
      </Link>
      <div
        className="h-full flex justify-center items-center gap-8 font-bold uppercase order-3 lg:order-2 "
        ref={ref}
      >
        <HamBurgerIcon
          className="text-4xl lg:hidden"
          isClose={!showSideMenu}
          onClick={() => setShowSideMenu(!showSideMenu)}
        />

        {(showSideMenu || isLg) && (
          <div
            className={cn(
              "fixed top-[--md-nav-hight] bottom-0 inset-x-0 lg:relative lg:top-auto lg:bottom-auto lg:inset-x-auto lg:flex-row lg:py-0 lg:pl-0 flex flex-col py-16 gap-16 px-16 text-xl lg:text-base menu overflow-y-auto",
              navBarColor
            )}
          >
            <DropDown
              title="about"
              className={cn("hidden lg:block font-bold uppercase", navBarColor)}
              styles={{
                list: cn(
                  "w-44 p-4 gap-4 mt-[calc(var(--md-nav-hight)/2)]",
                  navBarColor
                ),
                title: "support-hover:hover:underline",
              }}
            >
              {dropDownLinks}
            </DropDown>
            <Details
              title="about"
              className={cn("block lg:hidden font-bold uppercase", navBarColor)}
              styles={{
                list: cn(
                  "w-full lg:p-4 gap-8  lg:mt-[calc(var(--md-nav-hight)/2)] py-4 ",
                  navBarColor
                ),
                title:
                  "flex items-center justify-between gap-2 support-hover:hover:underline py-2",
              }}
            >
              {dropDownLinks}
            </Details>

            {links}
          </div>
        )}
      </div>
      <Link to="/cart" className=" order-1 lg:order-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="32"
          viewBox="0 0 34 32"
          className={cn("fill-current", navBarColor)}
        >
          <path d="M33.9971 15.9008C33.9958 15.8612 33.9915 15.8218 33.9842 15.7829C33.9813 15.7672 33.9776 15.752 33.9736 15.7362V15.7365C33.9641 15.6993 33.9517 15.6629 33.937 15.6276C33.932 15.6156 33.928 15.6034 33.9222 15.5917H33.9225C33.9009 15.5461 33.8748 15.5029 33.845 15.4627C33.8403 15.4562 33.8342 15.4507 33.8292 15.4445C33.8026 15.4113 33.7733 15.3804 33.742 15.3524C33.7365 15.3475 33.7328 15.3413 33.7272 15.3366C33.7204 15.3309 33.7125 15.3277 33.7054 15.3222C33.6766 15.3 33.6463 15.2796 33.6147 15.2619C33.6015 15.2543 33.5889 15.2462 33.5754 15.2394C33.5322 15.2179 33.4874 15.2008 33.441 15.1883L33.4368 15.1872L33.4334 15.1864L17.4936 10.9836L23.8445 4.49331L29.8217 3.61864C30.1285 3.57354 30.3759 3.33722 30.4428 3.02538C30.5095 2.71326 30.3817 2.39137 30.1216 2.21754L26.9928 0.123487C26.8458 0.0251505 26.6697 -0.0164063 26.4958 0.00586726L10.2855 2.10019C10.2755 2.10155 10.2668 2.10671 10.2568 2.10834C10.2041 2.11704 10.1527 2.13198 10.1031 2.15208C10.0913 2.15697 10.0789 2.16023 10.0673 2.16566V2.16593C10.0109 2.19282 9.95819 2.22678 9.91023 2.26752C9.89811 2.27757 9.88783 2.28925 9.8765 2.30012V2.29985C9.85621 2.3175 9.83645 2.33652 9.818 2.35635L0.183149 13.7282L0.180251 13.7328C0.17419 13.7401 0.169974 13.7483 0.164176 13.7556C0.137824 13.7898 0.114107 13.8265 0.0938136 13.8648C0.0898608 13.8719 0.0843275 13.8779 0.0806381 13.8852C0.0780029 13.8909 0.0769488 13.8971 0.0743136 13.9028C0.0513874 13.9504 0.033731 14.0004 0.0208182 14.052L0.0202911 14.0555L0.0200276 14.0582C0.0184465 14.0656 0.018183 14.0729 0.0168654 14.0799C0.00975021 14.1131 0.00474347 14.1465 0.00184465 14.1802C0.00105407 14.191 0.0026352 14.2014 0.00237169 14.212C0.00210819 14.2188 0 14.2253 0 14.2321V24.5226C0 24.842 0.192373 25.128 0.482505 25.2399L16.2732 31.3361C16.2772 31.3374 16.2811 31.338 16.2851 31.3393C16.2917 31.3418 16.2985 31.3428 16.3051 31.345C16.4337 31.3901 16.5718 31.3969 16.7041 31.3643L33.4271 27.3063C33.7628 27.2248 34 26.916 34 26.5606V15.9301C34 15.9203 33.9971 15.9105 33.9968 15.9008L33.9971 15.9008ZM4.37541 14.4918L15.4256 12.4773L15.389 18.1367L4.37541 14.4918ZM16.9118 12.5461L29.3739 15.8286L16.8733 18.466L16.9118 12.5461ZM26.4117 1.56092L27.6492 2.38941L13.3885 4.47644L12.1542 3.40289L26.4117 1.56092ZM10.6689 4.11539L12.684 5.86828V5.86855C12.8182 5.98508 12.9879 6.04892 13.1634 6.04919C13.1982 6.04892 13.2332 6.04647 13.2677 6.04158L21.3807 4.85426L15.6095 10.7521L2.92947 13.0567L10.6689 4.11539ZM15.791 29.5134L1.48644 23.9912V15.2821L15.791 20.0159V29.5134ZM32.514 25.9538L17.2771 29.6511V20.0824L32.514 16.8683V25.9538Z"></path>
        </svg>
      </Link>
    </div>
  );
}
