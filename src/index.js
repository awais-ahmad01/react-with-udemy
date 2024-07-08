import React,{Component} from 'react';

import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NewsList from './components/News-list';
import Footer from './components/Footer';
import Life from './components/Life-cycle';

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
        unmount:true,
        active:false,
        news:JSON,
        filtered:[],
        footerText:'I am a happy footer'
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1
        });

        this.setState({
            filtered
        })
    }


    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true
        })
    }


    render(){

        const {filtered,news,active,footerText} =  this.state;


        return(
    
            <div>
    
                <Header
                    active={active}
                    changeColor={this.changeColor}
                    keyword={this.getKeywords}
                />

                <NewsList
                    news={filtered.length === 0 ? news : filtered }
                >
                    <h1>I am a Children</h1>

                </NewsList>

                {this.state.unmount ? <Life/>: null}

                <button onClick={()=> this.setState({
                    unmount: !this.state.unmount
                })}>Mount/Unmount</button>
                

                <Footer
                    footerText = {footerText}
                />
    
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
