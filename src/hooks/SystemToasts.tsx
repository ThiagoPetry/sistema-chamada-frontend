import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const tempo = 8000;

export const successfulNotify = (mensagem: string) => {
  toast.success(mensagem, {autoClose: tempo});
}

export const errorfulNotify = (mensagem: string) => {
  toast.error(mensagem, {autoClose: tempo});
}