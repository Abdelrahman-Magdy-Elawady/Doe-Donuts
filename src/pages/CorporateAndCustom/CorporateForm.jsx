import { Input, TextArea, Button } from "../../Components/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
/*------------------------------------------------*/
const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};
/*------------------------------------------------*/
export default function CorporateForm() {
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;
  //--------------------------------------------------------
  const submitHandler = async (data) => {
    //send data to backend ,but i don't have backend now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-[48rem] mx-auto px-4 flex flex-col items-center gap-8 py-16"
    >
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <Input
          formProperties={formProperties}
          type="text"
          name="name"
          placeholder="first Name"
          required
          validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
        />
        <Input
          formProperties={formProperties}
          type="mail"
          name="email"
          placeholder="email"
          required
          validate={{
            pattern: /\w+@[a-z]+\.[a-zA-Z]{2,}/,
            msg: "invalid mail",
          }}
        />
        <Input
          formProperties={formProperties}
          type="text"
          name="phone"
          placeholder="phone number"
          required
          validate={{
            pattern: /^(010|011|012)\d{8}$/,
            msg: "must start with 010 ,011 or 012 followed by 8 numbers ",
          }}
        />
        <Input
          formProperties={formProperties}
          type="number"
          name="budget"
          min={1}
          placeholder="budget"
          required
        />
        <Input
          formProperties={formProperties}
          type="date"
          name="date"
          min={getTomorrowDate()}
          required
        />
        <Input
          formProperties={formProperties}
          type="number"
          name="number of people"
          min={1}
          placeholder="number of people"
          required
        />
      </div>
      <TextArea
        formProperties={formProperties}
        name="msg"
        label="enter your message"
        placeholder="Do you have specific flavours in mind? Colours? Mini or regular-sized donuts? Is it for a baby shower, hens party, birthday etc? Please provide as much information as possible so we can give you the best option"
        required="your message is required"
      />
      <Button>
        {isSubmitting ? (
          "submitting...."
        ) : (
          <div className="flex justify-center items-center gap-2">
            submit <FaArrowRightLong />
          </div>
        )}
      </Button>
    </form>
  );
}
