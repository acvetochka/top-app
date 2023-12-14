// import { format } from "date-fns";
import cn from "classnames";

import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      sidebar
    </aside>
    // <footer className={cn(className, styles.footer)} {...props}>
    //   <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
    // </footer>
  );
};
