import * as actions from "@/actions";
import Table from "../components/Table";
import { Cars } from "../types/Cars";
import { notFound } from "next/navigation";

export default async function Page() {
  const car = await actions.getCar(14338101);

  return (
    <>
      <Table />
    </>
  );
}
