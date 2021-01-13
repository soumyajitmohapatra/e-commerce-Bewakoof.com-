import React from "react";
import ContentLoader from "react-content-loader";

export const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={284}
    viewBox="0 0 340 284"
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
  </ContentLoader>
);
