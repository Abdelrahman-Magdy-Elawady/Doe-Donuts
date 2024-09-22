import { cn } from "../Utils/cn";

export default function TextArea({
  formProperties,
  label = "label",
  name = "name",
  required = false,
  styles = {
    global: "",
    input: "",
    errorMsg: "",
  },
  className, //to neglect and not override style global
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = formProperties;

  return (
    <label className={cn("flex flex-col gap-2 w-full", styles?.global)}>
      <div className="flex justify-between items-center gap-1 capitalize">
        <div className=" font-bold text-lg">{label}</div>
        {errors.comment && (
          <div
            className={cn(
              "text-red-600 text-[.75rem] md:text-base px-1",
              styles?.errorMsg
            )}
          >
            {errors.comment.message}
          </div>
        )}
      </div>
      <textarea
        className={cn(
          "resize-none bg-transparent w-full border-2 border-current rounded-2xl text-current placeholder:text-current  placeholder:capitalize  px-8 py-4 text-base outline-0 ",
          styles?.input
        )}
        {...register("comment", {
          required: required || `${label} is required`,
        })}
        {...rest}
        style={{
          fieldSizing: "content",
        }}
      />
    </label>
  );
}
