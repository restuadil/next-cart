import { AuthLayout } from "@/components/Layouts/AuthLayout";
import RegisterPage from "@/components/Views/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Register Page",
};

export default function Page() {
  return (
    <AuthLayout type="register">
      <RegisterPage />
    </AuthLayout>
  );
}
