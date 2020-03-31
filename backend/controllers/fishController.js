import mongoose from 'mongoose';
import fishSchema from '../models/fishModel';

const Fish = mongoose.model('Fish', fishSchema);

export const getAll = async (req, res) => {
  const fishs = await Fish.find();
  res.json(fishs);
};

export const add = async (req, res) => {
  try {
    const fish = new Fish(req.body);
    await fish.save();
    return res.send(fish);
  } catch (err) {
    return res.send(err);
  }
};

export const deleteFish = async (req, res) => {
  Fish.remove({ _id: req.params.id }, err => {
    if (err) {
      res.send('an error occured while trying to delete fish');
    }
    res.send('Le poisson a ete supprimé !');
  });
};
