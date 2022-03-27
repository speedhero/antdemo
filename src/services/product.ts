/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function queryProductList() {
    const data=[
        {
          id: 1,
          name: 'dva',
        },
        {
          id: 2,
          name: 'antd',
        },
      ];
   /*  return new Promise(resolve => {
      setTimeout(() => {
          console.log('------1');
          resolve(
          [
          {
            id: 1,
            name: 'dva',
          },
          {
            id: 2,
            name: 'antd',
          },
        ]);
        console.log('------2');
      }, 8000);
    }); */
    return  Promise.resolve({data:data});

  }