import React, { SVGProps } from "react";
import { Spinner } from "zmp-ui";

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.3728 25.6778C7.76148 25.6778 2.38477 20.3011 2.38477 13.6898C2.38477 7.07855 7.76148 1.70184 14.3728 1.70184C20.9841 1.70184 26.3608 7.08178 26.3608 13.6898C26.3608 20.2979 20.9841 25.6778 14.3728 25.6778Z"
        fill="url(#paint0_linear_2243_5851)"
      />
      <path
        d="M12.465 17.827H12.4666C12.7151 17.8269 12.9534 17.7282 13.129 17.5525C13.129 17.5525 13.129 17.5525 13.1291 17.5525L19.9974 10.6842C20.0861 10.5981 20.1569 10.4952 20.2056 10.3817C20.2548 10.2673 20.2806 10.1444 20.2817 10.02C20.2828 9.89556 20.2591 9.77218 20.2119 9.65703L19.9806 9.7517L20.2119 9.65703C20.1648 9.54188 20.0953 9.43727 20.0073 9.34929C19.9193 9.26132 19.8147 9.19174 19.6995 9.14463C19.5844 9.09752 19.461 9.07381 19.3366 9.0749C19.2122 9.07598 19.0892 9.10182 18.9749 9.15093C18.8613 9.19972 18.7585 9.27051 18.6724 9.3592L12.4715 15.5595L10.3933 13.4472C10.31 13.3541 10.209 13.2786 10.0962 13.2251C9.98102 13.1705 9.85598 13.14 9.72865 13.1354C9.60133 13.1308 9.4744 13.1522 9.35564 13.1983C9.23687 13.2444 9.12875 13.3143 9.0379 13.4036C8.94705 13.4929 8.87537 13.5998 8.82724 13.7178L9.05871 13.8123L8.82724 13.7178C8.77911 13.8358 8.75554 13.9623 8.75798 14.0897C8.76042 14.2171 8.78882 14.3426 8.84143 14.4587C8.89303 14.5725 8.96686 14.6748 9.05855 14.7596L11.8016 17.5459L11.9802 17.3709L11.802 17.5463L11.802 17.5462C11.8885 17.6344 11.9915 17.7046 12.1052 17.7527C12.2191 17.801 12.3414 17.8262 12.465 17.827Z"
        fill="white"
        stroke="white"
        stroke-width="0.5"
      />
      <path
        d="M14.3747 3.15565C20.193 3.15565 24.9089 7.87155 24.9089 13.6899C24.9089 19.5082 20.193 24.2241 14.3747 24.2241C8.55636 24.2241 3.84046 19.5082 3.84046 13.6899C3.84046 7.87155 8.55636 3.15565 14.3747 3.15565ZM14.3747 0.244873C6.96075 0.244873 0.929688 6.27594 0.929688 13.6899C0.929688 21.1038 6.96075 27.1349 14.3747 27.1349C21.7886 27.1349 27.8197 21.1038 27.8197 13.6899C27.8197 6.27594 21.7886 0.244873 14.3747 0.244873Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2243_5851"
          x1="14.3724"
          y1="39.4178"
          x2="14.3724"
          y2="2.46702"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#11888F" />
          <stop offset="0.00143105" stop-color="#11888F" />
          <stop offset="0.2913" stop-color="#1FACA2" />
          <stop offset="0.5629" stop-color="#29C6AF" />
          <stop offset="0.8071" stop-color="#2FD6B7" />
          <stop offset="1" stop-color="#31DBBA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconError(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7385 26.8994C6.32738 26.8994 0.294922 20.8669 0.294922 13.4558C0.294922 6.0446 6.32738 0.012146 13.7385 0.012146C21.1497 0.012146 27.1821 6.0446 27.1821 13.4558C27.1821 20.8669 21.1497 26.8994 13.7385 26.8994Z"
        fill="url(#paint0_linear_2243_7961)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.53188 13.4558C1.53188 20.1778 7.00677 25.6584 13.7385 25.6584C20.4703 25.6584 25.9452 20.1778 25.9452 13.4558C25.9452 6.73373 20.4703 1.25309 13.7385 1.25309C7.00677 1.25309 1.53188 6.73372 1.53188 13.4558ZM0.294922 13.4558C0.294922 20.8669 6.32738 26.8994 13.7385 26.8994C21.1497 26.8994 27.1821 20.8669 27.1821 13.4558C27.1821 6.0446 21.1497 0.012146 13.7385 0.012146C6.32738 0.012146 0.294922 6.0446 0.294922 13.4558Z"
        fill="white"
        fill-opacity="0.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.05714 7.324C8.703 6.66461 9.75013 6.66461 10.396 7.324L19.7178 16.8412C20.3637 17.5006 20.3637 18.5697 19.7178 19.2291C19.072 19.8885 18.0248 19.8885 17.379 19.2291L8.05714 9.71186C7.41129 9.05247 7.41129 7.98339 8.05714 7.324Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.7173 7.32401C20.3632 7.9834 20.3632 9.05248 19.7173 9.71187L10.3955 19.2291C9.74962 19.8885 8.70249 19.8885 8.05663 19.2291C7.41078 18.5697 7.41078 17.5006 8.05664 16.8412L17.3785 7.32401C18.0243 6.66462 19.0714 6.66462 19.7173 7.32401Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2243_7961"
          x1="6.19238"
          y1="26.8994"
          x2="19.4103"
          y2="1.97657"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ED0A0A" />
          <stop offset="1" stop-color="#FF3D00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function IconPayment() {
  return (
    <svg
      width="55"
      height="44"
      viewBox="0 0 55 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.0625 0.455811H8.36029C3.89836 0.455811 0.28125 4.07292 0.28125 8.53485V35.465C0.28125 39.9269 3.89836 43.544 8.36029 43.544H46.0625C50.5244 43.544 54.1415 39.9269 54.1415 35.465V8.53485C54.1415 4.07292 50.5244 0.455811 46.0625 0.455811Z"
        fill="url(#paint0_linear_2243_5847)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.1415 16.6138H0.28125V11.2278H54.1415V16.6138Z"
        fill="url(#paint1_linear_2243_5847)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.66797 30.0789C5.66797 28.5916 6.87368 27.3859 8.36098 27.3859H24.5191C26.0064 27.3859 27.2121 28.5916 27.2121 30.0789C27.2121 31.5663 26.0064 32.772 24.5191 32.772H8.36098C6.87368 32.772 5.66797 31.5663 5.66797 30.0789Z"
        fill="url(#paint2_linear_2243_5847)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2243_5847"
          x1="-2.67574"
          y1="48.2728"
          x2="24.3483"
          y2="-2.31466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1975FF" />
          <stop offset="0.0909" stop-color="#2C81FE" />
          <stop offset="0.7229" stop-color="#AFD0FB" />
          <stop offset="1" stop-color="#E4F0F9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2243_5847"
          x1="27.2095"
          y1="9.79105"
          x2="27.2095"
          y2="18.444"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F3F8FF" />
          <stop offset="0.012" stop-color="#EEF5FF" />
          <stop offset="0.1644" stop-color="#B3D1FF" />
          <stop offset="0.3112" stop-color="#81B3FF" />
          <stop offset="0.4488" stop-color="#5B9CFF" />
          <stop offset="0.5751" stop-color="#408CFF" />
          <stop offset="0.6862" stop-color="#2F82FF" />
          <stop offset="0.7702" stop-color="#297EFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2243_5847"
          x1="16.4406"
          y1="25.9205"
          x2="16.4406"
          y2="33.9605"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F3F8FF" />
          <stop offset="0.013" stop-color="#EEF5FF" />
          <stop offset="0.1771" stop-color="#B3D1FF" />
          <stop offset="0.3353" stop-color="#81B3FF" />
          <stop offset="0.4836" stop-color="#5B9CFF" />
          <stop offset="0.6198" stop-color="#408CFF" />
          <stop offset="0.7395" stop-color="#2F82FF" />
          <stop offset="0.8299" stop-color="#297EFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconPaymentLoading() {
  return (
    <div className="[&_.zaui-spinner]:w-[100px] [&_.zaui-spinner]:h-[100px] [&_.zaui-spinner-logo]:flex [&_.zaui-spinner-logo]:justify-center [&_.zaui-spinner-logo]:items-center">
      <Spinner logo={<IconPayment />}></Spinner>
    </div>
  );
}

export function IconPaymentSuccess() {
  return (
    <div
      className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(201, 220, 247, 0.12) 0.59%, #8DAAE733 100%)",
      }}
    >
      <div className="relative">
        <IconPayment />
        <IconCheck className="absolute -top-3.5 -right-3.5" />
      </div>
    </div>
  );
}

export function IconPaymentFail() {
  return (
    <div
      className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(201, 220, 247, 0.12) 0.59%, #8DAAE733 100%)",
      }}
    >
      <div className="relative">
        <IconPayment />
        <IconError className="absolute -top-3.5 -right-3.5" />
      </div>
    </div>
  );
}
