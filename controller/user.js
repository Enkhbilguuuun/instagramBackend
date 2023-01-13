import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.send({
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const userLogIn = async (req, res) => {
try {
  const {email, password} = req.body;
  const user = await User.findOne({
    email : email
  });
  if(user){
    if(user.password !== password){
      throw new Error("email or pass is wrong");
    }
    res.status(200).send({
      data: "amjilttai nevterlee",
    });
  }else {
    res.status(400).send({
      data:"user not found"
    });
  }
} catch (error) {
  res.status(400).send({
    success:false,
    data:error.message
  })
}
}

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).send({
      status: "complete",
      data: req.body,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const userById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const removeUser = async (req, res) => {
  try {
    const id = req.params;
    const user = await User.deleteOne(id);
    res.status(200).send({
      success: "succesfully removed",
      data: id,
    });
  } catch (error) {
    res.status(400).send({
      success: "failed",
      data: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
