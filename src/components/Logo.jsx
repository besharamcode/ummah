"use client";

import { useRouter } from "next/navigation";

const Logo = (props) => {
  const router = useRouter();
  const handleLogo = () => {
    router.push(props.path);
  };
  return (
    <div>
      <svg
        width={props.width}
        onClick={handleLogo}
        height="79"
        viewBox="0 0 200 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6084 71.0863C22.5301 70.9057 24.4578 68.3692 24.8795 65.8287C25.1922 63.937 25.3729 61.9183 25.4217 59.7724C25.5307 54.9135 25.5379 50.2659 25.4432 45.8298C25.4002 43.807 25.2037 41.827 24.8537 39.8899C24.844 39.8385 24.8454 39.7858 24.8579 39.7349C24.8704 39.6839 24.8938 39.6357 24.9266 39.5932C24.9595 39.5506 25.0011 39.5144 25.0492 39.4868C25.0972 39.4592 25.1507 39.4407 25.2065 39.4324C26.6093 39.2263 28.1527 39.1447 29.8366 39.1875C31.8159 39.2357 34.0191 39.2718 35.4305 40.805C35.746 41.1474 35.8622 41.6625 35.779 42.3501C35.5409 44.2605 35.3745 46.3087 35.2799 48.4947C35.0762 53.2038 34.861 57.9931 34.6344 62.8628C34.316 69.6776 32.4786 75.794 24.531 77.6201C20.8792 78.463 16.9979 78.6395 12.8871 78.1499C8.86807 77.6723 5.34822 76.075 3.39896 72.6154C1.92734 70.0067 1.18149 67.5237 1.16141 65.1665C1.10977 58.6112 1.05957 52.0024 1.0108 45.3401C0.999326 43.6438 0.830074 41.9087 0.503047 40.1347C0.494628 40.0876 0.503783 40.0394 0.528927 39.9984C0.554071 39.9573 0.593623 39.9261 0.640742 39.91C3.66575 38.8986 8.1968 38.5895 11.1487 40.1508C11.2018 40.1788 11.2485 40.2166 11.2861 40.262C11.3238 40.3075 11.3517 40.3597 11.3681 40.4157C11.5001 40.8812 11.5316 41.3789 11.4628 41.9087C10.6423 48.2231 10.4057 55.5436 10.7528 63.8701C10.9808 69.3605 13.7735 71.4515 19.6084 71.0863Z"
          className="fill-logocolor"
        />
        <path
          d="M84.6555 74.0467L84.5866 74.8975C84.581 74.9822 84.556 75.0656 84.5135 75.1423C83.8652 76.3089 82.9414 77.2267 81.7423 77.8956C79.3585 79.224 76.5228 77.6989 75.5073 75.4795C75.2635 74.939 75.1315 74.0908 75.1114 72.9349C75.0397 68.6165 75.0211 64.9335 75.0555 61.886C75.0641 61.1555 75.0254 60.3769 74.9393 59.5502C74.7242 57.4752 72.9599 56.4478 70.7826 56.7167C68.7516 56.9682 67.65 57.8123 67.4779 59.2491C67.3603 60.2498 67.3001 61.304 67.2972 62.4117C67.2943 66.0292 67.2499 69.7135 67.1638 73.4647C67.1294 74.9711 66.5671 76.2019 65.477 77.1571C63.2911 79.0675 59.9692 78.036 58.6826 75.7403C57.8435 74.2433 57.964 71.6266 57.9683 69.8687C57.9826 66.2673 57.9324 62.785 57.8177 59.4217C57.7574 57.7321 56.544 56.7086 54.741 56.805C53.3899 56.8772 50.9759 57.0859 50.7823 58.7515C50.7077 59.3856 50.6546 60.0599 50.6231 60.7743C50.4395 65.1088 50.3262 69.3924 50.2831 73.6253C50.2602 75.8407 49.2131 77.3591 47.142 78.1805C45.1023 78.9912 42.7873 76.9042 41.9439 75.3631C41.4706 74.4908 41.2354 73.4366 41.2382 72.2005C41.2598 66.5937 41.5308 61.0592 41.0962 55.4886C40.9614 53.736 40.6516 51.9889 40.1668 50.247C40.1419 50.1561 40.1547 50.0598 40.2025 49.9772C40.2503 49.8946 40.3298 49.8319 40.425 49.8015C43.3209 48.8704 48.4372 48.9226 50.6102 51.3266C50.6681 51.3914 50.7508 51.4327 50.8407 51.4416C50.9306 51.4506 51.0208 51.4267 51.0921 51.3748C53.1948 49.8524 55.7996 49.1607 58.9063 49.2999C61.6043 49.4243 63.5622 50.5721 65.5846 52.0089C65.6989 52.0914 65.839 52.1372 65.9839 52.1394C66.1289 52.1415 66.2711 52.1 66.3893 52.021C69.4817 49.9661 72.8323 48.9975 76.4411 49.1152C76.6103 49.1206 76.6734 49.0483 76.6304 48.8985C76.0423 46.7099 75.6866 44.255 75.5632 41.5339C75.5374 40.9854 75.6536 40.4663 75.9118 39.9767C76.2689 39.2944 76.3034 38.5037 76.9316 37.974C77.6545 37.3666 78.4276 36.7766 79.2509 36.204C80.0943 35.6221 79.7199 34.9358 80.2062 34.2615C80.3955 33.9966 80.6207 33.7545 80.8817 33.5351C81.0051 33.4334 81.0739 33.3077 81.0883 33.1578C81.1801 32.2909 81.3866 31.5016 81.7079 30.7899C82.5298 28.9839 85.103 28.3337 87.0049 28.3979C87.4668 28.414 87.8842 28.5745 88.2571 28.8795C88.2944 28.9094 88.3396 28.9295 88.3881 28.9376C88.4365 28.9456 88.4863 28.9415 88.5325 28.9255C88.5786 28.9095 88.6193 28.8823 88.6503 28.8467C88.6813 28.8111 88.7016 28.7684 88.7089 28.723C89.1779 25.7932 91.5532 23.7263 94.9009 24.4407C96.8975 24.8688 98.3949 25.8467 99.3932 27.3745C99.4166 27.4103 99.4501 27.4394 99.4901 27.4587C99.53 27.478 99.5748 27.4866 99.6197 27.4837C99.6646 27.4808 99.7077 27.4665 99.7444 27.4423C99.7811 27.4181 99.81 27.3849 99.8278 27.3464C100.878 25.0427 101.416 22.6908 101.562 20.1744C101.657 18.5891 102.126 17.0881 102.242 15.5028C102.529 11.6499 102.742 7.76754 102.883 3.85578C102.969 1.44371 105.263 -0.851977 107.948 0.311918C110.792 1.54404 110.611 3.7434 110.71 6.19962C110.954 12.2653 110.729 18.1168 110.035 23.7544C109.817 25.5096 109.732 27.1765 109.781 28.7551C109.927 33.6006 109.573 38.8368 108.718 44.4637C108.5 45.8951 108.435 47.439 108.524 49.0952C108.533 49.2423 108.615 49.3293 108.769 49.356C111.011 49.7333 112.758 50.8852 114.579 52.0852C114.655 52.1356 114.747 52.1627 114.841 52.1627C114.935 52.1627 115.027 52.1356 115.103 52.0852C118.98 49.5206 123.705 48.2564 128.314 49.8457C132.328 51.2263 133.09 55.0551 133.099 58.5749C133.116 64.389 133.245 69.6399 133.486 74.3276C133.568 75.9049 131.218 77.6828 130 78.1604C128.741 78.6527 127.45 78.444 126.128 77.5343C124.716 76.5631 123.996 75.2547 123.968 73.6092C123.902 69.8821 123.874 65.9931 123.886 61.9422C123.889 61.1475 123.851 60.3569 123.774 59.5702C123.361 55.3882 116.304 55.914 116.218 59.7027C116.112 64.4572 116.05 68.9269 116.033 73.1115C116.027 75.0647 115.304 76.5243 113.864 77.4902C111.218 79.2641 107.664 77.3136 107.074 74.5524C106.948 73.961 106.893 73.359 106.911 72.7463C106.916 72.5831 106.832 72.5028 106.657 72.5055C106.582 72.5055 106.509 72.5189 106.437 72.5456C106.425 72.5504 106.411 72.5522 106.397 72.5511C106.384 72.5499 106.371 72.5457 106.36 72.5389C106.349 72.5322 106.34 72.523 106.334 72.5122C106.328 72.5015 106.325 72.4895 106.325 72.4774C106.377 70.4306 106.373 68.3824 106.312 66.3329C106.248 64.0934 106.609 61.9943 106.644 59.807C106.695 56.3916 103.597 56.4799 101.106 57.2103C100.417 57.415 99.7031 57.8846 99.6385 58.6271C99.5438 59.7776 99.4621 60.9763 99.3932 62.2231C99.3846 62.3756 99.4549 62.4826 99.6041 62.5442L99.9397 62.6846C100.184 62.789 100.188 62.9041 99.9526 63.0298C99.8522 63.0833 99.7432 63.0994 99.6256 63.078C99.4248 63.0432 99.3244 63.1208 99.3244 63.3107C99.2814 66.9201 99.1982 70.5296 99.0748 74.139C99.0174 75.8514 98.1109 77.1464 96.3553 78.024C95.532 78.436 94.7188 78.4722 93.9155 78.1323C91.3567 77.046 90.0801 75.0447 90.0859 72.1282C90.0988 66.2847 90.4086 60.5013 89.8578 54.718C89.7144 53.1982 89.4318 51.7253 89.0101 50.2992C88.9764 50.1896 88.9899 50.072 89.0478 49.9716C89.1057 49.8711 89.2033 49.7957 89.3199 49.7614C90.2092 49.4992 91.0684 49.3467 91.8974 49.3039C92.1728 49.2905 92.3578 49.1634 92.4525 48.9226L92.7236 48.2483C92.8297 47.9808 92.7351 47.8831 92.4396 47.9554C90.8274 48.3487 89.4203 47.9982 88.2184 46.9038C88.0376 46.7406 87.8885 46.762 87.7708 46.968C86.9475 48.3915 85.4257 48.9119 83.2054 48.5293C83.1266 48.5153 83.0516 48.4864 82.985 48.4443C82.9184 48.4022 82.8616 48.3478 82.8181 48.2845L81.183 45.9045C80.9678 45.5914 80.701 45.5446 80.3826 45.764C79.6568 46.259 78.8335 46.5092 77.9127 46.5145C77.8151 46.5145 77.7649 46.469 77.7621 46.3781L77.7578 46.2657C77.7566 46.234 77.7689 46.2031 77.7921 46.1792C77.8153 46.1554 77.8476 46.1404 77.8826 46.1373C78.7546 46.065 79.5163 45.8068 80.1674 45.3627C80.4601 45.1647 80.506 44.9266 80.3051 44.6483L79.2165 43.1433C79.0558 42.9185 78.8622 42.8931 78.6356 43.067C78.3258 43.3024 77.9658 43.459 77.5555 43.5366C77.4494 43.5553 77.3562 43.5312 77.2758 43.4643C77.2127 43.4135 77.1883 43.364 77.2027 43.3158C77.2199 43.2543 77.2586 43.2061 77.3189 43.1713C77.6516 42.9787 77.9801 42.8128 78.3043 42.6737C78.6514 42.5265 78.6428 42.4008 78.2784 42.2964L77.022 41.9352C76.7695 41.863 76.649 41.9499 76.6605 42.1961C76.781 44.5827 77.0765 46.8717 77.5469 49.0631C77.5647 49.143 77.6071 49.2166 77.6689 49.2749C77.7307 49.3333 77.8093 49.374 77.8955 49.3922C81.794 50.1895 83.8738 52.5989 84.1348 56.6204C84.2955 59.0793 84.3485 61.8351 84.294 64.888C84.2725 66.0961 85.5806 65.763 86.3853 65.8392C87.4008 65.9302 88.3604 65.7897 89.264 65.4178C89.3346 65.3891 89.413 65.3826 89.487 65.3993C89.561 65.416 89.6263 65.455 89.6728 65.5101L89.7459 65.5984C89.7649 65.6198 89.778 65.6452 89.784 65.6724C89.7899 65.6996 89.7886 65.7277 89.7801 65.7543C89.7716 65.7809 89.7561 65.8052 89.7352 65.8249C89.7142 65.8446 89.6883 65.8592 89.6599 65.8673C88.2026 66.3008 86.7037 66.385 85.1632 66.1201C85.1204 66.113 85.0763 66.1148 85.0343 66.1255C84.9923 66.1362 84.9533 66.1556 84.9203 66.1821C84.8874 66.2086 84.8611 66.2417 84.8436 66.2789C84.8261 66.3161 84.8177 66.3565 84.819 66.3971L85.0729 73.6253C85.0786 73.7671 85.0054 73.8473 84.8534 73.8661C84.796 73.8714 84.7444 73.8995 84.6985 73.9503C84.6727 73.9798 84.6583 74.0119 84.6555 74.0467ZM93.5153 40.3058C93.4379 40.6242 93.2457 40.873 92.9387 41.0523C92.7465 41.162 92.7422 41.2797 92.9258 41.4054L95.5765 43.1994C95.674 43.2663 95.7257 43.3573 95.7314 43.4723C95.7371 43.6222 95.6754 43.7546 95.5464 43.8697C95.4497 43.9561 95.3911 44.0731 95.3823 44.1972C95.3736 44.3214 95.4152 44.4437 95.499 44.5399C97.1485 46.4369 99.3043 47.8242 101.966 48.7018C102.009 48.7152 102.024 48.742 102.009 48.7821L101.966 48.8945C101.923 49.0122 101.837 49.051 101.708 49.0109C99.181 48.2162 97.0352 46.9012 95.271 45.0657C95.2489 45.0422 95.2206 45.0245 95.1889 45.0142C95.1573 45.004 95.1233 45.0015 95.0904 45.0072C95.0574 45.0129 95.0266 45.0264 95.0009 45.0465C94.9752 45.0666 94.9556 45.0926 94.9439 45.1219L93.4121 48.9948C93.3461 49.1634 93.4092 49.253 93.6014 49.2637C95.2021 49.356 96.4672 49.6249 97.9087 50.1547C98.2042 50.2617 98.2314 50.2189 97.9905 50.0263L95.6582 48.152C95.6223 48.1224 95.5995 48.0817 95.5947 48.0382C95.5899 47.9948 95.6034 47.9522 95.6324 47.9192L95.7271 47.8149C95.7373 47.8034 95.7498 47.7939 95.7638 47.7869C95.7778 47.7798 95.793 47.7754 95.8087 47.774C95.8243 47.7725 95.84 47.7739 95.8548 47.7782C95.8696 47.7824 95.8832 47.7895 95.8949 47.7988L99.9569 50.8651C100.058 50.9422 100.183 50.9872 100.315 50.9937C100.446 51.0002 100.577 50.9678 100.688 50.9012C102.717 49.6704 104.98 49.15 107.479 49.34C107.512 49.3427 107.545 49.3385 107.576 49.3275C107.607 49.3166 107.634 49.2993 107.657 49.2769C107.68 49.2546 107.697 49.2277 107.707 49.1983C107.717 49.1689 107.72 49.1378 107.715 49.1072C107.586 48.1641 107.517 47.249 107.625 46.2898C108.052 42.5091 108.427 38.873 108.748 35.3813C109.049 32.1063 108.726 28.5986 108.989 25.2273C109.173 22.8968 109.35 20.6306 109.522 18.4285C109.878 13.8399 109.854 8.79363 109.449 3.28988C109.303 1.29119 106.738 -0.0171857 105.004 1.37547C104.221 2.00425 103.828 2.86045 103.825 3.94407C103.814 9.28996 103.303 15.377 102.293 22.2052C102.007 24.1397 101.449 26.0969 100.62 28.0768C100.568 28.1999 100.482 28.2936 100.361 28.3578C100.049 28.5237 99.8967 28.7765 99.9053 29.1163C99.9655 31.3933 100.037 33.6033 100.12 35.7465C100.141 36.1906 100.377 36.5198 100.83 36.7338C101.054 36.8408 101.238 36.7994 101.381 36.6094C101.579 36.3472 101.833 36.1933 102.143 36.1478C102.562 36.0863 102.615 36.1893 102.302 36.4569L101.575 37.087C101.554 37.1053 101.537 37.1275 101.526 37.1522C101.515 37.1769 101.509 37.2035 101.509 37.2303C101.51 37.2572 101.516 37.2836 101.528 37.308C101.54 37.3324 101.558 37.3542 101.579 37.3719L103.477 38.9171C103.59 39.0092 103.733 39.0638 103.883 39.0725C104.033 39.0812 104.182 39.0435 104.307 38.9653L106.756 37.4402C106.876 37.3652 106.974 37.3853 107.048 37.5004L107.121 37.6168C107.167 37.6943 107.152 37.7586 107.074 37.8094L104.832 39.2783C104.643 39.4041 104.65 39.5191 104.854 39.6235L106.222 40.3218C106.46 40.4395 106.519 40.6121 106.399 40.8395L106.321 40.98C106.291 41.0359 106.248 41.085 106.196 41.124C106.144 41.163 106.083 41.191 106.019 41.2059C105.954 41.2208 105.887 41.2223 105.821 41.2103C105.756 41.1983 105.695 41.1732 105.641 41.1365C104.462 40.3379 103.145 39.8442 102.057 38.893C100.442 37.475 98.8884 36.1599 97.3966 34.9478C96.5418 34.2548 95.423 33.8816 94.0403 33.8281C92.0466 33.7505 90.0973 33.7037 88.1925 33.6876C87.9975 33.6849 87.9085 33.7746 87.9257 33.9565C88.085 35.6823 88.0333 37.392 85.8216 37.8455C84.1807 38.1827 82.6603 37.9111 81.2604 37.0308C81.2432 37.0228 81.2303 37.0254 81.2217 37.0388L81.1571 37.1231C81.1112 37.19 81.1213 37.2475 81.1873 37.2957C81.9704 37.8549 82.7363 38.3699 83.4851 38.8409C84.2037 39.2904 85.0083 39.0415 85.7613 39.4067C86.9346 39.974 88.5683 40.3726 90.6625 40.6027C91.536 40.6951 92.4095 40.2536 93.24 40.0569C93.2772 40.0477 93.3165 40.0476 93.3538 40.0567C93.3912 40.0658 93.4253 40.0837 93.4531 40.1087C93.4808 40.1338 93.5011 40.1651 93.512 40.1996C93.5229 40.2341 93.5241 40.2707 93.5153 40.3058ZM94.9267 32.9331C96.2693 32.9893 97.8313 34.2495 98.864 34.992C99.0705 35.1418 99.1666 35.0936 99.1523 34.8475C99.0605 33.3144 99.006 31.6755 98.9888 29.931C98.9715 28.0568 98.2616 26.7203 96.4414 25.9296C94.178 24.9423 91.5704 24.8219 90.2236 27.2541C89.7846 28.0487 89.1908 29.1605 89.505 30.0555C89.7775 30.8394 89.9496 31.6635 90.0213 32.5277C90.0414 32.7391 90.1647 32.8448 90.3914 32.8448C91.8142 32.8394 93.326 32.8689 94.9267 32.9331ZM82.6073 32.897L88.9886 32.6883C89.015 32.6878 89.041 32.6823 89.065 32.6723C89.0891 32.6623 89.1108 32.6479 89.1289 32.6299C89.1469 32.612 89.1609 32.5909 89.1701 32.5678C89.1793 32.5447 89.1834 32.5202 89.1822 32.4956L89.1693 32.1705C89.1541 31.7632 89.0543 31.3626 88.8756 30.9916C88.697 30.6207 88.4429 30.2866 88.128 30.0086C87.8131 29.7305 87.4436 29.5139 87.0404 29.3712C86.6373 29.2284 86.2085 29.1622 85.7786 29.1765L85.5462 29.1845C84.6787 29.2134 83.8592 29.5674 83.2678 30.1687C82.6764 30.77 82.3614 31.5694 82.3921 32.3913L82.405 32.7164C82.4056 32.7406 82.4112 32.7645 82.4217 32.7867C82.4322 32.8089 82.4472 32.829 82.466 32.8457C82.4848 32.8625 82.5069 32.8757 82.5312 32.8845C82.5554 32.8932 82.5813 32.8975 82.6073 32.897ZM86.566 33.6836L81.8456 33.8C81.5907 33.8063 81.3489 33.9066 81.1731 34.0788C80.9973 34.2511 80.9018 34.4813 80.9076 34.7191L80.9162 35.0361C80.9256 35.3846 81.0088 35.7278 81.161 36.0463C81.3132 36.3648 81.5314 36.6523 81.8031 36.8923C82.0749 37.1324 82.3948 37.3203 82.7447 37.4452C83.0946 37.5702 83.4675 37.6299 83.8422 37.6208L84.7889 37.5967C85.5448 37.5777 86.2617 37.2805 86.7822 36.7702C87.3026 36.26 87.5839 35.5785 87.5643 34.8756L87.5557 34.5585C87.5524 34.4405 87.5241 34.3241 87.4725 34.2163C87.421 34.1084 87.3471 34.011 87.2552 33.9298C87.1633 33.8485 87.0551 33.785 86.9369 33.7427C86.8186 33.7005 86.6926 33.6804 86.566 33.6836ZM77.8008 39.9084C77.8774 39.9012 77.9548 39.9138 78.0246 39.945C78.0944 39.9761 78.1539 40.0245 78.1967 40.085C79.7285 42.2309 81.2446 44.3941 82.7449 46.5747C82.9658 46.8931 83.1982 47.1901 83.442 47.4657C83.8809 47.9634 84.1119 47.8898 84.1348 47.245C84.1735 46.1453 85.0772 45.9005 85.9593 45.5353C86.3494 45.3747 86.7453 45.3052 87.1469 45.3266C87.1942 45.3292 87.2414 45.3213 87.2848 45.3037C87.3282 45.2861 87.3665 45.2592 87.3967 45.2252C87.4269 45.1912 87.4481 45.1511 87.4585 45.108C87.4689 45.0649 87.4683 45.0202 87.4567 44.9774C87.1096 43.6717 86.6205 42.3927 85.9894 41.1405C85.6366 40.4422 84.9567 39.9084 84.0918 39.9365C83.716 39.9499 83.3703 39.8603 83.0548 39.6676C81.6577 38.8087 80.6422 37.9592 80.0082 37.1191C79.9279 37.0121 79.8289 36.9933 79.7113 37.0629C78.5839 37.7077 77.7162 38.5104 77.108 39.471C76.8871 39.8215 76.9933 39.978 77.4264 39.9405L77.8008 39.9084ZM77.1812 40.3178C77.0808 40.2375 76.9904 40.2456 76.9101 40.3419C76.7007 40.5987 76.6878 40.8288 76.8714 41.0322C77.0062 41.1793 77.1898 41.2609 77.4221 41.277C77.6459 41.2904 77.7262 41.1981 77.6631 41.0001C77.5828 40.7432 77.4221 40.5158 77.1812 40.3178ZM89.7201 46.5466C89.264 45.3306 89.5523 43.653 91.2132 43.5526C91.7526 43.5178 92.2947 43.5071 92.8398 43.5205C93.3733 43.5366 93.6229 43.9098 93.9586 44.2188C94.3401 44.5694 94.5022 44.4958 94.4448 43.9981C94.3415 43.1432 92.9 42.3566 92.1298 41.9673C91.4585 41.6329 90.7155 41.4282 89.9008 41.3533C88.9829 41.2676 88.0333 41.083 87.0522 40.7994C86.7109 40.7031 86.6435 40.79 86.85 41.0603C87.7938 42.3151 88.2628 43.7413 88.2571 45.3386C88.2571 45.4884 88.3073 45.6209 88.4077 45.7359C88.7146 46.0971 89.0517 46.4302 89.4189 46.7353C89.7803 47.0376 89.8808 46.9747 89.7201 46.5466ZM93.3007 44.3405C93.1465 44.1813 92.9564 44.0552 92.7413 43.9694C92.5262 43.8836 92.2902 43.8398 92.0469 43.8405C91.8035 43.8411 91.5576 43.8862 91.3231 43.9732C91.0886 44.0601 90.8702 44.1873 90.6803 44.3474C90.2967 44.6706 90.0525 45.1083 90.0015 45.5642C89.9504 46.0201 90.0967 46.4568 90.4081 46.7782C90.5623 46.9374 90.7523 47.0635 90.9675 47.1492C91.1826 47.235 91.4186 47.2789 91.6619 47.2782C91.9052 47.2776 92.1512 47.2325 92.3856 47.1455C92.6201 47.0585 92.8386 46.9314 93.0285 46.7713C93.4121 46.448 93.6563 46.0103 93.7073 45.5545C93.7584 45.0986 93.6121 44.6619 93.3007 44.3405ZM87.0169 46.0594C86.9653 45.9889 86.884 45.9383 86.7776 45.9105C86.6711 45.8827 86.5417 45.8783 86.3966 45.8975C86.2515 45.9168 86.0937 45.9592 85.932 46.0225C85.7704 46.0858 85.6082 46.1687 85.4546 46.2664C85.301 46.3641 85.1591 46.4747 85.0369 46.592C84.9148 46.7093 84.8148 46.8309 84.7427 46.9498C84.6705 47.0688 84.6277 47.1828 84.6166 47.2854C84.6055 47.388 84.6263 47.4771 84.6779 47.5476C84.7295 47.6181 84.8108 47.6687 84.9172 47.6965C85.0237 47.7243 85.1531 47.7287 85.2982 47.7095C85.4433 47.6902 85.6011 47.6478 85.7628 47.5845C85.9244 47.5212 86.0866 47.4383 86.2402 47.3406C86.3938 47.2429 86.5357 47.1322 86.6579 47.015C86.78 46.8977 86.88 46.7761 86.9521 46.6571C87.0243 46.5382 87.0671 46.4242 87.0782 46.3216C87.0893 46.219 87.0685 46.1299 87.0169 46.0594ZM99.2943 51.1942C99.3344 51.2932 99.4076 51.3601 99.5137 51.3949C99.5883 51.4163 99.6529 51.4042 99.7074 51.3587C99.8164 51.2731 99.8106 51.1955 99.6901 51.126L98.9801 50.6965C98.831 50.6056 98.7994 50.6323 98.8855 50.7768C98.9342 50.8597 99.0031 50.924 99.092 50.9694C99.1867 51.023 99.2541 51.0979 99.2943 51.1942Z"
          className="fill-logocolor"
        />
        <path
          d="M108.21 9.99999L105.471 9.82583C105.317 9.81603 105.184 9.92461 105.173 10.0684L105.17 10.1084C105.16 10.2521 105.276 10.3766 105.43 10.3864L108.169 10.5606C108.323 10.5704 108.457 10.4618 108.467 10.318L108.47 10.278C108.481 10.1343 108.364 10.0098 108.21 9.99999Z"
          className="fill-logocolor"
        />
        <path
          d="M104.419 17.0436C105.57 16.8081 106.681 16.9406 107.754 17.4409C107.775 17.4504 107.792 17.4654 107.803 17.484C107.815 17.5025 107.82 17.5239 107.819 17.5453L107.814 17.77C107.809 17.8904 107.75 17.9225 107.638 17.8664C106.668 17.4035 105.64 17.2603 104.553 17.4369C104.415 17.4583 104.343 17.4035 104.338 17.2724L104.333 17.1479C104.333 17.0918 104.362 17.057 104.419 17.0436Z"
          className="fill-logocolor"
        />
        <path
          d="M105.607 18.8393C106.294 18.9305 106.872 18.8657 106.898 18.6945C106.924 18.5234 106.388 18.3107 105.701 18.2195C105.014 18.1283 104.436 18.1931 104.41 18.3643C104.384 18.5355 104.92 18.7481 105.607 18.8393Z"
          className="fill-logocolor"
        />
        <path
          d="M92.1728 26.8729C92.1703 26.8554 92.1752 26.8377 92.1864 26.8235C92.1977 26.8092 92.2144 26.7996 92.2331 26.7967L92.3191 26.7766C92.6567 26.7148 92.9921 26.6591 93.3056 26.6126C93.6192 26.5662 93.9047 26.5299 94.1454 26.506C94.3862 26.4821 94.5773 26.471 94.7078 26.4734C94.8382 26.4757 94.9054 26.4915 94.9052 26.5198L94.9224 26.604C94.9282 26.6309 94.8681 26.6696 94.7456 26.7178C94.6231 26.7661 94.4405 26.8229 94.2083 26.8852C93.9762 26.9474 93.6989 27.0138 93.3925 27.0806C93.086 27.1474 92.7564 27.2132 92.4224 27.2743L92.3363 27.2903C92.3175 27.2939 92.2979 27.2904 92.2818 27.2807C92.2657 27.2709 92.2544 27.2556 92.2503 27.2382L92.1728 26.8729Z"
          className="fill-logocolor"
        />
        <path
          d="M85.5816 30.6865C86.0471 30.5685 86.3972 30.3792 86.3636 30.2637C86.3299 30.1482 85.9253 30.1502 85.4597 30.2682C84.9942 30.3861 84.644 30.5754 84.6777 30.6909C84.7113 30.8064 85.116 30.8044 85.5816 30.6865Z"
          className="fill-logocolor"
        />
        <path
          d="M155.851 75.3092C155.839 75.2812 155.82 75.2564 155.795 75.237C155.771 75.2177 155.741 75.2044 155.71 75.1984C155.678 75.1924 155.645 75.1939 155.614 75.2027C155.583 75.2116 155.555 75.2275 155.533 75.249C152.314 78.2591 148.084 78.9333 143.786 78.0744C141.505 77.6169 140.094 76.3687 138.962 74.4744C138.385 73.5112 138.064 72.6697 137.998 71.9499C137.843 70.2483 137.551 67.4188 138.57 65.8014C141.634 60.9331 149.401 59.8816 154.879 60.5598C155.08 60.5839 155.189 60.5023 155.206 60.315C155.356 58.6494 155.331 56.711 153.041 56.426C150.13 56.0621 147.592 56.7297 145.429 58.4287C143.351 60.0622 140.369 57.911 139.379 56.2013C138.57 54.8046 140.498 53.452 141.591 52.7898C145.989 50.1209 150.692 49.6273 155.817 50.145C161.643 50.7309 164.595 54.5758 164.453 59.9177C164.355 63.685 164.31 67.4188 164.315 71.1192C164.32 73.4831 165.193 73.752 167.474 73.2262C167.502 73.22 167.531 73.2213 167.559 73.23C167.586 73.2387 167.611 73.2543 167.629 73.2752C167.647 73.2961 167.659 73.3214 167.663 73.3482C167.667 73.375 167.662 73.4023 167.65 73.4269C167.228 74.2938 166.897 75.2329 166.316 76.0115C164.865 77.9487 162.694 78.6938 159.806 78.247C157.869 77.9473 156.551 76.9681 155.851 75.3092ZM153.747 71.2275C154.371 70.7941 154.78 70.2041 154.831 69.4737C154.92 68.2001 154.998 66.9011 155.064 65.5766C155.07 65.4482 155.004 65.3773 154.866 65.3639C151.712 65.095 145.584 65.2515 145.95 69.6984C146.286 73.756 151.411 72.861 153.747 71.2275Z"
          className="fill-logocolor"
        />
        <path
          d="M182.035 53.6662C185.362 50.6602 188.455 49.7732 193.017 50.1745C195.099 50.3591 196.536 51.9404 197.793 53.4415C198.496 54.2816 198.926 55.095 199.084 55.8816C199.299 56.9545 199.417 57.9847 199.437 58.972C199.549 64.6978 199.513 70.0811 199.329 75.122C199.299 75.8846 199.054 76.6592 198.438 77.1809C196.39 78.9107 194.114 78.7381 191.992 77.2291C190.943 76.4826 190.719 74.9294 190.689 73.8176C190.597 70.5293 190.552 67.1313 190.555 63.6235C190.558 62.2697 190.43 61.0215 190.172 59.879C189.794 58.1987 188.678 57.4388 186.825 57.5994C184.91 57.7639 182.207 58.7994 182.126 60.8984C181.962 65.0563 181.822 69.5233 181.704 74.2993C181.664 75.9287 180.841 77.1448 179.234 77.9475C176.459 79.3321 174.406 77.2692 173.158 75.2825C173.049 75.1113 172.993 74.9254 172.99 74.7247C172.909 63.6195 172.995 52.5946 172.5 41.5737C172.444 40.2774 172.194 39.0212 172.018 37.7369C172.002 37.6252 172.03 37.5117 172.097 37.4168C172.164 37.3219 172.266 37.2518 172.384 37.2192C174.798 36.5449 178.52 36.284 180.688 37.7971C181.979 38.6961 182.542 40.058 182.375 41.8828C182.02 45.7865 181.846 49.6902 181.855 53.594C181.855 53.6134 181.861 53.6323 181.873 53.6484C181.884 53.6646 181.901 53.6772 181.92 53.6849C181.939 53.6925 181.96 53.6948 181.981 53.6915C182.001 53.6882 182.02 53.6794 182.035 53.6662Z"
          className="fill-logocolor"
        />
      </svg>
    </div>
  );
};

export default Logo;
