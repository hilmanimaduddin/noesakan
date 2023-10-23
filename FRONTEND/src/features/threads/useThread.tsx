import { API } from "../../lib/api";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export function useThreadCard() {
  interface IGetThreads {
    content?: string;
    image?: MediaSource | Blob | string;
    user?: number;
  }
  const [form, setForm] = useState<IGetThreads>({
    content: "",
    image: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    postData();
  }

  async function postData() {
    try {
      const formData = new FormData();
      formData.append("content", form.content as string);
      formData.append("image", form.image as File);
      //   fetchData();
      const res = await API.post("/thread/", formData, { headers });
      console.log(res.config.data);
      console.log("data", formData);
      setForm(res.data);
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }

  return {
    // handlePostLike,
    handleButtonClick,
    handleSubmit,
    handleChange,
    fileInputRef,
    postData,
    // fetchData,
    // thread,
  };
}
