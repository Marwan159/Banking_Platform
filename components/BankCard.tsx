import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif text-white font-black">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-bold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white"> ●● / ●●</h2>
            </div>
            <p className="text-14 font-bold text-white tracking-[1.1px]">
              ●●●● ●●●● ●●●● <span className="text-16 font-semibold">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image width={20} height={24} src="/icons/paypass.svg" alt="pay" />
          <Image
            width={45}
            height={32}
            src="/icons/mastercard.svg"
            alt="mastercard"
            className="ml-6"
          />
        </div>
        <Image
          width={316}
          height={190}
          className="absolute top-0 left-0"
          src="/icons/lines.svg"
          alt="lines"
        />
      </Link>
    </div>
  );
};

export default BankCard;
