import "./app.css"

function Editor() {  
  var font_size = 4

  let execute = e => {
    // console.log(e.target.id)
    let { currentTarget } = e
    let { id } = currentTarget
    if(id === "plus") {
      if(font_size === 7) return
        font_size++
        document.execCommand('styleWithCSS', false, true)
        document.execCommand('fontSize', false, font_size)
    } else if(id === "minus") {
      if(font_size === 1) return
        font_size--
        document.execCommand('styleWithCSS', false, true)
        document.execCommand("fontSize", false, font_size)
    } else {
      document.execCommand(id, false, id)
    }
  }

  return (
    <div className="root">
         <div className="buttons_list">
            <button className="btn" id="bold" onClick={e => execute(e)}>
              <i className="fa-solid fa-bold"></i>
            </button>
            <button className="btn" id="italic" onClick={e => execute(e)}>
              <i className="fa-solid fa-italic"></i>
            </button>
            <button className="btn" id="underline" onClick={e => execute(e)}>
              <i className="fa-solid fa-underline"></i>
            </button>
            <button className="btn" id="justifyLeft" onClick={e => execute(e)}>
              <i className="fa-solid fa-align-left"></i>
            </button>
            <button className="btn" id="justifyCenter" onClick={e => execute(e)}>
              <i className="fa-solid fa-align-center"></i>
            </button>
            <button className="btn" id="justifyRight" onClick={e => execute(e)}>
              <i className="fa-solid fa-align-right"></i>
            </button>
            <button className="btn" id="justifyFull" onClick={e => execute(e)}>
              <i className="fa-solid fa-align-justify"></i>
            </button>
            <button className="btn" id="insertOrderedList" onClick={e => execute(e)}>
              <i className="fa-solid fa-list-ol"></i>
            </button>
            <button className="btn" id="insertUnorderedList" onClick={e => execute(e)}>
              <i className="fa-solid fa-list"></i>
            </button>
            <button className="btn" id="plus" onClick={e => execute(e)}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <button className="btn" id="minus" onClick={e => execute(e)}>
              <i className="fa-solid fa-minus"></i>
            </button>

         </div>

         <div contentEditable id="content">
         </div>
    </div>
  );
}

export default Editor;
