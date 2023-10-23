import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, setAuthToken } from "../../lib/api";
import { IUser } from "../interface/user";
// import { AUTH_LOGIN } from "../../../stores/rootReducer";

export function useLogin() {
  const [form, setForm] = useState<IUser>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  async function handleLogin() {
    try {
      const response = await API.post("/auth/signin", form);
      console.log("berhasil login", response);
      setAuthToken(localStorage.token);
      localStorage.setItem("token", response.data.token);
      //   dispatch(AUTH_LOGIN(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return { handleChange, handleLogin };
}
