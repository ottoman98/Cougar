import './topTemplate.css'
function TopTemplate ({ title, content }) {
  return (
    <>
      <div id='cards-title'>
        <h3>{title}</h3>

        {content ? <p>{content}</p> : null}

      </div>
    </>
  )
}

export default TopTemplate
