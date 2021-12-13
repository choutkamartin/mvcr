import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageList() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center items-center w-full rounded border border-slate-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-sky-500">
              <FontAwesomeIcon
                icon={faFlag}
                size="xs"
                className="flex-shrink-0 text-sky-500"
                aria-hidden="true"
              />
              <span className="ml-3 mr-4">Language</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="sm"
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  <Link href={path} locale="cs">
                    <a
                      className={classNames(
                        router.locale == "cs"
                          ? "bg-sky-600 text-gray-100"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Čeština
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={path} locale="en">
                    <a
                      className={classNames(
                        router.locale == "en"
                          ? "bg-damask-600 text-gray-100"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      English
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}