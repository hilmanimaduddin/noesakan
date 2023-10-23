import { ChangeEvent, useState } from "react";
import API from "../lib/api";
import { IUserLogin } from "../features/interface/user";
import { useNavigate } from "react-router-dom";


export function hooksLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formLogin, setFormLogin] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", formLogin);
      localStorage.setItem("token", response.data.token)
      console.log("data Login berhasil!", response);
      navigate("/");
    } catch (error) {
      console.log('ini bagian error handle login :', error);
    }
    
  }
  return { handleChange, handleLogin };
}
