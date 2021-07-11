import React from "react";
import axios, { AxiosError } from "axios";

function apiErrorHandler({ error }) {
  debugger;
  if (axios.isAxiosError(error)) {
    if (error && error.response) {
      return { success: false, message: error.response.data.message };
    }
  }

  return { success: false, message: "Sorry Couldn't full fill your Request" };
}

export async function apiCall(type, endPoint, body) {
  debugger;
  switch (type) {
    case "GET":
      try {
        let { status, data } = await axios.get(
          `https://pets-1.piyushsingh6.repl.co/${endPoint}`
        );
        debugger;
        if (  status === 200) {
          return { success: true, data: data };
        }
      } catch (error) {
        return apiErrorHandler(error);
      }
    case "POST":
      try {
        let { status, data } = await axios.post(
          `https://pets-1.piyushsingh6.repl.co/${endPoint}`,
          body
        );
        if (status === 200) {
          return { success: true, data: data };
        }
      } catch (error) {
        return apiErrorHandler(error);
      }
    case "DELETE":
      try {
        let { status, data } = await axios.delete(
          `https://pets-1.piyushsingh6.repl.co/${endPoint}`,
          {
            data: body,
          }
        );
        if (status === 200) {
          return { success: true, data: data };
        }
      } catch (error) {
        return apiErrorHandler(error);
      }

    default:
      return {
        success: false,
        message: "Sorry Couldn't full fill your Request",
      };
  }
}
