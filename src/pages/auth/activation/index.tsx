import AuthLayout from "@/components/layout/AuthLayout";
import ActivationComponent from "@/components/views/Auth/Activation";
import { authServices } from "@/services/auth.service";

interface ActivationPageProps {
  status: "success" | "failed";
}

export default function ActivationPage(props: ActivationPageProps) {
  return (
    <AuthLayout title="Acara | Activation">
      <ActivationComponent {...props} />
    </AuthLayout>
  );
}

export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({
      code: context.query.code,
    });

    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}
