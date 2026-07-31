type Props = {
  nama: string;
  umur: number;
  sudahMenikah: "sudah" | "belum";
};

const PropsComponent = ({ nama, umur, sudahMenikah }: Props) => {
  return (
    <div>
      <h1>
        Nama {nama}, saya berusia {umur}, dan saya {sudahMenikah} menikah
      </h1>
    </div>
  );
};

export default PropsComponent;
