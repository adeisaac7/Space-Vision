import info from '../Assets/circle-info.svg'



export default function Footer(props) {
  const {showModule, handleToggleModule, data} = props
  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
          <h1>APOD PROJECT</h1> 
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModule}>
            <img src={info}/>
        </button>
    </footer>
  )
}
