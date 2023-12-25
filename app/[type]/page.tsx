// import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { firstLevelMenu } from "@/helpers/firstLevelMenu";
// import { firstLevelMenu } from "@/helpers/firstLevelMenu";
// import { MenuItem } from "@/interfaces/menu.interface";
// import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
// import { ProductModel } from "@/interfaces/product.imterface";
// import axios from "axios";
import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { ParsedUrlQuery } from "querystring";

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  const page = await getPage(params.type);
  return {
    title: page?.metaTitle,
  };
}

export async function generateStaticParams() {
  const typeParam = firstLevelMenu.flatMap((p) => p.route);

  if (!typeParam) {
    console.log("not found");
    return {
      notFound: true,
    };
  }
  console.log(typeParam);
  return { type: typeParam };

  // const menu = await getMenu(firstCategoryItem.id);
  //   const menu = await getMenu(0);
  //   return menu.flatMap((item) =>
  //     item.pages.map((page) => {
  //       // console.log(page);
  //       return { alias: page.alias };
  //     })
  //   );
}

export default async function PageProducts({ params }: { params: { type: string } }) {
  //   console.log("alias", params.alias);
  //   const page = await getPage(params.alias);
  //   if (!page) {
  //     notFound();
  //   }
  return <div>{params.type}</div>;
}
