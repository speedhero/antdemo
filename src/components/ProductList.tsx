import {Table,Popconfirm,Button}  from 'antd';

const ProductList: React.FC<{ products: { name: string ,id:number}[]|undefined; onDelete: (id: string) => void }> = ({
    onDelete,
    products,
  }) => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Actions',
        render: (text:string, record:any) => {
          return (
            <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
              <Button>Delete</Button>
            </Popconfirm>
          );
        },
      },
    ];
    return <Table dataSource={products} columns={columns} rowKey={columns => columns.id}/>;
  };
  
  export default ProductList;