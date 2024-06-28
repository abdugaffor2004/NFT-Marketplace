import { NAV_LINKS } from '../data/navbar';
import user from '../assets/User.svg';
import logo from '../assets/logo.svg';
import navMenu from '../assets/navMenu.svg';
import { Button } from './button';

export const Navbar = () => (
  <nav className="w-full py-5 flex justify-between items-center text-white ">
    <div className="flex items-center">
      <img src={logo} alt="storeLogo" />
    </div>

    <ul className="md_lg:flex list-none hidden justify-end items-center flex-1">
      {NAV_LINKS.map(item => (
        <li
          key={item.id}
          className="font-workSans font-semibold text-base cursor-pointer mr-[3.125rem] last:mr-0"
        >
          <a href="#">{item.title}</a>
        </li>
      ))}

      <Button icon={user} title={'Sign up'} size={'small'} />
    </ul>

    <div className="md_lg:hidden">
      <img src={navMenu} alt="burgerMenuIcon" />
    </div>
  </nav>
);
