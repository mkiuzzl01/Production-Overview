import useProductions from "../../lib/useProductions";

const ProductCycle = () => {
  const { productCycle } = useProductions();
  console.log(productCycle);
  return (
    <div>
      <div className="grid gap-4">
        {productCycle.map((item, idx) => (
          <div className="bg-red-200 p-5" key={idx}>
            <h1 className="text-3xl font-bold">{item.item}</h1>
            <div className="text-xl font-semibold">
              <p>
                {item.value || item.percentage} {item?.value ? item?.unit : "%"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCycle;
