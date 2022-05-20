/*
 * 2022/5/18 下午3:16
 * author: francesca
 * email: 575525869@qq.com
 * index.tsx
 */
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
// import { request } from 'umi';
// import { useRequest } from '@@/plugin-request/request';

const CarList: React.FC = () => {
// const init = useRequest<{data:CarListApi}>(){
//
// }

  return (
    <PageContainer>
      <Card>
        车辆管理
      </Card>
    </PageContainer>
  );
};

export default CarList;
