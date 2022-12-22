import User from "../model/User.js";
import Post from "../model/Post.js";

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

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.send({
      data: posts,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).send({
      status: "complete",
      data: req.body,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).send({
      status: "complete",
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
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

export const postById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    res.status(200).send({
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
    });
  }
};


export const removeUser = async(req, res) => {
    try {
        const id = req.params;
        const user = await User.deleteOne(id)
        res.status(200).send({
            success: "succesfully removed",
            data: id
        })
    } catch (error) {
        res.status(400).send({
            success:"failed",
            data: error.message
        });
    };
};



export const removePost = async(req, res) => {
    try {
        const id = req.params;
        const post = await Post.deleteOne(id)
        res.status(200).send({
            success: "succesfully removed",
            data: id
        })
    } catch (error) {
        res.status(400).send({
            success:"failed",
            data: error.message
        });
    };
};



export const updateUser = async(req, res) =>{
    try {
       const {id} = req.params;
       const user = await User.findByIdAndUpdate({_id:id}, req.body);
       res.status(200).send({
        success: true,
        data: req.body
       })
    } catch (error) {
        res.status(400).send({
            success: false,
            data: error.message
        })
    }
}




export const updatePost = async(req, res) =>{
    try {
       const {id} = req.params;
       const post = await Post.findByIdAndUpdate({_id:id}, req.body);
       res.status(200).send({
        success: true,
        data: req.body
       })
    } catch (error) {
        res.status(400).send({
            success: false,
            data: error.message
        })
    }
}
