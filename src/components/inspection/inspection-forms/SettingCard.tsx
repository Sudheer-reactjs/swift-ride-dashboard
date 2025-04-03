import Link from 'next/link';

interface SettingCardProps {
  label: string;
  count: number;
  link: string; 
}

const SettingCard = ({ label, count, link }: SettingCardProps) => {
  return (
    <Link href={link} className="self-stretch px-2.5 py-1.5 border-b border-zinc-800 inline-flex justify-center items-center gap-2.5 w-full">
      <div className="flex-1 justify-start text-[#71717a] text-sm font-normal leading-tight">
        {label}
      </div>
      <div className="px-2 py-2 bg-zinc-950 rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-800 flex justify-center items-center gap-2">
        <div className="justify-start text-neutral-50 text-sm font-normal leading-tight"> 
          {count}
        </div>
      </div>
    </Link>
  );
};
export default SettingCard;