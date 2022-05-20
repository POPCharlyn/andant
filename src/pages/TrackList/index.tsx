/*
 * 2022/5/18 下午3:15
 * author: francesca
 * email: 575525869@qq.com
 * index.tsx
 */
import React, { useEffect, useState, useRef } from 'react';
// import { Bmap, MapvglView, MapvglLayer } from 'react-bmapgl';
//样式
import Style from './index.less';

import ConfigJson from '@/assets/custom_map_config.json';

const TrackList: React.FC = ( props ) => {
  const { Map, MapvglView, MapvglLayer } =require('react-bmapgl');
  //初始化
  const [ localInfo, setLocalInfo ] = useState( [] );

  //地图图层实例对象
  // const carLayer = useRef( null );
  //测试运行车辆图层对象
  const mapLayer = useRef( null );
  /***********************************************************************/

  useEffect(
    () => {
      // 处理经纬度数据并设置
      let info = handle( props.localInfo );
      if ( info.length ) {
        setLocalInfo( info );
      }
    },
    [ props.localInfo ]
  );

  // 处理经纬度数据
  const handle = ( arr ) => {
    let arr1 = [

    ];
    arr.map( ( item, index ) => {
      // let i = [ item.longitude, item.latitude ];
      let i = [ item.lng, item.lat ];
      arr1.push( i );
    } );
    return arr1;
  };

  // 根据点的数组自动调整缩放级别
  function setZoom( bPoints ) {
    let map = mapLayer.current.map;
    let view = map.getViewport( eval( bPoints ) );
    let mapZoom = view.zoom;
    let centerPoint = view.center;
    map.centerAndZoom( centerPoint, mapZoom );
  }

  // 处理道路数据
  const createRoadLayer = () => {
    // 处理道路数据
    let data = [];
    data = [
      {
        geometry: {
          type: 'LineString',
          coordinates: localInfo,
        },
      },
    ];

    // 将处理过的道路数据抛出
    return data;
  };

  return (
    <div id={ Style.MapLayer }>
      { localInfo.length ? (
        <Map
          ref={ ( ref ) => {
            mapLayer.current = ref;

            // 百度坐标系坐标(地图中需要使用这个)
            if ( mapLayer.current ) {
              let len = localInfo.length;
              let bPoints = new Array();
              for ( let i = 0; i < len; i++ ) {
                // 添加到百度坐标数组 用于自动调整缩放级别
                bPoints.push( {
                  lng: localInfo[ i ][ 0 ],
                  lat: localInfo[ i ][ 1 ],
                } );
              }
              // 根据点的数组自动调整缩放级别
              setZoom( bPoints );
            }
          } }
          mapStyleV2={ { styleJson: ConfigJson } }
          style={ {
            width: 700,
            height: 360,
          } }
          tilt={ 0 }
          heading={ 0 }
          enableRotate={ false }
          enabletilt={ false }
          enableScrollWheelZoom={ true }
        >
          {/* 地图图层管理器组件 */ }
          <MapvglView>
            {/* 测试道路图层 */ }
            <MapvglLayer
              type="LineLayer"
              data={ createRoadLayer() }
              options={ {
                width: 10,
                color: '#549CCB',
                style: 'road',
                renderOrder: 0,
              } }
            />
          </MapvglView>
        </Map>
      ) : (
          '-'
        ) }
      {/* 地图*/ }
    </div>
  );
};

export default TrackList;
