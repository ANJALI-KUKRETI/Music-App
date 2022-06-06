import './Home.css'
import Left from './left/Left'
import Right from './right/Right'
function Home(){
return(
    <div className='mainPage'>
        <div className='layer2'>
            <Left/>
            <Right/>
        </div>
    </div>
)
}

export default Home