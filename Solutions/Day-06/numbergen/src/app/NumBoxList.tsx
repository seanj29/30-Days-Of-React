import NumBox from "./NumBox";

const NumBoxList = ({numarr = [0,1]}) => {

    const listofnums = numarr.map((num) => (
        <li key = {num} style={{display: 'block'}}>
            <NumBox number = {num}></NumBox>
        </li>
    ))

   return listofnums
}

export default NumBoxList;