import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogDescription } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { ArrowUpDown, History } from "lucide-react";
import { transactionHistory } from "@/data/txs";

export function HistoryModal() {
    return <Dialog>
    <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
            <History /> 
        </Button>
    </DialogTrigger>
        <DialogContent className="">
            <DialogHeader>
                <DialogTitle className="text-xl">Transaction History</DialogTitle>
                <DialogDescription className=" ">
                    Your recent transactions will appear here
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
                {transactionHistory.map((tx) => (
                    <div
                        key={tx.id}
                        className="flex items-center justify-between p-3    rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-full">
                                <ArrowUpDown className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                                <div className="font-medium">
                                    {tx.from.amount} {tx.from.symbol} → {tx.to.amount}{" "}
                                    {tx.to.symbol}
                                </div>
                                <div className="text-sm  ">{tx.time}</div>
                            </div>
                        </div>
                        <Badge
                            variant="outline"
                            className="text-green-400 border-green-400/20"
                        >
                            {tx.status}
                        </Badge>
                    </div>
                ))}
            </div>
        </DialogContent>
    </Dialog>
}
