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
  // {
  //   url: '/account',
  //   slug: 'account',
  //   name: "Profile",
  //   icon: "UserIcon",
  //   i18n: "Profile",
  // },
  {
    header: "YOUR BUSINESS",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: '/request',
        icon: "GitPullRequestIcon",
        name: "Request",
        slug: "request",
        i18n: "Request",
      },
      {
        url: null,
        name: "Buyer",
        icon: "ShoppingBagIcon",
        i18n: "Buyer",
        submenu: [
          {
            url: '/apps/eCommerce/shop',
            name: "Pending",
            slug: "pending",
            i18n: "pending",
          },
          {
            url: '/apps/eCommerce/wish-list',
            name: "Completed",
            slug: "completed",
            i18n: "completed",
          },
        ]
      },
      {
        url: null,
        name: "Seller",
        icon: "ShoppingCartIcon",
        i18n: "Seller",
        submenu: [
          {
            url: '/apps/eCommerce/shop',
            name: "Pending",
            slug: "pending",
            i18n: "pending",
          },
          {
            url: '/apps/eCommerce/wish-list',
            name: "Completed",
            slug: "completed",
            i18n: "completed",
          },
        ]
      },
    ]
  },
  {
    header: "TRANSACTIONS",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: null,
        name: "Deposit",
        icon: "CreditCardIcon",
        i18n: "Deposit",
        submenu: [
          {
            url: '/deposit',
            name: "Add Fund",
            slug: "deposit",
            i18n: "deposit",
          },
          {
            url: '/apps/eCommerce/wish-list',
            name: "View All",
            slug: "view",
            i18n: "view",
          },
        ]
      },
      {
        url: null,
        name: "Withdrawal",
        icon: "SendIcon",
        i18n: "Withdrawal",
        submenu: [
          {
            url: '/deposit',
            name: "Cash Out",
            slug: "withdraw",
            i18n: "withdraw",
          },
          {
            url: '/apps/eCommerce/wish-list',
            name: "View All",
            slug: "view",
            i18n: "view",
          },
        ]
      },
    ]
  },
  {
    header: "DISPUTES",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: '/tickets',
        name: "Tickets",
        icon: "MessageSquareIcon",
        slug: "tickets",
        i18n: "tickets",
      },
    ]
  },
  {
    header: "SUPPORT",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: '/contact-us',
        slug: 'contact-us',
        name: "Contact Us",
        icon: "PhoneIcon",
        i18n: "FAQ",
      },
      {
        url: '/faq',
        slug: 'faq',
        name: "FAQ",
        icon: "HelpCircleIcon",
        i18n: "FAQ",
      },
      {
        url: '/knowledge-base',
        slug: 'knowledge-base',
        name: "Knowledge Base",
        icon: "InfoIcon",
        i18n: "FAQ",
      },
    ]
  },
]
