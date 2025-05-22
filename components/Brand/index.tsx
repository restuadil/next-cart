import Image from "next/image";
import { features } from "./brand";
import instance from "@/config/instance";
import { IBrand } from "@/types/brand";

const Brand = async () => {
  const brand: IBrand[] = (await instance.get("/brands")).data.data;
  return (
    <div className="mx-20 my-24">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-extrabold leading-snug text-green-600">
          Our Brands
        </h1>
        <div className="text-lg font-semibold text-slate-500">See all</div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-4">
        {brand ? (
          brand.map(({ name, logo }, idx) => (
            <div
              key={idx}
              className="flex cursor-pointer flex-col items-center justify-center rounded-md p-4 transition hover:scale-105"
            >
              <Image
                src={logo}
                alt={name}
                width={100}
                height={100}
                priority
                className="object-contain"
                style={{
                  height: "auto",
                  width: "auto",
                }}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="mt-16 grid grid-cols-4">
          {features.map(({ Icon, title, subtitle }, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Icon size={50} className="text-green-600" />
              <div>
                <h1 className="text-base font-semibold text-slate-700">
                  {title}
                </h1>
                <span className="text-sm text-slate-500">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brand;
