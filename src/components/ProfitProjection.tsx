import { useState, useMemo } from "react";
import { IndianRupee, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProfitProjection() {
  const [customers, setCustomers] = useState(50);
  const [avgOrder, setAvgOrder] = useState(200);
  const [increase, setIncrease] = useState(15); // %

  const result = useMemo(() => {
    const dailyRevenue = customers * avgOrder;
    const extraDaily = (dailyRevenue * increase) / 100;
    const monthly = extraDaily * 30;

    return {
      dailyRevenue,
      extraDaily,
      monthly,
    };
  }, [customers, avgOrder, increase]);

  return (
    <div className="glass rounded-2xl p-6 mt-10">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="text-primary" size={18} />
        Profit Projection
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label>Customers / Day</Label>
          <Input
            type="number"
            value={customers}
            onChange={(e) => setCustomers(Number(e.target.value))}
          />
        </div>

        <div>
          <Label>Avg Order Value (₹)</Label>
          <Input
            type="number"
            value={avgOrder}
            onChange={(e) => setAvgOrder(Number(e.target.value))}
          />
        </div>

        <div>
          <Label>Expected Increase (%)</Label>
          <Input
            type="number"
            value={increase}
            onChange={(e) => setIncrease(Number(e.target.value))}
          />
        </div>
      </div>

      {/* RESULTS */}
      <div className="grid md:grid-cols-3 gap-4 text-center">

        <div className="bg-background/40 p-4 rounded-xl">
          <p className="text-xs text-muted-foreground">Current Daily Revenue</p>
          <p className="text-lg font-bold">
            ₹{result.dailyRevenue.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-green-500/10 p-4 rounded-xl">
          <p className="text-xs text-muted-foreground">Extra / Day</p>
          <p className="text-lg font-bold text-green-600">
            ₹{result.extraDaily.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="text-xs text-muted-foreground">Extra / Month</p>
          <p className="text-xl font-bold text-primary flex items-center justify-center gap-1">
            <IndianRupee size={18} />
            {result.monthly.toLocaleString("en-IN")}
          </p>
        </div>

      </div>

      {/* 🔥 SALES PSYCHOLOGY LINE */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Even a small increase in orders can generate significant monthly profit.
      </p>
    </div>
  );
}