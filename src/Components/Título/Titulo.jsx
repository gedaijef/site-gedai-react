
const Titulo = ({titulo, cor, className}) => {
  return (
    <h1 className={className} style={{color: cor, marginBlock: '2rem', textTransform: 'uppercase'}}>{titulo}</h1>
  )
}

export default Titulo