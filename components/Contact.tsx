"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface FormProps {
  //we cant do   type FormSchemaType = z.infer<typeof schema>;

  fullName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const schema: ZodType<FormProps> = z.object({
    fullName: z
      .string()
      .min(2, " Full Name must contain at least 2 character(s"),
    email: z.string().email(),
    message: z.string().min(1, "Don't be shy write something!"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormProps) => {
    console.log("Nice!", data);
    reset();
  };
  return (
    <>
      <div className=" dark:text-white text-gray-800 p-[32px]  ">
        <div className="max-w-[1000px] mx-auto">
          <form
            className="flex flex-col gap-2 p-4 backdrop-blur-sm bg-white/30 rounded-xl"
            onSubmit={handleSubmit(submitData)}
          >
            <label htmlFor=""> Full Name</label>
            {errors.fullName && (
              <span className="text-red-300">{errors.fullName.message}</span>
            )}
            <input
              type="text"
              className="py-2 pl-4 rounded-md dark:bg-black "
              placeholder="John Wick"
              {...register("fullName")}
            />
            <label htmlFor=""> Email</label>
            {errors.email && (
              <span className="text-red-300">{errors.email.message}</span>
            )}
            <input
              type="email"
              className="py-2 pl-4 rounded-md dark:bg-black"
              placeholder="John-wick@continentalhotel.com"
              {...register("email")}
            />
            <label htmlFor="">Message</label>
            {errors.message && (
              <span className="text-red-300">{errors.message.message}</span>
            )}
            <textarea
              cols={20}
              rows={10}
              className="p-4 rounded-md dark:bg-black"
              placeholder="Write your message here."
              {...register("message")}
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="flex animation-div3 self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px]  cursor-pointer text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
