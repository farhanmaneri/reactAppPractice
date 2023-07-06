import Item from "../item/Item";
function List() {
    const arr = ['item 1', 'item 2'];
   const items = arr.map((item, index) =>{
    return <Item key={'no'+ index} title={arr[item]} />
   });
  return (
    <div>
 
{items}

    </div>
  );
}

export default List;
