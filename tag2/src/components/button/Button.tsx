import React from 'react'

type ButtonType = {
  children: React.ReactElement[] | React.ReactElement,
  padding: [number, number?, number?, number?],
  action: (name:string)=>void
}

function Button({children, padding, action}:ButtonType) {
  return <>
    <button
     onClick={()=>action("seb")}
     style={{padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`, color:"red"}}>
        {children}
    </button>
  </>
}

export default Button