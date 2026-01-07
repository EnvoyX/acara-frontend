import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardMember from "@/components/views/Member/Dashboard";

const DashboardMemberPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard Member"
      type="member"
    >
      <DashboardMember />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
