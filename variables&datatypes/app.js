var inputSize = Number(prompt('Sisetage kirja suurus'))
var inputTitle = String(prompt('Sisetage kirja teema pealkiri'))
var inputHasFile = String(prompt('Kas kirjal on file?'))

inputHasFile = inputHasFile == 'jah' && true || inputHasFile == 'ei' && false

if ((!inputHasFile && inputSize > 1 ) || inputTitle.length < 1) {
    console.log('Kiri on spämm.')
} else {
    console.log('Kiri ei ole spämm.')
}