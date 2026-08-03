import PropsComponent from "./PropsComponent"

const ParentComponent = () => {
  return (
    <>
      {/* contoh penggunaan props yang pakai default values */}
      <PropsComponent umur={18} sudahMenikah="belum"/>
      
      <PropsComponent nama="Ahmad" umur={18} sudahMenikah="belum"/>
    </>
  )
}

export default ParentComponent
