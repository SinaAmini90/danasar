import IntroTile from "./IntroTile";
export default function Introduction() {
  return (
    <section className=" py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="marheymatn text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          داناسر چیست؟
        </h2>
        <hr className="border-t-2 border-yello-400 my-4" />

        {/* Tagline */}
        <p className="vazirmatn text-gray-600 text-lg sm:text-xl mb-8">
          بستری برای آموزش والدین و کودکان با تمرکز بر مهارت‌های دیجیتال
        </p>
        <p className="vazirmatn text-base sm:text-lg">
          ما تلاش می کنیم که مهارت استفاده از تکنولوژی های جدید را به فراگیران
          آموزش دهیم تا در زندگی روزمره خود از آن استفاده کنند. همچنین بستری را
          فراهم کردیم که علاقمندان به برنامه نویسی بتوانند با زبان تصویری اسکرچ،
          مفاهیم پایه ای برنامه نویسی را بیاموزند.
        </p>

        {/* Features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <IntroTile
            image="/learning.jpg"
            title="آموزش دیجیتال"
            description="مهارت‌های دیجیتال با زبانی ساده و قابل فهم برای همه."
          ></IntroTile>
          <IntroTile
            image="/programing.jpg"
            title="زبان برنامه نویسی"
            description="آموزش زبان اسکرچ به کودکان برای یادگیری پایه‌های برنامه‌نویسی."
          ></IntroTile>
          <IntroTile
            image="/source.jpg"
            title="منابع یادگیری"
            description="ارائه منابع و محتواهای به‌روز برای والدین و کودکان."
          ></IntroTile>
          <IntroTile
            image="/aim.jpg"
            title="هدف گذاری"
            description="کمک به والدین برای توانمندسازی کودکانشان در دنیای دیجیتال."
          ></IntroTile>
        </div>
      </div>
    </section>
  );
}
