import type { Item } from "../types/Item";

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
];

const ListItem = () => {
  return (
        <div>
            <h1>List of fruits</h1>
            <ul>
                {
                    items.map(item => <li>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default ListItem;
