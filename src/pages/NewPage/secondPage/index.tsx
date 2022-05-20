/*
 * 2022/5/18 下午1:55
 * author: francesca
 * email: 575525869@qq.com
 * index.tsx
 */
import { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { queryTest1 } from './service';
import ProCard from '@ant-design/pro-card';


const SecondPage = () => {


  const [ initInfo, setInitInfo ] = useState( undefined );


  useEffect( () => {
    queryTest1().then( res => setInitInfo( res ) );
  }, [] );


  return (
    <PageContainer>
      <ProCard>
        { initInfo }
      </ProCard>
    </PageContainer>
  );
};


export default SecondPage;
