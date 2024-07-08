
const NewsListItem = (props) => {
    
        return(

            <div className="list-item">
                <h1>
                    {props.item.title}
                </h1>

                <div>
                    {props.item.feed}
                </div>
            </div>

        )
    
}


export default NewsListItem