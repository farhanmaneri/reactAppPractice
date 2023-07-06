function AddItem({ onAdd }) {
  let itemName = "";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAdd(itemName);
    console.log(itemName);
  };
  const onImputChangeHandler = (event) => {
    itemName = event.target.value;
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="">Item Name </label>
          <input id="my_input" onChange={onImputChangeHandler} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddItem;
