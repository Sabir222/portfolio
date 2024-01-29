"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Toaster, toast } from "sonner";

interface FormProps {
  //we cant do   type FormSchemaType = z.infer<typeof schema>;
  fullName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
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
  const submitData = async (data: FormProps) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setLoading(false);
        toast.success("Email sent");
      }
    } catch (err) {
      toast.error("Message not sent please try again!");
      console.log("this is an error idiot try to fixe it", err);
    }

    reset();
  };

  return (
    <>
      <div className=" p-[32px] py-48  ">
        <div className="max-w-[1000px] mx-auto">
          <form
            className="flex flex-col gap-2 p-4 dark:bg-black dark:ring-gray-500  rounded-xl bg-white/20 md:p-6 shadow-md ring-gray-200"
            onSubmit={handleSubmit(submitData)}
          >
            <label htmlFor=""> Full Name</label>
            {errors.fullName && (
              <span className="text-red-300">{errors.fullName.message}</span>
            )}
            <input
              type="text"
              className="py-2 pl-4 rounded-md dark:bg-black dark:ring-[1px] ring-gray-500"
              placeholder="John Wick"
              {...register("fullName")}
            />
            <label htmlFor=""> Email</label>
            {errors.email && (
              <span className="text-red-300">{errors.email.message}</span>
            )}
            <input
              type="email"
              className="py-2 pl-4 rounded-md dark:bg-black dark:ring-[1px] ring-gray-500"
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
              className="p-4 rounded-md dark:bg-black dark:ring-[1px] ring-gray-500 "
              placeholder="Write your message here."
              {...register("message")}
            ></textarea>

            <button
              className="flex gradient-background self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px]  cursor-pointer "
              type="submit"
            >
              {loading ? <Loader2 className=" animate-spin" /> : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
