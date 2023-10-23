import { ChangeEvent, useState } from "react";
import API from "../lib/api";
import { useNavigate } from "react-router-dom";
import { IUserRegister } from "../features/interface/user";
export function useHooksRegister() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState<IUserRegister>({
    email: "",
    username: "",
    fullname: "",
    password: "",
    alamat: "",
    image:"",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post("/auth/register", formRegister);
      console.log("data Register", response);
      // localStorage.setItem("token", response.data.token);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
    // console.log("FormRegister Data", formRegister);
  }
  return { handleChange, handleRegister };
}