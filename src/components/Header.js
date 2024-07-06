
// import React from 'react';
// Another Method

import React, {Component} from 'react';




// const getTheYear = () => {
//     const newDate = new Date();
//     return newDate.getFullYear();
// }



// Functional Component
// const Header = () => {
     
//     const getTheYear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear();
//     }

//     return(
//         <>
//             <div>
//                 The Date is {getTheYear()}
//             </div>
//         </>
//     )


// }



// Adding Styles
// This is the one way of adding css
// let styles = {
//     header:{
//         background:'red'
//     },
//     logo:{
//         color:'blue',
//         fontFamily:'Anton',
//         textAlign:'center'
//     }
// }


// we can use this outside and inside the class also but inside class we dont use const
// const inputChange = () =>{
//     console.log('I was Changed!!')
// }


// Class Component
// class Header extends React.Component{
// Another Method
class Header extends Component{

    inputChange = (event) =>{
        // console.log('I was Changed!!')
        console.log(event.target.value)
    }
     
    render(){
        return(
            <>
                {/* <div style={styles.header}>
                   <div style={styles.logo}>Logo</div>
                   <input/>
                </div> */}

                <header>
                    <div 
                        className='logo'
                        onClick={() => console.log('I was Clicked')}
                    >Logo</div>
                    <input
                        // This is used for outside function
                        // onChange={inputChange}
                        
                        // This is use for inside
                        // onChange={this.inputChange}


                        // another way
                        // onChange={this.inputChange()}  we cannot use it like this 
                        // we will use it like below
                        onChange={(event) => this.inputChange(event)}
                    />
                </header>


            </>
        )
    }


}



export default Header