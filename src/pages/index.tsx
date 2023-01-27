import MainBody from '../components/Main/MainBody';
import MainFirstArea from '../components/Main/MainFirstBody';
import ItemDetailTitle from '../components/ItemDetails/ItemDetailTitle';
export default function Home() {
  return (
    <>
      <MainBody children={MainFirstArea()} />
    </>
  );
}

import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
    <Nav/>
    </>
  )
}
