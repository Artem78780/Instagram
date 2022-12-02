import Navbar from '../Navbar/Navbar'
import './style.css'

function Layout({nickName, avatarUrl, id, children}) {
    return(
        <div className='layoutRoot'>
            <div>
                <Navbar 
                    nickName={nickName} 
                    avatarUrl={avatarUrl}
                    id={id}
                />
            </div>
            <div className='layoutBody'>{children}</div>
        </div>
    )
}
export default Layout