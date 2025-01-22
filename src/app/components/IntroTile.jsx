import Image from "next/image";
export default function IntroTile({ title, description, image }) {
  return (
    <div className="flex flex-row sm:flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className=" rounded-2xl"
        priority
      />
      <div className="flex flex-col items-start sm:items-center pr-4 sm:pr-0 pt-0 sm:pt-4 ">
        <h3 className="marheymatn text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="vazirmatn text-gray-600 text-sm text-right sm:text-center">
          {description}{" "}
        </p>
      </div>
    </div>
  );
}
