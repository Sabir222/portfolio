"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface FormProps {
  fullName: string;
  email: string;
  message: string;
}
const Contact = () => {
  const schema: ZodType<FormProps> = z.object({
    fullName: z.string().min(2).max(30),
    email: z.string().email(),
    message: z.string(),
  });

  const { register, handleSubmit } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormProps) => {
    console.log("Nice!", data);
  };
  return (
    <>
      <div className=" text-white p-[32px]  ">
        <div className="max-w-[1000px] mx-auto">
          <form
            className="flex flex-col gap-2 p-4 bg-opacity-70 rounded-xl bg-zinc-700"
            onSubmit={handleSubmit(submitData)}
          >
            <label htmlFor=""> Full Name</label>
            <input
              type="text"
              className="py-2 pl-4 bg-black rounded-md "
              placeholder="John Wick"
              {...register("fullName")}
            />
            <label htmlFor=""> Email</label>
            <input
              type="email"
              className="py-2 pl-4 bg-black rounded-md"
              placeholder="John-wick@continentalhotel.com"
              {...register("email")}
            />
            <label htmlFor="">Message</label>
            <textarea
              cols={20}
              rows={10}
              className="p-4 bg-black rounded-md"
              placeholder="Write your message here."
              {...register("message")}
            ></textarea>
            <input
              type="submit"
              className="flex animation-div2 self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] bg-zinc-700 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
