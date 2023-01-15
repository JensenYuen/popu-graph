import React from "react";
import { toast, ToastContainer } from 'react-toastify';

interface props {
  message: string;
}

const Toast = ({ message }: props) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: false
  })

  return (
    <ToastContainer autoClose={3000} />
  )
}

export default Toast;
