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
      <DrawerContent className="border-neutral-600">
        <div className="mx-auto w-full max-h-[60vh]">
          <DrawerHeader>Items</DrawerHeader>
          {itemGrid.map((cat) => (
            <div key={cat.catName}>
              <Card className="mx-auto w-auto max-w-sm">
                <CardHeader>
                  <CardTitle>{cat.catName}</CardTitle>
                </CardHeader>
                <CardContent>
                  {cat.content.map((item) => (
                    <div key={item.name}>
                      <Button>
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={64}
                          height={64}
                        />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
