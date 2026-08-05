import type { Transaction } from "../types/Transaction"

type Props = {
    item: Transaction
};

export default function TransactionCard({item} :Props) {
    return (
        <>
            <div className="ring ring-inset ring-gray-300 rounded-xl p-3 mb-2 w-120 flex justify-between items-center">
                <p className="text-xl capitalize">{item.judul}</p>
                <p className="opacity-70">{item.catatan}</p>
                <p className="font-bold">Rp {item.nominal.toLocaleString()}</p>
            </div>
        </>
    )
}