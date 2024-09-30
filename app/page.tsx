"use client";

import FactoryCreate from "@/components/glues/factoryCreate";
import ItemCombobox from "@/components/glues/ItemCombobox";
import { useState } from "react";

const Home = function () {
  const [inputSelect, setInputSelect] = useState("");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ItemCombobox select={inputSelect} setSelect={setInputSelect} />
          <FactoryCreate />
        </div>
      </main>
    </div>
  );
};

export default Home;
