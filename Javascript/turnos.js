const formTurno = document.querySelector("#form-turno");

if (formTurno) {
  formTurno.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const servicio = document.querySelector("#servicio").value;

    if (!formTurno.reportValidity()) return;

    const mensaje = [
      "Hola! Quiero consultar disponibilidad para un turno.",
      `Nombre: ${nombre}`,
      `Servicio: ${servicio}`,
      `Fecha preferida: ${fecha}`,
      `Horario preferido: ${hora}`,
    ].join("\n");

    // Número en formato internacional, sin +, espacios ni guiones.
    const telefono = "5491125634595";
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener,noreferrer");
  });
}
