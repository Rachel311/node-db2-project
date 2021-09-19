const dbConfig = require("../../data/db-config")

const getAll = () => {
  return dbConfig('cars')
};

const getById = (id) => {
  return dbConfig('cars').where("id", id).first();
};

const create = (car) => {
  const [id] = dbConfig('cars').insert({ car })
  const newCar = getById(id)
  return newCar
};

module.exports = {
  getAll,
  getById,
  create,
}
