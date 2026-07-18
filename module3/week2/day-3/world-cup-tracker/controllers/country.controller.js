import Country from "../models/country.model.js"

async function getCountries(req, res) {
  try {
    const countries = await Country.find()
    res.status(200).json(countries)
  } catch (error) {
    console.log(error)
  }
}

async function getCountry(req, res) {
  try {
    const { id } = req.params
    const foundCountry = await Country.findById(id)

    res.status(200).json(foundCountry)
  } catch (error) {
    console.log(error)
  }
}

async function createCountry(req, res) {
  try {
    const {
      country,
      iso_code,
      confederation,
      is_host,
      is_debut_2026,
      tournament_status_2026,
    } = req.body

    const created = await Country.create({
      country,
      iso_code,
      confederation,
      is_host,
      is_debut_2026,
      tournament_status_2026,
    })

    res.status(201).json(created)
  } catch (error) {
    console.log(error)
  }
}

async function updateCountry(req, res) {
  try {
    const { id } = req.params
    const foundCountry = await Country.findById(id)

    if (!foundCountry) {
      res.status(500).json({ message: "Country does not exist" })
    }

    const updateCountry = await Country.findByIdAndUpdate(id, req.body, {
      //   runValidators: true,
      returnDocument: "after",
    }) // if using this approach, ignore all below

    // const {
    //   country,
    //   iso_code,
    //   confederation,
    //   is_host,
    //   is_debut_2026,
    //   tournament_status_2026,
    // } = req.body

    // const toUpdate = {
    //   country,
    //   iso_code,
    //   confederation,
    //   is_host,
    //   is_debut_2026,
    //   tournament_status_2026,
    // }

    // for (let key in toUpdate) {
    //   if (toUpdate[key] !== "undefined") {
    //     foundCountry[key] = toUpdate[key]
    //   }
    // }

    // foundCountry.save()

    res.status(200).json({ message: "country updated!", foundCountry })
  } catch (error) {
    console.log(error)
  }
}

async function deleteCountry(req, res) {
  try {
    const { id } = req.params
    const deleted = await Country.findByIdAndDelete(id)
    res.status(200).json({ message: "country deleted succesfuly" })
  } catch (error) {
    console.log(error)
  }
}

export { getCountries, getCountry, createCountry, updateCountry, deleteCountry }
