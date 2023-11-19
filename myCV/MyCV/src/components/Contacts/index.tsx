type ContactsType = {
    name: string;
    desc: string
}

const Contacts = ({name,desc}: ContactsType)=>{
    return(
            <li>
                <b>{name}</b> <br /> {desc} <br />
            </li>
            
        
    )
}
export default Contacts