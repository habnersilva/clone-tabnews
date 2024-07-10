function status(request, response) {
  response.status(200).json({
    chave: "Olá",
  });
}

export default status;
