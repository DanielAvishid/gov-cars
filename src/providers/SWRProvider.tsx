"use client";
import fetcher from "@/services/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }: { children: ReactNode }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
