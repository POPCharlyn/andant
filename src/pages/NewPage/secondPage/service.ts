/*
 * 2022/5/18 下午2:10
 * author: francesca
 * email: 575525869@qq.com
 * service.ts
 */
import { request } from 'umi';

export async function queryTest1() {
  return request( '/api/control/cmd', {
    method: 'post',
  } );
}
