import CartItem from "./CartItem";
import courses from "../data/courses";
import Image from "next/image";

export default function FeaturedCourses() {
  const allCourses = courses;

  return (
    <div style={{ backgroundColor: "rgb(165,225,235)" }}>
      <Image
        src="/cloud-reverse.png"
        alt="Cloud background"
        layout="responsive"
        width={1920}
        height={250}
      />{" "}
      <h1 className="text-center  mb-5 text-3xl sm:text-4xl text-white text-shadow marheymatn ">
        دوره های پربازدید
      </h1>
      <hr className="border-t-2 border-yello-400 my-4" />
      <div className="mx-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {allCourses.map((course) => (
          <CartItem
            key={course.id}
            imageURL={course.imageURL}
            title={course.title}
            description={course.description}
            price={course.price}
            qty={course.qty}
            duration={course.duration}
          />
        ))}
      </div>
      <Image
        src="/cloud.png"
        alt="Cloud background"
        layout="responsive"
        width={1920}
        height={250}
      />
    </div>
  );
}
