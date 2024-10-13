import * as actions from "@/actions";
import Table from "../components/Table";
import { Cars } from "../types/Cars";

export default async function Page() {
  const cars: Cars = await actions.getCars(10);
  const car = await actions.getCar(14338101);
  console.log(car);

  return (
    <>
      <Table cars={cars} />
    </>
  );
}
