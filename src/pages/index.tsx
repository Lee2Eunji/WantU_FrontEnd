import MainBody from '../components/Main/MainBody';
import MainFirstArea from '../components/Main/MainFirstBody';
import ItemDetailTitle from '../components/ItemDetails/ItemDetailTitle';
export default function Home() {
  return (
    <>
      <h1>hi</h1>
      <MainBody children={MainFirstArea()} />
    </>
  );
}
