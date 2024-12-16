// CRUD operaties
const bcrypt = require("bcrypt");

const prisma = require("../config/prisma");
const { validationResult } = require("express-validator");

const UsersController = {
  getAllUsers: async (req, res) => {
    try {
      // SELECT id, firstName, lastName, email FROM users
      const users = await prisma.user.findMany({
        // INCLUDE EN SELECT NIET SAMEN GEBRUIKEN
        // include: {
        //   profile: true,
        // },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          profile: {
            select: {
              id: true,
              bio: true,
            },
          },
        },
        orderBy: {
          email: "desc",
        },
      });
      res.json(users);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getUserById: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }

      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          id: Number.parseInt(id),
          //   Kan ook op deze manier
          // id: +id
        },
      });

      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createUser: async (req, res) => {
    // Na validatie

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const user = req.body;

    try {
      const hashedPassword = await bcrypt.hash(user.password, 12);

      const newUser = await prisma.user.create({
        data: { ...user, password: hashedPassword },
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  updateUser: async (req, res) => {
    // Na Validatie
    const user = req.body;
    const { id } = req.params;

    try {
      const updatedUser = await prisma.user.update({
        data: user,
        where: {
          id: +id,
        },
      });

      res.json(updatedUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  deleteUser: async (req, res) => {
    // Na validatie
    const { id } = req.params;

    try {
      await prisma.user.delete({
        where: {
          id: +id,
        },
      });

      res.sendStatus(204);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = UsersController;
