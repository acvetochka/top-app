import cn from "classnames";

import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "@/components";
import Logo from "../../public/logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </aside>
    // <footer className={cn(className, styles.footer)} {...props}>
    //   <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
    // </footer>
  );
};
