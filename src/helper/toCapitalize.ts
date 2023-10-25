const toCapitalize = (name: string)=>{
    const fixedname = name.charAt(0).toUpperCase()
    return `${fixedname}${name.slice(1)}`
}

export default toCapitalize