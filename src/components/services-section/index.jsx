import React from "react";
import "./styles.css";

const ServicesSection = () => {
  return (
    <section className="services-wrapper">
      <div className="container">
        <div className="text-wrapper">
          <p className="services-cards">Наши Услуги</p>
          <p className="services-types">Виды услуг которые мы предоставляем</p>
        </div>
        <div className="services-cards-wrapper">
          <AdaptiveImage />
          <div className="services-text">
            <p className="services">Веб-Приложения</p>
            <p className="services-title">Реактивные Адаптивные Сайты </p>
            <p className="services-subtitle">
              21 век интернет стало решением введения бизнеса как говорится если
              нету веб-сайта то и нету и бизнеса но даже если оно есть о них
              плохие отзывы. Решение за нами!
            </p>
            <button className="services-btn">Подробнее</button>
          </div>
        </div>
        <div className="services-cards-wrapper reversed">
          <DevelopmentImage />
          <div className="services-text">
            <p className="services">Разработка</p>
            <p className="services-title">Сложные системы разработки</p>
            <p className="services-subtitle">
              Система разработки сложных платформ,маркетплейсов и программ под
              нужды клиентов.Мы создаем их улучшаем и делаем профессиональные
              платформы
            </p>
            <button className="services-btn">Написать нам</button>
          </div>
        </div>
        <div className="services-cards-wrapper">
          <div className="phones-img">
            <PhonesImage />
          </div>
          <div className="services-text">
            <p className="services">Приложения</p>
            <p className="services-title">А также iOS и Android Разработка</p>
            <p className="services-subtitle">
              Иметь приложение это плюс для твоей деятельности. Мы создаем и
              дорабатываем нативные и кроссплатформенные приложения под iOS и
              Android.
            </p>
            <button className="services-btn">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

function AdaptiveImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 861 612"
    >
      <g filter="url(#filter0_f_1128_1631)">
        <ellipse
          cx="565.057"
          cy="294.353"
          fill="#519BEE"
          fillOpacity="0.15"
          rx="199.607"
          ry="197.566"
          transform="rotate(-20.017 565.057 294.353)"
        ></ellipse>
      </g>
      <g filter="url(#filter1_f_1128_1631)">
        <ellipse
          cx="265.124"
          cy="347.828"
          fill="#516CEE"
          fillOpacity="0.15"
          rx="169.23"
          ry="167.499"
          transform="rotate(-20.017 265.124 347.828)"
        ></ellipse>
      </g>
      <path
        fill="url(#paint0_linear_1128_1631)"
        d="M166.76 102.212c0-6.258 3.762-8.791 6.772-9.685 1.254-.373 2.633-.745 6.396-.373l297.215 66.895s10.664 1.94 16.177 5.215c4.891 2.906 4.891 13.037 4.891 13.037l6.396 216.574-339.352-1.117c.502-94.241 1.505-284.288 1.505-290.546z"
      ></path>
      <path
        fill="#15161A"
        d="M166.757 102.787c0-5.063 3.508-7.817 5.262-8.562-3.383 2.606-4.134 5.956-4.134 8.562l-2.255 290.347h-1.879c1.002-94.673 3.006-285.285 3.006-290.347z"
      ></path>
      <path
        fill="#15161A"
        d="M164.879 392.392H163v37.827c0 9.642 9.27 11.002 13.529 10.755-8.418.297-11.274-5.934-11.65-8.901v-39.681z"
      ></path>
      <path
        fill="url(#paint1_linear_1128_1631)"
        d="M504.608 393.505l-339.728-1.113v38.94c0 6.527 6.013 9.642 10.147 9.642 4.133 0 304.327-10.013 316.052-10.013 11.725 0 14.155-6.923 13.905-10.384l-.376-27.072z"
      ></path>
      <path
        fill="url(#paint2_linear_1128_1631)"
        d="M218.118 347.633c-.021-2.295 2.177-4.35 4.523-4.229l243.616 12.644c1.741.09 2.988 1.378 2.988 3.084v2.607c0 2.268-2.157 4.292-4.477 4.2l-243.566-9.617c-1.751-.069-3.019-1.346-3.034-3.056l-.05-5.633z"
      ></path>
      <path
        fill="url(#paint3_linear_1128_1631)"
        d="M218.009 373.668c-.063-2.295 2.096-4.391 4.443-4.313l243.81 8.092c1.742.058 3.013 1.322 3.045 3.028l.049 2.606c.042 2.268-2.077 4.332-4.398 4.283l-243.703-5.067c-1.752-.036-3.044-1.289-3.091-2.998l-.155-5.631z"
      ></path>
      <path
        fill="url(#paint4_linear_1128_1631)"
        d="M325.429 165.496c0-4.208 3.852-7.362 7.977-6.532l89.479 18.006a6.663 6.663 0 015.344 6.3l5.018 144.237c.139 3.996-3.249 7.214-7.233 6.869l-94.497-8.175a6.663 6.663 0 01-6.088-6.638V165.496z"
      ></path>
      <path
        fill="url(#paint5_linear_1128_1631)"
        d="M413.967 90.457c-.004-3.806 3.533-6.628 7.244-5.778l134.11 30.71a5.923 5.923 0 014.599 5.625l5.922 237.325a5.923 5.923 0 01-5.872 6.07l-139.761 1.161a5.923 5.923 0 01-5.971-5.916l-.271-269.197z"
      ></path>
      <path
        fill="url(#paint6_linear_1128_1631)"
        d="M419.787 98.094c-.004-3.815 3.547-6.64 7.263-5.776l122.728 28.52a5.92 5.92 0 014.58 5.622l5.494 223.326a5.92 5.92 0 01-5.863 6.067l-127.922 1.226a5.923 5.923 0 01-5.979-5.915l-.301-253.07z"
      ></path>
      <path
        fill="url(#paint7_linear_1128_1631)"
        d="M427.745 277.789c-.006-1.541 1.418-2.864 2.973-2.762l124.778 8.211c1.214.08 2.097 1.017 2.095 2.22l-.006 2.466c-.003 1.526-1.406 2.835-2.947 2.75l-124.76-6.88c-1.22-.067-2.116-1.001-2.12-2.208l-.013-3.797z"
      ></path>
      <path
        fill="url(#paint8_linear_1128_1631)"
        d="M427.667 296.434c-.016-1.536 1.394-2.879 2.947-2.808l124.841 5.69c1.22.055 2.115.979 2.118 2.186l.009 2.884c.004 1.523-1.388 2.85-2.929 2.791l-124.812-4.762c-1.221-.046-2.123-.963-2.136-2.169l-.038-3.812z"
      ></path>
      <path
        fill="url(#paint9_linear_1128_1631)"
        d="M489.077 153.872a4.521 4.521 0 015.372-4.385l57.787 11.069a4.52 4.52 0 013.67 4.403l.771 92.761a4.521 4.521 0 01-4.879 4.545l-59.759-4.742a4.522 4.522 0 01-4.163-4.562l1.201-99.089z"
      ></path>
      <path
        fill="url(#paint10_linear_1128_1631)"
        d="M428.038 203.771a2.512 2.512 0 012.773-2.519l49.097 5.128a2.513 2.513 0 012.251 2.478l.025 3.065a2.511 2.511 0 01-2.753 2.521l-49.094-4.74a2.511 2.511 0 01-2.27-2.479l-.029-3.454z"
      ></path>
      <path
        fill="url(#paint11_linear_1128_1631)"
        d="M428.148 219.04a2.511 2.511 0 012.761-2.532l49.12 4.904a2.512 2.512 0 012.262 2.467l.039 3.065a2.512 2.512 0 01-2.741 2.534l-49.115-4.516a2.511 2.511 0 01-2.282-2.469l-.044-3.453z"
      ></path>
      <path
        fill="url(#paint12_linear_1128_1631)"
        d="M426.76 172.551a2.51 2.51 0 012.854-2.509l49.935 6.871a2.511 2.511 0 012.169 2.467l.051 6.1a2.513 2.513 0 01-2.817 2.514l-49.928-6.101a2.511 2.511 0 01-2.207-2.472l-.057-6.87z"
      ></path>
      <path
        fill="url(#paint13_linear_1128_1631)"
        d="M470.073 317.913a2.511 2.511 0 012.6-2.479l49.472 1.746a2.513 2.513 0 012.423 2.461l.12 6.092a2.512 2.512 0 01-2.581 2.561l-49.672-1.37a2.513 2.513 0 01-2.443-2.542l.081-6.469z"
      ></path>
      <path
        fill="url(#paint14_linear_1128_1631)"
        d="M428.458 234.887a2.81 2.81 0 013.017-2.773l29.106 2.154a2.81 2.81 0 012.602 2.83l-.036 3.567a2.81 2.81 0 01-2.997 2.775l-29.109-1.941a2.81 2.81 0 01-2.623-2.833l.04-3.779z"
      ></path>
      <path
        fill="url(#paint15_linear_1128_1631)"
        d="M216.107 242.452a3.701 3.701 0 014.117-3.678l72.282 8.157a3.702 3.702 0 013.286 3.678v4.518a3.7 3.7 0 01-4.087 3.681l-72.283-7.586a3.7 3.7 0 01-3.315-3.681v-5.089z"
      ></path>
      <path
        fill="url(#paint16_linear_1128_1631)"
        d="M216.079 264.952a3.702 3.702 0 014.1-3.697l72.319 7.827a3.703 3.703 0 013.303 3.663l.021 4.518a3.702 3.702 0 01-4.071 3.7l-72.316-7.256a3.7 3.7 0 01-3.332-3.666l-.024-5.089z"
      ></path>
      <path
        fill="url(#paint17_linear_1128_1631)"
        d="M215.749 290.11a3.701 3.701 0 014.005-3.618l38.319 3.167a3.702 3.702 0 013.396 3.759l-.091 4.824a3.7 3.7 0 01-3.978 3.621l-38.326-2.884a3.702 3.702 0 01-3.423-3.762l.098-5.107z"
      ></path>
      <path
        fill="url(#paint18_linear_1128_1631)"
        d="M216.208 196.433a3.702 3.702 0 014.237-3.662l73.495 10.735a3.702 3.702 0 013.166 3.663v8.988a3.7 3.7 0 01-4.18 3.67l-73.496-9.6a3.7 3.7 0 01-3.221-3.67l-.001-10.124z"
      ></path>
      <path
        fill="url(#paint19_linear_1128_1631)"
        d="M546.343 77.082c.013-3.931 3.809-6.741 7.573-5.606l65.459 19.742a5.877 5.877 0 014.18 5.596l.967 192.077a5.877 5.877 0 01-5.876 5.907l-67.168.003a5.877 5.877 0 01-5.877-5.898l.742-211.82z"
      ></path>
      <path
        fill="url(#paint20_linear_1128_1631)"
        d="M549.429 82.402c-.01-3.948 3.797-6.782 7.576-5.641l24.564 7.415a3.507 3.507 0 012.202 1.958l1.215 2.791c.863 1.982 3.718 1.847 4.389-.208a2.35 2.35 0 012.911-1.52l21.358 6.422c.176.053.348.113.516.187.606.264 2.16.98 3.039 1.754 1.314 1.157 1.824 2.097 2.543 3.693.976 2.168 1.049 5.938 1.053 6.234v.039l.406 177.733a5.878 5.878 0 01-5.892 5.891l-59.505-.153a5.877 5.877 0 01-5.862-5.862l-.513-200.733z"
      ></path>
      <path
        fill="url(#paint21_linear_1128_1631)"
        d="M561.963 104.056a3.132 3.132 0 013.879-3.017l40.818 10.035a3.13 3.13 0 012.384 3.038l.047 61.868a3.131 3.131 0 01-3.534 3.108l-41.377-5.364a3.132 3.132 0 01-2.729-3.13l.512-66.538z"
      ></path>
      <path
        fill="url(#paint22_linear_1128_1631)"
        d="M561.783 195.567a1.53 1.53 0 011.636-1.515l44.58 3.094c.807.056 1.431.73 1.425 1.539l-.013 1.709a1.53 1.53 0 01-1.635 1.515l-44.581-3.061a1.53 1.53 0 01-1.425-1.538l.013-1.743z"
      ></path>
      <path
        fill="url(#paint23_linear_1128_1631)"
        d="M561.182 247.648a1.53 1.53 0 011.579-1.581l44.668 1.45a1.53 1.53 0 011.479 1.478l.058 1.712a1.53 1.53 0 01-1.578 1.581l-44.667-1.421a1.53 1.53 0 01-1.48-1.478l-.059-1.741z"
      ></path>
      <path
        fill="url(#paint24_linear_1128_1631)"
        d="M561.71 205.117a1.53 1.53 0 011.636-1.515l44.58 3.094a1.53 1.53 0 011.424 1.538l-.013 1.71a1.53 1.53 0 01-1.635 1.515l-44.58-3.061a1.53 1.53 0 01-1.425-1.538l.013-1.743z"
      ></path>
      <path
        fill="url(#paint25_linear_1128_1631)"
        d="M561.454 255.737a1.53 1.53 0 011.591-1.581l44.664 1.8a1.53 1.53 0 011.468 1.478l.057 1.71a1.529 1.529 0 01-1.59 1.58l-44.663-1.77a1.53 1.53 0 01-1.468-1.478l-.059-1.739z"
      ></path>
      <path
        fill="url(#paint26_linear_1128_1631)"
        d="M561.388 264.33a1.53 1.53 0 011.59-1.58l44.664 1.8a1.53 1.53 0 011.468 1.478l.058 1.71a1.53 1.53 0 01-1.59 1.58l-44.663-1.77a1.531 1.531 0 01-1.469-1.478l-.058-1.74z"
      ></path>
      <path
        fill="url(#paint27_linear_1128_1631)"
        d="M568.433 181.8a1.53 1.53 0 011.686-1.511l30.998 3.171a1.53 1.53 0 011.374 1.534l-.03 3.919a1.53 1.53 0 01-1.673 1.512l-30.999-2.898a1.53 1.53 0 01-1.388-1.535l.032-4.192z"
      ></path>
      <path
        fill="url(#paint28_linear_1128_1631)"
        d="M569.774 233.656a1.53 1.53 0 011.612-1.558l31.059 1.657a1.53 1.53 0 011.449 1.498l.076 3.924a1.531 1.531 0 01-1.598 1.559l-31.054-1.384a1.53 1.53 0 01-1.461-1.499l-.083-4.197z"
      ></path>
      <path
        fill="url(#paint29_linear_1128_1631)"
        d="M575.756 216.386a1.71 1.71 0 011.813-1.663l17.71 1.06a1.712 1.712 0 011.609 1.754l-.056 2.104a1.71 1.71 0 01-1.794 1.664l-17.716-.864a1.711 1.711 0 01-1.627-1.755l.061-2.3z"
      ></path>
      <ellipse
        cx="587.482"
        cy="86.089"
        fill="url(#paint30_linear_1128_1631)"
        rx="1.837"
        ry="2.204"
        transform="rotate(-2.511 587.482 86.09)"
      ></ellipse>
      <ellipse
        cx="587.483"
        cy="86.089"
        fill="url(#paint31_linear_1128_1631)"
        rx="1.102"
        ry="1.469"
        transform="rotate(-2.511 587.483 86.09)"
      ></ellipse>
      <defs>
        <filter
          id="filter0_f_1128_1631"
          width="590.029"
          height="586.903"
          x="270.043"
          y="0.901"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1128_1631"
            stdDeviation="47.796"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_1128_1631"
          width="529.332"
          height="526.681"
          x="0.458"
          y="84.488"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1128_1631"
            stdDeviation="47.796"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_1128_1631"
          x1="498.587"
          x2="165.529"
          y1="243.233"
          y2="312.713"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A4E52"></stop>
          <stop offset="0.521" stopColor="#1E2225"></stop>
          <stop offset="1" stopColor="#3E4148"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1128_1631"
          x1="504.984"
          x2="165.269"
          y1="403.888"
          y2="417.217"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#42464A"></stop>
          <stop offset="0.521" stopColor="#1F2326"></stop>
          <stop offset="1" stopColor="#3E4148"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1128_1631"
          x1="215.127"
          x2="468.101"
          y1="352.051"
          y2="322.579"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556E"></stop>
          <stop offset="1" stopColor="#2B313B"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1128_1631"
          x1="215.127"
          x2="464.489"
          y1="373.519"
          y2="344.616"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A556D"></stop>
          <stop offset="0.609" stopColor="#2A2F3A"></stop>
          <stop offset="1" stopColor="#4C5469"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1128_1631"
          x1="313.333"
          x2="459.602"
          y1="286.712"
          y2="233.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="0.286" stopColor="#3A4254"></stop>
          <stop offset="0.589" stopColor="#2B3347"></stop>
          <stop offset="1" stopColor="#394255"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_1128_1631"
          x1="412.904"
          x2="564.792"
          y1="225.907"
          y2="232.564"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#393C43"></stop>
          <stop offset="1" stopColor="#1B1C21"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_1128_1631"
          x1="418.821"
          x2="558.864"
          y1="224.239"
          y2="230.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#323438"></stop>
          <stop offset="1" stopColor="#1B1D25"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_1128_1631"
          x1="426.188"
          x2="557.796"
          y1="280.854"
          y2="269.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556E"></stop>
          <stop offset="1" stopColor="#2B313B"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_1128_1631"
          x1="426.178"
          x2="555.979"
          y1="296.403"
          y2="286.356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A556D"></stop>
          <stop offset="0.609" stopColor="#2A2F3A"></stop>
          <stop offset="1" stopColor="#4C5469"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_1128_1631"
          x1="479.746"
          x2="574.466"
          y1="232.092"
          y2="196.793"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="0.286" stopColor="#3A4254"></stop>
          <stop offset="0.589" stopColor="#2B3347"></stop>
          <stop offset="1" stopColor="#394255"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_1128_1631"
          x1="427.386"
          x2="482.699"
          y1="205.31"
          y2="211.381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_1128_1631"
          x1="427.517"
          x2="482.818"
          y1="220.883"
          y2="225.447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A556E"></stop>
          <stop offset="1" stopColor="#2B313B"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_1128_1631"
          x1="427.566"
          x2="482.885"
          y1="176.421"
          y2="183.246"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556F"></stop>
          <stop offset="1" stopColor="#282C36"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_1128_1631"
          x1="470.839"
          x2="526.567"
          y1="324.97"
          y2="323.864"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556F"></stop>
          <stop offset="1" stopColor="#282C36"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_1128_1631"
          x1="428.015"
          x2="463.604"
          y1="237.053"
          y2="239.397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E7BE1"></stop>
          <stop offset="1" stopColor="#2D4671"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_1128_1631"
          x1="215.127"
          x2="296.557"
          y1="244.711"
          y2="254.335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_1128_1631"
          x1="215.128"
          x2="296.558"
          y1="267.66"
          y2="275.063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A556E"></stop>
          <stop offset="1" stopColor="#2B313B"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_1128_1631"
          x1="215.139"
          x2="261.997"
          y1="293.03"
          y2="296.496"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E7BE1"></stop>
          <stop offset="1" stopColor="#2D4671"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_1128_1631"
          x1="217.349"
          x2="298.779"
          y1="202.146"
          y2="212.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556F"></stop>
          <stop offset="1" stopColor="#282C36"></stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear_1128_1631"
          x1="533.111"
          x2="664.687"
          y1="227.414"
          y2="171.642"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#393C43"></stop>
          <stop offset="0.458" stopColor="#363840"></stop>
          <stop offset="0.766" stopColor="#1B1C21"></stop>
          <stop offset="1" stopColor="#35383F"></stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear_1128_1631"
          x1="619.414"
          x2="548.525"
          y1="94.108"
          y2="284.196"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C2E34"></stop>
          <stop offset="0.328" stopColor="#1E2028"></stop>
          <stop offset="1" stopColor="#2F3136"></stop>
        </linearGradient>
        <linearGradient
          id="paint21_linear_1128_1631"
          x1="555.953"
          x2="621.743"
          y1="157.962"
          y2="134.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="0.286" stopColor="#3A4254"></stop>
          <stop offset="0.589" stopColor="#2B3347"></stop>
          <stop offset="1" stopColor="#394255"></stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear_1128_1631"
          x1="561.359"
          x2="608.931"
          y1="197.836"
          y2="203.543"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint23_linear_1128_1631"
          x1="560.852"
          x2="608.619"
          y1="249.926"
          y2="253.658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint24_linear_1128_1631"
          x1="561.286"
          x2="608.858"
          y1="207.386"
          y2="213.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint25_linear_1128_1631"
          x1="561.123"
          x2="608.891"
          y1="258.001"
          y2="261.734"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint26_linear_1128_1631"
          x1="561.057"
          x2="608.824"
          y1="266.595"
          y2="270.328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B566F"></stop>
          <stop offset="1" stopColor="#2A2F39"></stop>
        </linearGradient>
        <linearGradient
          id="paint27_linear_1128_1631"
          x1="568.728"
          x2="602.612"
          y1="186.41"
          y2="188.613"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556F"></stop>
          <stop offset="1" stopColor="#282C36"></stop>
        </linearGradient>
        <linearGradient
          id="paint28_linear_1128_1631"
          x1="570.195"
          x2="604.127"
          y1="238.292"
          y2="239.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B556F"></stop>
          <stop offset="1" stopColor="#282C36"></stop>
        </linearGradient>
        <linearGradient
          id="paint29_linear_1128_1631"
          x1="574.205"
          x2="595.86"
          y1="217.746"
          y2="219.521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4E7BE1"></stop>
          <stop offset="1" stopColor="#2D4671"></stop>
        </linearGradient>
        <linearGradient
          id="paint30_linear_1128_1631"
          x1="589.319"
          x2="586.747"
          y1="84.253"
          y2="88.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D4B6A"></stop>
          <stop offset="1" stopColor="#383F50"></stop>
        </linearGradient>
        <linearGradient
          id="paint31_linear_1128_1631"
          x1="588.584"
          x2="586.801"
          y1="84.865"
          y2="87.388"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#374A73"></stop>
          <stop offset="1" stopColor="#252A34"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

// --------------------------image---------------------------

function DevelopmentImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 1074 990"
    >
      <g filter="url(#filter0_f_815_1069)">
        <ellipse
          cx="537.388"
          cy="495.101"
          fill="#51CAEE"
          fillOpacity="0.15"
          rx="392.061"
          ry="338.598"
          transform="rotate(-18.848 537.388 495.101)"
        ></ellipse>
      </g>
      <g filter="url(#filter1_f_815_1069)">
        <rect
          width="743"
          height="1.015"
          x="119"
          y="736.631"
          fill="#000"
          rx="0.508"
        ></rect>
      </g>
      <g filter="url(#filter2_f_815_1069)">
        <rect
          width="741.985"
          height="0.508"
          x="119.508"
          y="737.138"
          fill="#000"
          fillOpacity="0.6"
          rx="0.254"
        ></rect>
      </g>
      <g filter="url(#filter3_ii_815_1069)">
        <rect
          width="743"
          height="13.195"
          x="119"
          y="723.435"
          fill="url(#paint0_linear_815_1069)"
          rx="0.508"
        ></rect>
        <rect
          width="743"
          height="13.195"
          x="119"
          y="723.435"
          fill="url(#paint1_linear_815_1069)"
          fillOpacity="0.2"
          rx="0.508"
        ></rect>
      </g>
      <path
        fill="#D6D6D6"
        stroke="#CCC"
        strokeWidth="0.506"
        d="M194.253 333.137c0-6.011 4.873-10.884 10.884-10.884h569.998c6.01 0 10.883 4.873 10.883 10.884v389.026H194.253V333.137z"
      ></path>
      <g filter="url(#filter4_di_815_1069)">
        <path
          fill="#050505"
          d="M195.52 333.643c0-5.592 4.532-10.124 10.124-10.124h568.985c5.592 0 10.124 4.532 10.124 10.124v388.773H195.52V333.643z"
        ></path>
      </g>
      <g clipPath="url(#clip0_815_1069)">
        <path
          fill="#fff"
          d="M204.631 334.655c0-1.118.906-2.024 2.025-2.024h566.96c1.119 0 2.025.906 2.025 2.024v377.637a2.025 2.025 0 01-2.025 2.025h-566.96a2.025 2.025 0 01-2.025-2.025V334.655z"
        ></path>
        <path
          fill="url(#paint2_linear_815_1069)"
          d="M204.631 332.631H775.641V714.317H204.631z"
        ></path>
      </g>
      <g filter="url(#filter5_i_815_1069)">
        <rect
          width="571.01"
          height="381.686"
          x="204.631"
          y="332.631"
          fill="#fff"
          fillOpacity="0.01"
          rx="2.025"
        ></rect>
      </g>
      <g filter="url(#filter6_i_815_1069)">
        <path
          fill="url(#paint3_radial_815_1069)"
          fillOpacity="0.25"
          d="M195.52 333.643c0-5.592 4.532-10.124 10.124-10.124h568.985c5.592 0 10.124 4.532 10.124 10.124v388.773H195.52V333.643z"
        ></path>
      </g>
      <g filter="url(#filter7_f_815_1069)">
        <path
          fill="url(#paint4_linear_815_1069)"
          fillOpacity="0.6"
          d="M35.035 927.892l69.833-192.539h754.193l66.84 192.539H35.035z"
        ></path>
      </g>
      <rect
        width="250"
        height="275"
        x="483"
        y="383"
        fill="url(#paint5_linear_815_1069)"
        rx="25"
      ></rect>
      <g clipPath="url(#clip1_815_1069)" opacity="0.45">
        <path
          fill="#81B5F2"
          fillRule="evenodd"
          d="M600.252 438.345a83.83 83.83 0 0114.494 0c.451.039 1.372.467 1.735 1.855l3.668 14.024c1.86 7.111 6.967 12.263 12.653 15.079a57.02 57.02 0 016.355 3.675c5.286 3.53 12.307 5.379 19.401 3.433l13.993-3.84c1.381-.379 2.214.203 2.475.574a82.39 82.39 0 017.261 12.548c.188.404.28 1.413-.741 2.422l-10.338 10.215c-5.221 5.159-7.134 12.148-6.732 18.48a57.774 57.774 0 010 7.38c-.402 6.332 1.511 13.322 6.732 18.481l10.338 10.214c1.021 1.01.929 2.019.741 2.423a82.33 82.33 0 01-7.261 12.547c-.261.372-1.094.953-2.475.575l-13.993-3.841c-7.094-1.946-14.115-.096-19.401 3.434a57.176 57.176 0 01-6.355 3.675c-5.686 2.815-10.793 7.967-12.653 15.079l-3.668 14.024c-.363 1.388-1.284 1.815-1.735 1.855a84.216 84.216 0 01-14.494 0c-.45-.04-1.372-.467-1.735-1.855l-3.668-14.025c-1.86-7.111-6.967-12.263-12.652-15.078a57.086 57.086 0 01-6.355-3.675c-5.286-3.53-12.307-5.38-19.4-3.434l-13.994 3.841c-1.382.378-2.215-.203-2.476-.575a82.409 82.409 0 01-7.26-12.547c-.189-.404-.281-1.413.74-2.423l10.339-10.215c5.221-5.159 7.135-12.148 6.732-18.48a57.774 57.774 0 010-7.379c.403-6.332-1.511-13.321-6.732-18.48l-10.339-10.216c-1.021-1.009-.929-2.018-.74-2.422a82.39 82.39 0 017.261-12.548c.26-.371 1.093-.953 2.475-.574l13.994 3.84c7.093 1.946 14.114.097 19.4-3.433a56.93 56.93 0 016.355-3.675c5.685-2.816 10.792-7.967 12.652-15.079l3.668-14.024c.363-1.388 1.285-1.816 1.735-1.855zM607.499 419c-2.995 0-5.962.13-8.895.385-9.424.819-16.354 7.799-18.499 16l-3.668 14.023c-.221.848-1.001 2.006-2.687 2.841a76.169 76.169 0 00-8.476 4.902c-1.56 1.042-2.951 1.139-3.796.907l-13.995-3.84c-8.161-2.239-17.653.26-23.082 7.985a101.404 101.404 0 00-8.937 15.447c-3.996 8.57-1.41 18.052 4.612 24.002l10.339 10.216c.623.616 1.234 1.867 1.115 3.735a77.173 77.173 0 000 9.795c.119 1.868-.492 3.118-1.115 3.734l-10.339 10.216c-6.022 5.951-8.608 15.433-4.612 24.003a101.394 101.394 0 008.937 15.446c5.429 7.725 14.921 10.225 23.082 7.985l13.995-3.839c.845-.232 2.236-.136 3.796.906a75.857 75.857 0 008.476 4.902c1.686.835 2.466 1.994 2.687 2.841l3.668 14.024c2.145 8.201 9.075 15.18 18.499 16 2.933.255 5.9.384 8.895.384 2.995 0 5.962-.129 8.896-.384 9.424-.82 16.354-7.799 18.498-16l3.668-14.024c.222-.847 1.001-2.005 2.688-2.841a75.857 75.857 0 008.476-4.902c1.56-1.042 2.951-1.138 3.797-.906l13.993 3.839c8.162 2.24 17.653-.26 23.082-7.984a101.453 101.453 0 008.937-15.447c3.997-8.57 1.411-18.052-4.611-24.003l-10.338-10.215c-.624-.616-1.235-1.867-1.115-3.735a77.958 77.958 0 000-9.796c-.12-1.868.491-3.119 1.115-3.735l10.338-10.215c6.022-5.95 8.608-15.432 4.611-24.002a101.404 101.404 0 00-8.937-15.447c-5.429-7.725-14.92-10.224-23.082-7.985l-13.993 3.84c-.846.232-2.237.135-3.797-.907a76.012 76.012 0 00-8.476-4.902c-1.687-.836-2.466-1.994-2.688-2.841l-3.668-14.023c-2.144-8.201-9.074-15.181-18.498-16a102.724 102.724 0 00-8.896-.385zm19.032 101.5c0 10.511-8.521 19.031-19.032 19.031-10.51 0-19.031-8.52-19.031-19.031 0-10.51 8.521-19.031 19.031-19.031 10.511 0 19.032 8.521 19.032 19.031zm19.031 0c0 21.022-17.041 38.063-38.063 38.063-21.021 0-38.062-17.041-38.062-38.063 0-21.021 17.041-38.062 38.062-38.062 21.022 0 38.063 17.041 38.063 38.062z"
          clipRule="evenodd"
        ></path>
      </g>
      <rect width="99" height="25" x="260" y="594" fill="#4D8AD0" rx="5"></rect>
      <rect
        width="150"
        height="25"
        x="260"
        y="430"
        fill="url(#paint6_linear_815_1069)"
        rx="5"
      ></rect>
      <rect
        width="150"
        height="25"
        x="260"
        y="506"
        fill="url(#paint7_linear_815_1069)"
        rx="5"
      ></rect>
      <rect
        width="150"
        height="25"
        x="260"
        y="550"
        fill="url(#paint8_linear_815_1069)"
        rx="5"
      ></rect>
      <g filter="url(#filter8_f_815_1069)">
        <rect
          width="99"
          height="25"
          x="260"
          y="594"
          fill="#4D8AD0"
          fillOpacity="0.3"
          rx="5"
        ></rect>
      </g>
      <g filter="url(#filter9_b_815_1069)">
        <rect
          width="262"
          height="108.622"
          fill="url(#paint9_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 664 560)"
        ></rect>
      </g>
      <g filter="url(#filter10_b_815_1069)">
        <rect
          width="262"
          height="108.622"
          fill="url(#paint10_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 664 560)"
        ></rect>
      </g>
      <g filter="url(#filter11_d_815_1069)" shapeRendering="crispEdges">
        <rect
          width="262"
          height="108.622"
          fill="url(#paint11_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 664 559.622)"
        ></rect>
        <rect
          width="261.4"
          height="108.022"
          x="0.3"
          y="-0.3"
          stroke="url(#paint12_linear_815_1069)"
          strokeWidth="0.6"
          rx="10.432"
          transform="matrix(1 0 0 -1 664 559.022)"
        ></rect>
      </g>
      <g filter="url(#filter12_d_815_1069)">
        <rect
          width="262"
          height="109"
          x="664"
          y="451"
          fill="#519BED"
          fillOpacity="0.55"
          rx="10"
          shapeRendering="crispEdges"
        ></rect>
      </g>
      <path fill="#fff" d="M693 485H904V499H693z" opacity="0.8"></path>
      <path fill="#fff" d="M693 519H904V533H693z" opacity="0.8"></path>
      <g filter="url(#filter13_b_815_1069)">
        <rect
          width="275"
          height="74.74"
          fill="url(#paint13_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 75 411)"
        ></rect>
      </g>
      <g filter="url(#filter14_b_815_1069)">
        <rect
          width="275"
          height="74.74"
          fill="url(#paint14_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 75 411)"
        ></rect>
      </g>
      <g filter="url(#filter15_d_815_1069)" shapeRendering="crispEdges">
        <rect
          width="275"
          height="74.74"
          fill="url(#paint15_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 75 410.74)"
        ></rect>
        <rect
          width="274.4"
          height="74.14"
          x="0.3"
          y="-0.3"
          stroke="url(#paint16_linear_815_1069)"
          strokeWidth="0.6"
          rx="10.432"
          transform="matrix(1 0 0 -1 75 410.14)"
        ></rect>
      </g>
      <rect
        width="275"
        height="75"
        x="75"
        y="336"
        fill="#2A578B"
        opacity="0.6"
        rx="10"
      ></rect>
      <path fill="#4E88CC" d="M102 367H242V381H102z" opacity="0.8"></path>
      <path
        fill="#2A598F"
        d="M325 373.5a26.5 26.5 0 11-15.039-23.893L298.5 373.5H325z"
      ></path>
      <path
        fill="#3B6AA2"
        d="M316.389 346.094a26.55 26.55 0 0114.406 23.968l-26.547-.357 12.141-23.611z"
      ></path>
      <g filter="url(#filter16_b_815_1069)">
        <rect
          width="232"
          height="287"
          fill="url(#paint17_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 119 932)"
        ></rect>
      </g>
      <g filter="url(#filter17_b_815_1069)">
        <rect
          width="232"
          height="287"
          fill="url(#paint18_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 119 932)"
        ></rect>
      </g>
      <g filter="url(#filter18_d_815_1069)" shapeRendering="crispEdges">
        <rect
          width="232"
          height="287"
          fill="url(#paint19_linear_815_1069)"
          rx="10.732"
          transform="matrix(1 0 0 -1 119 931)"
        ></rect>
        <rect
          width="231.4"
          height="286.4"
          x="0.3"
          y="-0.3"
          stroke="url(#paint20_linear_815_1069)"
          strokeWidth="0.6"
          rx="10.432"
          transform="matrix(1 0 0 -1 119 930.4)"
        ></rect>
      </g>
      <path fill="#4077B7" d="M147 765H207V775H147z" opacity="0.8"></path>
      <path fill="#4077B7" d="M147 867H321V877H147z" opacity="0.8"></path>
      <path fill="#4077B7" d="M147 842H321V852H147z" opacity="0.8"></path>
      <path fill="#4077B7" d="M147 741H207V751H147z" opacity="0.8"></path>
      <path fill="#346BAA" d="M228 696H321V808.241H228z" opacity="0.8"></path>
      <path
        fill="#1B3757"
        d="M268.855 777.947c-14.621-9.354-33.329-2.48-40.855 2.126v28.169h93v-55.275c-19.89-4.252-33.867 36.673-52.145 24.98z"
        opacity="0.8"
      ></path>
      <circle cx="296.948" cy="727.535" r="13.362" fill="#1F446F"></circle>
      <defs>
        <filter
          id="filter0_f_815_1069"
          width="1073.14"
          height="988.599"
          x="0.819"
          y="0.801"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_815_1069"
            stdDeviation="74.821"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_815_1069"
          width="755.18"
          height="13.195"
          x="112.91"
          y="730.541"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_815_1069"
            stdDeviation="3.045"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter2_f_815_1069"
          width="745.029"
          height="3.553"
          x="117.985"
          y="735.616"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_815_1069"
            stdDeviation="0.761"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter3_ii_815_1069"
          width="743"
          height="13.703"
          x="119"
          y="722.928"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-1.015"></feOffset>
          <feGaussianBlur stdDeviation="0.254"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_815_1069"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-0.508"></feOffset>
          <feGaussianBlur stdDeviation="0.254"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
          <feBlend
            in2="effect1_innerShadow_815_1069"
            result="effect2_innerShadow_815_1069"
          ></feBlend>
        </filter>
        <filter
          id="filter4_di_815_1069"
          width="590.247"
          height="399.91"
          x="195.013"
          y="323.012"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="0.253"
            result="effect1_dropShadow_815_1069"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="0.127"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_815_1069"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_815_1069"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="1.012"
            result="effect2_innerShadow_815_1069"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1.012"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_815_1069"></feBlend>
        </filter>
        <filter
          id="filter5_i_815_1069"
          width="571.01"
          height="381.686"
          x="204.631"
          y="332.631"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="0.759"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_815_1069"></feBlend>
        </filter>
        <filter
          id="filter6_i_815_1069"
          width="589.234"
          height="398.897"
          x="195.52"
          y="323.519"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="0.506"
            result="effect1_innerShadow_815_1069"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="0.506"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_815_1069"></feBlend>
        </filter>
        <filter
          id="filter7_f_815_1069"
          width="918.285"
          height="219.958"
          x="21.326"
          y="721.644"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_815_1069"
            stdDeviation="6.855"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter8_f_815_1069"
          width="219"
          height="145"
          x="200"
          y="534"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_815_1069"
            stdDeviation="30"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter9_b_815_1069"
          width="274.878"
          height="121.5"
          x="657.561"
          y="444.94"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter10_b_815_1069"
          width="274.878"
          height="121.5"
          x="657.561"
          y="444.94"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter11_d_815_1069"
          width="326.634"
          height="173.256"
          x="631.683"
          y="424.683"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="2.683"
            result="effect1_dropShadow_815_1069"
          ></feMorphology>
          <feOffset dy="6"></feOffset>
          <feGaussianBlur stdDeviation="17.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.07875 0 0 0 0 0.150732 0 0 0 0 0.233333 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_815_1069"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter12_d_815_1069"
          width="382"
          height="229"
          x="604"
          y="399"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="8"></feOffset>
          <feGaussianBlur stdDeviation="30"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.213542 0 0 0 0 0.408721 0 0 0 0 0.625 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_815_1069"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter13_b_815_1069"
          width="287.878"
          height="87.618"
          x="68.561"
          y="329.821"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter14_b_815_1069"
          width="287.878"
          height="87.618"
          x="68.561"
          y="329.821"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter15_d_815_1069"
          width="339.634"
          height="139.374"
          x="42.683"
          y="309.683"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="2.683"
            result="effect1_dropShadow_815_1069"
          ></feMorphology>
          <feOffset dy="6"></feOffset>
          <feGaussianBlur stdDeviation="17.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.07875 0 0 0 0 0.150732 0 0 0 0 0.233333 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_815_1069"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter16_b_815_1069"
          width="244.878"
          height="299.878"
          x="112.561"
          y="638.561"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter17_b_815_1069"
          width="244.878"
          height="299.878"
          x="112.561"
          y="638.561"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="3.22"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_815_1069"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter18_d_815_1069"
          width="296.634"
          height="351.634"
          x="86.683"
          y="617.683"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            radius="2.683"
            result="effect1_dropShadow_815_1069"
          ></feMorphology>
          <feOffset dy="6"></feOffset>
          <feGaussianBlur stdDeviation="17.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.07875 0 0 0 0 0.150732 0 0 0 0 0.233333 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_815_1069"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_815_1069"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_815_1069"
          x1="119"
          x2="862"
          y1="730.033"
          y2="730.033"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C6C5C5"></stop>
          <stop offset="0.009" stopColor="#FEFEFE"></stop>
          <stop offset="0.031" stopColor="#E3E3E3"></stop>
          <stop offset="0.963" stopColor="#E7E6E6"></stop>
          <stop offset="0.992" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#C6C5C5"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_815_1069"
          x1="490.5"
          x2="490.5"
          y1="723.435"
          y2="736.631"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFEFEF"></stop>
          <stop offset="1" stopColor="#DBDBDB"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_815_1069"
          x1="775.634"
          x2="211.386"
          y1="332.38"
          y2="709.197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#313337"></stop>
          <stop offset="0.577" stopColor="#161718"></stop>
          <stop offset="1" stopColor="#222326"></stop>
        </linearGradient>
        <radialGradient
          id="paint3_radial_815_1069"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(619.60641 412.56554 -609.42584 915.2586 239.054 364.269)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.156" stopColor="#fff" stopOpacity="0.24"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="paint4_linear_815_1069"
          x1="471.479"
          x2="471.479"
          y1="735.353"
          y2="927.892"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A1717"></stop>
          <stop offset="0.51" stopColor="#1A1717" stopOpacity="0.25"></stop>
          <stop offset="1" stopColor="#1A1717" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_815_1069"
          x1="714.982"
          x2="477.198"
          y1="383"
          y2="635.575"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.115" stopColor="#49536B"></stop>
          <stop offset="0.542" stopColor="#2C3448"></stop>
          <stop offset="1" stopColor="#333B4F"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_815_1069"
          x1="264.5"
          x2="410"
          y1="455"
          y2="430"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E364A"></stop>
          <stop offset="1" stopColor="#49536B"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_815_1069"
          x1="264.5"
          x2="410"
          y1="531"
          y2="506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E364A"></stop>
          <stop offset="1" stopColor="#49536B"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_815_1069"
          x1="264.5"
          x2="410"
          y1="575"
          y2="550"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E364A"></stop>
          <stop offset="1" stopColor="#49536B"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_815_1069"
          x1="262"
          x2="178.923"
          y1="0"
          y2="187.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_815_1069"
          x1="262"
          x2="178.923"
          y1="0"
          y2="187.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_815_1069"
          x1="262"
          x2="178.923"
          y1="0"
          y2="187.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_815_1069"
          x1="130.801"
          x2="130.801"
          y1="0"
          y2="108.622"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6C829E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#6C829E" stopOpacity="0.9"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_815_1069"
          x1="275"
          x2="233.669"
          y1="0"
          y2="142.509"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_815_1069"
          x1="275"
          x2="233.669"
          y1="0"
          y2="142.509"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_815_1069"
          x1="275"
          x2="233.669"
          y1="0"
          y2="142.509"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_815_1069"
          x1="137.291"
          x2="137.291"
          y1="0"
          y2="74.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6C829E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#6C829E" stopOpacity="0.9"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_815_1069"
          x1="232"
          x2="-53.55"
          y1="0"
          y2="216.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_815_1069"
          x1="232"
          x2="-53.55"
          y1="0"
          y2="216.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear_815_1069"
          x1="232"
          x2="-53.55"
          y1="0"
          y2="216.308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3746" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2B3746" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear_815_1069"
          x1="115.823"
          x2="115.823"
          y1="0"
          y2="287"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6C829E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#6C829E" stopOpacity="0.9"></stop>
        </linearGradient>
        <clipPath id="clip0_815_1069">
          <path
            fill="#fff"
            d="M204.631 334.655c0-1.118.906-2.024 2.025-2.024h566.96c1.119 0 2.025.906 2.025 2.024v377.637a2.025 2.025 0 01-2.025 2.025h-566.96a2.025 2.025 0 01-2.025-2.025V334.655z"
          ></path>
        </clipPath>
        <clipPath id="clip1_815_1069">
          <path
            fill="#fff"
            d="M0 0H203V203H0z"
            transform="translate(506 419)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

// --------------------------image-----------------------------

function PhonesImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 574 690"
    >
      <path
        fill="#000003"
        d="M25.792 23.89c3.505-.5 83.242 8.137 127.053 13.77 20.654 2.655 25.09 23.157 25.661 26.287 21.697 118.916 65.341 357.124 68.846 376.151 3.505 19.027-5.215 27.121-10.014 28.79-31.919 6.05-100.515 19.027-119.542 22.532-19.027 3.505-26.704-14.395-28.165-23.784C65.014 333.073 15.153 60.191 12.648 45.17 9.52 26.394 21.411 24.517 25.792 23.89z"
      ></path>
      <path
        fill="#000003"
        d="M25.793 20.761L155.35 36.408c6.243 1.043 19.488 7.26 22.531 23.783 21.906 118.917 66.593 362.007 70.098 383.036 3.505 21.029-8.136 29.208-14.395 30.668-25.452 4.798-83.242 15.897-110.78 21.906-27.539 6.008-38.596-9.597-40.682-18.151C58.129 347.677 8.769 80.845 3.261 53.307-2.245 25.768 15.989 20.135 25.794 20.76z"
      ></path>
      <ellipse
        cx="97.291"
        cy="38.571"
        fill="url(#paint0_linear_1087_1836)"
        rx="3.065"
        ry="3.678"
        transform="rotate(-15 97.291 38.571)"
      ></ellipse>
      <ellipse
        cx="97.292"
        cy="38.572"
        fill="url(#paint1_linear_1087_1836)"
        rx="1.839"
        ry="2.452"
        transform="rotate(-15 97.292 38.572)"
      ></ellipse>
      <path
        fill="url(#paint2_linear_1087_1836)"
        d="M15.304 43.697c-1.527-8.387 5.471-15.87 13.942-14.909L84.823 35.1a7.654 7.654 0 015.359 3.147l3.515 4.906c2.594 3.62 8.262 2.372 9.095-2.003a5.067 5.067 0 015.569-4.084l4.083.48 43.95 5.55c.347.044.69.101 1.031.181 1.34.316 5.006 1.258 7.209 2.592 3.24 1.96 5.579 4.056 7.642 7.667 2.427 4.247 3.603 10.856 3.788 11.971l.057.328 68.743 378.151c1.26 6.932-3.357 13.566-10.295 14.792l-126.755 22.409c-6.889 1.218-13.467-3.359-14.72-10.241l-77.79-427.25z"
      ></path>
      <g filter="url(#filter0_f_1087_1836)">
        <path
          stroke="#DEDEE2"
          strokeWidth="1.252"
          d="M11.395 46.422c-3.004-19.527 7.51-24.826 13.77-25.035 39.846 5.841 121.544 16.022 132.059 17.524 10.515 1.503 17.642 13.144 18.776 19.403 22.532 124.34 68.221 376.026 70.724 388.042 2.504 12.017-4.381 17.525-8.136 18.777-34.841 6.467-108.527 20.153-124.55 23.157-16.022 3.004-23.783-6.676-25.66-11.891C63.968 341.209 14.4 65.949 11.395 46.422z"
        ></path>
      </g>
      <path
        fill="url(#paint3_linear_1087_1836)"
        d="M11.396 40.79c-2.003-15.022 8.345-18.36 13.77-18.151 0 0 6.583.55 10.64 1.877 5.095 1.667 12.518 6.26 12.518 6.26-28.79-5.008-33.798 1.25-32.546 12.517l76.983 426.221c1.251 6.885 2.503 10.014 12.517 11.892 8.41 1.576 22.532 2.92 28.79 2.503l-26.286 4.381c-11.516.501-17.316-8.136-18.777-12.517C63.97 337.037 13.4 55.81 11.396 40.789z"
      ></path>
      <path
        fill="url(#paint4_linear_1087_1836)"
        d="M2.633 50.177c-3.755-20.654 10.006-29.416 20.02-29.416C8.126 23.765 8.678 40.79 10.77 48.926 35.387 186.2 85.124 463.255 87.126 473.269c1.088 5.439 3.996 9.495 7.828 12.518 4.187 3.304 9.476 5.373 14.697 6.666 6.493 1.608 117.038-19.81 123.297-18.558-6.842 1.629-71.495 15.563-108.276 21.386-13.77 3.649-21.426 1.136-23.784.52-5.485-1.433-9.596-4.506-12.558-7.511-3.84-3.897-6.218-8.136-6.844-13.769L2.633 50.177z"
        opacity="0.9"
      ></path>
      <g filter="url(#filter1_df_1087_1836)">
        <path
          stroke="url(#paint5_linear_1087_1836)"
          strokeWidth="1.252"
          d="M6.918 46.422c-3.004-19.527 8.86-25.035 18.246-25.035 40.058 4.381 119.043 16.022 129.558 17.524 13.242 1.892 19.693 11.266 21.28 20.029 22.532 124.34 68.221 372.896 70.724 384.913 2.739 13.143-1.877 21.28-7.51 23.157-34.841 6.468-109.153 23.283-125.175 26.287-16.023 3.004-26.696-8.136-28.165-16.273C61.467 341.835 9.923 65.949 6.918 46.422z"
          shapeRendering="crispEdges"
        ></path>
      </g>
      <path
        fill="url(#paint6_linear_1087_1836)"
        d="M108.407 480.78c-5.823.959-8.662-.676-9.538-1.308l142.95-25.243c-.68 2.498-7.303 4.328-7.303 4.328s-120.285 21.264-126.109 22.223z"
      ></path>
      <path
        fill="url(#paint7_linear_1087_1836)"
        d="M12.642 50.803c-3.757-18.776 1.873-21.905 2.502-22.531 1.877-2.504 5.004-1.878 11.267.626-9.514.5-12.31 10.014-11.27 15.646 26.704 144.578 80.492 430.477 81.994 434.984 1.502 4.506 11.474 7.302 16.273 8.136-16.023 3.004-22.95-6.676-24.41-11.892L12.642 50.803z"
      ></path>
      <path
        fill="url(#paint8_linear_1087_1836)"
        d="M114.872 246.392a2.937 2.937 0 115.795-.956l2.232 13.523a2.936 2.936 0 11-5.795.957l-2.232-13.524z"
      ></path>
      <path
        fill="url(#paint9_linear_1087_1836)"
        d="M150.731 241.517a2.936 2.936 0 115.756-1.171l2.733 13.431a2.938 2.938 0 01-5.756 1.171l-2.733-13.431z"
      ></path>
      <path
        fill="url(#paint10_linear_1087_1836)"
        d="M126.782 265.014l-3.916-23.497 24.965-2.937c.816 5.548 2.643 17.623 3.427 21.539.783 3.916-2.611 4.895-4.406 4.895l1.469 7.832c.326.979.391 3.035-1.958 3.427-2.35.391-3.264-1.143-3.427-1.958l-1.469-8.812-3.916.49 1.469 8.811c0 .816-.49 2.546-2.448 2.937-1.958.392-2.774-1.468-2.937-2.447l-1.468-8.322c-3.916.783-5.222-.979-5.385-1.958z"
      ></path>
      <path
        fill="url(#paint11_linear_1087_1836)"
        d="M146.967 235.589l-24.965 2.937c-.783-7.44 2.496-12.074 4.291-13.217-.979-1.468-1.958-2.937-2.333-3.426-.206-.269-.202-.49-.087-.7.101-.184.539-.238.768 0 .673.7 1.93 2.331 2.746 3.637 3.311-2.393 8.206-1.904 10.279-.979.327-1.142 1.077-3.622 1.469-4.406.209-.417.411-.489.61-.403.325.142.254.403.169.709l-1.269 4.589c5.483 1.958 7.833 8.322 8.322 11.259z"
      ></path>
      <ellipse
        cx="127.762"
        cy="231.673"
        fill="#1B2328"
        rx="0.979"
        ry="1.469"
        transform="rotate(-7.996 127.762 231.673)"
      ></ellipse>
      <ellipse
        cx="138.988"
        cy="229.936"
        fill="#1B2328"
        rx="1.027"
        ry="1.469"
        transform="rotate(-11.83 138.988 229.936)"
      ></ellipse>
      <path
        fill="#1D1D20"
        d="M454.551 259.413l77.251-8.846-2.358 16.512-74.893 4.717v-12.383z"
      ></path>
      <g filter="url(#filter2_di_1087_1836)">
        <rect
          width="29.493"
          height="3.485"
          fill="#2C364C"
          rx="1.743"
          transform="matrix(.98236 -.10785 -.14365 1.01059 475.1 261.155)"
        ></rect>
      </g>
      <ellipse
        fill="url(#paint12_linear_1087_1836)"
        rx="1.876"
        ry="2.251"
        transform="scale(-1 1) rotate(-4.159 3318.442 7121.97)"
      ></ellipse>
      <ellipse
        fill="url(#paint13_linear_1087_1836)"
        rx="1.126"
        ry="1.501"
        transform="scale(-1 1) rotate(-4.159 3318.44 7121.998)"
      ></ellipse>
      <path
        fill="url(#paint14_linear_1087_1836)"
        d="M541.907 249.875L433.99 261.669l103.789-12.458c4.127-.59 10.025-.828 15.922 1.253 20.05 7.077 21.229 22.999 19.46 31.845-19.264 118.924-58.971 362.08-63.688 383.31-4.718 21.229-24.375 22.605-33.614 20.639l-100.84-16.511c-12.581-1.701-17.953-9.63-19.825-16.502a16.84 16.84 0 01-.815-7.087c-.11 1.921.09 4.425.815 7.087 2.005 5.889 6.904 9.747 9.8 11.194 28.306 5.111 89.399 16.04 107.326 18.871 17.928 2.831 25.948-20.05 27.717-31.844 18.87-111.455 57.121-341.339 61.839-369.645 4.718-28.305-11.32-32.732-19.969-31.946z"
      ></path>
      <path
        fill="#050505"
        d="M549.691 378.533c1.161-7.33 1.161-10.024 4.11-10.024l-7.077 47.766c-3.538 0-2.345-3.735-2.345-4.128 1.18-8.649 4.152-26.283 5.312-33.614z"
        opacity="0.8"
      ></path>
      <rect
        width="5.378"
        height="48.808"
        x="552.244"
        y="367.698"
        fill="url(#paint15_linear_1087_1836)"
        rx="2.689"
        transform="rotate(9.173 552.244 367.698)"
      ></rect>
      <path
        fill="#898989"
        d="M562.467 280.644l10.614 2.357-.59 3.538-10.613-2.113.589-3.782z"
      ></path>
      <path
        fill="#898989"
        d="M501.352 649.365H512.343V653.493H501.352z"
        transform="rotate(9.737 501.352 649.365)"
      ></path>
      <path
        fill="url(#paint16_linear_1087_1836)"
        d="M470.591 683.561l-96.931-15.779c-13.731-2.235-22.928-15.338-20.364-29.011l65.929-351.566c.111-.59.198-1.177.298-1.769.458-2.715 2.288-11.188 8.14-18.431 3.851-4.766 10.381-5.709 11.232-5.813l.186-.022 14.349-1.621c3.128-.353 5.659 2.505 4.93 5.567-.715 3.005 1.711 5.833 4.79 5.581l22.656-1.849 31.224-3.535a7.342 7.342 0 006.511-7.06 7.342 7.342 0 016.407-7.046l11.42-1.459a20.165 20.165 0 015.627.072c11.111 1.709 18.684 12.167 16.841 23.257l-64.833 390.099c-2.237 13.462-14.943 22.578-28.412 20.385z"
      ></path>
      <path
        fill="url(#paint17_linear_1087_1836)"
        d="M470.435 419.762c-2.926.425-8.892 3.119-9.351 10.491 4.149.051 8.333-2.664 9.351-10.491z"
      ></path>
      <path
        fill="url(#paint18_linear_1087_1836)"
        d="M461.056 432.559c9.635-3.571 13.505 1.703 14.236 4.786-9.298 6.157-5.266 15.768-2.088 19.803-4.206 12.122-9.839 12.637-12.129 11.38-4.565-3.745-5.499-2.835-6.888-2.391-1.756.562-1.866 1.822-5.077.399-3.21-1.422-6.341-9.3-6.672-19.91-.331-10.611 4.808-16.081 9.891-16.941 4.067-.688 7.512 1.629 8.727 2.874z"
      ></path>
      <defs>
        <filter
          id="filter0_f_1087_1836"
          width="240.146"
          height="471.227"
          x="8.99"
          y="19.508"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1087_1836"
            stdDeviation="0.626"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_df_1087_1836"
          width="252.356"
          height="483.678"
          x="0.811"
          y="15.754"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="2.503"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1087_1836"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1087_1836"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect2_foregroundBlur_1087_1836"
            stdDeviation="0.626"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter2_di_1087_1836"
          width="35.536"
          height="12.873"
          x="471.567"
          y="254.889"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1.631"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1087_1836"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1087_1836"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-0.816" dy="0.816"></feOffset>
          <feGaussianBlur stdDeviation="1.157"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.607843 0 0 0 0 0.662745 0 0 0 0 0.752941 0 0 0 0.4 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1087_1836"></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_1087_1836"
          x1="100.357"
          x2="96.066"
          y1="35.506"
          y2="42.249"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D4B6A"></stop>
          <stop offset="1" stopColor="#383F50"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1087_1836"
          x1="99.131"
          x2="96.154"
          y1="36.528"
          y2="40.739"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#374A73"></stop>
          <stop offset="1" stopColor="#252A34"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1087_1836"
          x1="168.796"
          x2="90.481"
          y1="41.93"
          y2="473.746"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C2F35"></stop>
          <stop offset="0.313" stopColor="#1E2028"></stop>
          <stop offset="0.615" stopColor="#1C1E23"></stop>
          <stop offset="1" stopColor="#2F3136"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1087_1836"
          x1="72.606"
          x2="87.128"
          y1="22.63"
          y2="488.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9E9E9" stopOpacity="0"></stop>
          <stop offset="0.109" stopColor="#D1D1D1" stopOpacity="0.3"></stop>
          <stop offset="0.938" stopColor="#AFAFAF" stopOpacity="0.154"></stop>
          <stop offset="1" stopColor="#8A8A8A" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1087_1836"
          x1="117.474"
          x2="192.892"
          y1="20.761"
          y2="490.794"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="0.599" stopColor="#fff" stopOpacity="0.934"></stop>
          <stop offset="0.973" stopColor="#fff" stopOpacity="0.71"></stop>
          <stop offset="0.978" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.984" stopColor="#fff" stopOpacity="0.56"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_1087_1836"
          x1="85.876"
          x2="126.991"
          y1="25.142"
          y2="493.799"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#62625F"></stop>
          <stop offset="1" stopColor="#444441"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_1087_1836"
          x1="166.383"
          x2="169.243"
          y1="466.195"
          y2="481.926"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_1087_1836"
          x1="58.329"
          x2="40.179"
          y1="279.248"
          y2="282.377"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.2"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_1087_1836"
          x1="138.591"
          x2="138.591"
          y1="219"
          y2="277.795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F2F3"></stop>
          <stop offset="1" stopColor="#D3E7D0"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_1087_1836"
          x1="138.591"
          x2="138.591"
          y1="219"
          y2="277.795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F2F3"></stop>
          <stop offset="1" stopColor="#D3E7D0"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_1087_1836"
          x1="138.591"
          x2="138.591"
          y1="219"
          y2="277.795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F2F3"></stop>
          <stop offset="1" stopColor="#D3E7D0"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_1087_1836"
          x1="138.591"
          x2="138.591"
          y1="219"
          y2="277.795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F2F3"></stop>
          <stop offset="1" stopColor="#D3E7D0"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_1087_1836"
          x1="3.752"
          x2="1.126"
          y1="0.375"
          y2="4.502"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D4B6A"></stop>
          <stop offset="1" stopColor="#383F50"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_1087_1836"
          x1="2.251"
          x2="0.429"
          y1="0.25"
          y2="2.827"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#374A73"></stop>
          <stop offset="1" stopColor="#252A34"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_1087_1836"
          x1="464.02"
          x2="464.02"
          y1="248.798"
          y2="686.905"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.019" stopColor="#F0F0F0"></stop>
          <stop offset="0.104" stopColor="#DEDEDE"></stop>
          <stop offset="1" stopColor="#B9BBBE"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_1087_1836"
          x1="554.933"
          x2="554.933"
          y1="367.698"
          y2="416.506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2E2E2"></stop>
          <stop offset="1" stopColor="#C4C4C4"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_1087_1836"
          x1="500.36"
          x2="424.192"
          y1="236.644"
          y2="671.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A2C32"></stop>
          <stop offset="0.375" stopColor="#18191E"></stop>
          <stop offset="0.599" stopColor="#18191E"></stop>
          <stop offset="1" stopColor="#303136"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_1087_1836"
          x1="459.125"
          x2="458.52"
          y1="419.623"
          y2="468.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8FAFB"></stop>
          <stop offset="1" stopColor="#AFC9F0"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_1087_1836"
          x1="459.125"
          x2="458.52"
          y1="419.623"
          y2="468.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8FAFB"></stop>
          <stop offset="1" stopColor="#AFC9F0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
