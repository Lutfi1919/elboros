import ParentComponent from "../components/ParentComponent";
import ChildrenProps from "../components/ChildrenProps";
import ListItem from "../components/ListItem";

export default function Learning() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <ParentComponent />
        <hr />
        <ChildrenProps>lorem</ChildrenProps>
        <ListItem />
      </div>
    </>
  );
}
