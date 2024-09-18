type ColorPalete = "red"|"green"|"white"

type Button2Types = {
    backgroundColor: ColorPalete,
    color:ColorPalete,
    borderColor:ColorPalete
}

function Button2({backgroundColor, color, borderColor}:Button2Types) {
    //gleicher name wie css attribut - kurzschreibweise
  return <>
    <button style={{backgroundColor, color, borderColor}}>
        click mich
    </button>
  </>
}

export default Button2