import { useState } from "react";

const useRequestGetToSend = () => {
let response = ""
  const requestGetToSend = (object) => {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const element = object[key];
          if(element)
            response = `${response}${key}=${element}&`
        }
    }
    return response
}

  return{
    requestGetToSend
  }
};
export default useRequestGetToSend;
