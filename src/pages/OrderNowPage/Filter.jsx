import { useForm } from "react-hook-form";
import { DropDown } from "../../Components/Index";
import { FaFilter } from "react-icons/fa6";

export default function Filter({ setFilterTerms }) {
  const { register, handleSubmit, reset } = useForm({});

  //--------------------------------------------------------
  const submitHandler = async (data) => {
    let tempData = { ...data };
    for (let [key, value] of Object.entries(tempData)) {
      if (value === "true") {
        tempData[key] = true;
      } else if (value === "false") {
        tempData[key] = false;
      }
      if (!value || !value?.length) {
        delete tempData[key];
      }
    }
    setFilterTerms(tempData);
  };

  const resetHandler = () => {
    reset();
    setFilterTerms({});
  };
  //--------------------------------------------------------
  return (
    <DropDown
      title="filter by :"
      className=" uppercase  w-52 z-10"
      styles={{
        list: "w-full top-full bg-[--body-bg] shadow-xl [border-radius:0_0_10px_10px] p-4 ",
        title: "justify-between border-2 p-4 rounded-full font-bold",
      }}
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" flex flex-col items-stretch justify-between gap-4 "
      >
        <button
          type="submit"
          className="underline justify-self-stretch text-end font-bold"
          onClick={() => resetHandler()}
        >
          reset
        </button>
        {[
          {
            filter: "category",
            value: "donuts",
            label: "donuts",
          },
          {
            filter: "category",
            value: "cookies",
            label: "cookies",
          },
          {
            filter: "monthlySpecial",
            value: true,
            label: "monthly special",
          },
        ].map((filterQuery, index) => (
          <label
            key={index}
            className="flex  items-center gap-4 text-lg capitalize cursor-pointer"
          >
            <input
              type="checkbox"
              {...register(filterQuery.filter)}
              value={filterQuery.value}
            />
            {filterQuery.label}
          </label>
        ))}

        <button
          type="submit"
          className=" border-[--body-text] border-2 rounded-md p-2 font-bold flex justify-center items-center gap-4 "
        >
          Filter
          <FaFilter />
        </button>
      </form>
    </DropDown>
  );
}
