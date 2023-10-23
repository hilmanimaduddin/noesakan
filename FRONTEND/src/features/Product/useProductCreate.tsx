import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import API from "../../lib/api";
import { IProducts } from "../../interfaces/Product";

export default function UseProductCreate() {
  const [coba, setCoba] = useState("");
  const [form, setForm] = useState<IProducts>({
    productName: "",
    price: "",
    description: "",
    stock: "",
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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleCreateProduct();
  }

  async function handleCreateProduct() {
    const token = localStorage.getItem("token");

    console.log(token);
    try {
      const formData = new FormData();
      formData.append("productName", form.productName as string);
      formData.append("price", form.price as string);
      formData.append("description", form.description as string);
      formData.append("stock", form.stock as string);
      formData.append("image", form.image as File);
      const response = await API.post("/product/create", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCoba("serah");
      console.log("Selling Product Success", response);
    } catch (err) {
      console.log(err);
    }
  }
  const [store, setStore] = useState<any>([]);

  async function fetchData() {
    const token = localStorage.getItem("token");
    try {
      const res = await API.get("/store/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStore(res.data);
      setCoba("oke");
    } catch (error) {
      console.error({ error: "salah ya ni" });
    }
  }

  useEffect(() => {
    fetchData();
    setCoba("itu");
    console.log("coba yaaaaaaaa", coba);
  }, [coba == "serah"]);

  return {
    store,
    coba,
    form,
    setCoba,
    handleChange,
    handleSubmit,
    handleCreateProduct,
  };
}
