import { RegisterView } from "@/src/view-models/register/register.view";
import { useRegisterViewModel } from "@/src/view-models/register/use-register.view-model";

export default function Register() {
  const props = useRegisterViewModel();
  return <RegisterView {...props} />;
}
