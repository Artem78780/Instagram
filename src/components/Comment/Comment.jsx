
import './style.css'

function Comment({nickName, text}) {
    return(
        <div >
            <span className='commentName'>{nickName}</span>
            <span>{text}</span>
        </div>
    )
}

export default Comment