import { useGetCookies } from "@/hooks";
import { setLoginModal, useAppDispatch, useAppSelector } from "@/redux/slices";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { bookAppointment } from "@/actions";

type Props = {
  listingId: number;
};

const appointmentSchema = z.object({
  date: z.string().nonempty("Date is required"),
  time: z.string().nonempty("Time is required"),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

const AppointmentCard: React.FC<Props> = ({ listingId }) => {
  const { token, isLoading } = useGetCookies();
  const dispatch = useAppDispatch();
  const { loginModal } = useAppSelector((state) => state.registerationModals);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
  });

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      reset();
    },
  });

  const handleToggleLoginModal = () => dispatch(setLoginModal(!loginModal));

  const onSubmit = (data: AppointmentForm) => {
    if (token) {
      mutate({ ...data, listingId });
    } else {
      handleToggleLoginModal();
    }
  };

  if (isLoading) {
    return (
      <div className="shadow-one border rounded-md p-4 col-span-2 flex justify-center items-center">
        loading...
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
     
    >
      <p className="text-lg font-medium">Book Appointment</p>
      <div className="my-5">
        <label htmlFor="book-date">Choose Date</label>
        <div className="my-2 border py-2 px-2">
          <input
            type="date"
            id="book-date"
            {...register("date")}
            className="w-full"
          />
        </div>
        <div className="min-h-5">
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="book-time">Choose Time</label>
        <div className="my-2 border py-2 px-2">
          <input
            type="time"
            id="book-time"
            {...register("time")}
            className="w-full"
          />
        </div>
        <div className="min-h-7">
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
          {isSuccess && (
            <p className="text-green-500 text-sm flex items-center justify-center pt-2">
              Appointment Added Successfully
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 py-2 bg-primary w-full rounded-md text-white"
        disabled={isPending}
      >
        {isPending ? "loading..." : "Book"}
      </button>
    </form>
  );
};

export default AppointmentCard;
