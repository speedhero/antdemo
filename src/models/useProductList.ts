import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';

export default function useProductList(params: { pageSize: number; current: number }) {
  const msg = useRequest(() => queryProductList());

 /*  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  }; */
  console.log('msg:'+JSON.stringify(msg));
  console.log('data:'+JSON.stringify(msg.data));
  const deleteProducts=(id:string)=>{console.log('delete :'+id) }
  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}