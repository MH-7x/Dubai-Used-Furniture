import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h1 className="text-center">Page Not Found!</h1>
      <div className="md:w-96 h-96 w-11/12 relative ">
        <Image
          alt="page not found"
          title="page not found"
          src={"/notFound.svg"}
          fill
          className="absolute object-contain "
        />
      </div>
    </div>
  );
}
