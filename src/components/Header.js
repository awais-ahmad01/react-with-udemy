
const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}




const Header = () => (
    <>
        <div>
            The Date is {getTheYear()}
       </div>
    
    </>
)

export default Header