import React, {Component} from 'react';

// Props in class based component


class Footer extends Component{



    render(){

        return(
            <footer>
                {this.props.footerText}
            </footer>
        )
    }
}

export default Footer