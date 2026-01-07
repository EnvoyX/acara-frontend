import PageHead from "@/components/commons/PageHead";

interface PropTypes {
  children: React.ReactNode;
  title?: string;
}

const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <section className="flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0">
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container p-6">{children}</div>
    </section>
  );
};

export default AuthLayout;
