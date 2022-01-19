import React, { useState } from "react";
import { Card, Button, Row, Col, TimePicker, Radio, Modal } from "antd";
import DateRangeComponent from "../../molecules/DateRangePicker";
import eoLocale from "date-fns/locale/es";
import { format } from "date-fns";
// import {  } from "../../../assets/svg/icons";
import "./index.less";

function DateRangeFilter() {
  const [startDate, setStartDate] = useState(null);
  const [endtDate, setEndtDate] = useState(null);
  const [searchType, setSearchType] = React.useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dateSelected = (data) => {
    setStartDate(
      format(new Date(data[0].startDate), "dd 'de' MMMM yyyy", {
        locale: eoLocale,
      })
    );
    setEndtDate(
      format(new Date(data[0].endDate), "dd 'de' MMMM yyyy", {
        locale: eoLocale,
      })
    );
  };

  return (
    <div style={{ float: "right" }}>
      <Button onClick={() => setIsModalVisible(true)} style={{borderColor:"#FFFFFF"}}>
        {
          <svg
            width="137"
            height="33"
            viewBox="0 0 137 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9987 21.75C32.1553 21.75 32.3083 21.706 32.4385 21.6236C32.5687 21.5412 32.6702 21.4241 32.7301 21.287C32.79 21.15 32.8057 20.9992 32.7752 20.8537C32.7446 20.7082 32.6692 20.5746 32.5585 20.4697C32.4478 20.3648 32.3067 20.2933 32.1531 20.2644C31.9996 20.2355 31.8404 20.2503 31.6957 20.3071C31.5511 20.3639 31.4274 20.46 31.3405 20.5833C31.2535 20.7067 31.207 20.8517 31.207 21C31.207 21.1989 31.2904 21.3897 31.4389 21.5303C31.5874 21.671 31.7887 21.75 31.9987 21.75ZM35.957 21.75C36.1136 21.75 36.2667 21.706 36.3969 21.6236C36.527 21.5412 36.6285 21.4241 36.6884 21.287C36.7484 21.15 36.764 20.9992 36.7335 20.8537C36.7029 20.7082 36.6275 20.5746 36.5168 20.4697C36.4061 20.3648 36.265 20.2933 36.1115 20.2644C35.9579 20.2355 35.7987 20.2503 35.6541 20.3071C35.5094 20.3639 35.3858 20.46 35.2988 20.5833C35.2118 20.7067 35.1654 20.8517 35.1654 21C35.1654 21.1989 35.2488 21.3897 35.3972 21.5303C35.5457 21.671 35.7471 21.75 35.957 21.75ZM35.957 18.75C36.1136 18.75 36.2667 18.706 36.3969 18.6236C36.527 18.5412 36.6285 18.4241 36.6884 18.287C36.7484 18.15 36.764 17.9992 36.7335 17.8537C36.7029 17.7082 36.6275 17.5746 36.5168 17.4697C36.4061 17.3648 36.265 17.2933 36.1115 17.2644C35.9579 17.2355 35.7987 17.2503 35.6541 17.3071C35.5094 17.3639 35.3858 17.46 35.2988 17.5833C35.2118 17.7067 35.1654 17.8517 35.1654 18C35.1654 18.1989 35.2488 18.3897 35.3972 18.5303C35.5457 18.671 35.7471 18.75 35.957 18.75ZM31.9987 18.75C32.1553 18.75 32.3083 18.706 32.4385 18.6236C32.5687 18.5412 32.6702 18.4241 32.7301 18.287C32.79 18.15 32.8057 17.9992 32.7752 17.8537C32.7446 17.7082 32.6692 17.5746 32.5585 17.4697C32.4478 17.3648 32.3067 17.2933 32.1531 17.2644C31.9996 17.2355 31.8404 17.2503 31.6957 17.3071C31.5511 17.3639 31.4274 17.46 31.3405 17.5833C31.2535 17.7067 31.207 17.8517 31.207 18C31.207 18.1989 31.2904 18.3897 31.4389 18.5303C31.5874 18.671 31.7887 18.75 31.9987 18.75ZM37.5404 9.75H36.7487V9C36.7487 8.80109 36.6653 8.61032 36.5168 8.46967C36.3684 8.32902 36.167 8.25 35.957 8.25C35.7471 8.25 35.5457 8.32902 35.3972 8.46967C35.2488 8.61032 35.1654 8.80109 35.1654 9V9.75H28.832V9C28.832 8.80109 28.7486 8.61032 28.6002 8.46967C28.4517 8.32902 28.2503 8.25 28.0404 8.25C27.8304 8.25 27.629 8.32902 27.4806 8.46967C27.3321 8.61032 27.2487 8.80109 27.2487 9V9.75H26.457C25.8271 9.75 25.2231 9.98705 24.7777 10.409C24.3323 10.831 24.082 11.4033 24.082 12V22.5C24.082 23.0967 24.3323 23.669 24.7777 24.091C25.2231 24.5129 25.8271 24.75 26.457 24.75H37.5404C38.1703 24.75 38.7743 24.5129 39.2197 24.091C39.6651 23.669 39.9154 23.0967 39.9154 22.5V12C39.9154 11.4033 39.6651 10.831 39.2197 10.409C38.7743 9.98705 38.1703 9.75 37.5404 9.75ZM38.332 22.5C38.332 22.6989 38.2486 22.8897 38.1002 23.0303C37.9517 23.171 37.7503 23.25 37.5404 23.25H26.457C26.2471 23.25 26.0457 23.171 25.8972 23.0303C25.7488 22.8897 25.6654 22.6989 25.6654 22.5V15.75H38.332V22.5ZM38.332 14.25H25.6654V12C25.6654 11.8011 25.7488 11.6103 25.8972 11.4697C26.0457 11.329 26.2471 11.25 26.457 11.25H27.2487V12C27.2487 12.1989 27.3321 12.3897 27.4806 12.5303C27.629 12.671 27.8304 12.75 28.0404 12.75C28.2503 12.75 28.4517 12.671 28.6002 12.5303C28.7486 12.3897 28.832 12.1989 28.832 12V11.25H35.1654V12C35.1654 12.1989 35.2488 12.3897 35.3972 12.5303C35.5457 12.671 35.7471 12.75 35.957 12.75C36.167 12.75 36.3684 12.671 36.5168 12.5303C36.6653 12.3897 36.7487 12.1989 36.7487 12V11.25H37.5404C37.7503 11.25 37.9517 11.329 38.1002 11.4697C38.2486 11.6103 38.332 11.8011 38.332 12V14.25ZM28.0404 18.75C28.1969 18.75 28.35 18.706 28.4802 18.6236C28.6104 18.5412 28.7119 18.4241 28.7718 18.287C28.8317 18.15 28.8474 17.9992 28.8168 17.8537C28.7863 17.7082 28.7109 17.5746 28.6002 17.4697C28.4894 17.3648 28.3484 17.2933 28.1948 17.2644C28.0412 17.2355 27.8821 17.2503 27.7374 17.3071C27.5927 17.3639 27.4691 17.46 27.3821 17.5833C27.2951 17.7067 27.2487 17.8517 27.2487 18C27.2487 18.1989 27.3321 18.3897 27.4806 18.5303C27.629 18.671 27.8304 18.75 28.0404 18.75ZM28.0404 21.75C28.1969 21.75 28.35 21.706 28.4802 21.6236C28.6104 21.5412 28.7119 21.4241 28.7718 21.287C28.8317 21.15 28.8474 20.9992 28.8168 20.8537C28.7863 20.7082 28.7109 20.5746 28.6002 20.4697C28.4894 20.3648 28.3484 20.2933 28.1948 20.2644C28.0412 20.2355 27.8821 20.2503 27.7374 20.3071C27.5927 20.3639 27.4691 20.46 27.3821 20.5833C27.2951 20.7067 27.2487 20.8517 27.2487 21C27.2487 21.1989 27.3321 21.3897 27.4806 21.5303C27.629 21.671 27.8304 21.75 28.0404 21.75Z"
              fill="#313131"
            />
            <path
              d="M61.085 16.806C61.701 16.806 62.1443 16.659 62.415 16.365C62.6857 16.071 62.821 15.6603 62.821 15.133C62.821 14.8997 62.786 14.6873 62.716 14.496C62.646 14.3047 62.5387 14.1413 62.394 14.006C62.254 13.866 62.0743 13.7587 61.855 13.684C61.6403 13.6093 61.3837 13.572 61.085 13.572H59.853V16.806H61.085ZM61.085 11.801C61.8037 11.801 62.4197 11.8873 62.933 12.06C63.451 12.228 63.8757 12.4613 64.207 12.76C64.543 13.0587 64.7903 13.411 64.949 13.817C65.1077 14.223 65.187 14.6617 65.187 15.133C65.187 15.6417 65.1053 16.1083 64.942 16.533C64.7787 16.9577 64.529 17.3217 64.193 17.625C63.857 17.9283 63.43 18.1663 62.912 18.339C62.3987 18.507 61.7897 18.591 61.085 18.591H59.853V22H57.487V11.801H61.085ZM68.9143 14.629C69.4649 14.629 69.9666 14.7153 70.4193 14.888C70.8719 15.0607 71.2593 15.308 71.5813 15.63C71.9079 15.952 72.1599 16.344 72.3373 16.806C72.5193 17.2633 72.6103 17.779 72.6103 18.353C72.6103 18.9317 72.5193 19.4543 72.3373 19.921C72.1599 20.383 71.9079 20.7773 71.5813 21.104C71.2593 21.426 70.8719 21.6757 70.4193 21.853C69.9666 22.0257 69.4649 22.112 68.9143 22.112C68.3589 22.112 67.8526 22.0257 67.3953 21.853C66.9426 21.6757 66.5506 21.426 66.2193 21.104C65.8926 20.7773 65.6383 20.383 65.4563 19.921C65.2789 19.4543 65.1903 18.9317 65.1903 18.353C65.1903 17.779 65.2789 17.2633 65.4563 16.806C65.6383 16.344 65.8926 15.952 66.2193 15.63C66.5506 15.308 66.9426 15.0607 67.3953 14.888C67.8526 14.7153 68.3589 14.629 68.9143 14.629ZM68.9143 20.502C69.4136 20.502 69.7799 20.327 70.0133 19.977C70.2513 19.6223 70.3703 19.0857 70.3703 18.367C70.3703 17.6483 70.2513 17.114 70.0133 16.764C69.7799 16.414 69.4136 16.239 68.9143 16.239C68.4009 16.239 68.0253 16.414 67.7873 16.764C67.5493 17.114 67.4303 17.6483 67.4303 18.367C67.4303 19.0857 67.5493 19.6223 67.7873 19.977C68.0253 20.327 68.4009 20.502 68.9143 20.502ZM75.453 15.861C75.677 15.469 75.9337 15.161 76.223 14.937C76.517 14.713 76.853 14.601 77.231 14.601C77.5577 14.601 77.8237 14.678 78.029 14.832L77.889 16.428C77.8657 16.5307 77.826 16.6007 77.77 16.638C77.7187 16.6753 77.6464 16.694 77.553 16.694C77.5157 16.694 77.4667 16.6917 77.406 16.687C77.3454 16.6823 77.2824 16.6777 77.217 16.673C77.1517 16.6637 77.084 16.6567 77.014 16.652C76.9487 16.6427 76.888 16.638 76.832 16.638C76.5147 16.638 76.2604 16.722 76.069 16.89C75.8824 17.058 75.7237 17.2913 75.593 17.59V22H73.423V14.741H74.711C74.8184 14.741 74.907 14.7503 74.977 14.769C75.0517 14.7877 75.1124 14.818 75.159 14.86C75.2104 14.8973 75.2477 14.9487 75.271 15.014C75.299 15.0793 75.3224 15.1587 75.341 15.252L75.453 15.861ZM81.7009 22V16.232L81.2249 16.134C81.0615 16.0967 80.9285 16.0383 80.8259 15.959C80.7279 15.8797 80.6789 15.763 80.6789 15.609V14.755H81.7009V14.342C81.7009 13.9267 81.7662 13.551 81.8969 13.215C82.0322 12.879 82.2235 12.592 82.4709 12.354C82.7229 12.116 83.0285 11.9317 83.3879 11.801C83.7472 11.6703 84.1555 11.605 84.6129 11.605C84.7902 11.605 84.9535 11.6167 85.1029 11.64C85.2522 11.6587 85.4085 11.6913 85.5719 11.738L85.5299 12.795C85.5252 12.8697 85.5065 12.9327 85.4739 12.984C85.4412 13.0307 85.3969 13.0703 85.3409 13.103C85.2895 13.131 85.2335 13.152 85.1729 13.166C85.1122 13.18 85.0515 13.187 84.9909 13.187C84.7995 13.187 84.6292 13.2057 84.4799 13.243C84.3305 13.2803 84.2045 13.348 84.1019 13.446C84.0039 13.5393 83.9292 13.6653 83.8779 13.824C83.8265 13.978 83.8009 14.174 83.8009 14.412V14.755H85.5019V16.239H83.8709V22H81.7009ZM90.3734 17.499C90.3734 17.3263 90.3501 17.1583 90.3034 16.995C90.2614 16.8317 90.1891 16.687 90.0864 16.561C89.9884 16.4303 89.8578 16.3253 89.6944 16.246C89.5311 16.1667 89.3328 16.127 89.0994 16.127C88.6888 16.127 88.3668 16.246 88.1334 16.484C87.9001 16.7173 87.7461 17.0557 87.6714 17.499H90.3734ZM87.6434 18.759C87.7134 19.3657 87.8978 19.8067 88.1964 20.082C88.4951 20.3527 88.8801 20.488 89.3514 20.488C89.6034 20.488 89.8204 20.4577 90.0024 20.397C90.1844 20.3363 90.3454 20.2687 90.4854 20.194C90.6301 20.1193 90.7608 20.0517 90.8774 19.991C90.9988 19.9303 91.1248 19.9 91.2554 19.9C91.4281 19.9 91.5588 19.963 91.6474 20.089L92.2774 20.866C92.0534 21.1227 91.8108 21.3327 91.5494 21.496C91.2928 21.6547 91.0268 21.7807 90.7514 21.874C90.4808 21.9627 90.2078 22.0233 89.9324 22.056C89.6618 22.0933 89.4028 22.112 89.1554 22.112C88.6468 22.112 88.1684 22.0303 87.7204 21.867C87.2771 21.699 86.8874 21.4517 86.5514 21.125C86.2201 20.7983 85.9564 20.3923 85.7604 19.907C85.5691 19.4217 85.4734 18.857 85.4734 18.213C85.4734 17.7277 85.5551 17.268 85.7184 16.834C85.8864 16.4 86.1244 16.0197 86.4324 15.693C86.7451 15.3663 87.1208 15.1073 87.5594 14.916C88.0028 14.7247 88.5021 14.629 89.0574 14.629C89.5381 14.629 89.9768 14.7037 90.3734 14.853C90.7748 15.0023 91.1178 15.2193 91.4024 15.504C91.6918 15.7887 91.9158 16.1387 92.0744 16.554C92.2378 16.9647 92.3194 17.4313 92.3194 17.954C92.3194 18.1173 92.3124 18.2503 92.2984 18.353C92.2844 18.4557 92.2588 18.5373 92.2214 18.598C92.1841 18.6587 92.1328 18.7007 92.0674 18.724C92.0068 18.7473 91.9274 18.759 91.8294 18.759H87.6434ZM98.4593 16.463C98.394 16.5423 98.331 16.6053 98.2703 16.652C98.2096 16.6987 98.1233 16.722 98.0113 16.722C97.904 16.722 97.806 16.6963 97.7173 16.645C97.6333 16.5937 97.5376 16.5377 97.4303 16.477C97.323 16.4117 97.197 16.3533 97.0523 16.302C96.9076 16.2507 96.728 16.225 96.5133 16.225C96.2473 16.225 96.0163 16.274 95.8203 16.372C95.629 16.47 95.4703 16.61 95.3443 16.792C95.2183 16.974 95.125 17.198 95.0643 17.464C95.0036 17.7253 94.9733 18.0217 94.9733 18.353C94.9733 19.0483 95.1063 19.5827 95.3723 19.956C95.643 20.3293 96.014 20.516 96.4853 20.516C96.7373 20.516 96.9356 20.4857 97.0803 20.425C97.2296 20.3597 97.3556 20.2897 97.4583 20.215C97.561 20.1357 97.6543 20.0633 97.7383 19.998C97.827 19.9327 97.9366 19.9 98.0673 19.9C98.24 19.9 98.3706 19.963 98.4593 20.089L99.0893 20.866C98.8653 21.1227 98.6296 21.3327 98.3823 21.496C98.135 21.6547 97.8806 21.7807 97.6193 21.874C97.3626 21.9627 97.1036 22.0233 96.8423 22.056C96.581 22.0933 96.3266 22.112 96.0793 22.112C95.636 22.112 95.2113 22.028 94.8053 21.86C94.404 21.692 94.0493 21.4493 93.7413 21.132C93.438 20.81 93.1953 20.4157 93.0133 19.949C92.836 19.4823 92.7473 18.9503 92.7473 18.353C92.7473 17.8303 92.8243 17.3427 92.9783 16.89C93.137 16.4327 93.368 16.0383 93.6713 15.707C93.9793 15.371 94.3573 15.1073 94.8053 14.916C95.258 14.7247 95.7806 14.629 96.3733 14.629C96.9426 14.629 97.442 14.72 97.8713 14.902C98.3006 15.084 98.688 15.35 99.0333 15.7L98.4593 16.463ZM101.824 15.378C102.085 15.154 102.368 14.9743 102.671 14.839C102.979 14.699 103.345 14.629 103.77 14.629C104.167 14.629 104.517 14.699 104.82 14.839C105.128 14.9743 105.387 15.1657 105.597 15.413C105.807 15.6557 105.966 15.9473 106.073 16.288C106.18 16.624 106.234 16.9903 106.234 17.387V22H104.064V17.387C104.064 17.0323 103.982 16.757 103.819 16.561C103.656 16.3603 103.415 16.26 103.098 16.26C102.86 16.26 102.636 16.3113 102.426 16.414C102.221 16.512 102.02 16.6473 101.824 16.82V22H99.6539V11.521H101.824V15.378ZM111.103 19.046C110.669 19.0647 110.312 19.102 110.032 19.158C109.752 19.214 109.531 19.284 109.367 19.368C109.204 19.452 109.09 19.5477 109.024 19.655C108.964 19.7623 108.933 19.879 108.933 20.005C108.933 20.2523 109.001 20.4273 109.136 20.53C109.272 20.628 109.47 20.677 109.731 20.677C110.011 20.677 110.256 20.628 110.466 20.53C110.676 20.432 110.889 20.2733 111.103 20.054V19.046ZM107.197 15.749C107.636 15.3617 108.121 15.0747 108.653 14.888C109.19 14.6967 109.764 14.601 110.375 14.601C110.814 14.601 111.208 14.6733 111.558 14.818C111.913 14.958 112.212 15.1563 112.454 15.413C112.702 15.665 112.891 15.966 113.021 16.316C113.152 16.666 113.217 17.0487 113.217 17.464V22H112.223C112.018 22 111.862 21.972 111.754 21.916C111.652 21.86 111.565 21.7433 111.495 21.566L111.341 21.167C111.159 21.321 110.984 21.4563 110.816 21.573C110.648 21.6897 110.473 21.79 110.291 21.874C110.114 21.9533 109.923 22.0117 109.717 22.049C109.517 22.091 109.293 22.112 109.045 22.112C108.714 22.112 108.413 22.07 108.142 21.986C107.872 21.8973 107.641 21.769 107.449 21.601C107.263 21.433 107.118 21.2253 107.015 20.978C106.913 20.726 106.861 20.4367 106.861 20.11C106.861 19.8487 106.927 19.585 107.057 19.319C107.188 19.0483 107.414 18.8033 107.736 18.584C108.058 18.36 108.492 18.1733 109.038 18.024C109.584 17.8747 110.273 17.7907 111.103 17.772V17.464C111.103 17.0393 111.015 16.7337 110.837 16.547C110.665 16.3557 110.417 16.26 110.095 16.26C109.839 16.26 109.629 16.288 109.465 16.344C109.302 16.4 109.155 16.463 109.024 16.533C108.898 16.603 108.775 16.666 108.653 16.722C108.532 16.778 108.387 16.806 108.219 16.806C108.07 16.806 107.944 16.7687 107.841 16.694C107.739 16.6193 107.655 16.5307 107.589 16.428L107.197 15.749Z"
              fill="#313131"
            />
          </svg>
        }
      </Button>
      <Modal
        className="search-date-range"
        closable={false}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        width={1000}
      >
        <Row gutter={20}>
          <Col className="gutter-row" span={16}>
            <Card
              style={{
                width: "635px",
                height: "682px",
                left: "0px",
                top: "14px",
              }}
            >
              <p>
                Buscar por:
                <Radio.Group
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => setSearchType(e.target.value)}
                  value={searchType}
                >
                  <Radio value={1}>Fecha de presentación</Radio>
                  <Radio value={2}>Fecha de origen</Radio>
                </Radio.Group>
              </p>

              <DateRangeComponent
                className="width-card"
                dateSelected={dateSelected}
              />

              <p>
                <b>Desde:</b> {startDate}
              </p>
              <p>
                <b>Hasta:</b> {endtDate}
              </p>

              <Button type="primary">Aplicar</Button>
              <Button type="text" style={{ marginLeft: "20px" }}>
                Limpiar filtros
              </Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
            <Card
              style={{
                width: "260px",
                height: "682px",
                top: "14px",
              }}
            >
              <div style={{ marginTop: "95px", left: "12px" }}>
                <p>
                  <b>Desde:</b>{" "}
                  <TimePicker
                    style={{ borderRadius: "8px", height: "45px" }}
                    type="time"
                    onChange={(value) => console.log(value)}
                    placeholder="00:00:00"
                  />
                </p>
                <p>
                  <b>Hasta:</b>{" "}
                  <TimePicker
                    style={{ borderRadius: "8px", height: "45px" }}
                    type="time"
                    onChange={(value) => console.log(value)}
                    placeholder="00:00:00"
                  />
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default DateRangeFilter;
