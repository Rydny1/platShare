import Image from "next/image";

export function Brand() {
  return (
    <div className="flex items-center gap-2.5" aria-label="PlateShare">
      <Image src="/plateshare-mark.png" alt="" width={40} height={40} className="size-10 object-contain" priority />
      <span className="text-[17px] font-semibold tracking-tight">PlateShare</span>
    </div>
  );
}
