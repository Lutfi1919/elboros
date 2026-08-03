type Props = {
  children: React.ReactNode;
};

const ChildrenProps = ({ children }: Props) => {
  return (
    <div>
      <p>ini adalah children props</p>
      <p>{children}</p>
    </div>
  );
};

export default ChildrenProps;
