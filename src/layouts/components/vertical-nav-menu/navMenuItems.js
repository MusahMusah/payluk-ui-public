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
            url: '/buyer-pending',
            name: "Pending",
            slug: "buyer-pending",
            i18n: "buyer-pending",
          },
          {
            url: '/buyer-completed',
            name: "Completed",
            slug: "buyer-completed",
            i18n: "buyer-completed",
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
            url: '/seller-pending',
            name: "Pending",
            slug: "seller-pending",
            i18n: "seller-pending",
          },
          {
            url: '/seller-completed',
            name: "Completed",
            slug: "seller-completed",
            i18n: "seller-completed",
          },
        ]
      },
    ]
  },
  {
    header: "TRANSACTIONS",
    icon: "PackageIcon",
    i18n: "Transactions",
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
            url: '/deposit-view',
            name: "View All",
            slug: "deposit-view",
            i18n: "deposit-view",
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
            url: '/cash-out',
            name: "Cash Out",
            slug: "withdraw",
            i18n: "withdraw",
          },
          {
            url: '/withdrawal-view',
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
