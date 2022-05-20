/*
 * 2022/5/20 下午5:47
 * author: francesca
 * email: 575525869@qq.com
 * index.tsx
 */
import React, { PureComponent, Fragment } from 'react';
import BMapGL  from 'BMapGL'; // eslint-disable-line
import PropTypes from "prop-types";


export default class BaiduMap extends PureComponent {

  static propTypes = {
    mapProps: PropTypes.object,
    style: PropTypes.object,
    getMapInstance: PropTypes.func,
  };

  static defaultProps = {
    mapProps: {
      lng:116.280190,
      lat:40.049191,
      zoom:17,
      minZoom:5,
      maxZoom:20,
      enableScrollWheelZoom:true,
      enableDragging:true,
      heading:0,
      tilt:0,
      style:null,
      controls:[],
      markers:[],
      infoWindows:[]
    },
    style:{
      width:'100%',
      height:'100%'
    },
    getMapInstance:null
  };

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    const { mapProps:{
      lng,
      lat,
      zoom,
      minZoom,
      maxZoom,
      enableScrollWheelZoom,
      enableDragging,
      heading,
      tilt,
      style,
      controls,
      markers,
      infoWindows
    },
      getMapInstance
    }=this.props;
    const map = new BMapGL.Map("container");    // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(lng, lat), zoom);  // 初始化地图,设置中心点坐标和地图级别
    map.setMinZoom(minZoom);
    map.setMaxZoom(maxZoom);
    if(enableScrollWheelZoom){
      map.enableScrollWheelZoom();     // 开启鼠标滚轮缩放
    }
    if(!enableDragging){
      map.disableDragging();     // 禁用地图拖拽
    }
    map.setHeading(heading);
    map.setTilt(tilt);
    if(style!==null){
      if(style.styleId){
        map.setMapStyleV2({styleId: style.styleId});
      }
      // else if(style.styleJson){
      //    const styleJson=require(`./Style/mapStyle_${style.styleJson}`) // eslint-disable-line
      //   if(styleJson!==null){
      //     map.setMapStyleV2({styleJson});
      //   }
      }
    }

    // 渲染控件
   const controls.forEach(item=>{
      const controltype=item.type;
      let control=null;
      let opt={};
      if(item.option){
        const [width,height]=item.option.offset;
        opt={
          // 控件的停靠位置
          anchor: item.option.anchor,
          // 控件基于停靠位置的偏移量（可选）
          offset: new BMapGL.Size(width, height)
        }
      }
      switch (controltype) {
        case 'scale':
          control=new BMapGL.ScaleControl(opt);
          break;
        case 'zoom':
          control=new BMapGL.ZoomControl(opt);
          break;
        case 'location':
          control=new BMapGL.LocationControl(opt);
          break;
        case 'cityList':
          control=new BMapGL.CityListControl(opt);
          break;
        case '3D':
          control=new BMapGL.NavigationControl3D(opt);
          break;
        default:;
      }
      if(control!==null){
        map.addControl(control);
      }
    })

    // 渲染点覆盖物
    markers.forEach(item=>{
      if(item.position&&item.position.length===2){
        const position=new BMapGL.Point(item.position[0], item.position[1])
        const opt={};
        if(item.option){
          if(item.option.offset&&item.option.offset.length===2){
            opt.offset=new BMapGL.Size(item.option.offset[0],item.option.offset[1]);
          }
          if(item.option.icon&&item.option.icon.url&&item.option.icon.size){
            opt.icon=new BMapGL.Icon(item.option.icon.url, new BMapGL.Size(item.option.icon.size[0], item.option.icon.size[1]));
          }
          if(item.title){
            opt.title=item.option.title;
          }
        }
        const marker = new BMapGL.Marker(position,opt);
        item.events.forEach(event=>{
          marker.addEventListener(event.type,event.eventFunc);
        })
        map.addOverlay(marker);
      }
    })

    // 渲染信息窗口
    infoWindows.forEach(item=>{
      if(item.position&&item.position.length===2){
        const position=new BMapGL.Point(item.position[0], item.position[1])
        let opts={};
        if(item.option){
          opts=item.option;
        }
        const infoWindow=new BMapGL.InfoWindow(item.content,opts)
        map.openInfoWindow(infoWindow, position);
      }
    })

    getMapInstance(map)
  }

  render() {
    const { style }=this.props;
    return (
      <Fragment>
        <div style={style} id="container" />
      </Fragment>
    );
  }
}
