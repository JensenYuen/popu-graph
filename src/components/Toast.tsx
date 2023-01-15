import React from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../stylesheets/toast.scss"

interface props {
  type: string;
  message: string;
}

const Toast = ({ type, message }: props) => {
  switch (type) {
    case 'error':
      toast.error(message, {
        toastId: 'error',
        className: 'error-toast',
        position: toast.POSITION.TOP_RIGHT,
        draggable: false,
        autoClose: 3000
      })
      break;

    default:
      break;
  }


  return (
    <ToastContainer transition={Zoom} limit={1}/>
  )
}

export default Toast;
