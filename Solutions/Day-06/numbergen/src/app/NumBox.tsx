function test_prime(n: number)
{

  if (n===1 || n ===0)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

interface NumBoxType {
  number: number;
  // You can add more props here
}

const NumBox = (props: NumBoxType) => {

  let number = props.number;
  
    let bg: string = "#228B22" 

    if (test_prime(number)){
        bg= "#FF5733";
    }
    else if((number % 2) != 0){
        bg = "#FFBF00"
        
    }
        
        return (

        <div style={{
            backgroundColor : bg,
            width: '4vw',
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '1ch',
        }}>
        
        <h1>
        {number}
        </h1>

        </div>
        
        )
    }

export default NumBox;