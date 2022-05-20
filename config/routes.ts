export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name:'car',
    icon: 'table',
    path: '/cars',
    component: './CarList',
  },
  {
    name:'device',
    icon: 'table',
    path: '/devices',
    component: './DeviceList',
  },
  {
    name:'track',
    icon: 'table',
    path: '/tracks',
    component: './TrackList',
  },
  {
    name:'monitor',
    icon: 'monitor',
    path: '/monitor',
    component: './Monitor',
  },
  {
    name:'case.case-list',
    icon: 'table',
    path: '/case',
    component: './CaseList',
  },
  {
    name:'map',
    icon: 'group',
    path: '/map',
    component: './Bmap',
  },
  {
    path:'/NewPage',
    name:'NewPage',
    icon:'form',
    routes:[
      {
        path: '/',
        redirect: '/NewPage/firstPage',
      },
      {
        name: 'firstPage',
        icon: 'smile',
        path: '/NewPage/firstPage',
        routes:[
          {
            name:'firstChildrenPage',
            path: '/NewPage/firstPage/firstChildrenPage',
            routes:[
              {
                name: 'firstGroundChildrenPage',
                path: '/NewPage/firstPage/firstChildrenPage/firstGroundChildrenPage',
                component: './NewPage/firstPage/firstChildrenPage/firstGroundChildrenPage',
              }
            ]
          }
        ]
      },
      {
        name: 'secondPage',
        icon: 'smile',
        path: '/NewPage/secondPage',
        component: './NewPage/secondPage',
      },
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
