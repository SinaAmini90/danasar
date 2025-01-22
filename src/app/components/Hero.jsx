import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="relative w-full ">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-yellow-200 via-teal-400 to-pink-500 opacity-80 -z-10"></div>
        {/* Image */}
        <div className="flex flex-col align-middle w-4/5 md:w-1/2 mx-auto pt-[3vh] relative">
          <h1 className="text-center text-3xl sm:text-4xl text-white text-shadow marheymatn ">
            مهارت‌های دیجیتال برای والدین و کودکان
          </h1>
          <p className="text-center text-sm sm:text-xl vazirmatn whitespace-nowrap py-2">
            به فرزندانتان کمک کنید تا برنامه‌نویسی را با اسکرچ بیاموزند،
            <br />
            شما هم مهارت‌های کاربردی فناوری را در کنارشان تجربه کنید!
          </p>
          <Button moreClass="mx-auto">به دنیای دیجیتال وارد شوید</Button>
          <Image
            src="/hero2.png"
            alt="یادگیری مهارتهای دیجیتال"
            width={2760}
            height={1760}
            layout="responsive"
            className="max-w-[600] mx-auto"
            priority
          />
        </div>
      </div>
      <div className="h-[3vh] bg-gradient-to-b from-pink-500 via-pink-300 to-pink-100 opacity-80"></div>
    </>
  );
}
