export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0

}

export function setCustomProperty(elem, prop, value){
    elem.stlye.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc) {
    setCustomProperty(elem, prop, getcustomProperty(elem, prop) + inc)
}