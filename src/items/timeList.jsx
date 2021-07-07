import parsetTime from './helpers/helpTime'

const ListTime = (props)=>{
    let time_line=(props.saveTime).map(item=><h3>{parsetTime(item)}</h3>)
    //////////////////////////////////////////////////////////////////////
    let timeStore = Object.values(localStorage);
    let timeLocalStor = timeStore.map(item=><h3>{parsetTime(item)}</h3>)
   

    return (
        <div className="timeList">
        
            <div>
            {time_line}
            </div>
            <div>
            {timeLocalStor}
            </div>
        </div>
    )

}

export default ListTime;