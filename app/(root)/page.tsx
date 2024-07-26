import React from "react";
import HeaderBox from "./HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Marwan",
    lastName: "Mamdouh",
    email: "marwanmamdouh159@gmail.com",
  };
  return (
    <section className="flex">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={4}
            totalCurrentBalance={2793.58}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 135.78 }, { currentBalance: 543.23 }]}
      />
    </section>
  );
};

export default Home;
