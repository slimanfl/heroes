"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";
import Header from "./Header";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";
3;

const SiteHeader = () => {
  useThemeMode();
  //
  const pathname = usePathname();

  const renderHeader = () => {
    let headerClassName =
      "shadow-sm border-b border-b-gray-200 dark:border-b dark:border-neutral-700";

    return <Header className={headerClassName} />;
  };
  return <>{renderHeader()}</>;
};

export default SiteHeader;
