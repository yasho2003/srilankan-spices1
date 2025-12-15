function AddProduct() {
  return (
    <div>
      <h2>Add New Spice</h2>
      <input placeholder="Spice Name" /><br />
      <input placeholder="Price" /><br />
      <input placeholder="Stock" /><br />
      <textarea placeholder="Description"></textarea><br />
      <input placeholder="Image URL" /><br />
      <button>Save</button>
    </div>
  );
}

export default AddProduct;
