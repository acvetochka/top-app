import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { firstLevelMenu } from "@/helpers/firstLevelMenu";
import { MenuItem } from "@/interfaces/menu.interface";
// import { is } from "date-fns/locale";
// import { firstLevelMenu } from "@/helpers/firstLevelMenu";
// import { MenuItem } from "@/interfaces/menu.interface";
// import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
// import { ProductModel } from "@/interfaces/product.imterface";
// import axios from "axios";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { ParsedUrlQuery } from "querystring";

export async function generateMetadata({ params }: { params: { alias: string } }): Promise<Metadata> {
  const page = await getPage(params.alias);
  return {
    title: page?.metaTitle,
  };
}

// const path = usePathname();

export async function generateStaticParams() {
  // const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  // if (!firstCategoryItem) {
  //   console.log("not found");
  //   return {
  //     notFound: true,
  //   };
  // }

  // const menu = await getMenu(firstCategoryItem.id);

  // let menu: MenuItem[] = [];

  // [...firstLevelMenu].forEach(async ({ route, id }) => {
  //   menu = await getMenu(id);
  //   return [...menu].flatMap((item) =>
  //     item.pages.forEach((page) => {
  //       console.log("alias", page.alias);
  //       console.log("type", id, route);
  //       return { alias: page.alias, type: route };
  //     })
  //   );
  // });

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

  // return alias.map(async (a) => {
  //   console.log("a", a);
  //   const page = await getPage(a);
  //   console.log("get", page);
  //   return { type: page.firstCategory, alias: a };
  // });
}

export default async function PageProducts({ params }: { params: { type: string; alias: string } }) {
  // console.log("alias", params.alias);
  const page = await getPage(params.alias);
  // console.log("page", page);
  if (!page) {
    notFound();
  }
  return <main>{page.title}</main>;
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
