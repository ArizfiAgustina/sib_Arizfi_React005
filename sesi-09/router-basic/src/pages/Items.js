import { Outlet } from "react-router-dom";
import { getItems } from "../items";

export default function items() {
  const items = getItems();
  return (
    <div>
      <h1>Items page</h1>
      <p>Select an item to be shown</p>
      <table>
        <tr>
          <th>item</th>
          <th>Action</th>
        </tr>
        {items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </table>

      <Outlet />
    </div>
  );
}
