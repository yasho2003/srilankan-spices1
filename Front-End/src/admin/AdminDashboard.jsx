function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button>Add New Product</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ceylon Cinnamon</td>
            <td>1200</td>
            <td>30</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
