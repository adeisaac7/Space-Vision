import right from '../Assets/arrow-right.svg'


export default function SideBar(props) {
  const {handleToggleModule, data} = props
  return (
    <div className="sidebar">
        <div onClick={handleToggleModule} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModule}>
                <img src={right} className='right'/>
            </button>
        </div> 
    </div>
  )
}
