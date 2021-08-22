const { Pet } = require('../models/pet.model');

    const createPet = (req, res) => {
    const { name, type, description, skill1, skill2, skill3} = req.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
}

    const getAll = (req, res) => {
    Pet.find({}).sort("type").exec()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

    const getOne = (req, res) => {
    Pet.findOne({ _id: req.params._id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

    const updateObject = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then( () => res.json({msg: "My pet has been updated!"}))
        .catch(err => res.json(err));
}

    const deleteObject = (req, res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}


    const likePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params._id},
        {$inc: {likes: 1}}

    )
        .then(() => res.json({msg: "massive win"}))
        .catch(err => res.json(err));
    }

    module.exports = {
        createPet,
        getAll,
        getOne,
        updateObject,
        deleteObject,
        likePet
    };