import NewsListItem from "./News-list-item"


const NewsList = (props) => {

//The below are used to get specific property
// const NewsList = ({news}) => {   

    // console.log(news)

    // console.log(props.news)

    // console.log(props)\

    const news = props.news.map((item) => {
        return(
            <NewsListItem
                key = {item.id}
                item = {item}
            />
        )
    })


    return(
        <>
            {/* {props.news.map((item) => {
                return(
                    <div>
                        <h1>
                            {item.title}
                        </h1>

                        <div>
                            {item.feed}
                        </div>
                    </div>
                )
            })}
         */}
        {news}
            
        {/* React Children */}
        {props.children}
        
        
        </>
    )
}

export default NewsList