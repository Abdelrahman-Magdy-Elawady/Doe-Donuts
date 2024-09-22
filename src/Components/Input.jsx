import { cn } from "../Utils/cn";
export default function Input({
  formProperties,
  name = "name",
  required = false,
  validate = false,
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
  //--------------------------

  //--------------------------
  return (
    <label className={cn("flex flex-col gap-1 mb-1", styles?.global)}>
      <input
        className={cn(
          "bg-transparent w-full border-2 border-current rounded-full  text-current placeholder:text-current placeholder:capitalize placeholder:font-bold px-8 py-4 text-lg outline-0 ",
          styles?.input
        )}
        {...rest}
        {...register(name, {
          required: required && `${name} is required`,
          validate: validate
            ? (value) => {
                if (!value.match(validate?.pattern)) {
                  return validate?.msg ?? true;
                }
                return true;
              }
            : false,
        })}
      />

      {errors[name] && (
        <div
          className={cn(
            "text-red-600 text-end text-[.75rem] md:text-base capitalize px-1",
            styles?.errorMsg
          )}
        >
          {errors[name].message}
        </div>
      )}
    </label>
  );
}
