import LoginPage from "@/components/Views/LoginPage";
import RegisterPage from "@/components/Views/RegisterPage";
import { notFound } from "next/navigation";

export default async function AuthPage({
  params,
}: {
  params: { authType: "login" | "register" };
}) {
  const { authType } = await params;
  if (authType !== "login" && authType !== "register") {
    notFound();
  }

  return <div>{authType === "login" ? <LoginPage /> : <RegisterPage />}</div>;
}
