import NumBox from "./NumBox";
interface NumBoxListType {
    numarr: number[];
    // You can add more props here
  }


function NumBoxList(props: NumBoxListType) {
    let numarr = props.numarr;

    const listofnums = numarr.map((num) => (
        <li key = {num} style={{display: 'block'}}>
            <NumBox number = {num}></NumBox>
        </li>
    ))

   return listofnums
}

export default NumBoxList;