const Deities = (props) => {

    return (
    <div>
        <div><b>Deity:</b> {props.name}</div><br />
        <div><b>Depiction:</b> <br />{props.depiction}</div><br />
        <div><b>Gender:</b> {props.genders}</div><br />
        <a href={props.URL}><div className="imgPath"><img src={props.imgPath} />Click Here to Learn More!</div></a><br />
    </div>
    )

}

export default Deities