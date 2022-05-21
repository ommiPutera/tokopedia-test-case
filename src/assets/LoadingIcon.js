const LoadingIcon = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "40px auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
      animationPlayState: "running",
      animationDelay: "0s",
    }}
    width="60px"
    height="60px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx={50}
      cy={50}
      r={30}
      stroke-width="8"
      stroke="#e20712"
      stroke-dasharray="50.26548245743669 50.26548245743669"
      fill="none"
      stroke-linecap="round"
    >
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
    </circle>
  </svg>
);

export default LoadingIcon;