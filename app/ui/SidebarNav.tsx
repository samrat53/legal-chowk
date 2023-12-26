"use client";

import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiBookmark
} from "react-icons/hi";

export default function SidebarNavigation() {
  
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="bg-gray-100 h-[100vh]" >
      <Sidebar.Logo href="#" img="" className="bg-gray-100 p-10 -mt-[20px] mx-[-20px] hover:bg-gray-300 transition-colors" >
        Logo Clickable
      </Sidebar.Logo>
      <Sidebar.Items className="bg-gray-100 -mt-[20px] mx-[-20px] px-5 pb-5 hover:bg-gray-200 transition-colors" >
        <Sidebar.ItemGroup >
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiBookmark}>
            Your Bookmarks
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
