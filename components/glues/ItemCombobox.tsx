"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

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

type Props = {
  select: string;
  setSelect: Dispatch<SetStateAction<boolean>>;
};

const ItemCombobox = function ({ select, setSelect }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="h-auto min-h-[50px]"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          {select ? (
            <>
              <Image
                src={imageMap[select]}
                alt={select}
                height="32"
                width="32"
                className="h-8 w-8"
              />
              <span className="mx-2 text-base">{select}</span>
            </>
          ) : (
            <span className="mx-2 text-base">选择物品……</span>
          )}
          <CaretSortIcon className="h-5 w-5 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="bg-blend-color-dodge">
          <CommandInput placeholder="搜索物品……" className="text-base " />
          <CommandList>
            <CommandEmpty className="text-base m-2 ml-4">
              找不到物品。
            </CommandEmpty>
            {catList.map((cat: CatItem) => (
              <CommandGroup key={cat.catName} heading={cat.catName}>
                {cat.content.map((item: ContentItem) => (
                  <CommandItem key={item.name}>
                    <Image
                      src={imageMap[item.name]}
                      alt={item.name}
                      height="32"
                      width="32"
                      className="h-8 w-8"
                    />
                    <span className="mx-2 text-base">{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ItemCombobox;
