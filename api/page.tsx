import { API } from "@/app/api";
// import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/page.interface";

export async function getPage(alias: string): Promise<TopPageModel | null> {
    await new Promise((res) => setTimeout(() => res(""), 3000));
    const res = await fetch(`${API.topPage.byAlias}/${alias}`, {
      next: { revalidate: 10 },
    });
    console.log("response api/page", res.json);
  if (!res.ok) {
    return null;
  }
  console.log("revalidating getPage");
  return res.json();
}
