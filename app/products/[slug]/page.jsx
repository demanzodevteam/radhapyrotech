import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { notFound } from "next/navigation";
const productIndividual = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/products/${slug}`,
    { cache: "no-store" }
  );
  const { data } = await res.json();

  if (!data) {
    return notFound();
  }
  // console.log(`data : ${JSON.stringify(data)}`);

  return (
    <div className="pt-20 m-14">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-14">
        <div>
          <Image
            src={data.product_image}
            width={800}
            height={500}
            alt={data.product_name}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-2 pt-4">
          <h1 className="text-2xl font-extrabold">{data.product_name}</h1>
          <div className="flex gap-4 py-4">
            <span className="text-xl font-semibold">Price : </span>
            <span className="text-red-500 line-through text-xl font-semibold">
              ₹{data.product_reqular_price}
            </span>
            <span className="text-green-600 text-xl font-semibold">
              ₹{data.product_selling_price}
            </span>
          </div>
          <p className="text-xl font-semibold">
            Available Quantity : {data.product_piece}
          </p>
          <p className="text-xl font-semibold py-4">Box : {data.product_box}</p>
          <AddToCartButton product={data} />
        </div>
      </div>
    </div>
  );
};

export default productIndividual;
