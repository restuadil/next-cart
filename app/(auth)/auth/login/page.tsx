import { AuthLayout } from "@/components/Layouts/AuthLayout";
import LoginPage from "@/components/Views/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login Page",
};

export default function Page() {
  return (
    <AuthLayout type="login">
      <LoginPage />
    </AuthLayout>
  );
}
