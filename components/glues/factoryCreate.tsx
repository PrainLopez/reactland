"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import imageMapping from "@/data/imageMap.json";

const FactoryCreate = function () {
  const [prodSelect, setProdSelect] = useState("智能嵌板");

  // Types
  const imageMap: { [key: string]: string } = imageMapping;

  // Component
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="">Add factory</Button>
        </DrawerTrigger>
        <DrawerContent
          className="
        border-neutral-700 
        w-full max-h-[75vh] mx-auto
        "
        >
          <DrawerHeader></DrawerHeader>
          <ScrollArea className="h-full overflow-auto"></ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FactoryCreate;
