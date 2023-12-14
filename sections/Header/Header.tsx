import { HeaderProps } from "./Header.props";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={className} {...props}>
      Header
    </header>
  );
};
