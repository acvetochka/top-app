// "use client";

import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
// import { getProduct } from "@/api/product";
import { firstLevelMenu } from "@/helpers/firstLevelMenu";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPage } from "@/sections";
// import { ProductModel } from "@/interfaces/product.interface";
// import { Description } from "@/sections/Description/Description";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ParsedUrlQuery } from "querystring";

export async function generateMetadata({ params }: { params: { alias: string } }): Promise<Metadata> {
  const page = await getPage(params.alias);
  return {
    title: page?.metaTitle,
  };
}

// const path = usePathname();

export async function generateStaticParams() {
  let menu: MenuItem[] = [];
  [...firstLevelMenu].forEach(async ({ id }) => {
    menu = await getMenu(id);
  });
  // const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => {
      // console.log("alias", page.alias);
      return { alias: page.alias };
    })
  );
}

export default async function PageProducts({ params }: { params: { type: string; alias: string } }) {
  // console.log("alias", params.alias);
  const page = await getPage(params.alias);

  if (!page) {
    notFound();
  }

  // const [products, setProducts] = useState<ProductModel[]>([]);
  // const [firstCategory, setFirstCategory] = useState(0);

  // useEffect(() => {
  //   if (page) {
  //     (async () => {
  //       const prodArray = await getProduct(page.category);
  //       if (prodArray) {
  //         setProducts(prodArray);
  //       }
  //     })();
  //     setFirstCategory(page.firstCategory);
  //   }
  // }, [page]);

  // if (page) {
  //   const prodArray = await getProduct(page.category);
  //   if (prodArray) {
  //     setProducts(prodArray);
  //   }
  //   setFirstCategory(page.firstCategory);
  // }

  console.log(page.category);
  // console.log("page", page);

  return (
    <main>
      {/* <p>{page.title}</p> */}
      <TopPage page={page} />
      {/* <Description firstCategory={} /> */}
    </main>
  );
}

// function Course({ menu, page, products }: CourseProps): JSX.Element {
//   return <>{products && products.length}</>;
// }

// export default withLayout(Course);

// export const getStaticPaths: GetStaticPaths = async () => {
//   let paths: string[] = [];
//   for (const m of firstLevelMenu) {
//     const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
//       firstCategory: m.id,
//     });
//     paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)));
//   }
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
//   if (!params) {
//     return {
//       notFound: true,
//     };
//   }
//   const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
//   if (!firstCategoryItem) {
//     return {
//       notFound: true,
//     };
//   }
//   try {
//     const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
//       firstCategory: firstCategoryItem.id,
//     });
//     if (menu.length == 0) {
//       return {
//         notFound: true,
//       };
//     }
//     const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias);
//     const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find", {
//       category: page.category,
//       limit: 10,
//     });

//     return {
//       props: {
//         menu,
//         firstCategory: firstCategoryItem.id,
//         page,
//         products,
//       },
//     };
//   } catch {
//     return {
//       notFound: true,
//     };
//   }
// };

// interface CourseProps extends Record<string, unknown> {
//   menu: MenuItem[];
//   firstCategory: TopLevelCategory;
//   page: TopPageModel;
//   products: ProductModel[];
// }
