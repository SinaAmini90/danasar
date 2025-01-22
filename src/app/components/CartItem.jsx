import Button from "./Button";

export default function CartItem({
  imageURL,
  title,
  description,
  price,
  qty,
  duration,
}) {
  return (
    <div className="vazirmatn w-full max-w-80 mx-auto border rounded-2xl overflow-hidden shadow-lg bg-yellow-50">
      {/* Thumbnail */}
      <img
        src={imageURL}
        alt="Video Thumbnail"
        className="w-full h-40 object-cover rounded-t-xl"
      />

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-bold text-emerald-700">{title} </h2>
        {/* Description */}
        <p className="text-sm text-gray-700">{description} </p>
        <span className="text-sm text-gray-700">{qty} جلسه </span>{" "}
        <span>| </span>
        <span className="text-sm text-gray-700">{duration} ساعت </span>
        {/* Price & Buy Button */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <span className="text-lg font-extrabold">{price} تومان</span>
          {/* Button */}
          <Button>شروع کنید</Button>
        </div>
      </div>
    </div>
  );
}
