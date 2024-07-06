
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


// Class Component
// class Header extends React.Component{
// Another Method
class Header extends Component{
     
    render(){
        return(
            <>
                {/* <div style={styles.header}>
                   <div style={styles.logo}>Logo</div>
                   <input/>
                </div> */}

                <header>
                    <div className='logo'>Logo</div>
                    <input/>
                </header>


            </>
        )
    }


}



export default Header