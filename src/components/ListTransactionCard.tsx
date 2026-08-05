import TransactionCard from "./TransactionCard";
import type { TransactionResponse } from "../types/Transaction";

export default function ListTransactionCard({ data }: TransactionResponse) {
  return (
    <>
        <div className="">
            {data.map((item) => (
                <TransactionCard item={item} />
            ))}
        </div>
    </>
  );
}
