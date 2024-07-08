
// // import React from 'react';
// // Another Method
// import React, {Component} from 'react';




// // const getTheYear = () => {
// //     const newDate = new Date();
// //     return newDate.getFullYear();
// // }



// // Functional Component
// // const Header = () => {
     
// //     const getTheYear = () => {
// //         const newDate = new Date();
// //         return newDate.getFullYear();
// //     }

// //     return(
// //         <>
// //             <div>
// //                 The Date is {getTheYear()}
// //             </div>
// //         </>
// //     )


// // }



// // Adding Styles
// // This is the one way of adding css
// // let styles = {
// //     header:{
// //         background:'red'
// //     },
// //     logo:{
// //         color:'blue',
// //         fontFamily:'Anton',
// //         textAlign:'center'
// //     }
// // }


// // we can use this outside and inside the class also but inside class we dont use const
// // const inputChange = () =>{
// //     console.log('I was Changed!!')
// // }


// // Class Component
// // class Header extends React.Component{
// // Another Method
// class Header extends Component{


//     // State

//     // state ={
//     //     title:'The Keywords are:',
//     //     keywords:'',
//     //     count: 0,
//     //     active:false
//     // }

//     inputChange = (event) =>{
//         // console.log('I was Changed!!')
//         // console.log(event.target.value)

//         const value = event.target.value === '' ? false:true

//         this.setState({
//             keywords: event.target.value,
//             active: value
//         })
//     }

//     // changeColor(){

//     //     const value = this.state.active ? false:true

//     //     this.setState({
//     //         active:value
//     //     })
//     // }


//     // addOne(){
//         // this.setState({
//         //     count: this.state.count + 1
//         // })
//         // Another way which results same as above
//         // this.setState((state, props)=>({
//         //     count: state.count + 1
//         // }))
//     // }
     
//     render(){
//         return(
//             <>
//                 {/* <div style={styles.header}>
//                    <div style={styles.logo}>Logo</div>
//                    <input/>
//                 </div> */}
// {/* 
//                 <header style={{background:`${this.state.active ? 'red':'blue'}`}}>
//                     <div 
//                         // className='logo'
//                         // onClick={() => console.log('I was Clicked')}
//                     >Logo</div>
//                     <input
//                         // This is used for outside function
//                         // onChange={inputChange}
                        
//                         // This is use for inside
//                         // onChange={this.inputChange}


//                         // another way
//                         // onChange={this.inputChange()}  we cannot use it like this 
//                         // we will use it like below
//                         onChange={(event) => this.inputChange(event)}
//                     />

//                     {/* <div>{this.state.title}</div>
//                     <div>{this.state.keywords}</div>

//                     <div>{this.state.count}</div>
//                     <button onClick={()=>this.addOne()}>Add One</button> */}

//                     <button onClick={() => this.changeColor()}>Change Color</button>
//                 </header> */}


//             </>
//         )
//     }


// }



// export default Header



const Header = (props) => {
    return (
        <>
            <header className={props.active ? 'active': 'non-active'}>
                <div className="logo">Code news</div>
                <input onChange={props.keyword} />
                <button onClick={props.changeColor}>Change it</button>
            </header>
        </>
    )
}

export default Header;