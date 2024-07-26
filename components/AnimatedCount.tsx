"use client";
import CountUp from "react-countup";

const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," prefix="$" decimals={2} duration={4} />
    </div>
  );
};

export default AnimatedCount;
