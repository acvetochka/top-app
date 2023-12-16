import { getMenu } from "@/api/menu";

export const Menu = async () => {
  const menu = await getMenu(0);
  return (
    <ul>
      {menu.map((item) => (
        <li>{item._id.secondCategory}</li>
      ))}
    </ul>
  );
};
