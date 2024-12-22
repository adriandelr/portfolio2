import { Platform } from "react-native";

export const PROJECTS: any = [
  {
    date: "Mar 2021 - April 2024",
    duration: "3 years 1 months",
    title: "BCS Technology International Pty Ltd",
    description: `
    Responsible for delivering a complete, functional, tested, and responsive Front-End application
using Nuxt/VueJS. Develop a two-page component-based application with complexity in UI:
search, filters, multiple dialogs, cards, custom calendars, translation, etc. based on user stories,
design, and feature specifications.
`,
    image: require("../../assets/images/logos/logo-bcs.png"),
    images: [
      require("../../assets/images/projects/proj-bcs.png"),
      require("../../assets/images/projects/proj-bcs-1.png"),
      require("../../assets/images/projects/proj-bcs-2.png"),
      require("../../assets/images/projects/proj-bcs-3.png"),
      require("../../assets/images/projects/proj-bcs-4.png"),
      require("../../assets/images/projects/proj-bcs-5.png"),
      require("../../assets/images/projects/proj-bcs-6.png"),
      require("../../assets/images/projects/proj-bcs-7.png"),
    ],
  },
  {
    date: "Sept 2017 - Mar 2020",
    duration: "2 years 7 months",
    title: "Hospitality Marketing Concepts LLC",
    description: `Responsible for the Hybrid Mobile App development, and maintenance.

  Focused on implementation of new features, branding, testing, improvement, and fixes. In the support of numerous clients that are luxury hotels, and brands, we were able to provide them regular updates in features, fixes, and guides related to the app.

  Acquired, and trained two developers to help us in development. Close communication with the team through chats, calls, and emails are done as frequent as our client’s operational pace.

  **Developed Features**
  Features were maintained through a documented source. It includes environment instructions, platforms, plugins, checklists, and analytics.
  - Low to high complexity UI development, and fixes
  - Minimization of TypeScript Errors
  - Simplification of Icon’s Amenities Model
  - Search By Keyword, and Filter Fixes in Hotels, Outlet List
  - Date Translation
  - Multiple Benefits Link
  - Multiple Contact List 'CallUs'
  - GDPR Settings
  - Open Map Parameters for Baidu
  - In App Browser Integration
  - Local Storage Limitation
  - Categorized E-Certificates
  - Root and Jailbreak Checker Implementation
  - M4M Trial Membership
  - Analytics
  - DemoSite Web UI
  - Push Notification

  **Mobile Apps Client Showcase**
  Published in both Android and iOS stores.
  - Hilton Dining Asia Pacific
  - Marco Polo Elite
  - Clubhotel Lifestyle
  - Movenpick CircleM
  - Aryaduta Allure
  - Epicure Essential Pleasures
  - Grand Privilege
  - Fairmont Privilege Dining
  - Caravelle Classique Club
  - Priority Privilege Hanoi
  - Centara Privilege Club
          `,
    image: require("../../assets/images/logos/logo-hmc.png"),
    images: [
      require("../../assets/images/projects/proj-hmc.png"),
      require("../../assets/images/projects/proj-hmc-1.png"),
      require("../../assets/images/projects/proj-hmc-2.png"),
      require("../../assets/images/projects/proj-hmc-3.png"),
      require("../../assets/images/projects/proj-hmc-4.png"),
      require("../../assets/images/projects/proj-hmc-5.png"),
      require("../../assets/images/projects/proj-hmc-6.png"),
      require("../../assets/images/projects/proj-hmc-7.png"),
    ],
    storeLink:
      Platform.OS === "ios"
        ? "https://apps.apple.com/ph/developer/hospitality-marketing-concepts-llc/id837144091"
        : "https://play.google.com/store/apps/developer?id=Hospitality+Marketing+Concepts",
  },
  {
    date: "Dec 2014 - April 2017",
    duration: "2 years 5 months",
    title: "Accenture Philippines Inc.",
    description: `These are brief information about each project where SDLC, and methods were practiced.

  **Large Restaurant Chain and International Franchise based in US** (Agile, 20+ members)
  A billing portal that processes payment of franchise owners using Zuora Platform backed by Hybris backend.

  **Toll Highway Administrative Agency based in US** (Direct reporting, 2 members)
  UI Functionalities on Navigation, and Accordion using Ionic Framework.

  **Public Housing Agency Provider based in Hong Kong** (Agile, 5 members)
  Forms, and Tables for managing worklist, and architectural assessment using Ionic framework, and Image handling APIs. Client Feedback was impressive.

  **British Multinational Telecommunications Company based in UK** (Agile, 20+ members)
  Visual interactive banner links using pure CSS, and it is used internally by the Client.

  **Work Schedule Management in Internal Business** (Self reporting, 5+ members)
  A hybrid application specifically for tablets that manages a list of daily, and weekly tasks for a merchandise store.

  **Presentation Management in Internal Business** (Independent, 2 member)
  From the hybrid application's data structure to implementation of each interactive demo slides that were used for visiting colleagues.

  **Facilitation of AngularJS training** (Team collaboration, 4 members)
  Support for individuals on framework basics, challenges, and techniques in a classroom environment.

  **Estimation on Agile Sprint Complexity** (Independent)
  Estimation of work effort using the Agile estimator, either planning poker, or custom values to determine forecast results on project schedule, tasks, and budget prior to requirements.

  **Brown Bag Compilation** (Independent)
  Sharing knowledge, and experience on frameworks, data structures, request handling, plugins, and tools to individuals, and teams.
            `,
    image: require("../../assets/images/logos/logo-acn.png"),
    images: [
      require("../../assets/images/projects/proj-acn.png"),
      require("../../assets/images/projects/proj-acn-1.png"),
      require("../../assets/images/projects/proj-acn-2.png"),
      require("../../assets/images/projects/proj-acn-3.png"),
      require("../../assets/images/projects/proj-acn-4.png"),
      require("../../assets/images/projects/proj-acn-5.png"),
      require("../../assets/images/projects/proj-acn-6.png"),
      require("../../assets/images/projects/proj-acn-7.png"),
      require("../../assets/images/projects/proj-acn-8.png"),
    ],
  },
];
