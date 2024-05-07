import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function MenuDrop() {
  return (
    <div className="fixed text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            More
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            style={{
              width: "100px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            className="absolute origin-top-right text-black text-sm"
          >
            <Menu.Item>
              <button className="px-2 py-2 text-sm border-b-2 border-black w-full">
                Settings
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="px-2 py-2 text-sm border-b-2 border-black w-full">
                Log out
              </button>
            </Menu.Item>
            <Menu.Item>
              <Link href="/Gallery">
                <button className="px-2 py-2 text-sm w-full hover:bg-black hover:text-white">
                  Visit Gallery
                </button>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
