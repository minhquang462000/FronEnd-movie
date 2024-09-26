
import bgImagaLogin from "@/public/images/bg-login.jpg";
import FormRegister from "@/components/Forms/FormRegister";

export interface IAppProps { }

export default function App(props: IAppProps) {

  return (
    <main
      className="w-full relative min-h-screen   bg-center  text-gray-200   bg-cover"
      style={{ backgroundImage: `url(${bgImagaLogin.src})` }}
    >
      <FormRegister />
    </main>
  );
}
