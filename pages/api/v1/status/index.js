function status(request, response) {
  response
    .status(200)
    .json({ message: "professor do curso.dev é uma pessoa acima da média" });
}

export default status;
