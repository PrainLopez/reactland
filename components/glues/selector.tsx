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
import { Button } from "@/components/ui/button";
import { itemGrid } from "@/components/data/itemList";

export default function Selector() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="">Select Item</Button>
      </DrawerTrigger>
      <DrawerContent className="border-neutral-700">
        <div className="mx-auto w-full max-h-[75vh]">
          <DrawerHeader></DrawerHeader>
          {itemGrid.map((cat) => (
            <Card
              key={cat.catName}
              className="border-amber-900 bg-amber-950 mx-auto w-auto max-w-sm "
            >
              <CardHeader>
                <CardTitle className="mx-1 text-xl text-amber-500">
                  {cat.catName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cat.content.map((item) => (
                  <Button
                    key={item.name}
                    className="bg-neutral-400/50 hover:bg-neutral-500 w-[4.5rem] h-[4.5rem] m-[0.35rem]"
                  >
                    <Image
                      className="absolute"
                      src={item.src}
                      alt={item.name}
                      width={55}
                      height={55}
                    />
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
