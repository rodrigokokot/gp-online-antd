import { TipoDocumentoResponse } from ".";

function PersonaResponse(value) {
    this.CodTributario = value.codTributario;
    this.EstadoCivil = value.estadoCivil;
    this.FechaNacimiento = value.fechaNacimiento;
    this.IdDomicilioLegal = value.idDomicilioLegal;
    this.IdEntidad = value.idEntidad;
    this.IdPais = value.idPais;
    this.IdPaisNacimiento = value.idPaisNacimiento;
    this.IdPersona = value.idPersona;
    this.IdTipoDocumento = value.idTipoDocumento;
    this.Mail = value.mail;
    this.Nombre = value.nombre;
    this.Apellido = value.apellido;
    this.NumeroDocumento = value.numeroDocumento;
    this.RowVersion = value.rowVersion;
    this.Sexo = value.sexo;
    this.IdDomicilioLaboral = value.idDomicilioLaboral;
    this.TipoDocumento = new TipoDocumentoResponse(value.tipoDocumento);
    this.DomicilioLegal = value.domicilioLegal;
    this.DomicilioLaboral = value.domicilioLaboral;
}

export default PersonaResponse