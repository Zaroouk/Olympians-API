import React, { useState } from 'react'

export function FormStates() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [gparent, setGparent] = useState("")
    const [mparent, setMparent] = useState("")
    const [weapon, setWeapon] = useState("")
    const [camp, setCamp] = useState("")

    const handleSubmit =()=>{
        const handleFname = (e:any) => {
        setFname(e.target.value)
    }
    const handleLname = (e:any) => {
        setLname(e.target.value)
    }
    const handleGparent = (e:any) => {
        setGparent(e.target.value)
    }
    const handleMparent = (e:any) => {
        setMparent(e.target.value)
    }
    const handleWeapon = (e:any) => {
        setWeapon(e.target.value)
    }
    const handleCamp = (e:any) => {
        setCamp(e.target.value)
    }
}

}

// export default FormStates