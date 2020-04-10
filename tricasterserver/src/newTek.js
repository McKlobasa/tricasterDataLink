export default class newTek {
  constructor( IP ) {
    this.IP = IP
  }
  setDataLink (dataLinkName, text) {
    const url = `http://${this.IP}/v1/datalink?key=${dataLinkName}&value=${text}`

    fetch(url)
      .then((response) => {
        return response
      })
      .then((data) => {
        console.log(data)
      });

  }
  triggerMacro (macroName) {
    console.log('triggerng macro')
    const url = `http://${this.IP}/v1/trigger?name=${macroName}`

    fetch(url)
      .then((response) => {
        return response
      })
      .then((data) => {
        console.log(data)
      })

  }
  
}
