import React,{Component} from 'react';

import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NewsList from './components/News-list';

// This is the 3rd way of adding css
import './styles/styles.css';

import JSON from './db.json';


// Functional Component
// const App = () => {

//     console.log(JSON)

//     return(

//         <div className='salam'>
//             {/* <h1>
//                 Assalam O Alaikom!!
//             </h1> */}

//             <Header/>

//         </div>
//     )
// }

// Class Component
class App extends Component {

    state = {
        news:JSON
    }

    render(){


        return(
    
            <div>
    
                <Header/>

                <NewsList
                    news = {this.state.news}
                />
    
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
