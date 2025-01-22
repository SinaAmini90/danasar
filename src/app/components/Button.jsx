export default function Button({ children, moreClass }) {
  const allClasses = `${moreClass} my-2 w-fit bg-yellow-400 border-b-4 border-yellow-600 text-slate-800 vazirmatn p-3 rounded-lg shadow-lg hover:bg-yellow-500  hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform transition-all duration-300 ease-in-out`;
  return <button className={allClasses}>{children}</button>;
}
