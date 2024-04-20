export function addLocalStorageStep1(user, email, phone) {
  const selectedOptions =
    JSON.parse(localStorage.getItem("selectedOptions")) || [];

  // Agregar la nueva opción seleccionada
  selectedOptions.push({
    user: user,
    email: email,
    phone: phone,
  });

  // Guardar las opciones seleccionadas actualizadas en el localStorage
  localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));

  router.push("/ste-02");
}
