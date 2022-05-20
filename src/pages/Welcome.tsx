import React from 'react';
// import BMap from 'BMap';
// @ts-ignore
// import {BaiduMap} from 'react-baidu-maps';
// import { Helmet } from 'umi';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmapgl';
// @ts-ignore
// import { Bmap } from 'react-bmapgl';
// import {Bmap, Marker, NavigationControl, InfoWindow} from 'react-bmap';


const Welcome: React.FC = () => {
  return <Map center={ { lng: 116.402544, lat: 39.928216 } } zoom="11">
    <Marker position={ { lng: 116.402544, lat: 39.928216 } }/>
    <NavigationControl/>
    <InfoWindow position={ { lng: 116.402544, lat: 39.928216 } } text="内容" title="标题"/>
  </Map>;
};

export default Welcome;
