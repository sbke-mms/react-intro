type ColorPalate = "white" | "green" | "red"

type Button2Types = {
    style: React.CSSProperties & {
        color:ColorPalate,
        backgroundColor:ColorPalate
    },
    title: string
}

function Button2({style, title}:Button2Types) {
    //gleicher name wie css attribut - kurzschreibweise
  return <>
    <button style={style}>
        {title}
    </button>
  </>
}

export default Button2