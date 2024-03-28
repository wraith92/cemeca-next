import { SideNavItemGroup } from "@/types/type";
import {
  BsEnvelope, BsGear, BsHouseDoor, BsKanban, BsListUl,
  BsQuestionCircle, BsPersonCircle, BsBriefcase, BsCardChecklist,
  BsBoxSeam
} from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Dashboards",
    menuList: [
      {
        title: 'Dashboard',
        path: '/',
        icon: <BsHouseDoor size={20} />,
      },
      {
        title: 'Interlocutor',
        path: '/interlocuteur',
        icon: <BsPersonCircle size={20} />,
      },
      {
        title: 'Action',
        path: '/Action',
        icon: <BsCardChecklist size={20} />,
      },
      {
        title: 'Company',
        path: '/societe',
        icon: <BsBriefcase size={20} />,
      }
    ]
  },
  {
    title: "Manage",
    menuList: [
      {
        title: 'Products',
        path: '/products',
        icon: <BsBoxSeam size={20} />,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/products' },
          { title: 'New', path: '/products/new' },
        ],
      },
      {
        title: 'Orders',
        path: '/orders',
        icon: <BsListUl size={20} />,
      },
      {
        title: 'Feedbacks',
        path: '/feedbacks',
        icon: <BsEnvelope size={20} />,
      }
    ]
  },
  {
    title: "Others",
    menuList: [
      {
        title: 'Settings',
        path: '/user/addUser',
        icon: <BsGear size={20} />,
      },
      {
        title: 'Help',
        path: '/help',
        icon: <BsQuestionCircle size={20} />,
      }
    ]
  },
  {
    title: "Login",
    menuList: [
      {
        title: 'Sign In',
        path: '/login',
        icon: <BsHouseDoor size={20} />,
      }
    ]
  }
];
