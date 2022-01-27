
function GestionPerfilesBusqueda() {
  const handleCallback = (values) =>{
      console.log(values);
  }
  
  
  return(
  
  <div>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            
            <Link to="/usuarios/gestionDePerfiles/crear"> 
            <Button type="primary" size="small">
              Nuevo Perfil
            </Button>
            </Link>
          </Col>
      <SearchForm array={GestionPerfilesSearchMock} parentCallback={handleCallback} title="Busqueda de Perfiles" />
      <Table data={dataGestionPerfiles} columns={columnsGestionPerfiles} expandible={false} editable={true}/>

  </div>);
  
}

export default GestionPerfilesBusqueda;
