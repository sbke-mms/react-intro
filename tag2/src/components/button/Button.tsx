import React from 'react'

function Button({children}:{children :React.ReactElement}) {
  return <>
    <button>
        {children}
    </button>
  </>
}

export default Button