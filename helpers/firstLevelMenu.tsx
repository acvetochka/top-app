import CoursesIcon from "@/public/courses.svg";
import ServicesIcon from "@/public/services.svg";
import BooksIcon from "@/public/books.svg";
import ProductsIcon from "@/public/products.svg";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
