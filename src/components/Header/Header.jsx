// Props is always an object 
// that contains whatever properties we pass it 
// where the component is rendered
/*
{
    title: 'dynamic value depending on what was passed in
}
*/

function Header(props) {
    return (
        <h2>{props.title}</h2>
    )

}

export default Header;