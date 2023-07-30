"use client";
import React, { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/20/solid";
import Limage from '../../../public/logo.png'; 
import main from '../../../public/main.png'
import Image from "next/image";

function page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  const navigation = [
    {
      id: 1,
      name: "Dashboard",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/dash"), {
        ssr: false,
      }),
    },
    {
      id: 2,
      name: "Client",
      icon: HomeIcon,
      current: true,
      component: dynamic(() => import("../../pages/client"), {
        ssr: false,
      }),
    },
    {
      id: 3,
      name: "Lead",
      icon: ClipboardDocumentListIcon,
      current: false,
      component: dynamic(() => import("../../pages/lead"), { ssr: false }),
    },
    {
      id: 4,
      name: "Team Member",
      icon: ShoppingBagIcon,
      current: false,
      component: dynamic(() => import("../../pages/teamMember"), {
        ssr: false,
      }),
    },
    {
      id: 5,
      name: "Task",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/task"), { ssr: false }),
    },
    {
      id: 4,
      name: "Email",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/email"), { ssr: false }),
    },
    {
      id: 6,
      name: "Files",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/files"), { ssr: false }),
    },
    {
      id: 7,
      name: "Video",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/video"), { ssr: false }),
    },
    {
      id: 8,
      name: "Templates",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/templates"), { ssr: false }),
    },
    {
      id: 9,
      name: "Modelling",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/modelling"), { ssr: false }),
    },
    {
      id: 10,
      name: "Settings",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/settings"), { ssr: false }),
    },
    {
      id: 11,
      name: "Payments",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/payments"), { ssr: false }),
    },
    {
      id: 12,
      name: "calculators",
      icon: UserIcon,
      current: false,
      component: dynamic(() => import("../../pages/calculators"), {
        ssr: false,
      }),
    },
  ];

  useEffect(() => {
    // Set the initial selected navigation item
    setSelectedNavItem(navigation.find((item) => item.current));
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                              "group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        <div
          className="  hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col 
        lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4
        bg-gradient-to-r from-blue-900 to-sky-800"
        >
          <div className="flex flex-shrink-0 items-center px-6 ">
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium text-gray-900">
                <Image src={main} width={200} height={200} />
              </span>
            </span>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            {/* User account dropdown */}
            <Menu as="div" className="relative inline-block px-3 text-left">
              <div>
                <Menu.Button className="group w-full rounded-md bg-transparent px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <span
                    className="flex w-full items-center justify-between"
                  >
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <Image src={Limage} width={25} height={25} />
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-medium text-white">
                          Dashboard
                        </span>
                      </span>
                    </span>
                    <Bars4Icon
                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
              </div>
            </Menu>
            {/* Navigation */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-200 text-gray-900"
                        : "text-white hover:text-gray-900 hover:bg-gray-50",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleNavItemClick(item)}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className="flex flex-col lg:pl-64">
          {/* Search header */}
          {selectedNavItem && <selectedNavItem.component />}
        </div>
      </div>
    </>
  );
}

export default page;
