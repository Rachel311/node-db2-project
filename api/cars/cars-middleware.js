const Car = require('./cars-model');
const db = require('../../data/db-config');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({ status: 404, message: "car with id <car id> is not found"});
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const err = { status: 400 };
  const { name, budget } = req.body;
  if (name === undefined) {
    err.message = "<field name> is missing"
  } else {
    next();
  }
};

const checkVinNumberValid = async (req, res, next) => {
  try {
    const carValid = await db("cars")
      .where("vin", req.body.name.trim())
      .first();
      if (carValid) {
        next({ status: 400, message: "vin <vin number> is invalid"});
      } else {
        next();
      }
  } catch (err) {
    next(err);
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const carExists = await db('cars')
      .where('name', req.body.name.trim())
      .first();
      if (carExists) {
        next({ status: 400, message: "vin <vin number> already exists"})
      } else {
        next()
      }
  } catch (err) {
    next(err);
  }
};


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
