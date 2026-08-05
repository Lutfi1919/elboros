import TransactionCard from "./TransactionCard";
import type { TransactionResponse } from "../types/Transaction";

export default function ListTransactionCard({ data }: TransactionResponse) {
    const today = new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" }); 
    return (
        <>
            <div className="border shadow-xl border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-lg mb-3">{today}</p>
                {data.map((item) => (
                    <TransactionCard item={item} />
                ))}
            </div>
        </>
    );
}
