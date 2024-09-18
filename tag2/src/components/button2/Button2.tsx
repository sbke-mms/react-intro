type ColorPalate = "white" | "green" | "red"

type Button2Types = {
    style: React.CSSProperties & {
        color:ColorPalate,
        backgroundColor:ColorPalate
    },
    title?: "Save" | "Upload" | "Download"
}

function Button2({style, title = "Save"}:Button2Types) {
    //gleicher name wie css attribut - kurzschreibweise
  return <>
    <button style={style}>
        {title}
    </button>
  </>
}

export default Button2