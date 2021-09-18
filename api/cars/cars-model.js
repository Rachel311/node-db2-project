const dbConfig = require("../../data/db-config")

const getAll = () => {
  return dbConfig('cars')
};

const getById = (id) => {
  return dbConfig('cars').where("id", id).first();
};

const create = (car) => {
  const [id] = await dbConfig('cars').insert({ car })
  const newCar = await getById(id)
  return newCar
};

module.exports = {
  getAll,
  getById,
  create,
}
