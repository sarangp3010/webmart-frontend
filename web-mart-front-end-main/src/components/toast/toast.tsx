import { toast } from "react-toastify";

const errorToast = (message: string) => {
  toast.error(message);
  toast.clearWaitingQueue();
};

const successToast = (message: string) => toast.success(message);
const warningToast = (message: string) => toast.warning(message);

export { errorToast, successToast, warningToast };
