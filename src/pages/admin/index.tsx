import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardAdmin from "@/components/views/Admin/Dashboard";

const DashboardAdminPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard Admin"
      type="admin"
    >
      <DashboardAdmin />
    </DashboardLayout>
  );
};

export default DashboardAdminPage;
