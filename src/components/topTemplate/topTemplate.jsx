import './topTemplate.css'
function TopTemplate ({ title, content }) {
  return (
    <>
      <div id='cards-title'>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

export default TopTemplate
