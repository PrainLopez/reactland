"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import catList from "@/data/catList.json";
import imageMapping from "@/data/imageMap.json";

// Types
type ContentItem = {
  name: string;
};

type CatItem = {
  catName: string;
  content: ContentItem[];
};

const imageMap: { [key: string]: string } = imageMapping;

// Component
const Selector = function () {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="">Select Item</Button>
      </DrawerTrigger>
      <DrawerContent
        className="
        border-neutral-700 
        w-full max-h-[75vh] mx-auto
        "
      >
        <DrawerHeader></DrawerHeader>
        <ScrollArea className="h-full overflow-auto">
          <div className="mx-8 flex flex-wrap justify-evenly">
            {catList.map((cat: CatItem) => (
              <Card
                key={cat.catName}
                className="
              border-amber-900 bg-amber-950 
              mx-2 my-1 
              w-auto min-w-96 max-w-md
              "
              >
                <CardHeader>
                  <CardTitle className="mx-1.5 text-xl text-amber-500">
                    {cat.catName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-4">
                  {cat.content.map((item: ContentItem) => (
                    <Button
                      key={item.name}
                      className="
                    flex flex-col justify-center 
                    overflow-hidden hover:overflow-visible 
                    bg-neutral-400/50 hover:bg-neutral-500 
                    w-[5rem] h-[7rem] p-0 m-1
                    "
                    >
                      <Image
                        className="m-1"
                        src={imageMap[item.name]}
                        alt={item.name}
                        width={60}
                        height={60}
                      />
                      <span className="mt-1">{item.name}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default Selector;