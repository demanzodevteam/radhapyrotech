"use client";
import { useOrderFilter } from "@/app/Context/OrderContext/OrderContextProvider";

const OrderFilter = () => {
  const { queryParam, handleReset, handleChange } = useOrderFilter();
  return (
    <div className="">
      <div className="flex gap-8 pb-6">
        <div className="col-auto">
          <input
            type="text"
            className="border-2 focus:outline-none rounded-md px-4 py-2 dark:text-inherit dark:bg-inherit"
            placeholder="Search By Name"
            onChange={handleChange}
            name="search"
            value={queryParam.search}
          />
        </div>
        <div className="col-auto">
          <select
            name="status"
            onChange={handleChange}
            className=" border-2 px-4 focus:outline-none py-[0.53rem] rounded-md dark:text-inherit dark:bg-[#1f2937]  dark:placeholder-inherit"
            value={queryParam.status}
          >
            <option value={null}>Status</option>
            <option value="pending">pending</option>
            <option value="confirmed">confirmed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>

        <div className="flex flex-row gap-4 items-center col-auto">
          <label>Start Date</label>
          <input
            type="Date"
            className=" border-2 rounded-md px-4 col-span-2 focus:outline-none py-2 dark:text-inherit dark:bg-inherit"
            onChange={handleChange}
            name="startDate"
            value={queryParam.startDate}
          />
        </div>
        <div className="flex items-center gap-4">
          <label>End Date</label>
          <input
            type="Date"
            className=" border-2 rounded-md px-4 col-span-2 focus:outline-none py-2 dark:text-inherit dark:bg-inherit"
            onChange={handleChange}
            name="endDate"
            value={queryParam.endDate}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="border-2 px-8 py-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFilter;
