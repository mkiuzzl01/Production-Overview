import useProductions from "../../lib/useProductions";
import { IoIosTimer } from "react-icons/io";
import { BsFillSignYieldFill } from "react-icons/bs";

const ProductCycle = () => {
  const { productCycle } = useProductions();
  return (
    <div className="pt-5">
      <div className="flex flex-col gap-4">
        {productCycle?.map((item, idx) => (
          <div className="bg-red-200 p-5 rounded-md" key={idx}>
            <h1 className="flex items-center gap-2 text-3xl font-bold">{item?.item ==="CycleTime" || item?.item === "Throughput" ? <IoIosTimer className="text-2xl text-green-700"></IoIosTimer> :<BsFillSignYieldFill className="text-2xl text-purple-500"></BsFillSignYieldFill> } {item.item} </h1>
            <div className="text-xl font-semibold">
              <p>
                {item.value || item.percentage} {item?.value ? item?.unit :"%"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCycle;
