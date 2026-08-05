import type { Transaction } from "../types/Transaction"

type Props = {
    item: Transaction
};

export default function TransactionCard({item} :Props) {
    return (
        <>
            <div className="border border-gray-200 rounded-xl p-3 mb-2 grid grid-cols-3 items-center">
                <p className="capitalize">{item.judul}</p>
                <p className="font-light capitalize text-sm opacity-60">{item.catatan}</p>
                <p className=" text-end">Rp {item.nominal.toLocaleString()}</p>
            </div>
        </>
    )
}