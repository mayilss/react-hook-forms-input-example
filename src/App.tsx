import { useForm } from "react-hook-form";
import "./App.css";
import Input from "./components/Input";

interface FormData {
  username: string;
  password: string;
}

function App() {
  const methods = useForm<FormData>({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Input control={methods.control} label="Username" name="username" />
      <Input
        control={methods.control}
        label="Password"
        name="password"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
