import React from "react";
import ContentLoader from "react-content-loader";

// import { css } from "@emotion/core";
// import HashLoader from "react-spinners/HashLoader";

export const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={284}
    viewBox="0 0 340 284"
    // backgroundColor="#bdbdbd"
    // foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="8" rx="3" ry="3" width="98" height="24" />
    <rect x="0" y="50" rx="3" ry="3" width="78" height="12" />
    <rect x="0" y="90" rx="3" ry="3" width="98" height="8" />
    <rect x="0" y="110" rx="3" ry="3" width="70" height="8" />
    <rect x="0" y="130" rx="3" ry="3" width="70" height="8" />
    <rect x="0" y="150" rx="3" ry="3" width="98" height="8" />
    <rect x="0" y="170" rx="3" ry="3" width="70" height="8" />
    <rect x="0" y="190" rx="3" ry="3" width="98" height="8" />
    <rect x="0" y="210" rx="3" ry="3" width="50" height="8" />
    <rect x="0" y="230" rx="3" ry="3" width="70" height="8" />
    <rect x="0" y="250" rx="3" ry="3" width="40" height="8" />


  </ContentLoader>
);

export const Catalog = (props) => (
  <ContentLoader viewBox="0 0 990 1050" height={900} width={1000} {...props}>
    <rect x="48" y="10" rx="8" ry="8" width="210" height="250" />
    <rect x="48" y="270" rx="0" ry="0" width="120" height="17" />
    <rect x="48" y="300" rx="0" ry="0" width="200" height="22" />

    <rect x="290" y="10" rx="8" ry="8" width="210" height="250" />
    <rect x="290" y="270" rx="0" ry="0" width="120" height="17" />
    <rect x="290" y="300" rx="0" ry="0" width="200" height="22" />

    <rect x="530" y="10" rx="8" ry="8" width="210" height="250" />
    <rect x="530" y="270" rx="0" ry="0" width="120" height="17" />
    <rect x="530" y="300" rx="0" ry="0" width="200" height="22" />

    <rect x="770" y="10" rx="8" ry="8" width="210" height="250" />
    <rect x="770" y="270" rx="0" ry="0" width="120" height="17" />
    <rect x="770" y="300" rx="0" ry="0" width="200" height="22" />
    {/* <rect x="892" y="20" rx="8" ry="8" width="200" height="230" />
    <rect x="892" y="260" rx="0" ry="0" width="200" height="18" />
    <rect x="892" y="282" rx="0" ry="0" width="120" height="20" /> */}
    {/* <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" /> */}
    <rect x="48" y="360" rx="8" ry="8" width="210" height="250" />
    <rect x="48" y="650" rx="0" ry="0" width="200" height="18" />
    <rect x="48" y="620" rx="0" ry="0" width="120" height="22" />
    <rect x="290" y="360" rx="8" ry="8" width="210" height="250" />
    <rect x="290" y="650" rx="0" ry="0" width="200" height="18" />
    <rect x="290" y="620" rx="0" ry="0" width="120" height="22" />
    <rect x="530" y="360" rx="8" ry="8" width="210" height="250" />
    <rect x="530" y="650" rx="0" ry="0" width="200" height="18" />
    <rect x="530" y="620" rx="0" ry="0" width="120" height="22" />
    <rect x="770" y="360" rx="8" ry="8" width="210" height="250" />
    <rect x="770" y="650" rx="0" ry="0" width="200" height="18" />
    <rect x="770" y="620" rx="0" ry="0" width="120" height="22" />
    {/* <rect x="892" y="340" rx="8" ry="8" width="200" height="230" />
    <rect x="892" y="580" rx="0" ry="0" width="200" height="18" />
    <rect x="892" y="600" rx="0" ry="0" width="120" height="20" /> */}
    {/* <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" /> */}
    {/* <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" /> */}
    {/* <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" /> */}
  </ContentLoader>
);

// const override = css`
//   display: block;
//   margin: 8rem auto;
//   border-color: red;
//   @media (max-device-width: 990px) {
//     margin: 10rem 0.5rem;
//   }
// `;

// export class Spinner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//     };
//   }

//   render() {
//     return (
//       <div className="loading">
//         <HashLoader
//           css={override}
//           size={168}
//           color={"#fdb827"}
//           loading={this.state.loading}
//         />
//       </div>
//     );
//   }
// }
