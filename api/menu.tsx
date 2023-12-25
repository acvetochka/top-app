import { API } from "@/app/api";
// import { firstLevelMenu } from "@/helpers/firstLevelMenu";
import { MenuItem } from "@/interfaces/menu.interface";

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  // const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  // if (!firstCategoryItem) {
  //   console.log("not found");
    // return {
    //   notFound: true,
    // };
  

  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory
    }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });
  // console.log("revalidating getMenu");
  return res.json();
}
