import NumBoxList from './NumBoxList'

export default function Home() {

  let testarr =  Array.from(Array(32),(x,i)=>i)
  return (
    <main
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      
  }}>
    <div>
    <h1>Number Generator</h1>
      <div style={{
            display: 'inline-grid',
            gridTemplateColumns: "auto auto auto auto auto auto auto auto",
            gap: '0.25em 0.25em'
            
        }}>
       <NumBoxList numarr={testarr}/>
      </div>
    </div>
    </main>
  )
}
