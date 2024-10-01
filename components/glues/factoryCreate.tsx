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
import { Input } from "@/components/ui/input";

import imageMapping from "@/data/imageMap.json";
import ItemCombobox from "./ItemCombobox";

// Types
const imageMap: { [key: string]: string } = imageMapping;

const FactoryCreate = function () {
  const [prodSelect, setProdSelect] = useState("");

  // Component
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="h-auto text-base" variant="outline">
            添加模块...
          </Button>
        </DrawerTrigger>
        <DrawerContent
          className="
        border-neutral-700 
        w-full max-h-[75vh] mx-auto
        "
        >
          <DrawerHeader></DrawerHeader>
          <ScrollArea className="h-full overflow-auto">
            <div className="mx-4 mb-4 grid grid-cols-[auto_3fr_1fr] gap-2">
              <div className="grid col-[1_/_-1] grid-cols-subgrid">
                <span className="m-2 grid self-center">模块产出</span>
                <ItemCombobox select={prodSelect} setSelect={setProdSelect} />
                <Input
                  type="number"
                  value={0}
                  min={0}
                  max={1000000}
                  className="h-auto w-auto"
                />
              </div>
              <div className="grid col-[1_/_-1] grid-cols-subgrid">
                <span className="m-2 grid self-center">模块消耗产物</span>
                <ItemCombobox select={prodSelect} setSelect={setProdSelect} />
                <Input
                  type="number"
                  value={0}
                  min={0}
                  max={1000000}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FactoryCreate;
