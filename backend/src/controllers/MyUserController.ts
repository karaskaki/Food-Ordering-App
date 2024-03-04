import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1: Check if user exist
  // 2: Create the user if it doesn't exist
  // 3: return the user object to the calling client

  try {
    const { auth0Id } = req.body;

    if (!auth0Id) {
      return res.status(403).send({
        success: false,
        message: "Auth0Id not found",
      });
    }

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).send();
    }

    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in creating User",
    });
  }
};

export default {
  createCurrentUser,
};
