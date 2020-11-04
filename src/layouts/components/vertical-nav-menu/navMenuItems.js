/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/dashboard/analytics',
    slug: "dashboard-analytics",
    name: "Dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
  },
  {
    url: '/account',
    slug: 'account',
    name: "Profile",
    icon: "UserIcon",
    i18n: "Profile",
  },
  // {
  //   url: null,
  //   name: "Contracts",
  //   // tag: "3",
  //   tagColor: "warning",
  //   icon: "PackageIcon",
  //   i18n: "Contracts",
  //   submenu: [
  //     {
  //       url: '/contract-request',
  //       name: "Contract Request",
  //       slug: "contract-request",
  //       i18n: "Contract Request",
  //     },
  //     {
  //       url: '/buyer',
  //       name: "Buyer",
  //       slug: "buyer",
  //       // tagColor: "warning",
  //       // tag: "3",
  //       i18n: "buyer",
  //     },
  //     {
  //       url: '/seller',
  //       name: "Seller",
  //       slug: "seller",
  //       i18n: "seller",
  //     },

  //   ]
  // },
  {
    url: '/contract-request',
    icon: "PackageIcon",
    name: "Contract Request",
    slug: "contract-request",
    i18n: "Contract Request",
  },
  {
    url: '/buyer',
    name: "Buyer",
    slug: "buyer",
    icon: "ShoppingCartIcon",
    // tag: "3",
    i18n: "buyer",
  },
  {
    url: '/seller',
    name: "Seller",
    icon: "ShoppingCartIcon",
    slug: "seller",
    i18n: "seller",
  },
  {
    url: '/tickets',
    name: "Tickets",
    icon: "MessageSquareIcon",
    slug: "tickets",
    i18n: "tickets",
  },
  {
    url: '/deposit',
    slug: 'deposit',
    name: "Deposit",
    icon: "CreditCardIcon",
    i18n: "Deposit",
  },
  {
    url: '/withdrawal',
    slug: 'withdrawal',
    name: "Withdrawal",
    icon: "CreditCardIcon",
    i18n: "Withdrawal",
  },
  {
    url: '/faq',
    slug: 'faq',
    name: "FAQ",
    icon: "HelpCircleIcon",
    i18n: "FAQ",
  },
]
